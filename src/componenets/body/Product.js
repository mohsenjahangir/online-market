import React, { useState } from 'react'

import { mostviews } from '../../data/Data'

import { ModalSet } from '../../modal/ModalSet'


export const Product = () => {

  return (
    <>
      <div className='scrollbar text-capitalize scrollbar-primary'>
        <h1 className='text-center'>most views</h1>
        <div className=' m-2 scrollbar '>
          {/* <div className='text-center blockquote-footer'><h1 >our products</h1></div> */}
          <div className="row m-1 row-cols-1 row-cols-md-5 g-4">
            {mostviews.map((item) =>
              <div className="col" key={item.id}>
                <div className="card h-100">
                  <div className="bg-image hover-overlay hover-zoom hover-shadow ripple"><img className='card-img-top' key={item.id} src={item.imge} />

                  </div>

                  <div className="card-body">
                    <h5 className="card-title">name:{item.title}</h5>
                    <h5 className="card-price">price:{item.price}</h5>
                    <h5 className="card-company">company:{item.company}</h5>
                  </div>
                  <div className='d-grid gap-2 d-md-flex justify-content-md-end m-2'>
                    <div typeof='submit' >
                      <button className='btn btn-primary p-1'  ><ModalSet /></button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>

    </>

  )
}
