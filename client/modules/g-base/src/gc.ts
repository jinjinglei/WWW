/**
 * Created by lihex on 9/6/15.
 */
module gc {
    export var log;
    export var debug;
    export var info;
    export var warn;
    export var error;

    logger.initLogger(gc, "gc");
    var _specialItemIds;

    export var residentScene;

    export function isSpecialItem(itemId):boolean {
        if (!_specialItemIds) {
            _specialItemIds = [];
            var spItemIdKey = gc.c_prop.spItemIdKey;
            for (var key in spItemIdKey) {
                _specialItemIds.push(spItemIdKey[key]);
            }
        }
        return _specialItemIds.indexOf(parseInt(itemId)) >= 0;
    }

    export function subArr(arr, starIdx, endIdx?){
        var sub = [];
        for(var i = starIdx, li = endIdx? endIdx : arr.length; i < li; i++){
            sub.push(arr[i]);
        }
        return sub;
    }

    export function init(){
        //这些资源不会释放
        var globals = ['ico_loading','panel_top_notice', 's9g_failinfo', 'btn_0_0_0', 'btn_close_0'];
        //入口图标
        var midEntryIcons = ['ico_first_recharge', 'ico_treasure', 'ico_five_day', 'ico_dinzhisfg', 'ico_zanyingrukou'];
        var bottomEntryIcons = ['ico_heirloom', 'ico_mail', 'ico_phone', 'ico_desktop_share', 'ico_desktop_follow'
        , 'ico_xiongdi', 'ico_desktop'];
        globals = globals.concat(midEntryIcons);
        globals = globals.concat(bottomEntryIcons);
        mo.R.setGlobal.apply(mo.R, globals);
        //声音配置初始化
        //ws.audio.init();
        //重置网络
        gc.net.reset();
        // 转菊花设置
        mo.setWaitingView(g_base.BaseJuHua.getInstance());

        //初始化dataeye
        //ws.initRecharge("Local");  //todo 临时 game_version

        //注册动画数据解析器
        mo.registerDcParser('@mc', function(oldData, key){
            var framesInfo = oldData[1][1];
            var resKey = 0;
            var frames = [];
            var res = {};
            for(var i = 0, li = framesInfo.length; i < li; i++, resKey++){
                var frameInfo = framesInfo[i];
                var resCfg = subArr(frameInfo, 0, 4);
                var frameCfg = subArr(frameInfo, 4);
                frames.push({
                    'res' : resKey.toString(),
                    'x' : frameCfg[0],
                    'y' : frameCfg[1],
                    'duration' : frameCfg[2]
                });
                res[resKey.toString()] = {
                    'x' : resCfg[0],
                    'y' : resCfg[1],
                    'w' : resCfg[2],
                    'h' : resCfg[3],
                }
            }

            var result:any = {};
            var mc:any = result.mc = {};
            var mcInfo:any = mc[key] = {};

            mcInfo.frameRate = oldData[1][0];// 帧率
            mcInfo.frames = frames;
            result.res = res;

            return result;
        });
    }


    export function initData(cb, target){
        mo.playWaiting();
        //先同步服务器时间
        mo.request4Http(gc.iface.c_net_getServerDate, function(serverDate){
            mo.debug("serverDate--->", serverDate);
            Date.setStandard(serverDate);
            mo.stopWaiting();

            if(cb) cb.call(target);
        });
    }

    /**
     * 获取今日次数的公用方法。
     * @param refreshTime
     * @param cb
     * @param hours
     * @returns {*}
     */
    export function getTodayCount(refreshTime:Date, cb:Function, hours?:number) :number{
        return gc.handleTodayRefresh(refreshTime, cb, hours)
    }

    /**
     * 处理今日刷新的公用方法。
     * @param refreshTime
     * @param cb
     * @param hours
     * @returns {*}
     */
    export function handleTodayRefresh(refreshTime:Date, cb:Function, hours?:number) :number{
        var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
        hours = hours == null ? c_game[gc.id_c_game.refreshTime][0] : hours;
        var now = Date.newDate();
        if (!refreshTime) refreshTime = now.clone();
        else if (typeof refreshTime == "string") refreshTime = Date.newDate(refreshTime);
        var needToRefresh = !refreshTime.isAfter(now);
        if (needToRefresh) {
            var ft = Date.today();
            ft.addHours(hours);
            if (!ft.isAfter(now)) ft.addDays(1);
        }
        return cb(needToRefresh, ft);
    }

    /*
    * Lazy Cfg Loader
    * H5环境延迟加载配置
    * */
    export class Lzcl{
        loading:boolean;
        loaded:boolean;
        playWaiting:boolean;
        cb;
        ctx;

        init(){
            //提前设置登陆按钮特效,等配置文件加载好后会覆盖
            mo._dc["mc"]={29:["@mc",[24,[[330,492,327,240,-165,-152],[1,494,327,239,-165,-154],[1,251,327,241,-165,-157],[688,1,325,243,-164,-160],[342,247,343,243,-179,-158],[342,1,344,244,-179,-158],[1,1,339,248,-176,-160],[687,247,328,243,-165,-155]]]]};
        }

        load(url){
            var self = this;
            if(self.loading) return;
            if(self.loaded) return;
            var b = url;
            var urlloader = new egret.URLLoader;
            var a = new egret.URLRequest;
            a.url = b;
            urlloader.dataFormat = egret.URLLoaderDataFormat.BINARY;
            urlloader.load(a);
            self.loading = true;
            urlloader.addEventListener(egret.IOErrorEvent.IO_ERROR, function(){
                mo.showMsg("E:"+egret.IOErrorEvent.IO_ERROR);
                self.loading = false;
                self.onResult(false);
            }, self);
            urlloader.addEventListener(egret.Event.COMPLETE, function(){
                self.loading = false;
                self.loaded = true;
                var m_zip = new JSZip(urlloader.data);
                //通用配置解压
                var cfgs = m_zip.file(/^[tc].*/);
                for(var i = 0, li = cfgs.length; i < li; i++){
                    var cfg = cfgs[i];
                    var cfgName = mo.STR.format("shared/%s", cfg.name);
                    res._jsData[cfgName] = JSON.parse(cfg.asText());
                }
                //设置消息数据
                var data = res._jsData[gc.cfg_c_msgCode];
                mo.setMsgData(data);
                //特殊数据配置
                var dcCfgNames = [
                    "dc_mc"//动画配置
                ];
                var suffix = ".json";
                mo._dc["mc"]= JSON.parse(m_zip.file(dcCfgNames[0]+ suffix).asText());

                self.onResult(true);
            }, self);
        }

        onResult(succ){
            var self = this;
            if(self.playWaiting){
                mo.stopWaiting();
                self.playWaiting = false;
            }
            if(self.cb) self.cb.call(self.ctx, succ);
        }

        waitingResult(cb, ctx?){
            var self = this;
            if(self.loaded){
                cb.call(ctx, true);
                return;
            }
            if(self.loading){
                mo.playWaiting();
                self.playWaiting = true;
                self.cb = cb;
                self.ctx = ctx;
            }
        }

    }

    export var lzcl:Lzcl;

}
