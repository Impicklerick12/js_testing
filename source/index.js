function repeatMessage(message, repeatCount) {
    let messageToShow = "";
    for (let i = 0; i < repeatCount; i++) {
        messageToShow += message
    }
    return messageToShow
}

// console.log(repeatMessage("hello", 3));

module.exports = {
    repeatMessage
}