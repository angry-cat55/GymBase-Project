(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("StepSlide_Steps");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(500,150);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","0","0","500","150",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("blue");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","0","500","150",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_positionstep("1");
            obj.set_background("pink");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0","0","500","150",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_positionstep("2");
            obj.set_background("gold");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","97","37","228","65",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Static01");
            obj.set_background("url(\'theme://images/btn_TF_Close.png\') repeat right");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","76","37","228","65",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Static01");
            obj.set_background("url(\'theme://images/btn_TF_Min.png\') repeat right");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","136","43","228","65",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Static01");
            obj.set_background("url(\'theme://images/btn_TF_Max_O.png\') repeat right");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",500,150,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("3");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("StepSlide_Steps.xfdl", function() {
        /**
        *  Nexacro Professional Training Couse
        *  @MenuPath    개발가이드 > 컴포넌트 및 연동 > step
        *  @FileName 	SampleStep_Sub.xfdl
        *  @Creator 	TOBESOFT Education
        *  @CreateDate 	2025/01/03
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2025/01/03     		 TOBESOFT Education	 	  	최초 생성
        *******************************************************************************
        */



        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.fvStep = 0;
        this.elapseTime = 2000;

        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        /**
         * @description 화면 onload시 처리내역(필수)
        */
        this.form_onload = function(obj,e)
        {
        	this.stepselector.visible = false;
        	this.stepshowtype = "action";

        	this.setTimer(0, this.elapseTime);
        };

        this.SampleStep_ontimer = function(obj,e)
        {
        	if (e.timerid == 0){
        		if (this.fvStep == 2) {
        			this.fvStep = 0;
        			this.stepselector.stepindex = 0;
        		}
        		else {
        			this.stepselector.stepindex = (++this.fvStep);
        		}
        	}
        };

        this.btnPre_onclick = function(obj,e)
        {
        	this.killTimer(0);
        	this.stepselector.stepindex = (--this.fvStep);
        };

        this.btnNext_onclick = function(obj,e)
        {
        	this.killTimer(0);
        	this.stepselector.stepindex = (++this.fvStep);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onstepchanged",this.SampleStep_ontimer,this);
            this.addEventHandler("ontimer",this.SampleStep_ontimer,this);
        };
        this.loadIncludeScript("StepSlide_Steps.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
