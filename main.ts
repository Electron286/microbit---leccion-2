input.onPinPressed(TouchPin.P0, function () {
    basic.showNumber(0)
    basic.pause(1000)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P2, function () {
    for (let index = 0; index < 2; index++) {
        basic.showNumber(2)
        basic.pause(1000)
        basic.clearScreen()
        basic.pause(1000)
    }
    basic.showNumber(2)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showNumber(1)
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(1000)
    basic.showNumber(1)
})
