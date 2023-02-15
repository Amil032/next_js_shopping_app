import * as React from 'react'
import { styled } from '@mui/material/styles'
import Switch from '@mui/material/Switch'


import { useEffect } from 'react'

interface Props {

    id?: number;

}

export default function CustomizedSwitches({ id }: Props) {
    const AntSwitch = styled(Switch)(({ theme }) => ({
        width: 50,
        height: 25,
        padding: 0,
        display: 'flex',
        borderRadius: 20,
        border: `1px solid ${checked ? '#1976D2' : 'white'}`,
        '&:active': {
            '& .MuiSwitch-thumb': {
                width: 15,
            },
            '& .MuiSwitch-switchBase.Mui-checked': {
                transform: 'translateX(9px)',
            },
        },
        '& .MuiSwitch-switchBase': {
            padding: 2,
            color: '#EEEFF2',

            '&.Mui-checked': {
                transform: 'translateX(24px)',
                color: '#1976D2',
                '& + .MuiSwitch-track': {
                    opacity: 1,
                    backgroundColor: theme.palette.mode === 'dark' ? 'red' : '#F7F7F9',
                },
            },
        },
        '& .MuiSwitch-thumb': {
            boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
            width: 20,
            height: 20,
            borderRadius: 10,
            transition: theme.transitions.create(['width'], {
                duration: 200,
            }),
        },
        '& .MuiSwitch-track': {
            // borderRadius: 16 / 2,
            opacity: 1,
            backgroundColor:
                theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : '#F7F7F9',
            boxSizing: 'border-box',
        },
    }))


    const [checked, setChecked] = React.useState(true)


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { checked: checkSwitch } = event.target
        setChecked(checkSwitch)
    }


    return (
        <AntSwitch id={`${id}`} inputProps={{ 'aria-label': 'ant design' }} checked={checked}
            onChange={handleChange} />
    )
}
