(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Main");
            this.set_titletext("메인 화면");
            this.set_background("#ffffff");
            this.set_border("0px none,0px none,1px solid gray");
            this.set_visible("true");
            if (Form == this.constructor)
            {
                this._setFormPosition(1600,1000);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_accountInfo", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "ID","type" : "STRING","size" : "256"},{"id" : "PW","type" : "STRING","size" : "256"},{"id" : "NAME","type" : "STRING","size" : "256"},{"id" : "PHONE_NO","type" : "STRING","size" : "256"},{"id" : "ROLE_TYPE","type" : "STRING","size" : "256"},{"id" : "GYM_CODE","type" : "STRING","size" : "256"},{"id" : "PROFILE_PATH","type" : "STRING","size" : "256"},{"id" : "NOTI_COUNT","type" : "STRING","size" : "256"}]},"Rows" : [{}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "cnt","type" : "INT","size" : "256"},{"id" : "offset","type" : "INT","size" : "256"},{"id" : "searchTerm","type" : "STRING","size" : "256"},{"id" : "gotoMain","type" : "STRING","size" : "256"}]},"Rows" : [{"cnt" : "5","offset" : "0","gotoMain" : "1"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_notification", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "NO","type" : "STRING","size" : "256"},{"id" : "NOTI_TYPE","type" : "STRING","size" : "256"},{"id" : "TARGET_NO","type" : "STRING","size" : "256"},{"id" : "MESSAGE","type" : "STRING","size" : "256"},{"id" : "IS_READ","type" : "STRING","size" : "256"},{"id" : "REG_DATE_STRING","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_header","0","0","100%","80",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div_header");
            obj.set_background("#ffffff");
            obj.set_border("0px none,0px none,1px solid #000000");
            this.addChild(obj.name, obj);

            obj = new Button("btn_market","830","0","102","79",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("0");
            obj.set_text("MARKET");
            obj.set_cssclass("menu");
            obj.set_font("normal 600 16pt/normal \"Arial\"");
            obj.set_padding("20px 0px 0px");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_gyms","698","0","74","79",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("1");
            obj.set_text("GYMS");
            obj.set_cssclass("menu");
            obj.set_font("normal 600 16pt/normal \"Arial\"");
            obj.set_padding("20px 0px 0px");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_myGym","543","0","97","79",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("2");
            obj.set_text("MY GYM");
            obj.set_cssclass("menu");
            obj.set_font("normal 600 16pt/normal \"Arial\"");
            obj.set_padding("20px 0px 0px");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_home","410","0","75","79",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("3");
            obj.set_text("HOME");
            obj.set_cssclass("menu");
            obj.set_font("normal 600 16pt/normal \"Arial\"");
            obj.set_padding("20px 0px 0px");
            this.div_header.addChild(obj.name, obj);

            obj = new ImageViewer("img_logo","20","0","260",null,null,"1",null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_border("0px none");
            obj.set_image("url(\'imagerc::form/Logo_r.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_background("transparent");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_userName",null,"23","120","35","0",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_text("default");
            obj.set_textAlign("left");
            obj.set_font("normal 300 11pt/normal \"Arial\"");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_verticalAlign("middle");
            obj.set_color("black");
            obj.set_wordWrap("char");
            this.div_header.addChild(obj.name, obj);

            obj = new ImageViewer("img_profile",null,"23","35","35","sta_userName:0",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_border("1px solid black");
            obj.set_background("white");
            obj.set_image("url(\'imagerc::form/profileIcon.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_borderRadius("17px");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_divWorkPos","0","180","50%","10",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","sta_divWorkPos:-640","div_header:0","1280",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div_work");
            obj.set_url("UserForms::gybs2011fm.xfdl");
            obj.set_border("0px none,1px solid #000000");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdiv_notification","2000","45","340","505",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_background("#ffffff");
            obj.set_border("1px solid gray");
            obj.set_borderRadius("5px");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","0",null,"220","0",null,null,null,null,null,this.pdiv_notification.form);
            obj.set_taborder("0");
            this.pdiv_notification.addChild(obj.name, obj);

            obj = new Div("div_account","0","0",null,"220","0",null,null,null,null,null,this.pdiv_notification.form.Div00.form);
            obj.set_taborder("0");
            this.pdiv_notification.form.Div00.addChild(obj.name, obj);

            obj = new ImageViewer("img_cancel",null,"15","30","30","20",null,null,null,null,null,this.pdiv_notification.form.Div00.form.div_account.form);
            obj.set_taborder("0");
            obj.set_background("transparent");
            obj.set_border("0px none");
            obj.set_image("url(\'imagerc::form/cancel.png\')");
            obj.set_stretch("fixaspectratio");
            this.pdiv_notification.form.Div00.form.div_account.addChild(obj.name, obj);

            obj = new Button("btn_logout",null,null,"170","50","0","2",null,null,null,null,this.pdiv_notification.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("로그아웃");
            obj.set_font("normal 600 10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_cssclass("account");
            obj.set_border("1px solid #c2c2c2,0px none,1px solid #c2c2c2,1px solid #c2c2c2");
            this.pdiv_notification.form.Div00.addChild(obj.name, obj);

            obj = new Button("btn_myPage","0",null,"170","50",null,"2",null,null,null,null,this.pdiv_notification.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("마이페이지");
            obj.set_font("normal 600 10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_cssclass("account");
            obj.set_border("1px solid #c2c2c2,1px solid #c2c2c2,1px solid #c2c2c2,0px none");
            this.pdiv_notification.form.Div00.addChild(obj.name, obj);

            obj = new Static("sta_userName","0","119",null,"30","0",null,null,null,null,null,this.pdiv_notification.form.Div00.form);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 500 16pt/normal \"Arial\"");
            obj.set_color("black");
            this.pdiv_notification.form.Div00.addChild(obj.name, obj);

            obj = new ImageViewer("img_profile","131","22","80","80",null,null,null,null,null,null,this.pdiv_notification.form.Div00.form);
            obj.set_taborder("4");
            obj.set_background("white");
            obj.set_image("url(\'imagerc::form/profileIcon.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_borderRadius("40px");
            obj.set_border("1px solid black");
            this.pdiv_notification.form.Div00.addChild(obj.name, obj);

            obj = new Grid("grid_notiList","10","Div00:10",null,null,"10","10",null,null,null,null,this.pdiv_notification.form);
            obj.set_taborder("1");
            obj.set_border("1px solid #d4d4d4");
            obj.set_borderRadius("5px");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_notification");
            obj.set_autosizingtype("row");
            obj.set_extendsizetype("row");
            obj.set_scrollbartype("autoindicator autoindicator");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"203\"/><Column size=\"94\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"25\"/></Rows><Band id=\"head\"><Cell colspan=\"3\" border=\"1px solid #cacaca\" background=\"#efefef\" color=\"#000000\" text=\"알림 내용\"/></Band><Band id=\"body\"><Cell color=\"#000000\" border=\"1px solid #d4d4d4,0px none,1px solid #d4d4d4,1px solid #d4d4d4\" textAlign=\"center\" displaytype=\"imagecontrol\" imagestretch=\"fixaspectratio\" expr=\"(IS_READ == &apos;N&apos;) ? &quot;imagerc::form/unreadNoti.png&quot; : &quot;&quot;\" text=\"expr:(IS_READ == &apos;N&apos;) ? &quot;imagerc::form/unreadNoti.png&quot; : &quot;&quot;\" padding=\"0px 6px\"/><Cell col=\"1\" color=\"#000000\" wordWrap=\"english\" padding=\"8px 4px\" expr=\"comp.parent.parent.parent.fnSetMessage(NOTI_TYPE)\" border=\"1px solid #d4d4d4,0px none\" font=\"normal 11px/normal &quot;Malgun Gothic&quot;\" verticalAlign=\"middle\" autosizerow=\"default\" autosizecol=\"default\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:REG_DATE_STRING\" color=\"#000000\" padding=\"8px 0px\" textAlign=\"center\" border=\"1px solid #d4d4d4,1px solid #d4d4d4,1px solid #d4d4d4,0px none\" font=\"normal 12px/normal &quot;Malgun Gothic&quot;\" verticalAlign=\"middle\" autosizerow=\"default\" autosizecol=\"default\"/></Band></Format></Formats>");
            this.pdiv_notification.addChild(obj.name, obj);

            obj = new PopupDiv("pdiv_account","1630","44","340","220",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_background("#ffffff");
            obj.set_border("1px solid gray");
            obj.set_borderRadius("5px");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_bell",null,"15","30","30","20",null,null,null,null,null,this.pdiv_account.form);
            obj.set_taborder("0");
            obj.set_background("transparent");
            obj.set_border("0px none");
            obj.set_image("url(\'imagerc::form/bellIcon2.png\')");
            obj.set_stretch("fixaspectratio");
            this.pdiv_account.addChild(obj.name, obj);

            obj = new Static("staPushCount",null,"7","20","20","12",null,null,null,null,null,this.pdiv_account.form);
            obj.set_taborder("1");
            obj.set_text("0");
            obj.set_cssclass("sta_TF_PushCount");
            obj.set_font("normal 600 11pt/normal \"Malgun Gothic\"");
            obj.set_borderRadius("10px");
            obj.set_visible("false");
            this.pdiv_account.addChild(obj.name, obj);

            obj = new Static("sta_userName","0","119",null,"30","0",null,null,null,null,null,this.pdiv_account.form);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 500 16pt/normal \"Arial\"");
            obj.set_color("black");
            this.pdiv_account.addChild(obj.name, obj);

            obj = new Button("btn_logout",null,null,"170","50","0","0",null,null,null,null,this.pdiv_account.form);
            obj.set_taborder("3");
            obj.set_text("로그아웃");
            obj.set_font("normal 600 10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_cssclass("account");
            obj.set_border("1px solid #c2c2c2,0px none,0px none,1px solid #c2c2c2");
            this.pdiv_account.addChild(obj.name, obj);

            obj = new Button("btn_myPage","0",null,"170","50",null,"0",null,null,null,null,this.pdiv_account.form);
            obj.set_taborder("4");
            obj.set_text("마이페이지");
            obj.set_font("normal 600 10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_cssclass("account");
            obj.set_border("1px solid #c2c2c2,1px solid #c2c2c2,0px none,0px none");
            this.pdiv_account.addChild(obj.name, obj);

            obj = new ImageViewer("img_profile","131","22","80","80",null,null,null,null,null,null,this.pdiv_account.form);
            obj.set_taborder("5");
            obj.set_background("white");
            obj.set_image("url(\'imagerc::form/profileIcon.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_borderRadius("40px");
            obj.set_border("1px solid black");
            this.pdiv_account.addChild(obj.name, obj);

            obj = new Div("div_bottom","0","div_work:0",null,"120","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_background("#222426");
            this.addChild(obj.name, obj);

            obj = new Static("sta_copyright2","50","50","500","20",null,null,null,null,null,null,this.div_bottom.form);
            obj.set_taborder("1");
            obj.set_text("고객센터: 010-9551-6850 | E-mail: applewlghks321@gmail.com");
            obj.set_color("#d4d4d4");
            obj.set_font("normal 10pt/normal \"맑은 고딕\"");
            this.div_bottom.addChild(obj.name, obj);

            obj = new Static("sta_copyright1","50",null,"500","20",null,"sta_copyright2:3",null,null,null,null,this.div_bottom.form);
            obj.set_taborder("0");
            obj.set_text("㈜GYMBASE | 대표이사: 유지환 | 주소: 서울특별시 강남구 봉은사로 617 3F");
            obj.set_color("#d4d4d4");
            obj.set_font("normal 10pt/normal \"맑은 고딕\"");
            this.div_bottom.addChild(obj.name, obj);

            obj = new Static("sta_copyright3","50","sta_copyright2:3","500","20",null,null,null,null,null,null,this.div_bottom.form);
            obj.set_taborder("2");
            obj.set_text("COPYRIGHT © GYMBASE Corp. ALL RIGHTS RESERVED.");
            obj.set_color("#d4d4d4");
            obj.set_font("normal 10pt/normal \"맑은 고딕\"");
            this.div_bottom.addChild(obj.name, obj);

            obj = new ImageViewer("img_instagram",null,"21","32","32","50",null,null,null,null,null,this.div_bottom.form);
            obj.set_taborder("4");
            obj.set_stretch("fixaspectratio");
            obj.set_background("transparent");
            obj.set_border("0px none");
            obj.set_image("url(\'imagerc::form/insta.png\')");
            this.div_bottom.addChild(obj.name, obj);

            obj = new ImageViewer("img_youbute",null,"23","40","40","img_instagram:25",null,null,null,null,null,this.div_bottom.form);
            obj.set_taborder("3");
            obj.set_stretch("fixaspectratio");
            obj.set_background("transparent");
            obj.set_border("0px none");
            obj.set_image("url(\'imagerc::form/youtube.png\')");
            this.div_bottom.addChild(obj.name, obj);

            obj = new ImageViewer("img_tobe",null,"21","32","32","img_youbute:25",null,null,null,null,null,this.div_bottom.form);
            obj.set_taborder("5");
            obj.set_stretch("fixaspectratio");
            obj.set_background("transparent");
            obj.set_border("0px none");
            obj.set_image("url(\'imagerc::form/tobe.png\')");
            this.div_bottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_header.form
            obj = new Layout("default","",0,0,this.div_header.form,function(p){});
            this.div_header.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_work.form
            obj = new Layout("default","",0,0,this.div_work.form,function(p){});
            this.div_work.form.addLayout(obj.name, obj);

            //-- Default Layout : this.pdiv_notification.form.Div00.form.div_account.form
            obj = new Layout("default","",0,0,this.pdiv_notification.form.Div00.form.div_account.form,function(p){});
            this.pdiv_notification.form.Div00.form.div_account.form.addLayout(obj.name, obj);

            //-- Default Layout : this.pdiv_notification.form.Div00.form
            obj = new Layout("default","",0,0,this.pdiv_notification.form.Div00.form,function(p){});
            this.pdiv_notification.form.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.pdiv_notification.form
            obj = new Layout("default","",0,0,this.pdiv_notification.form,function(p){});
            this.pdiv_notification.form.addLayout(obj.name, obj);

            //-- Default Layout : this.pdiv_account.form
            obj = new Layout("default","",0,0,this.pdiv_account.form,function(p){});
            this.pdiv_account.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_bottom.form
            obj = new Layout("default","",0,0,this.div_bottom.form,function(p){});
            this.div_bottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1600,1000,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","pdiv_account.form.staPushCount","text","gds_accountInfo","NOTI_COUNT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","UserForms::gybs2011fm.xfdl");
        };
        
        // User Script
        this.registerScript("gybs2010fm.xfdl", function() {
        this.fvApp = nexacro.getApplication();
        this.notiCnt = 0;

        this.Main_onsize = function(obj,e)
        {
        	obj.resetScroll();
        	this.fvApp.gds_search.copyData(this.ds_search);
        };

        this.fnMainPageOnLoad = function(height)
        {
        	this.div_work.height = height;
        	this.div_work.form.resetScroll();
        	this.resetScroll();
        };
        this.Profile_onclick = function(obj,e)
        {
        	this.pdiv_account.trackPopupByComponent(this.div_header.form.sta_userName, -250, 45);
        };

        this.pdiv_account_onkillfocus = function(obj,e)
        {
        	this.pdiv_account.closePopup();
        };

        this.Main_onload = function(obj,e)
        {
        	// 글로벌 데이터셋 정보 복사해오기
        	this.ds_accountInfo.copyData(this.fvApp.gds_accountInfo);

        	// 이름 설정
        	this.div_header.form.sta_userName.text = this.ds_accountInfo.getColumn(0, "NAME");

        	// 프로필 사진 설정
        	// 1. 사진이 없다면 => 기본 프로필로 설정
        	if (this.ds_accountInfo.getColumn(0, "PROFILE_PATH") == null || this.ds_accountInfo.getColumn(0, "PROFILE_PATH") == "") {
        		this.div_header.form.img_profile.image = "imagerc::profileIcon.png";
        	}
        	// 2. 사진이 있다면 => 사용자 사진으로 설정
        	else {
        		var nPath = this.ds_accountInfo.getColumn(0, "PROFILE_PATH");
        		this.div_header.form.img_profile.image = nPath;
        	}
        };

        this.pdiv_account_onpopup = function(obj,e)
        {
        	// 계정 정보 팝업 시 프로필과 이름 동기화
        	this.pdiv_account.form.img_profile.image = this.div_header.form.img_profile.image;
        	this.pdiv_account.form.sta_userName.text = this.div_header.form.sta_userName.text;
        	// 열때마다 계정 미확인 알림 개수 가져오기
        	var strSvcUrl = "p014/getNotificationCount.do";
        	var inData    = "";
        	var outData   = "";
        	var strArg    = "paramID=" + this.fvApp.gds_accountInfo.getColumn(0, "ID");

        	this.gfnTransaction("getNotificationCount", strSvcUrl, inData, outData, strArg, "fnCallback", true);
        };

        this.div_header_btn_home_onclick = function(obj,e)
        {
        	this.div_work.url = "UserForms::gybs2011fm.xfdl";
        };

        this.div_header_btn_myGym_onclick = function(obj,e)
        {
        	this.fvApp.gds_search.setColumn(0, "typeSearch", "RECENT");
        	this.fvApp.gds_search.setColumn(0, "searchTerm", "");
        	this.fvApp.gds_search.setColumn(0, "offset", "0");
        	this.fvApp.gv_scrollPos = 0;
        	this.div_work.url = "UserForms::gybs2012fm.xfdl";
        };

        this.div_header_btn_gyms_onclick = function(obj,e)
        {
        	this.fvApp.gds_search.copyData(this.ds_search);
        	this.fvApp.gds_search.setColumn(0, "typeSearch", "RECENT");
        	this.fvApp.gds_search.setColumn(0, "searchTerm", "");
        	this.fvApp.gds_search.setColumn(0, "offset", "0");
        	this.fvApp.gv_scrollPos = 0;
        	this.div_work.url = "UserForms::gybs2013fm.xfdl";
        };

        this.pdiv_account_btn_myPage_onclick = function(obj,e)
        {
        	var objChildFrame = new ChildFrame("popupPasswordCheck", 0, 0, 330, 300);
        	objChildFrame.formurl = "UserForms::gybs2015pu.xfdl";
         	objChildFrame.openalign = "center middle";
         	objChildFrame.overlaycolor = "RGBA(196,196,196,0.5)";
        	objChildFrame.dragmovetype = "none";
        	objChildFrame.showtitlebar = false;
         	objChildFrame.border = "0px none";

        	var objParam = "";
        	objChildFrame.showModal(this.getOwnerFrame(), objParam, this.parent.parent.parent.parent, "fn_popupCallback");
        };

        this.fnCorrectPassword = function ()
        {
        	this.div_work.url = "UserForms::gybs2014fm.xfdl";
        	this.pdiv_account.closePopup();
        };

        this.pdiv_account_btn_logout_onclick = function(obj,e)
        {
        	this.fvApp.gds_accountInfo.clearData();
        	this.fvApp.mainframe.Main.formurl = "AboutAccount::gybs1010fm.xfdl";
        };

        this.div_header_img_logo_onclick = function(obj,e)
        {
        	this.div_work.url = "UserForms::gybs2011fm.xfdl";
        };

        this.div_header_btn_market_onclick = function(obj,e)
        {
        	this.div_work.url = "MarketForms::gybs4010fm.xfdl";
        	this.fvApp.gds_search.setColumn(0, "typeSearch", "RECENT");
        	this.fvApp.gds_search.setColumn(0, "searchTerm", "");
        	this.fvApp.gds_search.setColumn(0, "offset", "0");
        	this.fvApp.gv_scrollPos = 0;
        };

        this.fnResetInfo = function ()
        {
        	this.div_header.form.img_profile.image = this.fvApp.gds_accountInfo.getColumn(0, "PROFILE_PATH");
        	this.pdiv_account.form.img_profile.image = this.fvApp.gds_accountInfo.getColumn(0, "PROFILE_PATH");
        	this.div_header.form.sta_userName.text = this.fvApp.gds_accountInfo.getColumn(0, "NAME");
        	this.pdiv_account.form.sta_userName.text = this.fvApp.gds_accountInfo.getColumn(0, "NAME");
        };
        this.notification_onclick = function(obj,e)
        {
        	this.pdiv_account.closePopup();
        	this.pdiv_notification.trackPopupByComponent(this.div_header.form.sta_userName, -250, 45);
        	// 알림 데이터 가져오기
        	var strSvcUrl = "p014/getNotifications.do";
        	var inData    = "";
        	var outData   = "ds_notification=ds_notification";
        	var strArg    = "paramID=" + this.fvApp.gds_accountInfo.getColumn(0, "ID");

        	this.gfnTransaction("getNotifications", strSvcUrl, inData, outData, strArg, "fnCallback", true);
        };
        this.pdiv_notification_onpopup = function(obj,e)
        {
        	// 계정 정보 팝업 시 프로필과 이름 동기화
        	this.pdiv_notification.form.Div00.form.img_profile.image = this.div_header.form.img_profile.image;
        	this.pdiv_notification.form.Div00.form.sta_userName.text = this.div_header.form.sta_userName.text;
        };

        this.pdiv_notification_Div00_div_account_img_cancel_onclick = function(obj,e)
        {
        	this.pdiv_notification.closePopup();
        	this.pdiv_account.trackPopupByComponent(this.div_header.form.sta_userName, -250, 45);
        };

        this.pdiv_notification_onkillfocus = function(obj,e)
        {
        	this.pdiv_notification.closePopup();
        };

        this.fnSetMessage = function(param_notiType) {
        	var sMessage = "";
        	switch(param_notiType) {
        	case "SALE_COMPLETED":
        		sMessage = "상품 판매가 완료되었습니다."
        		break;
        	case "BUY_COMPLETED":
        		sMessage = "상품 구매가 완료되었습니다."
        		break;
        	case "NEW_COMMENT":
        		sMessage = "게시글에 새로운 댓글이 달렸습니다."
        		break;
        	case "NEW_REPLY":
        		sMessage = "회원님의 댓글에 새로운 답글이\n달렸습니다."
        		break;
        	case "TRANSFER_REJECTED":
        		sMessage = "양도 신청이 반려되었습니다.\n내용을 보려면 클릭하세요.";
        		break;
        	case "TRANSFER_APPROVED":
        		sMessage = "양도 신청이 승인되었습니다.";
        		break;
        	default:
        		sMessage = "ERROR"
        		break;
        	}
        	return sMessage;
        };

        this.pdiv_notification_grid_notiList_oncellclick = function(obj,e)
        {
        	// 반려 알림 클릭 시 관리자가 보낸 반려 사유 보여주기 -> 해당 알림만 IS_READ => Y로 변경
        	if (this.ds_notification.getColumn(e.row, "NOTI_TYPE") == "TRANSFER_REJECTED" || this.ds_notification.getColumn(e.row, "NOTI_TYPE") == "TRANSFER_APPROVED") {
        		trace("승인/반려 알림");
        		this.fvApp.gv_marketNo = this.ds_notification.getColumn(e.row, "TARGET_NO");
        		this.pdiv_notification.closePopup();

        		var sUserID = this.fvApp.gds_accountInfo.getColumn(0, "ID");
        		var sMarketNo = this.ds_notification.getColumn(e.row, "TARGET_NO");
        		var sNotiType = this.ds_notification.getColumn(e.row, "NOTI_TYPE");

        		trace(">>>>> 전달되는 USER_ID: " + sUserID);
        		trace(">>>>> 전달되는 MARKET_NO: " + sMarketNo);
        		trace(">>>>> 전달되는 NOTI_TYPE: " + sNotiType);

        		if (this.ds_notification.getColumn(e.row, "NOTI_TYPE") == "TRANSFER_REJECTED") {
        			this.fvApp.gds_rejectNoti.setColumn(0, "IS_FROM_REJECT","Y");
        			this.fvApp.gds_rejectNoti.setColumn(0, "MESSAGE", this.ds_notification.getColumn(e.row, "MESSAGE"));
        		}

        		this.div_work.url = "MarketForms::gybs4011fm.xfdl";

        		var strSvcUrl = "p014/updateSingleNotiIsRead.do";
        		var inData    = "";
        		var outData   = "";
        		var strArg    = "paramID=" + sUserID + " paramMarketNo=" + sMarketNo + " paramNotiType=" + sNotiType;

        		this.gfnTransaction("updateSingleNotiIsRead", strSvcUrl, inData, outData, strArg, "fnCallback", true);
        	}
        	// 그 외 알림은 클릭 시 해당 정기권 게시글 관련 알림(양도 반려 알림 제외) 모두 IS_READ => Y로 변경
        	else {
        		trace("반려 외의 알림");
        		this.fvApp.gv_marketNo = this.ds_notification.getColumn(e.row, "TARGET_NO");
        		this.pdiv_notification.closePopup();

        		var sUserID = this.fvApp.gds_accountInfo.getColumn(0, "ID");
        		var sMarketNo = this.ds_notification.getColumn(e.row, "TARGET_NO");

        		trace(">>>>> 전달되는 USER_ID: " + sUserID);
        		trace(">>>>> 전달되는 MARKET_NO: " + sMarketNo);

        		this.div_work.url = "MarketForms::gybs4011fm.xfdl";

        		var strSvcUrl = "p014/updateIsRead.do";
        		var inData    = "";
        		var outData   = "";
        		var strArg    = "paramID=" + sUserID + " paramMarketNo=" + sMarketNo;

        		this.gfnTransaction("updateIsRead", strSvcUrl, inData, outData, strArg, "fnCallback", true);
        	}
        };

        this.fnCallback = function (svcId, errCd, errMsg)
        {
        	if (svcId == "getNotificationCount") {
        		var nUnreadCount = this.notiCnt;
        		this.fvApp.gds_accountInfo.setColumn(0, "NOTI_COUNT", nUnreadCount);
        		if (nUnreadCount == 0) { // 미확인 알림이 없다면 빨간 Static 안 보이게 설정
        			this.pdiv_account.form.staPushCount.visible = false;
        		}
        		else {
        			this.pdiv_account.form.staPushCount.visible = true;
        		}
        	}
        };

        this.div_bottom_img_instagram_onclick = function(obj,e)
        {
        	system.execBrowser("https://www.instagram.com/u_jh03?igsh=MXMycWI0ZHhjcGd2eA%3D%3D&utm_source=qr");
        };

        this.div_bottom_img_youbute_onclick = function(obj,e)
        {
        	system.execBrowser("https://youtube.com/channel/UCtyOyW-RaT0sPkZk5rDhQ1w?si=gmANe4szALDwm-mJ");
        };

        this.div_bottom_img_tobe_onclick = function(obj,e)
        {
        	system.execBrowser("https://www.tobesoft.com");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onsize",this.Main_onsize,this);
            this.addEventHandler("onload",this.Main_onload,this);
            this.div_header.form.btn_market.addEventHandler("onclick",this.div_header_btn_market_onclick,this);
            this.div_header.form.btn_gyms.addEventHandler("onclick",this.div_header_btn_gyms_onclick,this);
            this.div_header.form.btn_myGym.addEventHandler("onclick",this.div_header_btn_myGym_onclick,this);
            this.div_header.form.btn_home.addEventHandler("onclick",this.div_header_btn_home_onclick,this);
            this.div_header.form.img_logo.addEventHandler("onclick",this.div_header_img_logo_onclick,this);
            this.div_header.form.sta_userName.addEventHandler("onclick",this.Profile_onclick,this);
            this.div_header.form.img_profile.addEventHandler("onclick",this.Profile_onclick,this);
            this.pdiv_notification.addEventHandler("onpopup",this.pdiv_notification_onpopup,this);
            this.pdiv_notification.addEventHandler("onkillfocus",this.pdiv_notification_onkillfocus,this);
            this.pdiv_notification.form.Div00.form.div_account.form.img_cancel.addEventHandler("onclick",this.pdiv_notification_Div00_div_account_img_cancel_onclick,this);
            this.pdiv_notification.form.Div00.form.btn_logout.addEventHandler("onclick",this.pdiv_account_btn_logout_onclick,this);
            this.pdiv_notification.form.Div00.form.btn_myPage.addEventHandler("onclick",this.pdiv_account_btn_myPage_onclick,this);
            this.pdiv_notification.form.grid_notiList.addEventHandler("oncellclick",this.pdiv_notification_grid_notiList_oncellclick,this);
            this.pdiv_account.addEventHandler("onpopup",this.pdiv_account_onpopup,this);
            this.pdiv_account.addEventHandler("onkillfocus",this.pdiv_account_onkillfocus,this);
            this.pdiv_account.form.img_bell.addEventHandler("onclick",this.notification_onclick,this);
            this.pdiv_account.form.staPushCount.addEventHandler("onclick",this.notification_onclick,this);
            this.pdiv_account.form.btn_logout.addEventHandler("onclick",this.pdiv_account_btn_logout_onclick,this);
            this.pdiv_account.form.btn_myPage.addEventHandler("onclick",this.pdiv_account_btn_myPage_onclick,this);
            this.div_bottom.form.img_instagram.addEventHandler("onclick",this.div_bottom_img_instagram_onclick,this);
            this.div_bottom.form.img_youbute.addEventHandler("onclick",this.div_bottom_img_youbute_onclick,this);
            this.div_bottom.form.img_tobe.addEventHandler("onclick",this.div_bottom_img_tobe_onclick,this);
        };
        this.loadIncludeScript("gybs2010fm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
