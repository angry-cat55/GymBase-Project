(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SampleCalendar");
            this.set_titletext("월/기간 달력");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,1110);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "dtFrom","type" : "STRING","size" : "256"},{"id" : "dtTo","type" : "STRING","size" : "256"},{"id" : "dtMonth","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "DATE","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "fr","type" : "STRING","size" : "256"},{"id" : "to","type" : "STRING","size" : "256"}]},"Rows" : [{"fr" : "20250701","to" : "20250721"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divCalFromTo","20","385","310","26",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_url("Cmm::CmmCalendarFromTo.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btnInit","264","421","100","26",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_LineBlue");
            this.addChild(obj.name, obj);

            obj = new Button("btnGetFromDate","20","421","108","26",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("getFromDate");
            obj.set_cssclass("btn_WF_FillGray");
            this.addChild(obj.name, obj);

            obj = new Edit("editFromDate","133","421","101","26",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnGetToDate","20","452","108","26",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("getToDate");
            obj.set_cssclass("btn_WF_FillGray");
            this.addChild(obj.name, obj);

            obj = new Edit("editToDate","133","452","101","26",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetFromDate","20","483","108","26",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("setFromDate");
            obj.set_cssclass("btn_WF_LineGray");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSetFrom","133","483","101","26",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_maxlength("8");
            obj.set_value("20250506");
            obj.set_text("20250506");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetToDate","20","514","108","26",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("setToDate");
            obj.set_cssclass("btn_WF_LineGray");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSetTo","133","514","101","26",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_maxlength("8");
            obj.set_value("20250518");
            obj.set_text("20250518");
            this.addChild(obj.name, obj);

            obj = new Button("btnEnableTrue","264","452","100","26",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("enable true");
            obj.set_cssclass("btn_WF_LineBlue");
            this.addChild(obj.name, obj);

            obj = new Button("btnEnableFalse","369","452","100","26",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("enable false");
            obj.set_cssclass("btn_WF_LineBlue");
            this.addChild(obj.name, obj);

            obj = new Button("btnReadonlyTrue","264","483","100","26",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("readonly true");
            obj.set_cssclass("btn_WF_LineBlue");
            this.addChild(obj.name, obj);

            obj = new Button("btnReadonlyFalse","369","483","100","26",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("readonly false");
            obj.set_cssclass("btn_WF_LineBlue");
            this.addChild(obj.name, obj);

            obj = new Button("btnRequiredFalse","369","514","100","26",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("required false");
            obj.set_cssclass("btn_WF_LineBlue");
            this.addChild(obj.name, obj);

            obj = new Button("btnRequiredTrue","264","514","100","26",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("required true");
            obj.set_cssclass("btn_WF_LineBlue");
            this.addChild(obj.name, obj);

            obj = new Div("divCalMM","530","385","128","26",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("Div00");
            obj.set_url("Cmm::CmmCalendarMonth.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btnGetDate00","530","421","108","26",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("getFromDate");
            obj.set_cssclass("btn_WF_FillGray");
            this.addChild(obj.name, obj);

            obj = new Edit("editFromDate00","643","421","101","26",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetDate00","530","452","108","26",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("setFromDate");
            obj.set_cssclass("btn_WF_LineGray");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSetFrom00","643","452","101","26",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_maxlength("6");
            obj.set_value("202505");
            obj.set_text("202505");
            this.addChild(obj.name, obj);

            obj = new Button("btnEnableTrue00","774","452","100","26",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("enable true");
            obj.set_cssclass("btn_WF_LineBlue");
            this.addChild(obj.name, obj);

            obj = new Button("btnEnableFalse00","879","452","100","26",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("enable false");
            obj.set_cssclass("btn_WF_LineBlue");
            this.addChild(obj.name, obj);

            obj = new Button("btnReadonlyTrue00","774","483","100","26",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("readonly true");
            obj.set_cssclass("btn_WF_LineBlue");
            this.addChild(obj.name, obj);

            obj = new Button("btnReadonlyFalse00","879","483","100","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("readonly false");
            obj.set_cssclass("btn_WF_LineBlue");
            this.addChild(obj.name, obj);

            obj = new Button("btnRequiredFalse00","879","514","100","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("required false");
            obj.set_cssclass("btn_WF_LineBlue");
            this.addChild(obj.name, obj);

            obj = new Button("btnRequiredTrue00","774","514","100","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("required true");
            obj.set_cssclass("btn_WF_LineBlue");
            this.addChild(obj.name, obj);

            obj = new Button("btnInit00","774","421","100","26",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_LineBlue");
            this.addChild(obj.name, obj);

            obj = new Button("btnTest",null,"30","110","26","21",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("Util Library Test");
            obj.set_cssclass("btn_WF_FillTeal");
            this.addChild(obj.name, obj);

            obj = new Static("sta13","530","320","218","35",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("월달력");
            obj.set_cssclass("sta_WF_Title2");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal01","530","600","128","26",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_value("20250501");
            obj.set_dateformat("yyyy-MM");
            obj.set_editformat("yyyy-MM");
            obj.getSetter("uCalType").set("MM");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtDesc","20","60",null,"250","20",null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_cssclass("txt_WF_Desc");
            obj.set_value("• 기간 달력\n1) DIv Link - Calendar\n   Div를 생성하고 url 속성에 Calendar로 구현한 기간 달력 \"Cmm::CmmCalendarFromTo.xfdl\" 을 지정한다.\n2) DIv Link - DateRangePicker\n   Div를 생성하고 url 속성에 DateRangePicker로 구현한 기간 달력 \"Cmm::CmmDateRange.xfdl\" 을 지정한다.\n\n• 월 달력\n1) DIv Link\n   Div를 생성하고 url 속성에 Calendar로 구현한 월 달력 \"Cmm::CmmCalendarMonth.xfdl\" 을 지정한다.\n2) User Property\n   Calendar를 생성하고 user property을 uCalType으로 추가하고 값을 \"MM\" 으로 설정한다.");
            this.addChild(obj.name, obj);

            obj = new Static("sta10","20","txtDesc:10","218","35",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("기간달력");
            obj.set_cssclass("sta_WF_Title2");
            this.addChild(obj.name, obj);

            obj = new Static("sta15","530","565","401","30",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("2) User Property");
            obj.set_cssclass("sta_WF_Title3");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","20","0","281","60",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("기간/월 달력");
            obj.set_cssclass("sta_WF_Title1");
            this.addChild(obj.name, obj);

            obj = new Static("sta11","20","355","190","30",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("1) Div Link - Calendar");
            obj.set_cssclass("sta_WF_Title3");
            this.addChild(obj.name, obj);

            obj = new Static("sta12","20","565","220","30",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("2) Div Link - PopupDateRangePicker");
            obj.set_cssclass("sta_WF_Title3");
            this.addChild(obj.name, obj);

            obj = new Div("divDateRange","20","600","317","26",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("Div00");
            obj.set_url("Cmm::CmmDateRange.xfdl");
            obj.getSetter("callbackfunc").set("fn_calCallback");
            this.addChild(obj.name, obj);

            obj = new Static("sta14","530","355","190","30",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("1) Div Link");
            obj.set_cssclass("sta_WF_Title3");
            this.addChild(obj.name, obj);

            obj = new Calendar("calFrom","20","711","136","29",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_popuptype("none");
            obj.set_value("20250701");
            this.addChild(obj.name, obj);

            obj = new Calendar("calTo","182","711","136","29",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_popuptype("none");
            obj.set_value("20250721");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdiv00","20","753","432","280",null,null,null,null,null,null,this);
            obj.set_text("pdiv00");
            obj.set_visible("false");
            obj.set_cssclass("pdiv_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Calendar("calFrom","25","10","180","201",null,null,null,null,null,null,this.pdiv00.form);
            obj.set_taborder("0");
            obj.set_type("monthonly");
            this.pdiv00.addChild(obj.name, obj);

            obj = new Calendar("calTo","221","10","180","201",null,null,null,null,null,null,this.pdiv00.form);
            obj.set_taborder("1");
            obj.set_type("monthonly");
            this.pdiv00.addChild(obj.name, obj);

            obj = new Button("btnOk","112","229","93","36",null,null,null,null,null,null,this.pdiv00.form);
            obj.set_taborder("2");
            obj.set_text("확인");
            this.pdiv00.addChild(obj.name, obj);

            obj = new Button("btnCancel","220","229","93","36",null,null,null,null,null,null,this.pdiv00.form);
            obj.set_taborder("3");
            obj.set_text("취소");
            this.pdiv00.addChild(obj.name, obj);

            obj = new Static("sta00","164","715","25","23",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("~");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divCalFromTo
            obj = new Layout("default","",0,0,this.divCalFromTo.form,function(p){});
            this.divCalFromTo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCalMM
            obj = new Layout("default","",0,0,this.divCalMM.form,function(p){});
            this.divCalMM.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDateRange
            obj = new Layout("default","",0,0,this.divDateRange.form,function(p){});
            this.divDateRange.form.addLayout(obj.name, obj);

            //-- Default Layout : this.pdiv00.form
            obj = new Layout("default","",0,0,this.pdiv00.form,function(p){});
            this.pdiv00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1020,1110,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divCalFromTo.form.calFrom","value","dsList","dtFrom");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divCalFromTo.form.calTo","value","dsList","dtTo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divCalMM.form.calYM","value","dsList","dtMonth");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","calFrom","value","ds00","fr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","calTo","value","ds00","to");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","pdiv00.form.calFrom","value","ds00","fr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","pdiv00.form.calTo","value","ds00","to");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Cmm::CmmCalendarFromTo.xfdl");
            this._addPreloadList("fdl","Cmm::CmmCalendarMonth.xfdl");
            this._addPreloadList("fdl","Cmm::CmmDateRange.xfdl");
        };
        
        // User Script
        this.registerScript("SampleCalendar.xfdl", function() {
        /**
        *  Nexacro Professional Training Couse
        *  @MenuPath    개발가이드 > 컴포넌트 연동 > 기간/월 달력
        *  @FileName 	SampleCalendar.xfdl
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
         * FORM 변수 선언 영역
         ************************************************************************************************/

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.Form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);

        	var today = this.gfnGetDate("date");
        	var nRow = this.dsList.addRow();
        	this.dsList.setColumn(nRow, "dtTo", today);
        };
        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

        /************************************************************************************************
         * CALLBACK 콜백 처리부분
         ************************************************************************************************/

         /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/

         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
         /**
        * btnInit_onclick :  달력 버튼이벤트
        * @param  : obj		   - [object]Button
        * @param  : e		   - [string]ClickEventInfo
        * @return : N/A
        * @example :
        */
        this.btnInit_onclick = function(obj,e)
        {
        	var objForm = this.divCalFromTo.form;
        	var objFormMM = this.divCalMM.form;
        	var sTarget = obj.name;
        	var sDate ;

        	switch(sTarget) {
        	case "btnInit":
        		objForm.fnInit();
        		break;
        	case "btnGetFromDate":
        		sDate = objForm.fnGetFromDate();
        		this.editFromDate.value = sDate;
        		break;
        	case "btnGetToDate":
        		sDate = objForm.fnGetToDate();
        		this.editToDate.value = sDate;
        		break;
        	case "btnSetFromDate":
        		sDate = this.edtSetFrom.value;
        		objForm.fnSetFromDate(sDate);
        		break;
        	case "btnSetToDate":
        		sDate = this.edtSetTo.value;
        		objForm.fnSetToDate(sDate);
        		break;
        	case "btnEnableTrue":
        		objForm.fnSetEnable(true);
        		break;
        	case "btnEnableFalse":
        		objForm.fnSetEnable(false);
        		break;
        	case "btnReadonlyTrue":
        		objForm.fnSetReadonly(true);
        		break;
        	case "btnReadonlyFalse":
        		objForm.fnSetReadonly(false);
        		break;
        	case "btnRequiredTrue":
        		objForm.fnSetEssential(true);
        		break;
        	case "btnRequiredFalse":
        		objForm.fnSetEssential(false);
        		break;
        	case "btnInit00":
        		objFormMM.fnInit();
        		break;
        	case "btnGetDate00":
        		sDate = objFormMM.fnGetValue();
        		if( sDate != false ) this.editFromDate00.value = sDate;
        		else this.divCalMM.form.setFocus();
        		break;
        	case "btnSetDate00":
        		sDate = this.edtSetFrom00.value;
        		objFormMM.fnSetValue(sDate);
        		break;
        	case "btnEnableTrue00":
        		objFormMM.fnSetEnable(true);
        		break;
        	case "btnEnableFalse00":
        		objFormMM.fnSetEnable(false);
        		break;
        	case "btnReadonlyTrue00":
        		objFormMM.fnSetReadonly(true);
        		break;
        	case "btnReadonlyFalse00":
        		objFormMM.fnSetReadonly(false);
        		break;
        	case "btnRequiredTrue00":
        		objFormMM.fnSetEssential(true);
        		break;
        	case "btnRequiredFalse00":
        		objFormMM.fnSetEssential(false);
        		break;
        	default:
        	}
        };

        this.btnTest_onclick = function(obj,e)
        {
         	var sComma = this.gfnAppendComma(123456789.52, 1);
         	trace("gfnAppendComma : " + sComma);

        	trace("gfnRemoveComma : " + this.gfnRemoveComma(sComma));

        	trace("gfnTrim : " + this.gfnTrim(" 123 456 789 "));

        	trace("gfnAllTrim : " + this.gfnAllTrim(" 123 456 789 "));

        	trace("gfnGetDigit : " + this.gfnGetDigit("가나다 123 456 789 마바사"));

        	trace("gfnRemoveSpecialChar : " + this.gfnRemoveSpecialChar("$% 가나다 123 456 789 마바사&*"));

        	trace("gfnIsExistInArray : " + this.gfnIsExistInArray(["a", "b", "c"], "b"));

        	trace("gfnLeft : " + this.gfnLeft("abc", 1));

        	trace("gfnRight : " + this.gfnRight("abc", 1));

        	trace("gfnPosReverse : " + this.gfnPosReverse("aaBBbbccBB", "BB"));

        	trace("gfnTypeOf : " + this.gfnTypeOf(this.btn00));

        	trace("gfnIsNexaComponent : " + this.gfnIsNexaComponent("this.btn00"));

        	trace("gfnIsNexaComponent : " + this.gfnIsNexaComponent(this.btn00));

        	trace("gfnGetDate 일시 : " + this.gfnGetDate());

        	trace("gfnGetDate 일시+time: " + this.gfnGetDate("time"));

        	trace("gfnGetDate 일시+time+milliseconds: " + this.gfnGetDate("milli"));

        	trace("gfnGetLastDate : " + this.gfnGetLastDate("20171011"));

        	trace("gfnGetLastDate : " + this.gfnGetLastDate("201710"));

        	trace("gfnGetFirstDate : " + this.gfnGetFirstDate("20171022"));

        	trace("gfnGetDay : " + this.gfnGetDay("20171011"));

        	trace("gfnGetDiffDate : " + this.gfnGetDiffDate("20171011", "20171231"));

        	trace("gfnGetDiffMonth : " + this.gfnGetDiffMonth("20171011", "20171231"));

        	trace("gfnAddDate : " + this.gfnAddDate("20171011", 3));

        	trace("gfnAddMonth : " + this.gfnAddMonth("20171031", 1));

        	trace("gfnAddMonth : " + this.gfnAddMonth("20171031", -1));

        	trace("gfnGetWeek : " + this.gfnGetWeek("20171011"));

        	var sDate = this.gfnSolarToLunar("20171020");
        	trace("gfnSolarToLunar : " + sDate);

        	trace("gfnLunarToSolar : " + this.gfnLunarToSolar(sDate.substring(1,9), sDate.substring(0,1)));
        };


        this.cal00_ondropdown = function(obj,e)
        {
        // 	this.pdiv00.form.calFrom.value = this.calFrom.value;
        // 	this.pdiv00.form.calTo.value = this.calTo.value;

        	this.pdiv00.trackPopupByComponent(obj, 0, obj.height);
        };



        this.pdiv00_btnOk_onclick = function(obj,e)
        {
        // 	this.calFrom.value = this.pdiv00.form.calFrom.value;
        // 	this.calTo.value = this.pdiv00.form.calTo.value;
        	this.pdiv00.closePopup();
        }

        this.pdiv00_btnCancel_onclick = function(obj,e)
        {
        	this.pdiv00.closePopup();
        };

        this.pdiv00_calFrom_ondayclick = function(obj,e)
        {
        	this.calFrom.value = e.date;
        };

        this.pdiv00_calTo_ondayclick = function(obj,e)
        {
        	this.calTo.value = e.date;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.btnInit.addEventHandler("onclick",this.btnInit_onclick,this);
            this.btnGetFromDate.addEventHandler("onclick",this.btnInit_onclick,this);
            this.btnGetToDate.addEventHandler("onclick",this.btnInit_onclick,this);
            this.btnSetFromDate.addEventHandler("onclick",this.btnInit_onclick,this);
            this.btnSetToDate.addEventHandler("onclick",this.btnInit_onclick,this);
            this.btnEnableTrue.addEventHandler("onclick",this.btnInit_onclick,this);
            this.btnEnableFalse.addEventHandler("onclick",this.btnInit_onclick,this);
            this.btnReadonlyTrue.addEventHandler("onclick",this.btnInit_onclick,this);
            this.btnReadonlyFalse.addEventHandler("onclick",this.btnInit_onclick,this);
            this.btnRequiredFalse.addEventHandler("onclick",this.btnInit_onclick,this);
            this.btnRequiredTrue.addEventHandler("onclick",this.btnInit_onclick,this);
            this.btnGetDate00.addEventHandler("onclick",this.btnInit_onclick,this);
            this.btnSetDate00.addEventHandler("onclick",this.btnInit_onclick,this);
            this.btnEnableTrue00.addEventHandler("onclick",this.btnInit_onclick,this);
            this.btnEnableFalse00.addEventHandler("onclick",this.btnInit_onclick,this);
            this.btnReadonlyTrue00.addEventHandler("onclick",this.btnInit_onclick,this);
            this.btnReadonlyFalse00.addEventHandler("onclick",this.btnInit_onclick,this);
            this.btnRequiredFalse00.addEventHandler("onclick",this.btnInit_onclick,this);
            this.btnRequiredTrue00.addEventHandler("onclick",this.btnInit_onclick,this);
            this.btnInit00.addEventHandler("onclick",this.btnInit_onclick,this);
            this.btnTest.addEventHandler("onclick",this.btnTest_onclick,this);
            this.sta13.addEventHandler("onclick",this.Static03_onclick,this);
            this.txtDesc.addEventHandler("onchanged",this.txtDesc_onchanged,this);
            this.calFrom.addEventHandler("ondropdown",this.cal00_ondropdown,this);
            this.pdiv00.form.calFrom.addEventHandler("ondayclick",this.pdiv00_calFrom_ondayclick,this);
            this.pdiv00.form.calTo.addEventHandler("ondayclick",this.pdiv00_calTo_ondayclick,this);
            this.pdiv00.form.btnOk.addEventHandler("onclick",this.pdiv00_btnOk_onclick,this);
            this.pdiv00.form.btnCancel.addEventHandler("onclick",this.pdiv00_btnCancel_onclick,this);
        };
        this.loadIncludeScript("SampleCalendar.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
