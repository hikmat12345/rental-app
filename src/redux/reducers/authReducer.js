const initialState = {
  userDetails: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case "Login":
        return {
          ...state,
          userDetails: action.payload
        }
      case "Logout":
        return {
          ...state,
          userDetails: null,
        }
      default:
        return state
    }
  }
  export default authReducer