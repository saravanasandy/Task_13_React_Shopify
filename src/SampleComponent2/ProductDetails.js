import { Button, Card, CardActions, CardContent, CardMedia, Rating, Typography } from '@mui/material';
import { maxHeight } from '@mui/system';
import React from 'react'
import  { useState } from 'react'

const ProductDetails = (props) => {
    const [showbtn, setshowbtn] = useState(true);
   

    const handleAdd = (setitem,item)=>{
        setshowbtn(!showbtn);
        setitem(item + 1);
        

   }
   
   const handleRemove = (setitem,item) =>{
         setshowbtn(!showbtn);
         setitem(item - 1)
   }

  return (
    <div>
                        <Card sx={{ maxWidth: 195 }} >
                            <CardMedia
                              component="img"
                              alt="green iguana"
                            
                              image={props.prodImage}
                            />
                            <CardContent>
                              <Typography gutterBottom variant="h5" component="div">
                                {props.prodName}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {props.prodPrice}
                              
                              </Typography>
                            
                                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                              
                             
                            </CardContent>
                            <CardActions>
                              
                              {showbtn? 
                              <Button size="small" color="success" onClick={()=>handleAdd(props.setitem,props.item)}>Add</Button>:
                              <Button size="small" color="error" onClick={()=>handleRemove(props.setitem,props.item)}>Remove</Button>
                            }
                             
                            
                            </CardActions>
                          </Card>

    </div>
  )
}

export default ProductDetails