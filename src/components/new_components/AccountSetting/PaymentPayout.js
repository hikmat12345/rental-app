import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import PaymentTabNavBar from './components/PaymentTabNavBar';
import PaymentMethods from './PaymentMethods';
import PayoutMethods from './PayoutMethods';
import PaypalMethod from './PaypalMethod';
import ConfirmPayoutInfo from './components/ConfirmPayoutInfo';
// import SwipeableViews from 'react-swipeable-views';
import './paymentpayout.css';
export default function PaymentPayout() {
  const [paymentTab, setPaymentTab] = useState(true);
  const [payoutTab, setPayoutTab] = useState(false);
  const [paypalConnect, setPaypalConnect] = useState(false);
  const [payoutInfo, setPayoutInfo] = useState(false);
  const [payoutSubmit, setPayoutSubmit] = useState(false);
  const handleChange = (first, second) => {
    setPaymentTab(first);
    setPayoutTab(second);
  };

  return (
    <>
      {!paypalConnect && !payoutInfo ? (
        <div className='option-details'>
          <PaymentTabNavBar
            paymentTab={paymentTab}
             payoutTab={payoutTab}
            handleChange={handleChange}
          />

          {/* <PaymentMethods /> */}
         {paymentTab ? (
            <PaymentMethods />
          ) : (
            <PayoutMethods
              paypalConnect={paypalConnect}
              setPaypalConnect={setPaypalConnect}
              payoutInfo={payoutInfo}
              setPayoutInfo={setPayoutInfo}
            />
          )}
        </div>
      ) : null}
      {paypalConnect ? (
        <PaypalMethod
          paypalConnect={paypalConnect}
          setPaypalConnect={setPaypalConnect}
        />
      ) : null}
      {payoutInfo ? (
        <ConfirmPayoutInfo
          payoutInfo={payoutInfo}
          setPayoutInfo={setPayoutInfo}
          setPayoutSubmit={setPayoutSubmit}
        />
      ) : null}
    </>
  );
}
