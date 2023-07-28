import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { useRef } from "react";

let timer = 500,
  timeout;
const Note = (props) => {
  const { UpdateText } = props;
  const textareaRef = useRef(null);

  function adjustTextAreaHeight() {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // Reset the height to auto to recalculate the new height based on content
      textarea.style.height = `${textarea.scrollHeight}px`; // Set the height to fit the content
    }
  }

  const formatDate = (value) => {
    console.log("Received date value:", value);
    if (!value) return "";

    const date = new Date(value);
    const monthNames = [
      "jan",
      "feb",
      "march",
      "april",
      "may",
      "jun",
      "jul",
      "aug",
      "sept",
      "oct",
      "nov",
      "dec",
    ];

    let hrs = date.getHours();
    let amPm = hrs > 12 ? "PM " : "AM";
    hrs = hrs ? hrs : "12";
    hrs = hrs > 12 ? (hrs = 24 - hrs) : hrs;

    let min = date.getMinutes();
    min = min < 10 ? "0" + min : min;

    let day = date.getDate();
    const month = monthNames[date.getMonth()];
    return `${hrs}:${min} ${amPm}  ${day} ${month}`;
  };

  const debounce = (func) => {
    clearTimeout(timeout);
    timeout = setTimeout(func, timer);
  };

  const UpdateText1 = (text, id) => {
    debounce(() => UpdateText(text, id));
  };

  // const NoteColor = props?.note?.color || "#ffffff";
  return (
    <div className="note" style={{ backgroundColor: props.note?.color || '#ffffff' }}>
      <textarea
        //  onChange={(event)=>{}}
        className="note_text"
        defaultValue={props.note.text}
        style={{ color: "white" }}
        ref={textareaRef} // Use the ref to get a reference to the textarea
        onChange={(event) => {
          adjustTextAreaHeight(event);
          UpdateText1(event.target.value, props.note.id);
        }}
      ></textarea>
      <div className="note-footer">
        <p style={{ color: "white" }}> {formatDate(props.note.time)}</p>

        <div className="footer-delte-icon">
          <IconButton
            aria-label="delete"
            onClick={() => {
              props.deleteNote(props.note.id);
            }}
          >
            <DeleteIcon sx={{ color: "white" }} />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Note;
