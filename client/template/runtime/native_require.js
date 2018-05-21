
var game_file_list = [
    //以下为自动修改，请勿修改
    //----auto game_file_list start----
	"libs/modules/egret/egret.js",
	"libs/modules/egret/egret.native.js",
	"libs/modules/game/game.js",
	"libs/modules/game/game.native.js",
	"libs/modules/gui/gui.js",
	"libs/modules/skins/skins.js",
	"libs/modules/res/res.js",
	"libs/modules/tween/tween.js",
	"libs/modules/socket/socket.js",
	"libs/modules/lib/lib.js",
	"libs/modules/boot/boot.js",
	"libs/modules/3rdParty/3rdParty.js",
	"libs/modules/action/action.js",
	"libs/modules/mo-base/mo-base.js",
	"libs/modules/tm/tm.js",
	"libs/modules/mo-action/mo-action.js",
	"libs/modules/mo-gui/mo-gui.js",
	"libs/modules/mo-net/mo-net.js",
	"libs/modules/mo-channel/mo-channel.js",
	"libs/modules/nest/nest.js",
	"libs/modules/mo-guide/mo-guide.js",
	"libs/modules/jszip/jszip.js",
	"libs/modules/dcagent/dcagent.js",
	"libs/modules/g-base/g-base.js",
	"libs/modules/g-channel/g-channel.js",
	"libs/modules/g-index/g-index.js",
	"libs/modules/g-smelting/g-smelting.js",
	"libs/modules/g-bag/g-bag.js",
	"libs/modules/g-task/g-task.js",
	"libs/modules/g-rank/g-rank.js",
	"libs/modules/g-treasure/g-treasure.js",
	"libs/modules/g-activity/g-activity.js",
	"libs/modules/g-mail/g-mail.js",
	"libs/modules/g-mid/g-mid.js",
	"libs/modules/g-shop/g-shop.js",
	"libs/modules/g-copy/g-copy.js",
	"libs/modules/g-worldboss/g-worldboss.js",
	"libs/modules/g-guild/g-guild.js",
	"libs/modules/g-arena/g-arena.js",
	"libs/modules/g-chuanchen/g-chuanchen.js",
	"libs/modules/g-defarena/g-defarena.js",
	"libs/modules/g-coffers/g-coffers.js",
	"libs/modules/g-medal/g-medal.js",
	"libs/modules/g-home/g-home.js",
	"libs/modules/g-fight/g-fight.js",
	"libs/modules/g-forge/g-forge.js",
	"libs/modules/g-role/g-role.js",
	"libs/modules/g-guide/g-guide.js",
	"libs/modules/g-red/g-red.js",
	"libs/modules/g-defArena/g-defArena.js",
	"libs/modules/g-king/g-king.js",
	"libs/modules/g-lotus/g-lotus.js",
	"libs/modules/g-rebirth/g-rebirth.js",
	"libs/modules/g-custom/g-custom.js",
	"libs/modules/g-heart/g-heart.js",
	"libs/modules/g-guildCopy/g-guildCopy.js",
	"libs/modules/g-guildwar/g-guildwar.js",
	"libs/modules/g-tower/g-tower.js",
	"libs/modules/g-practice/g-practice.js",
	"libs/modules/g-gift/g-gift.js",
	"libs/modules/g-villian/g-villian.js",
	"bin-debug/Main.js?a=333",
	//----auto game_file_list end----
];

var window = {};

egret_native.setSearchPaths([""]);

egret_native.requireFiles = function () {
    for (var key in game_file_list) {
        var src = game_file_list[key];
        require(src);
    }
};

egret_native.egretInit = function () {
    egret_native.requireFiles();
    egret.TextField.default_fontFamily = "/system/fonts/DroidSansFallback.ttf";
    //egret.dom为空实现
    egret.dom = {};
    egret.dom.drawAsCanvas = function () {
    };
};

egret_native.egretStart = function () {
    var option = {
        //以下为自动修改，请勿修改
        //----auto option start----
		entryClassName: "Main",
		frameRate: 30,
		scaleMode: "showAll",
		contentWidth: 480,
		contentHeight: 800,
		showPaintRect: false,
		showFPS: false,
		fpsStyles: "x:0,y:0,size:30,textColor:0x00c200,bgAlpha:0.9",
		showLog: false,
		logFilter: "",
		maxTouches: 2,
		textureScaleFactor: 1
		//----auto option end----
    };

    egret.native.NativePlayer.option = option;
    egret.runEgret();
    egret_native.Label.createLabel(egret.TextField.default_fontFamily, 20, "", 0);
    egret_native.EGTView.preSetOffScreenBufferEnable(true);
};