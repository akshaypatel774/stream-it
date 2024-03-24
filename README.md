# StreamIt
StreamIt is a simple Node.js application that allows you to stream your screen (mpre features coming soon) to Twitch.

## Features
* Stream your screen to Twitch with ease.
* Lightweight and easy to set up.
* Supports customizable settings for streaming quality and framerate.

## Prerequisites
Before getting started, ensure you have the following installed:

* [Node.js](https://nodejs.org/en) (version 14 or higher)
* [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) package manager

## Installation
Clone the repository:

```bash
git clone https://github.com/akshaypatel774/stream-it.git
```

Navigate to the project directory:

```bash
cd StreamIt
```

Install dependencies:

```bash
npm install
# or
yarn install
```

## Usage
1. Rename the .env.example file to .env and add your Twitch stream key:

```bash
TWITCH_STREAM_KEY=your_twitch_stream_key_here
```
Replace your_twitch_stream_key_here with your actual Twitch stream key.

2. Start the application:

```bash
npm run dev
# or
yarn dev
```
3. Open your browser and navigate to http://localhost:8000.

4. Click on the "Start Streaming" button to begin streaming your screen to Twitch.

## Customize Settings
You can customize the streaming settings by modifying the index.js file. Options such as framerate, resolution, and streaming platform can be adjusted to fit your preferences.

## License
This project is licensed under the *ISC License*.

## Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request to improve this project.

## Acknowledgements
* Built with [Node.js](https://nodejs.org/en) and [Express.js](https://expressjs.com/).
* Uses [Socket.IO](https://socket.io/) for real-time communication.
* Inspired by the need for a simple screen streaming solution.

 ---
Feel free to customize the README.md file further to fit your project's specific requirements and add any additional information or instructions as needed.