/**
 * Created by Administrator on 2015/11/14.
 */
module g_base{
    export class RoleAvatar extends mo.gui.Layer{
        ico_clothes;
        ico_weapon;
        ico_wing_male;
        ico_wing_female;
        ico_isKing;

        dataChanged(){
            super.dataChanged();
            var self = this;
            var clothesID = self.data.clothesID;
            var weaponID = self.data.weaponID;
            var wingID = self.data.wingID;
            var sex = self.data.sex;
            var isKing = self.data.isKing;

            if(clothesID){
                self.ico_clothes.source = resHelper.getHeroClothesIconPath(clothesID);
            }else{
                self.ico_weapon.source = null;
            }
            if(weaponID){
                self.ico_weapon.source = resHelper.getHeroWeaponIconPath(weaponID);
            }else{
                self.ico_weapon.source = null;
            }
            if(wingID){
                if(sex==gc.c_prop.sexKey.male){
                    self.ico_wing_male.source = resHelper.getHeroWingIconPath(wingID);
                    self.ico_wing_female.source = null;
                }else{
                    self.ico_wing_female.source = resHelper.getHeroWingIconPath(wingID);
                    self.ico_wing_male.source = null;
                }
            }else{
                self.ico_wing_male.source = null;
                self.ico_wing_female.source = null;
            }
            self.ico_isKing.visible = isKing;
        }
    }
}