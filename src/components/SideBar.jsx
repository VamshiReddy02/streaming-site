import { Stack } from '@mui/material'
import { categories } from '../utils/constants'
import React from 'react'
import { Opacity } from '@mui/icons-material'


const SideBar = ({selectedCategory, setSelectedCategory}) => {
  return (
    <Stack
        direction="column"
        sx={{
            overflow: "auto",
            height: {sx: 'auto', md: '95%'},
            FlexDirection: { md: 'row'},
        }}>
            {categories.map((category) => (
                <button 
                    className='category-btn'
                    onClick={() => setSelectedCategory(category.name)}
                    style={{
                        background: category.name === 
                        selectedCategory && '#FC1503', 
                        color: 'white'
                    }}
                    key={category.name}
                    >
                    <span style={{ color: category.name === selectedCategory ? 'white' : 'red', marginRight: '15px'}}>{category.icon}</span>
                    <span style={{ Opacity: category.name === selectedCategory ? '1' : '0.8'}}>{category.name}</span>
                </button>
            ))}

    </Stack>
  )
}

export default SideBar