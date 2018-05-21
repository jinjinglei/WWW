/**
 * Created by SmallAiTT on 2015/8/28.
 */
module g_consts.style{
    var opt = {};
    /*
     颜色（1-2位）+ 描边（0无、1有）+颜色细分（2位）
     50+颜色（1位）+状态（2）
     1 : 白色  white_000 = 1000
     2 : 绿色  green_000 = 2000
     3 : 蓝色  blue_000 = 3000
     4 : 紫色  purple_000 = 4000
     5 : 橙色  orange_000 = 5000
     6 : 红色  red_000 = 6000
     7 : ? 待定
     10 : 黑色 black_100 = 10100   //1表示带描边
     11 : 黄色 yellow_100 = 11000
     12 : 棕色 brown_000 = 12000

     50 : 按键文字
     */
    export var test:number = 1;

    // 白色
    export var white_000:number = 1000;// 纯白色
    export var white_001:number = 1001;// 灰色
    export var white_101:number = 1101;// 纯白色加深蓝色描边
    export var white_102:number = 1102;// 白色加浅黑色描边
    export var white_103:number = 1103;// 白色加红色描边
    opt[white_000] = {textColor:0xFFFFFF};
    opt[white_001] = {textColor:0x858585};
    opt[white_101] = {textColor:0xFFFFFF, stroke:2, strokeColor:0x193452};
    opt[white_102] = {textColor:0xEBEBEB, stroke:2, strokeColor:0x373737};
    opt[white_103] = {textColor:0xfff6f6, stroke:2, strokeColor:0x971c00};

    // 绿色
    export var green_000:number = 2000;// 纯绿色
    export var green_001:number = 2001;// 浅绿色
    export var green_002:number = 2002;// 浅绿色
    opt[green_000] = {textColor:0x00FF00};
    opt[green_001] = {textColor:0x00C20E};
    opt[green_002] = {textColor:0X7ECA0E};

    // 蓝色
    export var blue_000:number = 3000;// 纯蓝色
    export var blue_001:number = 3001;// 深蓝色
    export var blue_002:number = 3002;// 浅蓝色
    export var blue_003:number = 3003;// 比较亮的浅蓝色
    export var blue_004:number = 3004;// 紫蓝色
    export var blue_101:number = 3101;// 钻石蓝色
    export var blue_102:number = 3102;// 很亮的青蓝色
    opt[blue_000] = {textColor:0x0000FF};
    opt[blue_001] = {textColor:0x193452};
    opt[blue_002] = {textColor:0x93D3E8};
    opt[blue_003] = {textColor:0x1786FC};
    opt[blue_004] = {textColor:0x7286CE};
    opt[blue_101] = {textColor:0x93D3E8, stroke:2, strokeColor:0x003061};
    opt[blue_102] = {textColor:0x40fdff, stroke:2, strokeColor:0x00586f};

    // 紫色
    export var purple_000:number = 4000;
    opt[purple_000] = {textColor:0xe76df5, stroke:1, strokeColor:0xE76DF5}; //公会名称颜色
    // 橙色
    export var orange_000:number = 5000;// 纯橙色
    export var orange_001:number = 5001;// 浅橙色
    export var orange_002:number = 5002;// 发白的浅橙色
    export var orange_101:number = 5101;// 淡淡的橙色加棕色描边
    export var orange_102:number = 5102;// 亮黄色加红色描边
    export var orange_103:number = 5103;// 纯橙色加黑色描边
    opt[orange_000] = {textColor:0xFF9400};
    opt[orange_001] = {textColor:0xE5B064};
    opt[orange_002] = {textColor:0xF6E6C2};
    opt[orange_101] = {textColor:0xFFF1CC, stroke:2, strokeColor:0x421707};
    opt[orange_102] = {textColor:0xFFAB27, stroke:2, strokeColor:0x7E0100};
    opt[orange_103] = {textColor:0xFF9400, stroke:2};
    // 红色
    export var red_000:number = 6000;// 纯红色
    export var red_001:number = 6001;// 常用红色
    export var red_101:number = 6101;// 红色加白色描边
    opt[red_000] = {textColor:0xFF0000};
    opt[red_001] = {textColor:0xF40000};
    opt[red_101] = {textColor:0xb85a35, stroke:2, strokeColor:0xfff8ee};

    // 黑色
    export var black_000:number = 10000;// 纯黑色
    export var black_001:number = 10001;// 浅黑色
    export var black_002:number = 10002;// 灰黑色
    opt[black_000] = {textColor:0x000000};
    opt[black_001] = {textColor:0x2B2321};
    opt[black_002] = {textColor:0x3D1E01};

    // 黄色
    export var yellow_000:number = 11000;// 纯黄色
    export var yellow_001:number = 11001;// 金黄色
    export var yellow_101:number = 11101;// 金币金黄色
    export var yellow_102:number = 11102;// 金黄色加棕色描边
    export var yellow_103:number = 11103;// 金黄色加深棕色描边
    opt[yellow_000] = {textColor:0xFFFF00};
    opt[yellow_001] = {textColor:0xF1AA00};
    opt[yellow_101] = {textColor:0xFFFAA3, stroke:2, strokeColor:0x95641D};
    opt[yellow_102] = {textColor:0xf3f0c1, stroke:2, strokeColor:0x6c440a};
    opt[yellow_103] = {textColor:0xfffaa3, stroke:2, strokeColor:0x2f1d01};

    // 棕色
    export var brown_001:number = 12001;// 棕色1
    opt[brown_001] = {textColor:0x621600};

    // 按键文字
    // 常态
    export var btn_101:number = 60101;// 绿色按键
    export var btn_102:number = 60102;// 黄色按键
    export var btn_103:number = 60103;// 蓝色按键
    // 按下态
    export var btn_111:number = 60111;// 绿色按键
    export var btn_112:number = 60112;// 黄色按键
    export var btn_113:number = 60113;// 蓝色按键
    // 禁用态
    export var btn_120:number = 60120;// 带描边不可用状态
    opt[btn_101] = {textColor:0xE9FFB3, stroke:2, strokeColor:0x076005};
    opt[btn_102] = {textColor:0xFFF9C5, stroke:2, strokeColor:0x632800};
    opt[btn_103] = {textColor:0xD7F6FF, stroke:2, strokeColor:0x0C415F};
    opt[btn_111] = {textColor:0xa6b380, stroke:2, strokeColor:0x003f00};
    opt[btn_112] = {textColor:0xb3b395, stroke:2, strokeColor:0x451d05};
    opt[btn_113] = {textColor:0x9db2b3, stroke:2, strokeColor:0x002743};
    opt[btn_120] = {textColor:0x959595, stroke:2, strokeColor:0x363636};

    // 字体样式设置
    mo.registerFontStyle(opt);
}
