module g_channel {

    /**
     * QQwan8
     */
    export class Channel10004 extends Channel10001 {
        login (cb, cbTarget, option?){
            var self = this,
                loginInfo:nest.user.LoginInfo = {loginType:"qq"};
            super.login(cb, cbTarget, loginInfo);
        }
    }
}