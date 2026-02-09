(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("gybs2112");
            this.set_titletext("최근 정기권 (동적 div)");
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

            obj = new ImageViewer("btn_gotoMarket",null,null,"35","35","20","17",null,null,null,null,this.div_recentGym1.form);
            obj.set_taborder("2");
            obj.set_image("url(\'imagerc::form/btn.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_border("0px none");
            obj.set_borderRadius("25px");
            this.div_recentGym1.addChild(obj.name, obj);

            obj = new Static("sta_date","20","280","205","20",null,null,null,null,null,null,this.div_recentGym1.form);
            obj.set_taborder("3");
            obj.set_text("00.00.00 ~ 99.99.9");
            obj.set_font("normal 600 11pt/normal \"Arial\"");
            obj.set_color("#000000");
            this.div_recentGym1.addChild(obj.name, obj);

            obj = new Static("sta_marketTitle","10","107",null,null,"10","77",null,null,null,null,this.div_recentGym1.form);
            obj.set_taborder("4");
            obj.set_wordWrap("english");
            obj.set_verticalAlign("top");
            obj.set_text("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
            obj.set_color("#000000");
            obj.set_font("normal 600 10pt/normal \"Arial\"");
            obj.set_padding("0px 10px");
            this.div_recentGym1.addChild(obj.name, obj);

            obj = new Static("sta_price","20","307","205","20",null,null,null,null,null,null,this.div_recentGym1.form);
            obj.set_taborder("5");
            obj.set_text("999999원");
            obj.set_font("normal 600 11pt/normal \"Arial\"");
            obj.set_color("#000000");
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
        this.registerScript("gybs2112fm.xfdl", function() {
        this.fvApp = nexacro.getApplication();

        this.gybs2112_onload = function(obj,e)
        {
        	var objParam = this.parent.param;
        	var addrArr = objParam.gymAddr.split(" ");
        	var fromDate1 = objParam.startDate.substring(2, 4);
        	var fromDate2 = objParam.startDate.substring(4, 6);
        	var fromDate3 = objParam.startDate.substring(6, 7);
        	var toDate1 = objParam.endDate.substring(2, 4);
        	var toDate2 = objParam.endDate.substring(4, 6);
        	var toDate3 = objParam.endDate.substring(6, 8);
        	var dateText = fromDate1 + "." + fromDate2 + "." + fromDate3 + " ~ " + toDate1 + "." + toDate2 + "." + toDate3;

        	this.div_recentGym1.form.sta_gymRegion.text = addrArr[0];
        	this.div_recentGym1.form.sta_gymName.text = objParam.gymName;
        	this.div_recentGym1.form.sta_marketTitle.text = objParam.title;
        	this.div_recentGym1.form.sta_date.text = dateText;
        	this.div_recentGym1.form.sta_price.text = this.gfnAppendComma(objParam.price) + "원";
        };

        this.div_recentGym1_btn_gotoMarket_onclick = function(obj,e)
        {
        	var objParam = this.parent.param;
        	this.fvApp.gv_marketNo = objParam.marketNo;
        	this.parent.parent.parent.parent.parent.url = "MarketForms::gybs4011fm.xfdl";
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.gybs2112_onload,this);
            this.div_recentGym1.form.btn_gotoMarket.addEventHandler("onclick",this.div_recentGym1_btn_gotoMarket_onclick,this);
        };
        this.loadIncludeScript("gybs2112fm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
