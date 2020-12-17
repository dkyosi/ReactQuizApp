import React,{Component} from 'react';
import JSON from '../JSON.json';
import Question from './Question';

class Questions extends Component {

    state = {
        questions : [],
        score:0,
        showDivClass:'scorediv'
    }

    getQuestions =() =>{
        this.setState({questions: JSON})
    }

    componentDidMount(){
        this.getQuestions()
    }

    showScore(){
        console.log(localStorage.getItem('totalScore'))
        this.setState({score:parseInt(localStorage.getItem('totalScore')),showDivClass:'scoredivshow'})
    }
  
    render() {

        return (
          <div>
              
                <div className="top-div" style={{display:'flex'}}>
                    <h2 style={{flex:0.5,marginLeft:"40px"}}>Knowledge Quiz</h2>  <button className="score-btn" style={{flex:0.1}} onClick={this.showScore.bind(this)} >View Score</button>  <h1 className={this.state.showDivClass} style={{flex:0.3}}><span>Score : </span>{this.state.score}/100</h1>
                </div>
              {
                        
                this.state.questions.map(question=>{
         
                    return(
                        <div  key ={question.id}  style={{paddingLeft:"60px",paddingRight:"60px"}}>
                            <Question
                            handleScore = {()=>this.handleScore.bind(this)}
                            id={question.id} 
                            Question={question.Question} a={question.a}
                            b={question.b} c = {question.c} d={question.d}
                            answer={question.answer}/>

                        </div>
                    )
                })
              }
          </div>  
        );
    }
}

export default Questions;