import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import AddNewCard from './components/AddNewCard';
import PaymentMethod from './components/PaymentMethods';
import master from '../assets/master.png';
import opt_icon from '../assets/opt_icon.png';
import './paymentpayout.css';
import {createPaymentMethodCard, paymentOfUserList} from './Api/acc_apis'
import swal from 'sweetalert';
import CircularProgress from '@material-ui/core/CircularProgress';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function PaymentMethods() {
  const [addPaymentMethod, setAddPaymentMethod] = useState(false);
  const [monthSelect, setMonthSelect] = useState(Array(1, 13));
  const [yearSelect, setYearSelect] = useState(Array(2020, 2071));
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [cardNumber, setCardNumber] = useState();
  const [cardName, setCardName] = useState('');
  const [cardZip, setCardZip] = useState();
  const [cardCVV, setCardCVV] = useState();
  const [getCards, setLoadCard] = useState(true)
  const [goalLoader, setGoalLoader] = useState(false)
  const [cardList, setCardLst] = useState([
    { type: 'cardname', lastFour: '1954', expire: '10/2020', default: true },
  ]);
//  set load cards of payment
 useEffect( async ()=>{
  await paymentOfUserList().then((letRes)=>{
    console.log("get card of user", letRes)
    if(letRes){
      setCardLst(letRes)
    }
  })
 }, [getCards])
  function Array(s, n) {
    var a = [];
    for (var i = s; i < n; i++) {
      a.push(i);
    }
    return a;
  }
  // submit form 
  const submitForm=()=>{
    setGoalLoader(true)
    createPaymentMethodCard(
      cardNumber,
      month,
      year,
      cardCVV,
      cardName,
      cardZip).then( (res)=>{
         setGoalLoader(false)
        if(res.Error== "Please Provide All Necessary Details to save the card"){ 
          toast.error('Please Provide All Necessary Details', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          paymentOfUserList().then((letRes)=>{
            console.log("get card of user", letRes)
            if(letRes){
              setCardLst(letRes)
            }
          })
         }
          
         else if (res.stripeUserId ){
          toast.success('Your payment method added successfuly.', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            })
            setAddPaymentMethod(false)
            
         }

    
          // if (res.error.errno==1062){
          //       toast.error('Your payment method is already exist', {
          //         position: "bottom-right",
          //         autoClose: 5000,
          //         hideProgressBar: false,
          //         closeOnClick: true,
          //         pauseOnHover: true,
          //         draggable: true,
          //         progress: undefined,
          //       }); 
          //   }
          
       })
       
  }
  return (
    <>
      {addPaymentMethod ? (
        <AddNewCard
          handleChange={setAddPaymentMethod}
          monthSelect={monthSelect}
          yearSelect={yearSelect}
          cardName={cardName}
          cardNumber={cardNumber}
          cardCVV={cardCVV}
          cardZip={cardZip}
          setCardName={setCardName}
          setCardNumber={setCardNumber}
          setCardCVV={setCardCVV}
          setCardZip={setCardZip}
          month={month}
          year={year}
          setMonth={setMonth}
          setYear={setYear}
          progressLoader={goalLoader ? <CircularProgress /> : ""}
          handleSubmit={submitForm}
        /> 
      ) : (
        <> 
          <PaymentMethod
            master={master}
            opt_icon={opt_icon}
            cardList={cardList}
          />

          <div className='float-right'>
            <button
              className='add-method-btn'
              onClick={() => setAddPaymentMethod(true)}
            >
              Add Payment Method
            </button>
          </div>
         
        </>
      )}
      <ToastContainer/>
    </>
  );
}
