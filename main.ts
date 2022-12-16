radio.onReceivedString(function (receivedString) {
    if (receivedString == "Fire detected zone 4") {
        radio.sendString("Fire detected zone 4")
    }
})
let Fire = 0
let Gas = 0
pins.digitalWritePin(DigitalPin.P0, 1)
radio.setGroup(1)
basic.forever(function () {
    Gas = pins.analogReadPin(AnalogPin.P0)
    if (Gas == 0) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P5, 0)
    }
})
basic.forever(function () {
    if (Gas == 0) {
        basic.showString("SMOKE DETECTED")
    } else {
        basic.showString("SAFE")
    }
})
basic.forever(function () {
    if (Gas == 0) {
        radio.sendString("Smoke detected zone 4")
    }
    if (Fire < 100) {
        radio.sendString("Fire detected zone 4")
    }
})
basic.forever(function () {
    if (Gas == 0) {
        Fire = pins.digitalReadPin(DigitalPin.P1)
        if (Fire < 100) {
            basic.showString("Fire")
        } else {
            basic.showString("No Fire only smoke")
        }
    }
})
