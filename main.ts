input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    Chance = 3
    basic.showNumber(Chance)
})
let Chance = 0
basic.showIcon(IconNames.Happy)
