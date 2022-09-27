import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Register from './components/Register';
// import AlertMessage from './components/AlertMessage';
import Login from './components/Login';
import CreatePost from './components/CreatePost';

function App() {
    // console.log('hello')
    // Date obj gives us the date, 
    // const now = new Date();
    // set a state for an alert msg. if there is a msg, show its content (str) if not, dont show message
    // const [message, setMessage] = useState(null); 
    // const [category, setCategory] = useState(null); 
    // const [loggedIn, setLoggedIn] = useState((localStorage.getItem('token') && new Date(localStorage.getItem('expiration')) > now) ? true : false) // gets token and expiration from Application>local Storage
    
    // inserting a flash msg and category to a fn so that it can be pushed as a prop to other js files
    // const flashMessage = (message, category) => {
    //     setMessage(message);
    //     setCategory(category);
    // }

    return (
        <>
            <Navbar name='Brian' city='Chicago' />
            <div className='container'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/create_post' element={<CreatePost />} />
                </Routes>
            </div>
        </>
    )
}

export default App;
