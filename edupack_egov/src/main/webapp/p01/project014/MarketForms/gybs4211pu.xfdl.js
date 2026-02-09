(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("gybs1110fm");
            this.set_titletext("구매 성공 팝업");
            this.set_background("transparent");
            if (Form == this.constructor)
            {
                this._setFormPosition(330,270);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_buy","0","0","330","270",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px");
            obj.set_border("1px solid #000000");
            this.addChild(obj.name, obj);

            obj = new Static("sta_welcome","0","45",null,null,"0","196",null,null,null,null,this.div_buy.form);
            obj.set_taborder("0");
            obj.set_text("구매가 완료되었습니다!");
            obj.set_font("normal 700 14pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#000000");
            this.div_buy.addChild(obj.name, obj);

            obj = new Button("btn_gotoLogin","110","212","110","40",null,null,null,null,null,null,this.div_buy.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_cssclass("GB_Login");
            this.div_buy.addChild(obj.name, obj);

            obj = new Static("sta_welcome00","0","142",null,"25","0",null,null,null,null,null,this.div_buy.form);
            obj.set_taborder("2");
            obj.set_text("관리자에게 양도 요청이 전달되었으며,");
            obj.set_font("normal 600 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#000000");
            this.div_buy.addChild(obj.name, obj);

            obj = new Static("sta_welcome00_00","0","172",null,"25","0",null,null,null,null,null,this.div_buy.form);
            obj.set_taborder("3");
            obj.set_text("\'마이페이지\'에서 처리 상태를 확인하실 수 있습니다.");
            obj.set_font("normal 600 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#000000");
            this.div_buy.addChild(obj.name, obj);

            obj = new ImageViewer("img_workout","125","72","80","70",null,null,null,null,null,null,this.div_buy.form);
            obj.set_taborder("4");
            obj.set_image("url(\'imagerc::form/congrate.png\')");
            obj.set_background("transparent");
            obj.set_border("0px none");
            obj.set_stretch("fixaspectratio");
            this.div_buy.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_buy.form
            obj = new Layout("default","",0,0,this.div_buy.form,function(p){});
            this.div_buy.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",330,270,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("gybs4211pu.xfdl", function() {
        this.fvApp = nexacro.getApplication();

        this.btn_gotoLogin_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.gybs1110fm_onload,this);
            this.div_buy.form.btn_gotoLogin.addEventHandler("onclick",this.btn_gotoLogin_onclick,this);
        };
        this.loadIncludeScript("gybs4211pu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
