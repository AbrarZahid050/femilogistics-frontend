import "./feedbackAdmin.css";
import avatarPic from "../../assets/navbar/avatar/Oval.jpg";
import { Avatar } from "@mui/joy";

const FeedbackAdmin = () => {
  return (
    <>
      <nav className="nav">
        <h2>Triton</h2>
        <Avatar src={avatarPic} />
      </nav>
    </>
  );
};

export default FeedbackAdmin;
