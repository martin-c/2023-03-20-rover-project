input.onButtonPressed(Button.A, function () {
    radio.sendString("fwd")
    images.arrowImage(ArrowNames.North).showImage(0)
})
input.onButtonPressed(Button.AB, function () {
    input.calibrateCompass()
})
radio.setGroup(1)
radio.setTransmitPower(7)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    basic.showIcon(IconNames.Square)
})
loops.everyInterval(200, function () {
    radio.sendValue("hdg", input.compassHeading())
})
