import React from "react";
import Header from "./Header";
import Title from "../shared/Title";
import Grid from "@mui/material/Grid";
import ChatList from "../specific/ChatList";
import { sampleChats } from "../../constants/sampleData";
import { useParams } from "react-router-dom";
import ProfileCard from "../specific/ProfileCard";

const AppLayout = () => (WrapperComponent) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
    const params = useParams();
    const chatId = params.chatId;

    const handleDleteChat = (e, chatId, groupChat) => {
      e.preventDefault();
      console.log(`Deleting chat ${chatId} ${groupChat}`);
    };

    return (
      <>
        <Title />

        <Header />
        <Grid container height={"calc(100vh - 4rem)"}>
          <Grid
            item
            sm={4}
            md={3}
            sx={{
              display: { xs: "none", sm: "block" },
            }}
            height={"100%"}
          >
            <ChatList
              chats={sampleChats}
              chatId={chatId}
              handleDleteChat={handleDleteChat}
            />
          </Grid>
          <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
            <WrapperComponent {...props} />
          </Grid>
          <Grid
            item
            md={4}
            lg={3}
            sx={{
              display: { xs: "none", md: "block" },
              padding: "2rem",
              bgcolor: "rgba(0,0,0,0.85)",
            }}
            height={"100%"}
          >
            <ProfileCard />
          </Grid>
        </Grid>
      </>
    );
  };
};

export default AppLayout;
