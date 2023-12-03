const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
/*
HTTP 메소드(get방식), 라우팅 ,
app.get('/',()=>)

라우팅
/about
/board
/aboud/etc

콜백(callback)
()=>{}
함수(끝나고 실행할 함수)
다른 코드의 인수로서 넘겨주는 함수

*/