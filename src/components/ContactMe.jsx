import React from 'react'

export default function ContactMe() {
  return (
    <>
        <div className='row justify-content-center py-5'>
            <div className="col-4 text-center flex-column d-flex">
                <a href='mailto:ajaimepozas@gmail.com' className='text-center pt-5'><h4> ajaimepozas@gmail.com</h4></a><br />
                <a href='tel:+19095515101' className='text-center pb-5'><h4>(909) 551-5101</h4></a>
                {/* <div className='text-center py-3'>ajaimepozas@gmail.com</div> */}
            </div>
        </div>
    </>
  )
}
