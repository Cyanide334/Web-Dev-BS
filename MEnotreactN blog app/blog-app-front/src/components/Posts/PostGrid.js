import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination';
import PostCard from './PostCard';

const PostGrid = ({ data }) => {
    let group = [];
    let groupedData = [];
    data.map((element, idx) => {
        if (idx % 3 !== 2) {
            group.push(element);
        } else {
            group.push(element);
            groupedData.push(group);
            group = [];
        }
    });
    if (group.length > 0) {
        groupedData.push(group);
    }

    return (
        <Container>
            {groupedData.map((element, idx) => {
                return (
                    <Row key={idx}>
                        {element.map((data, idx) => {
                            return (
                                <Col className='mt-4' key={idx} md={4}>
                                    <PostCard key={idx} {...data} />
                                </Col>
                            );
                        })}
                    </Row>
                );
            })}
        </Container>
    );
};

export default PostGrid;
