const NODE_ENV = process.env.NODE_ENV;

const Host = {
  "production": 'http://106.15.75.232:8010/',
  "test": 'http://106.15.75.232:8010/',
  "development": 'http://localhost:3001/'
}
//https://bk.zengold.org/
//http://106.15.75.232:8010/
//http://localhost:3001/
let server = Host[NODE_ENV]

export default server
