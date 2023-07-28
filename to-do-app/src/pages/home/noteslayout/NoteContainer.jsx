import React from "react";
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

  return (
    <div className="note-container" style={{ color: "white" }}>
      <h2>Notes</h2>
      <div className="note-container-notes custom-scroll">
        {notes?.length > 0 ? (
          notes.map((item, i) => {
            console.log(item);
            return (
              <Note
                key={item.id}
                note={item}
                deleteNote={props.deleteNote}
                UpdateText={props.UpdateText}
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
