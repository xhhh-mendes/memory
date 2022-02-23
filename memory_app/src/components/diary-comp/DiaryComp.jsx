import React, { Component } from 'react';
import DiaryService from '../../services/DiaryService';
import SinglePostComp from '../single-post/SinglePostComp';
import "./diarycomp.css"

class DiaryComp extends Component {

    constructor(){
        super()

        this.state = {
            diaries:[]
        }
    }

    componentDidMount(){
        DiaryService.getDiaries().then((res)=>{
            this.setState({diaries: res.data});
        });
    }

    showDiaries(){
        console.log(this.state.diaries);
    }

    
    render() {
        return (
            <div className="posts">
                {
                this.state.diaries.map(
                    diary => 
                    <div key={diary.id} className="posts"><SinglePostComp createTime={diary.createTime} content={diary.content} /></div>
                )
                }
            </div>
           
    
        );
    }
}

export default DiaryComp;