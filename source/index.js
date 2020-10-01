function repeatMessage(message, repeatCount) {
    let messageToShow = "";
    for (let i = 0; i < repeatCount; i++) {
        messageToShow += message
    }
    return messageToShow
}

const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

app.get('/', (req, res) => {
    //   res.send('Hello World!')
    res.json({
        message: "Hello World!"
    })
})

app.post('/studentNames', (request, response) => {
    let incomingData = request.body.studentNames;
    console.log(incomingData);
    response.json({
        firstStudentName: incomingData[0]
    })
})

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})

// app = coded-up routes and server instance
// server = server that is running and visable by users

module.exports = {
    repeatMessage,
    app,
    server,
}