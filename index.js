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
    res.send({'사운드':'멍멍'})
})

app.get('/cat', (req, res) => {
    res.send('Hello Cat!')
})

//get 방식으로 쿼리또는 파라미터로 값을 전달해 줄 수 있다.
//파라미터를 받을때는 앞에 : 붙여야함
app.get('/user/:id', (req, res) => {
  // const q= req.params
  // console.log(q)
  const q = req.query
  console.log(q)
  
  res.json({'userid':q.id})
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})