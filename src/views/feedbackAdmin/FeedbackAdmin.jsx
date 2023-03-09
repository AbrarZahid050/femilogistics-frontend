import "./feedbackAdmin.css";
import avatarPic from "../../assets/navbar/avatar/Oval.jpg";
import { Avatar, Grid } from "@mui/joy";

import { Route, Routes, Link } from "react-router-dom";

import InitialContent from "./InitialContent/InitialContent";
import NewContent from "./NewContent/NewContent";

const FeedbackAdmin = () => {
  return (
    <>
      <nav className="nav">
        <h2>Triton</h2>
        <Avatar src={avatarPic} />
      </nav>

      <div className="grid-container">
        <div className="sidebar">
          <div className="side-menu">Main</div>
          <div className="side-menu-list">
            <Link
              to="/feedbackAdmin/initial-content"
              className="side-menu-list-item"
            >
              Initial-content
            </Link>
          </div>
          <div className="side-menu-list">
            <Link
              to="/feedbackAdmin/new-content"
              className="side-menu-list-item"
            >
              New-content
            </Link>
          </div>
        </div>

        <div className="main-content">
          <Routes>
            <Route path="/initial-content" element={<InitialContent />} />
            <Route path="/new-content" element={<NewContent />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default FeedbackAdmin;
