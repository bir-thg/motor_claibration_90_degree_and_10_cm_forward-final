input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    maqueen.writeLED(maqueen.Led.LedAll, maqueen.LedSwitch.LedOff)
    maqueen.writeLED(maqueen.Led.LedRight, maqueen.LedSwitch.LedOn)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 100)
    basic.pause(time_for_90_degree)
    maqueen.motorStop(maqueen.Motors.All)
    maqueen.writeLED(maqueen.Led.LedRight, maqueen.LedSwitch.LedOff)
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    basic.showIcon(IconNames.ArrowSouth)
    maqueen.writeLED(maqueen.Led.LedAll, maqueen.LedSwitch.LedOn)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    basic.pause(time_for_ten_centimeter)
    maqueen.motorStop(maqueen.Motors.All)
    maqueen.writeLED(maqueen.Led.LedAll, maqueen.LedSwitch.LedOff)
    basic.showIcon(IconNames.Heart)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    maqueen.writeLED(maqueen.Led.LedAll, maqueen.LedSwitch.LedOff)
    maqueen.writeLED(maqueen.Led.LedLeft, maqueen.LedSwitch.LedOn)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 100)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
    basic.pause(time_for_90_degree)
    maqueen.motorStop(maqueen.Motors.All)
    maqueen.writeLED(maqueen.Led.LedLeft, maqueen.LedSwitch.LedOff)
})
let time_for_90_degree = 0
let time_for_ten_centimeter = 0
time_for_ten_centimeter = 275
time_for_90_degree = time_for_ten_centimeter / 4.9 * 3.5
maqueen.motorStop(maqueen.Motors.All)
basic.showIcon(IconNames.Heart)
maqueen.writeLED(maqueen.Led.LedAll, maqueen.LedSwitch.LedOff)
