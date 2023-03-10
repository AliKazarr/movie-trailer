import React from 'react'
import {Button, Modal} from 'react-bootstrap'
import { useState } from 'react';


function MovieBox({title,poster_path,vote_average,release_date,overview}) {
    const API_IMG='https://image.tmdb.org/t/p/w500/'
    const [show, setShow] = useState(false);

    const handleShow = () => {setShow(true);}
    const handleClose=()=>setShow(false)
   
   
  return (
    <div   >

    <div  className='max-w-sm rounded overflow-hidden shadow-lg mb-3 text-center bg-slate-900  '> 
    {/* <h1 className="text-2xl font-bold text-red-600 text-center ">{title}</h1> */}
      <img  src={API_IMG +poster_path} alt=""  className='flex items-center'  />
      {/* <h3 className='text-2xl font-bold text-blue-700'>{vote_average}</h3> */}
      
     {/* <h3 className='text-2xl font-bold text-yellow-500'>{release_date}</h3> */}
     <button  onClick={handleShow} className='bg-red-500'> View More</button>
     {/* <h1 className='text-2xl font-bold text-blue-500 ml-2'>{show} </h1> */}
     <Modal   className=' grid place-content-center '   show={show} onHide={handleClose}> 
     <Modal.Header closeButton>
      <Modal.Title></Modal.Title>
     </Modal.Header>
     <Modal.Body>
     <img src={API_IMG + poster_path} alt=""   />

      <h2 className="text-2xl font-bold text-red-600 text-center">{title}</h2>
      <h6 className=' text-2xl  font-bold text-red-700 text-center'>IMDB: {vote_average}</h6>
      <h6 className=' text-2xl  font-bold text-red-700 text-center'>Released Year: {release_date}</h6>
      <h6 className=' text-2xl  font-bold text-red-700 text-center'>Overview</h6>
      <h6 className=' text-2xl font-bold text-blue-700'>{overview}</h6>
     </Modal.Body>

     <Modal.Footer>

      <Button varient="secondary" onClick={handleClose}>Close</Button>
     </Modal.Footer>
     </Modal>
    </div>
    
     
    </div>
  )
}

export default MovieBox
