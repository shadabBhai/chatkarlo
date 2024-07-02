import { Menu } from "@mui/material";
import React from "react";

const FileMenu = ({ anchorE1 }) => {
  return (
    <Menu anchorEl={anchorE1} open={false}>
      <div
        style={{
          width: "10rem",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod
        incidunt debitis sequi, enim quia doloremque quae adipisci at dolor
        eaque omnis nostrum mollitia labore. Quibusdam facilis nam quis modi.
      </div>
    </Menu>
  );
};

export default FileMenu;
