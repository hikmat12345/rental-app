import UserInfoService from "../services/UserInfoService";
export const personalInfoGet = () => async (dispatch, getState) => {
  try {
    const res = await UserInfoService.getAll();
    dispatch({
      type: "GET_USERINFO",
      payload: res.data.response[0],
    });
    console.log("sdjaddakdasda", getState().personalInfoReducer);
  } catch (err) {
    console.log(err);
  }
};
export const updatePersonalInfo = data => async dispatch => {
  try {
    const res = await UserInfoService.updateUserInfo(data);
    dispatch({
      type: "UPDATE_USERINFO",
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const allNotifications = () => async dispatch => {
  try {
    const res = await UserInfoService.getAllNotifications();
    dispatch({
      type: "GET_ALL_NOTIFICATION",
      payload: res.data.response[0],
    });
  } catch (err) {
    console.log(err);
  }
};
export const updateNotification = data => async dispatch => {
  try {
    const res = await UserInfoService.updateNotificationService(data);
    dispatch({
      type: "UPDATE_NOTIFICATION",
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const updatePassword = data => async dispatch => {
  try {
    const res = await UserInfoService.updatePassword(data);
    dispatch({
      type: "UPDATE_PASSWORD",
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const inviteFriends = data => async dispatch => {
  try {
    const res = await UserInfoService.inviteFriend(data);
    dispatch({
      type: "UPDATE_PASSWORD",
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
