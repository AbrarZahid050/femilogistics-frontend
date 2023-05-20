import { FormControl, Paper, Stack, Typography } from "@mui/material";

import CustomInput from "../../../carrier/components/InputFields/CustomInput";
import { StyledLabel } from "../../../../components/Styles/StyledBtns";

const NoteToCarrierCard = ({ children }) => {
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
        {children}
      </FormControl>
    </Paper>
  );
};

export default NoteToCarrierCard;
