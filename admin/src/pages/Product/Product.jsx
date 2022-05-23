import React from 'react';
import { Link,useLocation } from 'react-router-dom';

import './Product.css';
import { productData } from '../../dummyData';
import Chart from '../../components/Chart/Chart';

export default function Product() {
  const {movie}=useLocation().state;

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newProduct" className="createProductBtn">
          <span>Create</span>
        </Link>
      </div>

      <div className="productTop">
        <div className="rightTop">
          <div className="productInfoTop">
            <img
              src={movie.imgTitle}
              alt="top-img"
              className="topInfoImg"
            />
            <span className="infoTitleTop">{movie.title}</span>
          </div>

          <div className="rightTopBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">Id:</span>
              <span className="productInfoValue">{movie._id}</span>
            </div>

            <div className="productInfoItem">
              <span className="productInfoKey">Genre:</span>
              <span className="productInfoValue">{movie.genre}</span>
            </div>

            <div className="productInfoItem">
              <span className="productInfoKey">Limit:</span>
              <span className="productInfoValue">{movie.limit}</span>
            </div>

            <div className="productInfoItem">
              <span className="productInfoKey">Year:</span>
              <span className="productInfoValue">{movie.year}</span>
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
                value={movie.title}
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
                value={movie._id}
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
                value={movie.genre}
              />
            </div>

            <div className="bottomGroup">
              <label htmlFor="" className="bottomLabel">
                Limit
              </label>
              <input
                type="text"
                className="bottomInput"
                disabled
                value={movie.limit}
              />
            </div>

            <div className="bottomGroup">
              <label htmlFor="" className="bottomLabel">
                Trailer
              </label>
              <input
                type="file"
                className="bottomInput"
              />
            </div>

            <div className="bottomGroup">
              <label htmlFor="" className="bottomLabel">
                Video
              </label>
              <input
                type="file"
                className="bottomInput"
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
                src={movie.imgTitle}
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
