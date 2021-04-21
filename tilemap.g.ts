// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level3":
            case "level3":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`10001000030303030303030402020a020103030f0d070808080807050b02020b09070705080c0a0b020209070303030307070304020a0b010303070708080808080807050b020b09070807050a020a02020b09050b0a0209050a090703030303040209050a020a09050206080707080705020608020a0b09050a020a09050a09050b020b0b0b0209050b020209050b09070303030103030707030303070502060808070f090708080808080807050b0b0a02080809050a0202020b020905020a0202020209050b020a0b020a09050b0a020a0b0a0907030303030303070703030303030e0608080807070708080808080808080e020b0b0b060f0c0b0202020b0a020b0b`, img`
. . . . . . . . 2 . . 2 . . . . 
. . . . . . . . 2 2 2 2 . . . . 
. . 2 2 2 2 . . . . . . . . 2 2 
2 2 2 . . . . . . . . . . . . . 
. . 2 . . . . . 2 2 2 2 2 2 . . 
. . 2 . . 2 . . . . . . . 2 . . 
. . 2 . . 2 . . . . . . . 2 . . 
. . 2 . . 2 2 2 . . 2 . . 2 2 2 
2 2 2 . . 2 2 2 . . 2 . . . . . 
. . . . . . . . . . 2 . . . . . 
. . . . . . . . . . 2 2 2 2 . . 
. . 2 2 2 2 2 2 . . 2 . . 2 2 2 
. . 2 2 2 2 2 2 . . 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 2 . . . 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tilePath1,sprites.castle.tileGrass2,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath6,sprites.castle.tilePath7,sprites.castle.tilePath5,sprites.castle.tilePath8,sprites.castle.tilePath4,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.castle.tilePath9,sprites.dungeon.stairLarge,sprites.dungeon.buttonPinkDepressed,myTiles.tile2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
