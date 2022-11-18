import React from 'react'
import stock from '../imgs/stock_app.png'
import blog from '../imgs/react_social_media.png'
import phonebook from '../imgs/phonebook.png'
import weather from '../imgs/weather.png'

export default function Portfolio() {
  return (
    <>
    <div className='websites row align-items-center pb-5'>
        <img src={stock} alt="" className='webimage col order-last order-lg-first img-fluid rounded p-0 w-25 ' />
        <div className='col-lg-3 text-start ms-3 mt-4'>
            <h1 className='display-6 text-center'>Stock Trading App </h1>
            <p className=''><small>
                This is a secure stock trading app with a Flask backend and a React frontend. It fetches from the Finnhub API for real-time stock quotes and other financials. Users can signup, login, edit their info, search for stocks, deposit/withdraw funds, buy/sell stocks, and view their real-time portfolio value all with secure authentication access for the user. It's pretty cool, check it out!
                </small>
            </p>
            <div className='webbuttons row align-items-center justify-content-around'>
                <a href="https://stock-trading-app-alejandro.web.app/" target="_blank" className="col-6 btn p-1 m-0 ">Stock Trading App</a>
                <a href="https://github.com/Alejandro-Jaime-Pozas/stock_trading_app_flask.git" target="_blank" className="col-1 fa fa-github "></a>
            </div>
        </div>
    </div>
    <div className='websites row align-items-center py-5 my-5'>
        <img src={blog} alt="" className='webimage col order-last img-fluid rounded p-0 w-25 ' />
        <div className='col-lg-3 text-start ms-3 mt-4'>
            <h1 className='display-6 text-center'>Social Media App </h1>
            <p className=''><small>
                This social media app with React as a frontend was made using an existing Flask backend. This app was designed in two days, allowing for full user CRUD capabilites, and the ability to view all posts for all users, but only allow a user to edit, delete, and create their own posts. 
                </small>
            </p>
            <div className='webbuttons row align-items-center justify-content-around'>
                <a href="https://react-social-media-blog.herokuapp.com/" target="_blank" className="col-6 btn p-1 m-0 ">Social Media App</a>
                <a href="https://github.com/Alejandro-Jaime-Pozas/react_day5.git" target="_blank" className="col-1 fa fa-github "></a>
            </div>
        </div>
    </div>
    <div className='websites row align-items-center py-5 my-5'>
        <img src={phonebook} alt="" className='webimage col order-last order-lg-first img-fluid rounded p-0 w-25 ' />
        <div className='col-lg-3 text-start ms-3 mt-4'>
            <h1 className='display-6 text-center'>Phonebook App </h1>
            <p className=''><small>
                The phonebook app was made using Flask with Jinja templating, WTForms, SQLAlchemy, and flask login management for authentication. It's a static flask frontend, nothing fancy, but allows the user to signup and login, view all of the contacts on their phonebook, add/edit/delete their contacts, with the use of flask routes that utilize sql database models to manipulate user data.  
                </small>
            </p>
            <div className='webbuttons row align-items-center justify-content-around'>
                <a href="https://phonebook-contacts-flask.herokuapp.com/" target="_blank" className="col-6 btn p-1 m-0 ">Phonebook App</a>
                <a href="https://github.com/Alejandro-Jaime-Pozas/flask_phonebook_v2.git" target="_blank" className="col-1 fa fa-github "></a>
            </div>
        </div>
    </div>
    <div className='websites row align-items-center py-5 my-5'>
        <img src={weather} alt="" className='webimage col order-last img-fluid rounded p-0 w-25 ' />
        <div className='col-lg-3 text-start ms-3 mt-4'>
            <h1 className='display-6 text-center'>Weather App </h1>
            <p className=''><small>
                If you made it this far reading, good for you. This weather app API accesses a 3rd party API to give the user the current weather, highs and lows using a simple JavaScript design to show the user the weather in any world city. Colors change according to how the weather is and a suggested message is displayed. 
                </small>
            </p>
            <div className='webbuttons row align-items-center justify-content-around'>
                <a href="#" target="_blank" className="col-6 btn p-1 m-0 ">Weather App (NA)</a>
                <a href="https://github.com/Alejandro-Jaime-Pozas/js_day5.git" target="_blank" className="col-1 fa fa-github "></a>
            </div>
        </div>
    </div>
    
    </>
  )
}
