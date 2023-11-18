import React, { useState } from "react";
import { useDispatch } from "react-redux";
// generate random id for each record so we use nanoid
import { nanoid } from "@reduxjs/toolkit";

// save data using postAdded using action
import { postAdded } from "./postSlice";
import '../../mycss/index.css'

const AddPostForm = () => {
  const [title, settitle] = useState('');
  const [content, setcontent] = useState('');

  const onTitleChanged = (e) => settitle(e.target.value);
  const onContentChanged = (e) => setcontent(e.target.value);
  const dispatch = useDispatch();
  // save form using action,dispatch
  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        postAdded({
          id: nanoid,
          title,
          content,
        })
      );
      settitle('');
      setcontent('');
    }
  };
  return (
    // <div>
      <section className="myclass">
        <h2>Add New Post Form</h2>
        <form>
          <label htmlFor="postTitle">Post Title:</label>
          <input
            type="text"
            id="posttitle"
            value={title}
            onChange={onTitleChanged}
          /> <br></br>
          <label htmlFor="postcontent">Post Content:</label>
          <textarea
            type="text"
            id="postcontent"
            value={content}
            onChange={onContentChanged}
          /><br></br>
          <button type="button" onClick={onSavePostClicked}>
            Save Post
          </button>
        </form>
      </section>
  );
};

export default AddPostForm;
