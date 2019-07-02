import openSocket from 'socket.io-client';
const socket = openSocket('http://168.63.37.129:8000');

function subscribeToTimer(cb) {
    socket.on('timer', data => cb(null, data));
    socket.emit('subscribeToTimer', 1000);
}

export { subscribeToTimer }