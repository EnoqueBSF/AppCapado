/* eslint-disable no-console */
import WS from 'reactjs-autobahn';
import { SERVER_URL } from '../config';

export const connect = () => {
  console.log('[Connect] - autobahn.js');
  const websocket = WS.connect(SERVER_URL);

  const sess = 123654;
  // websocket.on('socket/connect', (session) => {
  //   sess = '123654';
  // });

  return sess;
};

export const onSubscribe = (session, path, body) => {
  try {
    session.subscribe(path, body);
  } catch (err) {
    console.log('[Subscribe] - ', err);
  }
};

export const onPulish = (session, path, body) => {
  try {
    session.publish(path, body);
  } catch (err) {
    console.log('[Publish] - ', err);
  }
};
// io.on('connect', function () {
//   console.log('connect');

//   io.emit('join-match', {
//     match_id: matchId,
//     user_id: userId,
//   });
// });
