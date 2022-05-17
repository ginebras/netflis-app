import React from 'react';
import './NewUser.css';

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>

      <form>
        <div className="formGroup">
          <label htmlFor="username" className="labelInput">
            Username
          </label>
          <input
            type="text"
            className="formInput"
            id="username"
            placeholder="john"
          />
        </div>

        <div className="formGroup">
          <label htmlFor="fullname" className="labelInput">
            Full Name
          </label>
          <input
            type="text"
            className="formInput"
            placeholder="John Smith"
            id="fullname"
          />
        </div>

        <div className="formGroup">
          <label htmlFor="email" className="labelInput">
            Email
          </label>
          <input
            type="text"
            className="formInput"
            id="email"
            placeholder="john@gmail.com"
          />
        </div>

        <div className="formGroup">
          <label htmlFor="password" className="labelInput">
            Password
          </label>
          <input
            type="text"
            className="formInput"
            placeholder="password"
            id="password"
          />
        </div>

        <div className="formGroup">
          <label htmlFor="phone" className="labelInput">
            Phone
          </label>
          <input
            type="text"
            className="formInput"
            placeholder="+1 123 456 78"
            id="phone"
          />
        </div>

        <div className="formGroup">
          <label htmlFor="address" className="labelInput">
            Address
          </label>
          <input
            type="text"
            className="formInput"
            id="address"
            placeholder="New York,USA"
          />
        </div>

        <div className="formGroup">
          <label className="labelInput">Gender</label>
          <div className="newGender">
            <input
              className="inputRadio"
              type="radio"
              id="male"
              value="male"
              name="male"
            />
            <label htmlFor="male">Male</label>

            <input
              className="inputRadio"
              type="radio"
              id="female"
              value="female"
              name="female"
            />
            <label htmlFor="female">Female</label>

            <input
              className="inputRadio"
              type="radio"
              id="other"
              name="other"
              value="other"
            />
            <label htmlFor="other">Other</label>
          </div>
        </div>

        <div className="formGroup">
          <label htmlFor="active" className="labelInput">
            Active
          </label>
          <select className="formInput">
            <option disabled>Select option</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        <div className="formGroup">
          <button className="newUserBtn">Create</button>
        </div>
      </form>
    </div>
  );
}
