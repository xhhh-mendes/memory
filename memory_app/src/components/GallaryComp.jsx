import React,{ useState, useEffect } from 'react'
import PhotoUploader from './PhotoUploader';
import ImageGrid from './ImageGrid';
import PhotoService from '../services/PhotoService';
import Modal from './Modal';

const GallaryComp = () => {
  const [images,setImages] = useState([]);
  const [count, setCount] = useState(0);
  const [selectedImg, setSelectedImg] = useState(null);


  useEffect(()=>{
    PhotoService.getPhotos().then((res)=>{
        setImages(res.data.reverse());
    });
    
}, [count]) // Only re-run the effect if changes

  
  return (
    <div>
        <PhotoUploader setImages={setImages} count={count} setCount={setCount}/>
        {images && <ImageGrid photos={images} setSelectedImg={setSelectedImg}/>}
        {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
    </div>
  )
}


export default GallaryComp;