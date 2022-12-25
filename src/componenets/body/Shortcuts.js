import React from 'react'
import { Link } from 'react-router-dom'
import { shortcuts } from '../../data/Data'
import '../body/shortcut.css'
export const Shortcuts = () => {
  return (
    <div className='text-capitalize  d-flex justify-content-center '>
      <div className='container row mt-1'>
        <div class="col">
          <div className='text-center mb-5'>
            <div >
              <Link ><img className='box' src="https://dkstatics-public.digikala.com/digikala-bellatrix/d0dc31c892be8cf1408e4e14580b3f479da66bd1_1648897133.png" />
              
              </Link>
             <h6>jet</h6 >
            </div>
          </div>
        </div>
        <div class="col  ">
          <div className='text-center mb-5'>
            <div>
              <Link ><img className='box' src="https://dkstatics-public.digikala.com/digikala-bellatrix/625d8883f37944f3f0c4af5fe39435600931ab22_1664309850.png" />
                    
              </Link>
        <h6>style</h6 >
            </div>
          </div>
        </div>
        <div class="col ">
          <div className='text-center mb-5'>
            <div>
              <Link ><img className='box' src="https://dkstatics-public.digikala.com/digikala-bellatrix/ac127167132653d14c758748b07824a6a7643a31_1663444619.png" />
                 
              </Link>
           <h6>shopping</h6 >
            </div>
          </div>
        </div>
        <div class="col ">
          <div className='text-center mb-5'>
            <div>
              <Link ><img className='box' src="https://dkstatics-public.digikala.com/digikala-bellatrix/78ccd40cbf305fb067de78ddab5be84f69589c8d_1648897009.png" />
             
              </Link>
              <h6>dg plus</h6 >
            </div>
          </div>
        </div>
        <div class="col ">
          <div className='text-center mb-5'>
            <div>
              <Link ><img className='box' src="https://dkstatics-public.digikala.com/digikala-bellatrix/6c69096a524add2d4646cd162dfa5f66d4ddceac_1668952039.png" />
               
              </Link>
             <h6>business</h6 >
            </div>
          </div>
        </div>
        <div class="col ">
          <div className='text-center mb-5'>
            <div>
              <Link ><img className='box' src="https://dkstatics-public.digikala.com/digikala-bellatrix/5ad4b771667ebbd37ac6df87aff1f8129351cbb1_1668943323.png" />
                 
              </Link>
           <h6>world cup</h6 >
            </div>
          </div>
        </div>
        <div class="col ">
          <div className='text-center mb-5'>
            <div>
              <Link ><img className='box' src="https://dkstatics-public.digikala.com/digikala-bellatrix/28a6ef720244892accbcf8da7b9ebb7262d3172b_1670930099.png" />
               
              </Link>
            <h6>gifts</h6 >
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
