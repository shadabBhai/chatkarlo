import { styled } from "@mui/material";
import { Link as LinkComponent } from "react-router-dom";

export const VisuallyHiddenInput = styled("input")({
  position: "absolute",
  width: "1",
  height: "1",
  margin: "-1",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  border: "0",
});

export const Link = styled(LinkComponent)({
  textDecoration: "none",
  color: "black",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
});
