const initialState = [];

function personalInfo(userInfoData = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case "GET_USERINFO":
            return payload;

        case "GET_ALL_NOTIFICATION":
            return payload;

        case "UPDATE_USERINFO":
            return userInfoData.map((userInfo) => {
                if (userInfo.id === payload.id) {
                    return {
                        ...userInfo,
                        ...payload,
                    };
                } else {
                    return userInfo;
                }
            });
        case "UPDATE_NOTIFICATION":
            return userInfoData;
        case "UPDATE_PASSWORD":
            return userInfoData;
        case "INVITE_FRIEND":
            return userInfoData;

        /*case DELETE_TUTORIAL:
            return tutorials.filter(({ id }) => id !== payload.id);

        case DELETE_ALL_TUTORIALS:
            return [];*/

        default:
            return userInfoData;
    }
};

export default personalInfo;
