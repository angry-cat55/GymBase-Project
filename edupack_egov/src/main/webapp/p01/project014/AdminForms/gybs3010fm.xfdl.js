(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Admin_MainFrame");
            this.set_titletext("메인 화면");
            if (Form == this.constructor)
            {
                this._setFormPosition(1600,1000);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_marketCountsInfo", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "PENDING_COUNT","type" : "STRING","size" : "256"},{"id" : "SALE_COUNT","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_tempInfo", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "PW","type" : "STRING","size" : "256"},{"id" : "NAME","type" : "STRING","size" : "256"},{"id" : "PHONE_NO","type" : "STRING","size" : "256"},{"id" : "PROFILE_PATH","type" : "STRING","size" : "256"}]},"Rows" : [{}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUser", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "IMAGE_ID","type" : "STRING","size" : "256"},{"id" : "IMAGE_NAME","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog00", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0","50%","50%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div_main","Static00:-720","Static00:-405","1440","810",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#efefef");
            obj.set_border("1px solid #000000");
            obj.set_borderRadius("20px");
            obj.set_boxShadow("inset 0px 0px 10px 0px rgba(0,0,0,0.25)");
            this.addChild(obj.name, obj);

            obj = new Div("div_top","0","0",null,"90","0",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #d4d4d4");
            obj.set_boxShadow("0px 0px 10px 0px rgba(0,0,0,0.25)");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_logout",null,"21","140",null,"15","19",null,null,null,null,this.div_main.form.div_top.form);
            obj.set_taborder("0");
            obj.set_text("로그아웃");
            obj.set_padding("0px 0px 0px 40px");
            obj.set_cssclass("GB_Button");
            this.div_main.form.div_top.addChild(obj.name, obj);

            obj = new ImageViewer("img_logo","20","16","238","58",null,null,null,null,null,null,this.div_main.form.div_top.form);
            obj.set_taborder("1");
            obj.set_image("url(\'imagerc::form/Logo_r.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_background("transparent");
            obj.set_border("0px none");
            this.div_main.form.div_top.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","btn_logout:-128","btn_logout:-41","35","35",null,null,null,null,null,null,this.div_main.form.div_top.form);
            obj.set_taborder("2");
            obj.set_image("url(\'imagerc::form/logout.png\')");
            obj.set_background("transparent");
            obj.set_border("0px none");
            obj.set_stretch("fixaspectratio");
            this.div_main.form.div_top.addChild(obj.name, obj);

            obj = new Static("sta_name",null,"21","100","48","btn_logout:0",null,null,null,null,null,this.div_main.form.div_top.form);
            obj.set_taborder("4");
            obj.set_textAlign("left");
            obj.set_padding("5px 10px");
            obj.set_wordWrap("english");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 600 13pt/normal \"맑은 고딕\"");
            obj.set_text("default");
            obj.set_color("#000000");
            this.div_main.form.div_top.addChild(obj.name, obj);

            obj = new ImageViewer("img_profile",null,null,"40","40","sta_name:0","23",null,null,null,null,this.div_main.form.div_top.form);
            obj.set_taborder("3");
            obj.set_background("transparent");
            obj.set_border("1px solid #000000");
            obj.set_image("url(\'imagerc::form/profileIcon.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_borderRadius("24px");
            this.div_main.form.div_top.addChild(obj.name, obj);

            obj = new Div("div_notice","10",null,"280","150",null,"10",null,null,null,null,this.div_main.form);
            obj.set_taborder("2");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #d4d4d4");
            obj.set_borderRadius("10px");
            obj.set_text("");
            obj.set_boxShadow("0px 0px 5px 0px rgba(0,0,0,0.25)");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_pendingUserCount","0","37",null,"23","0",null,null,null,null,null,this.div_main.form.div_notice.form);
            obj.set_taborder("0");
            obj.set_text("처리 대기 정기권 건수 : N개");
            obj.set_font("normal 600 13pt/normal \"맑은 고딕\"");
            obj.set_textAlign("center");
            obj.set_color("#000000");
            this.div_main.form.div_notice.addChild(obj.name, obj);

            obj = new Static("sta_saledMarketCount","0","88",null,"23","0",null,null,null,null,null,this.div_main.form.div_notice.form);
            obj.set_taborder("1");
            obj.set_text("판매 중인 정기권 수 : N개");
            obj.set_font("normal 600 13pt/normal \"맑은 고딕\"");
            obj.set_textAlign("center");
            obj.set_color("#000000");
            this.div_main.form.div_notice.addChild(obj.name, obj);

            obj = new Div("div_menu","10","div_top:10","280",null,null,"div_notice:10",null,null,null,null,this.div_main.form);
            obj.set_taborder("1");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #d4d4d4");
            obj.set_borderRadius("10px");
            obj.set_boxShadow("0px 0px 5px 0px rgba(0,0,0,0.25)");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_manageGymInfo","65","235","150","70",null,null,null,null,null,null,this.div_main.form.div_menu.form);
            obj.set_taborder("0");
            obj.set_text("헬스장 정보 관리");
            obj.set_cssclass("GB_Button");
            this.div_main.form.div_menu.addChild(obj.name, obj);

            obj = new Button("btn_manageMembership","65","btn_manageGymInfo:80","150","70",null,null,null,null,null,null,this.div_main.form.div_menu.form);
            obj.set_taborder("1");
            obj.set_text("정기권 양도 관리");
            obj.set_cssclass("GB_Button");
            this.div_main.form.div_menu.addChild(obj.name, obj);

            obj = new Button("btn_dashBoard","65",null,"150","70",null,"381",null,null,null,null,this.div_main.form.div_menu.form);
            obj.set_taborder("2");
            obj.set_text("대시보드");
            obj.set_cssclass("GB_Button");
            this.div_main.form.div_menu.addChild(obj.name, obj);

            obj = new Div("div_work","div_menu:10","div_top:10",null,null,"10","10",null,null,null,null,this.div_main.form);
            obj.set_taborder("3");
            obj.set_url("AdminForms::gybs3011fm.xfdl");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #d4d4d4");
            obj.set_borderRadius("10px");
            obj.set_text("");
            obj.set_boxShadow("0px 0px 5px 0px rgba(0,0,0,0.25)");
            this.div_main.addChild(obj.name, obj);

            obj = new Div("pdiv_accountInfo",null,"div_main:-728","242","432","div_main:-1310",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("#ffffff");
            obj.set_border("1px solid gray");
            obj.set_borderRadius("5px");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_names","20","245","120","20",null,null,null,null,null,null,this.pdiv_accountInfo.form);
            obj.set_taborder("0");
            obj.set_text("이름");
            obj.set_font("normal 600 11pt/normal \"맑은 고딕\"");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_color("#000000");
            this.pdiv_accountInfo.addChild(obj.name, obj);

            obj = new Edit("edt_name","20","270","200","30",null,null,null,null,null,null,this.pdiv_accountInfo.form);
            obj.set_taborder("1");
            obj.set_borderRadius("5px");
            obj.set_border("1px solid #d4d4d4");
            obj.set_enable("false");
            obj.set_padding("0px 10px");
            obj.set_textAlign("left");
            obj.set_color("#000000");
            obj.set_font("normal 10pt/normal \"맑은 고딕\"");
            obj.set_letterSpacing("1px");
            this.pdiv_accountInfo.addChild(obj.name, obj);

            obj = new ImageViewer("img_profile","85","15","70","70",null,null,null,null,null,null,this.pdiv_accountInfo.form);
            obj.set_taborder("2");
            obj.set_background("transparent");
            obj.set_image("url(\'imagerc::form/profileIcon.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_borderRadius("500px");
            obj.set_border("1px solid black");
            obj.set_text("");
            this.pdiv_accountInfo.addChild(obj.name, obj);

            obj = new Static("sta_IDs","20","115","120","20",null,null,null,null,null,null,this.pdiv_accountInfo.form);
            obj.set_taborder("3");
            obj.set_text("아이디");
            obj.set_font("normal 600 11pt/normal \"맑은 고딕\"");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_color("#000000");
            this.pdiv_accountInfo.addChild(obj.name, obj);

            obj = new Edit("edt_ID","20","140","200","30",null,null,null,null,null,null,this.pdiv_accountInfo.form);
            obj.set_taborder("4");
            obj.set_borderRadius("5px");
            obj.set_border("1px solid #d4d4d4");
            obj.set_enable("false");
            obj.set_padding("0px 10px");
            obj.set_textAlign("left");
            obj.set_color("#000000");
            obj.set_font("normal 10pt/normal \"맑은 고딕\"");
            obj.set_letterSpacing("1px");
            obj.set_tooltiptype("hover,mouseleave");
            obj.set_tooltiptext("아이디는 변경할 수 없습니다.");
            this.pdiv_accountInfo.addChild(obj.name, obj);

            obj = new Static("sta_PWs","20","180","120","20",null,null,null,null,null,null,this.pdiv_accountInfo.form);
            obj.set_taborder("5");
            obj.set_text("비밀번호");
            obj.set_font("normal 600 11pt/normal \"맑은 고딕\"");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_color("#000000");
            this.pdiv_accountInfo.addChild(obj.name, obj);

            obj = new Edit("edt_PW","20","205","200","30",null,null,null,null,null,null,this.pdiv_accountInfo.form);
            obj.set_taborder("6");
            obj.set_borderRadius("5px");
            obj.set_border("1px solid #d4d4d4");
            obj.set_enable("false");
            obj.set_padding("0px 10px");
            obj.set_textAlign("left");
            obj.set_color("#000000");
            obj.set_font("normal 10pt/normal \"맑은 고딕\"");
            obj.set_password("true");
            obj.set_letterSpacing("1px");
            this.pdiv_accountInfo.addChild(obj.name, obj);

            obj = new Static("sta_phoneNos","20","310","120","20",null,null,null,null,null,null,this.pdiv_accountInfo.form);
            obj.set_taborder("7");
            obj.set_text("전화번호");
            obj.set_font("normal 600 11pt/normal \"맑은 고딕\"");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_color("#000000");
            this.pdiv_accountInfo.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,null,"60","30","91","15",null,null,null,null,this.pdiv_accountInfo.form);
            obj.set_taborder("8");
            obj.set_text("취소");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            obj.set_borderRadius("10px");
            obj.set_font("normal 600 10pt/normal \"맑은 고딕\"");
            obj.set_visible("false");
            obj.set_enable("false");
            this.pdiv_accountInfo.addChild(obj.name, obj);

            obj = new Button("btn_saveInfo",null,"385","60","30","21",null,null,null,null,null,this.pdiv_accountInfo.form);
            obj.set_taborder("9");
            obj.set_text("저장");
            obj.set_background("#000000");
            obj.set_color("#ffffff");
            obj.set_borderRadius("10px");
            obj.set_font("normal 600 10pt/normal \"맑은 고딕\"");
            obj.set_visible("false");
            obj.set_enable("false");
            this.pdiv_accountInfo.addChild(obj.name, obj);

            obj = new Button("btn_rewrite",null,"385","100","30","20",null,null,null,null,null,this.pdiv_accountInfo.form);
            obj.set_taborder("10");
            obj.set_text("수정");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            obj.set_borderRadius("10px");
            obj.set_edge("");
            obj.set_font("normal 600 10pt/normal \"맑은 고딕\"");
            obj.set_padding("0px 0px 0px 25px");
            this.pdiv_accountInfo.addChild(obj.name, obj);

            obj = new ImageViewer("img_rewrite",null,"388","25","25","80",null,null,null,null,null,this.pdiv_accountInfo.form);
            obj.set_taborder("11");
            obj.set_border("0px none");
            obj.set_image("url(\'imagerc::form/rewrite.png\')");
            obj.set_stretch("fixaspectratio");
            this.pdiv_accountInfo.addChild(obj.name, obj);

            obj = new Button("btn_showPW","180","205","30","30",null,null,null,null,null,null,this.pdiv_accountInfo.form);
            obj.set_taborder("12");
            obj.set_cssclass("rememberPW");
            obj.set_text("");
            obj.set_enable("false");
            obj.set_visible("false");
            this.pdiv_accountInfo.addChild(obj.name, obj);

            obj = new MaskEdit("edt_phoneNo","20","335","200","30",null,null,null,null,null,null,this.pdiv_accountInfo.form);
            obj.set_taborder("13");
            obj.set_letterSpacing("2px");
            obj.set_border("1px solid #d4d4d4");
            obj.set_borderRadius("5px");
            obj.set_color("#000000");
            obj.set_font("normal 10pt/normal \"맑은 고딕\"");
            obj.set_padding("0px 10px");
            obj.set_textAlign("left");
            obj.set_enable("false");
            obj.set_format("###-####-####");
            obj.set_type("string");
            obj.set_trimtype("both");
            this.pdiv_accountInfo.addChild(obj.name, obj);

            obj = new Button("btn_changeProfile","133","60","25","25",null,null,null,null,null,null,this.pdiv_accountInfo.form);
            obj.set_taborder("14");
            obj.set_background("url(\'imagerc::form/editProfile.png\') no-repeat right center /contain #ffffff");
            obj.set_border("0px none");
            obj.set_borderRadius("20px");
            obj.set_enable("false");
            this.pdiv_accountInfo.addChild(obj.name, obj);

            obj = new ImageViewer("img_cancel",null,"5","30","30","5",null,null,null,null,null,this.pdiv_accountInfo.form);
            obj.set_taborder("15");
            obj.set_background("transparent");
            obj.set_border("0px none");
            obj.set_image("url(\'imagerc::form/cancel.png\')");
            obj.set_stretch("fixaspectratio");
            this.pdiv_accountInfo.addChild(obj.name, obj);

            obj = new Static("sta_defaultProfile","60","img_profile:3","120","20",null,null,null,null,null,null,this.pdiv_accountInfo.form);
            obj.set_taborder("16");
            obj.set_text("기본 프로필로 변경");
            obj.set_color("#000cac");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_font("normal 8pt/normal \"맑은 고딕\"");
            this.pdiv_accountInfo.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_main.form.div_top.form
            obj = new Layout("default","",0,0,this.div_main.form.div_top.form,function(p){});
            this.div_main.form.div_top.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_main.form.div_notice.form
            obj = new Layout("default","",0,0,this.div_main.form.div_notice.form,function(p){});
            this.div_main.form.div_notice.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_main.form.div_menu.form
            obj = new Layout("default","",0,0,this.div_main.form.div_menu.form,function(p){});
            this.div_main.form.div_menu.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_main.form.div_work.form
            obj = new Layout("default","",0,0,this.div_main.form.div_work.form,function(p){});
            this.div_main.form.div_work.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_main.form
            obj = new Layout("default","",0,0,this.div_main.form,function(p){});
            this.div_main.form.addLayout(obj.name, obj);

            //-- Default Layout : this.pdiv_accountInfo.form
            obj = new Layout("default","",0,0,this.pdiv_accountInfo.form,function(p){});
            this.pdiv_accountInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1600,1000,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_main.form.div_top.form.sta_name","text","gds_accountInfo","NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_main.form.div_top.form.img_profile","image","gds_accountInfo","PROFILE_PATH");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","AdminForms::gybs3011fm.xfdl");
        };
        
        // User Script
        this.registerScript("gybs3010fm.xfdl", function() {
        this.fvApp = nexacro.getApplication();

        this.countDown = 1000; // 1초마다 버튼 숫자 변경
        this.refresh = 15;
        this.sUploadUrl = this.gfnGetServerUrl() + "upload/p01/p014/";

        this.div_main_div_top_btn_logout_onclick = function(obj,e)
        {
        	this.fvApp.gds_accountInfo.clearData();
        	this.fvApp.mainframe.Main.formurl = "AboutAccount::gybs1010fm.xfdl";
        };

        this.div_main_div_menu_btn_dashBoard_onclick = function(obj,e)
        {
        	this.div_main.form.div_work.url = "AdminForms::gybs3011fm.xfdl";
        };

        this.div_main_div_menu_btn_manageGymInfo_onclick = function(obj,e)
        {
        	this.div_main.form.div_work.url = "AdminForms::gybs3012fm.xfdl";
        };

        this.div_main_div_menu_btn_manageMembership_onclick = function(obj,e)
        {
        	this.div_main.form.div_work.url = "AdminForms::gybs3013fm.xfdl";
        };

        this.Admin_MainFrame_onload = function(obj,e)
        {
        	this.fnGetDefaultInfo();
        	this.setTimer(0, this.countDown);
        	this.resetCount();
        };

        this.resetCount = function ()
        {
        	var strSvcUrl = "p014/getMarketCountsInfo.do";
        	var inData    = "";
        	var outData   = "ds_marketCountsInfo=ds_marketCountsInfo";
        	var strArg    = "paramCode=" + this.fvApp.gds_accountInfo.getColumn(0, "GYM_CODE");

        	this.gfnTransaction("getMarketCountsInfo", strSvcUrl, inData, outData, strArg, "fnCallback", true);
        };

        this.fnCallback = function(svcId, errCd, errMsg) {
        	if (svcId == "getMarketCountsInfo") {
        		this.div_main.form.div_notice.form.sta_pendingUserCount.text = "처리 대기 정기권 건수 : " + this.ds_marketCountsInfo.getColumn(0, "PENDING_COUNT") + "건";
        		this.div_main.form.div_notice.form.sta_saledMarketCount.text = "판매 중인 정기권 수 : " + this.ds_marketCountsInfo.getColumn(0, "SALE_COUNT") + "개";
        	}
        }
        this.Admin_MainFrame_ontimer = function(obj,e)
        {
        	if (e.timerid == 0) { // 1초가 지났을 경우
        		if (this.refresh == 0) { // 카운트가 0일 경우 새로고침
        			this.refresh = 15;
        			trace("좌측 하단 정보 새로고침 완료");
        			this.resetCount();
        			// div_work 화면이 대시보드일 경우, 대시보드의 정보도 새로고침 (대시보드 화면의 초기화 함수 호출)
        			if(this.div_main.form.div_work.url == "AdminForms::gybs3011fm.xfdl") {
        				this.div_main.form.div_work.form.fnResetDashBoardInfo();
        			}
        		}
        		else { // 카운트다운
        			this.refresh -= 1;
        		}
        		this.setTimer(0, this.countDown);
        	}
        };
        this.Common_onclick = function(obj,e)
        {
        //	this.pdiv_accountInfo.trackPopupByComponent(this.div_main.form.div_top.form.img_profile, -30, 49);
        	this.pdiv_accountInfo.visible = true;
        };

        this.Common1_onclick = function(obj,e)
        {
        	this.fnEditActivate();
        };

        this.pdiv_accountInfo_btn_cancel_onclick = function(obj,e)
        {
        	this.fnGetDefaultInfo();
        	this.fnEditUnActivate();
        };

        this.pdiv_accountInfo_img_cancel_onclick = function(obj,e)
        {
        	this.pdiv_accountInfo_btn_cancel_onclick();
        	this.pdiv_accountInfo.visible = false;
        };

        this.pdiv_accountInfo_btn_saveInfo_onclick = function(obj,e)
        {
        	// 빈 항목이 있을 시 반환
        	if (this.checkNull()) {
        		return;
        	}
        	else {
        		// 새로운 정보로 전역 데이터셋, 서버에 저장
        		this.fnSetNewInfo();
        		// edit 비활성화
        		this.fnEditUnActivate();
        	}
        };

        this.checkNull = function ()
        {
        	var sPhoneNo = this.pdiv_accountInfo.form.edt_phoneNo.value;

        	if (this.gfnIsNull(this.pdiv_accountInfo.form.edt_name.value) ||
        		this.gfnIsNull(this.pdiv_accountInfo.form.edt_PW.value) ||
        		this.gfnIsNull(this.pdiv_accountInfo.form.edt_phoneNo.value)) {
        		this.gfnAlert("msg.err.enter.alldata", "", "msg.err.enter.alldata", "fnMsgCallback");
        		return true
        	}
        	else if (sPhoneNo.length < 11) {
        		this.gfnAlert("msg.err.wrong.phone", "", "msg.err.wrong.phone", "fnMsgCallback");
        		return true;
        	}
        	else return false;
        };

        this.fnSetNewInfo = function ()
        {
        	this.fvApp.gds_accountInfo.setColumn(0, "PW", this.pdiv_accountInfo.form.edt_PW.value);
        	this.fvApp.gds_accountInfo.setColumn(0, "NAME", this.pdiv_accountInfo.form.edt_name.value);
        	this.fvApp.gds_accountInfo.setColumn(0, "PHONE_NO", this.pdiv_accountInfo.form.edt_phoneNo.value);
        	this.fvApp.gds_accountInfo.setColumn(0, "PROFILE_PATH", this.pdiv_accountInfo.form.img_profile.image);

        	this.ds_tempInfo.copyData(this.fvApp.gds_accountInfo);

        	var strSvcUrl = "p014/updateAccountInfo.do";
        	var inData    = "ds_accountInfo=ds_tempInfo";
        	var outData   = "";
        	var strArg    = "";

        	this.gfnTransaction("updateAccountInfo", strSvcUrl, inData, outData, strArg, "fnCallback", true);
        };

        // 수정모드
        this.fnEditActivate = function()
        {
        	this.pdiv_accountInfo.form.btn_changeProfile.backgroun
        	this.pdiv_accountInfo.form.btn_saveInfo.visible = true;
        	this.pdiv_accountInfo.form.btn_saveInfo.enable = true;
        	this.pdiv_accountInfo.form.btn_cancel.visible = true;
        	this.pdiv_accountInfo.form.btn_cancel.enable = true;
        	this.pdiv_accountInfo.form.btn_rewrite.visible = false;
        	this.pdiv_accountInfo.form.btn_rewrite.enable = false;
        	this.pdiv_accountInfo.form.img_rewrite.visible = false;
        	this.pdiv_accountInfo.form.btn_showPW.visible = true;
        	this.pdiv_accountInfo.form.btn_showPW.enable = true;
        	this.pdiv_accountInfo.form.sta_defaultProfile.enable = true;

        	this.pdiv_accountInfo.form.edt_name.enable = true;
        	this.pdiv_accountInfo.form.edt_PW.enable = true;
        	this.pdiv_accountInfo.form.edt_phoneNo.enable = true;
        	this.pdiv_accountInfo.form.btn_changeProfile.enable = true;
        }

        // 수정모드 해제
        this.fnEditUnActivate = function ()
        {
        	this.pdiv_accountInfo.form.btn_saveInfo.visible = false;
        	this.pdiv_accountInfo.form.btn_saveInfo.enable = false;
        	this.pdiv_accountInfo.form.btn_cancel.visible = false;
        	this.pdiv_accountInfo.form.btn_cancel.enable = false;
        	this.pdiv_accountInfo.form.btn_rewrite.visible = true;
        	this.pdiv_accountInfo.form.btn_rewrite.enable = true;
        	this.pdiv_accountInfo.form.img_rewrite.visible = true;
        	this.pdiv_accountInfo.form.btn_showPW.visible = false;
        	this.pdiv_accountInfo.form.btn_showPW.enable = false;
        	this.pdiv_accountInfo.form.btn_showPW.cssclass = "rememberPW";
        	this.pdiv_accountInfo.form.sta_defaultProfile.enable = false;

        	this.pdiv_accountInfo.form.edt_name.enable = false;
        	this.pdiv_accountInfo.form.edt_PW.enable = false;
        	this.pdiv_accountInfo.form.edt_phoneNo.enable = false;
        	this.pdiv_accountInfo.form.edt_PW.password = true;
        	this.pdiv_accountInfo.form.btn_changeProfile.enable = false;
        };

        // 기존 데이터로 복구
        this.fnGetDefaultInfo = function ()
        {
        	this.pdiv_accountInfo.form.edt_ID.value = this.fvApp.gds_accountInfo.getColumn(0, "ID");
        	this.pdiv_accountInfo.form.edt_name.value = this.fvApp.gds_accountInfo.getColumn(0, "NAME");
        	this.pdiv_accountInfo.form.edt_PW.value = this.fvApp.gds_accountInfo.getColumn(0, "PW");
        	this.pdiv_accountInfo.form.edt_phoneNo.value = this.fvApp.gds_accountInfo.getColumn(0, "PHONE_NO");
        	this.pdiv_accountInfo.form.img_profile.image = this.fvApp.gds_accountInfo.getColumn(0, "PROFILE_PATH");
        };

        this.pdiv_accountInfo_btn_showPW_onclick = function(obj,e)
        {
        	var btnClass = obj.cssclass == "rememberPW" ? "rememberPW_S" : "rememberPW";
        	obj.cssclass = btnClass;
        	var showPW = (obj.cssclass == "rememberPW" ? true : false);
        	this.pdiv_accountInfo.form.edt_PW.password = showPW;
        };

        this.pdiv_accountInfo_btn_changeProfile_onclick = function(obj,e)
        {
        	this.dsUser.clearData();
        	this.FileDialog00.open("프로필 사진 선택", 1, "%DOCUMENT%");
        };

        this.FileDialog00_onclose = function(obj,e)
        {
        	var objFile = e.virtualfiles[0];
        	var sFileName = objFile.filename;

        	if (!/\.(jpe?g|png|gif)$/i.test(sFileName)) // 정규식으로 파일 유형 체크
        	{
        		this.gfnAlert("msg.err.no.img.select", "", "msg.err.no.img.select", "fnMsgCallback");
        		return;
        	}

        	this.FileUpTransfer00.clearFileList();
        	this.FileUpTransfer00.addFile(sFileName, objFile);
        	var nRow = this.dsUser.addRow();
        	this.dsUser.setColumn(nRow, "IMAGE_ID", sFileName);
        	this.dsUser.setColumn(nRow, "IMAGE_NAME", sFileName);

        	if (nexacro._Browser == "Runtime") {
        		// NRE
        		this.pdiv_accountInfo.form.img_profile.image = "URL('file://" + objFile.fullpath + "')";
        	}
        	else {
        		// NRE 아닐 때 (웹 브라우저)
        		var reader = new FileReader();
        		reader.targetForm = this;
        		reader.addEventListener("load"
        								,function() {
        									this.targetForm.pdiv_accountInfo.form.img_profile.image = this.result;
        								}
        								,false);
        		reader.readAsDataURL(objFile._handle);
        		// 파일을 base64 형태로 읽기
        	}
        	var sUrl = "SvcUrl::edu/uploadFile.do";
        	this.FileUpTransfer00.setPostData("userDir", "");
        	this.FileUpTransfer00.upload(sUrl);
        };

        this.FileUpTransfer00_onsuccess = function(obj,e)
        {
        	var objDs = e.datasets[0];
        	this.dsUser.setColumn(0,"IMAGE_ID", objDs.getColumn(0, "file_id"));

        	var sImg = this.sUploadUrl + this.dsUser.getColumn(0, "IMAGE_ID");
        	this.pdiv_accountInfo.form.img_profile.image = sImg;
        	this.ds_gymInfo.setColumn(0, "IMG_PATH", sImg);
        };

        this.pdiv_accountInfo_sta_defaultProfile_onclick = function(obj,e)
        {
        	this.pdiv_accountInfo.form.img_profile.image = "imagerc::form/profileIcon.png";
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Admin_MainFrame_onload,this);
            this.addEventHandler("ontimer",this.Admin_MainFrame_ontimer,this);
            this.div_main.form.div_top.form.btn_logout.addEventHandler("onclick",this.div_main_div_top_btn_logout_onclick,this);
            this.div_main.form.div_top.form.img_logo.addEventHandler("onclick",this.div_main_div_menu_btn_dashBoard_onclick,this);
            this.div_main.form.div_top.form.ImageViewer00.addEventHandler("onclick",this.div_main_div_top_btn_logout_onclick,this);
            this.div_main.form.div_top.form.sta_name.addEventHandler("onclick",this.Common_onclick,this);
            this.div_main.form.div_top.form.img_profile.addEventHandler("onclick",this.Common_onclick,this);
            this.div_main.form.div_menu.form.btn_manageGymInfo.addEventHandler("onclick",this.div_main_div_menu_btn_manageGymInfo_onclick,this);
            this.div_main.form.div_menu.form.btn_manageMembership.addEventHandler("onclick",this.div_main_div_menu_btn_manageMembership_onclick,this);
            this.div_main.form.div_menu.form.btn_dashBoard.addEventHandler("onclick",this.div_main_div_menu_btn_dashBoard_onclick,this);
            this.pdiv_accountInfo.form.btn_cancel.addEventHandler("onclick",this.pdiv_accountInfo_btn_cancel_onclick,this);
            this.pdiv_accountInfo.form.btn_saveInfo.addEventHandler("onclick",this.pdiv_accountInfo_btn_saveInfo_onclick,this);
            this.pdiv_accountInfo.form.btn_rewrite.addEventHandler("onclick",this.Common1_onclick,this);
            this.pdiv_accountInfo.form.img_rewrite.addEventHandler("onclick",this.Common1_onclick,this);
            this.pdiv_accountInfo.form.btn_showPW.addEventHandler("onclick",this.pdiv_accountInfo_btn_showPW_onclick,this);
            this.pdiv_accountInfo.form.btn_changeProfile.addEventHandler("onclick",this.pdiv_accountInfo_btn_changeProfile_onclick,this);
            this.pdiv_accountInfo.form.img_cancel.addEventHandler("onclick",this.pdiv_accountInfo_img_cancel_onclick,this);
            this.pdiv_accountInfo.form.sta_defaultProfile.addEventHandler("onclick",this.pdiv_accountInfo_sta_defaultProfile_onclick,this);
            this.FileDialog00.addEventHandler("onclose",this.FileDialog00_onclose,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
            this.dsUser.addEventHandler("onrowposchanged",this.dsUser_onrowposchanged,this);
        };
        this.loadIncludeScript("gybs3010fm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
