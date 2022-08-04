import React, { useEffect, useMemo } from 'react';
import PostGrid from './PostGrid';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Card } from 'react-bootstrap';
import axios from 'axios';

const getItems = async (limit, offset, user, useronly) => {
    let response = { data: { blogs: [] } };
    let link = `http://localhost:8080/blogs/ViewUserBlog?offset=${offset}&&limit=${limit}`;

    if (!useronly) {
        link = `http://localhost:8080/blogs/ViewAllBlogs?offset=${offset}&&limit=${limit}`;
        console.log(useronly);
    }

    console.log(user);
    try {
        response = await axios.get(link, {
            headers: { 'x-access-token': user.accessToken },
        });
        console.log(response);
    } catch (error) {
        console.error(error);
    }
    return response.data.blogs;
};

const getTotalItems = async (user, useronly) => {
    if (!user) {
        return 0;
    }
    let link = 'http://localhost:8080/blogs/GetTotalUserBlogs';
    if (!useronly) {
        link = `http://localhost:8080/blogs/GetTotalBlogs`;
    }
    
    let response = await axios.get(link, {
        headers: { 'x-access-token': user.accessToken },
    });
    return response.data.count;
};
const PostsPaginatedGrid = ({ itemsPerPage, useronly }) => {
    const [data, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [user, setUser] = useState(false);
    useEffect(() => {
        const loggedInUser = localStorage.getItem('user');
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            setUser(foundUser);
        }
    }, []);
    useEffect(() => {
        const paginate = async () => {
            // Fetch items from another resources.
            setTotalItems(await getTotalItems(user,useronly));
            const endOffset = itemOffset + itemsPerPage;
            console.log(`Loading items from ${itemOffset} to ${endOffset}`);

            let items = await getItems(
                itemsPerPage,
                itemOffset,
                user,
                useronly
            );
            setCurrentItems(items);
            setPageCount(Math.ceil(totalItems / itemsPerPage));
        };

        paginate();
    }, [itemOffset, itemsPerPage, user]);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % totalItems;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );

        setItemOffset(newOffset);
    };
    return (
        <>
            <Card className='mb-3'>
                <Card.Body>
                    <div className='row flex-between-center'>
                        <div className='col-sm-auto mb-2 mb-sm-0'>
                            <h5>{useronly && 'My '}Posts</h5>
                            <h6 className='mb-0 text-muted mt-2'>
                                Showing {itemOffset + 1}-
                                {itemOffset + itemsPerPage} of {totalItems}
                            </h6>
                        </div>
                        <div className='col-sm-auto'>
                            <div className='row gx-2 align-items-center'>
                                <div className='col-auto'></div>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
            <Card className='mb-3 h-100'>
                <Card.Body>
                    <PostGrid data={data} />

                    <Card.Footer className='mt-4 mb-0 d-flex justify-content-center'>
                        <ReactPaginate
                            containerClassName='pagination'
                            pageClassName='page-item'
                            pageLinkClassName='page-link'
                            activeClassName='active'
                            previousClassName='page-link'
                            nextClassName='page-link'
                            breakLabel='...'
                            nextLabel='>'
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={5}
                            pageCount={pageCount}
                            previousLabel='<'
                            renderOnZeroPageCount={null}
                        />
                    </Card.Footer>
                </Card.Body>
            </Card>
        </>
    );
};

export default PostsPaginatedGrid;
