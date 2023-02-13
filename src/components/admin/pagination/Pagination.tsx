import * as React from 'react'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { PaginationItem } from '@mui/material';
import classes from './styles.module.css';
// import './style.css';
interface Props {
    count: number
    setPageNumber?: (data: number) => void
}
export const PaginationControlled = ({ count, setPageNumber }: Props) => {
    const [page, setPage] = React.useState(1)
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value)
        // setPageNumber(value)
    }
    return (
        <Stack spacing={2}>
            <Pagination count={count} shape='rounded' page={page} onChange={handleChange} className={classes.pagination}
                renderItem={(item) => <PaginationItem {...item} />}
            />
        </Stack>
    )
}
