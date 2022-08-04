import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import axios from "axios"
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

export const ViewBlog = ({ loggedInUser }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [date, setDate] = useState('');
    const [isOwner,setIsOwner]=useState(false)
    const params = useParams();
    const history=useHistory();
    const deleteBlog=()=>{
        axios.delete(`http://localhost:8080/blogs/delete/${params.id}`, {
            headers: { 'x-access-token': loggedInUser.accessToken },
        }).then(()=>{
            history.push('/')
        }).catch((err)=>{
            console.log(err)
        });
    }
    useEffect(() => {
        axios
            .get(`http://localhost:8080/blogs/ViewBlog/${params.id}`,{headers: {'x-access-token':loggedInUser.accessToken }})
            .then((res) => {
                setTitle(res.data.title);
                setContent(res.data.content);
                setDate(res.data.date.slice(0, 10));
                setIsOwner(res.data.user.email===loggedInUser.email)
                
            })
            .catch((err) => {
                console.log(err);
            });
    });

    return (
        <>
            <Card className='my-3'>
                <Card.Header>
                    <h3 className=''>
                        {title}
                        <small className='text-sm float-end'> {date}</small>
                    </h3>
                </Card.Header>
            </Card>
            <Card className='my-3'>
                <Card.Body>
                    <div className='mb-3'>
                        <p className='lead'>{content}</p>
                    </div>
                </Card.Body>
                <Card.Footer className='d-flex justify-content-center'>
                    {isOwner && (
                        <>
                            <Link to={'/edit/' + params.id}>
                                <Button variant='primary' size='lg'>
                                    Edit
                                </Button>
                            </Link>
                            <Button variant='danger' className="ms-3" size='lg' onClick={deleteBlog}>
                                Delete
                            </Button>
                        </>
                    )}
                </Card.Footer>
            </Card>
        </>
    );
};
