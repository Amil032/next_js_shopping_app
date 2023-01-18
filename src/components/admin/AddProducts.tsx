import { Button, TextField } from '@mui/material';
import React, { ChangeEvent, ChangeEventHandler, useEffect, useState } from 'react';
import { fileUploader } from '../../api/services/fileUpload.service';

export const AddProducts = () => {
    const [file, setFile] = useState<File>();
    const fileHandler = (e: ChangeEvent<HTMLInputElement>) => {

        if (!e.target.files) {
            return;
        }
        setFile(e.target.files[0]);
    }
    const clickHandler = () => {
        const formData = new FormData();
        if (file) {
            formData.append("file", file)
            fileUploader(formData);
        }
        console.log(file)
    }
    return (
        <div >
            <form style={{ display: "flex", flexDirection: 'column' }} >
                <input type="file"
                    onChange={fileHandler}
                />
                <Button onClick={clickHandler} >Submit</Button>
            </form>

        </div>
    );
};

