import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableBody,
  IconButton,
  styled,
  tableCellClasses,
  TableCell
} from '@mui/material';
import { EditRoadOutlined } from '@mui/icons-material';
import React from 'react';
import { Product } from '../../../../pages/api/admin/upload';
import { CustomText } from '../../customText/CustomText';
import Switch from '../switch/Switch';
import classes from './styles.module.css';
import editIcon from '../../../../public/icons/Vector.svg';
interface Props {
  products: Product[];
}
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#FBFBFB'
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0
  }
}));

export const Tables = ({ products }: Props) => {
  console.log(editIcon);
  return (
    <TableContainer component={Paper} style={{position:'relative'}}>
      <Table sx={{ minWidth: 700 ,position:'relative'}}  className={classes.tableRow} stickyHeader aria-label="sticky table">
        <TableHead style={{position:'sticky',top:'0'}}>
          <TableRow>
            {Object.keys(products[0])?.map((item) => (
              //                     <th>{item}</th>
              <StyledTableCell align='center' style={{position:'sticky',top:'0'}}>
                <CustomText color={'#718096'} text={item} weight={500} />
              </StyledTableCell>
            ))}
            <StyledTableCell align='center'>
              <CustomText color={'#718096'} text='Active' weight={500} />
            </StyledTableCell>
            <StyledTableCell align='center'>
              <CustomText color={'#718096'} text='Düzəliş Et' weight={500} />
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((item) => (
            <StyledTableRow key={Math.random()}>
              {Object.entries(item).map((item) => (
                <StyledTableCell align='center'>
                  {item[0] === 'imageUrl' ? (
                    <img src={`${item[1].toString().split('public')[1]}`} width='40px' />
                  ) : (
                    <CustomText text={item[1] === true ? 'y' : item[1] === false ? 'n' : (item[1] as string)} weight={500} />
                  )}
                </StyledTableCell>
              ))}
              <StyledTableCell align='center'>
                <div className={classes.switchContainer}>
                  <Switch />
                </div>
              </StyledTableCell>
              <StyledTableCell align='center'>
                <IconButton>
                  <img src='icons/Vector.svg' alt='icon' />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
