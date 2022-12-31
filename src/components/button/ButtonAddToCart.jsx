import { Button } from '@mui/material'
import React from 'react'

const ButtonAddToCart = ({ count, product, size}) => {
  return (
    <Button
        sx={{
            minWidth: '100px',
            padding: size !== "small" ? '10px 40px' : '',
            backgroundColor: "#db4f4a",
            fontSize: "0.9rem",
            "&:hover": {
                backgroundColor: "#040509",
                color: "#d0d1d5",
            }
        }}

        variant="contained"

        //onClick={() => dispatch(addToCart({ item: { ...product, count }}))}
    >ADD TO CART</Button>
  )
}

export default ButtonAddToCart