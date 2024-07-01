import React, { memo } from "react";

const MessageComponent = ({ message, user }) => {
  const { sender, content, attachments = [], createdAt } = message;
  return <div>MessageComponent</div>;
};

export default memo(MessageComponent);
