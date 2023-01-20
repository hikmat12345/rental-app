const initialState={
    phoneSignedupUser:null,
    emailSignedUpUser:null
}
const phoneEmailVerify=(state=initialState,action)=>{
    switch(action.type){
        case 'PhoneSignedUp':
            return {...state,phoneSignedupUser:action.payload}
        case 'EmailSignedUp':
            return {...state, emailSignedUpUser:action.payload}
        default:
            return state
    }
}
export default phoneEmailVerify