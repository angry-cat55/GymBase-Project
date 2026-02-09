(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CmmCalendarMonthPdv");
            this.set_titletext("월 달력");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(180,200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staBg","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_border("1px solid #c4c4c4");
            this.addChild(obj.name, obj);

            obj = new Button("btnPdvClose",null,"12","21","21","63",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_POP_Close");
            this.addChild(obj.name, obj);

            obj = new Static("staYYYY","0","35",null,"21","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("9999");
            obj.set_cssclass("sta_WF_Cal");
            this.addChild(obj.name, obj);

            obj = new Button("btn1","6","62","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("01");
            obj.set_cssclass("btn_WF_FillGray");
            obj.set_font("bold 13px/normal \"Segoe UI\",\"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn2","49","62","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("02");
            obj.set_cssclass("btn_WF_FillGray");
            obj.set_font("bold 13px/normal \"Segoe UI\",\"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn3","92","62","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("03");
            obj.set_cssclass("btn_WF_FillGray");
            obj.set_font("bold 13px/normal \"Segoe UI\",\"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn4","135","62","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("04");
            obj.set_cssclass("btn_WF_FillGray");
            obj.set_font("bold 13px/normal \"Segoe UI\",\"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn5","6","105","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("05");
            obj.set_cssclass("btn_WF_FillGray");
            obj.set_font("bold 13px/normal \"Segoe UI\",\"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn6","49","105","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("06");
            obj.set_cssclass("btn_WF_FillGray");
            obj.set_font("bold 13px/normal \"Segoe UI\",\"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn7","92","105","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("07");
            obj.set_cssclass("btn_WF_FillGray");
            obj.set_font("bold 13px/normal \"Segoe UI\",\"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn8","135","105","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("08");
            obj.set_cssclass("btn_WF_FillGray");
            obj.set_font("bold 13px/normal \"Segoe UI\",\"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn9","6","148","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("09");
            obj.set_cssclass("btn_WF_FillGray");
            obj.set_font("bold 13px/normal \"Segoe UI\",\"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn10","49","148","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("btn_WF_FillGray");
            obj.set_font("bold 13px/normal \"Segoe UI\",\"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn11","92","148","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("11");
            obj.set_cssclass("btn_WF_FillGray");
            obj.set_font("bold 13px/normal \"Segoe UI\",\"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn12","135","148","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("12");
            obj.set_cssclass("btn_WF_FillGray");
            obj.set_font("bold 13px/normal \"Segoe UI\",\"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("월 선택");
            obj.getSetter("uWord").set("popup.monthselect");
            obj.set_cssclass("sta_POP_Title");
            this.addChild(obj.name, obj);

            obj = new Button("btnPdvClose00",null,"5","21","21","8",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("btn_POP_Close");
            this.addChild(obj.name, obj);

            obj = new Button("btnNext",null,"35","21","21","5",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_CalMonthNext");
            this.addChild(obj.name, obj);

            obj = new Button("btnBefore","6","35","21","21",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_CalMonthPrev");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",180,200,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CmmCalendarMonthPdv.xfdl", function() {
        /**
        *  Necacro EduPack
        *  @MenuPath    Cmm > CmmCalendarMonthPdv
        *  @FileName 	CmmCalendarMonthPdv.xfdl
        *  @Creator 	Education
        *  @CreateDate 2025.02.01
        *  @Desction    월달력 칼렌더 방식(user comp) 에서 PopupDiv Link 용
        ************** 소스 수정 이력 ***************************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2025.02.01     	Education 	                최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.fvToday;

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.fvToday = this.gfnGetDate(); // 오늘 날자 세팅

        	var sDate = this.parent.calVal;

        	if (this.gfnIsNull(sDate)) sDate = this.fvToday;
        	this.staYYYY.text = sDate.substr(0,4);
        };

         /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
        * @description   월달력 popDiv컴포넌트 닫기
        */
        this.pdvCal_btnPdvCancle_onclick = function(obj,e)
        {
        	this.parent.closePopup();
        };

        /**
        * @description   이전 년도 버튼 클릭
        */
        this.pdvCal_btnBefore_onclick = function(obj,e)
        {
        	var sDate = nexacro.toNumber(this.staYYYY.text);
        	this.staYYYY.text = (sDate - 1);

        };

        /**
        * @description  다음년도 버튼 클릭
        */
        this.pdvCal_btnNext_onclick = function(obj,e)
        {
        	var sDate = nexacro.toNumber(this.staYYYY.text);
        	this.staYYYY.text = (sDate + 1);
        };

        /**
        * @description  월 버튼 클릭
        */
        this.pdvCal_btn1_onclick = function(obj,e)
        {
        	var rtn = this.staYYYY.text + obj.text;
        	this.parent.calObj.value = rtn;
        	this.parent.closePopup();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnPdvClose.addEventHandler("onclick",this.pdvCal_btnPdvCancle_onclick,this);
            this.btn1.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.btn2.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.btn3.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.btn4.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.btn5.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.btn6.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.btn7.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.btn8.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.btn9.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.btn10.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.btn11.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.btn12.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.btnPdvClose00.addEventHandler("onclick",this.pdvCal_btnPdvCancle_onclick,this);
            this.btnNext.addEventHandler("onclick",this.pdvCal_btnNext_onclick,this);
            this.btnBefore.addEventHandler("onclick",this.pdvCal_btnBefore_onclick,this);
        };
        this.loadIncludeScript("CmmCalendarMonthPdv.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
