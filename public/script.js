window.addEventListener('load', async () => {
    const stream = await navigator.mediaDevices.getDisplayMedia({
      video: true,
      audio: false
    });
  
    const userVideo = document.getElementById('user-video');
    userVideo.srcObject = stream;
  
    const startButton = document.getElementById('start-btn');
    startButton.addEventListener('click', async () => {
      const socket = io();
  
      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: 'video/webm'
      });
  
      mediaRecorder.ondataavailable = async (event) => {
        if (event.data && event.data.size > 0) {
          const blob = await event.data.arrayBuffer();
          socket.emit('binarystream', blob);
        }
      };
  
      mediaRecorder.start();
  
      socket.on('disconnect', () => {
        mediaRecorder.stop();
      });
    });
  });
  