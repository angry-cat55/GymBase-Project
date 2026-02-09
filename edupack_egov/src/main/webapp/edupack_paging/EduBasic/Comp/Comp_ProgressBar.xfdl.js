(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_ProgressBar");
            this.set_titletext("Comp_ProgressBar");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta_title","20.00","0","300","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("ProgressBar");
            obj.set_cssclass("sta_WF_GuideTitle1");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20.00","60","462","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("basic usage");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20.00","95","470","36",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("[Property] max, min, pos, step");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("ProgressBar00","20","157","470","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("ProgressBar00");
            obj.set_min("0");
            obj.set_max("100");
            obj.set_pos("50");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","131","172","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("max = 100, min=0, pos = 50");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","20.00","240","470","36",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("[Property] direction = \"forward\" | \"backward\", smooth");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","20","276","244","26",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("direction = \"forward\" , smooth = true");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("ProgressBar01","20","302","470","26",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_direction("backward");
            obj.set_smooth("true");
            obj.set_min("0");
            obj.set_max("100");
            obj.set_pos("50");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","214.00","131","73","26",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("execute");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","287.00","276","73","26",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("execute");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1020,700,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Comp_ProgressBar.xfdl", function() {

        this.form_onload = function(obj,e)
        {
        	this.fn_exec();
        };

        this.fn_exec = function(obj,e)
        {
        	this.ProgressBar00.pos = 0;
        	this.setTimer(0,10);
        };


        this.form_ontimer = function(obj,e)
        {
        	if(e.timerid == 0 ){
        		if(this.ProgressBar00.pos == 100){
        			this.killTimer(0);
        		}
        		this.ProgressBar00.stepIt();
        	}
        	else if(e.timerid == 1 ){
        		if(this.ProgressBar01.pos == 100){
        			this.killTimer(1);
        		}
        		this.ProgressBar01.stepIt();
        	}
        };
        this.fn_exec2 = function(obj,e)
        {
        	this.ProgressBar01.pos = 0;
        	this.setTimer(1,10);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ontimer",this.form_ontimer,this);
            this.Button00.addEventHandler("onclick",this.fn_exec,this);
            this.Button01.addEventHandler("onclick",this.fn_exec2,this);
        };
        this.loadIncludeScript("Comp_ProgressBar.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
