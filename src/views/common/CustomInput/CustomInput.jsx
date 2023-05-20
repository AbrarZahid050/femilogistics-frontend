import { FormControl, Grid, Typography } from "@mui/material";
import { forwardRef } from "react";
import { IMaskInput } from "react-imask";

export const CustomInput = ({ children, doNotAlign, labelSize, isError }) => (
  <FormControl fullWidth error={Boolean(isError)}>
    <Grid container alignItems={doNotAlign ? "none" : "center"}>
      <Grid item xs={labelSize ? labelSize : 5}>
        {children[0]}
      </Grid>
      <Grid item xs={labelSize ? 12 - labelSize : 7}>
        {children[1]}
      </Grid>
    </Grid>
    <Typography align="center" color="#d32f2f">
      {isError}
    </Typography>
  </FormControl>
);

export const TextMaskCustom = forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="1 (#00) 000-0000"
      definitions={{
        "#": /[1-9]/,
      }}
      onChange={() => {
        return null;
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});
