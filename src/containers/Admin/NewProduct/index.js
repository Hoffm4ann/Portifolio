import React, { useEffect, useState } from "react";
import apiCodeBurger from "../../../services/api";
import { Label, Input, Container, ButtonStyles, LabelUpload } from "./style";
import ReactSelect from "react-select";
import { useForm, Controller } from "react-hook-form";
import UploadFileIcon from '@mui/icons-material/UploadFile';

function NewProduct() {
    const [fileName, setFileName] = useState(null);
    const [categories, setCategories] = useState([]);
    const { register, handleSubmit, control } = useForm();

    const onSubmit = data => console.log(data);

    useEffect(() => {
        async function loadCategories() {
            const { data } = await apiCodeBurger.get("categories")
            setCategories(data)
        }
        loadCategories()
    }, [])

    return (
        <Container>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <Label>Nome</Label>
                <Input type="text"{...register("name")} />

                <Label>Preço</Label>
                <Input type="number"{...register("price")} />

                <LabelUpload>
                    {fileName || (<> <UploadFileIcon /> Carregue a imagem do Produto</>)}
                    <input type="file" accept="image/png, image/jpeg"{...register("file")} onChange={value => { setFileName(value.target.files[0]?.name) }} />
                </LabelUpload>

                <Controller name="category_id" control={control} render={({ field }) => {
                    return (
                        <ReactSelect
                            {...field} options={categories} getOptionLabel={cat => cat.name} getOptionValue={cat => cat.id} placeholder="...Escolha a categoria" />
                    )
                }}>
                </Controller>

                <ButtonStyles>Adicionar Produto</ButtonStyles>
            </form>
        </Container>
    )
}
export default NewProduct;