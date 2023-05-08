import { Modal, Box, Card, Typography, Stack } from "@mui/material";

import { CancelBtn, LoginBtn } from "../../../../components/Styles/StyledBtns";

const DeleteUserModal = ({ open, cancelHandler, deleteHandler, username }) => {
  return (
    <Modal
      open={open}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box>
        <Card sx={{ width: "500px" }}>
          <Stack>
            <Box bgcolor="#282842" width="100%" p={2}>
              <Typography color="white" variant="h6">
                Delete User
              </Typography>
            </Box>
            <Box p={2}>
              <Typography>
                Do you want to delete <strong>{username}</strong> user?
              </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" p={2} gap={2}>
              <CancelBtn variant="contained" fullWidth onClick={cancelHandler}>
                cancel
              </CancelBtn>
              <LoginBtn variant="contained" fullWidth onClick={deleteHandler}>
                delete
              </LoginBtn>
            </Box>
          </Stack>
        </Card>
      </Box>
    </Modal>
  );
};

export default DeleteUserModal;
