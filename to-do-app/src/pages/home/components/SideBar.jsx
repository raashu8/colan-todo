import { IconButton } from "@mui/material";
import React, { useState } from "react";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";


const SideBar = (props) => {
  const colors = ["#00092C", "#4D4D4D", "#321E1E", "#810000", "#331940","#FF8B00", "#00541A", "#D1512D"];

  const [listOpen, SetlistOpen] = useState(false);
  return (
    <div className="sidebar">
      <IconButton
        onClick={() => {
          SetlistOpen(!listOpen);
        }}
      >
        <AddCircleOutlinedIcon
          className="img1"
          sx={{ fontSize: "40px", cursor: "pointer",color:"white" }}
        />
      </IconButton>

      <ul className={`sidebar-list ${listOpen ? "sidebar-list-active" : ""}`}>
        {colors.map((item, i) => (
          <li
            key={i}
            className="sidebar-list-item"
            style={{ backgroundColor: item }}
            onClick={() => {
              props.addNote(item);
            }}
          ></li>
        ))}
        <li className="sidebar-list-item"></li>
      </ul>
    </div>
  );
};

export default SideBar;
