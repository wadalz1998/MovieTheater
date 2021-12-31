import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextField } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import FormData from "form-data"
import { actHandleImgAPI } from "./module/action"
import { useDispatch, useSelector } from 'react-redux';
export default function ConditionHanding() {
    const [selectedImage, setSelectedImage] = useState({
        file: null,
    });
    const initialFieldFilm = {
        maPhim: "",
        tenPhim: "",
        biDanh: "",
        trailer: "",
        hinhAnh: "",
        moTa: "",
        maNhom: "GP08",
        ngayKhoiChieu: "",
        danhGia: 0,
    }
    const [fieldValuesFilm, setFieldValuesFilm] = useState(initialFieldFilm);
    const dispatch = useDispatch();

    const dataImg = useSelector(state => state.handleManageFilm.data);

    const schema = yup.object().shape({
        maPhim: yup.string().min(4).max(20).required(),
        // xacNhanMatKhau: yup.string().required().oneOf([yup.ref('matKhau')], 'matKhau must Match'),
        // taiKhoan: yup.string().min(4).max(20).required(),
        // email: yup.string().email().required(),
        // hoTen: yup.string().min(4).max(20).required(),
    })
    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage({ file: e.target.files[0] });
        }
    }
    const SubmitHandlerAddFilm = (data) => {
        // console.log(data);
        let file = selectedImage.file;
        if (selectedImage) {
            let formData = new FormData();
            formData.append('frm', file)
            dispatch(actHandleImgAPI(formData));
        }
    }
    // const formData = new FormData();
    // formData.append(
    //     "file",
    //     selectedImage
    // );
    console.log(selectedImage);
    const removeSelectedImage = () => {
        setSelectedImage({ file: null });
    }
    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 50,
        },
        preview: {
            marginTop: 50,
            display: "flex",
            flexDirection: "column",
        },
        image: { maxWidth: "100%", maxHeight: 120 },
        delete: {
            cursor: "pointer",
            padding: 15,
            background: "red",
            color: "white",
            border: "none",
        },
    };
    return (
        <div className="manageFilm__Handing">
            <div className="manageFilm__HandingContent">
                <h3>Thêm Phim</h3>
                <div className="formAddFilm">
                    <form onSubmit={handleSubmit(SubmitHandlerAddFilm)}>
                        <Controller name="maPhim" control={control} defaultValue="8999"
                            render={({ field }) => (
                                <TextField {...field} label="Mã Phim" variant="filled"
                                    error={!!errors.maPhim}
                                    helperText={errors.maPhim ? errors.maPhim?.message : ''} />
                            )} />
                        <Button
                            variant="contained"
                            component="label"
                        >
                            Upload File
                            <input
                                name="file"
                                type="file"
                                hidden
                                accept="image/*"
                                onChange={imageChange}
                            />
                        </Button>
                        {selectedImage.file && (
                            <div style={styles.preview}>
                                <img
                                    src={URL.createObjectURL(selectedImage.file)}
                                    style={styles.image}
                                    alt="Thumb"
                                />
                                <button onClick={removeSelectedImage} style={styles.delete}>
                                    Remove This Image
                                </button>
                            </div>
                        )}
                        <div className="submitContent">
                            {/* <input type="submit" value="Thêm phim" className="customInput__Register" /> */}
                            <input type="submit" value="Thêm phim" className="" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
