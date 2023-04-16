import React, { useState } from "react";
import PropTypes from "prop-types";
import uniqid from "uniqid";

export default function StepCounterForm({ onAdd }) {
  const [form, setForm] = useState({ date: "", distance: "" });

  const onChange = ({ target }) => {
    const name = target.name;
    const value = target.value;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const walk = {
      id: uniqid(),
      date: form.date,
      distance: Number(form.distance),
    };

    onAdd(walk);
    setForm({ date: "", distance: "" });
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form-elem">
        <label className="input-description" htmlFor="date">
          Дата (ДД.ММ.ГГ)
        </label>
        <input
          className="form-input date-input"
          type="date"
          id="date"
          name="date"
          value={form.date}
          onChange={onChange}
          required
        />
      </div>
      <div className="form-elem">
        <label className="input-description" htmlFor="distance">
          Пройдено км
        </label>
        <input
          className="form-input"
          type="text"
          id="distance"
          name="distance"
          value={form.distance}
          onChange={onChange}
          required
        />
      </div>
      <button className="btn add-btn" type="submit">
        OK
      </button>
    </form>
  );
}

StepCounterForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};