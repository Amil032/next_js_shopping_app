import { AddAPhoto, CategoryOutlined, CategorySharp, CreateOutlined, PlusOneOutlined } from '@mui/icons-material';
import { Autocomplete, Box, Button, IconButton, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { Wrapper } from '../../../src/components/admin/wrapper/Wrapper';
import classes from './style.module.scss'
import CategoriesTable from '../../../src/components/admin/categories/categoriesTable/CategoriesTable';
import AddIcon from '@mui/icons-material/Add';
import { AllCategories } from '../../../src/components/admin/categories/AllCategories';
export default function () {

  return (
    <Wrapper>
      <div className={classes.main}>
        <AllCategories title='Category' />
        <AllCategories title='Subcategory' />

      </div>
    </Wrapper>
  );
}

// export function getStaticProps() {
//     return ()
// }
