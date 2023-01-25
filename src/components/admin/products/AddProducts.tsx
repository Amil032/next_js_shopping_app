import { Button, Checkbox, FormControlLabel, FormGroup, IconButton, SelectChangeEvent, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { fileUploader } from '../../../api/services/fileUpload.service';
import { CategoryProps } from '../../../types/types';
import { DropDown } from '../../drop-down-list';
import UploadImage from '../reusable-components/add-image/UploadImage';
import Modal from '../reusable-components/modal/Modal';
import classes from "./index.module.css"
interface Fileds {
    name: string;
    price: number;
    count: number;
    description: string;
    category: string;
    subCategory: string;
    isNewproduct: boolean;
    isBestselling: boolean;
}
interface Props {
    categories: CategoryProps
}
export const AddProducts = ({ categories }: Props) => {
    const [file, setFile] = useState<File | null>(null);
    const [selectedImage, setSelectedImage] = useState('')
    const [isSelectedImage, setIsSelectedImage] = useState(false)
    const [sub, setSub] = useState([])
    const [fields, setfields] = useState<Fileds>({
        name: '',
        price: 0,
        count: 0,
        description: '',
        category: '',
        subCategory: '',
        isNewproduct: false,
        isBestselling: false,
    })
    const a = categories.categories.find(item => item.description === fields.category)
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.type === 'checkbox') {
            const { name, checked } = e.target
            return setfields(prev => {
                console.log(fields)
                return { ...prev, [name]: checked }
            })
        }
        if (!e.target.files) {
            const { name, value } = e.target
            return setfields(prev => {
                console.log(fields)
                return { ...prev, [name]: value }
            })
        }
        setFile(e.target.files[0]);
        setSelectedImage(URL.createObjectURL(e.target.files[0]))
    }
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData();
        if (file) {
            formData.append("file", file)
            console.log(Object.entries(fields))
            Object.entries(fields).forEach(element => {
                formData.append(`${element[0]}`, element[1])
            });
            console.log(fields)
            fileUploader(formData);
        }
    }

    return (
        <Modal confirmHandler={submitHandler}>
            <div className={[classes.main_container].join(" ")} >
                <form className={classes.form} onSubmit={submitHandler}>
                    <div className={[classes.name, classes.common].join(" ")}>
                        <TextField name='name' id="name" label="Product name" variant="outlined" onChange={changeHandler} />
                        <TextField sx={{ width: 70 }} name='price' type="number" label="price" onChange={changeHandler} />
                        <TextField name='count' type="number" label="Count" onChange={changeHandler} sx={{ width: 70 }} />
                    </div>
                    <div style={{ display: 'flex', marginBottom: '20px' }}>
                        <div>
                            <DropDown data={categories.categories} categoryName='category' category={fields.category} handleChange={changeHandler} />
                        </div>
                        <div>
                            <DropDown data={a?.sub_categories} categoryName='subCategory' category={fields.subCategory} handleChange={changeHandler} />
                        </div>
                    </div>
                    <TextField
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        rows={4}
                        name='description'
                        onChange={changeHandler}
                        sx={{ width: 400, marginBottom: 5 }}
                    />
                    <div>
                        <FormGroup style={{ display: 'flex', flexDirection: 'row' }}>
                            <FormControlLabel name='isNewproduct' control={<Checkbox onChange={changeHandler} />}
                                label="Is New Product ?"
                            />
                            <FormControlLabel name='isBestselling' control={<Checkbox onChange={changeHandler} />}
                                label="Is bestselling ?"
                            />
                        </FormGroup>
                    </div>
                    <UploadImage changeHandler={changeHandler} file={file} selectedImage={selectedImage} />
                </form>
            </div>
        </Modal>

    );
};

