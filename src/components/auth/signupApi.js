import { base_Url } from "../new_components/overnighStay/API/api"


export default async function phoneSignUp(
  firstName,
  lastName,
  email,
  password,
  phoneNumber,
  countryCode,
  phoneSignup) {
  try {
    let phoneApiPost = await fetch(base_Url + "api/signup/phone", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "firstName": email,
        "lastName": password,
        "email": phoneSignup,
        "password": countryCode,
        "phoneNumber": firstName,
        "countryCode": lastName,
        "phoneSignup": phoneNumber
      })
    })
    let userAdd = await phoneApiPost.json();
    return userAdd
  } catch (error) {
    console.log(error)
  }
}

// google signup 
export async function googleSignupApiFunc(idTokenPara) {
  try {
    let googleGetData = await fetch(base_Url + "api/signup/google", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        idToken: idTokenPara
      })
    })
    let getGoogleRes = await googleGetData.json();
    return getGoogleRes
  } catch (error) {
    console.log(error)
  }
}

export async function verifyCodeApiFun(sixDCode) {
  try {
    let getdetail = sessionStorage.getItem("logindetail");
    let sessionToPars = JSON.parse(getdetail);
    let getUid = sessionToPars.id
    let verfcation = await fetch(base_Url + "api/login/verifycode", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({

        id: `${getUid}`,
        code: `${sixDCode}`

      })
    })
    let verficationRes = await verfcation.json();
    return verficationRes
  } catch (error) {
    console.log(error.message)
  }
}

export async function sendVerification(idCode) {
  try {
    let verfcation = await fetch(base_Url + "api/login/sendverificationcode", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: idCode
      })
    })
    let verficationRes = await verfcation.json();
    return verficationRes
  } catch (error) {
    console.log(error.message)
  }
}

