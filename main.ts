let score = 0
let timer = 0
basic.forever(function () {
    basic.showNumber(score)
    while (timer <= 60) {
        if (input.pinIsPressed(TouchPin.P0)) {
            score += 1
            basic.showNumber(score)
        }
        if (timer == 60) {
            music.play(music.tonePlayable(784, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        } else if (timer >= 57) {
            music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        }
        basic.pause(1000)
        timer += 1
    }
})
