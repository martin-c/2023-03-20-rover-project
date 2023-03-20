input.onButtonPressed(Button.A, function () {
    radio.sendString("fwd")
})
input.onButtonPressed(Button.AB, function () {
    input.calibrateCompass()
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "ping") {
        basic.showIcon(IconNames.No)
    }
})
radio.setGroup(1)
radio.setTransmitPower(7)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
	
})
loops.everyInterval(200, function () {
    radio.sendValue("hdg", input.compassHeading())
})
