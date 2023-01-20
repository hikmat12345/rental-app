const errorHandler=(status,dispatch)=>{
    if(status===500){
        return dispatch({
            type:'NetworkError',
            payload:'Network error occured. Please try again.'
        })
    }if(status===503){
        return dispatch({
            type:'ServiceUnavailable',
            payload:'Service unavailable. Please try again.'
        })
    }if(status===401){
        return dispatch({
            type:'AuthorizationError',
            payload:'Unauthorized Access.'
        })
    }if(status===452){
        dispatch({
            type:'UserExists',
            payload:'User already exists.'
        })
    }if(status===453){
        dispatch({
            type:'TokenVerificationError',
            payload:'Token verification error.'
        })
    }if(status===454){
        dispatch({
            type:'InvalidPassword',
            payload:'Invalid password.'
        })
    }
    if(status===455){
        dispatch({
            type:'phoneNumberVerificationError',
            payload:"Phone number verification failed."
        })
    }if(status===456){
        dispatch({
            type:'NoUser',
            payload:"The user doesn't exist."
        })
    }
}
export default errorHandler