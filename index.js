const express = require('express')
const app = express()
const port = 3000
var cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/sound/:name', (req, res) => {
    const { name } = req.params

    switch( name ) {
        case "dog" :
          console.log("dog");
          res.json({'sound': '멍멍'})
          break;
      
        case "cat" :
      
          console.log("cat");
          res.json({'sound': '야옹'})
          break;

        case "pig" :
      
          console.log("pig");
          res.json({'sound': '꿀꿀'})
          break;

        default :
          console.log("알수없음");
          break;     
      }
})
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})