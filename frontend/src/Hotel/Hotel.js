import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import CardComp from '../Component/CarComp';



function Hotel() {
  return (
     <div className='container p-4' style={{backgroundColor:'#f0f0f0'}} >
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 mb-3 ">
        <div className="col">
          <CardComp />
        </div>
        <div className="col">
          <CardComp />
        </div>
        <div className="col">
          <CardComp />
        </div>
        <div className="col">
          <CardComp />
        </div>
      </div>
      
    </div>
  )
}

export default Hotel