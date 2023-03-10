import { Box, IconButton, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { IMAGE_STORAGE_URL } from "../api/URL";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ButtonAddToCart from './button/ButtonAddToCart';
import { tokens } from '../theme';

const Item = ({ item, width }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const navigate = useNavigate();
    const [count, setCount] = useState(1)
    const [isHovered, setIsHovered] = useState(false)
    const { category, price, title, image_url } = item;

  return (
    <Box width={width} display="flex" flexDirection="column" mb="20px">
        <Box
          position="relative"
          onMouseOver={() => setIsHovered(true)}
          onMouseOut={() => setIsHovered(false)}
        >
           <img 
            alt={item.name}
            width="300px"
            height="400px"
            src={`${IMAGE_STORAGE_URL}${image_url}`}
            onClick={() => navigate(`/product/${item.id}`)}
            style={{ cursor: "pointer" }}
           /> 
           <Box
            display={isHovered ? "block" : "none"}
            position="absolute"
            bottom="10%"
            left="0"
            width="100%"
            padding="0 5%"
           >
            <Box display="flex" justifyContent="space-between">
              <Box 
                display="flex"     
                alignItems="center"
                backgroundColor={colors.redAccent[500]}
                borderRadius="5%"
                mr="20px" 
                p="2px 5px"
              >
                <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
                    <RemoveIcon />
                </IconButton>
                <Typography color={colors.primary[900]} sx={{ p: "0 5px" }} fontSize="1rem">{count}</Typography>
                <IconButton onClick={() => setCount(count + 1)}>
                    <AddIcon />
                </IconButton>
              </Box>

              <ButtonAddToCart count={count} product={item} size="small" />
          </Box>
        </Box>
      </Box>

      <Box pt="3px" mt="auto">
        <Typography variant="subtitle2" color={colors.primary[100]}>
          {category}
        </Typography>
        <Typography color={colors.secondary} fontWeight="bold" fontSize="1.2rem" >{title}</Typography>
        <Typography fontWeight="bold" fontSize="1rem" color={colors.secondary}>??? {price.replace('.', ',')}</Typography>
      </Box>
    </Box>
  )
}

export default Item