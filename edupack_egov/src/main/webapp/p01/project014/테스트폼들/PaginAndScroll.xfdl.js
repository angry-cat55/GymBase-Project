(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PaginAndScroll");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta00","9","14","182","46",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("그리드 페이징 - ㅌㅅ");
            obj.set_cssclass("sta_WF_Title1");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearc","904","17","59","26",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","39","104","916","266",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsSample");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"ID\"/><Cell col=\"2\" text=\"NAME\"/><Cell col=\"3\" text=\"DESCRIPTION\"/><Cell col=\"4\" text=\"USE_YN\"/><Cell col=\"5\" text=\"REG_USER\"/></Band><Band id=\"body\"><Cell text=\"bind:ROWNUM\"/><Cell col=\"1\" text=\"bind:ID\"/><Cell col=\"2\" text=\"bind:NAME\"/><Cell col=\"3\" text=\"bind:DESCRIPTION\"/><Cell col=\"4\" text=\"bind:USE_YN\"/><Cell col=\"5\" text=\"bind:REG_USER\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cboCnt","706","17","89","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cboCnt_innerdataset = new nexacro.NormalDataset("cboCnt_innerdataset", obj);
            cboCnt_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "10","datacolumn" : "10"},{"codecolumn" : "20","datacolumn" : "20"},{"codecolumn" : "50","datacolumn" : "50"}]});
            obj.set_innerdataset(cboCnt_innerdataset);
            obj.set_text("10");
            obj.set_value("10");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch","795","17","79","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Paging");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","80","467","377","63",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("edupack -> SampleArrangement 폼 참고");
            this.addChild(obj.name, obj);

            obj = new Div("divPage","43","385","912","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_Area");
            obj.set_url("테스트폼들::PagingDivForm.xfdl");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divPage
            obj = new Layout("default","",0,0,this.divPage.form,function(p){});
            this.divPage.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","테스트폼들::PagingDivForm.xfdl");
        };
        
        // User Script
        this.registerScript("PaginAndScroll.xfdl", function() {

        this.btn00_onclick = function(obj,e)
        {
        	// ds ID : dsSample
        	// 전달 파라미터 X
        	// 호출 url : edu/getSampleList.do
        	// 자바 메소드 명 : getSampleList()

        // 	this.transaction("getSampleList"
        // 					,"SvcUrl::edu/getSampleList.do"
        // 					,""
        // 					,"dsSample=outSample"
        // 					,""
        // 					,"fnCallback");



        	var strSvcUrl = "edu/getSampleList.do";
        	var inData    = "";
        	var outData   = "dsSample=dsSample";
        	var strArg    = "";

        	this.gfnTransaction("getSampleList", strSvcUrl, inData, outData, strArg, "fnCallback");

        };

        this.fvCnt = 0; // 한 페이지 목록
        this.fvPage = 0; // 페이지 번호
        this.fvOffSet = 0; // 시작 row num
        this.fvTotalCnt = 0; // 전체 레코드 개수
        this.fvPageCnt = 0; // 표현 페이지 개수

        this.btnSearch_onclick = function(obj,e)
        {
        	this.fnPageInit();
        };

        // 폼 변수 초기화
        this.fnPageInit = function() {
        	this.fvCnt = this.cboCnt.value;
        	this.fvPage = 0;
        	this.fvOffSet = 0;
        	this.fvPageCnt = 10;

        	this.fnSearch();
        }

        this.fnSearch = function ()
        {
        	this.dsSearch.clearData();
        	this.dsSearch.addRow();
        	this.dsSearch.setColumn(0, "cnt", this.fvCnt);
        	this.dsSearch.setColumn(0, "offset", this.fvOffSet);

        	var strId 	  	= "getPagingSample";
        	var strSvcUrl	= "edu/getPagingSample.do";
        	var inData		= "dsSearch=dsSearch";
        	var outData		= "dsSample=dsSample";
        	var strArg		= "";
        	var strCallback = "fnCallback"
        	// fvTotalCnt 전달은 form 변수(this.~~~만 서버에서 addVariable로 전달받기 가능)

        	this.gfnTransaction(strId, strSvcUrl, inData, outData, strArg, strCallback);
        };

        this.fnCallback = function (svcId, errCd, errMsg)
        {
        	if (svcId == "getPagingSample") {
        		this.fnPagingSetting();
        		// this.alert(this.fvTotalCnt);

        		var nHead = this.grd00.getRealRowFullSize("head");
        		var nBody = this.grd00.getRealRowFullSize("body");
        		var nHeight = nHead + nBody + 2;
        		this.grd00.setOffsetHeight(nHeight);
        		this.resetScroll();
        	}
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
        	this.fnSearch();
        };
        this.cboCnt_onitemchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnSearc.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.cboCnt.addEventHandler("onitemchanged",this.cboCnt_onitemchanged,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
        };
        this.loadIncludeScript("PaginAndScroll.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
