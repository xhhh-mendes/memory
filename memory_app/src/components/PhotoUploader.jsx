import React, { useState, useEffect } from 'react'
import PhotoService from '../services/PhotoService';
import ImageGrid from './ImageGrid';
import Modal from './Modal';

const PhotoUploader = ({setImages, count, setCount}) => {
    // file is null to begin with
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg'];

    const imageSelector = (e) => {
        let selected = e.target.files[0];

        if(selected && types.includes(selected.type)){
            setFile(selected);
            setError("");

            var reader = new FileReader();
            reader.readAsDataURL(selected);
            reader.onloadend = function(){

                const photo = {
                    name: selected.name,
                    imageURI: reader.result
                }

                PhotoService.createPhoto(photo).then(res =>{
                  })

                PhotoService.getPhotos().then((res)=>{
                    setImages(res.data.reverse());
                    setCount(count+1);
                }); 
            }

        }else{
            setFile(null);
            setError("Please select an image");
        }

    }
    return (
        <form>
            <label>
                <input type="file" onChange={imageSelector}/>
                <span>+</span>
            </label>
            <div className='output'>
                {error && <div className='error'>{error}</div>}
                {file && <div>{file.name}</div>}
            </div>
        </form>
    )
}

export default PhotoUploader;