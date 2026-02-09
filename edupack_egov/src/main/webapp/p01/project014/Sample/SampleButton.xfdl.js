(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SampleButton");
            this.set_titletext("Slide & Toggle Button");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta11","520","280","240","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("토글 버튼 Toggle Button");
            obj.set_cssclass("sta_WF_Title2");
            this.addChild(obj.name, obj);

            obj = new Div("divToggle","520","332","76","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_url("Cmm::CmmToggle.xfdl");
            obj.getSetter("callbackfunc").set("divToggle_onitemchanged");
            obj.getSetter("onText").set("On");
            obj.getSetter("offText").set("Off");
            this.addChild(obj.name, obj);

            obj = new Button("btnGet","520","405","70","26",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Get");
            obj.set_cssclass("btn_WF_FillGray");
            this.addChild(obj.name, obj);

            obj = new Button("btnSet","595","405","70","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Set");
            obj.set_cssclass("btn_WF_LineGray");
            this.addChild(obj.name, obj);

            obj = new Div("divSlide","20","316","400","100",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div00");
            obj.set_url("Cmm::CmmSlide.xfdl");
            obj.getSetter("max").set("99");
            obj.getSetter("lable").set("년");
            obj.getSetter("callbackfunc").set("divSlide_onvaluechanged");
            obj.getSetter("callbackfunc2").set("divSlide_onvaluechange");
            this.addChild(obj.name, obj);

            obj = new Button("btnGetSilde","20","450","70","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Get");
            obj.set_cssclass("btn_WF_FillGray");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetSilde","95","450","70","26",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Set");
            obj.set_cssclass("btn_WF_LineGray");
            this.addChild(obj.name, obj);

            obj = new Edit("edtValue","170","450","70","26",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_value("50");
            obj.set_inputtype("digit");
            obj.set_text("50");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtDesc","20","60",null,"190","20",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("txt_WF_Desc");
            obj.set_value("• 슬라이드 버튼 Slide Button\n1) Div를 생성하고 url 속성에 \"Cmm::CmmSlide.xfdl\" 을 지정한다.\n2) Div에 user property를 추가한다.\n   - label: 값의 단위\n   - max: slide max 값\n\n• 토글 버튼 Toggle Button\n1) Div를 생성하고 url 속성에 \"Cmm::CmmToggle.xfdl\"  를 지정한다.");
            this.addChild(obj.name, obj);

            obj = new Static("sta10","20","txtDesc:30","240","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("슬라이드 버튼 Slide Button");
            obj.set_cssclass("sta_WF_Title2");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk00","520","514","85","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("chk_WF_Toggle");
            this.addChild(obj.name, obj);

            obj = new Static("sta12","520","470","240","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("토글 버튼 CheckBox 응용");
            obj.set_cssclass("sta_WF_Title2");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","20","0","281","60",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("슬라이드 / 토글 버튼");
            obj.set_cssclass("sta_WF_Title1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divToggle
            obj = new Layout("default","",0,0,this.divToggle.form,function(p){});
            this.divToggle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSlide
            obj = new Layout("default","",0,0,this.divSlide.form,function(p){});
            this.divSlide.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1020,650,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Cmm::CmmToggle.xfdl");
            this._addPreloadList("fdl","Cmm::CmmSlide.xfdl");
        };
        
        // User Script
        this.registerScript("SampleButton.xfdl", function() {
        /**
        *  Nexacro Professional Training Couse
        *  @MenuPath    개발가이드 > 컴포넌트 연동 > Slide & Toggle Button
        *  @FileName 	SampleButton.xfdl
        *  @Creator 	TOBESOFT Education
        *  @CreateDate 	2023/01/03
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2023/01/03      		 TOBESOFT Education	 	  	최초 생성
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
            this.gfnFormOnLoad(obj);
        };

         /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        this.divToggle_onitemchanged = function(obj, value)
        {
        	trace(obj + " , "+ value);
        };

        this.divSlide_onvaluechange = function(obj, value)
        {
        	trace("divSlide_onvaluechange "+ obj + " , "+ value);
        };

        this.divSlide_onvaluechanged = function(obj, value)
        {
        	trace("divSlide_onvaluechanged "+ obj + " , "+ value);
        };

         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/

        this.btnGet_onclick = function(obj,e)
        {
        	alert(this.divToggle.form.getValue());
        };

        this.btnSet_onclick = function(obj,e)
        {
        	this.divToggle.form.setValue(!this.divToggle.form.getValue());
        };

        this.btnGetSilde_onclick = function(obj,e)
        {
        	alert(this.divSlide.form.getValue());
        };

        this.btnSetSilde_onclick = function(obj,e)
        {
        	this.divSlide.form.setValue(this.edtValue.value);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.addEventHandler("ontimer",this.Form_ontimer,this);
            this.btnGet.addEventHandler("onclick",this.btnGet_onclick,this);
            this.btnSet.addEventHandler("onclick",this.btnSet_onclick,this);
            this.btnGetSilde.addEventHandler("onclick",this.btnGetSilde_onclick,this);
            this.btnSetSilde.addEventHandler("onclick",this.btnSetSilde_onclick,this);
        };
        this.loadIncludeScript("SampleButton.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
