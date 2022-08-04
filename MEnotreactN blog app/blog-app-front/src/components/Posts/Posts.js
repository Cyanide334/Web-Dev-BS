import React from 'react'
import { Container } from 'react-bootstrap';
import PostsPaginatedGrid from './PostsPaginatedGrid';

const Posts = ({useronly,loggedInUser}) => {


  return (
    <>
    <Container className="mt-3 h-100">
    <PostsPaginatedGrid itemsPerPage={12} useronly={useronly} loggedInUser />
    </Container>
    </>
  )
}

export default Posts