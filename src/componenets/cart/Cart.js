
import { React, useState } from 'react'
import { Helmet } from 'react-helmet'
import { mostviews } from '../../data/Data'
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { TotalItems } from './TotalItems';


export const Cart = () => {
  const [items, setItems] = useState([...mostviews])
  const [totalItemCount, setTotalItemCount] = useState(6);
  const Delete = (id) => {
    setItems([...items.filter(q => q.id != id)])
  }
  const AddProduc = (index) => {

    const newItems = [...items];
    newItems[index].quantity++;
    calculateTotal();
    setItems(newItems);

  }
  const SubtractProduct = (index) => {

    const newItems = [...items];
    newItems[index].quantity--;
    calculateTotal();
    setItems(newItems);

  }
  const calculateTotal = () => {
    const totalItemCount = items.reduce((total, item) => {
      return total + item.quantity;
    }, 0);

    setTotalItemCount(totalItemCount);
  };
  return (
    <>
      <Helmet title={'Cart'} name={""} content={""} />
      <div className=' text-capitalize row'>
        <div className='col'>
          {items.map((item, index) =>
            <div className='w-100 col'>
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
                      <p class="text-muted">this is one of our products</p>
                      <div className='quantity'>
                        <button className='btn btn-danger m-1' onClick={() => SubtractProduct(index)}>
                          -
                        </button>
                        <button className='btn bg-light'>{item.quantity}</button>
                        <button className='btn btn-success m-1' onClick={() => AddProduc(index)}>
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                : <br />
              }
            </div>
          )}
        </div>
        <div className='col mt-5 h-100'>
          <div className='card w-50 h-25 bg-light mt-2'>
            <h4 className='p-3 text-secondary'>total items:<TotalItems totalItemCount={totalItemCount}/></h4>
            <h4 className='p-3 text-danger'>discount:0$</h4>
          </div>
        </div>
      </div>
    </>

  )
}
