import { Box, Stack, Paper, FormControl } from "@mui/material";

const CustomerHeaderCard = ({ children }) => {
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
      <Box
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        gap={1}
      >
        <Box width="800px">
          <FormControl fullWidth>
            <Stack direction="row" alignItems="center" spacing={2}>
              {children[0]}
              {children[1]}
            </Stack>
          </FormControl>
        </Box>
        <Box width="500px" display="flex" flexDirection="row">
          {children[2]}
          {children[3]}
        </Box>
      </Box>
    </Paper>
  );
};

export default CustomerHeaderCard;
