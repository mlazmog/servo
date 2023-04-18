input.onButtonPressed(Button.A, function () {
    si_o_no = 0
    Posición += 10
    servos.P0.setAngle(Posición)
})
input.onButtonPressed(Button.B, function () {
    si_o_no = 0
    Posición += -10
    servos.P0.setAngle(Posición)
})
input.onButtonPressed(Button.AB, function () {
    si_o_no = 1
    while (si_o_no == 1) {
        if (movimineto == 1) {
            Posición += 5
            basic.pause(100)
            servos.P0.setAngle(Posición)
        } else if (movimineto == 0) {
            Posición += -5
            basic.pause(100)
            servos.P0.setAngle(Posición)
        }
    }
})
let movimineto = 0
let Posición = 0
let si_o_no = 0
servos.P0.setRange(0, 180)
servos.P0.setAngle(0)
basic.forever(function () {
    if (Posición == 180) {
        movimineto = 0
    } else if (Posición == 0) {
        movimineto = 1
    }
})
