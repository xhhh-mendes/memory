import React from 'react';
import {motion} from 'framer-motion';

const ImageGrid = ({photos, setSelectedImg}) => {

  return (
    <div className='img-grid'>
      {photos && photos.map(photo =>
        <motion.div className='img-wrap' key={photo.id}
        layout
        whileHover={{opacity: 1}}
        onClick={() => setSelectedImg(photo.imageURI)}>
          <motion.img src={photo.imageURI} alt="image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6}}
          />
        </motion.div>
      )}
    </div>
  )
}

export default ImageGrid;
