const express = require('express')
const app = express()
const port = 3000

function calculateSum(counter) {
  var sum  = 0;
  for (let i=0; i<counter; i++) {
    sum += i;
    
  }
  return sum;
}


function hanldeFirstRequest(req, res) {
  var calculatedSum = calculateSum(100);
  console.log(calculatedSum);
  var answer = "the sum is " + calculatedSum;
  res.send(answer);
}
app.get('/', hanldeFirstRequest)

function started() {
  console.log(`Example app listening on port ${port}`)
}

app.listen(port, started)




