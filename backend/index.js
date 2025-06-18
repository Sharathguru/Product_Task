import {createServer} from 'http';
import app from './app.js';

let PORT=process.env.PORT;
let server=createServer(app);

server.listen(PORT,(err)=>console.log('server is running on port 5000'));

