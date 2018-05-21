/**
 * Created by SmallAiTT on 2015/8/31.
 */
module g_guide{
    export var log;
    export var debug;
    export var info;
    export var warn;
    export var error;

    logger.initLogger(g_guide, "g-guide");
    logger.setLvl("g-guide", 4);

    export class CmdCfg extends mo.GUIDE.CmdCfg{
        lvl:number;
        copyId:number;
        taskId:number;

        //@override
        _initProp(){
            super._initProp();
            var self = this;
            self.lvl = 0;
        }
    }
    export class GuideParser extends egret.Emitter{
        parse(cmdId:string):CmdCfg{
            var c_guide = mo.getJSONWithFileName(gc.cfg_c_guide);
            var data = c_guide[cmdId];
            if(!data) return null;
            var cfg = new CmdCfg();
            cfg.id = cmdId;
            cfg.set('revert', data[gc.c_guide_revert]);
            cfg.set('next', data[gc.c_guide_next]);
            cfg.set('condition', data[gc.c_guide_condition]);
            cfg.set('judge', data[gc.c_guide_judge]);
            cfg.set('type', data[gc.c_guide_type]);
            cfg.set('talk', data[gc.c_guide_talk]);
            cfg.set('npcIndex', data[gc.c_guide_npcIndex]);
            cfg.set('penetrable', data[gc.c_guide_penetrable], true);
            cfg.set('endType', data[gc.c_guide_endType]);
            cfg.set('toSave', data[gc.c_guide_toSave], true);
            cfg.set('lvl', data[gc.c_guide_lvl]);
            cfg.set('copyId', data[gc.c_guide_copyId]);
            cfg.set('taskId', data[gc.c_guide_taskId]);
            cfg.set('layer', data[gc.c_guide_layer]);
            cfg.set('node', data[gc.c_guide_node]);
            cfg.set('rectNode', data[gc.c_guide_rectNode]);
            cfg.set('beforeShow', data[gc.c_guide_beforeShow]);
            cfg.set('afterShow', data[gc.c_guide_afterShow]);
            cfg.set('beforeNext', data[gc.c_guide_beforeNext]);
            cfg.set('afterNext', data[gc.c_guide_afterNext]);
            cfg.set('actions', data[gc.c_guide_actions]);
            cfg.set('refreshEvent', data[gc.c_guide_refreshEvent]);
            cfg.set('isHook', data[gc.c_guide_isHook], true);
            cfg.set('route', data[gc.c_guide_route]);
            cfg.set('option', data[gc.c_guide_option]);
            return cfg;
        }
    }

    mo.GUIDE.mgr.parser = new GuideParser();
}