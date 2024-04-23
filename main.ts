sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    info.changeCountdownBy(4)
    sprites.destroy(otherSprite, effects.fire, 100)
})
let cherry: Sprite = null
game.splash("Welkom loser")
tiles.setCurrentTilemap(tilemap`Ontwerpen0`)
let mySprite = sprites.create(assets.image`princess`, SpriteKind.Player)
controller.moveSprite(mySprite, 50, 50)
scene.cameraFollowSprite(mySprite)
info.startCountdown(60)
info.setScore(0)
game.onUpdateInterval(5000, function () {
    cherry = sprites.create(img`
        . . . . . . . . . . . 6 6 6 6 6 
        . . . . . . . . . 6 6 7 7 7 7 8 
        . . . . . . 8 8 8 7 7 8 8 6 8 8 
        . . e e e e c 6 6 8 8 . 8 7 8 . 
        . e 2 5 4 2 e c 8 . . . 6 7 8 . 
        e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
        e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
        e 2 e e 2 2 2 2 e e e e c 6 8 . 
        c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
        . c 2 e e e 2 e 2 4 2 2 2 2 c . 
        . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
        . . . e c c e c 2 2 2 2 2 2 2 e 
        . . . . . . . c 2 e e 2 2 e 2 c 
        . . . . . . . c e e e e e e 2 c 
        . . . . . . . . c e 2 2 2 2 c . 
        . . . . . . . . . c c c c c . . 
        `, SpriteKind.Food)
    cherry.setPosition(randint(0, 160), randint(0, 160))
})
