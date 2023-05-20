import * as React from "react";

import { IMaskInput } from "react-imask";

import Box from "@mui/material/Box";
import {
  styled,
  InputBase,
  FormControl,
  Grid,
  InputAdornment,
} from "@mui/material";

import { grey } from "@mui/material/colors";
import { StyledLabel } from "../../components/Styles/StyledBtns";

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="1 (#00) 000-0000"
      definitions={{
        "#": /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

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

const CustomInput = ({ children, doNotAlign, labelSize, isError }) => (
  <FormControl fullWidth>
    <Grid container alignItems={doNotAlign ? "none" : "center"}>
      <Grid item xs={labelSize ? labelSize : 5}>
        {children[0]}
      </Grid>
      <Grid item xs={labelSize ? 12 - labelSize : 7}>
        {children[1]}
      </Grid>
    </Grid>
  </FormControl>
);

export default function FormattedInputs() {
  const [values, setValues] = React.useState({
    textmask: "",
    numberformat: "1320",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Box
      sx={{
        "& > :not(style)": {
          m: 1,
        },
      }}
    >
      <CustomInput>
        <StyledLabel>Status</StyledLabel>
        <StyledInput
          prefix="$"
          value={values.textmask}
          onChange={handleChange}
          name="textmask"
          id="formatted-text-mask-input"
          inputComponent={TextMaskCustom}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
        />
      </CustomInput>
    </Box>
  );
}
