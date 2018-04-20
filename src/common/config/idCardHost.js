const NODE_ENV = process.env.NODE_ENV;

const IdCardUri = {
  "production": 'http://106.15.75.232:8012/',
  "test": 'http://106.15.75.232:8012/',
  "development": "http://106.15.75.232:8012/"
};
// "development": "https://api.zengold.org/"

let idServer = IdCardUri[NODE_ENV]

export default idServer
