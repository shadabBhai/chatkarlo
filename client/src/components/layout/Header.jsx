import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
  Backdrop,
} from "@mui/material";
import { Suspense, useState } from "react";
import { orange } from "../../constants/color";
import {
  Add as AddIcon,
  Group as GroupIcon,
  Menu as MenuIcon,
  Search as SearchIcon,
  Logout as LogoutIcon,
  Notifications as NotificationIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

import { lazy } from "react";

const SearchDailog = lazy(() => import("../specific/Search"));
const NotificationDailog = lazy(() => import("../specific/Notifications"));
const NewGroupDailog = lazy(() => import("../specific/NewGroup"));

const Header = () => {
  const [ismobile, setIsMobile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);

  const navigate = useNavigate();
  const handelMobile = () => {
    setIsMobile(!ismobile);
  };
  const openSearchDailog = () => {
    setIsSearch(!isSearch);
  };
  const openNewGroup = () => {
    setIsNewGroup(!isNewGroup);
  };
  const openNotification = () => {
    setIsNotification(!isNotification);
  };
  const navigateToGroup = () => {
    navigate("/groups");
  };
  const LogoutHandler = () => {
    console.log("Logout");
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar
          position="static"
          sx={{
            bgcolor: orange,
          }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              sx={{
                display: { xs: "none", md: "block" },
              }}
            >
              ChatKarLo
            </Typography>
            <Box
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <IconButton color="inherit" onClick={handelMobile}>
                <MenuIcon />
              </IconButton>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
              }}
            />
            <Box>
              <IconBtn
                title={"search"}
                icon={<SearchIcon />}
                onClick={openSearchDailog}
              />
              <IconBtn
                title={"New Group"}
                icon={<AddIcon />}
                onClick={openNewGroup}
              />
              <IconBtn
                title={"Manage Group"}
                icon={<GroupIcon />}
                onClick={navigateToGroup}
              />
              <IconBtn
                title={"Notifications"}
                icon={<NotificationIcon />}
                onClick={openNotification}
              />
              <IconBtn
                title={"Log out"}
                icon={<LogoutIcon />}
                onClick={LogoutHandler}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      {isSearch && (
        <Suspense fallback={<Backdrop open />}>
          {" "}
          <SearchDailog />
        </Suspense>
      )}
      {isNotification && (
        <Suspense fallback={<Backdrop open />}>
          {" "}
          <NotificationDailog />
        </Suspense>
      )}
      {isNewGroup && (
        <Suspense fallback={<Backdrop open />}>
          {" "}
          <NewGroupDailog />
        </Suspense>
      )}
    </>
  );
};

const IconBtn = ({ title, icon, onClick }) => {
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" onClick={onClick}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};

export default Header;
