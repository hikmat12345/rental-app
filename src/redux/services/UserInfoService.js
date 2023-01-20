import http from "../../config/http-common";
import {updateNotification} from "../actions/personalInfo";

const getAll = () => {
    return http.post("/api/user/get");
};
const updateUserInfo = (userDetails) => {
    let body = {userDetails}
    return http.post(`/api/user/update`, body);
};
const getAllNotifications = () => {
    return http.post("/api/user/notification/get");
};
const updateNotificationService = (notifications) => {
    let body = {notifications}
    return http.post("/api/user/notification/update",body);
};
const updatePassword = (data) => {
    return http.post("/api/user/update-password",data);
};
const inviteFriend = (data) => {
    return http.post("/api/user/invite-friend",data);
};






const get = id => {
    return http.get(`/tutorials/${id}`);
};

const create = data => {
    return http.post("/tutorials", data);
};
const remove = id => {
    return http.delete(`/tutorials/${id}`);
};

const removeAll = () => {
    return http.delete(`/tutorials`);
};

const findByTitle = title => {
    return http.get(`/tutorials?title=${title}`);
};

const TutorialService = {
    getAll,
    updateUserInfo,
    getAllNotifications,
    updateNotificationService,
    updatePassword,
    inviteFriend,
    get,
    create,
    remove,
    removeAll,
    findByTitle
};

export default TutorialService;
