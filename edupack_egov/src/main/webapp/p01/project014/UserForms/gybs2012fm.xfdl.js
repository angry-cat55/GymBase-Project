(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("User_SearchingGym");
            this.set_titletext("즐겨찾기 헬스장");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,1610);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_gymList", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "GYM_CODE","type" : "STRING","size" : "256"},{"id" : "GYM_NAME","type" : "STRING","size" : "256"},{"id" : "ADDRESS","type" : "STRING","size" : "256"},{"id" : "TEL_NO","type" : "STRING","size" : "256"},{"id" : "IMG_PATH","type" : "STRING","size" : "256"},{"id" : "FAVORITES_COUNT","type" : "INT","size" : "256"},{"id" : "IS_FAVORITE","type" : "INT","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "cnt","type" : "INT","size" : "256"},{"id" : "offset","type" : "INT","size" : "256"},{"id" : "searchTerm","type" : "STRING","size" : "256"},{"id" : "gotoMain","type" : "INT","size" : "256"},{"id" : "ID","type" : "STRING","size" : "256"}]},"Rows" : [{"cnt" : "5","offset" : "0","gotoMain" : "0"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_gymList","20","160",null,"1250","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Div("divPage","175","div_gymList:30","930","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_url("UserForms::gybs2210fm.xfdl");
            obj.set_text("");
            obj.set_border("1px solid #c4c4c4");
            obj.set_borderRadius("10px");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("btn_search",null,"60","40","40","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_image("url(\'imagerc::form/searchIcon.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_background("#000000");
            obj.set_border("0px none");
            obj.set_borderRadius("20px");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_search",null,"60","310","40","btn_search:10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_borderRadius("20px");
            obj.set_displaynulltext("검색어를 입력하세요.");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_padding("0px 0px 0px 20px");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_sortType",null,"60","170","40","edt_search:10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_borderRadius("20px");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_itemheight("30");
            var cbo_sortType_innerdataset = new nexacro.NormalDataset("cbo_sortType_innerdataset", obj);
            cbo_sortType_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "RECENT","datacolumn" : "최신순"},{"codecolumn" : "FAVORITES","datacolumn" : "인기순"}]});
            obj.set_innerdataset(cbo_sortType_innerdataset);
            obj.set_text("최신순");
            obj.set_value("RECENT");
            obj.set_index("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_gymList.form
            obj = new Layout("default","",0,0,this.div_gymList.form,function(p){});
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("50");
            obj.set_horizontalgap("38");
            obj.set_tabledirection("horizontal");
            this.div_gymList.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPage
            obj = new Layout("default","",0,0,this.divPage.form,function(p){});
            this.divPage.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,1610,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","UserForms::gybs2210fm.xfdl");
        };
        
        // User Script
        this.registerScript("gybs2012fm.xfdl", function() {
        this.fvApp = nexacro.getApplication();
        this.fvCnt = 0; // 한 페이지 목록
        this.fvPage = 0; // 페이지 번호
        this.fvOffSet = 0; // 시작 row num
        this.fvTotalCnt = 0; // 전체 레코드 개수
        this.fvPageCnt = 0; // 표현 페이지 개수

        this.isSearching = false; // false : 검색어로 찾고 있지 않은 상태

        this.User_SearchingGym_onload = function(obj,e)
        {
        	if (this.fvApp.gds_search.getColumn(0, "typeSearch") == null || this.fvApp.gds_search.getColumn(0, "typeSearch") == "") {
        		this.cbo_sortType.value = "RECENT";
        	}
        	else this.cbo_sortType.value = this.fvApp.gds_search.getColumn(0, "typeSearch");

        	this.fvApp.gds_search.addColumn("typeSearch", "string");
        	this.fvApp.gds_search.setColumn(0, "typeSearch", this.cbo_sortType.value);

        	if (this.fvApp.gds_search.getColumn(0, "searchTerm") == null || this.fvApp.gds_search.getColumn(0, "searchTerm") == "") {
        		this.edt_search.value = null;
        	}
        	else {
        		this.edt_search.value = this.fvApp.gds_search.getColumn(0, "searchTerm");
        	}

        	// 크기 설정
        	var nHeight = this.getLayoutInfo(this.getCurrentLayoutID(), "height");
         	this.parent.parent.fnMainPageOnLoad(nHeight);
        	this.fnPageInit();
        };

        this.cbo_sortType_onitemchanged = function(obj,e)
        {
         	for (var i = this.ds_gymList.getCount() - 1; i >= 0; i--) {
         		this.div_gymList.removeChild("divGymList"+i)
         	}
         	this.fvApp.gds_search.setColumn(0, "offset", 0);
         	this.fvApp.gds_search.setColumn(0, "typeSearch", e.postvalue);

         	this.fnSearch();


        };

        // 폼 변수 초기화
        this.fnPageInit = function() {
        	this.fvCnt = 10;
        	this.fvPage = 0;
        	this.fvOffSet = 0;
        	this.fvPageCnt = 10;

        	this.fnSearch();
        }

        this.fnSearch = function ()
        {
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "cnt", this.fvCnt);
        	this.ds_search.setColumn(0, "offset", this.fvApp.gds_search.getColumn(0, "offset"));
        	this.fvApp.gds_search.setColumn(0, "gotoMain", 2);

        	// 검색어
        	var nSearcheTerm = "";
        	// if (this.isSearching == true) var nSearcheTerm = this.fvApp.gds_search.getColumn(0, "searchTerm");
        	nSearcheTerm = this.fvApp.gds_search.getColumn(0, "searchTerm");

        	this.ds_search.setColumn(0, "searchTerm", nSearcheTerm);
        	this.ds_search.setColumn(0, "ID", this.fvApp.gds_accountInfo.getColumn(0, "ID"));

        	// 최신순 정렬
        	if (this.fvApp.gds_search.getColumn(0, "typeSearch") == "RECENT") {
        		var strSvcUrl = "p014/getMyRecentGymList.do";
        		var inData    = "ds_search=ds_search";
        		var outData   = "ds_gymList=ds_gymList";
        		var strArg    = "";

        		this.gfnTransaction("getMyRecentGymList", strSvcUrl, inData, outData, strArg, "fnCallback", true);
        	}

        	// 인기순 정렬
        	else {
        		var strSvcUrl = "p014/getMyFavoritesGymList.do";
        		var inData    = "ds_search=ds_search";
        		var outData   = "ds_gymList=ds_gymList";
        		var strArg    = "";

        		this.gfnTransaction("getMyFavoritesGymList", strSvcUrl, inData, outData, strArg, "fnCallback", true);
        	}
        };

        this.fnCallback = function(svcId, errCd, errMsg) {
        	if (errCd < 0) {
        		arrArg = [errMsg];
        		this.gfnAlert("msg.server.error.msg", arrArg, "msg.server.error.msg", "fnMsgCallback");
        	}
        	if (svcId == "getMyRecentGymList" || svcId == "getMyFavoritesGymList") {
        		if (errCd == -1) {
        			arrArg = [errMsg];
        			this.gfnAlert("msg.server.error.msg", arrArg, "msg.server.error.msg", "fnMsgCallback");
        			return;
        		}
        		this.ds_search.setColumn(0, "gotoMain", 1);
         		// div 크기 세팅
        		var nCnt = 0;
        		if (this.ds_gymList.getCount() % 2 == 1) {
        			nCnt = this.ds_gymList.getCount() + 1;
        		}
        		else nCnt = this.ds_gymList.getCount();
         		var nHeight = nCnt / 2 * 260 - 50;
         		this.div_gymList.height = nHeight;
        		this.resetScroll();

        		// 불러온 헬스장 정보 동적 div 생성

        		 this.fnCreateLayout();

        		 // 페이지 세팅
        		 this.fnPagingSetting();

        		 // 스크롤 초기화
        		this.parent.parent.scrollTo(0,this.fvApp.gv_scrollPos);
        		this.fvApp.gv_scrollPos = 0;
        	}
        };

        this.fnCreateLayout = function ()
        {
        		var nLeft = 0;
        		 var nTop = 0;
        		 var nWidth = 600;
        		 var nHeight = 210;

        		 var objParam = {name : ""
        						,address : ""
        						,telNo : ""
        						,imgPath : ""
        						,favoritesCount : ""};

        		 var objDiv;
        		 var nCntRow = this.ds_gymList.getCount();
        		 for (var i = 0 ; i < nCntRow; i++) {
        			objParam.code			 = this.ds_gymList.getColumn(i, "GYM_CODE");
        			objParam.name			 = this.ds_gymList.getColumn(i, "GYM_NAME");
        			objParam.address		 = this.ds_gymList.getColumn(i, "ADDRESS");
        			objParam.telNo			 = this.ds_gymList.getColumn(i, "TEL_NO");
        			objParam.imgPath		 = this.ds_gymList.getColumn(i, "IMG_PATH");
        			objParam.favoritesCount	 = parseInt(this.ds_gymList.getColumn(i, "FAVORITES_COUNT") + "",10);
        			objParam.isFavotire		 = parseInt(this.ds_gymList.getColumn(i, "IS_FAVORITE"));

        			objDiv = new Div("divGymList"+i, nLeft, nTop, nWidth, nHeight);
        			objDiv.url = "UserForms::gybs2211fm.xfdl";
        			objDiv.param = JSON.parse(JSON.stringify(objParam)); // 깊은 복사
        			this.div_gymList.addChild(objDiv.id, objDiv);

        			objDiv.show();
        		 }
        		 var nH = objDiv.getOffsetBottom();
        		 this.div_gymList.setOffsetHeight(nH + 2);
        		 this.div_gymList.form.resetScroll();
        };

        this.fnPagingSetting = function() {
        	this.divPage.form.fnCreatePage("fnPagingCallback"
        								  ,this.fvTotalCnt
        								  ,this.fvCnt
        								  ,this.fvPage
        								  ,this.fvPageCnt);
        }

        // 페이지 번호 누를 때 호출되는 함수
        this.fnPagingCallback = function(nPage, nOffSet)
        {
        	this.fvPage = nPage;
        	this.fvOffSet = nOffSet;
        	this.fvApp.gds_search.setColumn(0, "offset", nOffSet);
        	for (var i = 0; i < this.ds_gymList.rowcount; i++) {
        		this.div_gymList.removeChild("divGymList"+i)
        	}
        	this.fnSearch();
        };

        // 검색 기능
        this.btn_search_onclick = function(obj,e)
        {
        	this.fvPage = 0;
        //	this.fvOffSet = 0;
        	this.fvApp.gds_search.setColumn(0, "offset", 0);
        	if (this.edt_search.value == "" || this.edt_search.value == null) {
        		this.isSearching = false;
        	}
        	else {
        		this.isSearching = true;
        	}
        	for (var i = 0; i < this.ds_gymList.rowcount; i++) {
        		this.div_gymList.removeChild("divGymList"+i)
        	}

        	this.fvApp.gds_search.setColumn(0, "searchTerm", this.edt_search.value);

        	this.fnSearch();
        };

        this.edt_search_onkeyup = function(obj,e)
        {
        	if (e.keycode == 13) this.btn_search_onclick();
        };

        this.User_SearchingGym_onclose = function(obj,e)
        {
        	this.fvApp.gv_scrollPos = this.parent.parent.getVScrollPos();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.User_SearchingGym_onload,this);
            this.addEventHandler("onclose",this.User_SearchingGym_onclose,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.edt_search.addEventHandler("onkeyup",this.edt_search_onkeyup,this);
            this.cbo_sortType.addEventHandler("onitemchanged",this.cbo_sortType_onitemchanged,this);
        };
        this.loadIncludeScript("gybs2012fm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
