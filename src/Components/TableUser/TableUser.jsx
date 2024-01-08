import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./tableUser.scss";
import { addUsers, getAllUsers, updateUsers } from "../../utils/storaje";
import { toast } from "react-toastify";
export default function TableUser({
  editUser,
  setUsers,
  setEditUser,
  setAddUserClicked,
  setSelectedUpdateUser,
}) {
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
  // console.log(user);
  const { register, handleSubmit, watch, formState } = useForm({
    defaultValues: {
      name: editUser.status ? user.firstname : "",
      family: editUser.status ? user.lastname : "",
      phone: editUser.status ? user.phone : "",
      province: editUser.status ? listOfProvince[user.province] : "",
      image: editUser.status ? user.img : "https://i.pravatar.cc/300?img=",
    },
  });
  const { errors } = formState;

  function onSubmit(data) {
    if (editUser.status) {
      console.log(
        editUser.id,
        data.name,
        data.family,
        data.phone,
        listOfProvince.indexOf(data.province),
        data.image
      );

      updateUsers(
        editUser.id,
        data.name,
        data.family,
        data.phone,
        listOfProvince.indexOf(data.province),
        data.image
      );
      setSelectedUpdateUser({
        status: true,
        user: {
          id: editUser.id,
          firstname: data.name,
          lastname: data.family,
          phone: data.phone,
          province: listOfProvince.indexOf(data.province),
          img: data.image,
        },
      });
      toast.success("Successfully Update");
    } else {
      addUsers(
        data.name,
        data.family,
        data.phone,
        listOfProvince.indexOf(data.province),
        data.image
      );
      toast.success("Successfully Add New User");
    }

    const users = getAllUsers();
    setUsers(users);
    setEditUser({ status: false, id: editUser.id });
    setAddUserClicked(false);
  }
  const imgsrc = editUser.status ? user.img : watch("image");
  return (
    <form className="table w-75 m-auto" onSubmit={handleSubmit(onSubmit)}>
      <div className="d-flex justify-content-between align-items-center mb-3 ">
        <div className="d-flex flex-column justify-content-center align-items-start ">
          <label className="mb-1 label">Name</label>
          <input
            type="text"
            className="input"
            {...register("name", {
              required: "You must enter a name",
              minLength: {
                value: 3,
                message: "Name must be 3 Characters at least",
              },
              maxLength: {
                value: 10,
                message: "Name must be 10 Characters at most",
              },
            })}
          />
          {errors.name && <p className="errors">{errors.name.message}</p>}
        </div>
        <div className="d-flex flex-column justify-content-center align-items-start ">
          <label className="mb-1 label">Family</label>
          <input
            type="text"
            className="input"
            {...register("family", {
              required: "You must enter a family",
              minLength: {
                value: 3,
                message: "Family must be 3 Characters at least",
              },
              maxLength: {
                value: 10,
                message: "Family must be 10 Characters at most",
              },
            })}
          />
          {errors.family && <p className="errors">{errors.family.message}</p>}
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center  mb-3">
        <div className="d-flex flex-column justify-content-center align-items-start ">
          <label className="mb-1 label">Phone</label>
          <input
            type="text"
            className="input"
            {...register("phone", {
              required: "You must enter a Phone number",
              minLength: {
                value: 12,
                message: "Phone number must be 12 number",
              },
              maxLength: {
                value: 12,
                message: "Phone number must be 12 number",
              },
            })}
          />
          {errors.phone && <p className="errors">{errors.phone.message}</p>}
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
          {errors.province && (
            <p className="errors">{errors.province.message}</p>
          )}
        </div>
      </div>
      <div className="d-flex flex-column justify-content-start align-items-start mb-4">
        <div className="d-flex  justify-content-center align-items-center">
          <label className="mb-1 label">Address of Image</label>
          <img src={imgsrc} width="40" className="rounded-circle img" />
        </div>

        <input
          type="text"
          className="w-100 input"
          {...register("image", {
            required: "Select the image",
          })}
        />
        {errors.image && <p className="errors">{errors.image.message}</p>}
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
