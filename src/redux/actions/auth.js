import axiosInstance from '../../config/axios'
import errorHandler from '../../config/errorHandler'

export const tokenVerifier=(data)=>{
    const axios=axiosInstance()
    return async(dispatch)=>{
        await axios.post('/api/token/verify',data)
        .then(({data})=>{
            dispatch({
                type:'Login',
                payload:data.userDetails
            })
        })
        .catch((error)=>{
            if(!error.response){
                errorHandler(503,dispatch)
            } else{
                errorHandler(error.response.status,dispatch)
            }
        })
    }
}

export const sendVerificationCode=(data)=>{
    const axios=axiosInstance()
    return async(dispatch)=>{
        await axios.post('/api/contact/verify',data)
        .then(({data})=>{
           console.log(data)
        })
        .catch((error)=>{
            if(!error.response){
                errorHandler(503,dispatch)
            } else{
                errorHandler(error.response.status,dispatch)
            }
        })
    }
}
export const verifyPhoneNumber=(data)=>{
    const axios=axiosInstance()
    return async(dispatch)=>{
        await axios.post('/api/contact/verify',data)
        .then(({data})=>{
            localStorage.setItem('waterpin',data.token)
            dispatch({
                type:'Login',
                payload:data.userDetails
            })
        })
        .catch((error)=>{
            if(!error.response){
                errorHandler(503,dispatch)
            } else{
                errorHandler(error.response.status,dispatch)
            }
        })
    }
}
export const phoneSignup=(data)=>{
    const axios=axiosInstance()
    return async(dispatch)=>{
        axios.post('/api/signup/phone',data)
        .then(async({data})=>{
            localStorage.setItem('waterpin',data.token)
            dispatch({
                type:'PhoneSignedUp',
                payload:data.phoneSignedupUser
            })
        })
        .catch((error)=>{
            if(!error.response){
                errorHandler(503,dispatch)
            } else{
                errorHandler(error.response.status,dispatch)
            }
        })
    }
}
export const googleSignup=(data)=>{
    const axios=axiosInstance()
    return async(dispatch)=>{
        await axios.post('/api/signup/google',data)
        .then(({data})=>{
            localStorage.setItem('waterpin',data.token)
            dispatch({
                type:'Login',
                payload:data.userDetails
            })
        })
        .catch((error)=>{
            if(!error.response){
                errorHandler(503,dispatch)
            } else{
                errorHandler(error.response.status,dispatch)
            }
        })
    }
}

export const facebookSignup=(accessToken,userID)=>{
    const axios=axiosInstance()
    return async(dispatch)=>{
        await axios.post('/api/signup/facebook',{accessToken,userID})
        .then(({data})=>{
            localStorage.setItem('waterpin',data.token)
            dispatch({
                type:'Login',
                payload:data.userDetails
            })
        })
        .catch((error)=>{
            if(!error.response){
                errorHandler(503,dispatch)
            } else{
                errorHandler(error.response.status,dispatch)
            }
        })
    }
}
export const phoneLogin=(data)=>{
    const axios=axiosInstance()
    return async(dispatch)=>{
        axios.post('/api/login/phone',data)
        .then(async({data})=>{
            localStorage.setItem('waterpin',data.token)
            dispatch({
                type:'Login',
                payload:data.userDetails
            })
        })
        .catch((error)=>{
            if(!error.response){
                errorHandler(503,dispatch)
            } else{
                errorHandler(error.response.status,dispatch)
            }
        })
    }
}
export const googleLogin=(data)=>{
    const axios=axiosInstance()
    return async(dispatch)=>{
        await axios.post('/api/login/google',data)
        .then(({data})=>{
            localStorage.setItem('waterpin',data.token)
            dispatch({
                type:'Login',
                payload:data.userDetails
            })
        })
        .catch((error)=>{
            if(!error.response){
                errorHandler(503,dispatch)
            } else{
                errorHandler(error.response.status,dispatch)
            }
        })
    }
}

export const facebookLogin=(accessToken,userID)=>{
    const axios=axiosInstance()
    return async(dispatch)=>{
        await axios.post('/api/login/facebook',{accessToken,userID})
        .then(({data})=>{
            localStorage.setItem('waterpin',data.token)
            dispatch({
                type:'Login',
                payload:data.userDetails
            })
        })
        .catch((error)=>{
            if(!error.response){
                errorHandler(503,dispatch)
            } else{
                errorHandler(error.response.status,dispatch)
            }
        })
    }
}
// export const clearPhoneSignedupUser=()=>{
//     return async(dispatch)=>{
//         dispatch({

//         })
//     }
// }
