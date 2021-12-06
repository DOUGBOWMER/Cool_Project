import { getStorage, uploadBytes, ref } from "@firebase/storage";
import { useState } from "react";
import app from '../firebaseConfig'




const UploadImage = (file) =>{
const [imageToPost, setimageToPost] = useState('')
const ImageToPost = (e) =>{
    const reader = new FileReader();
    setfile(e.target.files[0])
    reader.readAsDataURL(e.taget.files[0])
    reader.onload = (readerEvent) =>{
    setimageToPost(readerEvent.target.result)
    const storage = getStorage()
    const storageRef = ref(storage, "profilePhoto");
    uploadBytes(storageRef, imageToPost).then((snapshot) =>{
        console.log('Uploaded Profile image')
            }
        )} 
    }
}
    export default UploadImage();