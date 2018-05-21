/**
 * Created by lihex on 6/30/15.
 */
module uiHelper{

    export var resIco = {};
    resIco[gc.c_prop.spItemIdKey.gold] = "ico_gold";
    resIco[gc.c_prop.spItemIdKey.honor] = "ico_hornor";
    resIco[gc.c_prop.spItemIdKey.diamond] = "ico_yuanbao";
    resIco[gc.c_prop.spItemIdKey.vitality] = "ico_active";

    //设置资源和数量
    export function setResGrp(group:egret.gui.Group, itemId, count){
        var icon:egret.gui.UIAsset = <egret.gui.UIAsset>group.getChildByName('icon');
        var num:egret.gui.IDisplayText = <any>group.getChildByName('num');
        var source = resIco[itemId];
        var scale = source? 1 : 0.5;
        source = source? source : resHelper.getItemIconPath(itemId);
        icon.source = source;
        if(scale != icon.scaleX){
            icon.scaleX = scale;
            icon.scaleY = scale;
        }
        num.text = count + "";
    }

    //设置vip等级,用户昵称,等级
    export function setVipGrp(group:egret.gui.Group, name:string, lvl, vip?){
        if(vip!=null){
            var grp_vip:egret.gui.Group = <egret.gui.Group>group.getChildByName('grp_vip');
            var isVip = parseInt(vip) > 0;
            if(grp_vip && isVip){
                grp_vip.includeInLayout = isVip;
                grp_vip.visible = isVip;
                var label_vipLvl:egret.gui.IDisplayText = <any>grp_vip.getChildByName('label_vipLvl');
                label_vipLvl.text = vip + "";
            }
        }
        var label_name:egret.gui.IDisplayText = <any>group.getChildByName('label_name');
        label_name.text = name;
        var label_level:egret.gui.IDisplayText = <any>group.getChildByName('label_level');
        label_level.text = lvl +"";
    }

    /**
     * 设置物品列表
     * @param group
     * @param items 数组,[{itemId:xxx,count:xxx},{itemId:xxx,count:xxx}, ...]
     */
    export function setItemsGrp(group:egret.gui.Group, items:Array<any>){
        //重置物品列表:隐藏ico_item组件
        uiHelper.resetItemsGrp(group, "ico_item");
        var item, ico_item;
        for(var i = 0, li = items.length; i < li; i++){
            item = items[i]; //{itemId:xxx, count:xxx}
            ico_item = group.getChildByName('ico_item' + i);
            if(ico_item){
                ico_item.visible = true;
                ico_item.includeInLayout = true;
                ico_item.setData(item);
            }
        }
    }
    //grp中的元素重置
    export function resetItemsGrp(group:egret.gui.Group, prefix:string){
        var i = 0, ico_item;
        ico_item = group.getChildByName(prefix + i);
        while(ico_item){
            ico_item.visible = false;
            ico_item.includeInLayout = false;
            ++i;
            ico_item = group.getChildByName(prefix + i);
        }
    }

    //设置星星数量
    export function setStarGrp(group:egret.gui.Group, star){
        uiHelper.resetItemsGrp(group, "img_star");
        var img_star;
        for(var i = 0, li = star; i < li; i++){
            img_star = group.getChildByName('img_star' + i);
            if(img_star){
                img_star.visible = true;
                img_star.includeInLayout = true;
            }
        }
    }

    export var qualityColorMap = {
        1 : 0xffffff, //白色
        2 : 0x00b654, //绿色
        3 : 0x1e6fff, //蓝色
        4 : 0x6800ca, //紫色
        5 : 0xd55000, //橙色
        6 : 0xd2000f //红色
    };
    //获得品阶颜色
    export function getColorByQuality(q:number){
        return qualityColorMap[q] || 0xffffff;
    }

    //获得玩家名颜色
    export function getUserNameColor(pkValue){
        var cfg = mo.getJSONWithFileName(gc.cfg_c_game)[gc.id_c_game.pkOutCfg];
        /*    参数6：黄名需要pk值
         参数7：红名需要pk值*/
        var color = 0xffffff;
        if(pkValue>=cfg[5]) color = 0xfff000;
        if(pkValue>=cfg[6]) color = 0xff0000;
        return color;
    }

    //------------部位资源 开始-----------------
    export var partRes= [ //[底图，部位大文字，部位小文字
        ["ntc_ico_weapon", "txt_part_weapon", "txt_part_weapon"],
        ["ntc_ico_clothes", "txt_part_body", "txt_part_weapon"],
        ["ntc_ico_bracelet", "txt_part_bracelet", "txt_part_weapon"],
        ["ntc_ico_ring", "txt_part_ring", "txt_part_weapon"],

        ["ntc_ico_ring_mb", "txt_part_ring_mb", "txt_part_weapon"],
        ["ntc_ico_ring_recover", "txt_part_ring_recover", "txt_part_weapon"],
        ["ntc_ico_ring_body", "txt_part_ring_protect", "txt_part_weapon"],
        ["ntc_ico_ring_hurt", "txt_part_ring_hurt", "txt_part_weapon"],

        ["ntc_ico_ring", "txt_part_ring", "txt_part_weapon"],
        ["ntc_ico_bracelet", "txt_part_bracelet", "txt_part_weapon"],
        ["ntc_ico_helmet", "txt_part_head", "txt_part_weapon"],
        ["ntc_ico_necklace", "txt_part_necklace", "txt_part_weapon"]
    ];


    export function getPartRes(part){
        return uiHelper.partRes[parseInt(part)];
    }

    //------------部位资源 结束-----------------

    //type:0为圆形，1为方形
    export function getHeroIcon(iconId, type=1){
        return mo.STR.format("avatar_%s_%s_%s", Math.floor((iconId-1)/2)+1, iconId%2, type);
    }

    //播UI特效
    export function playUIEffect(effectNode:g_comp.UIEffect, play:boolean){
        if(!effectNode) return;
        if(play){
            effectNode.visible = true;
            effectNode.play(-1);
        }else{
            effectNode.visible = false;
            effectNode.gotoAndStop(1);
        }
    }

    export function setLabelGreenOrRed(labelNode:any, b:boolean){
        labelNode.textColor = b? 0x00ff00 : 0xff0000;
    }

    export function setEventTime(label, startTime, endTime){
        label.text = mo.STR.format("%s--%s", startTime.toFormat("MM月DD日HH24:MI"), endTime.toFormat("MM月DD日HH24:MI"));
    }

    export class ScrollerHelper {
        _sc;
        _isPause;
        _scrollTopOnPause;
        _scrollLeftOnPause;

        constructor(list){
            this._sc = list.scroller;
            this._sc.addEventListener(egret.Event.CHANGE, this.chgFunc, this);
            this._sc.addEventListener(egret.gui.UIEvent.CHANGE_END, this.chgEnd, this);
        }

        chgFunc(e){
            var self = this;
            if(self._isPause){
                if(self._scrollTopOnPause) e.target.scrollTop = self._scrollTopOnPause;
                if(self._scrollLeftOnPause) e.target.scrollLeft = self._scrollLeftOnPause;
            }
        }

        chgEnd(){
            this._isPause = false;
            this._scrollLeftOnPause = null;
            this._scrollTopOnPause = null;
        }

        pauseScrollV(){
            this._isPause = true;
            this._scrollTopOnPause = this._sc.scrollTop;
        }

        pauseScrollH(){
            this._isPause = true;
            this._scrollLeftOnPause = this._sc.scrollLeft;
        }

        resumeScroll(){
            this.chgEnd();
        }

        doDtor(){
            this._sc.removeEventListener(egret.Event.CHANGE, this.chgFunc, this);
            this._sc.removeEventListener(egret.gui.UIEvent.CHANGE_END, this.chgEnd, this);
            this._sc = null;
        }
    }

}