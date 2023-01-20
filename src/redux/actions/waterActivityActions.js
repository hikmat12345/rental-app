export const set_waterActivity_ID = _id => async dispatch => {
  try {
    dispatch({
      type: "Set_ID",
      payload: _id,
    });
  } catch (err) {
    console.log(err);
  }
};
