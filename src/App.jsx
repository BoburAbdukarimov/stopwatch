import React from "react";

class App extends React.Component{
  state={
    hours: 0,
    minutes: 0,
    seconds: 0,
  btnDisabled: false,
  intervalDisabled: true,
  interval: "", 
  intervalStorage: [],
  }
  startFunc = ()=>{
 this.setState({
        btnDisabled: true
      });
    let timer = setInterval(() => {   
      const {hours, minutes, seconds} = this.state;
  
      if(seconds===59){
        this.setState({
          seconds: 0,
          minutes: minutes + 1
        })
      }else{
        this.setState({
          seconds: this.state.seconds + 1
         })
      }
      // minutes un
      if(minutes === 59){
        this.setState({
          minutes: 0,
          hours: hours + 1
        })
      }
    }, 1000);
    this.setState({
      interval: timer
    })
    this.setState({
      intervalDisabled: false
    })

  
  }

  stopFunc = ()=>{
    clearInterval(this.state.interval)
    this.setState({
      btnDisabled: false
    })


  }

  intervalFunc= ()=>{
    const {hours, minutes, seconds, intervalStorage, intervalDisabled} = this.state;
    intervalStorage.push(`${hours}: ${minutes}:${seconds}`);
    this.setState({
      intervalStorage,
    })
  
  }



  render(){
    const {hours, minutes, seconds, btnDisabled, intervalStorage, intervalDisabled} = this.state
    return( 
      <div className="div">
         <div className="timer-container">
      <h1 className="mb-4"><span className="text-capitalize">online</span> <span  className="spantwo text-capitalize">stopwatch</span></h1>

      <div className="timer-col">
        <p className="timer-hours">{hours}</p>
        <p className="timer-label">hours</p>
      </div>
      {/* //////// */}
      <div className="timer-col">
        <p className="timer-minutes">{minutes}</p>
        <p className="timer-label">minutes</p>
      </div>
      {/* ---//------ */}
      <div className="timer-col">
        <p className="timer-seconds">{seconds}</p>
        <p className="timer-label">seconds</p>
      </div>
      
      </div>
      <div className="timer-container text-center">
        <div className="timer-btn">
          <button disabled={btnDisabled} className="btn btn-success" onClick={this.startFunc} >start</button>
        </div>
        {/* ----//===== */}
        <div className="timer-btn">
          <button  className="btn btn-danger" onClick={this.stopFunc}>stop</button>
        </div>
            {/* ----//===== */}
            <div className="timer-btn">
          <button disabled={intervalDisabled} className="btn btn-secondary" onClick={this.intervalFunc}>internal</button>
        </div>
            {/* ----//===== */}
            <div className="timer-btn">
          <button className="btn btn-warning">clear</button>
        </div>
      </div>

      <div className="timer-container-internal text-center">
  { 
  intervalStorage.map((item, index) =><p>{index + 1}.=&gt; {item}</p>)
  }
      </div>

    </div>
    )
  }
}
export default App;