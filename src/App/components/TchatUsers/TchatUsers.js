import React, {useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './TchatUsers.module.scss';
import store, { initialState,TCHAT_ACTIONS } from '../../reducers/store';
import TchatUser from '../TchatUser/TchatUser';

const TchatUsers = (props) => {
  const [users, setusers] = useState(initialState.tchatUsers);
  useEffect(() =>{
    setusers(store.getState().tchatUsers);
    store.subscribe(() => {
      setusers(store.getState().tchatUsers);
    })
  }, []);
  
  return (
    <div className={styles.TchatUsers} data-testid="TchatUsers">
      {users.map((e,i)=><TchatUser key={'user-'+i} user={e} onclickuser={(id=>{
        store.dispatch({type:TCHAT_ACTIONS.SELECT_DEST,value:id})
      })} />)}
    </div>
  );
}
  
TchatUsers.propTypes = {
  users:PropTypes.array.isRequired,
};

TchatUsers.defaultProps = {};

export default TchatUsers;
