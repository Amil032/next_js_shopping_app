import { FileDownloadSharp } from '@mui/icons-material';
import { Button, Checkbox, FormControlLabel, FormGroup, IconButton, SelectChangeEvent, TextField } from '@mui/material';
import React, { useState } from 'react';
import { fileUploader } from '../../api/services/fileUpload.service';
import { CategoryProps } from '../../types/types';
import { DropDown } from '../drop-down-list';
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
    const [file, setFile] = useState<File>();
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
        <div className={[classes.main_container].join(" ")} >
            <h1 style={{ margin: '0 auto' }}>Add Product</h1>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={[classes.name, classes.common].join(" ")}>
                    <div><TextField name='name' id="name" label="Product name" variant="outlined" onChange={changeHandler} /></div>
                    <div><TextField name='price' type="number" label="price" onChange={changeHandler} /></div>
                    <div><TextField name='count' type="number" label="Count" onChange={changeHandler} /></div>
                </div>
                <div className={[classes.category, classes.common].join(" ")}>
                    <div>
                        <DropDown data={categories.categories} categoryName='category' category={fields.category} handleChange={changeHandler} />
                    </div>
                    <div>
                        <DropDown data={a?.sub_categories} categoryName='subCategory' category={fields.subCategory} handleChange={changeHandler} />
                    </div>
                </div>
                <div className={[classes.description, classes.common].join(" ")}>
                    <div>
                        <TextField
                            id="outlined-multiline-static"
                            label="Description"
                            multiline
                            rows={4}
                            name='description'
                            onChange={changeHandler}
                        />
                    </div>
                    <div>
                        <FormGroup>
                            <FormControlLabel name='isNewproduct' control={<Checkbox onChange={changeHandler} />}
                                label="newproducts"
                            />
                            <FormControlLabel name='isBestselling' control={<Checkbox onChange={changeHandler} />}
                                label="bestselling"
                            />
                        </FormGroup>
                    </div>
                </div>
                <label >
                    <div className={[classes.image, classes.common].join(" ")}>
                        <input type="file"
                            onChange={changeHandler}
                            hidden
                            disabled={isSelectedImage}
                        />
                        <div style={{ height: "100px", display: 'flex', alignItems: "center", border: "1px solid red", padding: '5px' }}>
                            {file ? file.name : 'select image'}
                        </div>
                        <img src={`${selectedImage}`} width="100px" />
                    </div>
                </label>
                <Button type='submit' variant='contained' sx={{ width: 100, margin: '0 auto' }} >Submit</Button>
            </form>

        </div>
    );
};

