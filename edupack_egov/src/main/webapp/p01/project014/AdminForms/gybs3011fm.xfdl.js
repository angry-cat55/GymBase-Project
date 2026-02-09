(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("gybs3011fm");
            this.set_titletext("홈화면 (대시보드)");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(1128,698);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_currentInfo", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "TOTAL_USER_COUNT","type" : "STRING","size" : "256"},{"id" : "MONTHLY_POST_COUNT","type" : "STRING","size" : "256"},{"id" : "FAVORITE_COUNT","type" : "STRING","size" : "256"}]},"Rows" : [{"TOTAL_USER_COUNT" : "0","MONTHLY_POST_COUNT" : "0","FAVORITE_COUNT" : "0"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_transfer", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "TRANSFER_INFO","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_workLog", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "WORK_LOG_INFO","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_totalUserCount", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "TOTAL_USER_COUNT","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_monthlyTransactions", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "MONTH","type" : "STRING","size" : "256"},{"id" : "COUNT","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_growthData", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "CURRENT_MONTH_COUNT","type" : "STRING","size" : "256"},{"id" : "PREVIOUS_MONTH_COUNT","type" : "STRING","size" : "256"},{"id" : "GROWTH_PERCENT","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_approvalRate", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "APPROVAL_RATE","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_monthlyProcessingTime", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "MONTH","type" : "STRING","size" : "256"},{"id" : "AVG_HOURS","type" : "FLOAT","size" : "256"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_gymInfo","10","20","563","410",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #d4d4d4");
            obj.set_borderRadius("10px");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_logo","127","30","304","138",null,null,null,null,null,null,this.div_gymInfo.form);
            obj.set_taborder("0");
            obj.set_image("url(\'imagerc::form/Logo_c.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_background("transparent");
            obj.set_border("0px none");
            this.div_gymInfo.addChild(obj.name, obj);

            obj = new Static("sta_title","20","191","519","38",null,null,null,null,null,null,this.div_gymInfo.form);
            obj.set_taborder("2");
            obj.set_text("[GymName]의 든든한 파트너, GymBase에 오신 것을 환영합니다.");
            obj.set_font("normal 700 12pt/normal \"맑은 고딕\"");
            obj.set_color("#000000");
            obj.set_textAlign("center");
            obj.set_wordWrap("english");
            this.div_gymInfo.addChild(obj.name, obj);

            obj = new Static("sta_content","79","sta_title:20","400",null,null,"30",null,null,null,null,this.div_gymInfo.form);
            obj.set_taborder("1");
            obj.set_text("GymBase는 헬스장 정기권 양도 과정을\r\n\r\n쉽고 투명하게 관리할 수 있도록 설계된 플랫폼입니다.\r\n\r\n효율적인 양도 시스템을 통해 회원 만족도를 높이고,\r\n\r\n헬스장의 운영 편의성을 증진시키는 데 기여하겠습니다.");
            obj.set_font("normal 500 10pt/normal \"맑은 고딕\"");
            obj.set_textAlign("center");
            obj.set_color("#000000");
            obj.set_verticalAlign("top");
            this.div_gymInfo.addChild(obj.name, obj);

            obj = new Div("div_monthlyTransactions","div_gymInfo:10","20",null,"320","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #d4d4d4");
            obj.set_borderRadius("10px");
            obj.set_url("Cmm::CmmRmateChartAll.xfdl");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div_monthlyProcessingTime","div_gymInfo:10","div_monthlyTransactions:10",null,null,"10","20",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #d4d4d4");
            obj.set_borderRadius("10px");
            obj.set_url("Cmm::CmmRmateChartAll.xfdl");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div_approvalRate","10","div_gymInfo:10",null,null,"868","20",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #d4d4d4");
            obj.set_borderRadius("10px");
            obj.set_url("Cmm::CmmRmateChartAll.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_growthData","div_approvalRate:10","div_gymInfo:10",null,null,"div_monthlyProcessingTime:10","20",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #d4d4d4");
            obj.set_borderRadius("10px");
            obj.set_url("Cmm::CmmRmateChartAll.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("sta_growthPercent","346","621","150","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_color("#000000");
            obj.set_font("normal 500 12pt/normal \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_gymInfo.form
            obj = new Layout("default","",0,0,this.div_gymInfo.form,function(p){});
            this.div_gymInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_monthlyTransactions.form
            obj = new Layout("default","",0,0,this.div_monthlyTransactions.form,function(p){});
            this.div_monthlyTransactions.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_monthlyProcessingTime
            obj = new Layout("default","",0,0,this.div_monthlyProcessingTime.form,function(p){});
            this.div_monthlyProcessingTime.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_approvalRate
            obj = new Layout("default","",0,0,this.div_approvalRate.form,function(p){});
            this.div_approvalRate.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_growthData
            obj = new Layout("default","",0,0,this.div_growthData.form,function(p){});
            this.div_growthData.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1128,698,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Cmm::CmmRmateChartAll.xfdl");
        };
        
        // User Script
        this.addIncludeScript("gybs3011fm.xfdl","Lib::rMateChartH5.xjs");
        this.registerScript("gybs3011fm.xfdl", function() {
        this.executeIncludeScript("Lib::rMateChartH5.xjs"); /*include "Lib::rMateChartH5.xjs"*/;
        this.fvApp = nexacro.getApplication();
        this.fvGymName = "";
        this.isFisrtChart = false; // false : 차트 세팅된 적 없음

        this.Admin_Main_onload = function(obj,e)
        {
        	var strSvcUrl = "p014/getGymName.do";
        	var inData    = "";
        	var outData   = "";
        	var strArg    = "paramCode=" + this.fvApp.gds_accountInfo.getColumn(0, "GYM_CODE");

        	this.gfnTransaction("getGymName", strSvcUrl, inData, outData, strArg, "fnCallback", true);

        	this.fnResetDashBoardInfo();
        };

        // 대시보드 정보 가져오기
        this.fnResetDashBoardInfo = function ()
        {
        	trace("대시보드 정보 조회");

        	var strSvcUrl = "p014/getAdminDashboardInfo.do";
        	var inData    = "";
        	var outData   = "ds_totalUserCount=ds_totalUserCount ds_monthlyTransactions=ds_monthlyTransactions ds_growthData=ds_growthData ds_approvalRate=ds_approvalRate ds_monthlyProcessingTime=ds_monthlyProcessingTime";
        	var strArg    = "paramCode=" + this.fvApp.gds_accountInfo.getColumn(0, "GYM_CODE");

        	this.gfnTransaction("getAdminDashboardInfo", strSvcUrl, inData, outData, strArg, "fnCallback", true);
        };

        this.fnCallback = function(svcId, errCd, errMsg) {
        	if (svcId == "getGymName") {
        		this.div_gymInfo.form.sta_title.text = "[" + this.fvGymName + "]의 든든한 파트너, GymBase에 오신 것을 환영합니다.";
        	}
        	else if (svcId == "getAdminDashboardInfo") {
        		// 처음 차트 생성일 경우 세팅 함수
        		if (this.isFisrtChart == false) {
        			this.fnFisrtSetChart();
        			this.isFisrtChart = true;
        		}
        		// 첫 차트 생성이 아닐 경우 데이터, 레이아웃 변경 함수
        		else {
        			this.fnResetChartDataLayout()
        		}
        	}
        }

        // 차트 세팅
        this.fnFisrtSetChart = function ()
        {
        	trace("차트 설정");

        	var nMaxCnt1 = (nexacro.toNumber(this.ds_monthlyTransactions.getMax("COUNT")) + (nexacro.toNumber(this.ds_monthlyTransactions.getMax("COUNT")) / 10));
        	this.layoutStr1 = '<rMateChart backgroundColor="#FFFFFF" borderThickness="1" borderStyle="none">'
        		 +'<Options>'
        			  +'<Caption text="올해 월별 정기권 거래 완료 현황" fontSize="16" color="#000000" paddingTop="20" textAlign="center" />'
        				+'<SubCaption text="( 명 )ㅤ" color="#000000" textAlign="right" />'
        			 +'<Legend />'
        		 +'</Options>'
        		 +'<NumberFormatter id="numFmt" precision="0"/>'
        		   +'<Line2DChart showDataTips="true" dataTipDisplayMode="axis" paddingTop="0">'
        			 +'<horizontalAxis>'
        				   +'<CategoryAxis categoryField="MONTH"/>'
        			  +'</horizontalAxis>'
        			  +'<verticalAxis>'
        				 +'<LinearAxis minimum="0" maximum="' + nMaxCnt1 + '" interval="10" />' // <-- 여기 조절해서 좌측 수치 최대값, 간격 조절
        			 +'</verticalAxis>'
        				+'<series>'
        				   +'<Line2DSeries yField="COUNT" displayName="거래 수">'
        				   		+'<showDataEffect>'
        							+ '<SeriesClip duration="1000"/>'
        						+'</showDataEffect>'
        				  +'</Line2DSeries>'
        				+'</series>'
        			  +'<annotationElements>'
        				   +'<CrossRangeZoomer enableZooming="false" horizontalLabelFormatter="{numFmt}" horizontalStrokeEnable="false"/>'
        			   +'</annotationElements>'
        		  +'</Line2DChart>'
        	 +'</rMateChart>';

        	this.div_monthlyTransactions.form.fnSetChart("chart1", this.layoutStr1, this.rMateChartDataSetToXml(this.ds_monthlyTransactions));



        	var nMaxCnt2 = (nexacro.toNumber(this.ds_monthlyProcessingTime.getMax("AVG_HOURS")) + (nexacro.toNumber(this.ds_monthlyProcessingTime.getMax("AVG_HOURS")) / 10));
        	this.layoutStr2 = '<rMateChart backgroundColor="#FFFFFF"  borderStyle="none">'
        					  +'<Options>'
        						  +'<Caption text="올해 월별 평균 처리 소요 시간" fontSize="16" color="#000000" paddingTop="20" textAlign="center" />'
        							+'<SubCaption text="( 시간 )ㅤ" textAlign="right" />'
        						 +'<Legend />'
        					 +'</Options>'
        					 +'<Bar2DChart showDataTips="true">'
        						   +'<horizontalAxis>'
        							   +'<LinearAxis maximum="' + nMaxCnt2 + '"/>'
        							+'</horizontalAxis>'
        						  +'<verticalAxis>'
        							 +'<CategoryAxis categoryField="MONTH"/>'
        						 +'</verticalAxis>'
        							+'<series>'
        							   +'<Bar2DSeries labelPosition="inside" xField="AVG_HOURS" displayName="평균 시간" showValueLabels="[6,7]" color="#ffffff" insideLabelYOffset="-2">'
        									+'<showDataEffect>'
        									   +'<SeriesInterpolate/>'
        								  +'</showDataEffect>'
        							  +'</Bar2DSeries>'
        						 +'</series>'
        					  +'</Bar2DChart>'
        				  +'</rMateChart>';
        	 this.div_monthlyProcessingTime.form.fnSetChart("chart2", this.layoutStr2, this.rMateChartDataSetToXml(this.ds_monthlyProcessingTime));

        	var nMax = 0;
        	if (nexacro.toNumber(this.ds_growthData.getMax("CURRENT_MONTH_COUNT")) > nexacro.toNumber(this.ds_growthData.getMax("PREVIOUS_MONTH_COUNT"))) {
        		nMax = nexacro.toNumber(this.ds_growthData.getMax("CURRENT_MONTH_COUNT"));
        		nMax = nMax + (nMax / 10)
        	}
        	else {
        		nMax = nexacro.toNumber(this.ds_growthData.getMax("PREVIOUS_MONTH_COUNT"));
        		nMax = nMax + (nMax / 10)
        	}
        	this.layoutStr3 =
                    '<rMateChart backgroundColor="#FFFFFF" borderStyle="none">'
                        +'<Options>'
                            +'<Caption text="정기권 거래 증감률" textAlign="center" fontSize="16" color="#000000" paddingTop="20"/>'
                            +'<SubCaption text="(전월 동기간 대비)" textAlign="center" fontSize="12" color="#000000" paddingTop="3" paddingBottom="5"/>'
                            +'<Legend defaultMouseOverAction="true" useVisibleCheck="true" />'
                        +'</Options>'
                        +'<Column2DChart seriesMouseOverAction="none" showDataTips="true" columnWidthRatio="0.55" selectionMode="single" paddingBottom="5">'
                            +'<horizontalAxis>'
                                +'<CategoryAxis categoryField="Month" padding="1"/>'
                            +'</horizontalAxis>'
                            +'<verticalAxis>'
                                +'<LinearAxis maximum="' + nMax + '"/>'
                            +'</verticalAxis>'
                            +'<series>'
                                +'<Column2DSeries labelPosition="outside" yField="PREVIOUS_MONTH_COUNT" displayName="지난 달" showValueLabels="[2]">'
                                        +'<showDataEffect>'
                                            +'<SeriesInterpolate duration="1200" elementOffset="60"/>'
                                        +'</showDataEffect>'
                                +'</Column2DSeries>'
                                +'<Column2DSeries labelPosition="outside" yField="CURRENT_MONTH_COUNT" displayName="이번 달" showValueLabels="[2]">'
                                        +'<showDataEffect>'
                                            +'<SeriesInterpolate duration="1200" elementOffset="60"/>'
                                        +'</showDataEffect>'
                                +'</Column2DSeries>'
                            +'</series>'
                        +'</Column2DChart>'
                    +'</rMateChart>';
        	this.div_growthData.form.fnSetChart("chart3", this.layoutStr3, this.rMateChartDataSetToXml(this.ds_growthData));


        	var nRate = nexacro.toNumber(this.ds_approvalRate.getColumn(0, "APPROVAL_RATE"));
        	this.chartData4 = [nRate];
        	this.layoutStr4 =
            '<rMateChart paddingBottom="50">'
                +'<Options>'
                    +'<Caption text="정기권 양도 승인률" fontSize="16" color="#000000" paddingTop="20" paddingBottom="20" textAlign="center"/>'
                +'</Options>'
                +'<Gauge minimum="0" maximum="100" minimumAngle="0" maximumAngle="360" innerRatio="0.85" fontSize="30" labelJsFunction="valueFunc" dataTipJsFunction="dataTipFunc" valueChangeFunction="changeFunction" labelXOffset="3" labelYOffset="-20" foregroundColors="[#1e90f2]" backgroundColors="[#afcdff]" color="#1e90f2" labelClickJsFunction="labelClickFunc" bounceAnimating="false" easingFunction="EaseInOutCirc" roundedCorners="true">'
                    +'<backgroundElements>'
                        +'<CanvasElement>'
                            +'<CanvasLabel fontWeight="bold" height="23" fontSize="13" horizontalCenter="3" verticalCenter="30" text="승인 비율" color="#5191ff"/>'
                        +'</CanvasElement>'
                    +'</backgroundElements>'
                +'</Gauge>'
            +'</rMateChart>';
        	this.div_approvalRate.form.fnSetChart("chart4", this.layoutStr4, this.chartData4);

        	if (this.ds_growthData.getColumn(0, "GROWTH_PERCENT") != "N/A") {
        		this.sta_growthPercent.text = "지난달 대비 " + this.ds_growthData.getColumn(0, "GROWTH_PERCENT");
        	}
        };

        // 차트 데이터&레이아웃 변경
        this.fnResetChartDataLayout = function ()
        {
        	trace("차트 데이터, 레이아웃 변경");

        	var nMaxCnt1 = (nexacro.toNumber(this.ds_monthlyTransactions.getMax("COUNT")) + (nexacro.toNumber(this.ds_monthlyTransactions.getMax("COUNT")) / 10));
        	this.layoutStr1 = '<rMateChart backgroundColor="#FFFFFF"  borderThickness="1" borderStyle="none">'
        		 +'<Options>'
        			  +'<Caption text="올해 월별 정기권 거래 완료 현황" fontSize="16" color="#000000" paddingTop="20" textAlign="center" />'
        				+'<SubCaption text="( 명 )ㅤ" color="#000000" textAlign="right" />'
        			 +'<Legend />'
        		 +'</Options>'
        		 +'<NumberFormatter id="numFmt" precision="0"/>'
        		   +'<Line2DChart showDataTips="true" dataTipDisplayMode="axis" paddingTop="0">'
        			 +'<horizontalAxis>'
        				   +'<CategoryAxis categoryField="MONTH"/>'
        			  +'</horizontalAxis>'
        			  +'<verticalAxis>'
        				 +'<LinearAxis minimum="0" maximum="' + nMaxCnt1 + '" interval="10" />' // <-- 여기 조절해서 좌측 수치 최대값, 간격 조절
        			 +'</verticalAxis>'
        				+'<series>'
        				   +'<Line2DSeries yField="COUNT" displayName="거래 수">'
        				  +'</Line2DSeries>'
        				+'</series>'
        			  +'<annotationElements>'
        				   +'<CrossRangeZoomer enableZooming="false" horizontalLabelFormatter="{numFmt}" horizontalStrokeEnable="false"/>'
        			   +'</annotationElements>'
        		  +'</Line2DChart>'
        	 +'</rMateChart>';
        	this.div_monthlyTransactions.form.fnSetLayout(this.layoutStr1);
        	this.div_monthlyTransactions.form.fnSetData(this.rMateChartDataSetToXml(this.ds_monthlyTransactions));



        	var nMaxCnt2 = (nexacro.toNumber(this.ds_monthlyProcessingTime.getMax("COUNT")) + (nexacro.toNumber(this.ds_monthlyProcessingTime.getMax("AVG_HOURS")) / 10));
        	this.layoutStr2 = '<rMateChart backgroundColor="#FFFFFF"  borderStyle="none">'
        					  +'<Options>'
        						  +'<Caption text="올해 월별 평균 처리 소요 시간" fontSize="16" color="#000000" paddingTop="20" textAlign="center" />'
        							+'<SubCaption text="( 시간 )ㅤ" textAlign="right" />'
        						 +'<Legend />'
        					 +'</Options>'
        					 +'<Bar2DChart showDataTips="true">'
        						   +'<horizontalAxis>'
        							   +'<LinearAxis maximum="' + nMaxCnt2 + '"/>'
        							+'</horizontalAxis>'
        						  +'<verticalAxis>'
        							 +'<CategoryAxis categoryField="MONTH"/>'
        						 +'</verticalAxis>'
        							+'<series>'
        							   +'<Bar2DSeries labelPosition="inside" xField="AVG_HOURS" displayName="평균 시간" showValueLabels="[6,7]" color="#ffffff" insideLabelYOffset="-2">'
        							  +'</Bar2DSeries>'
        						 +'</series>'
        					  +'</Bar2DChart>'
        				  +'</rMateChart>';
        	this.div_monthlyProcessingTime.form.fnSetLayout(this.layoutStr2);
        	this.div_monthlyProcessingTime.form.fnSetData(this.rMateChartDataSetToXml(this.ds_monthlyProcessingTime));



        	var nMax = 0;
        	if (nexacro.toNumber(this.ds_growthData.getMax("CURRENT_MONTH_COUNT")) > nexacro.toNumber(this.ds_growthData.getMax("PREVIOUS_MONTH_COUNT"))) {
        		nMax = nexacro.toNumber(this.ds_growthData.getMax("CURRENT_MONTH_COUNT"));
        		nMax = nMax + (nMax / 10)
        	}
        	else {
        		nMax = nexacro.toNumber(this.ds_growthData.getMax("PREVIOUS_MONTH_COUNT"));
        		nMax = nMax + (nMax / 10)
        	}
        	this.layoutStr3 =
                    '<rMateChart backgroundColor="#FFFFFF" borderStyle="none">'
                        +'<Options>'
                            +'<Caption text="정기권 거래 증감률" textAlign="center" fontSize="16" color="#000000" paddingTop="20"/>'
                            +'<SubCaption text="(전월 동기간 대비)" textAlign="center" fontSize="12" color="#000000" paddingTop="3" paddingBottom="5"/>'
                            +'<Legend defaultMouseOverAction="true" useVisibleCheck="true" />'
                        +'</Options>'
                        +'<Column2DChart seriesMouseOverAction="none" showDataTips="true" columnWidthRatio="0.55" selectionMode="single" paddingBottom="5">'
                            +'<horizontalAxis>'
                                +'<CategoryAxis categoryField="Month" padding="1"/>'
                            +'</horizontalAxis>'
                            +'<verticalAxis>'
                                +'<LinearAxis maximum="' + nMax + '"/>'
                            +'</verticalAxis>'
                            +'<series>'
                                +'<Column2DSeries labelPosition="outside" yField="PREVIOUS_MONTH_COUNT" displayName="지난 달" showValueLabels="[2]">'
                                +'</Column2DSeries>'
                                +'<Column2DSeries labelPosition="outside" yField="CURRENT_MONTH_COUNT" displayName="이번 달" showValueLabels="[2]">'
                                +'</Column2DSeries>'
                            +'</series>'
                        +'</Column2DChart>'
                    +'</rMateChart>';
        	this.div_growthData.form.fnSetLayout(this.layoutStr3);
        	this.div_growthData.form.fnSetData(this.rMateChartDataSetToXml(this.ds_growthData));


        	var nRate = nexacro.toNumber(this.ds_approvalRate.getColumn(0, "APPROVAL_RATE"));
        	trace(nRate);
        	this.chartData4 = [nRate];
        	this.layoutStr4 =
            '<rMateChart paddingBottom="50">'
                +'<Options>'
                    +'<Caption text="정기권 양도 승인률" fontSize="16" color="#000000" paddingTop="20" paddingBottom="20" textAlign="center"/>'
                +'</Options>'
                +'<Gauge showAnimation="false" minimum="0" maximum="100" minimumAngle="0" maximumAngle="360" innerRatio="0.85" fontSize="40" labelJsFunction="valueFunc" dataTipJsFunction="dataTipFunc" valueChangeFunction="changeFunction" labelXOffset="3" labelYOffset="-20" foregroundColors="[#1e90f2]" backgroundColors="[#afcdff]" color="#1e90f2" labelClickJsFunction="labelClickFunc" bounceAnimating="false" easingFunction="EaseInOutCirc" roundedCorners="true">'
                    +'<backgroundElements>'
                        +'<CanvasElement>'
                            +'<CanvasLabel fontWeight="bold" height="23" fontSize="13" horizontalCenter="3" verticalCenter="30" text="승인 비율" color="#5191ff"/>'
                        +'</CanvasElement>'
                    +'</backgroundElements>'
                +'</Gauge>'
            +'</rMateChart>';
        	this.div_approvalRate.form.fnSetLayout(this.layoutStr4);
        	this.div_approvalRate.form.fnSetData(this.chartData4);

        	if (this.ds_growthData.getColumn(0, "GROWTH_PERCENT") != "N/A") {
        		this.sta_growthPercent.text = "지난달 대비 " + this.ds_growthData.getColumn(0, "GROWTH_PERCENT");
        	}
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
            this.addEventHandler("onload",this.Admin_Main_onload,this);
        };
        this.loadIncludeScript("gybs3011fm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
