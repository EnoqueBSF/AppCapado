import io from 'socket.io-client';
import { SERVER_URL } from '../config';

export const connect = () => {
  try {
    const con = io.connect(SERVER_URL, { forceNode: true });
    return con;
  } catch (error) {
    console.log('SOCKETCON', error);
  }
};

export const publish = (con, path, body) => {
  try {
    con.emit(path, body);
  } catch (error) {
    console.log('socketError', error);
  }
};

export const subscribe = (con, path) => {
  const sep = String.fromCharCode(30);
  try {
    con.on(path, (payload) => {
      const mensagem = payload.split(sep);
      console.log(mensagem);
    });
  } catch (error) {
    console.log('socketError', error);
  }
};
// io.on('connect', function () {
//   console.log('connect');

//   io.emit('join-match', {
//     match_id: matchId,
//     user_id: userId,
//   });
// });
