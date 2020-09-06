input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.playTone(523, music.beat(BeatFraction.Quarter))
    Kitronik_Move_Motor.setUltrasonicUnits(Kitronik_Move_Motor.Units.Centimeters)
    Kitronik_Move_Motor.turnRadius(Kitronik_Move_Motor.TurnRadii.Tight)
    while (!(input.buttonIsPressed(Button.B))) {
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
        while (true) {
            if (Check >= 3) {
                break;
            } else if (Kitronik_Move_Motor.measure() < 30) {
                list.push(1)
                Check += 0 - list.shift()
            } else {
                list.push(0)
                Check += 0 - list.shift()
            }
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
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 55)
        basic.pause(50)
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 50)
        basic.pause(50)
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 45)
        basic.pause(50)
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 40)
        basic.pause(50)
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 35)
        basic.pause(50)
        moveMotorZIP.setZipLedColor(1, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.White))
        moveMotorZIP.show()
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 30)
        basic.pause(50)
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 25)
        basic.pause(50)
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 20)
        basic.pause(50)
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 15)
        basic.pause(50)
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 10)
        basic.pause(50)
        moveMotorZIP.setZipLedColor(1, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Yellow))
        moveMotorZIP.show()
        Kitronik_Move_Motor.stop()
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Right, 30)
        basic.pause(350)
        moveMotorZIP.setZipLedColor(1, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.White))
        moveMotorZIP.show()
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    music.playTone(523, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    Kitronik_Move_Motor.stop()
    moveMotorZIP.setZipLedColor(0, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Orange))
    moveMotorZIP.setZipLedColor(1, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Orange))
    moveMotorZIP.setZipLedColor(2, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Orange))
    moveMotorZIP.setZipLedColor(3, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Orange))
    moveMotorZIP.show()
    basic.clearScreen()
})
let Check = 0
let list: number[] = []
let moveMotorZIP: Kitronik_Move_Motor.MoveMotorZIP = null
moveMotorZIP = Kitronik_Move_Motor.createMoveMotorZIPLED(4)
list = [0, 0, 0, 0, 0]
Check = 0
moveMotorZIP.clear()
moveMotorZIP.setZipLedColor(0, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.White))
moveMotorZIP.setZipLedColor(1, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.White))
moveMotorZIP.setZipLedColor(2, Kitronik_Move_Motor.rgb(100, 0, 0))
moveMotorZIP.setZipLedColor(3, Kitronik_Move_Motor.rgb(100, 0, 0))
moveMotorZIP.show()
