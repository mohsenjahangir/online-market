import React from 'react'
import { Helmet } from 'react-helmet';
export const Helmets = ({ title, name, content }) => {
    return (
        
        
           <Helmet>
             <meta charSet="utf-8" />
             <title>{title}</title>
             <meta name={name} content={content} />
           </Helmet>
       
       
 

    )
}
