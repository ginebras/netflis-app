import { useState,useContext,useRef } from 'react';

import './NewList.css';

import ListContext from '../../context/lists/listContext';

export default function NewList() {
  const [newList,setList]=useState({
    title:'',
    genre:'',
    type:''  
  });
  const [content,setContent]=useState([]);
  const contentRef=useRef();
  const {dispatch,postList}=useContext(ListContext)

  const handleInputsChanges=(e)=>{
    setList({
      ...newList,
      [e.target.name]:e.target.value
    })
  }

  const handleAddContent=()=>{
    setContent((oldItems)=>[...oldItems,contentRef.current.value]);
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(postList({...newList,content}))

  }

  return (
    <div className="newProduct">
      <h1 className="newUserTitle">New List</h1>

      <form onSubmit={handleSubmit}>
        <div className="groupsContainer">

          <div className="formGroup formGroupProduct">
            <label htmlFor="name" className="labelInput">
              Title
            </label>
            <input
              onChange={(e)=>handleInputsChanges(e)}
              type="text"
              className="formInput"
              placeholder="Best Horror Series"
              id="title"
              name='title'
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
              placeholder="horror"
            />
          </div>

          <div className="formGroup formGroupProduct">
            <label htmlFor="Stock" className="labelInput">
              Content
            </label>
            <input
              type="text"
              className="formInput"
              id="content"
              name='content'
              placeholder="628060df0ac31e8f0e84a76b"
              ref={contentRef}
            />
            <button className="newUserBtn margin" type='button' onClick={handleAddContent}>Add content</button>
          </div>

          <div className="formGroup formGroupProduct">
            <label htmlFor="Stock" className="labelInput">
              Type
            </label>
            <select id='isSeries' name='type' onChange={(e)=>handleInputsChanges(e)}>
              <option>Is serie?</option>
              <option value='series' >Series</option>
              <option value='movies' >Movies</option>
            </select>
          </div>

          <div className="formGroup">
            <button type='submit' className="newUserBtn">Create</button>
          </div>
          
        </div>

      </form>
    </div>
  );
}
