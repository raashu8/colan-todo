import React, { useState } from "react";
import Note from "./Note";
const reverseArray = (arr) => {
  if (!arr || arr.length === 0) {
    return []; // Return an empty array if input is undefined or empty
  }

  const array = [];
  for (let i = arr.length - 1; i >= 0; --i) {
    array.push(arr[i]);
  }
  return array;
};
const NoteContainer = (props) => {
  // const reverseArray = (arr) => {
  //   if (!arr || arr.length === 0) {
  //     return []; // Return an empty array if input is undefined or empty
  //   }

  //   const array = [];
  //   for (let i = arr.length - 1; i >= 0; --i) {
  //     array.push(arr[i]);
  //   }
  //   return array;
  // };

  // const notes = reverseArray(props.notes);
  const notes = reverseArray(props.notes);


  // search filter method
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(notes);
  const datashow = (e) => {
    setShow(
      notes.filter((data) =>
        data.texthead.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
    setSearch(e.target.value);

  };
console.log(search, show,"kkkkkkkkkk");
  return (
    <div className="note-container" style={{ color: "white" }}>
      <h2>Notes</h2>
      <input
        type="text"
        placeholder="Search"
        id="note-all"
        value={search}
        onChange={datashow}
      />
      <div className="note-container-notes custom-scroll">
        {show?.length > 0 ? (
          show.map((item, i) => {
            console.log(item);
            return (
              <Note
                key={item.id}
                note={item}
                deleteNote={props.deleteNote}
                UpdateText={props.UpdateText}
                UpdateTextHeading={props.UpdateTextHeading}
              />
            );
          })
        ) : (
          <h3>No notes here</h3>
        )}
      </div>
    </div>
  );
};

export default NoteContainer;
