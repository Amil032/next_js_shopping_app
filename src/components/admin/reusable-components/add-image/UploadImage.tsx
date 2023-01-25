import React from 'react';
import UploadOutlinedIcon from '@mui/icons-material/UploadOutlined';
import { Typography } from '@mui/material';

interface Props {
    changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
    file: File | null;
    selectedImage: string
}
const UploadImage = ({ changeHandler, file, selectedImage }: Props) => {
    return (
        <div style={{ display: 'flex', marginTop: '10px', width: '200px' }}>
            <div>
                <Typography style={{}}>Upload Image</Typography>
                <div style={{ width: '100px' }}>
                    <label >
                        <div style={{
                            display: 'flex',
                            backgroundColor: '#2196f3', justifyContent: 'center',
                            borderRadius: '5px',
                            width: '100px'
                        }}>
                            <input type="file"
                                onChange={changeHandler}
                                hidden
                            />
                            <UploadOutlinedIcon fontSize='large' sx={{ color: 'white' }} />

                        </div>
                    </label>
                </div>

                {file && <p style={{ wordBreak: 'break-all', margin: '0', marginTop: '5px', maxHeight: '40px' }}>{file.name}</p>}
            </div >
            <div><img src={`${selectedImage}`} width="80px" style={{ marginLeft: '10px' }} /></div>

        </div >
    );
};

export default UploadImage;