import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';
import Navigation from './Navigation';
import { CreateBlog } from './CreateBlog';
import { EditBlog } from './EditBlog';
import { ViewBlog } from './Viewthefkingblog';

import Posts from './Posts/Posts';
import Signup from './Authentication/Signup';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

function App() {
    const [user, setUser] = useState(false);
    useEffect(() => {
        const loggedInUser = localStorage.getItem('user');
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            setUser(foundUser);
        }
    }, []);

    let blog = {
        title: 'A blog',
        content: 'Im too tired for this shit',
    };
        return (
        <>
            <Navigation isAdmin='true' user={user} setUser={setUser} />
            <Container
                className='d-flex  justify-content-center'
                style={{ minHeight: '100vh' }}
            >
                <div className='w-100'>
                    <Router>
                        <Switch>
                            <Route
                                exact
                                path='/blog/:id'
                                render={() => (
                                    <PrivateRoute>
                                        <ViewBlog />
                                    </PrivateRoute>
                                )}
                            />
                            <Route
                                exact
                                path='/edit/:id'
                                render={(props) => (
                                    <PrivateRoute>
                                        <EditBlog />
                                    </PrivateRoute>
                                )}
                            />
                            <Route
                                exact
                                path='/create'
                                render={(props) => (
                                    <PrivateRoute>
                                        <CreateBlog />
                                    </PrivateRoute>
                                )}
                            />
                            <Route
                                exact
                                path='/'
                                render={(props) => (
                                    <PrivateRoute>
                                        <Posts useronly={true} />
                                    </PrivateRoute>
                                )}
                            />
                            <Route
                                exact
                                path='/blogs'
                                render={(props) => (
                                    <PrivateRoute>
                                        <Posts />
                                    </PrivateRoute>
                                )}
                            />
                            <Route
                                path='/signup'
                                render={(props) => <PublicRoute> <Signup setUser={setUser} /></PublicRoute>}
                            />
                            <Route
                                path='/login'
                                render={(props) => <PublicRoute><Login setUser={setUser} /></PublicRoute>}
                            />
                        </Switch>
                    </Router>
                </div>
            </Container>
        </>
    );
}

export default App;
