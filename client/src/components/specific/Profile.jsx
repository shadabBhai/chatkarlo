import { Avatar, Stack, Typography } from "@mui/material";
import {
  Face as FaceIcon,
  AlternateEmail as UserNameIcon,
  CalendarMonth as CalenderIcon,
} from "@mui/icons-material";
import React from "react";
import moment from "moment";

const Profile = () => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar
        sx={{
          width: 200,
          height: 200,
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px soid white",
        }}
      />
      <ProfileCard
        heading={"Bio"}
        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
      />
      <ProfileCard
        heading={"User Name"}
        text={"khanbhai"}
        Icon={<UserNameIcon />}
      />
      <ProfileCard heading={"Name"} text={"Shadab khan"} Icon={<FaceIcon />} />
      <ProfileCard
        heading={"Joined"}
        text={moment("2023-11-05T00:00:00.000Z").fromNow()}
        Icon={<CalenderIcon />}
      />
    </Stack>
  );
};

const ProfileCard = ({ text, Icon, heading }) => (
  <Stack
    spacing={"1rem"}
    direction={"row"}
    alignItems={"center"}
    color={"white"}
    textAlign={"center"}
  >
    {Icon && Icon}
    <Stack>
      <Typography variant="body1">{text}</Typography>
      <Typography color={"gray"} variant="caption">
        {heading}
      </Typography>
    </Stack>
  </Stack>
);

export default Profile;
