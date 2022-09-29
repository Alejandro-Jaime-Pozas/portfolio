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
                <h1 className='display-4'>Summary</h1>
                <p className=''><small>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, nobis eius maxime magni reiciendis cupiditate officia impedit in incidunt fugit repudiandae ipsum soluta molestiae quos dolor. Consequatur consequuntur temporibus ipsum?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis impedit tempore, debitis qui, harum eveniet facilis corporis nemo soluta est sint quos eum accusamus quaerat esse repellat voluptas rerum incidunt.
                    </small>
                </p>
            <a href="https://www.linkedin.com/in/alejandro-jaime/" target="_blank" className="fa fa-linkedin "></a>
            </div>
        </div>
        <div className='row align-items-center my-5'>
            <div className='col text-start ms-3'>
                <h1 className='display-4'>Skills</h1>
                <p className=''><small>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, nobis eius maxime magni reiciendis cupiditate officia impedit in incidunt fugit repudiandae ipsum soluta molestiae quos dolor. Consequatur consequuntur temporibus ipsum?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis impedit tempore, debitis qui, harum eveniet facilis corporis nemo soluta est sint quos eum accusamus quaerat esse repellat voluptas rerum incidunt.
                    </small>
                </p>
                <div className='row align-items-center justify-content-around'>
                    <a href="https://github.com/Alejandro-Jaime-Pozas" target="_blank" className="col-1 fa fa-github "></a>
                    <Link to="/" className="col-1 btn p-1 m-0 portfolio">Portfolio</Link>
                </div>
            </div>
            <img src={domus} alt="" className='col-4 img-fluid rounded p-0 ' />
        </div>
        <div className='row align-items-center my-5'>
            <img src={bateria} alt="" className='col-4 img-fluid rounded p-0 ' />
            <div className='col text-start ms-3'>
                <h1 className='display-4'>Hobbies</h1>
                <p className=''><small>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, nobis eius maxime magni reiciendis cupiditate officia impedit in incidunt fugit repudiandae ipsum soluta molestiae quos dolor. Consequatur consequuntur temporibus ipsum?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis impedit tempore, debitis qui, harum eveniet facilis corporis nemo soluta est sint quos eum accusamus quaerat esse repellat voluptas rerum incidunt.
                    </small>
                </p>
            <a href="https://open.spotify.com/album/3YgVCtXaosQs14Nc3jTbLL?si=fSFw9-G9TdGJi3TniAJq4A" target="_blank" rel="noreferrer" className="fa fa-spotify "></a>
            </div>
        </div>
        </>
    )
}