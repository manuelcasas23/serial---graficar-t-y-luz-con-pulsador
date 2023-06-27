input.onButtonPressed(Button.A, function () {
    pulsador_A = !(pulsador_A)
})
let pulsador_A = false
pulsador_A = true
basic.forever(function () {
    if (pulsador_A) {
        serial.writeLine("T")
        serial.writeLine("" + (input.temperature()))
        basic.showNumber(input.temperature())
        basic.pause(1000)
    } else {
        serial.writeLine("L")
        serial.writeLine("" + (input.lightLevel()))
        basic.showNumber(input.lightLevel())
        basic.pause(1000)
    }
})
