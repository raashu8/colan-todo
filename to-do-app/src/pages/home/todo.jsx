import React from "react";
import { useEffect, useState } from "react";

import UserLayout from "../../../components/layout";
import SideBar from "./components/SideBar";
import NoteContainer from "./components/NoteContainer";

const ToDoList = () => {

   const [notes, setNotes] = useState(
    // JSON.parse(localStorage.getItem("notes-app")) || 
    []
  );

  const addNote = (color) => {
    const tempNotes = [...notes];

    tempNotes.push({
      id: Date.now() + " " + Math.floor(Math.random() * 78),
      text: "make your daily notes",
      time: Date.now(),
      color,
    });
    setNotes(tempNotes);
  };

  const deleteNote = (id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes.splice(index, 1);
    setNotes(tempNotes);
  };

  const UpdateText = (text, id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;
    tempNotes[index].text = text;
    setNotes(tempNotes);
  };

  // useEffect(() => {
  //   localStorage.setItem("notes-app", JSON.stringify(notes));
  // }, [notes]);
  


  return (
    <div className="notes-app1">
    <SideBar addNote={addNote} />

    <NoteContainer
      notes={notes}
      deleteNote={deleteNote}
      UpdateText={UpdateText}
    />
  </div>
  );
};
ToDoList.getLayout = (page) => <UserLayout>{page}</UserLayout>;
export default ToDoList;
