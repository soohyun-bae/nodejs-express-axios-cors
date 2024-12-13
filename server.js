// server.js

const express = require('express');
const cors = require('cors')
const app = express()

app.use(cors({
  origin: "http://127.0.0.1:5500",
  methods: ['OPTIONS', 'POST', 'GET', 'PUT', 'DELETE'],
  headers: { 'Content-Type': 'application/json' }
}))

app.use(express.json())
app.use(express.text())


// CORS 설정을 위한 헤더
// const headers = {
//   'Access-Control-Allow-Origin': "http://127.0.0.1:9000",
//   'Access-Control-Allow-Methods': 'OPTIONS, POST, GET, PUT, DELETE',
//   'Access-Control-Allow-Headers': 'Content-Type',
// };

let data = { message: '여러분 화이팅!' };

app.options('/', (req, res) => {
  // res.writeHead(204, headers); -> res.writeHead(상태코드, 헤더정보) : 응답 헤더에 대한 정보를 기록하는 메서드
  // cors에서 이 작업을 자동으러 처리해줌
  return res.send()
})

app.get('/', (req, res) => {
  // res.writeHead(200, { 'Content-Type': 'application/json', ...headers });
  return res.send(data);
})

app.post('/', (req, res) => {
  data.message = req.body
  res.send(`받은 POST 데이터: ${req.body}`);
});

app.put('/',(req, res) => {
  data.message = req.body
  res.send(`받은 POST 데이터: ${req.body}`);
})

app.delete('/', (req, res) => {
  data = {}
  res.send('데이터가 삭제되었습니다.');
})

app.listen(3000, () => {
  console.log('서버가 http://localhost:3000/ 에서 실행 중입니다.');
});
