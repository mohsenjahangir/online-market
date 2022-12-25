import React from 'react'
import { category } from '../../data/Data'

export const Category = () => {
    return (
        <div className='container text-capitalize text-center w-75 '>
            <h1>Category</h1>
            <div className='scrollbar scrollbar-primary '>
                <div className=' m-2 scrollbar '>
                    {/* <div className='text-center blockquote-footer'><h1 >our products</h1></div> */}
                    <div className="row m-1 row-cols-1 row-cols-md-6 g-1">
                        {category.map((item) =>
                                  <div className="col" >
                            <div className="h-100 btn btn-light">
                                <div className="bg-image hover-overlay hover-zoom hover-shadow ripple"><img className='card-img-top' src={item.imge} />

                                </div>

                                <div className="body">
                                    <h5 className="title">{item.title}</h5>
                                </div>
                                <div className='d-grid gap-2 d-md-flex justify-content-md-end m-2'>
                                    <div typeof='submit' >
                                    </div>
                                </div>
                            </div>
                        </div>
          
          )}


                    </div>

                </div>

            </div>
        </div>
    )
}
