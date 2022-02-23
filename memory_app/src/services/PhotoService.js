import axios from 'axios';

const PHOTOS_API_BASE_URL = "http://localhost:8080/api/v1/photos"

class PhotoService{

    getPhotos(){
        return axios.get(PHOTOS_API_BASE_URL);
    }

    createPhoto(photo){
        return axios.post(PHOTOS_API_BASE_URL, photo);
    }
}

export default new PhotoService;
