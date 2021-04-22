import React from 'react';
import PropTypes from 'prop-types';
import styles from './User.module.scss';

const User = (props) => (
  <div onClick={()=>props.onclickuser()} id={"DOMID"+props.user.id} className={styles.User} style={props.style} data-testid="User">
      id:{props.user.id}<br/>
      login:{props.user.login}<br/>   
      password:{props.user.password}<br/>
  </div>
);

User.propTypes = {
  onclickuser:PropTypes.func,
  user:PropTypes.object
};

User.defaultProps = {};

export default User;
