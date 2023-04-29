import { FormControl, Grid } from "@mui/material";

const CustomInput = ({ children, labelSize }) => {
  return (
    <FormControl fullWidth>
      <Grid container alignItems="center">
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
