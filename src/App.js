import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Portfolio from './components/Portfolio.jsx';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';

function App() {

    // WHEN TRYING TO DEPLOY AFTER RUNNING BUILD, CHECK HERE: https://stackoverflow.com/questions/62069931/reactjs-app-deployed-to-firebase-hosting-not-updating-after-first-deployment

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
                    <Route path='/' element={<Portfolio />} />
                    <Route path='/about' element={<AboutMe />} />
                    <Route path='/contact' element={<ContactMe />} />
                </Routes>
            </div>
        </>
    )
}

export default App;