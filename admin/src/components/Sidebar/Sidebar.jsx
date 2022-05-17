import React from 'react';
import { Link } from 'react-router-dom';

import './Sidebar.css';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Dashboard</h3>
          <ul className="sidebar-list">
            <li className="sidebar-listItem">
              <Link to="/" className="link">
                <i className="bi bi-house-fill sidebar-icon"></i>
                Home
              </Link>
            </li>
            <li className="sidebar-listItem">
              <i className="bi bi-graph-up sidebar-icon"></i>
              Analytics
            </li>
            <li className="sidebar-listItem">
              <i className="bi bi-graph-up-arrow sidebar-icon"></i>
              Sales
            </li>
          </ul>
        </div>

        <div className="sidebar-menu">
          <h3 className="sidebar-title">Quick Menu</h3>
          <ul className="sidebar-list">
            <li className="sidebar-listItem">
              <Link to="/users" className="link">
                <i className="bi bi-person sidebar-icon"></i>
                Users
              </Link>
            </li>
            <li className="sidebar-listItem">
              <Link to="/products" className="link">
                <i className="bi bi-shop-window sidebar-icon"></i>
                Products
              </Link>
            </li>
            <li className="sidebar-listItem">
              <i className="bi bi-currency-dollar sidebar-icon"></i>
              Transactions
            </li>
            <li className="sidebar-listItem">
              <i className="bi bi-bar-chart-line sidebar-icon"></i>
              Reports
            </li>
          </ul>
        </div>

        <div className="sidebar-menu">
          <h3 className="sidebar-title">Notifications</h3>
          <ul className="sidebar-list">
            <li className="sidebar-listItem">
              <i className="bi bi-envelope sidebar-icon"></i>
              Mail
            </li>
            <li className="sidebar-listItem">
              <i className="bi bi-graph-up sidebar-icon"></i>
              Feedback
            </li>
            <li className="sidebar-listItem">
              <i className="bi bi-chat-left sidebar-icon"></i>
              Messages
            </li>
          </ul>
        </div>

        <div className="sidebar-menu">
          <h3 className="sidebar-title">Dashboard</h3>
          <ul className="sidebar-list">
            <li className="sidebar-listItem">
              <i className="bi bi-briefcase sidebar-icon"></i>
              Manage
            </li>
            <li className="sidebar-listItem">
              <i className="bi bi-graph-up-arrow sidebar-icon"></i>
              Analytics
            </li>
            <li className="sidebar-listItem">
              <i className="bi bi-exclamation-circle-fill sidebar-icon"></i>
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
