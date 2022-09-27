import React from 'react';
import me from '../imgs/me.jpg'

export default function Home() {
    return (
        <div className='row align-items-center'>
            <img src={me} alt="" className='col-4 img-fluid rounded p-0 ' />
            <div className='col text-start ms-3'>
                <h1 className='display-4'>Summary</h1>
                <p className=''><small>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, nobis eius maxime magni reiciendis cupiditate officia impedit in incidunt fugit repudiandae ipsum soluta molestiae quos dolor. Consequatur consequuntur temporibus ipsum?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis impedit tempore, debitis qui, harum eveniet facilis corporis nemo soluta est sint quos eum accusamus quaerat esse repellat voluptas rerum incidunt.
                    </small>
                </p>
                <button className='btn btn-dark'>linkedin</button>
                <a href="#" class="fa fa-linkedin"></a>

            </div>
            
        </div>
    )
}
