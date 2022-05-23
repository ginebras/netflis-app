import React from 'react';
import { Link,useLocation } from 'react-router-dom';

import './List.css';
import { productData } from '../../dummyData';
import Chart from '../../components/Chart/Chart';

export default function List() {
  const {list}=useLocation().state;

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newList" className="createProductBtn">
          <span>Create</span>
        </Link>
      </div>

      <div className="productTop">
        <div className="rightTop">
          <div className="productInfoTop">
            <span className="infoTitleTop">{list.title}</span>
          </div>

          <div className="rightTopBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">Id:</span>
              <span className="productInfoValue">{list._id}</span>
            </div>

            <div className="productInfoItem">
              <span className="productInfoKey">Genre:</span>
              <span className="productInfoValue">{list.genre}</span>
            </div>

            <div className="productInfoItem">
              <span className="productInfoKey">Type:</span>
              <span className="productInfoValue">{list.type}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="productBottom">
        <form>
          <div className="leftBottom">
            <div className="bottomGroup">
              <label htmlFor="" className="bottomLabel">
                Name
              </label>
              <input
                type="text"
                className="bottomInput"
                disabled
                value={list.title}
              />
            </div>

            <div className="bottomGroup">
              <label htmlFor="" className="bottomLabel">
                Id
              </label>
              <input
                type="text"
                className="bottomInput"
                disabled
                value={list._id}
              />
            </div>

            <div className="bottomGroup">
              <label htmlFor="" className="bottomLabel">
                Genre
              </label>
              <input
                type="text"
                className="bottomInput"
                disabled
                value={list.genre}
              />
            </div>

            <div className="bottomGroup">
              <label htmlFor="" className="bottomLabel">
                Type
              </label>
              <input
                type="text"
                className="bottomInput"
                disabled
                value={list.type}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
