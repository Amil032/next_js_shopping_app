import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export const CheckBox = ({ title }: Props) => {
    return (
        <FormControl component="fieldset">
            <FormGroup aria-label="position" row>
                <FormControlLabel
                    value="start"
                    control={<Checkbox />}
                    label={title}
                    labelPlacement="start"
                />
            </FormGroup>
        </FormControl>
    );
}
interface Props {
    title: string
}