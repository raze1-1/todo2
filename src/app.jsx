import React, { useRef } from "react";

import "./app.css";

const handleSubmit = () => {
  selectForm.current.submit();
};

const App = () => {
  return (
    <>
      <h1 className="flex items-center justify-center">Todos</h1>
      <ul>
        <li>
          <span className="line-through"></span>
          <a className="px-3 text-slate-500 hover:text-blue-400" href="">
            edit
          </a>
          <a className="px-3 text-slate-500 hover:text-green-400" href="">
            check
          </a>
          <a className="px-3 text-slate-500 hover:text-red-400" href="">
            delete
          </a>
          <a className="px-3 text-slate-500 hover:text-yellow-400" href="">
            copy
          </a>
          <input type="checkbox" name="done" hidden />
        </li>
      </ul>
      <form action="" method="get" onChange={handleSubmit}>
        <button
          className="py-2 px-5 bg-transparent hover:bg-blue-500 hover:text-white bg-fixed font-semibold border border-blue-500 hover:border-transparent rounded "
          type="submit"
        >
          Add todo
        </button>
        <input type="text" name="todo" />
      </form>
    </>
  );
};

export default App;
