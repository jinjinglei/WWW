var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=Main;p=c.prototype;
    p.onAddToStage = function (event) {
        var self = this;
        //设置是否为开发模式
        egret.devMode = true; //-->script,脚本需要使用，请不要修改此行的注释
        RES.setMaxLoadingThread(100);
        //注入自定义的素材解析器
        egret.gui.mapClass("egret.gui.IAssetAdapter", mo.gui.AssetAdapter);
        //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
        egret.gui.Theme.load("resource/default.thm.json");
        egret.boot(function () {
            //初始化Resource资源加载库
            RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, self.onConfigComplete, self);
            RES.loadConfig("resource/default.res.json", "resource/ui2/");
            //初始化默认配置
            gc.init();
            //H5加载配置文件
            if (!egret.isNative) {
                var b = "resource/item_10034?" + Math.random();
                gc.lzcl = new gc.Lzcl();
                gc.lzcl.init();
                gc.lzcl.load(b);
            }
        });
    };
    /**
     * 配置文件加载完成,开始预加载preload资源组。
     * Loading of configuration file is complete, start to pre-load the preload resource group
     */
    p.onConfigComplete = function (event) {
        var self = this, RE = RES.ResourceEvent;
        RES.removeEventListener(RE.CONFIG_COMPLETE, self.onConfigComplete, self);
        self.createScene();
    };
    /**
     * 创建场景界面
     * Create scene interface
     */
    p.createScene = function () {
        var self = this;
        //ws.recordEvent("进入游戏（开始游戏画面）的人数", 1);
        self.parent.removeChild(self);
        mo.moduleMgr.runModule("IndexScene");
    };
    return Main;
})(egret.DisplayObjectContainer);
egret.registerClass(Main,"Main");
//# sourceMappingURL=Main.js.map