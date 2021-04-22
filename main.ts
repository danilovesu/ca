namespace SpriteKind {
    export const coin = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    info.changeScoreBy(1)
    music.baDing.play()
    game.splash("historia del ghost whatever blah blah blah")
})
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
    game.over(false, effects.blizzard)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy(effects.ashes, 500)
    otherSprite.destroy(effects.ashes, 500)
    scene.cameraShake(3, 500)
})
let projectile: Sprite = null
let mySprite: Sprite = null
game.splash("dan moment")
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
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . f f 1 f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f f 1 f f . . . . f . 
    . . . . f f f f f f f . . . f . 
    . . . f . f f 1 f f . f . f . . 
    . . f . . f f f f f . . f . . . 
    . . . f . . f . f . . . . . . . 
    . . . . . f . . . f . . . . . . 
    . . . . f . . . . . f . . . . . 
    . . . . . f . . . f . . . . . . 
    . . . . f f . . . f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let SCP4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f f f f . f f f f . . . 
    . . . . f f 1 f f f f f f . . . 
    . . . f f f f f 1 f f f f . . . 
    . . . . f f f f f f f 1 f . f f 
    . . . . f f f 1 f f 1 f f f f . 
    f f f f f f f f 1 f f f f f . . 
    f . . . f f 1 f f f f 1 f . f . 
    . f . . f f f 1 f f f f f . . . 
    . . . . f f f f f f f f f . . . 
    . . . . f f f f f 1 f f f . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . . f . . . . f . . . . 
    . . . . . . f f . . f f . . . . 
    `, SpriteKind.Enemy)
controller.moveSprite(mySprite, 100, 100)
scp2.setPosition(67, 89)
SCP4.setPosition(158, 116)
scp2.follow(mySprite, 10)
SCP3.setPosition(139, 93)
SCP3.follow(mySprite, 5)
SCP4.follow(mySprite, 5)
scene.setBackgroundColor(0)
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
    if (mySprite.overlapsWith(scp2)) {
        mySprite.say("Oh no!", 2000)
        scp2.destroy(effects.ashes, 1000)
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
