import React, { useRef } from "react";
import { Card } from "react-bootstrap";
import { useInput } from './Hooks/inputHook';
import axios from "axios"
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export const EditBlog = ({loggedInUser}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const titleRef = useRef();
  const contentRef = useRef();
  

  useEffect(() => {
    axios.get(`http://localhost:8080/blogs/ViewBlog/${params.id}`,{headers: {'x-access-token':loggedInUser.accessToken }})
      .then(res => {
        console.log(res)
      setTitle(res.data.title)
      setContent(res.data.content)
      setDate(res.data.date)
    })
    .catch(err =>{
      console.log(err)
    })
  })
  useEffect(() => {
    titleRef.current.value=title;
    contentRef.current.value=content;
  },[title,content]);
  
  const params = useParams()

  const handleSubmit = (evt) => { 
    evt.preventDefault();
    
    if (titleRef.current.value === "") {
      alert('Title Cannot Be Empty!')
      return
    }
    if (contentRef.current.value === "") {
      alert('Content Cannot Be Empty!')
      return
    }

    let blog = { id: params.id, title: titleRef.current.value, content: contentRef.current.value, date: new Date() ,token:loggedInUser.accessToken}
    console.log(blog)
    axios.patch("http://localhost:8080/blogs/edit",blog,{headers: {'x-access-token':loggedInUser.accessToken }})
    .then((res) => {
      alert('Blog Updated')
      })
    .catch((err) => {
        console.log(err)
    })
  }

  return (
      <form onSubmit={handleSubmit}>
          <Card className='my-3'>
              <Card.Header>
                  <h3 className=''>Found Inspiration? Edit Your Blog!</h3>
              </Card.Header>
          </Card>
          <Card className='my-3'>
              <Card.Header>
                  <div>
                      <label className='lead' htmlFor='blogTitle'>
                          Add a title
                      </label>
                      <input
                          className='form-control'
                          id='blogTitle'
                          type='text'
                          ref={titleRef}
                      />
                  </div>
              </Card.Header>
              <Card.Body>
                  <div className='mb-3'>
                      <label className='lead' htmlFor='blogText'>
                          Content
                      </label>
                      <textarea
                          className='form-control rounded-0 border-200'
                          ref={contentRef}
                          rows='10'
                      ></textarea>
                  </div>
              </Card.Body>
              <Card.Footer className='d-flex justify-content-center'>
                  <button className='btn btn-primary' type='submit'>
                      Save
                  </button>
              </Card.Footer>
          </Card>
      </form>
  );
};
