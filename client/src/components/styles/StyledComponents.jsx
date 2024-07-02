import { styled } from "@mui/material";
import { Link as LinkComponent } from "react-router-dom";
import { grayColor } from "../../constants/color";

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

export const InputBox = styled("input")`
  width: 100%;
  height: 100%;
  boreder: none;
  padding: 0 3rem;
  outline: none;
  border-radius: 1.5rem;
  bacjground-color: ${grayColor};
`;
