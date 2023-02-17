import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
interface Column {
    id: 'name' | 'code' | 'population' | 'size' | 'density';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}

const columns = [
    'id',
    'name',
    'icon'

];

interface Data {
    id: string;
    name: string;
    icon: string;

}

function createData(
    id: string,
    name: string,
    icon: string
): Data {

    return { id, name, icon };
}

const rows = [
    createData('5', 'IN', 'src'),
    createData('5', 'IN', 'src'),
    createData('5', 'IN', 'src'),
    createData('5', 'IN', 'src'),
    createData('5', 'IN', 'src'),
    createData('5', 'IN', 'src'),
    createData('5', 'IN', 'src'),
    createData('5', 'IN', 'src'),
    createData('5', 'IN', 'src'),
    createData('5', 'IN', 'src'),
    createData('5', 'IN', 'src'),
    createData('5', 'IN', 'src'),
    createData('5', 'IN', 'src'),
    createData('5', 'IN', 'src'),
];

export default function CatgeriesTable() {
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
        <Paper sx={{ width: '400px', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440, maxWidth: 400 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column}
                                    align='center'
                                >
                                    {column}
                                </TableCell>
                            ))}
                            <TableCell>duzelis et</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .map((row, index) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                        {Object.values(row).map((column) => {
                                            return (
                                                <TableCell key={column} align='center'>
                                                    {column}
                                                </TableCell>
                                            );
                                        })}
                                        <TableCell align='center'><IconButton color='primary' ><EditIcon /></IconButton></TableCell>
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}