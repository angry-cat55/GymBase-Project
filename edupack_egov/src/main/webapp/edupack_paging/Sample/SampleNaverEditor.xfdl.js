(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SampleNaverEditor");
            this.set_titletext("네이버 에디터");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new TextArea("txtDesc","20","60",null,"40","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("txt_WF_Desc");
            obj.set_value("WebView 컴포넌트를 이용한 네이버 에디터 연동 샘플이다.");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","631","220","26","26",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_BaseL");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","631","190","26","26",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("btn_WF_BaseR");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt00","660","120","335","280",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","20","0","281","60",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("네이버 에디터");
            obj.set_cssclass("sta_WF_Title1");
            this.addChild(obj.name, obj);

            obj = new WebView("webEditor","20","120","600","280",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new WebView("webViewer","20","webEditor:20","600","220",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);
            // Layout Functions
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
        this.registerScript("SampleNaverEditor.xfdl", function() {
        /**
        *  Nexacro Professional Training Couse
        *  @MenuPath    개발가이드 > 컴포넌트 및 연동 > 네이버 에디터
        *  @FileName 	SampleNaverEditor.xfdl
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
        this.fvDocWeb = "";
        this.fvRtnHeight=260; //버튼사이즈
        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        /**
         * @description 화면 onload시 처리내역(필수)
        */
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);

        	this.webEditor.url = this.gfnGetServerUrl() + "smartEditor/SmartEditor2.html";
        	this.webViewer.url = this.gfnGetServerUrl() + "smartEditor/SmartEditor2Viewer.html";	// localhost 설정시 버그로 임시적용



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

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        this.webEditor_onloadcompleted = function(obj,e)
        {
        	trace("webEditor_onloadcompleted");

        };

        this.btn01_onclick = function(obj,e)
        {
        	var sEditorData = this.webEditor.callScript("showHTML()");
        	this.txt00.value = sEditorData;
        	this.webViewer.callScript("setInnerHtml('" + this.txt00.value + "')");
        };


        this.btn00_onclick = function(obj,e)
        {
        	var sContents = this.txt00.value;
        	if(this.gfnIsNull(sContents)) sContents = "";

        	this.webEditor.callScript("pasteHTML()");
        	this.webViewer.callScript("setInnerHtml('" + this.txt00.value + "')");
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.txtDesc.addEventHandler("onchanged",this.txtDesc_onchanged,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.webEditor.addEventHandler("onusernotify",this.webEditor_onusernotify,this);
            this.webEditor.addEventHandler("onloadcompleted",this.webEditor_onloadcompleted,this);
        };
        this.loadIncludeScript("SampleNaverEditor.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
