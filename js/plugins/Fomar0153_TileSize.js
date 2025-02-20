//=============================================================================
// RPG Maker MZ - Tile Size
//=============================================================================

/*:
 * @target MZ
 * @plugindesc Allows you to use tiles of a different size in game.
 * @author Fomar0153
 *
 * @param Tile Size
 * @type integer
 * @desc Enter the width and height of your tiles.
 * @default 48
 *
 * @param Key String
 * @type string
 * @desc This should be on the editor version of your tilesets and not in the name of the originals.
 * @default !
 *
 * @help Fomar0153_TileSize.js
 *
 * Create a second version of your tileset that is scaled to have 48 pixel tiles. Give it the same name as your original tileset but with your key string included.
 * Then when you play the game it will use your original tileset.
 *
 */

var Fomar = Fomar || {};
Fomar.TileSize = {};

Fomar.TileSize.parameters = PluginManager.parameters('Fomar0153_TileSize');

Fomar.TileSize.key = Fomar.TileSize.parameters["Key String"] || "";
Fomar.TileSize.tileSize = parseInt(Fomar.TileSize.parameters["Tile Size"] || 48);

(() => {

  Game_Map.prototype.tileWidth = function() {
      return Fomar.TileSize.tileSize;
  };

  Game_Map.prototype.tileHeight = function() {
      return Fomar.TileSize.tileSize;
  };

  ImageManager.loadTileset = function(filename) {
      return this.loadBitmap('img/tilesets/', filename.replace(Fomar.TileSize.key, ""));
  };

 // I'm pretty sure they just forgot to define these in MZ, the next two code blocks are lifted straight from MV
  Object.defineProperty(Tilemap.prototype, 'tileWidth', {
      get: function() {
          return this._tileWidth;
      },
      set: function(value) {
          if (this._tileWidth !== value) {
              this._tileWidth = value;
              this._createLayers();
          }
      }
  });

  Object.defineProperty(Tilemap.prototype, 'tileHeight', {
      get: function() {
          return this._tileHeight;
      },
      set: function(value) {
          if (this._tileHeight !== value) {
              this._tileHeight = value;
              this._createLayers();
          }
      }
  });

})();
