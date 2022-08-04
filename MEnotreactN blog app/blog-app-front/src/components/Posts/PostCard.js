import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const PostCard = ({ _id,title, content,date,user:{name,email} }) => {
    return (
        <>
            <Link
                to={'/blog/' + _id}
                style={{ textDecoration: 'none', color: 'black' }}
            >
                <Card className='shadow-lg h-100 hover-bg-200'>
                    <Card.Body>
                        <div className='py-3'>
                            <h5 className='fs-0'>{title}</h5>
                            <div className='row justify-content-between'>
                                <p className='col'>
                                    {name}
                                </p>
                                <p className='text-opacity-25 col'>
                                    {date.slice(0, 10)}
                                </p>
                            </div>

                            <p className='fs--1 mb-1'>
                                {content.substr(0, 150)}
                                {content.length > 150 ? '...' : null}
                            </p>
                        </div>
                        <div></div>
                    </Card.Body>
                </Card>
            </Link>
        </>
    );
};

export default PostCard;
