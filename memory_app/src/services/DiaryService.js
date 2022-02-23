import axios from 'axios'

const DIARY_API_BASE_URL = "http://localhost:8080/api/v1/diary"

class DiaryService{

    getDiaries(){
        return axios.get(DIARY_API_BASE_URL);
    }

    createDiary(diary){
        return axios.post(DIARY_API_BASE_URL, diary);
    }
}

export default new DiaryService;