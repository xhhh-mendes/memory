import React, { Component } from 'react';
import DiaryService from '../../services/DiaryService';
import { Navigate  } from 'react-router';
import "./writecomp.css"

class WriteComp extends Component {

  constructor(){
    super()

    this.state = {
      content:'',
      date:'',
      redirect:false
    }
  }

  changeDate = (event) => {
    var time = event.target.value;
    console.log(time);
    console.log(typeof(time));
    this.setState({date: time.toString()});
  }

  changeContent = (event) => {
    this.setState({content: event.target.value});
  }

  saveDiary = (event) => {
    event.preventDefault();
    console.log(typeof(this.state.date))
    console.log(this.state.content)
    const diary = {
      content: this.state.content,
      createTime: this.state.date
    }

    DiaryService.createDiary(diary).then(res =>{
      this.setState({redirect:true});
    })

  }





  render() {
    if(this.state.redirect){
      return <Navigate to='/'/>;
    }

    return (
      <div className='write'>
        <form>
          <div className='writeFormGroup'>
          <input type="date" placeholder='Date' className='diaryDate' autoFocus={true} onChange={this.changeDate}/>
          </div>
          <div className='writeFormGroup'>
          <textarea placeholder='Tell your story...' type="text" className='diaryText' onChange={this.changeContent}/>
          </div>
          <button className="btn btn-success writeSubmit" onClick={this.saveDiary}>Publish</button>
        </form>
      </div>
    );
  }
}

export default WriteComp;