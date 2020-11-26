import React, { useContext } from "react";
import { globalContext, initialState } from "../../Context/GlobalContext";
import { signupContext } from "../../Context/SignupContext";
import {
  NotificationContainer,
  NotificationList,
  NotificationHeader,
  NotificationClose,
} from "./Notification.style";

const NotificationContent = ({ response, color }) => {
  const { notificationResponse, setNotificationResponse } = useContext(
    globalContext,
  );
  return (
    <NotificationContainer color={color}>
      <NotificationClose
        onClick={() => setNotificationResponse(initialState)}
      />
      <NotificationHeader>Notification(s)!</NotificationHeader>
      {Array.isArray(notificationResponse.list) &&
      notificationResponse.list.length
        ? notificationResponse.list.map((data, index) => (
            <NotificationList key={index}>{data}</NotificationList>
          ))
        : null}
      {notificationResponse.response && (
        <div>{notificationResponse.response} </div>
      )}
    </NotificationContainer>
  );
};

export default NotificationContent;
