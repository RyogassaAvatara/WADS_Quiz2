import React, {Component} from "react";
import {ButtonToolbar, Button} from 'react-bootstrap'
import './Home.css';


export class Home extends Component {

  constructor(props){
    super(props);
    this.state={heros:[]}
  }

  refreshHero(){
    fetch(process.env.REACT_APP_API+'heroes')
    .then(response=>response.json())
    .then(data=>{
      this.setState({heros:data});
    });
  }

  componentDidMount(){
    this.refreshHero();
  }


  deleteHero(heros_id){
    if(window.confirm("Are you sure you want to delete?")){
      fetch(process.env.REACT_APP_API+'heroes/'+heros_id,{
        method:'DELETE',
        header:{'Accept':'application/json'},
        'Content-Type':'application/json'
      })
    }
  }

  render(){
    const {heros}=this.state;
    return (
      <div>
        <table class="content-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Alias</th>
                <th text-align="center">Options</th>
              </tr>
            </thead>
            <tbody>
                {heros.map(hero=>
                  <tr key={hero.heros_id}>
                    <td>{hero.name}</td>
                    <td>{hero.alias}</td>
                    <td>
                      <ButtonToolbar>
                        <Button className="mr-2" variant="danger"
                        onClick={()=>this.deleteHero(hero.heros_id)}>
                          Delete
                        </Button>
                      </ButtonToolbar>
                    </td>
                  </tr>)}
            </tbody>
        </table> 
      </div>
    );
  }
}

export default Home;
