import React,{Component} from 'react';
import Card from '@material-ui/core/Card';
class Question extends Component {
 
        state = {
            correctAnswer:"",
            totalScore : 0
        }
   
  

    answerQuestion(ans){
       if(this.props.answer === ans){
           console.log("Correct!")

           this.setState({correctAnswer:"correct"})
           let score = parseInt(localStorage.getItem('totalScore')) + 10 ;
           console.log(score)
           localStorage.setItem('totalScore',score)

       }else{
        console.log("Wrong!")
        this.setState({correctAnswer:"wrong"})
       }
    }


    componentDidMount(){
        localStorage.setItem('totalScore',0)
    }
  
    render() {
        return (
            <div>
              <Card className="question-card">
              <h4>({this.props.id}) . {this.props.Question}</h4>  
                <div  className={this.state.correctAnswer}>
                    <div >
                        <div style={{margin:"10px",display:'flex'}}><div style={{flex:.8}}>A. {this.props.a} </div><button style={{flex:.1}} className="select-button" onClick={()=>this.answerQuestion(this.props.a)}>select</button></div>
                        <div style={{margin:"10px",display:'flex'}}><div style={{flex:.8}}>B. {this.props.b}</div> <button style={{flex:.1}}  className="select-button" onClick={()=>this.answerQuestion(this.props.b)}>select</button></div>
                        <div style={{margin:"10px",display:'flex'}}><div style={{flex:.8}}>C. {this.props.c}</div> <button style={{flex:.1}}  className="select-button" onClick={()=>this.answerQuestion(this.props.c)}>select</button></div>
                        <div style={{margin:"10px",display:'flex'}}><div style={{flex:.8}}>D. {this.props.d} </div><button style={{flex:.1}}  className="select-button" onClick={()=>this.answerQuestion(this.props.d)}>select</button></div>
                    </div>
                </div>  
              </Card>
            </div>
        );
    }
}

export default Question;