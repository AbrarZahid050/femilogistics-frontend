import { useState } from "react";
import { Box, Card, Chip, Divider, Typography } from "@mui/material";
import { ReactComponent as CheckIcon } from "../../assets/subsCard/Icon.svg";
import { CancelBtn, LoginBtn } from "../../components/Styles/StyledBtns";

const SubCard = ({ amount, chipCaption, selected, clicked }) => {
  const CapitalizedChipName = chipCaption.toUpperCase();
  return (
    <Card
      sx={{
        width: "400px",

        background: "#FFFFFF",

        boxShadow:
          "0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)",
        borderRadius: "8px",
      }}
    >
      <Box p={3} display="flex" flexDirection="column" gap={2}>
        {/* chip */}
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Chip
            label={CapitalizedChipName}
            sx={{ color: "#0062FF", bgcolor: "#E0E7FF" }}
          />

          {selected && <Typography color="#3DD598">Active</Typography>}
        </Box>

        {/* rate */}
        <Box display="inline-flex" alignItems="flex-end">
          <Typography variant="h3" fontWeight="bold">
            {amount}
          </Typography>
          <Typography marginBottom="5px" color="#6B7280">
            /mo
          </Typography>
        </Box>

        {/* description */}
        <Box>
          <Typography color="#6B7280" fontSize="18px">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </Typography>
        </Box>
      </Box>

      <Divider />
      <Box p={3} display="flex" flexDirection="column" gap={2}>
        {/* check one */}
        <Box display="flex" alignContent="center" gap={2}>
          <Box>
            <CheckIcon />
          </Box>
          <Typography color="#6B7280">Pariatur quod similique</Typography>
        </Box>

        {/* check two */}
        <Box display="flex" alignContent="center" gap={2}>
          <Box>
            <CheckIcon />
          </Box>
          <Typography color="#6B7280">
            Sapiente libero doloribus modi nostrum
          </Typography>
        </Box>

        {/* check three */}
        <Box display="flex" alignContent="center" gap={2}>
          <Box>
            <CheckIcon />
          </Box>
          <Typography color="#6B7280">
            Vel ipsa esse repudiandae excepturi
          </Typography>
        </Box>

        {/* check four */}
        <Box display="flex" alignContent="center" gap={2}>
          <Box>
            <CheckIcon />
          </Box>
          <Typography color="#6B7280">
            Itaque cupiditate adipisci quibusdam
          </Typography>
        </Box>

        {selected ? (
          <CancelBtn sx={{ margin: 0 }} onClick={clicked} label={chipCaption}>
            cancel
          </CancelBtn>
        ) : (
          <LoginBtn sx={{ margin: 0 }} onClick={clicked} label={chipCaption}>
            select
          </LoginBtn>
        )}
      </Box>
    </Card>
  );
};

const Subs = () => {
  const [selectedSub, setSelectedSub] = useState({
    beginner: false,
    intermediate: false,
    vip: false,
  });

  const handleClickFromCard = (event) => {
    const seletedCard = event.target.attributes.label.value;
    if (seletedCard) {
      setSelectedSub((preVal) => ({
        beginner: seletedCard === "beginner" ? !preVal.beginner : false,
        intermediate:
          seletedCard === "intermediate" ? !preVal.intermediate : false,
        vip: seletedCard === "vip" ? !preVal.vip : false,
      }));
    }
  };

  console.log(selectedSub);

  return (
    <Box>
      <Box p={2} display="flex" flexDirection="row" gap={2}>
        <SubCard
          amount="$49"
          chipCaption="beginner"
          selected={selectedSub.beginner}
          clicked={handleClickFromCard}
        />
        <SubCard
          amount="$79"
          chipCaption="intermediate"
          selected={selectedSub.intermediate}
          clicked={handleClickFromCard}
        />
        <SubCard
          amount="$179"
          chipCaption="vip"
          selected={selectedSub.vip}
          clicked={handleClickFromCard}
        />
      </Box>
    </Box>
  );
};

export default Subs;
