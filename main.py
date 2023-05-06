def on_button_pressed_a():
    radio.send_string("fwd")
    images.arrow_image(ArrowNames.NORTH).show_image(0)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    input.calibrate_compass()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_received_string(receivedString):
    if receivedString == "png":
        basic.show_icon(IconNames.CONFUSED)
        for offset in range(2):
            led_l.clear()
            led_r.clear()
            for index in range(4):
                led_l.set_pixel_color(index * 2 + offset, neopixel.colors(NeoPixelColors.RED))
                led_r.set_pixel_color(index * 2 + offset, neopixel.colors(NeoPixelColors.RED))
            led_l.show()
            led_r.show()
            basic.pause(500)
        music.play_sound_effect(music.builtin_sound_effect(soundExpression.sad),
            SoundExpressionPlayMode.UNTIL_DONE)
        basic.pause(1000)
radio.on_received_string(on_received_string)

led_r: neopixel.Strip = None
led_l: neopixel.Strip = None
radio.set_group(1)
radio.set_transmit_power(7)
led_l = neopixel.create(DigitalPin.P1, 8, NeoPixelMode.RGB)
led_r = neopixel.create(DigitalPin.P2, 8, NeoPixelMode.RGB)
led_l.set_brightness(150)
led_r.set_brightness(150)
basic.show_icon(IconNames.YES)

def on_forever():
    basic.show_icon(IconNames.SQUARE)
basic.forever(on_forever)

def on_forever2():
    led_l.clear()
    led_r.clear()
    for index22 in range(8):
        if randint(1, 10) > 8:
            led_l.set_pixel_color(index22 + 1, neopixel.hsl(randint(0, 360), 100, 50))
            break
    for index3 in range(8):
        if randint(1, 10) > 8:
            led_r.set_pixel_color(index3 + 1, neopixel.hsl(randint(0, 360), 100, 50))
            break
    led_l.show()
    led_r.show()
    basic.pause(500 + randint(0, 1000))
basic.forever(on_forever2)

def on_every_interval():
    radio.send_value("hdg", input.compass_heading())
loops.every_interval(400, on_every_interval)
