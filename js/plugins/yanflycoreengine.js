/*:
 * @target MZ
 * @plugindesc Core Engine conversion from Yanfly's VX Ace script to MZ.
 * @author Converted by ChatGPT
 * @help
 * This plugin provides the core engine features from Yanfly's VX Ace script
 * in RPG Maker MZ, including bug fixes and GUI enhancements.
 */

var Imported = Imported || {};
Imported["YEA-CoreEngine"] = true;

var YEA = YEA || {};
YEA.CoreEngine = YEA.CoreEngine || {};

(() => {
    // Screen Resolution Settings
    const RESIZE_WIDTH = 816;
    const RESIZE_HEIGHT = 624;
    SceneManager._screenWidth = RESIZE_WIDTH;
    SceneManager._screenHeight = RESIZE_HEIGHT;
    SceneManager._boxWidth = RESIZE_WIDTH;
    SceneManager._boxHeight = RESIZE_HEIGHT;

    // Adjust Animation Speed
    const ANIMATION_RATE = 4; // Default: 4 (15 FPS). Lower is faster.

    // Numeric Digit Grouping
    Number.prototype.group = function() {
        return this.toLocaleString();
    };

    // Font Settings
    const FONT_SETTINGS = {
        name: ["VCR OSD Mono", "Impact", "Arial", "Courier"],
        size: 17,
        bold: false,
        italic: false,
        shadow: false,
        outline: true,
        color: "#FFFFFF",
        outlineColor: "#00000080"
    };
    
    Bitmap.prototype.applyFontSettings = function() {
        this.fontFace = FONT_SETTINGS.name.find(font => Graphics.isFontLoaded(font)) || "Arial";
        this.fontSize = FONT_SETTINGS.size;
        this.fontBold = FONT_SETTINGS.bold;
        this.fontItalic = FONT_SETTINGS.italic;
        this.fontShadow = FONT_SETTINGS.shadow;
        this.fontOutline = FONT_SETTINGS.outline;
    };

    // GUI Improvements (Gauge Appearance)
    Window_Base.prototype.drawGauge = function(x, y, width, rate, color1, color2) {
        const height = 12; // Gauge Height
        this.contents.fillRect(x, y, width, height, this.gaugeBackColor());
        this.contents.gradientFillRect(x, y, width * rate, height, color1, color2);
    };

    // Override Scene_Map post-transfer viewport update
    const _Scene_Map_postTransfer = Scene_Map.prototype.performTransfer;
    Scene_Map.prototype.performTransfer = function() {
        _Scene_Map_postTransfer.call(this);
        this._spriteset.updateViewport();
    };

    // Update Viewport Sizes
    Spriteset_Map.prototype.updateViewport = function() {
        this._baseSprite.setFrame(0, 0, Graphics.width, Graphics.height);
    };

    // Override BattleManager to fix forced actions not clearing queue
    const _BattleManager_processForcedAction = BattleManager.processForcedAction;
    BattleManager.processForcedAction = function() {
        while (this._actionForcedBattlers.length > 0) {
            const subject = this._actionForcedBattlers.shift();
            if (subject) {
                this.processTurn(subject);
            }
        }
        _BattleManager_processForcedAction.call(this);
    };

    console.log("Yanfly Core Engine (MZ) loaded successfully.");
})();
