import { useState } from "react";
import { Stack, Typography } from "@mui/material";
import { StyledSwitch } from "../../../../components/Styles/StyledBtns";

const TableSwitch = () => {
  const [switchState, setSwitch] = useState(false);

  const handleClick = () => {
    setSwitch((preVal) => !preVal);
  };

  return (
    <Stack direction="row">
      <Typography width="30px">{switchState ? "Yes" : "No"}</Typography>
      <StyledSwitch onChange={handleClick} />
    </Stack>
  );
};

export default TableSwitch;
