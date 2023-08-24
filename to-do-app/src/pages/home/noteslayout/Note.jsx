import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { useRef } from "react";

let timer = 500,
  timeout;
let timer1 = 500,
  timeout1;
const Note = (props) => {
  const { UpdateText } = props;
  const { UpdateTextHeading } = props;


  const textareaRef = useRef(null);
  const textareaRef1 = useRef(null);

  function adjustTextAreaHeight() {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // Reset the height to auto to recalculate the new height based on content
      textarea.style.height = `${textarea.scrollHeight}px`; // Set the height to fit the content
    }
  }


  function adjustTextAreaHeight1() {
    const textarea1 = textareaRef1.current;
    if (textarea1) {
      textarea1.style.height = "auto"; // Reset the height to auto to recalculate the new height based on content
      textarea1.style.height = `${textarea1.scrollHeight}px`; // Set the height to fit the content
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

  const debounce1 = (func) => {
    clearTimeout(timeout1);
    timeout1 = setTimeout(func, timer1);
  };

  const UpdateText1 = (text, id) => {
    debounce(() => UpdateText(text, id));
  };
  const UpdateTextHeading1 = (texthead, id) => {
    debounce1(() => UpdateTextHeading(texthead, id));
  };

  // Check if props.note exists and has the time property
  if (!props.note || !props.note.time) {
    // Handle the case where props.note is not available or time is not defined
    return null; // Return null or any other fallback UI as needed
  }

  return (
    <div className="note" style={{ backgroundColor: props.note?.color || '#ffffff' }}>
      <textarea 
          className="note_text_heading"
          ref={textareaRef1}
          rows="1" 
          defaultValue={props.note.texthead}
          placeholder="Heading"
          onChange={(event)=>{
            adjustTextAreaHeight1(event)
            UpdateTextHeading1(event.target.value, props.note.id)


          }}
      ></textarea>
      <textarea
        //  onChange={(event)=>{}}
        className="note_text"
        defaultValue={props.note.text}
        placeholder="make your daily notes"
        style={{ color: "white" }}
        ref={textareaRef} // Use the ref to get a reference to the textarea
        onChange={(event) => {
          adjustTextAreaHeight(event);
          UpdateText1(event.target.value, props.note.id);
        }}
      ></textarea>
      <div className="note-footer">
        <h6 style={{ color: "white" ,fontSize:"12px",marginTop:"10px"}}> {formatDate(props.note.time)}</h6>

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
