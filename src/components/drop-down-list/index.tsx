import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FC } from 'react';
import { OutlinedInput, TextField } from '@mui/material';

interface Props {
    data: any,
    categoryName: string
    category: string
    handleChange: (e: any) => void
}
export const DropDown: FC<Props> = ({ data, categoryName, category, handleChange }) => {



    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 200 }} variant="standard">
                <InputLabel sx={{ marginBottom: 100 }} >Select category</InputLabel>
                <Select
                    id="category"
                    value={category}
                    label="Age"
                    onChange={handleChange}
                    name={categoryName}
                >
                    {data.map((item: any, index: number) => (
                        <MenuItem value={item.title} key={index}>
                            {item.title}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}