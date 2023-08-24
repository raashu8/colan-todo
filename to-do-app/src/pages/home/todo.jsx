"use client";

import React from "react";
import { useEffect, useState } from "react";

import UserLayout from "../../../components/layout";
import SideBar from "./noteslayout/SideBar";
import NoteContainer from "./noteslayout/NoteContainer";

const ToDoList = () => {

  const item = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("notes-app")) : "";
  const [notes, setNotes] = useState(item || []);

  const addNote = (color) => {
    const tempNotes = [...notes];

    tempNotes.push({
      id: Date.now() + " " + Math.floor(Math.random() * 78),
      text: "",
      texthead: "",
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

  // text notes
  const UpdateText = (text, id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;
    tempNotes[index].text = text;
    setNotes(tempNotes);
  };

  //  text heading 
  const UpdateTextHeading = (texthead, id) => {
    const tempNotes1 = [...notes];

    const index = tempNotes1.findIndex((item) => item.id === id);
    if (index < 0) return;
    tempNotes1[index].texthead = texthead;
    setNotes(tempNotes1);
  };

  useEffect(() => {
    localStorage.setItem("notes-app", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="notes-app1">
      <SideBar addNote={addNote} />

      <NoteContainer
        notes={notes}
        deleteNote={deleteNote}
        UpdateText={UpdateText}
        UpdateTextHeading={UpdateTextHeading}
      />
    </div>
  );
};
ToDoList.getLayout = (page) => <UserLayout>{page}</UserLayout>;
export default ToDoList;
