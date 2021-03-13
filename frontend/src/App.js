import './App.css';
import React from "react"
import axios from "axios"
import Authorization from "./components/Authorization/Authorization"

class App extends React.Component{

  state = {
    loggedInAs:null,
  }

  onAuthorized = (user)=>{
    this.setState({loggedInAs:user})
  }

  render = ()=>{

    var retval = null;

    if(this.state.loggedInAs === null){
      retval = <Authorization onAuthorized={this.onAuthorized}/>;
    }

    return(
      <div className="App">
        {retval}
      </div>
    )
  }


}


export default App;
