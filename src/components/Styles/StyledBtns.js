import {
  Button,
  FormControlLabel,
  FormLabel,
  InputBase,
  Radio,
  Switch,
  styled,
  useRadioGroup,
} from "@mui/material";
import { grey, indigo } from "@mui/material/colors";

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

export const CancelBtn = styled(Button)(() => {
  return {
    fontSize: "16px",
    width: "100%",
    borderRadius: 8,
    background: "white",
    color: "#6F758B",
    border: `1px solid #6F758B`,
    margin: "1rem 0",
    boxShadow: "none",

    "&:hover": {
      color: grey[800],
      border: `1px solid ${grey[800]}`,
      background: grey[200],
      // boxShadow:
      //   "0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)",
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

export const GeneralBtn1 = styled(Button)(() => ({
  background: "#282842",
  fontSize: "15px",
  // height: "30px",
  borderRadius: "7px",
  "&:hover": { background: "#0062FF" },
  "&.Mui-disabled": {
    background: "#6B7280",
    color: "white",
  },
}));

export const GeneralBtn2 = styled(Button)(() => ({
  background: "#0062FF",
  fontSize: "15px",
  // height: "30px",
  borderRadius: "7px",
  "&:hover": { background: "#282842" },
}));

export const StyledLabel = styled(FormLabel)(() => ({
  "&.Mui-focused": { color: "#0062FF" },
  "&.Mui-error": { color: "#d32f2f" },
  color: "#282842",
  fontWeight: "500",
  fontSize: "16px",
}));

export const StyledInput = styled(InputBase)((input) => {
  return {
    border: `1px solid ${grey[200]}`,
    background: grey[100],
    borderRadius: 5,
    padding: "5px 8px",
    color: "#282842",
    fontSize: "16px",
    "&.Mui-focused": {
      border: `1px solid #0062FF`,
    },
    "&.Mui-error": { border: `1px solid #d32f2f` },
  };
});

//--------------------------------------Styled Radio-------------------------------------------------//

const BpIcon = styled("span")(() => ({
  borderRadius: "50%",
  width: 16,
  height: 16,
  boxShadow:
    "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: "white",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: "#ebf1f5",
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background: "rgba(206,217,224,.5)",
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#0062FF",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&:before": {
    display: "block",
    width: 16,
    height: 16,
    backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "blue",
  },
});

export function BpRadio(props) {
  return (
    <Radio
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}

//----------------------------------------Styled label------------------------------------------------//

const StyledFormControlLabel = styled((props) => (
  <FormControlLabel {...props} />
))(({ checked }) => ({
  border: `1px solid ${grey[300]}`,
  "&": checked && {
    border: "1px solid #0062FF",
    background: "rgba(0, 98, 255, 0.05)",
  },
}));

export function MyFormControlLabel(props) {
  const radioGroup = useRadioGroup();
  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return <StyledFormControlLabel checked={checked} {...props} />;
}

//--------------------------------------Styled switch-------------------------------------------------//
export const StyledSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 40,
  height: 22,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(18px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#0062FF",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: grey[200],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: 0.7,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 18,
    height: 18,
  },
  "& .MuiSwitch-track": {
    borderRadius: 30,
    backgroundColor: grey[400],
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));
