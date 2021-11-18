if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const { createServer } = require('http');
const { Server } = require("socket.io");
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: '*'
    }
});
const router = require('./routes');
const cors = require('cors');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

io.on('connection', (socket) => {
    console.log('A user connected', socket.id);
    socket.on('disconneted', () => {
        console.log('A user disconnected');
    });
    socket.on('customEventFromClient', (payload) => {
        console.log('terima payload', payload);
    });
    socket.on('setUsername', (payload) => {
        console.log(payload);
        users.push({
            username: payload,
            status: 'online'
        })
    })
    socket.on('sendMessage', (payload) => {
        console.log(payload);
    })
});

app.use(router);

httpServer.listen(3000, () => {
    console.log('listening on port', port);
});