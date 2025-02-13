basic.forever(function () {
    if (pins.analogReadPin(AnalogReadWritePin.P0) > 500) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
