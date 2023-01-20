import { Grid } from '@material-ui/core';
import Modal from 'react-modal';
import React, { useEffect, useState } from 'react';
import AddPayoutMethod from './components/AddPayoutMethod';
import PayoutMethod from './components/PayoutMethod';
import PayoutAccountInfo from './components/PayoutAccountInfo';
import PayoutMethodAddress from './components/PayoutMethodAddress';
import PayoutAddAddress from './components/PayoutAddAddress';
import bank_check from '../assets/bank_check.png';
import bank_saving from '../assets/bank_saving.png';
import opt_icon from '../assets/opt_icon.png';
import modal_blue_check from '../assets/modal_blue_check.png';
import csc from 'country-state-city';
import './paymentpayout.css';
export default function PayoutMethods({ setPayoutInfo }) {
  const [index, setIndex] = useState(0);
  const [addPayoutMethod, setAddPayoutMethod] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCountryCode, setSelectedCountryCode] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedStateCode, setSelectedStateCode] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [payoutsubmit, setPayoutSubmit] = useState(false);
  const [countryList, setCountryList] = useState(csc.getAllCountries());
  const [stateList, setStateList] = useState();
  const [cityList, setCityList] = useState();
  const [addNewAddress, setAddNewAddress] = useState(false);
  const [addressIndex, setAddressIndex] = useState(0);

  const handleCheckChange = () => {};

  useEffect(() => {
    setSelectedCountry(csc.getCountryByCode(selectedCountryCode).name);
    if (selectedCountryCode) {
      setStateList(csc.getStatesOfCountry(selectedCountryCode));
    }
    if (selectedStateCode) {
      setSelectedState(
        stateList.find((o) => o.isoCode === selectedStateCode).name
      );
    }
    if (selectedStateCode && selectedCountryCode) {
      setCityList(csc.getCitiesOfState(selectedCountryCode, selectedStateCode));
    }
    console.log(selectedState);
  }, [selectedCountryCode, selectedStateCode]);

  return (
    <>
      {!addPayoutMethod ? (
        <PayoutMethod
          setAddPayoutMethod={setAddPayoutMethod}
          bank_check={bank_check}
          bank_saving={bank_saving}
          opt_icon={opt_icon}
        />
      ) : index === 0 ? (
        <AddPayoutMethod
          index={index}
          setIndex={setIndex}
          setAddPayoutMethod={setAddPayoutMethod}
          setSelectedCountryCode={setSelectedCountryCode}
          countryList={countryList}
          handleCheckChange={handleCheckChange}
        />
      ) : index === 1 ? (
        <PayoutAccountInfo index={index} setIndex={setIndex} />
      ) : index === 2 ? (
        !addNewAddress ? (
          <PayoutMethodAddress
            index={index}
            setIndex={setIndex}
            setAddNewAddress={setAddNewAddress}
            addressIndex={addressIndex}
            setAddressIndex={setAddressIndex}
          />
        ) : (
          <PayoutAddAddress
            setSelectedCity={setSelectedCity}
            cityList={cityList}
            stateList={stateList}
            setSelectedStateCode={setSelectedStateCode}
            setAddNewAddress={setAddNewAddress}
          />
        )
      ) : index === 3 ? (
        setPayoutInfo(true)
      ) : null}

      <Modal isOpen={payoutsubmit}>
        <div className='col-md-7  mx-auto mt-5'>
          <div
            className='modal-payout-container'
            style={{ textAlign: 'center' }}
          >
            <img src={modal_blue_check} />
            <h5 className='head'>Thanks for adding your payout method</h5>
            <p className='head'>
              Now we’re making sure your payout method info is correct. You’ll
              get an email with a status update in the next 2 days.
            </p>
            <button className='btn-done' onClick={() => setPayoutSubmit(true)}>
              done
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
