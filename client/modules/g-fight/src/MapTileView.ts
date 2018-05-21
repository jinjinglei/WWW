module g_fight {
	/**
	 *
	 * @author 
	 *
	 */
	export class MapTileView extends egret.Bitmap{
        public static TILE_W: number = 240;
        public static TILE_H: number = 256;
        private static _tiles: Array<MapTileView> = [];
        
        public static createTileView(mapID:number, row:number, col:number):MapTileView{
            var tileView: MapTileView = MapTileView.getTileView(row, col);
            if(!tileView){
                tileView = new MapTileView();
                tileView.setTile(mapID, row, col);
            }
            if(mapID!=tileView.mapID){
                tileView.texture = null;
                tileView.bitmapData = null;
                tileView.dtor();
                tileView.setTile(mapID, row, col);
            }
            return tileView;
        }
        public static removeTileView(tileView:MapTileView):void{
            if(MapTileView._tiles.indexOf(tileView)==-1){
                //tileView.mapID = -1;
                MapTileView._tiles.push(tileView);
            }
        }
        private static getTileView(row:number, col:number):MapTileView{
            for(var i=0; i<MapTileView._tiles.length; ++i){
                var tileView: MapTileView = MapTileView._tiles[i];
                if(tileView.row==row && tileView.col==col){
                    return tileView;
                }
            }
            return null;
        }
    	
        public mapID: number;
        public row: number;
        public col: number;

        public static getPath(mapID, row, col){
            return "resource/dynamic2/map_"+mapID+"_"+col+"_"+row+".jpg";
        }
        
		public setTile(mapID:number, row:number, col:number):void{
            this.mapID = mapID;
            this.row = row;
            this.col = col;
            
            RES.getResByUrl(MapTileView.getPath(this.mapID, this.row, this.col), function(texture:egret.Texture){
                if(mapID!=this.mapID||row!=this.row||col!=this.col||!texture)
                    return;
                this.bitmapData = texture.bitmapData;
                //this.texture = texture;
            }, this, RES.ResourceItem.TYPE_IMAGE);
		}

        public dtor(){
            RES.destroyRes(MapTileView.getPath(this.mapID, this.row, this.col));
        }
		
	}
}
