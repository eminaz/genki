// If you're running on a device or in the Android simulator be sure to change
//let meteor_host = process.env.METEOR_HOST || 'localhost';
console.log("=========> you will need to change the METOER_HOST to your own ip or url");
let METEOR_URL = 'ws://192.168.120.10:3000/websocket';
if (process.env.NODE_ENV === 'production') {
  METEOR_URL = ''; // your production server url
}

export const settings = {
  env: process.env.NODE_ENV,
  METEOR_URL,
};

export default settings;
