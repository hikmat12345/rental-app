const INITIAL_STATE = {
  initailWaterActivity_id: "452",
};

const waterActivityReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "Set_ID": {
      console.log("states initailWaterActivity_id", state);
      return {
        ...state,
        initailWaterActivity_id: action.payload,
      };
    }
    default:
      return state;
  }
};

export default waterActivityReducer;
