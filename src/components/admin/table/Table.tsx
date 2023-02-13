import { TableContainer, Paper, Table, TableHead, TableRow, TableBody, IconButton, styled, tableCellClasses, TableCell } from '@mui/material';
import { EditRoadOutlined } from '@mui/icons-material';
import React from 'react';
import { Product } from '../../../../pages/api/admin/upload';
import { CustomText } from '../../customText/CustomText';
import Switch from '../switch/Switch';
import classes from './styles.module.css'
interface Props {
    products: Product[]
}
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: '#FBFBFB',
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}))

export const Tables = ({ products }: Props) => {
    return (
        // <div >
        //     <table style={{ width: '100%', textAlign: 'center' }}>
        //         <thead>
        //             <tr>
        //                 {Object.keys(products[0]).map((item) => (
        //                     <th>{item}</th>
        //                 ))}
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {products.map((item) => (
        //                 <tr>
        //                     {Object.entries(item).map((item) => (
        //                         <td>{item[0] === 'imageUrl' ? <img src={`${item[1].split('public')[1]}`} width="40px" /> : item[1]}</td>
        //                     ))}

        //                 </tr>
        //             ))}

        //         </tbody>
        //     </table>
        // </div>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label='customized table' className={classes.tableRow}>
                <TableHead>
                    <TableRow>

                        {Object.keys(products[0])?.map((item) => (
                            //                     <th>{item}</th>
                            <StyledTableCell align='center'>
                                <CustomText color={'#718096'} text={item} weight={500} />
                            </StyledTableCell>
                        ))}
                        <StyledTableCell align='center'>
                            <CustomText color={'#718096'} text='Düzəliş Et' weight={500} />
                        </StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((item) => (
                        <StyledTableRow key={Math.random()}>
                            {Object.entries(item).map((item) => (
                                //                         <td>{item[0] === 'imageUrl' ? <img src={`${item[1].split('public')[1]}`} width="40px" /> : item[1]}</td>
                                <StyledTableCell align='center'>{item[0] === 'imageUrl' ? <img src={`${item[1].split('public')[1]}`} width="40px" /> :
                                    <CustomText text={item[1]} weight={600} />}</StyledTableCell>
                            ))}

                            <StyledTableCell align='center'>
                                <div className={classes.switchContainer}>
                                    <Switch />
                                </div>
                            </StyledTableCell>
                            <StyledTableCell align='center'><IconButton><EditRoadOutlined /></IconButton></StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

