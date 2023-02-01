
import React, { useState } from 'react'
import Data from './Data'
import './Product.css';
import ProductDetails from './ProductDetails';
import AppleIcon from '@mui/icons-material/Apple';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



              const Product = () => {
              const [card,setCard] = useState(Data);
              const [item,setitem] = useState(0) ;
            
              // console.log(card);
               
          

              return (
                <div>
                  <div className='top-heading'>
                    <h1>Shopping Cart</h1>
                  </div>
                  <div className='heading'>
                  <h1>  Mobile Products</h1>
                  <h1> <AppleIcon/> iPhone </h1>
                <span ><ShoppingCartIcon/> Cart {item}</span>
                  </div>
                 
                  <div className='card-content'>

                  {card.map((value,index)=>{
                        return   <div key={index}>
                          
                          <ProductDetails
                             prodImage = {value.prodImage}
                             prodName = {value.prodName}
                             prodPrice = {value.prodPrice}
                             ProdDescription = {value.ProdDescription}
                             prodRating = {value.prodRating}
                             id = {index}
                             item = {item}
                             setitem = {setitem}
                             
                          />

                          </div>
                            
                            
                  })}
                  
                
                  </div>
                  
                </div>
              )
            }

            export default Product