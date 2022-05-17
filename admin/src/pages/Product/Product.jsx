import React from 'react';
import { Link } from 'react-router-dom';

import './Product.css';
import { productData } from '../../dummyData';
import Chart from '../../components/Chart/Chart';

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newProduct" className="createProductBtn">
          <span>Create</span>
        </Link>
      </div>

      <div className="productTop">
        <div className="leftTop">
          <Chart
            title="Sales Perfomance"
            dataKey="Sales"
            useData={productData}
          />
        </div>
        <div className="rightTop">
          <div className="productInfoTop">
            <img
              src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="top-img"
              className="topInfoImg"
            />
            <span className="infoTitleTop">Apple Airpods</span>
          </div>

          <div className="rightTopBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">Id:</span>
              <span className="productInfoValue">123</span>
            </div>

            <div className="productInfoItem">
              <span className="productInfoKey">Sales:</span>
              <span className="productInfoValue">5123</span>
            </div>

            <div className="productInfoItem">
              <span className="productInfoKey">Active:</span>
              <span className="productInfoValue">yes</span>
            </div>

            <div className="productInfoItem">
              <span className="productInfoKey">In stock:</span>
              <span className="productInfoValue">no</span>
            </div>
          </div>
        </div>
      </div>

      <div className="productBottom">
        <form>
          <div className="leftBottom">
            <div className="bottomGroup">
              <label htmlFor="" className="bottomLabel">
                Product Name
              </label>
              <input
                type="text"
                className="bottomInput"
                disabled
                value="Apple Airpods"
              />
            </div>

            <div className="bottomGroup">
              <label htmlFor="" className="bottomLabel">
                In stock
              </label>
              <select>
                <option defaultValue={true}>No</option>
                <option>Yes</option>
              </select>
            </div>

            <div className="bottomGroup">
              <label htmlFor="" className="bottomLabel">
                Active
              </label>
              <select>
                <option defaultValue={true}>Yes</option>
                <option>No</option>
              </select>
            </div>
          </div>
          <div className="rightBottom">
            <div className="imgContainer">
              <img
                src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="bottom-img"
                className="bottomImg"
              />
              <i class="bi bi-upload"></i>
            </div>
            <button className="bottomBtn">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
