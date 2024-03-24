import http from 'http'
import express from 'express'
import path from 'path'
import { spawn } from 'child_process';
import { Server as SocketIO } from 'socket.io'

require('dotenv').config();

const app = express()
const server = http.createServer(app)
// const io = new SocketIO(server)

app.use(express.static(path.resolve('./public')))

// io.on('connection', socket => {
//     console.log('Socket IO: ', socket.id);
//     socket.on('binarystream', stream => )
// })
server.listen(8000, () => console.log('Running on 8000'))

const ffmpegCommand = 'ffmpeg';
const ffmpegArgs = [
    '-f', 'gdigrab',
    '-framerate', '60',
    '-i', 'desktop',
    '-c:v', 'libx264',
    '-preset', 'ultrafast',
    '-pix_fmt', 'yuv420p',
    '-f', 'flv',
    'rtmp://live.twitch.tv/app/${process.env.TWITCH_STREAM_KEY}'
  ];

const ffmpegProcess = spawn(ffmpegCommand, ffmpegArgs);

ffmpegProcess.stdout.on('data', data => {
  console.log(`ffmpeg stdout: ${data}`);
});

ffmpegProcess.stderr.on('data', data => {
  console.error(`ffmpeg stderr: ${data}`);
});

ffmpegProcess.on('close', code => {
  console.log(`ffmpeg child process exited with code ${code}`);
});