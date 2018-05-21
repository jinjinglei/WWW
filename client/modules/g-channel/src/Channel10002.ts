module g_channel {

    /**
     * QQ浏览器
     */
    export class Channel10002 extends Channel10001 {
        isMultiAccount = true;
        _isAutoPopLogin = false;

        validateToken(token):boolean{
            var self = this;
            return token.token != null;
        }

        getLoginOpt (){
            return {
                "loginType":  mo.getLocalStorageItem("loginType", true)
            };
        }

        openBBS(){
            nest.social.openBBS({}, function(){});
        }
    }
}
