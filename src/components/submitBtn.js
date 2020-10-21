import React from "react";

export default function SubmitBtn({ btnLabel, btnHandler }) {
  return (
    <button className="btn btn-primary btn-block" onClick={btnHandler}>
      {btnLabel}
    </button>
  );
}
