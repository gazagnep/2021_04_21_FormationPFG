import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TchatViewer from '../TchatViewer/TchatViewer';
import TchatUsers from '../TchatUsers/TchatUsers';
import TchatWriter from '../TchatWriter/TchatWriter';
import styleMedia from './Tchat.module.scss'
import { REST_ADDR } from '../../config/config';
const initialState = { messages: [], tchatUsers: [] }

class Tchat extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentDidMount(){
    fetch(`${REST_ADDR}/tchatUsers`)
      .then(f=>f.json(),f=>{console.log(f);return []})
      .then(jsonArr=> {
        this.setState({tchatUsers:jsonArr}); 
        return jsonArr;
      })
  }
  render() {
    return (
      <div className={styleMedia.Tchat}>
        Tchat
        <div className={styleMedia.horizontal}>
          <TchatViewer></TchatViewer>
          <TchatUsers users={this.state.tchatUsers}></TchatUsers> 
        </div>
        <TchatWriter></TchatWriter>
        {JSON.stringify(this.state)}
      </div>
    )
  }
}

export default Tchat;