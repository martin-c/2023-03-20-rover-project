input.onButtonPressed(Button.A, function () {
    radio.sendString("fwd")
    images.arrowImage(ArrowNames.North).showImage(0)
})
input.onButtonPressed(Button.AB, function () {
    input.calibrateCompass()
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "png") {
        obstacle = 5
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.UntilDone)
    }
})
let obstacle = 0
radio.setGroup(1)
radio.setTransmitPower(7)
obstacle = 0
let led_l = neopixel.create(DigitalPin.P1, 8, NeoPixelMode.RGB)
let led_r = neopixel.create(DigitalPin.P2, 8, NeoPixelMode.RGB)
led_l.setBrightness(150)
led_r.setBrightness(150)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    if (obstacle) {
        for (let offset = 0; offset <= 1; offset++) {
            led_l.clear()
            led_r.clear()
            for (let index = 0; index <= 3; index++) {
                led_l.setPixelColor(index * 2 + offset, neopixel.colors(NeoPixelColors.Red))
                led_r.setPixelColor(index * 2 + offset, neopixel.colors(NeoPixelColors.Red))
            }
            led_l.show()
            led_r.show()
            basic.pause(500)
        }
    } else {
        led_l.clear()
        led_r.clear()
        for (let index22 = 0; index22 <= 7; index22++) {
            if (randint(1, 10) > 8) {
                led_l.setPixelColor(index22 + 1, neopixel.hsl(randint(0, 360), 100, 50))
                break;
            }
        }
        for (let index3 = 0; index3 <= 7; index3++) {
            if (randint(1, 10) > 8) {
                led_r.setPixelColor(index3 + 1, neopixel.hsl(randint(0, 360), 100, 50))
                break;
            }
        }
        led_l.show()
        led_r.show()
        basic.pause(500 + randint(0, 1000))
    }
})
basic.forever(function () {
    if (obstacle) {
        basic.showIcon(IconNames.Confused)
        obstacle += -1
    } else {
        basic.showIcon(IconNames.Triangle)
    }
})
loops.everyInterval(400, function () {
    radio.sendValue("hdg", input.compassHeading())
})
