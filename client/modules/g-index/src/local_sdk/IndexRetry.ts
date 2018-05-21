/**
 * Created by SmallAiTT on 2015/7/11.
 */

module g_index {

	/**
	 *
	 * @author 
	 *
	 */
	export class IndexRetry extends mo.gui.Layer{

		_tap_btn_retry(){
			var self = this;
			g_base.loginCtrl.loginChannel();
			self.close();
		}
	}
}
