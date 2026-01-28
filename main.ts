let distance = 0
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P3,
    DigitalPin.P15,
    PingUnit.Centimeters
    )
    if (distance < 10) {
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.pause(1000)
    } else {
        pins.servoWritePin(AnalogPin.P0, 90)
        basic.pause(1000)
    }
})
