import { Box, Typography, Button } from '@mui/material';
import React from 'react';
import CategoriesTable from './categoriesTable/CategoriesTable';
import AddIcon from '@mui/icons-material/Add';
import Search from '../../Header/NavbarDown/Search';
import classes from './style.module.scss'
export const AllCategories = ({ title }: Props) => {
    return (
        <Box>
            <Box>
                <Typography variant='h5' sx={{ borderBottom: '1px solid gray', mb: 5, boxShadowBottom: '2px' }}>{title}</Typography>
                <Box className={classes.search}>
                    <Button variant='contained' size='small' startIcon={<AddIcon />}>Category</Button>
                    <Search />
                </Box>

            </Box>

            <CategoriesTable />
        </Box >
    );
};

interface Props {
    title: string
}