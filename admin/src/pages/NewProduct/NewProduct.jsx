import { useState,useContext } from 'react';

import './NewProduct.css';

import storage from '../../firebase';
import MovieContext from '../../context/movies/movieContext';

export default function NewProduct() {
  const [newMovie,setMovie]=useState({
    title:'',
    genre:'',
    limit:'',
    desc:'',
    year:'',
    isSeries:false,
    duration:'',
    img:'',
    imgTitle:'',
    imgSm:'',
    video:'',
    trailer:''
  });
  const [uploaded,setUploaded]=useState(0);
  const {dispatch,postMovie}=useContext(MovieContext)

  const handleInputsChanges=(e)=>{
    setMovie({
      ...newMovie,
      [e.target.name]:e.target.value
    })
  }

  const handleFilesChange=(e)=>{
    setMovie({
      ...newMovie,
      [e.target.name]:e.target.files[0]
    })
  }

  const upload=(items)=>{
    items.forEach((item)=>{
      const filename=new Date().getTime()+item.label+item.file.name;
      const uploadTask=storage.ref(`/movies/${filename}`).put(item.file);

      uploadTask.on('state_changes',(snapshot)=>{
        const progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
        console.log(`Upload is ${progress}% done`);
      },(err)=>{
        console.log(err)
      },()=>{
        uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
          setMovie((prev)=>{
            return { ...prev,[item.label]:url }
          })
          setUploaded((prev)=>prev+1);
        })
      })
    })
  }

  const handleUpload=(e)=>{
    e.preventDefault();
    upload([
      {file:newMovie.img,label:'img'},
      {file:newMovie.imgTitle,label:'imgTitle'},
      {file:newMovie.imgSm,label:'imgSm'},
      {file:newMovie.video,label:'video'},
      {file:newMovie.trailer,label:'trailer'},
    ])
  }

  const handleSubmit=(e)=>{
    e.preventDefault();

    dispatch(postMovie(newMovie));
  }

  return (
    <div className="newProduct">
      <h1 className="newUserTitle">New Movie</h1>

      <form>
        <div className="groupsContainer">
          <div className="formGroup formGroupProduct">
            <label htmlFor="file" className="labelInput">
              Image
            </label>
            <input onChange={(e)=>handleFilesChange(e)} type="file" name='img' id="img" />
          </div>

          <div className="formGroup formGroupProduct">
            <label htmlFor="file" className="labelInput">
              Image Title
            </label>
            <input onChange={(e)=>handleFilesChange(e)} type="file" name='imgTitle' id="imgTitle" />
          </div>

          <div className="formGroup formGroupProduct">
            <label htmlFor="file" className="labelInput">
              Thumbnail image
            </label>
            <input onChange={(e)=>handleFilesChange(e)} type="file" id="imgSm" name='imgSm' />
          </div>

          <div className="formGroup formGroupProduct">
            <label htmlFor="name" className="labelInput">
              Title
            </label>
            <input
              onChange={(e)=>handleInputsChanges(e)}
              type="text"
              className="formInput"
              placeholder="Batman begins"
              id="title"
              name='title'
            />
          </div>

          <div className="formGroup formGroupProduct">
            <label htmlFor="Stock" className="labelInput">
              Description
            </label>
            <input
              onChange={(e)=>handleInputsChanges(e)}
              type="text"
              className="formInput"
              id="desc"
              name='desc'
              placeholder="comedy"
            />
          </div>

          <div className="formGroup formGroupProduct">
            <label htmlFor="Stock" className="labelInput">
              Genre
            </label>
            <input
              onChange={(e)=>handleInputsChanges(e)}
              type="text"
              className="formInput"
              id="genre"
              name='genre'
              placeholder="comedy"
            />
          </div>

          <div className="formGroup formGroupProduct">
            <label htmlFor="Stock" className="labelInput">
              Limit
            </label>
            <input
              onChange={(e)=>handleInputsChanges(e)}
              type="text"
              className="formInput"
              id="limit"
              name='limit'
              placeholder="16"
            />
          </div>

          <div className="formGroup formGroupProduct">
            <label htmlFor="Stock" className="labelInput">
              Year
            </label>
            <input
              onChange={(e)=>handleInputsChanges(e)}
              type="text"
              className="formInput"
              id="year"
              name='year'
              placeholder="2022"
            />
          </div>

          <div className="formGroup formGroupProduct">
            <label htmlFor="Stock" className="labelInput">
              Duration
            </label>
            <input
              onChange={(e)=>handleInputsChanges(e)}
              type="text"
              className="formInput"
              id="duration"
              name='duration'
              placeholder="1h 30m"
            />
          </div>

          <div className="formGroup formGroupProduct">
            <label htmlFor="Stock" className="labelInput">
              Is serie
            </label>
            <select id='isSeries' name='isSeries'>
              <option>Is serie</option>
              <option value='false' >No</option>
              <option value='true' >Yes</option>
            </select>
          </div>

          <div className="formGroup formGroupProduct">
            <label htmlFor="file" className="labelInput">
              Video
            </label>
            <input onChange={(e)=>handleFilesChange(e)} type="file" name='video' id="video" />
          </div>

          <div className="formGroup formGroupProduct">
            <label htmlFor="file" className="labelInput">
              Trailer
            </label>
            <input onChange={(e)=>handleFilesChange(e)} type="file" name='trailer' id="trailer" />
          </div>

          <div className="formGroup formGroupProduct">
            {uploaded===5 ? (
              <button className="newUserBtn" onClick={(e)=>handleSubmit(e)} >Create</button>
            ):(
              <button className="newUserBtn" onClick={(e)=>handleUpload(e)}>Upload</button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
