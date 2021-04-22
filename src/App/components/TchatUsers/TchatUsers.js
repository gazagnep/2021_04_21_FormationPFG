import React from 'react';
import PropTypes from 'prop-types';
import styles from './TchatUsers.module.scss';

const TchatUsers = (props) => (
  <div className={styles.TchatUsers} data-testid="TchatUsers">
    {props.users.map(e=>)}
  </div>
);

TchatUsers.propTypes = {
  users:PropTypes.array.isRequired,
};

TchatUsers.defaultProps = {};

export default TchatUsers;
