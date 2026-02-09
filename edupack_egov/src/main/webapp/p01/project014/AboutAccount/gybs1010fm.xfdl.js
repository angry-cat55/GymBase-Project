(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Login");
            this.set_titletext("로그인");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_accountInfo", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "ID","type" : "STRING","size" : "256"},{"id" : "PW","type" : "STRING","size" : "256"},{"id" : "NAME","type" : "STRING","size" : "256"},{"id" : "PHONE_NO","type" : "STRING","size" : "256"},{"id" : "ROLE_TYPE","type" : "STRING","size" : "256"},{"id" : "GYM_CODE","type" : "STRING","size" : "256"},{"id" : "PROFILE_PATH","type" : "STRING","size" : "256"},{"id" : "NOTI_COUNT","type" : "STRING","size" : "256"},{"id" : "GYM_STATUS","type" : "STRING","size" : "256"}]},"Rows" : [{}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0","50%","50%",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_visible("false");
            obj.set_background("#ffe5fe");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","Static00:-175","Static00:-250","350","500",null,null,null,null,null,null,this);
            obj.set_background("#efefef");
            obj.set_borderRadius("30px");
            obj.set_text("");
            obj.set_cssclass("loginDiv");
            obj.set_boxShadow("0px 0px 15px 0px rgba(0,0,0,0.41)");
            obj.set_tabstop("true");
            obj.set_border("2px solid #000000");
            this.addChild(obj.name, obj);

            obj = new Static("sta_background","10","10",null,null,"10","10",null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_background("#ffffff");
            obj.set_borderRadius("20px");
            obj.set_text("");
            obj.set_border("1px solid #d4d4d4");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit_ID","45","164","260","48",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_borderRadius("10px");
            obj.set_padding("0px 0px 0px 15px");
            obj.set_displaynulltext("아이디");
            obj.set_border("1px solid gray");
            obj.set_letterSpacing("1px");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new CheckBox("Ckb_RememberID","45","308","114","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("아이디 저장하기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Btn_Login","45","344","260","48",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("로그인");
            obj.set_cssclass("GB_Login");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("findIDorPW","109","410","132","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("아이디 / 비밀번호 찾기");
            obj.set_cssclass("hideBackground");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("signUp","149","findIDorPW:10","52","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("회원가입");
            obj.set_cssclass("hideBackground");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit_PW","45","235","260","48",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_password("true");
            obj.set_borderRadius("10px");
            obj.set_displaynulltext("비밀번호");
            obj.set_border("1px solid gray");
            obj.set_padding("0px 0px 0px 15px");
            obj.set_autoselect("true");
            obj.set_letterSpacing("1px");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Btn_ShowPW","Edit_PW:-40","244","30","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("rememberPW");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Sta_IncorrectID","55","Edit_ID:4","117","15",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("아이디를 입력하십시오.");
            obj.set_font("normal bold 8pt/normal \"Arial\"");
            obj.set_color("red");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Sta_IncorrectPW","55","Edit_PW:4","128","15",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("비밀번호를 입력하십시오.");
            obj.set_font("normal bold 8pt/normal \"Arial\"");
            obj.set_color("red");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new ImageViewer("img_logo","55","70",null,"70","55",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_image("url(\'imagerc::form/Logo_r.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_background("transparent");
            obj.set_border("0px none");
            obj.set_tabstop("false");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.Edit_ID","value","ds_accountInfo","ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.Edit_PW","value","ds_accountInfo","PW");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("gybs1010fm.xfdl", function() {
        this.fvApp = nexacro.getApplication();

        this.Div00_Btn_ShowPW_onclick = function(obj,e)
        {
        	var btnClass = obj.cssclass == "rememberPW" ? "rememberPW_S" : "rememberPW";
        	obj.cssclass = btnClass;
        	var showPW = (this.Div00.form.Btn_ShowPW.cssclass == "rememberPW" ? true : false);
        	this.Div00.form.Edit_PW.password = showPW;
        };

        this.Div00_Btn_Login_onclick = function(obj,e)
        {
        	// 아이디나 비밀번호 중 공백이 있을 경우 로그인 막기
        	if (this.Div00.form.Edit_ID.value == null || this.Div00.form.Edit_ID.value == "") {
        		this.Div00.form.Edit_ID.border = "2px solid red";
        		this.Div00.form.Edit_ID.setFocus();
        		this.Div00.form.Sta_IncorrectID.visible = true;
        		return;
        	}
        	else if (this.Div00.form.Edit_PW.value == null || this.Div00.form.Edit_PW.value == "") {
        		this.Div00.form.Edit_PW.border = "2px solid red";
        		this.Div00.form.Edit_PW.setFocus();
        		this.Div00.form.Sta_IncorrectPW.visible = true;
        		return;
        	}
        	// 로그인을 진행 (아이디 존재, 비밀번호 일치 확인 후 결과 fnCallback에서)
        	var strSvcUrl = "p014/login.do";
        	var inData    = "";
        	var outData   = "ds_accountInfo=ds_accountInfo";
        	var strArg    = "paramID=" + this.Div00.form.Edit_ID.value + " paramPW=" + this.Div00.form.Edit_PW.value;
        	this.gfnTransaction("login", strSvcUrl, inData, outData, strArg, "fnCallback", true);
        };

        this.Div00_Edit_ID_onkillfocus = function(obj,e)
        {
        	this.Div00.form.Edit_ID.border = "1px solid gray";
        	this.Div00.form.Sta_IncorrectID.visible = false;
        };

        this.Div00_Edit_PW_onkillfocus = function(obj,e)
        {
        	this.Div00.form.Edit_PW.border = "1px solid gray";
        	this.Div00.form.Sta_IncorrectPW.visible = false;
        };

        this.Div00_signUp_onclick = function(obj,e)
        {
        	this.fvApp.mainframe.Main.formurl = "AboutAccount::gybs1011fm.xfdl";
        };

        this.Div00_findIDorPW_onclick = function(obj,e)
        {
        	this.fvApp.mainframe.Main.formurl = "AboutAccount::gybs1012fm.xfdl";
        };

        this.fnCallback = function(svcId, errCd, errMsg) {
        	if (errCd < 0) {
        		arrArg = [errMsg];
        		this.gfnAlert("msg.server.error.msg", arrArg, "msg.server.error.msg", "fnMsgCallback");
        	}

        	if (svcId == "login")
        	{
        		if (errCd == 10110) { // 로그인 실패
        			this.gfnAlert("msg.err.login.fail", "", "msg.err.login.fail", "fnMsgCallback");
        		}
        		else if (errCd == 10111) { // 로그인 성공
        			this.fvApp.gds_accountInfo.copyData(this.ds_accountInfo);

        			// 아이디 기억하기 활성화 후 로그인 -> 로컬 스토리지에 저장
        			if (this.Div00.form.Ckb_RememberID.value == true) {
        				nexacro.setPrivateProfile("ID", this.Div00.form.Edit_ID.value);
        			}
        			else { // 아이디 기억하기 활성화 X -> 제거
        				nexacro.setPrivateProfile("ID", "");
        			}

        			// 계정 유형 확인
        			// 회원
        			if (this.fvApp.gds_accountInfo.getColumn(0, "ROLE_TYPE") == "User") {
        				this.fvApp.mainframe.Main.formurl = "UserForms::gybs2010fm.xfdl";
        			}
        			// 운영자
        			else if (this.fvApp.gds_accountInfo.getColumn(0, "ROLE_TYPE") == "SuperAdmin") {
        				this.fvApp.mainframe.Main.formurl = "SuperAdminForms::gybs5010fm.xfdl";
        			}
        			// 관리자
        			else if (this.fvApp.gds_accountInfo.getColumn(0, "ROLE_TYPE") == "Admin") {
        				switch(this.fvApp.gds_accountInfo.getColumn(0, "GYM_STATUS")) {
        				case "ACTIVE": // 승인된 헬스장 관리자
        					this.fvApp.mainframe.Main.formurl = "AdminForms::gybs3010fm.xfdl";
        					break;
        				case "PENDING": // 승인 대기 중인 헬스장 관리자
        					this.fvApp.mainframe.Main.formurl = "AdminForms::gybs3211fm.xfdl";
        					break;
        				case "REJECTED": // 등록 반려된 헬스장 관리자
        					this.fvApp.mainframe.Main.formurl = "AdminForms::gybs3212fm.xfdl";
        					break;
        				default: // 헬스장을 등록하지 않은 관리자
        					this.fvApp.mainframe.Main.formurl = "AdminForms::gybs3210fm.xfdl";
        					break;
        				}
        			}
        		}
        	}
        }

        this.Login_onload = function(obj,e)
        {
        	var userID = nexacro.getPrivateProfile("ID");
        	// 저장된 아이디 존재 확인
        	if (userID != null && userID.length > 0) {
        		this.Div00.form.Ckb_RememberID.value = true;
        		this.Div00.form.Edit_ID.value = userID;
        	}
        };

        this.Login_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13) {
        		this.Div00_Btn_Login_onclick();
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Login_onload,this);
            this.addEventHandler("onkeyup",this.Login_onkeyup,this);
            this.Div00.form.Edit_ID.addEventHandler("onchanged",this.Div00_Edit_ID_onchanged,this);
            this.Div00.form.Edit_ID.addEventHandler("onkillfocus",this.Div00_Edit_ID_onkillfocus,this);
            this.Div00.form.Btn_Login.addEventHandler("onclick",this.Div00_Btn_Login_onclick,this);
            this.Div00.form.findIDorPW.addEventHandler("onclick",this.Div00_findIDorPW_onclick,this);
            this.Div00.form.signUp.addEventHandler("onclick",this.Div00_signUp_onclick,this);
            this.Div00.form.Edit_PW.addEventHandler("onkillfocus",this.Div00_Edit_PW_onkillfocus,this);
            this.Div00.form.Btn_ShowPW.addEventHandler("onclick",this.Div00_Btn_ShowPW_onclick,this);
        };
        this.loadIncludeScript("gybs1010fm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
