input.onButtonPressed(Button.A, function () {
    Boolian = 1
    basic.showIcon(IconNames.Happy)
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.playTone(523, music.beat(BeatFraction.Quarter))
    while (Boolian == 1) {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 60)
        moveMotorZIP.setZipLedColor(2, Kitronik_Move_Motor.rgb(100, 0, 0))
        moveMotorZIP.setZipLedColor(3, Kitronik_Move_Motor.rgb(100, 0, 0))
        moveMotorZIP.show()
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        while (Boolian == 1) {
            if (Check >= 4 && Boolian == 1) {
                break;
            } else if (Kitronik_Move_Motor.measure() < 30) {
                list.unshift(1)
                Check += 1
            } else {
                list.unshift(0)
            }
            Check += 0 - list.pop()
        }
        moveMotorZIP.setZipLedColor(2, Kitronik_Move_Motor.rgb(255, 0, 0))
        moveMotorZIP.setZipLedColor(3, Kitronik_Move_Motor.rgb(255, 0, 0))
        moveMotorZIP.show()
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        moveMotorZIP.setZipLedColor(1, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Yellow))
        moveMotorZIP.show()
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 50)
        basic.pause(50)
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 40)
        basic.pause(50)
        moveMotorZIP.setZipLedColor(1, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.White))
        moveMotorZIP.show()
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 30)
        basic.pause(50)
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 20)
        basic.pause(50)
        moveMotorZIP.setZipLedColor(1, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Yellow))
        moveMotorZIP.show()
        Kitronik_Move_Motor.stop()
        Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorRight, Kitronik_Move_Motor.MotorDirection.Reverse, 50)
        basic.pause(500)
        moveMotorZIP.setZipLedColor(1, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.White))
        moveMotorZIP.show()
        list = [0, 0, 0, 0, 0]
        Check = 0
    }
})
input.onButtonPressed(Button.B, function () {
    Boolian = 0
    basic.showIcon(IconNames.No)
    music.playTone(523, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    list = [0, 0, 0, 0, 0]
    Check = 0
    Kitronik_Move_Motor.stop()
    basic.clearScreen()
})
let Boolian = 0
let Check = 0
let list: number[] = []
let moveMotorZIP: Kitronik_Move_Motor.MoveMotorZIP = null
moveMotorZIP = Kitronik_Move_Motor.createMoveMotorZIPLED(4)
list = [0, 0, 0, 0, 0]
Check = 0
Boolian = 0
Kitronik_Move_Motor.setUltrasonicUnits(Kitronik_Move_Motor.Units.Centimeters)
Kitronik_Move_Motor.turnRadius(Kitronik_Move_Motor.TurnRadii.Tight)
moveMotorZIP.clear()
moveMotorZIP.setZipLedColor(0, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.White))
moveMotorZIP.setZipLedColor(1, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.White))
moveMotorZIP.setZipLedColor(2, Kitronik_Move_Motor.rgb(100, 0, 0))
moveMotorZIP.setZipLedColor(3, Kitronik_Move_Motor.rgb(100, 0, 0))
moveMotorZIP.show()
