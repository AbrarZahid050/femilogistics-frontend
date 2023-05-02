import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const Summary = ({ title, detail }) => {
  return (
    <Box
      bgcolor={grey[100]}
      display="inline-flex"
      alignItems="center"
      padding="0 10px"
      borderRadius={1}
      gap={10}
    >
      <Typography fontSize="16px" fontWeight="500">
        {title}
      </Typography>
      <Typography>{detail}</Typography>
    </Box>
  );
};

export default Summary;
