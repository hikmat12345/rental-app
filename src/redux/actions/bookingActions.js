export const setBookingDetails = bookingObj => async dispatch => {
  try {
    dispatch({
      type: "SET_BOOKING_DETAIL",
      payload: bookingObj,
    });
    console.log("bookingObj", bookingObj);
  } catch (err) {
    console.log(err);
  }
};
export const updateBookingAdult = adults => async dispatch => {
  try {
    dispatch({
      type: "EDIT_ADULT",
      payload: adults,
    });
  } catch (err) {
    console.log(err);
  }
};
export const updateBookingChilds = child => async dispatch => {
  try {
    dispatch({
      type: "EDIT_CHILDS",
      payload: child,
    });
  } catch (err) {
    console.log(err);
  }
};
export const updateBookingtaxesTAF = taxesObj => async dispatch => {
  try {
    dispatch({
      type: "EDIT_TAXES_TAF",
      payload: taxesObj,
    });
  } catch (err) {
    console.log(err);
  }
};
export const updateBookingtaxesAOA = taxesObj => async dispatch => {
  try {
    dispatch({
      type: "EDIT_TAXES_AOA",
      payload: taxesObj,
    });
  } catch (err) {
    console.log(err);
  }
};
export const updateBookingtext_price = text_price_tem => async dispatch => {
  try {
    dispatch({
      type: "EDIT_TEXT_PRICE",
      payload: text_price_tem,
    });
  } catch (err) {
    console.log(err);
  }
};
export const updateBookingtotalTaxesAndfeeOAO =
  text_price_temp => async dispatch => {
    try {
      dispatch({
        type: "EDIT_TEXT_PRICE_OAO",
        payload: text_price_temp,
      });
    } catch (err) {
      console.log(err);
    }
  };
export const updateTotalDays = totalInDays => async dispatch => {
  try {
    dispatch({
      type: "EDIT_TOTAL_DAYS",
      payload: totalInDays,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateStartDate = newStartDate => async dispatch => {
  try {
    dispatch({
      type: "EDIT_START_DATE",
      payload: newStartDate,
    });
  } catch (err) {
    console.log(err);
  }
};
export const updateEndDate = newEndDate => async dispatch => {
  try {
    dispatch({
      type: "EDIT_END_DATE",
      payload: newEndDate,
    });
  } catch (err) {
    console.log(err);
  }
};
export const updateBookingTaxesAndOthersReset = obj => async dispatch => {
  try {
    console.log("bookingObj states updateBookingTaxesAndOthersReset obj", obj);
    dispatch({
      type: "RESET_TAXES",
      payload: obj,
    });
  } catch (err) {
    console.log(err);
  }
};
