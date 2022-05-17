import React from 'react';
import './NewProduct.css';

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="newUserTitle">New Product</h1>

      <form>
        <div className="groupsContainer">
          <div className="formGroup formGroupProduct">
            <label htmlFor="file" className="labelInput">
              Image
            </label>
            <input type="file" id="file" placeholder="john" />
          </div>

          <div className="formGroup formGroupProduct">
            <label htmlFor="name" className="labelInput">
              Name
            </label>
            <input
              type="text"
              className="formInput"
              placeholder="John Smith"
              id="name"
            />
          </div>

          <div className="formGroup formGroupProduct">
            <label htmlFor="Stock" className="labelInput">
              Stock
            </label>
            <input
              type="text"
              className="formInput"
              id="Stock"
              placeholder="john@gmail.com"
            />
          </div>

          <div className="formGroup formGroupProduct">
            <label htmlFor="password" className="labelInput">
              Active
            </label>
            <select className="formInput">
              <option defaultValue={true} disabled selected>
                Choose active
              </option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

          <div className="formGroup formGroupProduct">
            <button className="newUserBtn">Create</button>
          </div>
        </div>
      </form>
    </div>
  );
}
