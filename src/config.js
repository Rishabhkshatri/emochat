import socketIOClient from "socket.io-client";

// Server Link
const link = 'https://emochatapi.herokuapp.com';
// const link = 'http://localhost:4000';
const socket = socketIOClient(link+'/');
// App Css

export {
	link,
	socket
};