(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Component");
            this.set_titletext("Component");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta_title","20.00","20","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Component");
            obj.set_cssclass("sta_WF_GuideTitle1");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20.00","70","462","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("basic usage");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("sta_gLine00","0","0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Static01");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Static("sta_gLine04","0","50",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Static01");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Static("sta_gLine01","0","0","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Static01");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Static("sta_gLine05","490.00","70","40",null,null,"20",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Static01");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Static("sta_gLine03",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Static01");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Static("sta_gLine02","0",null,"100.00%","20",null,"0",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Static01");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20.00","105","470","36",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("[Property] ");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20.00","146","112","18",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("guide");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","20","174","140","26",null,null,null,null,null,null,this);
            obj.set_taborder("10");
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
        this.registerScript("Comp_GuideBase.xfdl", function() {
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

        };
        this.loadIncludeScript("Comp_GuideBase.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
