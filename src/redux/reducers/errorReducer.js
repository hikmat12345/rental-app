const initialState={
    networkError:null,
    authorizationError:null,
    userExistsError:null,
    tokenVerificationError:null,
    tokenExpiredError:null,
    serviceUnavailable:null,
    phoneNumberVerificationError:null,
    noUser:null,
    invalidPassword:null
}
const errorReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'NetworkError':
            return {...state, networkError:action.payload,authorizationError:null,userExistsError:null,tokenVerificationError:null,tokenExpiredError:null,serviceUnavailable:null,phoneNumberVerificationError:null,noUser:null,invalidPassword:null}
        case 'ServiceUnavailable':
            return {...state, serviceUnavailable:action.payload,networkError:action.payload,authorizationError:null,userExistsError:null,tokenVerificationError:null,tokenExpiredError:null,phoneNumberVerificationError:null,noUser:null,invalidPassword:null}
        case 'AuthorizationError':
            return {...state,authorizationError:action.payload,networkError:action.payload,userExistsError:null,tokenVerificationError:null,tokenExpiredError:null,serviceUnavailable:null,phoneNumberVerificationError:null,noUser:null,invalidPassword:null}
        case 'UserExists':
            return {...state,userExistsError:action.payload,networkError:action.payload,authorizationError:null,tokenVerificationError:null,tokenExpiredError:null,serviceUnavailable:null,phoneNumberVerificationError:null,noUser:null,invalidPassword:null}
        case 'TokenVerificationError':
            return {...state,tokenVerificationError:action.payload,networkError:action.payload,authorizationError:null,userExistsError:null,tokenExpiredError:null,serviceUnavailable:null,phoneNumberVerificationError:null,noUser:null,invalidPassword:null}
        case 'phoneNumberVerificationError':
            return {...state,phoneNumberVerificationError:action.payload,networkError:action.payload,authorizationError:null,userExistsError:null,tokenVerificationError:null,tokenExpiredError:null,serviceUnavailable:null,noUser:null,invalidPassword:null}
        case 'NoUser':
            return {...state,noUser:action.payload,networkError:action.payload,authorizationError:null,userExistsError:null,tokenVerificationError:null,tokenExpiredError:null,serviceUnavailable:null,phoneNumberVerificationError:null,invalidPassword:null}
        case 'InvalidPassword':
            return {...state,invalidPassword:action.payload,networkError:action.payload,authorizationError:null,userExistsError:null,tokenVerificationError:null,tokenExpiredError:null,serviceUnavailable:null,phoneNumberVerificationError:null,noUser:null}
        case 'TokenExpired':
            return {...state,tokenExpiredError:action.payload,networkError:action.payload,authorizationError:null,userExistsError:null,tokenVerificationError:null,serviceUnavailable:null,phoneNumberVerificationError:null,noUser:null,invalidPassword:null}
        default:
            return state
    }
}
export default errorReducer