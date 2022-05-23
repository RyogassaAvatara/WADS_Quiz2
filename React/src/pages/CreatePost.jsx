import React, {Component} from "react";
import {Button, Form} from "react-bootstrap"
import './CreatePost.css';

export class CreatePost extends Component{

  constructor(props){
    super(props);
    this.submit=this.submit.bind(this);
  }

  submit(event){
    event.preventDefault();
    fetch(process.env.REACT_APP_API+'heroes',{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            heros_id:null,
            name:event.target.name.value,
            alias:event.target.alias.value
        })
    })
    .then(res=>res.json())
    .then((result)=>{
        alert(result);
    },
    (error)=>{
        alert('Failed');
    })
}



  render(){
    return (
      <div class="createPost">
        <Form onSubmit={this.submit}>
          <Form.Group class="beside" controlId="name">
            <Form.Label>name</Form.Label>
            <Form.Control type="text" name="name" required 
            placeholder="character name"/>
          </Form.Group>
          <Form.Group class="beside" controlId="alias">
            <Form.Label>alias</Form.Label>
            <Form.Control type="text" name="alias" required 
            placeholder="character alias"/>
          </Form.Group>
          <Form.Group class="beside">
            <Button class="addButton" variant="primary" type="submit">
              Add Character
            </Button>
          </Form.Group>
        </Form>
      </div>
    );
  }  
}

export default CreatePost;