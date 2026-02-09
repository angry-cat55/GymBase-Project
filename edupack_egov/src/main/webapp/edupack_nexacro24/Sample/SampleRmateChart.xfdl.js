(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SampleRmateChart");
            this.set_titletext("rMate 챠트(웹브라우져 방식)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsData", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Month","type" : "STRING","size" : "256"},{"id" : "Vancouver","type" : "INT","size" : "256"},{"id" : "Toronto","type" : "STRING","size" : "256"},{"id" : "Calgary","type" : "STRING","size" : "256"}]},"Rows" : [{"Month" : "Jan","Vancouver" : "91","Toronto" : "85","Calgary" : "45"},{"Month" : "Feb","Vancouver" : "87","Toronto" : "75","Calgary" : "75"},{"Month" : "Mar","Vancouver" : "88","Toronto" : "87","Calgary" : "65"},{"Month" : "Apr","Vancouver" : "86","Toronto" : "78","Calgary" : "78"},{"Month" : "May","Vancouver" : "82","Toronto" : "84","Calgary" : "56"},{"Month" : "Jun","Vancouver" : "80","Toronto" : "68","Calgary" : "65"},{"Month" : "Jul","Vancouver" : "79","Toronto" : "57","Calgary" : "54"},{"Month" : "Aug","Vancouver" : "72","Toronto" : "67","Calgary" : "79"},{"Month" : "Sep","Vancouver" : "90","Toronto" : "87","Calgary" : "85"},{"Month" : "Oct","Vancouver" : "95","Toronto" : "75","Calgary" : "79"},{"Month" : "Nov","Vancouver" : "40","Toronto" : "84","Calgary" : "65"},{"Month" : "Dec","Vancouver" : "60","Toronto" : "65","Calgary" : "79"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnLine","10","104","80","26",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Line");
            this.addChild(obj.name, obj);

            obj = new Button("btnBar","95","104","80","26",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Bar");
            this.addChild(obj.name, obj);

            obj = new Button("btnPie","265","104","80","26",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Pie");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtDesc","20","60",null,"40","20",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("txt_WF_Desc");
            obj.set_value("rMate Chart 연동 샘플이다.");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","20","txtDesc:20","970","26",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnLine\"/><PanelItem id=\"PanelItem01\" componentid=\"btnBar\"/><PanelItem id=\"PanelItem02\" componentid=\"btnColumn\"/><PanelItem id=\"PanelItem03\" componentid=\"btnPie\"/><PanelItem id=\"PanelItem04\" componentid=\"btnLine00\"/><PanelItem id=\"PanelItem05\" componentid=\"btnBar00\"/><PanelItem id=\"PanelItem06\" componentid=\"btnColumn00\"/><PanelItem id=\"PanelItem07\" componentid=\"btnCombination\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00",null,"Panel00:10","230",null,"20","30",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsData");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"Month\"/><Cell col=\"1\" text=\"Vancouver\"/><Cell col=\"2\" text=\"Toronto\"/></Band><Band id=\"body\"><Cell text=\"bind:Month\"/><Cell col=\"1\" text=\"bind:Vancouver\"/><Cell col=\"2\" text=\"bind:Toronto\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnLine00","370","104","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Line - Multi");
            this.addChild(obj.name, obj);

            obj = new Button("btnBar00","495","104","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Bar - Multi");
            this.addChild(obj.name, obj);

            obj = new Button("btnColumn","180","104","80","26",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Column");
            this.addChild(obj.name, obj);

            obj = new Button("btnColumn00","620","104","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Column - Multi");
            this.addChild(obj.name, obj);

            obj = new Button("btnCombination","765","104","230","26",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Combination(Column+Line) ");
            this.addChild(obj.name, obj);

            obj = new Div("div00","20","Panel00:10",null,null,"258","30",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Div("div00","7","7",null,"458","7",null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_Area");
            this.div00.addChild(obj.name, obj);

            obj = new WebBrowser("webChart","7","7",null,"442","7",null,null,null,null,null,this.div00.form.div00.form);
            obj.set_taborder("0");
            this.div00.form.div00.addChild(obj.name, obj);

            obj = new Static("staTitle","20","0","281","60",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("rMate 챠트(웹브라우져 방식)");
            obj.set_cssclass("sta_WF_Title1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00.form.div00.form
            obj = new Layout("default","",0,0,this.div00.form.div00.form,function(p){});
            this.div00.form.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1020,650,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SampleRmateChart.xfdl","Lib::rMateChartH5.xjs");
        this.registerScript("SampleRmateChart.xfdl", function() {
        /**
        *  Nexacro Professional Training Couse
        *  @MenuPath    개발가이드 > 컴포넌트 및 연동 > rMate 챠트(웹브라우져 방식)
        *  @FileName 	SampleRmateChart.xfdl
        *  @Creator 	TOBESOFT Education
        *  @CreateDate 	2025/01/03
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2025/01/03      		 TOBESOFT Education	 	  	최초 생성
        *******************************************************************************
        */




        /************************************************************************************************
         * include 영역(업무화면에서 꼭 필요한 경우에만 사용하세요)
         ************************************************************************************************/
        this.executeIncludeScript("Lib::rMateChartH5.xjs"); /*include "Lib::rMateChartH5.xjs"*/;

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);
        	this.gfnCreateChart(this.div00.form.div00.form.webChart);
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/

        /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        //아래 함수명 변경 불가
        this.rMateChartOnLoad = function()
        {
        	trace('============= rMateChartOnLoad');

        	var arrOption = {title:"Rainfall", subtitle:"( mm )", xfield:"Month", yfield:"Vancouver", displayName : "Vancouver", minimum:"40",  maximum:"100", interval:"5"};
        	var sType = "Line";
        	this.gfnSetChart(this.div00.form.div00.form.webChart, this.dsData, sType, arrOption);
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
        * 라인형 차트 그리기
        * @param  : obj		   - [object]Button
        * @param  : e		   - [string]ClickEventInfo
        * @return : N/A
        * @example :
        */
        this.btnLine_onclick = function(obj,e)
        {
        	var arrOption = {title:"Rainfall", subtitle:"( mm )", xfield:"Month", yfield:"Vancouver", displayName : "Vancouver", minimum:"40",  maximum:"100", interval:"5"};
        	var sType = "Line";
        	this.gfnSetChart(this.div00.form.div00.form.webChart, this.dsData, sType, arrOption);
        };

        /**
        * 바형 차트 그리기
        * @param  : obj		   - [object]Button
        * @param  : e		   - [string]ClickEventInfo
        * @return : N/A
        * @example :
        */
        this.btnBar_onclick = function(obj,e)
        {
        	var arrOption = {title:"Rainfall", subtitle:"( mm )", yfield:"Month", xfield:"Vancouver", xfielddisplayname : "Vancouver", minimum:"40",  maximum:"100", interval:"5"};
        	var sType = "Bar";
        	this.gfnSetChart(this.div00.form.div00.form.webChart, this.dsData, sType, arrOption);
        };

        /**
        * 컬럼 차트 그리기
        * @param  : obj		   - [object]Button
        * @param  : e		   - [string]ClickEventInfo
        * @return : N/A
        * @example :
        */
        this.btnColumn_onclick = function(obj,e)
        {
        	var arrOption = {title:"Rainfall", subtitle:"( mm )", xfield:"Month", yfield:"Vancouver", displayName : "Vancouver", minimum:"40",  maximum:"100", interval:"5"};
        	var sType = "Column";
        	this.gfnSetChart(this.div00.form.div00.form.webChart, this.dsData, sType, arrOption);
        };

        /**
        * 파이형 차트 그리기
        * @param  : obj		   - [object]Button
        * @param  : e		   - [string]ClickEventInfo
        * @return : N/A
        * @example :
        */
        this.btnPie_onclick = function(obj,e)
        {
        	var arrOption = {title:"Annual Report", subtitle:"2013", field:"Vancouver", fieldname : "Month"};
        	var sType = "Pie";
        	this.gfnSetChart(this.div00.form.div00.form.webChart, this.dsData, sType, arrOption);
        };

        /**
        * 라인 멀티시리즈 차트 그리기
        * @param  : obj		   - [object]Button
        * @param  : e		   - [string]ClickEventInfo
        * @return : N/A
        * @example :
        */
        this.btnLine00_onclick = function(obj,e)
        {
        	var arrOption = {title:"Rainfall", subtitle:"( mm )", xfield:"Month", yfield:"Vancouver,Toronto", displayName:"Vancouver,Toronto", minimum:"40",  maximum:"100", interval:"5"};
        	var sType = "Line";
        	this.gfnSetMultiChart(this.div00.form.div00.form.webChart, this.dsData, sType, arrOption);
        };

        /**
        * 바 멀티시리즈 차트 그리기
        * @param  : obj		   - [object]Button
        * @param  : e		   - [string]ClickEventInfo
        * @return : N/A
        * @example :
        */
        this.btnBar00_onclick = function(obj,e)
        {
        	var arrOption = {title:"Rainfall", subtitle:"( mm )", yfield:"Month", xfield:"Vancouver,Toronto", xfielddisplayname : "Vancouver,Toronto", minimum:"40",  maximum:"100", interval:"5"};
        	var sType = "Bar";
        	this.gfnSetMultiChart(this.div00.form.div00.form.webChart, this.dsData, sType, arrOption);
        };

        /**
        * 컬럼 멀티시리즈 차트 그리기
        * @param  : obj		   - [object]Button
        * @param  : e		   - [string]ClickEventInfo
        * @return : N/A
        * @example :
        */
        this.btnColumn00_onclick = function(obj,e)
        {
        	var arrOption = {title:"Rainfall", subtitle:"( mm )", xfield:"Month", yfield:"Vancouver,Toronto", displayName : "Vancouver,Toronto", minimum:"40",  maximum:"100", interval:"5"};
        	var sType = "Column";
        	this.gfnSetMultiChart(this.div00.form.div00.form.webChart, this.dsData, sType, arrOption);
        };

        /**
        * 콤비네이션(Column+Line) 차트 그리기
        * @param  : obj		   - [object]Button
        * @param  : e		   - [string]ClickEventInfo
        * @return : N/A
        * @example :
        */
        this.btnCombination_onclick = function(obj,e)
        {
        	var arrOption = {title:"Rainfall", subtitle:"( mm )", xfield:"Month", yfield:"Vancouver,Toronto", displayName : "Vancouver,Toronto"};
        	this.gfnSetCombinationChart(this.div00.form.div00.form.webChart, this.dsData, arrOption);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnLine.addEventHandler("onclick",this.btnLine_onclick,this);
            this.btnBar.addEventHandler("onclick",this.btnBar_onclick,this);
            this.btnPie.addEventHandler("onclick",this.btnPie_onclick,this);
            this.txtDesc.addEventHandler("onchanged",this.txtDesc_onchanged,this);
            this.btnLine00.addEventHandler("onclick",this.btnLine00_onclick,this);
            this.btnBar00.addEventHandler("onclick",this.btnBar00_onclick,this);
            this.btnColumn.addEventHandler("onclick",this.btnColumn_onclick,this);
            this.btnColumn00.addEventHandler("onclick",this.btnColumn00_onclick,this);
            this.btnCombination.addEventHandler("onclick",this.btnCombination_onclick,this);
        };
        this.loadIncludeScript("SampleRmateChart.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
