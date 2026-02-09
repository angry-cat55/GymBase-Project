(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("gybs4110fm");
            this.set_titletext("정기권 (동적 div)");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,210);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_marketInfo","5","5",null,null,"5","5",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#efefef");
            obj.set_borderRadius("20px");
            obj.set_border("1px solid #d5d5d5");
            obj.set_boxShadow("0px 0px 5px 0px RGBA(0,0,0,0.25)");
            this.addChild(obj.name, obj);

            obj = new Static("sta_gymName","0","54","403","37",null,null,null,null,null,null,this.div_marketInfo.form);
            obj.set_taborder("4");
            obj.set_text("헬스장 이름");
            obj.set_padding("0px 0px 0px 40px");
            obj.set_font("normal 600 17pt/normal \"Arial\"");
            obj.set_color("#000000");
            this.div_marketInfo.addChild(obj.name, obj);

            obj = new Static("sta_title","0","sta_gymName:0","440","60",null,null,null,null,null,null,this.div_marketInfo.form);
            obj.set_taborder("0");
            obj.set_text("정기권 3개월 남은거 팔아요");
            obj.set_padding("10px 0px 0px 40px");
            obj.set_font("normal 600 12pt/normal \"Arial\"");
            obj.set_wordWrap("english");
            obj.set_verticalAlign("top");
            obj.set_color("#000000");
            this.div_marketInfo.addChild(obj.name, obj);

            obj = new Static("sta_price","398",null,null,"25","0","16",null,null,null,null,this.div_marketInfo.form);
            obj.set_taborder("1");
            obj.set_text("99999원");
            obj.set_padding("0px 40px 0px 0px");
            obj.set_font("normal 600 12pt/normal \"Arial\"");
            obj.set_color("#000000");
            obj.set_textAlign("right");
            this.div_marketInfo.addChild(obj.name, obj);

            obj = new Static("sta_expiry",null,"22","200","25","0",null,null,null,null,null,this.div_marketInfo.form);
            obj.set_taborder("2");
            obj.set_text("만료일 D - 999");
            obj.set_padding("0px 40px 0px 0px");
            obj.set_font("normal 600 12pt/normal \"Arial\"");
            obj.set_textAlign("right");
            obj.set_color("#000000");
            this.div_marketInfo.addChild(obj.name, obj);

            obj = new Static("sta_status","0","20","120","29",null,null,null,null,null,null,this.div_marketInfo.form);
            obj.set_taborder("3");
            obj.set_text("판매 완료");
            obj.set_padding("0px 0px 0px 40px");
            obj.set_font("normal 600 12pt/normal \"Arial\"");
            obj.set_color("#000000");
            this.div_marketInfo.addChild(obj.name, obj);

            obj = new ImageViewer("btn_goNotice",null,null,"35","35","30","87",null,null,null,null,this.div_marketInfo.form);
            obj.set_taborder("5");
            obj.set_image("url(\'imagerc::form/btn.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_border("0px none");
            obj.set_borderRadius("25px");
            this.div_marketInfo.addChild(obj.name, obj);

            obj = new ImageViewer("img_profile","40","154","30","30",null,null,null,null,null,null,this.div_marketInfo.form);
            obj.set_taborder("7");
            obj.set_border("1px solid #000000");
            obj.set_background("transparent");
            obj.set_image("url(\'imagerc::form/profileIcon.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_borderRadius("20px");
            this.div_marketInfo.addChild(obj.name, obj);

            obj = new Static("sta_sellerID","img_profile:10",null,"150","25",null,"16",null,null,null,null,this.div_marketInfo.form);
            obj.set_taborder("6");
            obj.set_text("사용자 계정");
            obj.set_padding("0px 40px 0px 0px");
            obj.set_font("normal 600 12pt/normal \"Arial\"");
            obj.set_color("#000000");
            obj.set_fittocontents("width");
            obj.set_textAlign("left");
            this.div_marketInfo.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_marketInfo.form
            obj = new Layout("default","",0,0,this.div_marketInfo.form,function(p){});
            this.div_marketInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",600,210,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("gybs4110fm.xfdl", function() {
        this.fvApp = nexacro.getApplication();

        this.gybs4110fm_onload = function(obj,e)
        {
        	var objParam = this.parent.param;

        	this.div_marketInfo.background = objParam.background;
        	this.div_marketInfo.form.sta_sellerID.text = objParam.ID;
        	this.div_marketInfo.form.sta_gymName.text = objParam.gymName;
        	this.div_marketInfo.form.sta_title.text = objParam.title;
        	var nStatus = "";
        	switch(objParam.status) {
        		case "SALE":
        			nStatus = "판매 중";
        			break;
        		case "SOLD":
        			nStatus = "판매 완료";
        			break;
        		case "REJECTED":
        			nStatus = "등록 반려";
        	}
        	this.div_marketInfo.form.sta_status.text = nStatus;
        	this.div_marketInfo.form.sta_price.text = this.gfnAppendComma(objParam.price) + "원";
        	this.div_marketInfo.form.sta_expiry.text = "정기권 만료일 D - " + objParam.expiry;
        	if (nexacro.toNumber(objParam.expiry) <= 10) {
        		this.div_marketInfo.form.sta_expiry.color = "#f40000";
        	}
        	var profilePath = "";
        	if (objParam.profilePath == null || objParam.profilePath == "") {
        		profilePath = "imagerc::form/profileIcon.png";
        	}
        	else profilePath = objParam.profilePath;
        	this.div_marketInfo.form.img_profile.image = profilePath;
        };

        this.div_marketInfo_btn_goNotice_onclick = function(obj,e)
        {
        	var objParam = this.parent.param;
        	this.fvApp.gv_marketNo = objParam.marketNo;
        	this.fvApp.gv_expiryDate = objParam.expiry;
        	this.parent.parent.parent.parent.parent.url = "MarketForms::gybs4011fm.xfdl";
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.gybs4110fm_onload,this);
            this.div_marketInfo.form.btn_goNotice.addEventHandler("onclick",this.div_marketInfo_btn_goNotice_onclick,this);
        };
        this.loadIncludeScript("gybs4110fm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
