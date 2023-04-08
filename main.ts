input.onButtonPressed(Button.A, function () {
    demoLoop = 0
    demoRange = demoStrip.range(LEDposition, 1)
    range.clear()
    if (LEDposition == 0) {
        range = strip.range(LEDposition, 2)
        range.showColor(neopixel.colors(NeoPixelColors.Green))
        range.show()
    }
    if (LEDposition == 2) {
        range = strip.range(LEDposition, 2)
        range.showColor(neopixel.colors(NeoPixelColors.Yellow))
        range.show()
    }
    if (LEDposition == 4) {
        range = strip.range(LEDposition, 2)
        range.showColor(neopixel.colors(NeoPixelColors.Blue))
        range.show()
    }
    if (LEDposition == 6) {
        range = strip.range(LEDposition, 2)
        range.showColor(neopixel.colors(NeoPixelColors.Purple))
        range.show()
    }
    if (LEDposition == 8) {
        LEDposition = 0
        range = strip.range(LEDposition, 2)
        range.showColor(neopixel.colors(NeoPixelColors.Green))
        range.show()
    }
    LEDposition += 2
})
input.onButtonPressed(Button.B, function () {
    LEDposition = 0
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    strip.show()
    LEDposition = 0
    demoLoop = 1
    while (demoLoop == 1) {
        demoRange = demoStrip.range(LEDposition, 1)
        demoRange.showColor(neopixel.colors(NeoPixelColors.Red))
        for (let index = 0; index < 8; index++) {
            demoStrip.shift(1)
            basic.pause(200)
            demoStrip.show()
        }
        demoRange.showColor(neopixel.colors(NeoPixelColors.Blue))
        for (let index = 0; index < 8; index++) {
            demoStrip.shift(1)
            basic.pause(200)
            demoStrip.show()
        }
    }
    LEDposition = 0
})
let demoLoop = 0
let range: neopixel.Strip = null
let demoRange: neopixel.Strip = null
let LEDposition = 0
let demoStrip: neopixel.Strip = null
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
demoStrip = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
LEDposition = 0
demoRange = demoStrip.range(0, 8)
range = strip.range(LEDposition, 2)
basic.forever(function () {
	
})
