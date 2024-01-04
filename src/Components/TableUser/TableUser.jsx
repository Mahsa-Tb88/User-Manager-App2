import React from "react";
import { useForm } from "react-hook-form";
import "./tableUser.scss";
export default function TableUser() {
  const { register, handleSubmit } = useForm();
  const listOfProvince = [
    "British Columbia",
    "Alberta",
    "Manitoba",
    "New Brunswick",
    "Nova Scotia",
    "Ontario",
    "Newfoundland and Labrador",
    "Prince Edward Island",
    "Quebec",
    "Saskatchewan",
  ];
  function onSubmit(data) {}
  return (
    <form className="table w-75 m-auto" onSubmit={handleSubmit(onSubmit)}>
      <div className="d-flex justify-content-between align-items-center mb-3 ">
        <div className="d-flex flex-column justify-content-center align-items-start ">
          <label className="mb-1 label">Name</label>
          <input
            type="text"
            className="input"
            {...register("name", {
              required: "Invalid Name",
              message: "Name must be 3 Characters at least",
            })}
          />
        </div>
        <div className="d-flex flex-column justify-content-center align-items-start ">
          <label className="mb-1 label">Family</label>
          <input
            type="text"
            className="input"
            {...register("family", {
              required: "Invalid Family",
              message: "Name must be 3 Characters at least",
            })}
          />
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center  mb-3">
        <div className="d-flex flex-column justify-content-center align-items-start ">
          <label className="mb-1 label">Phone</label>
          <input
            type="text"
            className="input"
            {...register("phone", {
              required: "Invalid Phone",
              message: "Phone must be 10 Characters",
            })}
          />
        </div>
        <div className="d-flex flex-column justify-content-center align-items-start ">
          <label className="mb-1 label">Province</label>
          <select className="input">
            {listOfProvince.map((province) => (
              <option>{province}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-start align-items-start mb-4">
        <div className="d-flex  justify-content-center align-items-center">
          <label className="mb-1 label">Addrees of Image</label>
          <img
            src="https://i.pravatar.cc/300?img="
            width="40"
            className="rounded-circle img"
          />
        </div>
        <input
          type="text"
          className="w-100 input"
          value="https://i.pravatar.cc/300?img="
        />
      </div>
      <div className="d-flex flex-column justify-content-start align-items-start mb-4">
        <label>Describe</label>
        <textarea className="form-control" type="text" ></textarea>
      </div>
      <div>
        <button type="submit" className="btn-submit">
          Submit
        </button>
      </div>
    </form>
  );
}
