import React from 'react';
import { Link } from 'react-router-dom';

import './UserPage.css';

export default function UserPage() {
  return (
    <div className="userPage">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="createButton">Create</button>
        </Link>
      </div>

      <div className="userInfoContainer">
        <div className="showInfo">
          <div className="showTopInfo">
            <img
              src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXNpYW4lMjBnaXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="img-info"
              className="top-img"
            />

            <div className="userTopInfo">
              <span className="userName">Anna Becker</span>
              <span className="userProfession">Software Engineer</span>
            </div>
          </div>

          <div className="showBottomInfo">
            <span className="bottomTitle">Account Details</span>
            <div className="bottomInfoContainer">
              <div className="detailsContainer">
                <i className="bi bi-person"></i>
                <span className="infoDetail">annabeck69</span>
              </div>

              <div className="detailsContainer">
                <i className="bi bi-calendar"></i>
                <span className="infoDetail">10.12.2004</span>
              </div>
            </div>

            <span className="bottomTitle">Contact Details</span>
            <div className="bottomInfoContainer">
              <div className="detailsContainer">
                <i className="bi bi-phone"></i>
                <span className="infoDetail">+1 234 567 89</span>
              </div>

              <div className="detailsContainer">
                <i className="bi bi-envelope"></i>
                <span className="infoDetail">annabeck69@gmail.com</span>
              </div>

              <div className="detailsContainer">
                <i className="bi bi-heptagon"></i>
                <span className="infoDetail">New York,USA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="showUpdate">
          <h2 className="userTitle">Edit</h2>

          <form className="updateUser">
            <div className="inputsContainer">
              <div className="form-group">
                <label htmlFor="username" className="label-input">
                  Username
                </label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="annabeck69"
                  name="username"
                  id="username"
                />
              </div>

              <div className="form-group">
                <label htmlFor="fullname" className="label-input">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Anna Becker"
                  id="fullname"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="label-input">
                  Email
                </label>
                <input
                  type="email"
                  className="form-input"
                  placeholder="annabecker69@gmail.com"
                  id="email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="label-input">
                  Phone
                </label>
                <input
                  type="text"
                  className="form-input"
                  id="phone"
                  placeholder="+1 234 567 89"
                />
              </div>

              <div className="form-group">
                <label htmlFor="city" className="label-input">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  placeholder="New York,USA"
                  className="form-input"
                />
              </div>
            </div>

            <div className="updateAvatar">
              <div className="img-container">
                <img
                  src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXNpYW4lMjBnaXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt="update-avatar"
                  className="avatar-img"
                />

                <i className="bi bi-upload"></i>
              </div>

              <button className="updateButton" type="submit">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
