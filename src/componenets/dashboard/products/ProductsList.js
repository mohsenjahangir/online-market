import React from 'react'
import { Helmet } from 'react-helmet'
import { Product } from './Product'

export const ProductsList = () => {
  return (
    <>
    <Helmet title={'Products'} name={""} content={"these are our products"}/>
    <div><Product/></div>
    </>
    
  )
}
