import { useState, useEffect } from "react";
import { isFileAllowed } from "../utils/image";
import toast from "react-hot-toast";

export const useImageUploader = (initialImage = "") => {
  const [image, setImage] = useState(initialImage);
  const [imageFile, setImageFile] = useState("");
  const [base64Image, setBase64Image] = useState("");

  const handleImage = (e) => {
    e.preventDefault();
    const selectedFile = e.target.files[0];

    if (!selectedFile || !isFileAllowed(selectedFile)) {
      toast.error("Please choose a PNG, JPG, or PDF file.");
      return;
    }

    if (selectedFile.size > 2 * 1024 * 1024) {
      toast.error("File size exceeds 2MB. Please choose a smaller file.");
      return;
    }

    const reader = new FileReader();
    reader.addEventListener("load", (e) => {
      setImage(e.target.result);
    });

    reader.readAsDataURL(selectedFile);
    setImageFile(selectedFile);
  };

  useEffect(() => {
    const convertImageToBase64 = (imageFile, callback) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result
          .replace("data:", "")
          .replace(/^.+,/, "");
        callback(base64String);
      };
      reader.readAsDataURL(imageFile);
    };

    if (imageFile) {
      convertImageToBase64(imageFile, (base64String) => {
        // console.log(base64String);
        setBase64Image(base64String);
      });
    }
  }, [image]);

  // handleFileChange(imageFile);

  const removeImage = () => {
    setImage("");
    setImageFile("");
  };

  useEffect(() => {
    setImage(initialImage);
  }, [initialImage, setImage, setImageFile]);

  return { image, imageFile, base64Image, handleImage, removeImage };
};
