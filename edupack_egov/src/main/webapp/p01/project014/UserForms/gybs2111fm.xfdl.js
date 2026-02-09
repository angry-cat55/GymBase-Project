(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("gybs2111");
            this.set_titletext("최근 헬스장 (동적 div)");
            if (Form == this.constructor)
            {
                this._setFormPosition(290,360);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_recentGym1","5","5",null,null,"5","5",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_background("#efefef");
            obj.set_borderRadius("20px");
            obj.set_border("1px solid #d5d5d5");
            obj.set_boxShadow("0px 0px 5px 0px RGBA(0,0,0,0.25)");
            this.addChild(obj.name, obj);

            obj = new Static("sta_gymRegion","0","20",null,"30","0",null,null,null,null,null,this.div_recentGym1.form);
            obj.set_taborder("0");
            obj.set_text("지역");
            obj.set_padding("0px 0px 0px 20px");
            obj.set_color("#de1821");
            obj.set_font("normal 600 10pt/normal \"Arial\"");
            this.div_recentGym1.addChild(obj.name, obj);

            obj = new Static("sta_gymName","0","54",null,"40","0",null,null,null,null,null,this.div_recentGym1.form);
            obj.set_taborder("1");
            obj.set_text("헬스장 이름");
            obj.set_font("normal 600 14pt/normal \"Arial\"");
            obj.set_padding("0px 20px");
            obj.set_color("#000000");
            obj.set_verticalAlign("middle");
            this.div_recentGym1.addChild(obj.name, obj);

            obj = new ImageViewer("btn_gotoGym",null,null,"35","35","20","17",null,null,null,null,this.div_recentGym1.form);
            obj.set_taborder("2");
            obj.set_image("url(\'imagerc::form/btn.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_border("0px none");
            obj.set_borderRadius("25px");
            this.div_recentGym1.addChild(obj.name, obj);

            obj = new ImageViewer("img_gymImg","10","107",null,"174","10",null,null,null,null,null,this.div_recentGym1.form);
            obj.set_taborder("3");
            obj.set_stretch("fit");
            obj.set_border("0px none");
            obj.set_background("transparent");
            obj.set_image("url(\'imagerc::form/imgNotFound.png\')");
            obj.set_borderRadius("10px");
            this.div_recentGym1.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_recentGym1.form
            obj = new Layout("default","",0,0,this.div_recentGym1.form,function(p){});
            this.div_recentGym1.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",290,360,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("gybs2111fm.xfdl", function() {
        this.fvApp = nexacro.getApplication();

        this.gybs2111_onload = function(obj,e)
        {
        	var objParam = this.parent.param;
        	var addrArr = objParam.address.split(" ");
        	this.div_recentGym1.form.sta_gymRegion.text = addrArr[0];
        	this.div_recentGym1.form.sta_gymName.text = objParam.name;
        	if (objParam.imgPath == null) {
        		this.div_recentGym1.form.img_gymImg.image = "imagerc::form/imgNotFound.png";
        	}
        	else {
        		this.div_recentGym1.form.img_gymImg.image = objParam.imgPath;
        	}
        };

        this.div_recentGym1_btn_gotoGym_onclick = function(obj,e)
        {
        	var objParam = this.parent.param;
        	this.fvApp.gv_gymCode = objParam.code;
        	this.parent.parent.parent.parent.parent.url = "UserForms::gybs2310fm.xfdl";
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.gybs2111_onload,this);
            this.div_recentGym1.form.btn_gotoGym.addEventHandler("onclick",this.div_recentGym1_btn_gotoGym_onclick,this);
        };
        this.loadIncludeScript("gybs2111fm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
