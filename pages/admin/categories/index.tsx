import { AddAPhoto, CategoryOutlined, CategorySharp, CreateOutlined, PlusOneOutlined } from "@mui/icons-material";
import { Autocomplete, Button, IconButton, TextField } from "@mui/material";
import { useState } from "react";
import { Wrapper } from "../../../src/components/admin/wrapper/Wrapper";
import { DropDown } from "../../../src/components/drop-down-list";

export default function () {
    const [fields, setFields] = useState()
    const [file, setFile] = useState()
    const [selectedImage, setSelectedImage] = useState()
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.type === 'checkbox') {
            const { name, checked } = e.target
            return setFields(prev => {
                console.log(fields)
                return { ...prev, [name]: checked }
            })
        }
        if (!e.target.files) {
            const { name, value } = e.target
            return setFields(prev => {
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
        <Wrapper>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h1>
                    Admin category page
                </h1>
                <div >
                    <Button variant="outlined" startIcon={<CategoryOutlined />} >
                        Add category
                    </Button>
                    <Button variant="outlined" startIcon={<CategoryOutlined />}>
                        Add subcategory
                    </Button>
                </div>
                <div style={{ margin: '20px 10px', border: '1px solid grey', padding: '10px' }}>
                    <TextField />
                    <div style={{ width: '30%' }}>
                        <label style={{ backgroundColor: 'azure' }}>
                            <div style={{ border: '1px dashed red', margin: '3px' }}>
                                <input type="file" hidden id="addfile" />
                                <AddAPhoto />
                            </div>
                        </label>
                    </div>

                    <Button>Submit</Button>
                </div>
                <div style={{ margin: '20px 10px', border: '1px solid grey', padding: '10px' }}>
                    <TextField />
                    <DropDown data={undefined} categoryName={""} category={""} handleChange={function (e: any): void {
                        throw new Error("Function not implemented.");
                    }} />
                    <Button>Submit</Button>
                </div>



            </div>


        </Wrapper>

    )
}

// export function getStaticProps() {
//     return ()
// }