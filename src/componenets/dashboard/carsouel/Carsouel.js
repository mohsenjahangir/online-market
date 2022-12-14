import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
export const Carsouel = () => {
  return (
    <Carousel className='d-block  justify-content p-2 '>
      <Carousel.Item >
        <Link to='./sfd'>
          <img
            className="d-block w-100"
            src="https://dkstatics-public.digikala.com/digikala-adservice-banners/4b6d8e35dca2f4501080020c2b4112d44c2d64cb_1670084248.gif?x-oss-process=image"
            alt="First slide"
          />
        </Link>
        

        <Carousel.Caption >
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <Link to='./rwerw'><img
          className="d-block w-100 "
          src="https://dkstatics-public.digikala.com/digikala-adservice-banners/d48f288aab0ca97730144164bd141c8baec66a8c_1666018516.jpg?x-oss-process=image/quality,q_95"
          alt="Second slide"
        /></Link>


        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Link to='/fdsfs'> <img
          className="d-block w-100"
          src="https://dkstatics-public.digikala.com/digikala-adservice-banners/3405d319d4eae572a56d72b192e70a3ffd554be9_1670495595.jpg?x-oss-process=image/quality,q_95"
          alt="Third slide"
        /></Link>


        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    // src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
    // src="https://mdbootstrap.com/img/Photos/Others/forest-sm.webp"
    // src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(131).webp"
  )
}
