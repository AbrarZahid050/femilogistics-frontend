import { Container, Box } from "@mui/material";
import { ReactComponent as PolicyPic } from "../../assets/terms&conditions/privatePolicy.svg";

const PrivatePolicy = () => {
  return (
    <Container>
      <Box display="flex" alignItems="center" justifyContent="center" p={2}>
        <Box display="inline-block">
          <PolicyPic />
        </Box>
      </Box>
    </Container>
  );
};

export default PrivatePolicy;
