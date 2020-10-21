import React from "react";

export default function ChoiceRadio({ choiceLabel, choiceId, groupName, changeValue, selectsAnswer }) {
  return (
    <div className="custom-control custom-radio custom-control-inline">
        <input type="radio" id={choiceId} name={groupName} className="custom-control-input" value={choiceId} onChange={changeValue} checked={Number(choiceId) === Number(selectsAnswer)} />
        <label className="custom-control-label" htmlFor={choiceId}>
        {choiceLabel}
      </label>
    </div>
  );
}
