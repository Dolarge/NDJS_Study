const express = require('express')
const app = express()
const port = 3000

//기본값으로 라우팅되면 아래와 같이 표시하겠다.
//res : 응답, 응답에 hello world를 표시하겠다.
//req : 어떠한 값을 넘겨줄껀지.
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/dog', (req, res) => {
    res.send('Hello Dog!')
})

app.get('/cat', (req, res) => {
    res.send('Hello Cat!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})