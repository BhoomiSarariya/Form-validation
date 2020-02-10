import React from 'react';
import './App.css';
import { Form, Col, Button, Row, DropdownButton, Dropdown } from 'react-bootstrap'

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      firstname:'',
      lastname:'',
      middlename:'',
      email:'',
      firstnameError:false,
      lastnameError:false,
      middlenameError:false,
      emailError:false
    }
 }

handleChange=(e)=>{
 const target = e.target;
 const value = target.type === 'checkbox' ? target.checked : target.value;
 const name = target.name;
 this.setState({
   [name]: value
 });
 if(e.target.name==='firstname'){
   console.log(e.target.value);
   if(e.target.value==='' || e.target.value===null ){
     this.setState({
       firstnameError:true
     })
   } else {
     this.setState({
       firstnameError:false,     
       firstName:e.target.value
     })
   }
 }
 if(e.target.name==='middlename'){
  console.log(e.target.value);
  if(e.target.value==='' || e.target.value===null ){
    this.setState({
      middlenameError:true
    })
  } else {
    this.setState({
      middlenameError:false,     
      middleName:e.target.value
    })
  }
}
 if(e.target.name==='lastname'){
   if(e.target.value==='' || e.target.value===null){
     this.setState({
       lastnameError:true
     })
   } else {
     this.setState({
       lastnameError:false,
       lastName:e.target.value
     })
   }
 }
 if(e.target.name==='email'){
  const email= e.target.value
  const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
  const result = pattern.test(email);
  if(result===true){
    this.setState({
      emailError:false,
      email:email
    })
  } else{
    this.setState({
      emailError:true
    })
  }

 }
 if(e.target.name==='password'){
   if(e.target.value==='' || e.target.value===null){
     this.setState({
       passwordError:true
     })
   } else {
     this.setState({
       passwordError:false,
       password:e.target.value
     })
   }
}
if(e.target.name==='mobileNo'){
  const pattern=/^\d{10}$/;
  const value=pattern.test(e.target.value);
  if(value===false){
    this.setState({
      mobileError:true
    })
    console.log("helllo")
  } else {
    this.setState({
      mobileError:false,
      mobile:e.target.value
    })
  }
}
if(this.state.firstnameError===false && this.state.lastnameError===false && 
 this.state.emailError===false && this.state.passwordError===false){
   this.setState({
     isDisabled:false
   })
}
}
costumValidationEmail=(email)=>{
  const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
  const result = pattern.test(email);
  if(result===true){
    this.setState({
      emailError:false,
      email:email
    })
  } else{
    this.setState({
      emailError:true
    })
  }
}
handleSubmit=(e)=>{
  e.preventDefault();
  console.log(this.state);
}
  render() {
    return (
      <div className="container card">
        <Form onSubmit={this.handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} md="4">
              <Form.Label>First name</Form.Label>
              <Form.Control type="text" name="firstname" placeholder="First name"  onBlur={(e)=>this.handleChange(e)}/>
              {this.state.firstnameError ? <span style={{color: "red"}}>Please Enter ur first name</span> : ''} 
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationMiddleName">
              <Form.Label>Middle name</Form.Label>
              <Form.Control type="text" name="middlename" placeholder="Middle name" onBlur={(e)=>this.handleChange(e)} />
              {this.state.middlenameError ? <span style={{color: "red"}}>Please Enter ur middle name</span> : ''}
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomName">
              <Form.Label>Last name</Form.Label>
              <Form.Control type="text" name="lastname"  placeholder="Last name" onBlur={(e)=>this.handleChange(e)} />
              {this.state.lastnameError ? <span style={{color: "red"}}>Please Enter ur last name</span> : ''}
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="12" controlId="validationEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" name="email" placeholder="Email" onBlur={(e)=>this.handleChange(e)}/>
              {this.state.emailError ? <span style={{color: "red"}}>Please Enter valid email address</span> : ''}
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group>
              <Form.Label as={Col} md="6" controlId="validationMobileNo">Mobile no.</Form.Label>
              <Form.Control type="text" name="mobileNo" placeholder="Mobile no." onBlur={(e)=>this.handleChange(e)} />
              {this.state.mobileError ? <span style={{color: "red"}}>Please Enter valid Mobile number</span> : ''}
            </Form.Group>
            <Form.Group as={Col} md="9" controlId="validationCustomPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" placeholder="Password"  />
              <Form.Control.Feedback type="invalid">Please enter atleast one Uppercase , Lowercase, Number and Speacial Character</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <fieldset>
              <Form.Group as={Row}>
                <Col><Form.Label column > Gender: </Form.Label></Col>
                <Col><Form.Check type="radio" label="Female" name="formRadios" id="formFemale" /></Col>
                <Col><Form.Check type="radio" label="Male" name="formRadios" id="formMale" /></Col>
              </Form.Group>
            </fieldset>
          </Form.Row>
          <Form.Row>
            <fieldset>
              <Form.Group as={Row}>
                <Col><Form.Label column > Occupation: </Form.Label></Col>
                <Col><Form.Check type="checkbox" label="Student" name="formCheck" id="formStudent" /></Col>
                <Col><Form.Check type="checkbox" label="Employee" name="formCheck" id="form" /></Col>
              </Form.Group>
            </fieldset>
          </Form.Row>
          <Form.Row>
            <fieldset>
              <Form.Group as={Row}>
                <Col><Form.Label column > Hobby: </Form.Label></Col>
                <Col><Form.Check type="checkbox" label="Singing" name="formCheck" id="formSinging" /></Col>
                <Col><Form.Check type="checkbox" label="Dancing" name="formCheck" id="formDancing" /></Col>
                <Col><Form.Check type="checkbox" label="Reading" name="formCheck" id="formReading" /></Col>
                <Col><Form.Check type="checkbox" label="Travelling" name="formCheck" id="formTravelling" /></Col>
              </Form.Group>
            </fieldset>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>City</Form.Label>
              <DropdownButton title="City">
                <Dropdown.Item href="#">Rajkot</Dropdown.Item>
                <Dropdown.Item href="#">Ahemdabad</Dropdown.Item>
                <Dropdown.Item href="#">Surat</Dropdown.Item>
                <Dropdown.Item href="#">Vadodara</Dropdown.Item>
              </DropdownButton>
              <Form.Control.Feedback type="invalid">Please provide a valid city. </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Group>
            <Form.Check  label="Agree to terms and conditions" feedback="You must agree before submitting."
            />
          </Form.Group>
          <Button type="submit" onClick={this.handleSubmit}>Submit form</Button>
        </Form>
      </div>

    )
  }
}
export default App;
