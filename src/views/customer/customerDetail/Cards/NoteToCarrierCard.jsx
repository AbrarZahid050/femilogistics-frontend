import { FormControl, Paper } from "@mui/material";

import {
  StyledInput,
  StyledLabel,
} from "../../../../components/Styles/StyledBtns";

//redux:

const NoteToCarrierCard = ({ register }) => {
  return (
    <Paper
      sx={{
        p: 2,
        background: "#FFFFFF",
        boxShadow:
          "0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)",
        borderRadius: "8px",
      }}
    >
      <FormControl fullWidth>
        <StyledLabel variant="h6" fontSize="18px">
          NOTE TO CARRIER
        </StyledLabel>
        <StyledInput multiline rows={3} {...register("note_to_carrier")} />
      </FormControl>
    </Paper>
  );
};

export default NoteToCarrierCard;
