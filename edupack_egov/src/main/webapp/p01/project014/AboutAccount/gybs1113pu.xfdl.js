(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("gybs1111pu");
            this.set_titletext("비번 찾기 성공");
            if (Form == this.constructor)
            {
                this._setFormPosition(320,470);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_upadtePW","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_updatePW","117","409","86",null,null,"18",null,null,null,null,this.div_upadtePW.form);
            obj.set_taborder("2");
            obj.set_text("재설정");
            obj.set_cssclass("GB_Login");
            this.div_upadtePW.addChild(obj.name, obj);

            obj = new Edit("edt_PWCK","30","344",null,"40","30",null,null,null,null,null,this.div_upadtePW.form);
            obj.set_taborder("1");
            obj.set_borderRadius("10px");
            obj.set_border("1px solid #d4d4d4");
            obj.set_enable("true");
            obj.set_padding("0px 50px 0px 20px");
            obj.set_textAlign("left");
            obj.set_color("#000000");
            obj.set_font("normal 13pt/normal \"Arial\"");
            obj.set_password("true");
            obj.set_letterSpacing("1px");
            this.div_upadtePW.addChild(obj.name, obj);

            obj = new Static("sta_PWs00","40",null,null,"35","40","126",null,null,null,null,this.div_upadtePW.form);
            obj.set_taborder("3");
            obj.set_text("새 비밀번호 확인");
            obj.set_font("normal 600 12pt/normal \"Arial\"");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_color("#000000");
            this.div_upadtePW.addChild(obj.name, obj);

            obj = new Edit("edt_PW","30","260",null,"40","30",null,null,null,null,null,this.div_upadtePW.form);
            obj.set_taborder("0");
            obj.set_borderRadius("10px");
            obj.set_border("1px solid #d4d4d4");
            obj.set_enable("true");
            obj.set_padding("0px 50px 0px 20px");
            obj.set_textAlign("left");
            obj.set_color("#000000");
            obj.set_font("normal 13pt/normal \"Arial\"");
            obj.set_password("true");
            obj.set_letterSpacing("1px");
            this.div_upadtePW.addChild(obj.name, obj);

            obj = new Static("sta_PWs","40",null,null,"35","40","210",null,null,null,null,this.div_upadtePW.form);
            obj.set_taborder("4");
            obj.set_text("새 비밀번호");
            obj.set_font("normal 600 12pt/normal \"Arial\"");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_color("#000000");
            this.div_upadtePW.addChild(obj.name, obj);

            obj = new Static("sta_findPW00","0","122",null,"90","0",null,null,null,null,null,this.div_upadtePW.form);
            obj.set_taborder("5");
            obj.set_text("보안을 위해 사용할\r\n\r\n새 비밀번호를 입력해 주세요.");
            obj.set_font("normal 500 11pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_textAlign("center");
            this.div_upadtePW.addChild(obj.name, obj);

            obj = new ImageViewer("img_success","135","29","50","47",null,null,null,null,null,null,this.div_upadtePW.form);
            obj.set_taborder("6");
            obj.set_image("url(\'imagerc::form/searchingSuccess.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_background("transparent");
            obj.set_border("0px none");
            this.div_upadtePW.addChild(obj.name, obj);

            obj = new Static("sta_findPW","0","86",null,"28","0",null,null,null,null,null,this.div_upadtePW.form);
            obj.set_taborder("7");
            obj.set_text("비밀번호를 찾았습니다!");
            obj.set_font("normal 900 15pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_textAlign("center");
            this.div_upadtePW.addChild(obj.name, obj);

            obj = new Div("div_successUpdatePW","0","0","320","470",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_findPW00","0","182",null,"43","0",null,null,null,null,null,this.div_successUpdatePW.form);
            obj.set_taborder("1");
            obj.set_text("새 비밀번호로 로그인을 해주세요.");
            obj.set_font("normal 500 11pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_textAlign("center");
            this.div_successUpdatePW.addChild(obj.name, obj);

            obj = new ImageViewer("img_success","135","9","70","70",null,null,null,null,null,null,this.div_successUpdatePW.form);
            obj.set_taborder("2");
            obj.set_image("url(\'imagerc::form/congrate.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_background("transparent");
            obj.set_border("0px none");
            this.div_successUpdatePW.addChild(obj.name, obj);

            obj = new Static("sta_findPW","0","86",null,"28","0",null,null,null,null,null,this.div_successUpdatePW.form);
            obj.set_taborder("3");
            obj.set_text("비밀번호를 재설정했습니다!");
            obj.set_font("normal 900 15pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_textAlign("center");
            this.div_successUpdatePW.addChild(obj.name, obj);

            obj = new Button("btn_gotoLogin","89",null,"142","50",null,"18",null,null,null,null,this.div_successUpdatePW.form);
            obj.set_taborder("0");
            obj.set_text("로그인 하러가기");
            obj.set_cssclass("GB_Login");
            this.div_successUpdatePW.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_upadtePW.form
            obj = new Layout("default","",0,0,this.div_upadtePW.form,function(p){});
            this.div_upadtePW.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_successUpdatePW.form
            obj = new Layout("default","",0,0,this.div_successUpdatePW.form,function(p){});
            this.div_successUpdatePW.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",320,470,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("gybs1113pu.xfdl", function() {
        this.fvApp = nexacro.getApplication();

        this.gybs1111pu_onload = function(obj,e)
        {
        	var objFrame = this.getOwnerFrame();
        };

        this.btn_gotoLogin_onclick = function(obj,e)
        {
        	this.close();
        	this.fvApp.mainframe.Main.formurl = "AboutAccount::gybs1010fm.xfdl";
        };
        this.div_upadtePW_btn_updatePW_onclick = function(obj,e)
        {
        	var objFrame = this.getOwnerFrame();
        	if (this.gfnIsNull(this.div_upadtePW.form.edt_PW.value) || this.gfnIsNull(this.div_upadtePW.form.edt_PWCK.value)) {
        		this.gfnAlert("msg.err.enter.alldata", "", "msg.err.enter.alldata", "fnMsgCallback");
        		return;
        	}
        	else if (this.div_upadtePW.form.edt_PW.value != this.div_upadtePW.form.edt_PWCK.value) {
        		this.gfnAlert("msg.err.wrong.password", "", "msg.err.wrong.password", "fnMsgCallback");
        		return;
        	}
        	else {
        		var paramID = objFrame.param_ID;

        		var strSvcUrl = "p014/updatePW.do";
        		var inData    = "";
        		var outData   = "";
        		var strArg    = "paramPW=" + this.div_upadtePW.form.edt_PW.value + " paramID=" + paramID;

        		this.gfnTransaction("updatePW", strSvcUrl, inData, outData, strArg, "fnCallback", true);
        	}
        };

        this.fnCallback = function(svcId, errCd, errMsg) {
        	if (svcId == "updatePW") {
        		this.div_upadtePW.visible = false;
        		this.div_successUpdatePW.visible = true;
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.gybs1111pu_onload,this);
            this.div_upadtePW.form.btn_updatePW.addEventHandler("onclick",this.div_upadtePW_btn_updatePW_onclick,this);
            this.div_successUpdatePW.form.btn_gotoLogin.addEventHandler("onclick",this.btn_gotoLogin_onclick,this);
        };
        this.loadIncludeScript("gybs1113pu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
