import { FormControl, Paper, Stack, Typography } from "@mui/material";

import { CustomInput } from "../../../common/CustomInput/CustomInput";
import {
  StyledInput,
  StyledLabel,
} from "../../../../components/Styles/StyledBtns";

//redux imports:
import { useDispatch, useSelector } from "react-redux";
import {
  addNote,
  noteDetail,
} from "../../../../redux/slices/createCustomerSlice";

const NoteToCarrierCard = () => {
  const dispatch = useDispatch();
  const customer = useSelector(noteDetail);

  const blurHandler = (event) => {
    const key = event.target.name;
    const value = event.target.value;

    dispatch(addNote({ key, value }));
  };

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
        <StyledInput
          multiline
          rows={3}
          name="note_to_carrier"
          onBlur={blurHandler}
          value={customer.note_to_carrier}
        />
      </FormControl>
    </Paper>
  );
};

export default NoteToCarrierCard;
