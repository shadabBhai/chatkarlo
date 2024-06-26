/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { Stack } from "@mui/material";
import React from "react";
import ChatItems from "../shared/ChatItems";

const ChatList = ({
  w = "100%",
  chats = [],
  chatId,
  onlineUsers = [],
  newMessagesAlert = [{ chatId: "", count: 0 }],
  handleDleteChat,
}) => {
  return (
    <Stack width={w} direction={"column"}>
      {chats?.map((data, index) => {
        const { _id, avatar, name, groupChat, members } = data;
        const newMessageAlert = newMessagesAlert.find(
          ({ chatId }) => chatId === _id
        );
        const isOnline = members?.some((member) => onlineUsers.includes(_id));
        return (
          <ChatItems
            index={index}
            newMessageAlert={newMessageAlert}
            isOnline={isOnline}
            avatar={avatar}
            name={name}
            _id={_id}
            key={_id}
            groupChat={groupChat}
            sameSender={chatId === _id}
            handleDleteChat={handleDleteChat}
          />
        );
      })}
    </Stack>
  );
};

export default ChatList;
