import React, {Component} from 'react';


class Chrono extends Component {
  state= {
    seconds: 0,
    minutes: 0,
    hours: 0,
    intervalId: undefined,
    buttonDisabled: false,
  }
  start = () =>{
   this.setState({
    buttonDisabled: true,
     intervalId: setInterval(()=>{
      this.setState({
        seconds: this.state.seconds + 1,
      })
      if (this.state.seconds === 60){
        this.setState({
          seconds: 0,
          minutes: this.state.minutes + 1,
        })
      }
      if (this.state.minutes === 60){
        this.setState({
          minutes: 0,
          hours: this.state.hours + 1,
        })
      }
     }, 1000)
  })  
  }
 pause = () =>{
  if (!!this.state.intervalId) {
    clearInterval(this.state.intervalId);
    this.setState({
      intervalId: undefined,
      buttonDisabled: false,
    })
  }
 }
 reset = () => {
   this.setState({
    seconds: 0,
    minutes: 0,
    hours: 0,
    buttonDisabled: false,
   })
   this.pause();
 }
  stringTwoDigits= (number) => {
    return (number / 100).toFixed(2).split('.')[1];
  }
  render(){
  const { seconds, minutes, hours } = this.state
  return(
    <div>
      <h1>My React Chrono</h1>
      <div>
      {this.stringTwoDigits(hours)}:{this.stringTwoDigits(minutes)}:{this.stringTwoDigits(seconds)}
      </div>
        <button onClick={this.start} disabled={this.state.buttonDisabled}>Start</button>
        <button onClick={this.pause}>Pause</button>
        <button onClick={this.reset}>Reset</button>
    </div>
  )
}
}

export default Chrono;