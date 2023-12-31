const express = require('express')
var cors = require('core')
const app = express()
const port = 3000

//app안에 cors를 허용해주겠다. ()안에 조건 설정이 가능하다.
app.use(cors())

//기본값으로 라우팅되면 아래와 같이 표시하겠다.
//res : 응답, 응답에 hello world를 표시하겠다.
//req : 어떠한 값을 넘겨줄껀지.
app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/sound/:name', (req, res) => {
  const {name} = req.params
  
  if(name == "dog"){
    res.json({'사운드':'멍멍'})
  } else if (name == "cat"){
    res.json({'사운드':'야옹'})
  
  } else if (name == "duck"){
    res.json({'사운드':'꿱꿱'})
  
  } else if (name == "wolf"){
    res.json({'사운드':'아울'})
  
  } else  {
    res.json({'사운드':'기타'})
  }


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


app.use(express.json());
app.post('/user/:id', (req,res)=>{
  const p = req.params
  console.log(p)
  const b = req.body
  console.log(b)

  res.send({'message':'Hello wolrd'});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})