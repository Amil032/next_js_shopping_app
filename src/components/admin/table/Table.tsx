import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { CustomText } from '../../customText/CustomText';
import { IconButton, Switch } from '@mui/material';
import { Product } from '../../../../pages/api/admin/upload';
import classes from './styles.module.css'
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
      <TableContainer sx={{ maxHeight: '70vh ' }}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {Object.keys(products[0])?.map((item) => (
                <TableCell
                  key={item}
                  align='center'
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
