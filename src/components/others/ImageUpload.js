import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Modal, Upload, Progress, message } from "antd";
import { Box, chakra, Image, Portal, Text } from "@chakra-ui/react";
import axios from "axios";
import { API_URL } from "config/api";
import { FaImages, FaPlus } from "react-icons/fa";
import { FiFilePlus, FiImage } from "react-icons/fi";
import { useWatch } from "react-hook-form";

const ChakraUpload = chakra(Upload);

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

const ImageUpload = ({
  imageCount,
  register,
  value,
  setValue,
  control,
  text = "Add Images",
  multiple = true,
}) => {
  const initState = {
    previewVisible: false,
    previewImage: "",
    previewTitle: "",
    fileList: [],
  };
  const [state, setState] = useState(initState);
  const [progress, setProgress] = useState(0);

  const [currentUrls, setCurrentUrls] = useState([]);

  const watchImage = useWatch({
    control,
    name: value,
  });

  useEffect(() => {
    register(value);
  }, [register]);

  useEffect(() => {
    // setValue(value, ""); // Custom Register
    // const fileList = [
    //   {
    //     uid: "-5",
    //     name: "image.png",
    //     status: "error",
    //   },
    // ];
    // setState({
    //   previewVisible: false,
    //   previewImage: "",
    //   previewTitle: "",
    //   fileList: fileList,
    // });
    // message.error("Error Message");

    console.log("watch", watchImage);

    watchImage &&
      watchImage.length > 0 &&
      setState({ fileList: watchImage?.map((val) => ({ url: val })) });
  }, [watchImage]);

  const uploadButton = (
    <Box d="flex" flexDir="column" justifyContent="center" alignItems="center">
      <FaImages width={15} height={15} color="blue" />
      <Text color="blue">{text}</Text>
    </Box>
  );

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };

  const handleChange = ({ file, fileList }) => {
    console.log("state file", file); // Get name, percent, response ("Ok"), size, status ("done", "uploading", "error")
    console.log("filelist", fileList);
    // file.status = "error";
    console.log("state .filelist", state.fileList);
    setState({
      previewVisible: false,
      previewImage: "",
      previewTitle: "",
      fileList: fileList,
    });
  };

  const handleCancel = () =>
    setState((prevState) => ({
      ...prevState,
      previewVisible: false,
    }));

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setState((prevState) => ({
      ...prevState,
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle:
        file.name || file.url.substring(file.url.lastIndexOf("/") + 1),
    }));
  };

  const uploadImage = async (options) => {
    const { onSuccess, onError, file, onProgress } = options;

    const fmData = new FormData();
    const config = {
      headers: { "content-type": "multipart/form-data" },
      onUploadProgress: (event) => {
        const percent = Math.floor((event.loaded / event.total) * 100);
        setProgress(percent);
        if (percent === 100) {
          setTimeout(() => setProgress(0), 1000);
        }
        onProgress({ percent: (event.loaded / event.total) * 100 });
      },
    };
    fmData.append("image", file);
    try {
      const res = await axios.post(API_URL.imageUpload, fmData, config);
      if (res.data) {
        setValue(value, [...currentUrls, res.data]);
        setCurrentUrls((prev) => [...prev, res.data]);
      }
      onSuccess("Ok");
      console.log("server res: ", res);
    } catch (err) {
      console.log("Eroor: ", err);
      const error = new Error("Some error");
      onError({ err });
    }
  };

  const previewConfig = {
    showPreviewIcon: false,
    downloadIcon: true,
  };

  return (
    <>
      <ChakraUpload
        name="images"
        action={API_URL.imageUpload}
        accept="image/*"
        beforeUpload={beforeUpload}
        customRequest={uploadImage}
        listType="picture-card"
        fileList={state.fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        maxCount={imageCount}
        showUploadList={previewConfig}
        multiple={multiple}
        className="image-upload"
        // onRemove => Delete from DB and S3 + CF
      >
        {state.fileList.length >= imageCount ? null : uploadButton}
      </ChakraUpload>
      {/* {progress > 0 ? <Progress percent={progress} /> : null} */}

      <Modal
        visible={state.previewVisible}
        title={state.previewTitle}
        // footer={null}
        onCancel={handleCancel}
        // zIndex={1200}
        // style={{ position: "absolute" }}
      >
        <Image
          alt="example"
          style={{ width: "100%" }}
          src={state.previewImage}
        />
      </Modal>
    </>
  );
};

export default ImageUpload;
