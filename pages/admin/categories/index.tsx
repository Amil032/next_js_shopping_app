import { AddAPhoto, CategoryOutlined, CategorySharp, CreateOutlined, PlusOneOutlined } from '@mui/icons-material';
import { Autocomplete, Button, IconButton, TextField } from '@mui/material';
import { useState } from 'react';
import { Wrapper } from '../../../src/components/admin/wrapper/Wrapper';
import { DropDown } from '../../../src/components/drop-down-list';
import { SHowHide } from '../../../src/components/admin/show-hide/ShowHide';

export default function () {

  return (
    <Wrapper>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h1>Admin category page</h1>
      </div>
    </Wrapper>
  );
}

// export function getStaticProps() {
//     return ()
// }
