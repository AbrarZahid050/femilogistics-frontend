import { FormControl, Grid } from "@mui/material";

const CustomInput = ({ children, labelSize, doNotAlign }) => {
  return (
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
};

export default CustomInput;
