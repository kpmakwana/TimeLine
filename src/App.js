import React, { Component } from 'react'
import './main.css';
import TimeLineItem from './Components/TimeLineItem'


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    data:[ 
    {//First Step
      actionDate: "July 2",
      status:"You have taken Test Drive",
      details:"of 2010 White Alto LXI",
      progress:"done"
      //Progress have 3 phase 1. done, 2.active, 3.pending
    },
    {//Second Step
      actionDate: "July 5",
      status:"Pay Token",
      details:"for 2010 White Alto LXI",
      progress:"done"
    },
    {//Third Step
      actionDate: "July 5",
      status:"Processing your loan",
      details:"Usually takes 3-6 days",
      progress:"active"
    },
    {//Fourth Step
      actionDate: "",
      status:"Take car delivery",
      details:"From our Mumbai Showroom",
      progress:"pending"
    },
    {//Fifth Step
      actionDate: "",
      status:"Start your ownership Process ",
      details:"Please bring the list of documents at the time of delivery ",
      progress:"pending"
    },
  ]
  }
  }
  
  renderSteps(){
    let data = [...this.state.data];
    //Ittrating over data, bringing every steps and passing it to TimeLineItem (This is also helpul in acchiving scallability)
    let steps=data.map( (step,index) =>{
      return(
        <TimeLineItem
        actionDate={step.actionDate}
        status={step.status}
        details={step.details}
        progress={step.progress}
        key = {index}
        />
      )
    } )

    return(
      <div>
        <div id='err-msg'></div>
        {steps}
      </div>
    )
    
  }
  componentDidMount(){
    let previousProgress;
    let flag=0;
    let data = [...this.state.data];
    for(let i=0;i<data.length;i++){
      if(i===0){
        previousProgress=data[i].progress
      }
      else{
        if(previousProgress==='active' && data[i].progress==='done' ){
          console.log(i)
          flag=1;
          break;
        }
        if(previousProgress==='active' && data[i].progress==='active' ){
          console.log(i)
          flag=1;
          break;
        }
        if(previousProgress==='pending' && data[i].progress==='done' ){
          console.log(i)
          flag=1;
          break;
        }
        if(previousProgress==='pending' && data[i].progress==='active' ){
          console.log(i)
          flag=1;
          break;
        }
      }
      previousProgress=data[i].progress;
    }
    if(flag===1){
      document.getElementById('err-msg').innerHTML= '*Please check order of progress*';
    }
    

  }
  
  
  
  render() {
  return (
    <div className="App" style={{padding: "5%"}}>
      {this.renderSteps()}
    </div>
  );
}
}
