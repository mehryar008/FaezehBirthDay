import React, { useState } from "react";

const Form = ({ users, setShow }) => {
  const [input, setInput] = useState("");

  const inputHandler = function (e) {
    setInput(e.target.value);
  };

  const submitHandler = function (e) {
    e.preventDefault();
    if (input === "") return;
    setShow(input);
    setInput("");
  };

  return (
    <form
      onSubmit={submitHandler}
      action=""
      className="w-full flex justify-center gap-5  mt-24"
    >
      <input
        onChange={inputHandler}
        value={input}
        type="text"
        placeholder="Type"
        className="outline-none py-1 px-2 rounded-md"
      />
      <button className="bg-[#1f2827] text-white text-lg px-4 py-1 rounded-lg active:translate-y-1 transition-all shadow-2xl  w-[90px] flex items-center justify-center font-sahel">
        ببینم
      </button>
    </form>
  );
};

export default Form;
