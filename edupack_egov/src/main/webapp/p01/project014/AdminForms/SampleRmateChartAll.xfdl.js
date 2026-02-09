(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SampleRmateChartAll");
            this.set_titletext("rMate 챠트(공통화면 방식)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,1430);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsData", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "GYM_NAME","type" : "STRING","size" : "256"},{"id" : "COUNT","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new TextArea("txtDesc","20","60",null,"80","20",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("txt_WF_Desc");
            obj.set_value("브라우져에 따라 rMateChart를 실행 한다.\n   웹브라우져 - Div 컴포넌트에 직접 rMateChart를 실행.\n   넥사크로브라우져 : 웹 브라우져로 rMateChart를 실행.");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","txtDesc:20","168","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("1) Line ");
            obj.set_cssclass("sta_WF_Title3");
            obj.set_padding("5px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","20","Static00:0","486","350",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_url("Cmm::CmmRmateChartAll.xfdl");
            obj.set_cssclass("div_WF_Area");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","515","txtDesc:20","168","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("2) Bar");
            obj.set_cssclass("sta_WF_Title3");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","515","Static01:0","486","350",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_url("Cmm::CmmRmateChartAll.xfdl");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20","Div00:20","168","26",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("3) Column");
            obj.set_cssclass("sta_WF_Title3");
            this.addChild(obj.name, obj);

            obj = new Div("Div02","20","Static02:5","486","350",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_url("Cmm::CmmRmateChartAll.xfdl");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","515","Div01:20","168","26",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("4) Pie");
            obj.set_cssclass("sta_WF_Title3");
            this.addChild(obj.name, obj);

            obj = new Div("Div03","515","Static03:5","486","350",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_url("Cmm::CmmRmateChartAll.xfdl");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("btnChangData","889","Div01:20","110","26",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Data 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnChangLayout","774","Div01:20","110","26",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Layout 변경");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","20","0","281","60",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("rMate 챠트(공통화면 방식)");
            obj.set_cssclass("sta_WF_Title1");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","675","9","223","40",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("새로고침");
            this.addChild(obj.name, obj);

            obj = new Div("Div04","24","1035","486","350",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_url("Cmm::CmmRmateChartAll.xfdl");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","40","960","325","77",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("5) 퍼센트 차트 체크");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","560","1100","223","40",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("새로고침");
            this.addChild(obj.name, obj);

            obj = new Button("btnChangLayout00","993","557","110","26",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Layout 변경");
            this.addChild(obj.name, obj);

            obj = new Static("sta","228","1347","79","63",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Static05");
            obj.set_textAlign("center");
            obj.set_color("#1e90f2");
            obj.set_font("normal 700 16pt/normal \"맑은 고딕\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div02
            obj = new Layout("default","",0,0,this.Div02.form,function(p){});
            this.Div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div03
            obj = new Layout("default","",0,0,this.Div03.form,function(p){});
            this.Div03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div04
            obj = new Layout("default","",0,0,this.Div04.form,function(p){});
            this.Div04.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Cmm::CmmRmateChartAll.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SampleRmateChartAll.xfdl","Lib::rMateChartH5.xjs");
        this.registerScript("SampleRmateChartAll.xfdl", function() {
        /**
        *  Nexacro Professional Training Couse
        *  @MenuPath   개발가이드 > 컴포넌트 및 연동 > rMate 챠트(공통화면 방식)
        *  @FileName 	SampleRmateChartAll.xfdl
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
        this.layoutStr1;
        this.layoutStr2;
        this.layoutStr3;
        this.layoutStr4;

        this.layoutStr5;

        this.chartData1;
        this.chartData2;
        this.chartData3;
        this.chartData4;

        this.chartData5;

        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
         this.form_onload = function(obj, e)
        {
        	// 스트링 형식으로 레이아웃 정의.
        	this.layoutStr1 = '<rMateChart backgroundColor="#FFFFFF"  borderThickness="1" borderStyle="none">'
        		 +'<Options>'
        			  +'<Caption text="Rainfall" textAlign="center" />'
        				+'<SubCaption text="( mm )" textAlign="right" />'
        			 +'<Legend />'
        		 +'</Options>'
        		 +'<NumberFormatter id="numFmt" precision="0"/>'
        		   +'<Line2DChart showDataTips="true" dataTipDisplayMode="axis" paddingTop="0">'
        			 +'<horizontalAxis>'
        				   +'<CategoryAxis categoryField="Month"/>'
        			  +'</horizontalAxis>'
        			  +'<verticalAxis>'
        				 +'<LinearAxis minimum="0" maximum="100" interval="10" />' // <-- 여기 조절해서 좌측 수치 최대값, 간격 조절
        			 +'</verticalAxis>'
        				+'<series>'
        				   +'<Line2DSeries yField="Vancouver" displayName="Vancouver">'
        				  +'</Line2DSeries>'
        				+'</series>'
        			  +'<annotationElements>'
        				   +'<CrossRangeZoomer enableZooming="false" horizontalLabelFormatter="{numFmt}" horizontalStrokeEnable="false"/>'
        			   +'</annotationElements>'
        		  +'</Line2DChart>'
        	 +'</rMateChart>';

        	// 차트 데이터
        	this.chartData1 = [  {"Month":"Jan","Vancouver":40},
        						{"Month":"Feb","Vancouver":50},
        						{"Month":"Mar","Vancouver":47},
        						{"Month":"Apr","Vancouver":57},
        						{"Month":"May","Vancouver":68},
        						{"Month":"Jun","Vancouver":52},
        						{"Month":"Jul","Vancouver":36},
        						{"Month":"Aug","Vancouver":42},
        						{"Month":"Sep","Vancouver":33},
        						{"Month":"Oct","Vancouver":39},
        						{"Month":"Nov","Vancouver":45},
        						{"Month":"Dec","Vancouver":40}];

        	// 스트링 형식으로 레이아웃 정의.
        	this.layoutStr2 =
        					'<rMateChart backgroundColor="#FFFFFF"  borderStyle="none">'
        					  +'<Options>'
        						  +'<Caption text="Rainfall" textAlign="center" />'
        							+'<SubCaption text="( mm )" textAlign="right" />'
        						 +'<Legend />'
        					 +'</Options>'
        					 +'<Bar2DChart showDataTips="true">'
        						   +'<horizontalAxis>'
        							   +'<LinearAxis maximum="100"/>'
        							+'</horizontalAxis>'
        						  +'<verticalAxis>'
        							 +'<CategoryAxis categoryField="Month"/>'
        						 +'</verticalAxis>'
        							+'<series>'
        							   +'<Bar2DSeries labelPosition="inside" xField="Vancouver" displayName="Vancouver" showValueLabels="[6,7]" color="#ffffff" insideLabelYOffset="-2">'
        									+'<showDataEffect>'
        									   +'<SeriesInterpolate/>'
        								  +'</showDataEffect>'
        							  +'</Bar2DSeries>'
        						 +'</series>'
        					  +'</Bar2DChart>'
        				  +'</rMateChart>';

        	// 차트 데이터
        	this.chartData2 = [  {"Month":"Jan", "Vancouver":21},
        						{"Month":"Feb", "Vancouver":29},
        						{"Month":"Mar", "Vancouver":48},
        						{"Month":"Apr", "Vancouver":38},
        						{"Month":"May", "Vancouver":59},
        						{"Month":"Jun", "Vancouver":77.2},
        						{"Month":"Jul", "Vancouver":68},
        						{"Month":"Aug", "Vancouver":58},
        						{"Month":"Sep", "Vancouver":44},
        						{"Month":"Oct", "Vancouver":23}];


        	// 스트링 형식으로 레이아웃 정의.
        	this.layoutStr3 =
        					'<rMateChart backgroundColor="#FFFFFF"  borderStyle="none">'
        					  +'<Options>'
        						  +'<Caption text="World Top 10 - Fastest Growing Economies (2017)" textAlign="center" />'
        						 +'<SubCaption text="GDP Growth (In %)" textAlign="center" />'
        					 +'</Options>'
        					 +'<SeriesInterpolate id="ss"/>'
        					   +'<Column2DChart showDataTips="true" selectionMode="multiple" columnWidthRatio="0.48">'
        						   +'<horizontalAxis>'
        							   +'<CategoryAxis categoryField="Country"/>'
        							+'</horizontalAxis>'
        						  +'<verticalAxis>'
        							 +'<LinearAxis maximum="100" interval="10"/>'
        						  +'</verticalAxis>'
        							+'<series>'
        							   +'<Column2DSeries labelPosition="outside" yField="GDP" displayName="GDP Growth (In %)" showDataEffect="{ss}" showValueLabels="[4]">'
        							  +'</Column2DSeries>'
        						  +'</series>'
        					  +'</Column2DChart>'
        				   +'</rMateChart>';

        	// 차트 데이터
        	this.chartData3 = [  {"Country":"SouthSudan", "GDP":20},
        						{"Country":"Libya", "GDP":30},
        						{"Country":"SierraLeone", "GDP":51.2},
        						{"Country":"Mongolia", "GDP":44.5},
        						{"Country":"Paraguay", "GDP":62.35},
        						{"Country":"TimorLeste", "GDP":84.46},
        						{"Country":"Iraq", "GDP":48.9},
        						{"Country":"Panama", "GDP":38},
        						{"Country":"Gambia", "GDP":60.5},
        						{"Country":"Mozam-bique", "GDP":40.1}];

        	this.layoutStr4 = '<rMateChart backgroundColor="#FFFFFF" borderStyle="none" >'
        					  +'<Options>'
        						  +'<Caption text="Annual Report" textAlign="center" />'
        							+'<SubCaption text="2013"/>'
        						  +'<Legend useVisibleCheck="true"/>'
        					   +'</Options>'
        					 +'<Pie2DChart showDataTips="true">'
        				   /* Pie2D 차트 생성시에 필요한 Pie2DChart 정의합니다. */
        				   /* showDataTips : 데이터에 마우스를 가져갔을 때 나오는 Tip을 보이기/안보이기 속성입니다. */
        						  +'<series>'
        							   +'<Pie2DSeries nameField="Month" field="Profit" labelPosition="inside" color="#ffffff" startAngle="136">'
        							 /* Pie2DChart 정의 후 Pie2DSeries labelPosition="inside"정의합니다 */
        								   +'<showDataEffect>'
        								   /* 차트 생성시에 Effect를 주고 싶을 때 shoDataEffect정의합니다 */
        // 얘 지우면 애니메이션 X					+'<SeriesSlide duration="1000"/>'
        				 /* SeriesSlide 효과는 시리즈 데이터가 데이터로 표시될 때 한쪽에서 미끄러지듯 나타나는 효과를 적용합니다. */
        					/* elementOffset : effect를 지연시키는 시간을 지정합니다 default:20 */
        					/* minimumElementDuration : 각 엘리먼트의 최소 지속 시간을 설정합니다 default:0 */
        								 /* 이 값보다 짧은 시간에 effect가 실행되지 않습니다. */
        				  /* offset : effect개시의 지연시간을 설정합니다 default:0 */
        				  /* perElementOffset : 각 엘리먼트의 개시 지연시간을 설정합니다. */
        					/* direction : left:왼쪽, right:오른쪽, up:위, down:아래 default는 left입니다. */
        								   +'</showDataEffect>'
        							  +'</Pie2DSeries>'
        						 +'</series>'
        					  +'</Pie2DChart>'
        				  +'</rMateChart>';

        	// 차트 데이터
        	this.chartData4 = [ {"Month":"Jan", "Profit":350},
        						{"Month":"Feb", "Profit":80},
        						{"Month":"Mar", "Profit":60},
        						{"Month":"Apr", "Profit":170},
        						{"Month":"May", "Profit":280}];

        	this.chartData5 = [65];
        	this.sta.text = this.chartData5[0] + "%";

        	this.layoutStr5 =
            '<rMateChart paddingBottom="50">'
                +'<Options>'
                    +'<Caption text="Gauge Sample" paddingBottom="95" />'
                +'</Options>'
                /**
                 * showDataTip : 툴팁 출력 설정
                 * minimum : 게이지 최소 값
                 * maximum : 게이지 최대 값
                 * startAngle : 시작 각도
                 * minimumAngle : 게이지 최소 각도
                 * maximumAngle : 게이지 최대 각도
                 * gaugeWidth : 게이지 가로 크기
                 * gaugeHeight : 게이지 세로 크기
                 * innerRatio : 안쪽 영역 비율 값, 유효 값 0 ~ 1
                 * outerRatio : 바깥쪽 영역 비율 값, 유효 값 0 ~ 1
                 * circleOffset : 값이 여러개일 경우 원 형태 간의 여백을 설정합니다.
                 * horizontalOriginRatio : 게이지 출력 수평위치를 설정합니다.
                 * verticalOriginRatio : 게이지 출력 수직위치를 설정합니다.
                 * valueChangeFunction : 데이터가 변경 될 경우 호출될 사용자 정의 함수를 설정합니다
                 * fillJsFunction : 데이터의 값에 따른 색상 값을 설정하는 사용자 정의 함수를 설정합니다.
                 * duration : 이펙트 출력시간을 설정합니다. default 800
                 * bounceAnimating : 튕김 이펙트를 설정합니다. deafult true
                 * showValueLabel : 수치 라벨을 출력할지 설정합니다. default true
                 * valueField : 여러 데이터를 출력 할 경우 차트 데이터의 필드 명을 설정합니다.
                 * nameField : 여러 데이터 출력 시 해당 데이터에 대한 이름을 출력할 필드 명을 설정합니다.
                 * backgroundColors : 게이지가 출력되는 영역의 배경 색상을 설정합니다. default [#e2eaf3]
                 * backgroundStrokes : 게이지가 출력되는 영역의 배경 테두리 색상을 설정합니다.
                 * foregroundColors : 게이지가 출력되는 영역의 색상을 설정합니다. default [#51c0ee]
                 * foregroundStrokes : 게이지가 출력되는 영역의 테두리 색상을 설정합니다.
                 */
                +'<Gauge minimum="0" maximum="100" minimumAngle="0" maximumAngle="360" innerRatio="0.85" fontSize="53" labelJsFunction="valueFunc" dataTipJsFunction="dataTipFunc" valueChangeFunction="changeFunction" labelXOffset="3" labelYOffset="-20" foregroundColors="[#1e90f2]" backgroundColors="[#afcdff]" color="#1e90f2" labelClickJsFunction="labelClickFunc" bounceAnimating="false" easingFunction="EaseInOutCirc" roundedCorners="true">'
                    +'<backgroundElements>'
                        +'<CanvasElement>'
                            +'<CanvasLabel fontWeight="bold" height="23" fontSize="23" horizontalCenter="3" verticalCenter="30" text="텍스트" color="#afcdff"/>'
                        +'</CanvasElement>'
                    +'</backgroundElements>'
                +'</Gauge>'
            +'</rMateChart>';




        	this.Div00.form.fnSetChart("chart1", this.layoutStr1, this.rMateChartDataSetToXml(this.dsData));
         	this.Div01.form.fnSetChart("chart2", this.layoutStr2, this.rMateChartDataSetToXml(this.dsData));
         	this.Div02.form.fnSetChart("chart3", this.layoutStr3, this.chartData3);
         	this.Div03.form.fnSetChart("chart4", this.layoutStr4, this.chartData4);
        	this.Div04.form.fnSetChart("chart5", this.layoutStr5, this.chartData5);
         }

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/

        /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        this.btnChangData_onclick = function(obj,e)
        {
        	// 차트 데이터
        	this.chartData4 = [ {"Month":"Jan", "Profit":350},
        						{"Month":"Feb", "Profit":80},
        						{"Month":"Mar", "Profit":60},
        						{"Month":"Apr", "Profit":170},
        						{"Month":"May", "Profit":100}];

        	this.Div03.form.fnSetData(this.chartData4);
        };

        this.btnChangLayout_onclick = function(obj,e)
        {
        	// 스트링 형식으로 레이아웃 정의.
        	this.layoutStr4 = '<rMateChart backgroundColor="#FFFFFF" borderStyle="none" >'
        					  +'<Options>'
        						  +'<Caption text="Annual Report"/>'
        							+'<SubCaption text="2015"/>'
        						  +'<Legend useVisibleCheck="true"/>'
        					   +'</Options>'
        					 +'<Pie2DChart showDataTips="true">'
        				   /* Pie2D 차트 생성시에 필요한 Pie2DChart 정의합니다. */
        				   /* showDataTips : 데이터에 마우스를 가져갔을 때 나오는 Tip을 보이기/안보이기 속성입니다. */
        						  +'<series>'
        							   +'<Pie2DSeries nameField="Month" field="Profit" labelPosition="inside" color="#ffffff" startAngle="136">'
        							 /* Pie2DChart 정의 후 Pie2DSeries labelPosition="inside"정의합니다 */
        								   +'<showDataEffect>'
        								   /* 차트 생성시에 Effect를 주고 싶을 때 shoDataEffect정의합니다 */
        										+'<SeriesSlide duration="1000"/>'
        				 /* SeriesSlide 효과는 시리즈 데이터가 데이터로 표시될 때 한쪽에서 미끄러지듯 나타나는 효과를 적용합니다. */
        					/* elementOffset : effect를 지연시키는 시간을 지정합니다 default:20 */
        					/* minimumElementDuration : 각 엘리먼트의 최소 지속 시간을 설정합니다 default:0 */
        								 /* 이 값보다 짧은 시간에 effect가 실행되지 않습니다. */
        				  /* offset : effect개시의 지연시간을 설정합니다 default:0 */
        				  /* perElementOffset : 각 엘리먼트의 개시 지연시간을 설정합니다. */
        					/* direction : left:왼쪽, right:오른쪽, up:위, down:아래 default는 left입니다. */
        								   +'</showDataEffect>'
        							  +'</Pie2DSeries>'
        						 +'</series>'
        					  +'</Pie2DChart>'
        				  +'</rMateChart>';

        	this.Div03.form.fnSetLayout(this.layoutStr4);
        };
        this.Button00_onclick = function(obj,e)
        {
        	this.dsData.setColumn(0, "Vancouver", this.dsData.getColumn(0, "Vancouver") - 1);
        	this.Div00.form.fnSetData(this.rMateChartDataSetToXml(this.dsData));

        	this.chartDataNew = [50];
        	this.sta.text = this.chartDataNew[0] + "%";
        	this.Div04.form.fnSetData(this.chartDataNew);
        };

        // 라벨 클릭 함수
        this.labelClickFunc = function(value){
            alert(value);
        }

        // 수치 라벨 사용자 정의 함수
        window.valueFunc = function(value){

           return value.toFixed(0) + "%";
        }

        // 데이터 팁 사용자 정의 함수
        this.dataTipFunc = function(value){
            return value + "%";
        }

        //게이지 값 랜덤 변경 함수
        this.changeValue = function()
        {
            // 게이지의 값을 변경할려면 setData 함수를 사용하세요.
            document.getElementById("chart1").setData([parseInt(Math.random()*100)]);
        }

        // 게이지 값 보관.
        this.gaugeValue;

        // 게이지 value change 이벤트 핸들러 함수.
        this.changeFunction = function(value)
        {
            this.gaugeValue = value;
        }

        // 확인
        this.commitValue = function()
        {
            alert(this.gaugeValue);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.txtDesc.addEventHandler("onchanged",this.txtDesc_onchanged,this);
            this.btnChangData.addEventHandler("onclick",this.btnChangData_onclick,this);
            this.btnChangLayout.addEventHandler("onclick",this.btnChangLayout_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button00_00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("SampleRmateChartAll.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
