import React from "react";
import { useForm } from "react-hook-form";
import "./tableUser.scss";
import { getAllUsers } from "../../utils/storaje";
export default function TableUser({ editUser }) {
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
  const users = getAllUsers();
  const user = editUser.status
    ? users.find((user) => user.id == editUser.id)
    : "";
  const imgsrc =
    "https://i.pravatar.cc/300?img=" + editUser.status ? user.id : "";
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: editUser.status ? user.firstname : "",
      family: editUser.status ? user.lastname : "",
      phone: editUser.status ? user.phone : "",
      province: editUser.status ? listOfProvince[user.province] : "",
      image: editUser.status ? "https://i.pravatar.cc/300?img=" + user.id : "",
    },
  });

  function onSubmit(data) {
    console.log(data);
  }
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
          <select
            className="input"
            {...register("province", {
              required: "Select the province",
            })}
          >
            {listOfProvince.map((province) => (
              <option key={province}>{province}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-start align-items-start mb-4">
        <div className="d-flex  justify-content-center align-items-center">
          <label className="mb-1 label">Addrees of Image</label>
          <img src={imgsrc} width="40" className="rounded-circle img" />
        </div>
        <input
          type="text"
          className="w-100 input"
          {...register("image", {
            required: "Select the image",
          })}
        />
      </div>
      <div className="d-flex flex-column justify-content-start align-items-start mb-4">
        <label>Describe</label>
        <textarea className="form-control" type="text"></textarea>
      </div>
      <div>
        <button type="submit" className="btn-submit">
          Submit
        </button>
      </div>
    </form>
  );
}
