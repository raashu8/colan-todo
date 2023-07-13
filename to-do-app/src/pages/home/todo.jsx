import React from "react";
import UserLayout from "../../../components/layout";

const ToDoList = () => {
  return (
    <div>
      <h1>TO DO LIST MOD</h1>
    </div>
  );
};
ToDoList.getLayout = (page) => <UserLayout>{page}</UserLayout>;
export default ToDoList;
