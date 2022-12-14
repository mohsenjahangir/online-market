import React from 'react'
import { Helmet } from 'react-helmet'
import { MultiItem } from './MultiItem'
import { Product } from './Product'
import { Shortcuts } from './Shortcuts'

export const Body = () => {
  return (
    <>
    <Helmet title={'Products'} name={""} content={"these are our all things"}/>
    <div>
      <Shortcuts/>
      <MultiItem/>
      <Product/>
    </div>
    </>
    
  )
}
