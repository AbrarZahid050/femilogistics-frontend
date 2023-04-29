import { FormControl, Grid } from "@mui/material";
import {
  StyledInput,
  StyledLabel,
} from "../../../../components/Styles/StyledBtns";

const CustomInput = ({
  label,
  value,
  labelSize,
  inputSize,
  multiline,
  rows,
}) => {
  return (
    <FormControl>
      <Grid container alignItems="center">
        <Grid item xs={labelSize}>
          <StyledLabel>{label}</StyledLabel>
        </Grid>
        <Grid item xs={inputSize}>
          {multiline ? (
            <StyledInput fullWidth value={value} multiline rows={rows} />
          ) : (
            <StyledInput fullWidth value={value} />
          )}
        </Grid>
      </Grid>
    </FormControl>
  );
};

export default CustomInput;
