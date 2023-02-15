// import { TableContainer, Paper, Table, TableHead, TableRow, TableBody, IconButton, styled, tableCellClasses, TableCell } from '@mui/material';
// import { EditRoadOutlined } from '@mui/icons-material';
// import React from 'react';
// import { Product } from '../../../../pages/api/admin/upload';
// import { CustomText } from '../../customText/CustomText';
// import Switch from '../switch/Switch';
import classes from './styles.module.css'
// import editIcon from '../../../../public/icons/Vector.svg'

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     [`&.${tableCellClasses.head}`]: {
//         backgroundColor: theme.palette.common.white,
//         color: theme.palette.common.black,
//     },
//     [`&.${tableCellClasses.body}`]: {
//         fontSize: 14,
//     },
// }))

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//     '&:nth-of-type(odd)': {
//         backgroundColor: '#FBFBFB',
//     },
//     // hide last border
//     '&:last-child td, &:last-child th': {
//         border: 0,
//     },
// }))

// export const Tables = ({ products }: Props) => {
//     console.log(editIcon)
//     return (

//         <TableContainer component={Paper}>
//             <Table sx={{ minWidth: 700 }} aria-label='customized table' className={classes.tableRow}>
//                 <TableHead>
//                     <TableRow>

//                         {Object.keys(products[0])?.map((item) => (
//                             //                     <th>{item}</th>
//                             <StyledTableCell align='center'>
//                                 <CustomText color={'#718096'} text={item} weight={500} />
//                             </StyledTableCell>
//                         ))}
//                         <StyledTableCell align='center'>
//                             <CustomText color={'#718096'} text='Active' weight={500} />
//                         </StyledTableCell>
//                         <StyledTableCell align='center'>
//                             <CustomText color={'#718096'} text='Düzəliş Et' weight={500} />
//                         </StyledTableCell>
//                     </TableRow>
//                 </TableHead>
//                 <TableBody >
                    // {products.map((item) => (
                    //     <StyledTableRow key={Math.random()}>
                    //         {Object.entries(item).map((item) => (
                    //             <StyledTableCell align='center'>{item[0] === 'imageUrl' ? <img src={`${item[1].toString().split('public')[1]}`} width="40px" /> :
                    //                 <CustomText text={item[1] === true ? 'y' : item[1] === false ? 'n' : item[1] as string} weight={500} />}</StyledTableCell>
                    //         ))}
                    //         <StyledTableCell align='center'>
                    //             <div className={classes.switchContainer}>
                    //                 <Switch />
                    //             </div>
                    //         </StyledTableCell>
                    //         <StyledTableCell align='center'>
                    //             <IconButton>
                    //                 <img src='icons/Vector.svg' alt='icon' />
                    //             </IconButton>

                    //         </StyledTableCell>
                    //     </StyledTableRow>
//                     ))}
//                 </TableBody>
//             </Table>
//         </TableContainer>
//     );
// };

import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Product } from '../../../consts/types/types';
import { CustomText } from '../../customText/CustomText';
import { IconButton, Switch } from '@mui/material';

interface Column {
  id: 'name' | 'code' | 'population' | 'size' | 'density';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US')
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US')
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toFixed(2)
  }
];

export const Tables = ({ products }: Props) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {Object.keys(products[0])?.map((item) => (
                //                             //                     <th>{item}</th>
                <TableCell
                  key={item}
                  //   align={column.align}
                  //   style={{ minWidth: column.minWidth }}
                >
                  <CustomText color={'#718096'} text={item} weight={500} />
                </TableCell>
              ))}
              <TableCell align='center'>
                <CustomText color={'#718096'} text='Active' weight={500} />
              </TableCell>
              <TableCell align='center'>
                <CustomText color={'#718096'} text='Düzəliş Et' weight={500} />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role='checkbox' tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })} */}
            {products.map((item) => (
                        <TableRow key={Math.random()}>
                            {Object.entries(item).map((item) => (
                                <TableCell align='center'>{item[0] === 'imageUrl' ? <img src={`${item[1].toString().split('public')[1]}`} width="40px" /> :
                                    <CustomText text={item[1] === true ? 'y' : item[1] === false ? 'n' : item[1] as string} weight={500} />}</TableCell>
                            ))}
                            <TableCell align='center'>
                                <div className={classes.switchContainer}>
                                    <Switch />
                                </div>
                            </TableCell>
                            <TableCell align='center'>
                                <IconButton>
                                    <img src='icons/Vector.svg' alt='icon' />
                                </IconButton>

                            </TableCell>
                        </TableRow>
                        ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={5}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

interface Props {
  products: Product[];
}
