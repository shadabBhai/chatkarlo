import React, { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectRoute from "./components/auth/ProtectRoute";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Login = lazy(() => import("./pages/Login"));
const Groups = lazy(() => import("./pages/Groups"));
const Chat = lazy(() => import("./pages/Chat"));
const NotFound = lazy(() => import("./pages/NotFound"));
const user = false;
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectRoute user={user} />}>
          <Route path="/" element={<Home />} />

          <Route path="/groups" element={<Groups />} />
          <Route path="/chat/:chatId" element={<Chat />} />
        </Route>
        <Route
          path="/login"
          element={
            <ProtectRoute user={!user} redirect="/">
              {" "}
              <Login />
            </ProtectRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
