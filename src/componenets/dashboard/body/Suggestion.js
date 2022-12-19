import React from 'react'
import { suggestion } from '../../../data/Data'

export const Suggestion = () => {
    return (
        <div className='container text-capitalize text-center w-75 '>
            <h1>online market suggestions</h1>
            <div className='scrollbar scrollbar-primary '>
                <div className=' m-2 scrollbar '>
                    <div className="row m-1 row-cols-1 row-cols-md-5 g-1">
                        {suggestion.map((item) =>
                            <div className="col" >
                                <div className="h-100 btn btn-light">
                                    <div className="bg-image hover-overlay hover-zoom hover-shadow ripple w-50"><img className='card-img-top' src={item.imge} />

                                    </div>

                                    <div className="card-body m-1">
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
