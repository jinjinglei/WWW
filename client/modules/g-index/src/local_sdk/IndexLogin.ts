module g_index {
	/**
	 *
	 * @author 
	 *
	 */
	export class IndexLogin extends mo.gui.Dlg{
		label_userName:egret.gui.TextInput;
		label_pwd:egret.gui.TextInput;
		btnRegister:egret.gui.Button;
		btnRemember:egret.gui.Button;
		btnQuickLogin:egret.gui.Button;
		btnLogin:egret.gui.Button;
		btnForgetPwd:egret.gui.Button;
		markRemember:egret.gui.UIAsset;

		init(){
			super.init();
			var self = this;
			//self.setData(localSdk.getAccountInfo());
		}

		//+++++++++++++++++++点击事件设置区域 开始++++++++++++++++++++
		_tap_btnRegister(){
			var self = this;
			IndexRegister.create().show();
			self.close();
		}
		_tap_btnRemember(){// 记住密码
			var self = this;
			localSdk.isRememberPwd = !localSdk.isRememberPwd;
			self.markRemember.visible = localSdk.isRememberPwd;
		}

		_tap_btnQuickLogin(){// 快速登录
			var self = this;
			//localSdk.quickLoginLocal(function(){
			//	self.close();
			//	// 显示IndexLayer
			//	IndexLayer.create().show();
			//});
		}
		_tap_btnLogin(){// 登录
			var self = this;
			localSdk.loginLocal(self.label_userName.text, self.label_pwd.text, function(){
				self.close();
			});
		}
		_tap_btnForgetPwd(){
			//IndexForgetPwd.create().show();
			//this.close();
		}
		//+++++++++++++++++++点击事件设置区域 结束++++++++++++++++++++

	}
}
