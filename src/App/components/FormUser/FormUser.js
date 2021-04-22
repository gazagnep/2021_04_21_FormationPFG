import React from 'react';
import PropTypes from 'prop-types';
import styles from './FormUser.module.scss';

const FormUser = (props) => (
  <form name="user-form" id="user-form" className="FormUser" data-testid="FormUser">
    id:{props.user.id}<br/>
    login:<input type="text" placeholder="nom" onChange={e=>{
      console.log('nouvelle valeur',e.target.value);
      props.onChangevalue({...props.user,login:e.target.value})
    }} value={props.user.login}/> <br/>
    password:<input type="text" placeholder="nom" onChange={e=>{
      console.log('nouvelle valeur',e.target.value);
      props.onChangevalue({...props.user,password:e.target.value})
    }} value={props.user.password}/> <br/>
  </form>
);

FormUser.propTypes = {user:PropTypes.object, onchangevalue:PropTypes.func};

FormUser.defaultProps = {};

export default FormUser;
