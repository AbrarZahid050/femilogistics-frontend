import { styled, Button, FormLabel, InputBase } from "@mui/material";
import { grey, indigo, blue } from "@mui/material/colors";

export const LoginBtn = styled(Button)(() => {
  return {
    fontSize: "16px",
    width: "100%",
    borderRadius: 8,
    background: "#0062FF",
    color: "white",
    border: `1px solid #0062FF`,
    margin: "1rem 0",

    "&:hover": {
      background: indigo[500],
      border: `1px solid ${indigo[700]}`,
    },

    "&.Mui-disabled": {
      background: grey[500],
      border: `1px solid ${grey[700]}`,
    },
  };
});

// Navbar btn:
export const NavbarBtn = styled(Button)(() => {
  return {
    textTransform: "none",
    color: "#282842",
    minWidth: "0",
    height: "40px",
    background: grey[100],
    border: `1px solid ${grey[200]}`,
    "&:hover": {
      background: grey[300],
      border: `1px solid ${grey[400]}`,
    },
  };
});

export const StyledLabel = styled(FormLabel)(() => ({
  "&.Mui-focused": { color: blue[700] },
  "&.Mui-error": { color: "#d32f2f" },
  color: "black",
  fontWeight: "500",
  fontSize: "13px",
}));

export const StyledInput = styled(InputBase)(() => ({
  border: `1px solid ${grey[200]}`,
  background: grey[100],
  borderRadius: 5,
  padding: "0 8px",
  fontSize: "13px",
  "&.Mui-focused": {
    border: `1px solid ${blue[700]}`,
  },
  "&.Mui-error": { border: `1px solid #d32f2f` },
}));
