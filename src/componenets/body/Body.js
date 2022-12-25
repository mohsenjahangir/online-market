import React from 'react'
import { Helmet } from 'react-helmet'
import { Brands } from './Brands'
import { Carsouel } from './Carsouel'
import { Category } from './Category'
import { MultiItem } from './MultiItem'
import { Product } from './Product'
import { Shortcuts } from './Shortcuts'
import { Suggestion } from './Suggestion'

export const Body = () => {
  return (
    <>
    <Helmet title={'Products'} name={""} content={"these are our all things"}/>
    <div>
      <Carsouel/>
      <Shortcuts/>
      <MultiItem/>
      <hr/>
      <Category/>
      <hr/>
      <Product/>
      <hr/>
      <Suggestion/>
      <hr/>
      <Brands/>
    </div>
    </>
    
  )
}
