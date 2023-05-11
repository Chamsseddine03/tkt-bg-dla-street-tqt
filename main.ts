input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        music.playTone(392, music.beat(BeatFraction.Quarter))
        music.playTone(392, music.beat(BeatFraction.Quarter))
        music.playTone(392, music.beat(BeatFraction.Quarter))
        basic.pause(100)
        music.playTone(587, music.beat(BeatFraction.Quarter))
        music.playTone(587, music.beat(BeatFraction.Quarter))
        music.playTone(587, music.beat(BeatFraction.Quarter))
        basic.pause(100)
    }
})
