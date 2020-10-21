import React from "react";

export default function UserInput({ inputVal, inputChange, placeHolder }) {
  return (
    <input className="form-control" value={inputVal} onChange={inputChange} placeholder={placeHolder} />
  );
}
