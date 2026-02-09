(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("gybs2015pu");
            this.set_titletext("비밀번호 확인 팝업");
            this.set_background("transparent");
            if (Form == this.constructor)
            {
                this._setFormPosition(330,300);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_buy","0","0","330","300",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px");
            obj.set_border("1px solid #000000");
            this.addChild(obj.name, obj);

            obj = new Static("sta_checkPW","0","85",null,"30","0",null,null,null,null,null,this.div_buy.form);
            obj.set_taborder("1");
            obj.set_text("비밀번호 확인");
            obj.set_font("normal 700 14pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#000000");
            this.div_buy.addChild(obj.name, obj);

            obj = new Button("btn_check",null,"249","80","35","168",null,null,null,null,null,this.div_buy.form);
            obj.set_taborder("2");
            obj.set_text("확인");
            obj.set_cssclass("GB_Login");
            obj.set_font("normal 700 10pt/normal \"Arial\"");
            this.div_buy.addChild(obj.name, obj);

            obj = new Static("sta","0","122",null,"30","0",null,null,null,null,null,this.div_buy.form);
            obj.set_taborder("3");
            obj.set_text("회원님의 정보를 안전하게 보호하기 위해\r\n");
            obj.set_font("normal 500 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#000000");
            obj.set_verticalAlign("middle");
            this.div_buy.addChild(obj.name, obj);

            obj = new ImageViewer("img_workout","140","29","50","50",null,null,null,null,null,null,this.div_buy.form);
            obj.set_taborder("4");
            obj.set_image("url(\'imagerc::form/checkPassword.png\')");
            obj.set_background("transparent");
            obj.set_border("0px none");
            obj.set_stretch("fixaspectratio");
            this.div_buy.addChild(obj.name, obj);

            obj = new Button("btn_cancel","btn_check:8","249","80","35",null,null,null,null,null,null,this.div_buy.form);
            obj.set_taborder("5");
            obj.set_text("취소");
            obj.set_cssclass("GB_Cancel");
            obj.set_font("normal 700 10pt/normal \"Arial\"");
            this.div_buy.addChild(obj.name, obj);

            obj = new Static("sta0","0","144",null,"30","0",null,null,null,null,null,this.div_buy.form);
            obj.set_taborder("6");
            obj.set_text("비밀번호를 다시 한번 입력해주세요.");
            obj.set_font("normal 500 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#000000");
            obj.set_verticalAlign("middle");
            this.div_buy.addChild(obj.name, obj);

            obj = new Edit("edt_pw","40","189",null,"40","38",null,null,null,null,null,this.div_buy.form);
            obj.set_taborder("0");
            obj.set_border("1px solid #d4d4d4");
            obj.set_borderRadius("10px");
            obj.set_letterSpacing("4px");
            obj.set_padding("0px 20px");
            obj.set_textAlign("left");
            obj.set_password("true");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_autoselect("true");
            this.div_buy.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_buy.form
            obj = new Layout("default","",0,0,this.div_buy.form,function(p){});
            this.div_buy.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",330,300,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("gybs2015pu.xfdl", function() {
        this.fvApp = nexacro.getApplication();

        this.div_buy_btn_cancel_onclick = function(obj,e)
        {
        	this.close();
        };

        this.div_buy_btn_check_onclick = function(obj,e)
        {
        	if (this.fvApp.gds_accountInfo.getColumn(0, "PW") == this.div_buy.form.edt_pw.value) {
        		this.opener.fnCorrectPassword();
        		this.close();
        	}
        	else {
        		this.gfnAlert("msg.err.wrong.password", "", "msg.err.wrong.password", "fnMsgCallback");
        	}
        };

        this.div_buy_edt_pw_onkeyup = function(obj,e)
        {
        	if (e.keycode == 13) {
        		this.div_buy_btn_check_onclick();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div_buy.form.btn_check.addEventHandler("onclick",this.div_buy_btn_check_onclick,this);
            this.div_buy.form.btn_cancel.addEventHandler("onclick",this.div_buy_btn_cancel_onclick,this);
            this.div_buy.form.edt_pw.addEventHandler("onkeyup",this.div_buy_edt_pw_onkeyup,this);
        };
        this.loadIncludeScript("gybs2015pu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
