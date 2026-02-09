(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SampleMultiLanguage");
            this.set_titletext("다국어 적용 가이드");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,910);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btnLang","37","411","48","26",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("버튼");
            obj.getSetter("uWord").set("comp.button");
            obj.set_fittocontents("width");
            obj.set_padding("0px 10px");
            this.addChild(obj.name, obj);

            obj = new Static("staLang","182","411","63","26",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("스테틱");
            obj.getSetter("uWord").set("comp.static");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkLang","345","411","100","26",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("체크 버튼");
            obj.getSetter("uWord").set("comp.check");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","20","497",null,"120","30",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"스테틱\" expandchar=\"comp.static\"/><Cell col=\"1\" text=\"체크\" expandchar=\"comp.check\"/><Cell col=\"2\" text=\"버튼\" expandchar=\"comp.button\"/><Cell col=\"3\" rowspan=\"2\" text=\"사용자 정보\" expandchar=\"user\"/><Cell col=\"4\" rowspan=\"2\" text=\"정보\" expandchar=\"info\"/><Cell col=\"5\" rowspan=\"2\" text=\"용어\" expandchar=\"word\"/><Cell col=\"6\" rowspan=\"2\" text=\"사전\" expandchar=\"dictionary\"/><Cell row=\"1\" colspan=\"3\" text=\"웹브라우저\" expandchar=\"comp.webbrowser\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","10","675","490","135",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("1번째탭");
            obj.getSetter("uWord").set("tab1");
            this.Tab00.addChild(obj.name, obj);

            obj = new Button("Button00","25","24","48","28",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("버튼");
            obj.getSetter("uWord").set("comp.button");
            obj.set_fittocontents("width");
            obj.set_padding("0px 10px");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static00","153","24","93","28",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("스테틱");
            obj.getSetter("uWord").set("comp.static");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","326","24","93","28",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("체크 버튼");
            obj.getSetter("uWord").set("comp.check");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("2번째탭");
            obj.getSetter("uWord").set("tab2");
            this.Tab00.addChild(obj.name, obj);

            obj = new Button("Button00","302","18","120","50",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("버튼");
            obj.getSetter("uWord").set("comp.button");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static00","432","12","120","60",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("스테틱");
            obj.getSetter("uWord").set("comp.static");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","522","31","150","20",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_text("체크 버튼");
            obj.getSetter("uWord").set("comp.check");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static02","20","325","91","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Language");
            obj.set_cssclass("sta_WF_Title2");
            this.addChild(obj.name, obj);

            obj = new Combo("cboLanguage","122","325","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cboLanguage_innerdataset = new nexacro.NormalDataset("cboLanguage_innerdataset", obj);
            cboLanguage_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "KO","datacolumn" : "한글"},{"codecolumn" : "EN","datacolumn" : "English"}]});
            obj.set_innerdataset(cboLanguage_innerdataset);
            obj.set_text("한글");
            obj.set_value("KO");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgLang","538","411","50","26",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_image("url(\'theme://images/btn_TF_Normal.png\')");
            obj.getSetter("uWord").set("true");
            obj.set_stretch("fit");
            this.addChild(obj.name, obj);

            obj = new Button("btnImage","595","411","114","26",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("이미지 확인");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","378","218","26",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("1) Button, Static, CheckBox");
            obj.set_cssclass("sta_WF_Title3");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","531","378","178","26",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("2)  ImageViewer");
            obj.set_cssclass("sta_WF_Title3");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","464","178","28",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("3)  Grid");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","10","642","178","28",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("4)  Tab, Tab page, Div");
            obj.set_cssclass("sta_WF_Title3");
            this.addChild(obj.name, obj);

            obj = new Div("divLang","510","675","480","135",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","25","24","48","28",null,null,null,null,null,null,this.divLang.form);
            obj.set_taborder("0");
            obj.set_text("버튼");
            obj.getSetter("uWord").set("comp.button");
            obj.set_fittocontents("width");
            obj.set_padding("0px 10px");
            this.divLang.addChild(obj.name, obj);

            obj = new Static("Static00","153","24","93","28",null,null,null,null,null,null,this.divLang.form);
            obj.set_taborder("1");
            obj.set_text("스테틱");
            obj.getSetter("uWord").set("comp.static");
            this.divLang.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","326","24","93","28",null,null,null,null,null,null,this.divLang.form);
            obj.set_taborder("2");
            obj.set_text("체크 버튼");
            obj.getSetter("uWord").set("comp.check");
            this.divLang.addChild(obj.name, obj);

            obj = new Static("Static05","10","835","288","28",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("5)  Script내 용어 다국어 처리(팝업 Title)");
            obj.set_cssclass("sta_WF_Title3");
            this.addChild(obj.name, obj);

            obj = new Button("btnPopup","10","868","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("모달팝업");
            obj.getSetter("uWord").set("popup.modal");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","20","0","281","60",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("다국어 적용");
            obj.set_cssclass("sta_WF_Title1");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtDesc","20","60",null,"250","20",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("txt_WF_Desc");
            obj.set_value("1. 다국어 적용 방법\n  1) Button, Static, CheckBox, Tabpage의 경우는 \"uWord\" 라고 user Property를 추가하고 단어사전을 참조하여 해당 코드를 입력한다.\n  2) ImageViewer의 경우는 \"uWord\" 라고 user Property를 추가하고 \"true\"로 설정한다.\n      다국어 처리시에는 해당 이미지명 + \"_{KO,EN}(언어)\" + 확장자로 변경된다.\n  3) Grid의 경우 Header의 expandchar Property에 용어사전을 참조하여 해당 용어 코드를 입력한다.\n  4) 스크립트내에서 사용하는 용어는 gfnGetWord함수를 통해 용어를 가져와서 사용한다.\n     예) var sTitle = this.gfnGetWord(\"popup.modal\");\t// 모달팝업\n2. 주의사항\n  1) ImageViewer의 경우 디자이너와 협의하여 다국어 대상의 경우 이미지 파일_언어2자리로 파일명을 통일해야 한다.\n  2) Grid의 경우 Header의 expandchar Property를 사용한다면 다른 Property에 설정이 필요하다.\n  3) 용어 변경시 크기조절을 위해서는 fittocontents을 true로 설정해야 하며, 다국어 처리 공통 함수에서 resetScroll을 실행하여 갱신처리한다.");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Tab00.Tabpage1.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage1.form,function(p){});
            this.Tab00.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage2.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage2.form,function(p){});
            this.Tab00.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divLang.form
            obj = new Layout("default","",0,0,this.divLang.form,function(p){});
            this.divLang.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1020,910,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SampleMultiLanguage.xfdl", function() {
        /**
        *  Nexacro Professional Training Couse
        *  @MenuPath    개발가이드 > 표준 및 기본 정의 > 다국어 적용 가이드
        *  @FileName 	SampleMultiLanguage.xfdl
        *  @Creator 	TOBESOFT Education
        *  @CreateDate 	2025/02/03
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2025/02/03      		 TOBESOFT Education	 	  	최초 생성
        *******************************************************************************
        */


        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.objApp = this.gfnGetApplication();

        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        this.Form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);

        	// 다국어 처리
        	var sNowLang = nexacro.getEnvironmentVariable("evLanguage");
        	this.cboLanguage.value = sNowLang;
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/
        /**
        * fnPopupCallback : popup callback
        * @param  : strId		   - [string]popup id
        * @param  : strVal		   - [string]return val
        * @return : N/A
        */
         this.fnPopupCallback = function(strId, strVal)
         {
        	trace(" strId : " + strId + " strVal : " + strVal);
         };

        /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
         /**
        * Combo00_onitemchanged : 다국어 콤보 변경 이벤트
        * @param  : obj		   - [object]Combo
        * @param  : e		   - [string]ItemChangeEventInfo
        * @return : N/A
        */
        this.cboLanguage_onitemchanged = function(obj,e)
        {
        	var sPostVal = e.postvalue;
        	var sPreVal  = e.prevalue;

        	nexacro.setEnvironmentVariable("evLanguageChange",sPostVal);

        	// 다국어 적용
        	// fittocontents 적용을 위해 스크롤바와 내부 컴포넌트를 현재 화면 상태에 맞게 갱신하기 위해 resetScroll 필요
        	this.gfnInitLang(this);

        	nexacro.setEnvironmentVariable("evLanguage",sPostVal);
        };

        this.btnImage_onclick = function(obj,e)
        {
        	alert("this.imgLang.image : " + this.imgLang.image);
        };

        this.btnPopup_onclick = function(obj,e)
        {
        	var sTitle = this.gfnGetWord("popup.modal");	// 모달팝업

        	var oArg    = {paramCode:"abcd", paramNum:12345};
        	var oOption = {title:sTitle};
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup( "popup","Cmm::CmmPopup.xfdl",oArg,sPopupCallBack,oOption);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.cboLanguage.addEventHandler("onitemchanged",this.cboLanguage_onitemchanged,this);
            this.btnImage.addEventHandler("onclick",this.btnImage_onclick,this);
            this.btnPopup.addEventHandler("onclick",this.btnPopup_onclick,this);
            this.txtDesc.addEventHandler("onchanged",this.txtDesc_onchanged,this);
        };
        this.loadIncludeScript("SampleMultiLanguage.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
