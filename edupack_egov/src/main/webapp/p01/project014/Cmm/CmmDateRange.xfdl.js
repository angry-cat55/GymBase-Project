(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CmmDateRange");
            this.set_titletext("CmmDateRange");
            if (Form == this.constructor)
            {
                this._setFormPosition(280,26);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_date", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "DATE_FR","type" : "STRING","size" : "256"},{"id" : "DATE_TO","type" : "STRING","size" : "256"}]},"Rows" : [{}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Calendar("calFrom","0","0","46.43%","26",null,null,"130",null,null,null,this);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_popuptype("none");
            obj.set_value("20250101");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","calFrom:5","0","10","26",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("calTo","Static00:5","0","46.43%","26",null,null,"130",null,null,null,this);
            obj.set_taborder("0");
            obj.set_popuptype("none");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20250215");
            this.addChild(obj.name, obj);

            obj = new PopupDateRangePicker("pdrpDateRange","0","50","530","230",null,null,null,null,null,null,this);
            obj.set_useclosebutton("true");
            obj.set_displaytype("date");
            obj.set_closebuttontext("OK");
            obj.set_displaymonthcount("3");
            obj.set_useheadline("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",280,26,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CmmDateRange.xfdl", function() {
        /**
        *  Necacro EduPack
        *  @MenuPath    Cmm > CmmDateRange (공통 기간달력)
        *  @FileName 	CmmCalFromTo.xfdl
        *  @Creator 	Education
        *  @CreateDate 	2025.02.01
        *  @Desction    기간달력
        ************** 소스 수정 이력 ***************************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2025.02.01     	Education 	               최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        //	this.gfnFormOnLoad(this);//초기화[필수]
        	this.fnInit(); //달력초기화
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
        /**
        * @description 달력초기화
        */
        this.fnInit = function()
        {
        	//요구사항에 따라 오늘날짜 3개월 등등 지정
        	this.calFrom.value = this.gfnGetFirstDate();	// FROM 달력 셋팅
        	this.calTo.value = this.gfnGetDate();			// TO 달력 셋팅
        };

        /**
        * @description from 일자 갖고오기
        */
        this.fnGetFromDate = function ()
        {
        	var sDate = this.calFrom.value;
        	return sDate;
        };

        /**
        * @description to 일자 갖고오기
        */
        this.fnGetToDate = function ()
        {
        	var sDate = this.calTo.value;
        	return sDate;
        };

        /**
        * @description from일자 세팅하기
        */
        this.fnSetFromDate = function (sDate)
        {
        	this.calFrom.value = sDate;
        };

        /**
        * @description to일자 세팅하기
        */
        this.fnSetToDate = function (sDate)
        {
        	this.calTo.value = sDate;
        };

        /**
        * @description enable true/false세팅
        */
        this.fnSetEnable = function (bValue)
        {
        	this.calFrom.enable = bValue;
        	this.calTo.enable = bValue;
        };

        /**
        * @description readonly true/false세팅
        */
        this.fnSetReadonly = function (bValue)
        {
        	this.calFrom.readonly = bValue;
        	this.calTo.readonly = bValue;
        };

        /**
        * @description Essential true/false세팅
        */
        this.fnSetEssential  = function (bValue)
        {
        	//CSS Essential 클래스설정
        	if(bValue){
                this.calFrom.cssclass = "cal_WF_Essential";
                this.calTo.cssclass = "cal_WF_Essential";
        	}
            else{
                this.calFrom.cssclass = "";
                this.calTo.cssclass = "";
        	}
        };

         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
        * @description Calendar_ondropdown 이벤트 시 PopupDateRangePicker컴포넌트 띄우기
        */
        this.calFrom_ondropdown = function(obj,e)
        {
        	this.pdrpDateRange.startdate = this.calFrom.value;
        	this.pdrpDateRange.enddate   = this.calTo.value
        	this.pdrpDateRange.trackPopupByComponent("start", this.calFrom, 0, obj.height);
        };

        /**
        * @description 기간 PopupDateRangePicker컴포넌트 "CLOSE" 버튼 클릭
        */
        this.pdrpDateRange_onlbuttonup = function(obj,e)
        {
        	if(e.fromreferenceobject.name == "closebutton"){
        		this.calFrom.value = obj.startdate;
        		this.calTo.value = obj.enddate;
        		this.fnCallback(obj.startdat, obj.enddate);
        	}

        };

        this.fnCallback = function(sFromValue, sToValue)
        {
        	var sCallback = this.parent.callbackfunc;
        	if (!this.gfnIsNull(sCallback)) {
        		try {
        			var svcId = this.parent.name;
        			this.lookupFunc(sCallback).call(svcId, sFromValue, sToValue);
        		} catch(e) {
        			//trace("함수 실행시 오류가 발생했습니다.");
        		}
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.calFrom.addEventHandler("ondropdown",this.calFrom_ondropdown,this);
            this.calTo.addEventHandler("ondropdown",this.calFrom_ondropdown,this);
            this.pdrpDateRange.addEventHandler("onlbuttonup",this.pdrpDateRange_onlbuttonup,this);
        };
        this.loadIncludeScript("CmmDateRange.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
