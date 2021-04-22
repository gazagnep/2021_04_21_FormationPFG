import React from 'react'
import PropTypes from 'prop-types'

import Tchat from './components/Tchat/Tchat';
import  './App.css'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={count:0,users:[]};
  }
  componentDidMount(){
    //fetch('http://desorbaix.alexandre.free.fr/phpRest/users/')
    fetch('http://desorbaix.alexandre.free.fr/phpRest/tchatUsers/')
    .then(e=>e.json(),e=>[])
    .then(o=>{
      console.log(o);
      this.setState({count:o.length, users:o,selectedUser:null, selectedId:null})
      return o;
    })
  }
  remove(){
    this.setState({count:this.state.count-1});
    //console.log('remove',this.state.count);
  }
  // render() {
  //   console.log('Render APP',this.state)
  //   return (
  //     <div>
  //       La valeur de count est  { this.state.count }<br/>
  //       <Button title="Add" onclickbutton={()=>{
  //         this.setState({count:this.state.count+1});
  //         console.log('add',this.state.count);
  //       }}/>
  //       <Button bgColor='tomato' title="remove" onclickbutton={()=>{this.remove()}}/>
  //       {this.state.selectedUser && <User user={this.state.selectedUser} onclickuser={()=>{}}/>}
  //       <hr/>
  //         {this.state.selectedUser && <FormUser onchangevalues={(value=>{
  //           this.setState({selectedUser:value});
  //         })} user={this.state.selectedUser}/>}
  //       <hr/>
  //       {this.state.users.map((e,i)=><User onclickuser={()=>{this.setState({selectedUser:e})}} key={'users-'+i} user={e} style={{display:'inline-block', border:'1px solid black'}} /> )}

  //       <SelectUser users={this.state.users} 
  //                   selectedId={this.state.selectedId} 
  //                   onuserselectionchange={(id)=>this.setState({selectedId:id=-1})} >
  //               <option value={-1}>Tout le monde</option>
	// 	      </SelectUser>
  //     <hr/>
  //     {JSON.stringify( this.state)}
  //     </div>
	  
  //   );
  render() {
    console.log('render')
    return (
      <div className="App">
       <Tchat></Tchat>
      </div>
    )
  }
}


App.propTypes = {

};


export default App;