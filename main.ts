namespace SpriteKind {
    export const coin = SpriteKind.create()
    export const chest = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonPinkDepressed, function (sprite, location) {
    game.over(true)
    effects.confetti.startScreenEffect()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . f . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . f . . f . . . . . . . 
        . . . . . . f . . f . . . . . . 
        . . . f . . . f . . f . . . . . 
        . . . . f . . . f . f . . . . . 
        . . . . . f . . f . f . . . . . 
        . . . . . f . . f . f . . . . . 
        . . . . f . . . f . f . . . . . 
        . . . f . . . f . . f . . . . . 
        . . . . . . f . . f . . . . . . 
        . . . . . f . . f . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 50, 0)
})
info.onLifeZero(function () {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy(effects.ashes, 500)
    otherSprite.destroy(effects.ashes, 500)
    scene.cameraShake(3, 500)
    info.changeScoreBy(1)
    music.wawawawaa.play()
})
let projectile: Sprite = null
let mySprite: Sprite = null
game.splash("Contaminacion acustica")
mySprite = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
let scp2 = sprites.create(assets.image`myImage`, SpriteKind.Enemy)
let SCP3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 6 6 6 6 6 6 6 6 . . . . 
    . . . 6 9 6 6 6 6 6 6 c 6 . . . 
    . . 6 c 9 6 6 6 6 6 6 c c 6 . . 
    . 6 c c 9 9 9 9 9 9 6 c c 9 6 d 
    . 6 c 6 8 8 8 8 8 8 8 b c 9 6 6 
    . 6 6 8 b b 8 b b b 8 8 b 9 6 6 
    . 6 8 b b b 8 b b b b 8 6 6 6 6 
    . 8 8 6 6 6 8 6 6 6 6 6 8 6 6 6 
    . 8 8 8 8 8 8 f 8 8 8 f 8 6 d d 
    . 8 8 8 8 8 8 f 8 8 f 8 8 8 6 d 
    . 8 8 8 8 8 8 f f f 8 8 8 8 8 8 
    . 8 f f f f 8 8 8 8 f f f 8 8 8 
    . . f f f f f 8 8 f f f f f 8 . 
    . . . f f f . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let SCP4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 4 2 2 2 2 2 2 c 2 . . . 
    . . 2 c 4 2 2 2 2 2 2 c c 2 . . 
    . 2 c c 4 4 4 4 4 4 2 c c 4 2 d 
    . 2 c 2 e e e e e e e b c 4 2 2 
    . 2 2 e b b e b b b e e b 4 2 2 
    . 2 e b b b e b b b b e 2 2 2 2 
    . e e 2 2 2 e 2 2 2 2 2 e 2 2 2 
    . e e e e e e f e e e f e 2 d d 
    . e e e e e e f e e f e e e 2 d 
    . e e e e e e f f f e e e e e e 
    . e f f f f e e e e f f f e e e 
    . . f f f f f e e f f f f f e . 
    . . . f f f . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let SCP5 = sprites.create(img`
    . . . . . f f f f . . . . . 
    . . . f f 5 5 5 5 f f . . . 
    . . f 5 5 5 5 5 5 5 5 f . . 
    . f 5 5 5 5 5 5 5 5 5 5 f . 
    . f 5 5 5 d b b d 5 5 5 f . 
    f 5 5 5 b 4 4 4 4 b 5 5 5 f 
    f 5 5 c c 4 4 4 4 c c 5 5 f 
    f b b f b f 4 4 f b f b b f 
    f b b 4 1 f d d f 1 4 b b f 
    . f b f d d d d d d f b f . 
    . f e f e 4 4 4 4 e f e f . 
    . e 4 f 6 9 9 9 9 6 f 4 e . 
    . 4 d c 9 9 9 9 9 9 c d 4 . 
    . 4 f b 3 b 3 b 3 b b f 4 . 
    . . f f 3 b 3 b 3 3 f f . . 
    . . . . f f b b f f . . . . 
    `, SpriteKind.Enemy)
let chest1 = sprites.create(img`
    . . b b b b b b b b b b b b . . 
    . b e 4 4 4 4 4 4 4 4 4 4 e b . 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e e 4 4 4 4 4 4 4 4 4 4 e e b 
    b e e e e e e e e e e e e e e b 
    b e e e e e e e e e e e e e e b 
    b b b b b b b d d b b b b b b b 
    c b b b b b b c c b b b b b b c 
    c c c c c c b c c b c c c c c c 
    b e e e e e c b b c e e e e e b 
    b e e e e e e e e e e e e e e b 
    b c e e e e e e e e e e e e c b 
    b b b b b b b b b b b b b b b b 
    . b b . . . . . . . . . . b b . 
    `, SpriteKind.chest)
controller.moveSprite(mySprite, 100, 100)
scp2.startEffect(effects.spray)
SCP3.startEffect(effects.spray)
SCP4.startEffect(effects.spray)
SCP5.startEffect(effects.spray)
scp2.setPosition(67, 89)
SCP4.setPosition(345, 223)
SCP5.setPosition(320, 145)
scp2.follow(mySprite, 10)
SCP3.setPosition(139, 93)
SCP3.follow(mySprite, 5)
SCP4.follow(mySprite, 5)
SCP5.follow(mySprite, 5)
let chest2 = sprites.create(img`
    . . b b b b b b b b b b b b . . 
    . b e 4 4 4 4 4 4 4 4 4 4 e b . 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e e 4 4 4 4 4 4 4 4 4 4 e e b 
    b e e e e e e e e e e e e e e b 
    b e e e e e e e e e e e e e e b 
    b b b b b b b d d b b b b b b b 
    c b b b b b b c c b b b b b b c 
    c c c c c c b c c b c c c c c c 
    b e e e e e c b b c e e e e e b 
    b e e e e e e e e e e e e e e b 
    b c e e e e e e e e e e e e c b 
    b b b b b b b b b b b b b b b b 
    . b b . . . . . . . . . . b b . 
    `, SpriteKind.chest)
let chest3 = sprites.create(img`
    . . b b b b b b b b b b b b . . 
    . b e 4 4 4 4 4 4 4 4 4 4 e b . 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e e 4 4 4 4 4 4 4 4 4 4 e e b 
    b e e e e e e e e e e e e e e b 
    b e e e e e e e e e e e e e e b 
    b b b b b b b d d b b b b b b b 
    c b b b b b b c c b b b b b b c 
    c c c c c c b c c b c c c c c c 
    b e e e e e c b b c e e e e e b 
    b e e e e e e e e e e e e e e b 
    b c e e e e e e e e e e e e c b 
    b b b b b b b b b b b b b b b b 
    . b b . . . . . . . . . . b b . 
    `, SpriteKind.chest)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLarge)
scene.cameraFollowSprite(mySprite)
info.setScore(0)
info.setLife(3)
animation.runImageAnimation(
mySprite,
[img`
    ........................
    ........................
    ........................
    ........................
    ..........fffff.........
    ........ff11111f........
    .......fb111111bf.......
    ......fbd1111111f.......
    ......fddd111111df......
    ......fdddd11111df......
    ......fddddddd11df......
    ......fddddddd111f......
    ......fddddddcf11f......
    .......fbdddb1111bf.....
    ........fffcfdb1b1f.....
    .......ffffffffbfbf.....
    ....ff.fffffffffff......
    .....ffffffff...........
    .....ffffffb1b1f........
    ......ffffffbfbf........
    ........................
    ........................
    ........................
    ........................
    `,img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......fd1111111f.......
    ......fdd1111111df......
    ......fddd111111df......
    ......fdddddd111df......
    ......fbddddbfd1df......
    ......fcbbbdcfddbf......
    .......fcbb11111f.......
    ........fffff1b1f.......
    ........fb111cfbf.......
    ........ffb1b1ff........
    ......f.fffbfbf.........
    ......ffffffff..........
    .......fffff............
    ........................
    ........................
    ........................
    ........................
    `],
500,
true
)
tiles.placeOnRandomTile(chest1, assets.tile`myTile1`)
tiles.placeOnRandomTile(chest2, assets.tile`myTile1`)
tiles.placeOnRandomTile(chest3, assets.tile`myTile1`)
forever(function () {
    if (mySprite.overlapsWith(SCP3)) {
        mySprite.say("Oh no!", 2000)
        SCP3.destroy(effects.ashes, 1000)
        music.wawawawaa.play()
        info.changeLifeBy(-1)
        scene.cameraShake(8, 500)
    }
})
forever(function () {
    if (mySprite.overlapsWith(SCP4)) {
        mySprite.say("Oh no!", 2000)
        SCP4.destroy(effects.ashes, 1000)
        music.wawawawaa.play()
        info.changeLifeBy(-1)
        scene.cameraShake(8, 500)
    }
})
forever(function () {
    if (mySprite.overlapsWith(scp2)) {
        mySprite.say("Oh no!", 2000)
        scp2.destroy(effects.ashes, 1000)
        music.wawawawaa.play()
        info.changeLifeBy(-1)
        scene.cameraShake(8, 500)
    }
})
forever(function () {
    if (mySprite.overlapsWith(chest1)) {
        chest1.destroy(effects.ashes, 1000)
        game.splash("historia del ghost whatever blah blah blah")
        info.changeScoreBy(2)
        music.baDing.play()
    }
})
forever(function () {
    if (mySprite.overlapsWith(chest2)) {
        chest2.destroy(effects.ashes, 1000)
        game.splash("La contaminacion acustica puede causar:", "perturbación del sueño")
        info.changeScoreBy(2)
        music.baDing.play()
    }
})
forever(function () {
    if (mySprite.overlapsWith(chest3)) {
        chest3.destroy(effects.ashes, 1000)
        game.splash("La contaminacion acustica", "Afecta cientos de criaturas ")
        info.changeScoreBy(2)
        music.baDing.play()
    }
})
