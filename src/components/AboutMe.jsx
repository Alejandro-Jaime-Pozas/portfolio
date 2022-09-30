import React from 'react';
import me from '../imgs/me.jpg'
import domus from '../imgs/domus.jpg'
import bateria from '../imgs/bateria.jpg'
import { Link } from 'react-router-dom';

export default function AboutMe() {
    return (
        <>
        <div className='row align-items-center mb-5'>
            <img src={me} alt="" className='col-4 img-fluid rounded p-0 w-25 ' />
            <div className='col text-start ms-3'>
                <h1 className='display-4'>My Story</h1>
                <p className=''><small>
                    I'm a full stack programmer with <strong>Python/Flask</strong> for the backend and <strong>JavaScript/React</strong> for the frontend. I graduated from the <strong>University of San Diego</strong> with a Bachelor of <strong>Finance</strong> degree in 2017. I have 5 years of work experience, 2 of them as a market researcher for a real estate private equity fund in Austin, and 3 years of startup experience as a <strong>startup founder</strong>, and all the ups and downs that go with it. I completed an intensive coding bootcamp at <strong>Coding Temple</strong> in Sept 2022 and am now ready to start my journey as a Software Engineer for a growing startup company, offering all of the skills and wisdom I've learned along the way.
                    </small>
                </p>
            <a href="https://www.linkedin.com/in/alejandro-jaime/" target="_blank" className="fa fa-linkedin "></a>
            </div>
        </div>
        <div className='row align-items-center my-5'>
            <img src={domus} alt="" className='col-4 order-last img-fluid rounded p-0 ' />
            <div className='col text-start ms-3'>
                <h1 className='display-4'>Skills</h1>
                <p className=''><small>
                    The sofware languages that I have learned include <strong>Python, JavaScript, SQL, HTML, and CSS. </strong> Some of the frameworks and tools I know include <strong>React, Flask, Express, NodeJS, Rest APIs, Git, Heroku, and Firebase</strong>. I can transfer these skills to a full stack, backend, or frontend role by applying my first principles thinking method to create amazing apps, improvements, and to keep on learning.
                    </small>
                </p>
                <div className='row align-items-center justify-content-around'>
                    <a href="https://github.com/Alejandro-Jaime-Pozas" target="_blank" className="col-1 fa fa-github "></a>
                    <Link to="/" className="col-1 btn p-1 m-0 portfolio">Portfolio</Link>
                </div>
            </div>
        </div>
        <div className='row align-items-center my-5'>
            <img src={bateria} alt="" className='col-4 img-fluid rounded p-0 ' />
            <div className='col text-start ms-3'>
                <h1 className='display-4'>Hobbies</h1>
                <p className=''><small>
                I'm self-taught on piano, drums, and guitar. I love music, from Beethoven's <em>Piano Sonata No. 8</em> to The Beatles' <em>Abbey Road</em> to Kendrick Lamar's majestic <em>To Pimp A Butterfly</em>. 

                I love tennis, both watching it and playing it. I'm a big Roger Federer fan, and in fact have 4 of his tennis caps at home.

                I'm also a huge video game fan, mostly story driven or good open-world games. I mostly play on the Playstation system and some of my favorites include <em>God of War, Red Dead Redemption, Mass Effect, and The Last of Us</em>. I love reading as well, some favorite books are <em>Thinking: Fast and Slow, Cosmos, Origin Story, and The Hobbit</em>. I'll leave you with a sample of some drum tracks I recorded for a band which are up on Spotify.
                </small>
                </p>
            <a href="https://open.spotify.com/album/3YgVCtXaosQs14Nc3jTbLL?si=fSFw9-G9TdGJi3TniAJq4A" target="_blank" rel="noreferrer" className="fa fa-spotify "></a>
            </div>
        </div>
        </>
    )
}