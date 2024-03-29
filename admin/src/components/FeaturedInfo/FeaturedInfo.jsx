import React from 'react';
import './FeaturedInfo.css';

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featured-item">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,415</span>
          <span className="featuredMoneyRate">
            -11.4
            <i className="bi bi-arrow-down bad-rate"></i>
          </span>
        </div>

        <span className="featuredResult">Compared to last month</span>
      </div>

      <div className="featured-item">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,415</span>
          <span className="featuredMoneyRate">
            -1.4
            <i className="bi bi-arrow-down bad-rate"></i>
          </span>
        </div>

        <span className="featuredResult">Compared to last month</span>
      </div>

      <div className="featured-item">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,225</span>
          <span className="featuredMoneyRate">
            +2.4
            <i class="bi bi-arrow-up good-rate"></i>
          </span>
        </div>

        <span className="featuredResult">Compared to last month</span>
      </div>
    </div>
  );
}
