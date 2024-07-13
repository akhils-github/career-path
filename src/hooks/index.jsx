import { useState, useEffect } from "react"
import { isFileAllowed } from "../utils/image"
import toast from "react-hot-toast"

export const useImageUploader = (initialImage = "") => {
  const [image, setImage] = useState(initialImage)
  const [imageFile, setImageFile] = useState("")

  const handleImage = (e) => {
    e.preventDefault()
    const selectedFile = e.target.files[0]

    if (!selectedFile || !isFileAllowed(selectedFile)) {
      toast.error("Please choose a PNG, JPG, or PDF file.")
      return
    }

    if (selectedFile.size > 2 * 1024 * 1024) {
      toast.error("File size exceeds 2MB. Please choose a smaller file.")
      return
    }

    const reader = new FileReader()
    reader.addEventListener("load", (e) => {
      setImage(e.target.result)
    })

    reader.readAsDataURL(selectedFile)
    setImageFile(selectedFile)
  }

  const removeImage = () => {
    setImage("")
    setImageFile("")
  }

  useEffect(() => {
    setImage(initialImage)
  }, [initialImage, setImage, setImageFile])

  return { image, imageFile, handleImage, removeImage }
}
