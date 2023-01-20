import { base_Url } from "../../overnighStay/API/api";
export async function getUserInformation(token) {
    try {
        let prop = await fetch(base_Url + "api/user/get", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${token}`,
            },
        });
        let result = await prop.json();
        prop = null;
        return result.response[0];
    } catch (error) {
        console.log(error);
    }
}
export async function updateUserInformation(token,userDetails) {
    try {
        let prop = await fetch(base_Url + "api/user/update", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${token}`,
            },
            body: JSON.stringify({
                userDetails
            }),
        });
        let result = await prop.json();
        prop = null;
        return result.response[0];
    } catch (error) {
        console.log(error);
    }
}
export async function inviteFriendsApiFun(token, emailOrPhone) {
    try {
        let inviteVar = await fetch(base_Url + "api/user/invite-friend", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `${token}`
            },
            body: JSON.stringify(
                {
                    email: emailOrPhone
                }
            )
        })
        let getres = await inviteVar.json()
        return getres
    } catch (e) {
        console.log(e.message)
    }
}

export async function userGet(token) {
    try {
        let inviteVar = await fetch(base_Url + "api/user/get", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `${token}`
            }
        })
        let getres = await inviteVar.json()
        return getres
    } catch (e) {
        console.log(e.message)
    }
}

export async function setTwoAuthTurnOnAPI(token, smsTwoSAuth, emailTwoSAuth) {
    try {
        let getdetail = sessionStorage.getItem("logindetail");
        let sessionToPars = JSON.parse(getdetail);
        const { email, emailTwoStepAuth, firstName, id, lastName, phoneNumber, phoneSignup, twoStepAuth } = sessionToPars
        let verificationEP = await fetch(base_Url + "api/user/update", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `${token}`
            },
            body: JSON.stringify({
                "userDetails": {
                    "id": id,
                    "twoStepAuth": smsTwoSAuth,
                    "emailTwoStepAuth": emailTwoSAuth,
                }
            })
        })
        let getres = await verificationEP.json()
        return getres
    } catch (e) {
        console.log(e.message)
    }
}

export async function updateAfterVerCOde(token, data) {
    try {
        let getdetail = sessionStorage.getItem("logindetail");
        let sessionToPars = JSON.parse(getdetail);
        const { email, emailTwoStepAuth, firstName, id, lastName, phoneNumber, phoneSignup, twoStepAuth } = sessionToPars
        let verificationEP = await fetch(base_Url + "api/user/update", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `${token}`
            },

            body: JSON.stringify({
                "userDetails": {
                    "id": id,
                    "verified": data,
                }
            })
        })
        let getres = await verificationEP.json()
        return getres
    } catch (e) {
        console.log(e.message)
    }
}
export async function updatePass(token_char, currentPass, newPassword) {
    try {
        let upPass = await fetch(base_Url + "api/user/update-password", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `${token_char}`
            },
            body: JSON.stringify(
                {
                    currentPassword: currentPass,
                    newPassword: newPassword
                }
            )
        })
        let upPassRet = await upPass.json()
        return upPassRet
    } catch (e) {
        console.log(e.message)
    }
}

// insert card of payment method of user
export async function createPaymentMethodCard( 
        pcardNumber,
        pcardExpMonth,
        pcardExpYear,
        pcardCVC,
        pcardName,
        ppostal_code,
    ) {
        let getdetail = sessionStorage.getItem("logindetail");
            let sessionToPars = JSON.parse(getdetail);
            const { email, emailTwoStepAuth, firstName, id, lastName, phoneNumber, phoneSignup, twoStepAuth } = sessionToPars
            let token = sessionStorage.getItem("loginToken");
            try { let getapiRes= await fetch(base_Url+"api/stripe/createUser",{
                        method: "POST",
                        headers :{
                            "Content-Type":"application/json",
                            Authorization: `${token}`
                            } ,
                        body: JSON.stringify({
                            cardInfo: {
                            cardNumber: pcardNumber,
                            cardExpMonth: pcardExpMonth,
                            renter_lastName: firstName,
                            cardExpYear: pcardExpYear,
                            cardCVC: pcardCVC,
                            cardName: pcardName,
                            country: "Pakistan",
                            postal_code: ppostal_code,
                            userId: id
                        }
                     })
                 })
              let resOfApi= await getapiRes.json()
              return resOfApi
         }catch(e){
             console.log(e.message)
         }
 }
// get user payment details
export async function paymentOfUserList( ) {
    let getdetail = sessionStorage.getItem("logindetail");
    let sessionToPars = JSON.parse(getdetail);
    const { email, emailTwoStepAuth, firstName, id, lastName, phoneNumber, phoneSignup, twoStepAuth } = sessionToPars
    let token = sessionStorage.getItem("loginToken");
        try { 
        let getResOfApi= await fetch(base_Url+"api/stripe/getDetails",{
            method: "POST",
            headers :{
                "Content-Type":"application/json",
                Authorization: `${token}`
                },
            body: JSON.stringify({
                    userId: id
                    })
            })
          let letTakeRes= await getResOfApi.json()
           console.log("sdfsadf",letTakeRes)
          return letTakeRes
         
     }catch(e){
         console.log(e.message)
     }
}
// get user detail for gtting status
export async function getUserDetail(token) {
   
   try { let getapiRes= await fetch(base_Url+"api/user/get",{
             method: "POST",
             headers :{
                "Content-Type":"application/json",
                Authorization: `${token}`
                }
             })
             let resOfApi= await getapiRes.json()
             return resOfApi
        }catch(e){
            console.log(e.message)
        }
}

export async function uploadImageApi(filePath ){
    let token = sessionStorage.getItem("loginToken");
    try{ 
        let getImage= await fetch(base_Url+'upload/image',{
        method:"POST",
        headers:{
            "Content-Type":'multipart/form-data',
            Authorization: `${token}`
        },
        body: JSON.stringify({
             file: {
                path: `${filePath}`,
                fileName: `rtyt`
             }
          })
      })
       return getImage
    }catch(e){
        console.log(e.message)
    }

}

// payout bank information details
export async function payoutApiFunct(
    owner_id,
    region,
    payout_methods,
    bank_account_type,
    account_holder_name,
    routing_number,
    account_number,
    confirm_account_number,
    payout_method_address,
    street_address,
    apt_suite_Bldg,
    city,
    state_province,
    zipcode_postal_code,
    country_region,
    default_payment,
 ) {
    let getdetail = sessionStorage.getItem("logindetail");
    let sessionToPars = JSON.parse(getdetail);
    const { email, emailTwoStepAuth, firstName, id, lastName, phoneNumber, phoneSignup, twoStepAuth } = sessionToPars
    let token = sessionStorage.getItem("loginToken");
        try { 
        let getResOfApi= await fetch(base_Url+"/api/stripe/makePayout",{
            method: "POST",
            headers :{
                "Content-Type":"application/json",
                Authorization: `${token}`
                },
            body: JSON.stringify({
                    owner_id:owner_id,
                    region:`${region}`,
                    payout_methods:`${payout_methods}`,
                    bank_account_type:`${bank_account_type}`,
                    account_holder_name:`${account_holder_name}`,
                    routing_number:routing_number,
                    account_number:account_number,
                    confirm_account_number:confirm_account_number,
                    payout_method_address:`${payout_method_address}`,
                    street_address:`${street_address}`,
                    apt_suite_Bldg:`${apt_suite_Bldg}`,
                    city:`${city}`,
                    state_province:`${state_province}`,
                    zipcode_postal_code:`${zipcode_postal_code}`,
                    country_region:`${country_region}`,
                    default_payment:`${default_payment}`,
                 })
            })
          let letTakeRes= await getResOfApi.json()
           console.log("sdfsadf",letTakeRes)
          return letTakeRes
         
     }catch(e){
         console.log(e.message)
     }
}



export async function getAllNotification(token) {
    try {
        let prop = await fetch(base_Url + "api/user/notification/get", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${token}`,
            },
        });
        let result = await prop.json();
        prop = null;
        return result;
    } catch (error) {
        console.log(error);
    }
}
export async function updateNotification(token,updateNotifications) {
    try {
        let prop = await fetch(base_Url + "api/user/notification/update", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${token}`,
            },
            body: JSON.stringify({
                notifications: updateNotifications
            }),
        });
        let result = await prop.json();
        prop = null;
        return result;
    } catch (error) {
        console.log(error);
    }
}