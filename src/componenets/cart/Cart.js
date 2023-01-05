
import { React, useState } from 'react'
import { Helmet } from 'react-helmet'
import { mostviews } from '../../data/Data'


export const Cart = () => {
  const [items, setItems] = useState([...mostviews])
  const Delete = (id) => {
    setItems([...items.filter(q => q.id != id)])
  }
  return (
    <>
      <div className='text-center text-capitalize'>

        <Helmet title={'Cart'} name={""} content={""} />
        {items.map((item, index) =>
          <div className='w-50'>
            {item.incart ?
              <div className='card m-2'>
                <div class="row">
                  <div class="col-md-3 how-img">
                    <img src={item.imge} class="rounded-circle img-fluid" alt="" />
                    <button className='btn btn-outline-danger m-3' onClick={() => Delete(item.id)}>delete</button>
                  </div>
                  <div class="col-md-6 text-start">
                    <h4 class="card-title">{item.title}</h4>
                    <p class="card-text">{item.price}$</p>
                    <p class="text-muted">this is a one of our products</p>
                  </div>
                </div>
              </div>
              : <br/>
            }
          </div>
        )}
      </div>

    </>

  )
}
