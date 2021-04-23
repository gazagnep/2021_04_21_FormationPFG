import React from 'react'
import PropTypes from 'prop-types'

import Tchat from './components/Tchat/Tchat';
import  './App.css'
import Auth from './components/Auth/Auth';

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

  // const [isConnected, setIsConnected] = useState(initialState);
  

  render() {
    console.log('render')
    return (
      <div className="App">
       isConnected?<Tchat></Tchat>:<Auth/>
      </div>
    )
  }
}


App.propTypes = {

};


export default App;