import React, {Component} from 'react'
import  Navbar from './Navbar';
import  FormField from './FormField';
import  CoolButton from './CoolButton';
import Message from './Message'



class SignUp extends Component{
  constructor() {
    super();
      this.state = {
      status: false
    }
    this.messageRender = this.messageRender.bind(this)
  }

  messageRender() {
    this.setState({status: !this.state.status})
  }


  render() {
    console.log(this.state.status)
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div className="container is-fluid">
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Password" type="password" placeholder="****" />
        <CoolButton isWarning isActive isBlack getFunc={this.messageRender}>Button 2</CoolButton>
        {this.state.status ? 
        <Message/>:<span></span>
        }
  
      </div>
    </div>
    );
  }
}

export default SignUp;
