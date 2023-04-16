import React, { useState } from "react";
import StepCounterForm from "./StepCounterForm";
import StepCounterTable from "./StepCounterTable";

export default function StepCounter() {
  const [walks, setWalks] = useState([]);

  const onAdd = (walk) => {
    const newWalks = [...walks];
    const sameDate = newWalks.find((o) => o.date === walk.date);

    if (sameDate) {
      sameDate.distance += walk.distance;
    } else {
      newWalks.push(walk);
      newWalks.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
    }

    setWalks(newWalks);
  };

  const onDelete = (id) => {
    setWalks((prevWalks) => prevWalks.filter((o) => o.id !== id));
  };

  return (
    <div className="walk-counter">
      <StepCounterForm onAdd={onAdd} />
      <StepCounterTable walks={walks} onDelete={onDelete} />
    </div>
  );
}