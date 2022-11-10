import "./index.css";
import React, { useState, useEffect } from "react";
import User from "./components/User";
import Form from "./components/Form";
import { AnimatePresence, motion } from "framer-motion";
import users from "./components/Dummy";
import "./components/style.css";
import Header from "./components/Header";
function App() {
  const [show, setShow] = useState("mehryar");

  return (
    <div className="w-full main_back">
      <Header />
      <Form users={users} setShow={setShow} />
      <ul className=" flex justify-center mt-10 overflow-hidden w-full mx-auto">
        {users.map((user, i) => {
          return (
            <User
              name={user.name}
              key={user.id}
              text={user.text}
              img={user.img}
              index={i + 1}
              show={show}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
