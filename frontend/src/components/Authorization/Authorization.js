import React from "react" 
import Axios from "axios"
import "./Authorization.css"
import LoginForm from "./LoginForm/LoginForm"
import RegisterForm from "./RegisterForm/RegisterForm"

class Authorization extends React.Component{

    state = {
        trying_to_register:false,

    }

    onLogin = (user)=>{
        if(!this.state.trying_to_register){
            this.Login(user);
        }
        else{
            this.setState({trying_to_register:false});
        }
    }

    onRegister = (user)=>{
        if(this.state.trying_to_register){
           this.Register(user)
        }
        else{
            this.setState({trying_to_register:true});
        }
    }

    Login = (user)=>{
        if(user.name == null || user.name == ""){
            throw Error("Username is invalid");
        }
        if(user.pswd == null || user.pswd == ""){
            throw Error("Password is invalid");
        }
    }

    Register = (user)=>{
        if(user.name == null || user.name == ""){
            throw Error("Username is invalid");
        }
        if(user.pswd == null || user.pswd == ""){
            throw Error("Password is invalid");
        }
        if(user.pswd_rep !== user.pswd){
            throw Error("Password and repeated password do not match")
        }
    }

    render = ()=>{


        var form = <p>ERROR</p>

        if(!this.state.trying_to_register){
            form = <LoginForm/>;
        }
        else{
            form = <RegisterForm onLogin={this.onLogin}/>;
        }

        return(
            <div className="Authorization">
                {form}
            </div>
        );

    }   
}

export default Authorization