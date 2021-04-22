import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './TchatViewer.module.scss';
import { REST_ADDR } from '../../config/config.js';

const TchatViewer = (props) => {
  const [messages, setmessages] = useState([]);
  const [lastId, setlastId] = useState(-1);;
  const [fetchCount, setFetchCount] = useState(0)
  //component did mount avec[] ref de changement vide
  useEffect(() => {
    fetch(`${REST_ADDR}/messages?id_gte=${lastId + 1}`)
      .then(flux => flux.json(), flux => { console.log(flux); return [] })
      .then(jsonArr => {
        setTimeout(() => setFetchCount(fetchCount + 1), 3000);
        if (jsonArr.length <= 0) {
          return jsonArr;
        }
        let last = lastId;
        jsonArr.forEach(e => {
          if (last < e.id) {
            last = e.id
          }
        })
        if (lastId < last) {
          setlastId(last);
        }
        console.log('message initialement recus', jsonArr)
        setmessages([...messages, ...jsonArr]);
        return jsonArr;
      })
  }, [fetchCount]);

  return (<div className={styles.TchatViewer} data-testid="TchatViewer">
    {messages.map((e, i) => <div className="message" key={'message-' + i}>
      {e.dateTime && e.dateTime.split('T')[1].split('.')[0] + ':'}:<span style={{ color: e.color }}>{e.text}</span>{/* 2021-04-23T12:35:00.595*/}
      {JSON.stringify(e)}
    </div>)}
  </div>
  );
}

TchatViewer.propTypes = {};

TchatViewer.defaultProps = {};

export default TchatViewer;
