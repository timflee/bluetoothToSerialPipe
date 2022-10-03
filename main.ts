radio.onReceivedNumber(function (receivedNumber) {
    received()
    serial.writeNumber(receivedNumber)
})
function received () {
    music.playTone(262, music.beat(BeatFraction.Sixteenth))
}
radio.onReceivedString(function (receivedString) {
    received()
    serial.writeLine(receivedString)
})
radio.onReceivedValue(function (name, value) {
    received()
    serial.writeValue(name, value)
})
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    radio.sendString(serial.readLine())
    sent()
})
function sent () {
    music.playTone(523, music.beat(BeatFraction.Sixteenth))
}
radio.setGroup(1)
basic.showNumber(1)
music.setVolume(25)
received()
basic.forever(function () {
	
})
