/* eslint-disable no-unreachable */
import React from "react";
import { Helmet } from "react-helmet-async";
const Title = ({ title = "Chat App", description = "this ia chat app" }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Title;
