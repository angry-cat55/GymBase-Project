(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CmmRmateChartAll");
            this.set_titletext("Rmate Chart 공통화면");
            if (Form == this.constructor)
            {
                this._setFormPosition(300,300);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsData", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Month","type" : "STRING","size" : "256"},{"id" : "Vancouver","type" : "INT","size" : "256"},{"id" : "Toronto","type" : "STRING","size" : "256"},{"id" : "Calgary","type" : "STRING","size" : "256"}]},"Rows" : [{"Month" : "Jan","Vancouver" : "91","Toronto" : "85","Calgary" : "45"},{"Month" : "Feb","Vancouver" : "87","Toronto" : "75","Calgary" : "75"},{"Month" : "Mar","Vancouver" : "88","Toronto" : "87","Calgary" : "65"},{"Month" : "Apr","Vancouver" : "86","Toronto" : "78","Calgary" : "78"},{"Month" : "May","Vancouver" : "82","Toronto" : "84","Calgary" : "56"},{"Month" : "Jun","Vancouver" : "80","Toronto" : "68","Calgary" : "65"},{"Month" : "Jul","Vancouver" : "79","Toronto" : "57","Calgary" : "54"},{"Month" : "Aug","Vancouver" : "72","Toronto" : "67","Calgary" : "79"},{"Month" : "Sep","Vancouver" : "90","Toronto" : "87","Calgary" : "85"},{"Month" : "Oct","Vancouver" : "95","Toronto" : "75","Calgary" : "79"},{"Month" : "Nov","Vancouver" : "40","Toronto" : "84","Calgary" : "65"},{"Month" : "Dec","Vancouver" : "60","Toronto" : "65","Calgary" : "79"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new WebBrowser("webChart","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CmmRmateChartAll.xfdl","Lib::rMateChartH5.xjs");
        this.registerScript("CmmRmateChartAll.xfdl", function() {
        /**
        *  Necacro EduPack
        *  @MenuPath    Cmm > CmmRmateChartAll
        *  @FileName 	CmmRmateChartAll.xfdl
        *  @Creator 	Education
        *  @CreateDate 	2025.03.01
        *  @Desction    rmate chart 공통 화면 (모든 브라우져 지원)
        ************** 소스 수정 이력 ***********************************************
        *  date          	Modifier            Description
        *******************************************************************************
        *  2025.03.01     	Education 	        최초 생성
        *******************************************************************************
        */


        /************************************************************************************************
         * include 영역(업무화면에서 꼭 필요한 경우에만 사용하세요)
         ************************************************************************************************/
        this.executeIncludeScript("Lib::rMateChartH5.xjs"); /*include "Lib::rMateChartH5.xjs"*/;


        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        var charId    = "";
        var layoutStr = "";	// 스트링 형식으로 레이아웃 정의.
        var chartData = []; // 차트 데이터


        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        /**
         * @class chart 설정 <br>
         * @param {Sring} id - DIV chart ID
         * @param {Sring} argLayoutStr - DIV chart Layout
         * @param {Sring} argChartData - DIV chart Data
         * @return N/A
         */
        this.fnSetChart = function(id, argLayoutStr, argChartData)
        {
        	charId    = this.gfnGetUniqueId(id,"");
        	layoutStr = argLayoutStr;
        	chartData = argChartData;

        	// 런타임 접속
        	if (system.navigatorname == "nexacro")
        	{
        		// 웹브라우져로 rMateChart를 그릴때면 Onload 후 this.rMateChartOnLoad 함수에서 rMateChart가 그려집니다.
        		this.gfnCreateChart(this.webChart);
        	}
        	// 웹 접속
        	else {
        		// rMateChart 를 생성합니다.
        		// 파라메터 (순서대로)
        		//  1. 차트의 id ( 임의로 지정하십시오. )
        		//  2. 차트가 위치할 div 의 id (즉, 차트의 부모 div 의 id 입니다.)
        		//  3. 차트 생성 시 필요한 환경 변수들의 묶음인 chartVars
        		//  4. 차트의 가로 사이즈 (생략 가능, 생략 시 100%)
        		//  5. 차트의 세로 사이즈 (생략 가능, 생략 시 100%)
        		//  6. 차트 LOAD 후 Layout, Data 설정하는 함수 호출(생략 시 chartVars에 설정된 함수가 호출됨)
        		var chartVars = "";
        		rMateChartH5.create(charId, this.fnGetHolderId(this.parent), chartVars, "100%", "100%", this.chartReadyHandler);
        	}
        }

        /**
         * @class chart Layout 변경 <br>
         * @param {Sring} argLayoutStr - DIV chart Layout
         * @return N/A
         */
        this.fnSetLayout = function(arrLayoutStr)
        {
        	// 런타임 접속
        	if (system.navigatorname == "nexacro")
        	{
        		layoutStr = arrLayoutStr;
        		this.rMateChartSetLayout(this.webChart, arrLayoutStr);
        	}
        	// 웹 접속
        	else {
        		document.getElementById(charId).setLayout(arrLayoutStr);
        	}
        }

        /**
         * @class chart Data 변경 <br>
         * @param {Sring} argChartData - DIV chart Data
         * @return N/A
         */
        this.fnSetData = function(argChartData)
        {
        	// 런타임 접속
        	if (system.navigatorname == "nexacro")
        	{
        		chartData = argChartData;
        		this.rMateChartSetData(this.webChart, argChartData);
        	}
        	// 웹 접속
        	else {
        		document.getElementById(charId).setData(argChartData);
        	}
        }

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
         * @class 넥사크로의 DIV 오브젝트에서 차트에서 사용할 id값을 가져오는 함수 <br>
         * @param {Object} obj - DIV
         * @return {String} DIV id
         */
        this.fnGetHolderId = function(obj) {
        	var str = "";
        	str = obj.getElement().dest_handle.id;
        	return str;
        }

        this.chartReadyHandler = function(id) {
        	//trace("chartReadyHandler id : " + id + " / charId : " + charId + " / layoutStr : " + layoutStr);
        	document.getElementById(id).setLayout(layoutStr);
        	document.getElementById(id).setData(chartData);
        }

        // size 변경시 resize 처리
        this.CmmRmateChartDiv_onsize = function(obj,e)
        {
        	if (system.navigatorname != "nexacro") {
        		if (this.gfnIsNull(charId) == false)
        		{
        			document.getElementById(charId).resize();
        		}
        	}
        };

        // Runtime 실행 시 웹브라우져에 차트 호출 시 this.rMateChartOnLoad 함수에서 rMateChart를 그려야 합니다.
        this.rMateChartOnLoad = function()
        {
        	//trace('============= rMateChartOnLoad 실행');
        	this.webChart.visible = true;

        	this.rMateChartSetLayout(this.webChart, layoutStr);
        	this.rMateChartSetData(this.webChart, chartData);
        };


        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onsize",this.CmmRmateChartDiv_onsize,this);
            this.addEventHandler("onbeforeclose",this.CmmRmateChartAll_onbeforeclose,this);
        };
        this.loadIncludeScript("CmmRmateChartAll.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
