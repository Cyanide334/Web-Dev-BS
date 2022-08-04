import React from 'react';

import { Card } from "react-bootstrap";
import { useInput } from './Hooks/inputHook';
import axios from "axios"


export const CreateBlog = ({}) => {
    const { value: Tvalue, bind: Tbind, reset: Treset } = useInput('');
    const { value: Cvalue, bind: Cbind, reset: Creset } = useInput('');
    const handleSubmit = (evt) => {
        evt.preventDefault();
        const loggedInUser = localStorage.getItem('user');
        let foundUser;
        if (loggedInUser) {
            foundUser = JSON.parse(loggedInUser);
        }
        if (Tvalue === '') {
            alert('Title Cannot Be Empty!');
            return;
        }
        if (Cvalue === '') {
            alert('Content Cannot Be Empty!');
            return;
        }
        let blog = {
            title: Tvalue,
            content: Cvalue,
            date: new Date(),
            email: foundUser.email,
        };
        axios
            .post('http://localhost:8080/blogs/create', blog, {
                headers: { 'x-access-token': foundUser.accessToken },
            })
            .then((res) => {
                console.log(res);
                alert('New Blog Created!');
                Treset();
                Creset();
                //navigate('/blog')
            })
            .catch((err) => {
                alert('An Error Occurred');

                console.log(err);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <Card className='my-3'>
                <Card.Header>
                    <h3 className=''>Create Your Own Blog! </h3>
                </Card.Header>
            </Card>
            <Card className='my-3'>
                <Card.Header>
                    <div>
                        <label className='lead' for='blogTitle'>
                            Add a title
                        </label>
                        <input
                            className='form-control'
                            id='blogTitle'
                            type='text'
                            placeholder='Captivating Title - I Want Cookies!'
                            {...Tbind}
                        />
                    </div>
                </Card.Header>
                <Card.Body>
                    <div className='mb-3'>
                        <label className='lead' for='blogText'>
                            Content
                        </label>
                        <textarea
                            className='form-control rounded-0 border-200'
                            placeholder='What do you want to talk about?'
                            rows='10'
                            {...Cbind}
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
