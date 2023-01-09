
import React, { useState } from 'react'
import { mostviews } from '../../data/Data'
import { ModalSet } from '../../modal/ModalSet'
import swal from 'sweetalert';

export const Product = () => {
  const [items, setItems] = useState([...mostviews])
  const Add = (id) => {
    const temp=[...items]
    const index=temp.findIndex(q=> q.id ==id)
      setItems([...temp[index].incart=true])
  }
  return (
    <>
      <list>
        <h1 className='text-center'>most views</h1>
        <div className="row m-1 row-cols-1 row-cols-md-5 g-4 m-2 scrollbar  scrollbar text-capitalize scrollbar-primary">
          {items.map((item) =>
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
                  {/* <button className='btn btn-primary p-1' type='submit' onClick={() => Add(item.id)}  ></button> */}
                  <ModalSet add={Add} item={item}/>
                </div>
              </div>
            </div>
          )}
        </div>
      </list>

    </>

  )
}
