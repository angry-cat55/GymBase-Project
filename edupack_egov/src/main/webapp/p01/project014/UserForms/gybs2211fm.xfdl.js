(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("gybs2211fm");
            this.set_titletext("헬스장 목록 (동적 div)");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,210);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_gymInfo","5","5",null,null,"5","5",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("#efefef");
            obj.set_borderRadius("20px");
            obj.set_border("1px solid #d5d5d5");
            obj.set_boxShadow("0px 0px 5px 0px RGBA(0,0,0,0.25)");
            this.addChild(obj.name, obj);

            obj = new Static("sta_gymRegion","283","10","250","30",null,null,null,null,null,null,this.div_gymInfo.form);
            obj.set_taborder("0");
            obj.set_text("지역");
            obj.set_padding("0px 0px 0px 20px");
            obj.set_color("#de1821");
            obj.set_font("normal 600 11pt/normal \"Arial\"");
            this.div_gymInfo.addChild(obj.name, obj);

            obj = new Static("sta_gymName","283","sta_gymRegion:0","242","80",null,null,null,null,null,null,this.div_gymInfo.form);
            obj.set_taborder("1");
            obj.set_text("헬스장 이름");
            obj.set_font("normal 600 17pt/normal \"Arial\"");
            obj.set_padding("10px 0px 0px 20px");
            obj.set_color("#000000");
            obj.set_verticalAlign("top");
            obj.set_wordWrap("english");
            this.div_gymInfo.addChild(obj.name, obj);

            obj = new ImageViewer("img_gymImg","20","20","260",null,null,"20",null,null,null,null,this.div_gymInfo.form);
            obj.set_taborder("2");
            obj.set_image("url(\'imagerc::form/imgNotFound.png\')");
            obj.set_stretch("fit");
            obj.set_text("");
            obj.set_borderRadius("10px");
            this.div_gymInfo.addChild(obj.name, obj);

            obj = new Static("sta_telNo","283",null,"217","30",null,"8",null,null,null,null,this.div_gymInfo.form);
            obj.set_taborder("3");
            obj.set_text("010-9999-9999");
            obj.set_font("normal 600 12pt/normal \"Arial\"");
            obj.set_color("#000000");
            obj.set_padding("0px 0px 0px 20px");
            this.div_gymInfo.addChild(obj.name, obj);

            obj = new ImageViewer("btn_goNotice",null,null,"35","35","30","87",null,null,null,null,this.div_gymInfo.form);
            obj.set_taborder("4");
            obj.set_image("url(\'imagerc::form/btn.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_border("0px none");
            obj.set_borderRadius("25px");
            this.div_gymInfo.addChild(obj.name, obj);

            obj = new Static("sta_favoriteCnt",null,null,"65","25","0","10",null,null,null,null,this.div_gymInfo.form);
            obj.set_taborder("6");
            obj.set_text("0");
            obj.set_font("normal 600 12pt/normal \"맑은 고딕\"");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_color("#000000");
            obj.set_verticalAlign("middle");
            this.div_gymInfo.addChild(obj.name, obj);

            obj = new ImageViewer("img_favotie",null,null,"35","35","sta_favoriteCnt:5","5",null,null,null,null,this.div_gymInfo.form);
            obj.set_taborder("5");
            obj.set_stretch("fixaspectratio");
            obj.set_image("url(\'imagerc::form/unFavorite.png\')");
            obj.set_background("transparent");
            obj.set_border("0px none");
            obj.set_text("");
            this.div_gymInfo.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_gymInfo.form
            obj = new Layout("default","",0,0,this.div_gymInfo.form,function(p){});
            this.div_gymInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",600,210,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("gybs2211fm.xfdl", function() {
        this.fvApp = nexacro.getApplication();

        this.gybs2211fm_onload = function(obj,e)
        {
        	var objParam = this.parent.param;

        	this.div_gymInfo.form.sta_gymRegion.text = objParam.address;
        	this.div_gymInfo.form.sta_gymName.text = objParam.name;
        	var nTelNo = objParam.telNo;
        	var resTelNo = nTelNo.substring(0, 3) + "-" + nTelNo.substring(3, 7) + "-" + nTelNo.substring(7, 11);
        	this.div_gymInfo.form.sta_telNo.text = resTelNo;
        	if (objParam.imgPath == null) {
        		this.div_gymInfo.form.img_gymImg.image = "imagerc::form/imgNotFound.png";
        	}
        	else {
        		this.div_gymInfo.form.img_gymImg.image = objParam.imgPath;
        	}
        	this.div_gymInfo.form.sta_favoriteCnt.text = objParam.favoritesCount;
        	if (objParam.isFavotire == 1) {
        		this.div_gymInfo.form.img_favotie.image = "imagerc::form/favorite.png";
        	}
        	else {
        		this.div_gymInfo.form.img_favotie.image = "imagerc::form/unFavorite.png";
        	}
        };

        this.div_gymInfo_btn_goNotice_onclick = function(obj,e)
        {
        	var objParam = this.parent.param;
        	this.fvApp.gv_gymCode = objParam.code;
        	this.parent.parent.parent.parent.parent.url = "UserForms::gybs2310fm.xfdl";
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.gybs2211fm_onload,this);
            this.div_gymInfo.form.btn_goNotice.addEventHandler("onclick",this.div_gymInfo_btn_goNotice_onclick,this);
        };
        this.loadIncludeScript("gybs2211fm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
