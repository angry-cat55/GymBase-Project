(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_BaseSub");
            this.set_titletext("Components Sub");
            if (Form == this.constructor)
            {
                this._setFormPosition(370,150);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","20.00","10","80","26",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Name");
            obj.set_cssclass("sta_WF_GuideLabel");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","106.00","10","140","26",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_value("Nexaro N");
            obj.set_text("Nexaro N");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","106.00","46","140","26",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_value("Education Team");
            obj.set_text("Education Team");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20.00","46","80","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Department");
            obj.set_cssclass("sta_WF_GuideLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20.00","84","220","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("※ Comp::Comp_BaseSub.xfdl");
            obj.set_cssclass("sta_WF_GuideLabel");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",370,150,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("Comp_BaseSub.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
