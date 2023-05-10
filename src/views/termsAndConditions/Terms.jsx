import { Container, Box } from "@mui/material";
import { ReactComponent as TermsAndCondition } from "../../assets/terms&conditions/terms.svg";

const Terms = () => {
  return (
    <Container>
      <Box display="flex" alignItems="center" justifyContent="center" p={2}>
        <Box display="inline-block">
          <TermsAndCondition />
        </Box>
      </Box>
    </Container>
  );
};

export default Terms;
