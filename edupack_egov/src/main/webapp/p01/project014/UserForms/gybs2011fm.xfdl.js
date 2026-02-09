(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Home");
            this.set_titletext("홈 화면");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,1770);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_recentGymList", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "GYM_CODE","type" : "STRING","size" : "256"},{"id" : "GYM_NAME","type" : "STRING","size" : "256"},{"id" : "ADDRESS","type" : "STRING","size" : "256"},{"id" : "IMG_PATH","type" : "STRING","size" : "256"}]},"Rows" : [{},{},{},{},{},{},{},{},{},{}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_recentMarketList", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "MARKET_NO","type" : "STRING","size" : "256"},{"id" : "TITLE","type" : "STRING","size" : "256"},{"id" : "PRICE","type" : "STRING","size" : "256"},{"id" : "START_DATE","type" : "STRING","size" : "256"},{"id" : "END_DATE","type" : "STRING","size" : "256"},{"id" : "GYM_NAME","type" : "STRING","size" : "256"},{"id" : "ADDRESS","type" : "STRING","size" : "256"}]},"Rows" : [{},{},{},{},{},{},{},{},{},{}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "cnt","type" : "INT","size" : "256"},{"id" : "offset","type" : "INT","size" : "256"},{"id" : "searchTerm","type" : "STRING","size" : "256"},{"id" : "gotoMain","type" : "INT","size" : "256"}]},"Rows" : [{"cnt" : "5","offset" : "0","gotoMain" : "1"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_imgStep","20","60","910","490",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("white");
            obj.set_url("UserForms::gybs2110fm.xfdl");
            obj.set_borderRadius("20px");
            obj.set_border("1px solid #d5d5d5");
            obj.set_boxShadow("0px 0px 5px 0px RGBA(0,0,0,0.25)");
            this.addChild(obj.name, obj);

            obj = new Div("div_welcome","div_imgStep:20","60",null,"60","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_background("#efefef");
            obj.set_borderRadius("20px");
            obj.set_border("1px solid #d5d5d5");
            obj.set_boxShadow("0px 0px 5px 0px RGBA(0,0,0,0.25)");
            this.addChild(obj.name, obj);

            obj = new Static("sta_welcome","0","20",null,"25","0",null,null,null,null,null,this.div_welcome.form);
            obj.set_taborder("0");
            obj.set_text("default님 환영합니다!");
            obj.set_font("normal 600 13pt/normal \"Arial\"");
            obj.set_padding("0px 0px 0px 20px");
            obj.set_color("#000000");
            obj.set_verticalAlign("middle");
            this.div_welcome.addChild(obj.name, obj);

            obj = new Div("div_goMyGym","950","div_welcome:25",null,"190","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_background("#efefef");
            obj.set_borderRadius("20px");
            obj.set_border("1px solid #d5d5d5");
            obj.set_boxShadow("0px 0px 5px 0px RGBA(0,0,0,0.25)");
            this.addChild(obj.name, obj);

            obj = new Static("sta_myGym","0","20",null,"20","0",null,null,null,null,null,this.div_goMyGym.form);
            obj.set_taborder("0");
            obj.set_text("내 헬스장");
            obj.set_padding("0px 0px 0px 20px");
            obj.set_color("#de1821");
            obj.set_font("normal 600 10pt/normal \"Arial\"");
            this.div_goMyGym.addChild(obj.name, obj);

            obj = new Static("sta_goMyGymNotice","0","134",null,"25","70",null,null,null,null,null,this.div_goMyGym.form);
            obj.set_taborder("1");
            obj.set_text("즐겨찾기한 헬스장");
            obj.set_font("normal 600 14pt/normal \"Arial\"");
            obj.set_padding("0px 0px 0px 20px");
            obj.set_color("#000000");
            obj.set_verticalAlign("middle");
            this.div_goMyGym.addChild(obj.name, obj);

            obj = new ImageViewer("btn_goNotice",null,null,"35","35","20","27",null,null,null,null,this.div_goMyGym.form);
            obj.set_taborder("2");
            obj.set_image("url(\'imagerc::form/btn.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_border("0px none");
            obj.set_borderRadius("25px");
            this.div_goMyGym.addChild(obj.name, obj);

            obj = new Div("div_goMarket","950","div_goMyGym:25",null,"190","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_background("#efefef");
            obj.set_borderRadius("20px");
            obj.set_border("1px solid #d5d5d5");
            obj.set_boxShadow("0px 0px 5px 0px RGBA(0,0,0,0.25)");
            this.addChild(obj.name, obj);

            obj = new Static("sta_market","0","20",null,"20","0",null,null,null,null,null,this.div_goMarket.form);
            obj.set_taborder("0");
            obj.set_text("정기권 마켓");
            obj.set_padding("0px 0px 0px 20px");
            obj.set_color("#de1821");
            obj.set_font("normal 600 10pt/normal \"Arial\"");
            this.div_goMarket.addChild(obj.name, obj);

            obj = new Static("sta_goMarketList","0","134",null,"25","70",null,null,null,null,null,this.div_goMarket.form);
            obj.set_taborder("1");
            obj.set_text("정기권 게시글");
            obj.set_font("normal 600 14pt/normal \"Arial\"");
            obj.set_padding("0px 0px 0px 20px");
            obj.set_color("#000000");
            obj.set_verticalAlign("middle");
            this.div_goMarket.addChild(obj.name, obj);

            obj = new ImageViewer("btn_goMarket",null,null,"35","35","20","27",null,null,null,null,this.div_goMarket.form);
            obj.set_taborder("2");
            obj.set_image("url(\'imagerc::form/btn.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_border("0px none");
            obj.set_borderRadius("25px");
            this.div_goMarket.addChild(obj.name, obj);

            obj = new Static("sta_recentGyms","20","div_imgStep:95","240","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("최근 등록된 헬스장");
            obj.set_font("normal 600 16pt/normal \"Arial\"");
            obj.set_color("#000000");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Div("div_layoutRecentGyms","20","sta_recentGyms:35",null,"360","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_borderRadius("10px");
            obj.set_text("");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("both");
            obj.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Static("sta_recentMembership","20","div_layoutRecentGyms:100","240","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("최근 등록된 정기권");
            obj.set_font("normal 600 16pt/normal \"Arial\"");
            obj.set_color("#000000");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Div("div_layoutRecentMembership","20","sta_recentMembership:35","1240","360",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("transparent");
            obj.set_borderRadius("10px");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("sta_goWhole01","1191","648","69","25",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("전체 보기");
            obj.set_font("normal 600 12pt/normal \"Arial\"");
            obj.set_color("#000000");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_goWhole02","1191","1173","69","25",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("전체 보기");
            obj.set_font("normal 600 12pt/normal \"Arial\"");
            obj.set_color("#000000");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_rightArrow","1235","680","25","25",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_stretch("fixaspectratio");
            obj.set_border("0px none");
            obj.set_image("url(\'imagerc::form/rightArrow.png\')");
            obj.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_leftArrow","1198","680",null,"25","img_rightArrow:12",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_stretch("fixaspectratio");
            obj.set_border("0px none");
            obj.set_image("url(\'imagerc::form/leftArrow.png\')");
            obj.set_background("transparent");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_rightArrow1","1235","1202","25","25",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_stretch("fixaspectratio");
            obj.set_border("0px none");
            obj.set_background("transparent");
            obj.set_image("url(\'imagerc::form/rightArrow.png\')");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_leftArrow1","1196","1202",null,"25","img_rightArrow1:12",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_stretch("fixaspectratio");
            obj.set_border("0px none");
            obj.set_image("url(\'imagerc::form/leftArrow.png\')");
            obj.set_background("transparent");
            obj.set_text("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_imgStep
            obj = new Layout("default","",0,0,this.div_imgStep.form,function(p){});
            this.div_imgStep.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_welcome.form
            obj = new Layout("default","",0,0,this.div_welcome.form,function(p){});
            this.div_welcome.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_goMyGym.form
            obj = new Layout("default","",0,0,this.div_goMyGym.form,function(p){});
            this.div_goMyGym.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_goMarket.form
            obj = new Layout("default","",0,0,this.div_goMarket.form,function(p){});
            this.div_goMarket.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_layoutRecentGyms.form
            obj = new Layout("default","",0,0,this.div_layoutRecentGyms.form,function(p){});
            obj.set_type("horizontal");
            obj.set_flexwrap("nowrap");
            obj.set_horizontalgap("50");
            this.div_layoutRecentGyms.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_layoutRecentMembership.form
            obj = new Layout("default","",0,0,this.div_layoutRecentMembership.form,function(p){});
            obj.set_type("horizontal");
            obj.set_horizontalgap("50");
            this.div_layoutRecentMembership.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,1770,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","UserForms::gybs2110fm.xfdl");
        };
        
        // User Script
        this.registerScript("gybs2011fm.xfdl", function() {
        this.fvApp = nexacro.getApplication();

        this.Home_onload = function(obj,e)
        {
        	this.fvApp.gds_search.copyData(this.ds_search);
        	// 크기 설정
        	var nHeight = this.getLayoutInfo(this.getCurrentLayoutID(), "height");
         	this.parent.parent.fnMainPageOnLoad(nHeight);
        	// 이 폼의 크기 밑으로 컨텐츠가 더 늘어나면, 그 크기에 맞춰서 폼의 크기도 늘려야함 여기에서

        	// 이름 설정
        	var nName = this.fvApp.gds_accountInfo.getColumn(0, "NAME");
        	this.div_welcome.form.sta_welcome.text = nName + "님 환영합니다!";

        	// 최근 등록된 4개의 헬스장 데이터 바인딩
        	this.setRecentInfo();

        };

        this.setRecentInfo = function()
        {
        	 var strSvcUrl = "p014/getRecentInfo.do";
        	 var inData    = "";
        	 var outData   = "ds_recentGymList=ds_recentGymList ds_recentMarketList=ds_recentMarketList";
        	 var strArg    = "";

        	 this.gfnTransaction("getRecentInfo", strSvcUrl, inData, outData, strArg, "fnCallback");
        }

        this.fnCallback = function(svcId, errCd, errMsg) {
        	if (errCd < 0) {
        		arrArg = [errMsg];
        		this.gfnAlert("msg.server.error.msg", arrArg, "msg.server.error.msg", "fnMsgCallback");
        	}
        	if (svcId == "getRecentInfo") {
        		if (errCd == -1) {
        			arrArg = [errMsg];
        			this.gfnAlert("msg.server.error.msg", arrArg, "msg.server.error.msg", "fnMsgCallback");
        			return;
        		}
        		// 최근 등록 헬스장 동적 div 생성
        		{
        		 var nLeft = 0;
        		 var nTop = 0;
        		 var nWidth = 290;
        		 var nHeight = 360;

        		 var objParam = {name : ""
        						,address : ""
        						,imgPath : ""};

        		 var objDiv;
        		 var nCntRow = this.ds_recentGymList.getCount();
        		 for (var i = 0; i < nCntRow; i++) {
        			objParam.code = this.ds_recentGymList.getColumn(i, "GYM_CODE");
        			objParam.name = this.ds_recentGymList.getColumn(i, "GYM_NAME");
        			objParam.address = this.ds_recentGymList.getColumn(i, "ADDRESS");
        			objParam.imgPath = this.ds_recentGymList.getColumn(i, "IMG_PATH");

        			objDiv = new Div("divGym"+i, nLeft, nTop, nWidth, nHeight);
        			objDiv.url = "UserForms::gybs2111fm.xfdl";
        			objDiv.param = JSON.parse(JSON.stringify(objParam)); // 깊은 복사
        			objDiv.flexshrink = 0;
        			this.div_layoutRecentGyms.addChild(objDiv.id, objDiv);

        			objDiv.show();
        		 }
        		 this.div_layoutRecentGyms.form.resetScroll();
        		 }

        		 {
        		 // 최근 등록 정기권 동적 div 생성
        		 var nLeft = 0;
        		 var nTop = 0;
        		 var nWidth = 290;
        		 var nHeight = 360;

        		 var objParam = {title : ""
        						,price : ""
        						,startDate : ""
        						,endDate : ""
        						,gymName : ""
        						,gymAddr : ""};

        		 var objDiv;
        		 var nCntRow = this.ds_recentMarketList.getCount();
        		 for (var i = 0; i < nCntRow; i++) {
        			objParam.marketNo = this.ds_recentMarketList.getColumn(i, "MARKET_NO");
        			objParam.title = this.ds_recentMarketList.getColumn(i, "TITLE");
        			objParam.price = this.ds_recentMarketList.getColumn(i, "PRICE");
        			objParam.startDate = this.ds_recentMarketList.getColumn(i, "START_DATE");
        			objParam.endDate = this.ds_recentMarketList.getColumn(i, "END_DATE");
        			objParam.gymName = this.ds_recentMarketList.getColumn(i, "GYM_NAME");
        			objParam.gymAddr = this.ds_recentMarketList.getColumn(i, "ADDRESS");

        			objDiv = new Div("divMarket"+i, nLeft, nTop, nWidth, nHeight);
        			objDiv.url = "UserForms::gybs2112fm.xfdl";
        			objDiv.param = JSON.parse(JSON.stringify(objParam)); // 깊은 복사
        			objDiv.flexshrink = 0;
        			this.div_layoutRecentMembership.addChild(objDiv.id, objDiv);

        			objDiv.show();
        		 }
        		 this.div_layoutRecentMembership.form.resetScroll();
        		 }
        	}
        }
        this.img_leftArrow_onclick = function(obj,e)
        {
        	this.div_layoutRecentGyms.form.scrollBy(-250,0);
        	this.div_layoutRecentGyms.form.resetScroll();
        };

        this.img_rightArrow_onclick = function(obj,e)
        {
        	this.div_layoutRecentGyms.form.scrollBy(250,0);
        	this.div_layoutRecentGyms.form.resetScroll();
        };

        this.img_leftArrow1_onclick = function(obj,e)
        {
        	this.div_layoutRecentMembership.form.scrollBy(-250,0);
        	this.div_layoutRecentMembership.form.resetScroll();
        };

        this.img_rightArrow1_onclick = function(obj,e)
        {
        	this.div_layoutRecentMembership.form.scrollBy(250,0);
        	this.div_layoutRecentMembership.form.resetScroll();
        };

        this.sta_goWhole01_onclick = function(obj,e)
        {
        	this.fvApp.gds_search.copyData(this.ds_search);

        	this.parent.url = "UserForms::gybs2013fm.xfdl";
        };

        this.sta_goWhole02_onclick = function(obj,e)
        {
        	this.fvApp.gds_search.copyData(this.ds_search);

        	this.parent.url = "MarketForms::gybs4010fm.xfdl";
        };

        this.div_goMyGym_btn_goNotice_onclick = function(obj,e)
        {
        	this.fvApp.gds_search.copyData(this.ds_search);

        	this.parent.url = "UserForms::gybs2012fm.xfdl";
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Home_onload,this);
            this.div_goMyGym.form.btn_goNotice.addEventHandler("onclick",this.div_goMyGym_btn_goNotice_onclick,this);
            this.div_goMarket.form.btn_goMarket.addEventHandler("onclick",this.sta_goWhole02_onclick,this);
            this.sta_goWhole01.addEventHandler("onclick",this.sta_goWhole01_onclick,this);
            this.sta_goWhole02.addEventHandler("onclick",this.sta_goWhole02_onclick,this);
            this.img_rightArrow.addEventHandler("onclick",this.img_rightArrow_onclick,this);
            this.img_leftArrow.addEventHandler("onclick",this.img_leftArrow_onclick,this);
            this.img_rightArrow1.addEventHandler("onclick",this.img_rightArrow1_onclick,this);
            this.img_leftArrow1.addEventHandler("onclick",this.img_leftArrow1_onclick,this);
        };
        this.loadIncludeScript("gybs2011fm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
