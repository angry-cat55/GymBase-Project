(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_Spin");
            this.set_titletext("Comp_Spin");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta_title","20.00","0","300","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Spin");
            obj.set_cssclass("sta_WF_GuideTitle1");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20.00","60","462","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("basic usage");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20.00","240","332","35",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("increment, max, min value");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20.00","95","470","36",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("[Property] type = \"normal\" | \"noneditable\" | \"spinonly\"");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20.00","131","112","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("normal (default)");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","150.00","131","112","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("noneditable");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","280.00","131","118","26",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("spinonly");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","20.00","311","277","26",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("increment = 1000, max = 20000, min = 10000");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","20.00","275","696","36",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("[Property] increment, max, min, circulation = \"true\" | \"false\", displaycomma = \"true\" | \"false\"");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin10","20","157","100","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_value("10");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin11","150.00","157","100","26",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_type("noneditable");
            obj.set_value("10");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin12","280.00","157","36","26",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_type("spinonly");
            obj.set_value("10");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin00","20.00","337","100","26",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_increment("1000");
            obj.set_circulation("true");
            obj.set_displaycomma("true");
            obj.set_min("10000");
            obj.set_max("20000");
            obj.set_value("15000");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","145","337","100","26",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("circulation");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","261","337","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("displaycomma");
            obj.set_value("true");
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
        this.registerScript("Comp_Spin.xfdl", function() {
        this.CheckBox00_onchanged = function(obj,e)
        {
        	this.Spin00.circulation = e.postvalue;
        };

        this.CheckBox01_onchanged = function(obj,e)
        {
        	this.Spin00.displaycomma = e.postvalue;
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static04.addEventHandler("onclick",this.Static03_00_00_onclick,this);
            this.CheckBox00.addEventHandler("onchanged",this.CheckBox00_onchanged,this);
            this.CheckBox01.addEventHandler("onchanged",this.CheckBox01_onchanged,this);
        };
        this.loadIncludeScript("Comp_Spin.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
