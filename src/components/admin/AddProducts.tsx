import { Button, Checkbox, FormControlLabel, FormGroup, IconButton, SelectChangeEvent, TextField } from '@mui/material';
import React, { ChangeEvent, ChangeEventHandler, FormEvent, useEffect, useState } from 'react';
import { fileUploader } from '../../api/services/fileUpload.service';
import { DropDown } from '../drop-down-list';
import classes from "./index.module.css"
interface Fileds {
    name: string;
    price: number;
    description: string;
    category: string;
    subCategory: string;
    isNewProduct: boolean;
    isBestSelling: boolean;
}
export const AddProducts = () => {
    const [file, setFile] = useState<File>();
    const [selectedImage, setSelectedImage] = useState('')
    const [isSelectedImage, setIsSelectedImage] = useState(false)
    const [fields, setfields] = useState<Fileds>({
        name: '',
        price: 0,
        description: '',
        category: '',
        subCategory: '',
        isNewProduct: false,
        isBestSelling: false
    })
    const changeHandler = (e: any) => {
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
    const checkBoxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.currentTarget
        setfields(prev => {
            return {
                ...prev,
                [name]: checked
            }
        })
    }
    const submitHandler = (e: React.SyntheticEvent) => {
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
                    <div><TextField name='price' label="price" onChange={changeHandler} /></div>
                </div>
                <div className={[classes.category, classes.common].join(" ")}>
                    <div>
                        <DropDown data={top100Films} categoryName='category' category={fields.category} handleChange={changeHandler} />
                    </div>
                    <div>
                        <DropDown data={top100Films} categoryName='subCategory' category={fields.subCategory} handleChange={changeHandler} />
                    </div>
                </div>
                <div className={[classes.description, classes.common].join(" ")}>
                    <div>
                        <TextField
                            id="outlined-multiline-static"
                            label="Multiline"
                            multiline
                            rows={4}
                            name='description'
                            onChange={changeHandler}
                        />
                    </div>
                    <div>
                        <FormGroup>
                            <FormControlLabel name='isNewProduct' control={<Checkbox />} label="newproducts"
                                onChange={checkBoxHandler}
                            />
                            <FormControlLabel name='isBestSelling' control={<Checkbox />} label="bestselling"
                                onChange={checkBoxHandler}
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
                <Button type='submit' >Submit</Button>
            </form>

        </div>
    );
};
const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 }]
