(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SampleCrossTab");
            this.set_titletext("CrossTab 그리드");
            this.set_stepalign("left top");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,860);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPlusFeeTgtAcru", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "tkcgOrgNm","type" : "STRING","size" : "256"},{"id" : "mrktgOrgNm","type" : "STRING","size" : "256"},{"id" : "orgId","type" : "STRING","size" : "256"},{"id" : "orgNm","type" : "STRING","size" : "256"},{"id" : "rgnDivCd","type" : "STRING","size" : "256"},{"id" : "aplyYm","type" : "STRING","size" : "256"},{"id" : "npAcruCascnt","type" : "INT","size" : "256"},{"id" : "npAcruCascntSum","type" : "INT","size" : "256","prop" : "SUM"},{"id" : "holiStorOpenRate","type" : "BIGDECIMAL","size" : "256"},{"id" : "holiStorOpenRateSum","type" : "BIGDECIMAL","size" : "256","prop" : "SUM"}]},"Rows" : [{"tkcgOrgNm" : "홍길동","mrktgOrgNm" : "AB","orgId" : "000012","rgnDivCd" : "AA_000012","orgNm" : "마케팅팀","aplyYm" : "2018년 01월","npAcruCascntSum" : "80","holiStorOpenRateSum" : "37.5","npAcruCascnt" : "50","holiStorOpenRate" : "11.50"},{"tkcgOrgNm" : "홍길동","mrktgOrgNm" : "AB","orgId" : "000012","orgNm" : "마케팅팀","rgnDivCd" : "AA_000012","aplyYm" : "2018년 02월","npAcruCascntSum" : "80","holiStorOpenRateSum" : "37.5","npAcruCascnt" : "20","holiStorOpenRate" : "12.50"},{"tkcgOrgNm" : "홍길동","mrktgOrgNm" : "AB","orgId" : "000012","orgNm" : "마케팅팀","rgnDivCd" : "AA_000012","aplyYm" : "2018년 03월","npAcruCascntSum" : "80","holiStorOpenRateSum" : "37.5","npAcruCascnt" : "10","holiStorOpenRate" : "13.50"},{"tkcgOrgNm" : "길동이","mrktgOrgNm" : "AA","orgId" : "000011","orgNm" : "영업팀","rgnDivCd" : "AA_000011","aplyYm" : "2018년 01월","npAcruCascntSum" : "70","holiStorOpenRateSum" : "46.5","npAcruCascnt" : "15","holiStorOpenRate" : "14.50"},{"tkcgOrgNm" : "길동이","mrktgOrgNm" : "AA","orgId" : "000011","orgNm" : "영업팀","rgnDivCd" : "AA_000011","aplyYm" : "2018년 02월","npAcruCascntSum" : "70","holiStorOpenRateSum" : "46.5","npAcruCascnt" : "25","holiStorOpenRate" : "15.50"},{"tkcgOrgNm" : "길동이","mrktgOrgNm" : "AA","orgId" : "000011","orgNm" : "영업팀","rgnDivCd" : "AA_000011","aplyYm" : "2018년 03월","npAcruCascntSum" : "70","holiStorOpenRateSum" : "46.5","npAcruCascnt" : "30","holiStorOpenRate" : "16.50"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new TextArea("txtDesc","20","60",null,"400","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("txt_WF_Desc");
            obj.set_value("1. 정렬 컬럼을 지정\n  this.dsPlusFeeTgtAcru.keystring = \"S:+tkcgOrgNm+mrktgOrgNm+orgId+orgNm+rgnDivCd\";\n\n2. Group로 묶을 컬럼 ID를 지정\n  this.grdPivot.groupkey = \"tkcgOrgNm,mrktgOrgNm,orgId,orgNm,rgnDivCd\";\n  this.grdPivot.summarykey = \"tkcgOrgNm,mrktgOrgNm,orgId,orgNm,rgnDivCd\";\n\n3. PivotTable을 구성하기 위한 PivotColumn ID를 지정\n  this.grdPivot.pivotkey = \"aplyYm\";\n\n4. Pivot 정렬 Column ID을 지정\n  this.grdPivot.pivotsortkey = \"aplyYm\";\n\n5. Pivot Table 초기화\n  this.fnInitGrid(this.grdPivot);\n\n6. Pivot Table 적용\n  this.fnReCalcPivot(this.grdPivot);");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPivot00","20","txtDesc:20",null,"198","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsPlusFeeTgtAcru");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"125\"/><Column size=\"120\"/><Column size=\"140\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"tkcgOrgNm\"/><Cell col=\"1\" text=\"mrktgOrgNm\"/><Cell col=\"2\" text=\"orgId\"/><Cell col=\"3\" text=\"orgNm\"/><Cell col=\"4\" text=\"rgnDivCd\"/><Cell col=\"5\" text=\"aplyYm\"/><Cell col=\"6\" text=\"npAcruCascnt\"/><Cell col=\"7\" text=\"npAcruCascntSum\"/><Cell col=\"8\" text=\"holiStorOpenRate\"/><Cell col=\"9\" text=\"holiStorOpenRateSum\"/></Band><Band id=\"body\"><Cell text=\"bind:tkcgOrgNm\"/><Cell col=\"1\" text=\"bind:mrktgOrgNm\"/><Cell col=\"2\" text=\"bind:orgId\"/><Cell col=\"3\" text=\"bind:orgNm\"/><Cell col=\"4\" text=\"bind:rgnDivCd\"/><Cell col=\"5\" text=\"bind:aplyYm\"/><Cell col=\"6\" text=\"bind:npAcruCascnt\"/><Cell col=\"7\" text=\"bind:npAcruCascntSum\"/><Cell col=\"8\" text=\"bind:holiStorOpenRate\"/><Cell col=\"9\" text=\"bind:holiStorOpenRateSum\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPivot","20","grdPivot00:10",null,"162","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsPlusFeeTgtAcru");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\" band=\"head\"/><Row size=\"28\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"담당명\"/><Cell col=\"2\" rowspan=\"2\" text=\"마케팅팀명\"/><Cell col=\"3\" rowspan=\"2\" text=\"조직코드\"/><Cell col=\"4\" rowspan=\"2\" text=\"조직코드명\"/><Cell col=\"5\" rowspan=\"2\" text=\"지역구분\"/><Cell col=\"6\" colspan=\"2\" text=\"합계\"/><Cell col=\"8\" colspan=\"2\" text=\"bind:aplyYm\"/><Cell row=\"1\" col=\"6\" text=\"MNP건수\"/><Cell row=\"1\" col=\"7\" text=\"휴일오픈율\"/><Cell row=\"1\" col=\"8\" text=\"MNP건수\"/><Cell row=\"1\" col=\"9\" text=\"휴일오픈율\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:tkcgOrgNm\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:mrktgOrgNm\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:orgId\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:orgNm\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:rgnDivCd\" textAlign=\"center\"/><Cell col=\"6\" displaytype=\"mask\" maskeditformat=\"##0\" text=\"bind:npAcruCascntSum\"/><Cell col=\"7\" text=\"bind:holiStorOpenRateSum\" displaytype=\"mask\" maskeditformat=\"#0.#0\"/><Cell col=\"8\" text=\"bind:npAcruCascnt\" suppressalign=\"middle\" displaytype=\"mask\" maskeditformat=\"##0\"/><Cell col=\"9\" text=\"bind:holiStorOpenRate\" displaytype=\"mask\" maskeditformat=\"#0.#0\"/></Band><Band id=\"summary\"><Cell colspan=\"6\" text=\"합계\"/><Cell col=\"6\" text=\"expr:dataset.getSum(&quot;npAcruCascntSum&quot;)\" textAlign=\"right\" maskeditformat=\"##0\" displaytype=\"mask\"/><Cell col=\"7\" text=\"expr:dataset.getSum(&quot;holiStorOpenRateSum&quot;)\" textAlign=\"right\" maskeditformat=\"#0.#0\" displaytype=\"mask\"/><Cell col=\"8\" text=\"expr:dataset.getSum(&quot;npAcruCascnt&quot;)\" textAlign=\"right\" maskeditformat=\"##0\" displaytype=\"mask\"/><Cell col=\"9\" text=\"expr:dataset.getSum(&quot;holiStorOpenRate&quot;)\" textAlign=\"right\" maskeditformat=\"#0.#0\" displaytype=\"mask\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","20","0","281","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("CrossTab 그리드");
            obj.set_cssclass("sta_WF_Title1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1020,860,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SampleCrossTab.xfdl","Lib::Lib_CrossTab.xjs");
        this.registerScript("SampleCrossTab.xfdl", function() {
        /**
        *  Nexacro Professional Training Couse
        *  @MenuPath    개발가이드 > 표준 및 기본 정의 > CrossTab 그리드
        *  @FileName 	SampleCrossTab.xfdl
        *  @Creator 	TOBESOFT Education
        *  @CreateDate 	2023/01/03
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2023/01/03      		 TOBESOFT Education	 	  	최초 생성
        *******************************************************************************
        */



        this.executeIncludeScript("Lib::Lib_CrossTab.xjs"); /*include "Lib::Lib_CrossTab.xjs"*/;

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        /**
         * @description 화면 onload시 처리내역(필수)
        */
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);

        	// CrossTab 설정
        	this.dsPlusFeeTgtAcru.keystring = "S:+tkcgOrgNm+mrktgOrgNm+orgId+orgNm+rgnDivCd"; 	//정렬 Column ID을 지정

        	this.grdPivot.groupkey 	 	= "tkcgOrgNm,mrktgOrgNm,orgId,orgNm,rgnDivCd"; 				//Group으로 묶을 Column ID을 지정
        	this.grdPivot.groupsortkey	= "tkcgOrgNm,mrktgOrgNm,orgId,orgNm,rgnDivCd";
        //	this.grdPivot.summarykey	= "tkcgOrgNm,mrktgOrgNm,orgId,orgNm,rgnDivCd";
        	this.grdPivot.pivotkey 	 	= "aplyYm";  												//PivotTable을 구성하기 위한 PivotColumn ID을 지정
        	this.grdPivot.pivotsortkey 	= "aplyYm";      											//Pivot 정렬 Column ID을 지정

        	this.gfnInitGrid(this.grdPivot);
        	this.gfnReCalcPivot(this.grdPivot);
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/
        /**
         * @description Transaction CallBack 함수(선택)
        */
        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if (errorCode != 0){
        		return;
        	}

        	switch(svcID){
        		case "search":
        		break;
        	}
        };

        /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/
         /**
         * @description 조회
        */
        this.fnSearch = function ()
        {

        };

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.txtDesc.addEventHandler("onchanged",this.txtDesc_onchanged,this);
        };
        this.loadIncludeScript("SampleCrossTab.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
