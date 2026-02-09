(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("gybs3211fm");
            this.set_titletext("헬스장 승인 대기");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","0","0","50%","50%",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_visible("false");
            obj.set_background("#ffe5fe");
            this.addChild(obj.name, obj);

            obj = new Div("div_successMachine","Static00:-265","Static00:-350","530","700",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#efefef");
            obj.set_border("1px solid #000000");
            obj.set_borderRadius("20px");
            obj.set_boxShadow("0px 0px 15px 0px rgba(0,0,0,0.41)");
            obj.set_visible("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_background","10","10",null,null,"10","10",null,null,null,null,this.div_successMachine.form);
            obj.set_taborder("0");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px");
            obj.set_text("");
            this.div_successMachine.addChild(obj.name, obj);

            obj = new Button("btn_gotoLogin",null,null,"140","50","193","40",null,null,null,null,this.div_successMachine.form);
            obj.set_taborder("1");
            obj.set_text("로그인 화면으로");
            obj.set_borderRadius("10px");
            obj.set_visible("true");
            obj.set_enable("true");
            obj.set_cssclass("GB_Login");
            obj.set_font("normal 600 13pt/normal \"Arial\"");
            this.div_successMachine.addChild(obj.name, obj);

            obj = new ImageViewer("img_success","190","80","150","150",null,null,null,null,null,null,this.div_successMachine.form);
            obj.set_taborder("2");
            obj.set_stretch("fixaspectratio");
            obj.set_image("url(\'imagerc::form/wait.png\')");
            obj.set_background("transparent");
            obj.set_border("0px none");
            this.div_successMachine.addChild(obj.name, obj);

            obj = new Static("sta_text1","10","256",null,"130","10",null,null,null,null,null,this.div_successMachine.form);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_textAlign("center");
            obj.set_font("normal 600 14pt/normal \"맑은 고딕\"");
            obj.set_color("#000000");
            this.div_successMachine.addChild(obj.name, obj);

            obj = new Static("sta_text2","10","sta_text1:5",null,"198","10",null,null,null,null,null,this.div_successMachine.form);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 500 11pt/normal \"맑은 고딕\"");
            obj.set_color("#000000");
            this.div_successMachine.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_successMachine.form
            obj = new Layout("default","",0,0,this.div_successMachine.form,function(p){});
            this.div_successMachine.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("gybs3211fm.xfdl", function() {
        this.fvApp = nexacro.getApplication();
        this.fvGymName = "";

        this.gybs3211fm_onload = function(obj,e)
        {
        	var strSvcUrl = "p014/getGymName.do";
        	var inData    = "";
        	var outData   = "";
        	var strArg    = "paramCode=" + this.fvApp.gds_accountInfo.getColumn(0, "GYM_CODE");

        	this.gfnTransaction("getGymName", strSvcUrl, inData, outData, strArg, "fnCallback", true);
        };

        this.fnCallback = function(svcId, errCd, errMsg) {
        	if (svcId == "getGymName") {
        		this.div_successMachine.form.sta_text1.text = "[" + this.fvGymName + "]의\n\n등록 신청이 정상적으로 접수되어,\n\n운영팀에서 내용을 신중하게 검토하고 있습니다.";
        		this.div_successMachine.form.sta_text2.text = "이 과정은 관리자님의 헬스장이 잠재 회원들에게\n\n가장 정확하고 매력적인 모습으로 소개될 수 있도록 돕기 위함입니다.\n\n\n승인이 완료되면 즉시 모든 관리자 기능을 이용하실 수 있습니다.\n\n저희와 함께해주셔서 진심으로 감사합니다.";
        	}
        }

        this.div_successMachine_btn_gotoLogin_onclick = function(obj,e)
        {
        	this.fvApp.mainframe.Main.formurl = "AboutAccount::gybs1010fm.xfdl";
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.gybs3211fm_onload,this);
            this.div_successMachine.form.sta_background.addEventHandler("onclick",this.div_machine_sta_background_onclick,this);
            this.div_successMachine.form.btn_gotoLogin.addEventHandler("onclick",this.div_successMachine_btn_gotoLogin_onclick,this);
        };
        this.loadIncludeScript("gybs3211fm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
