(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_standard");
            this.set_titletext("값 전달");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("st_title","10","8","400","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("ListDetail ");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_Title1");
            this.addChild(obj.name, obj);

            obj = new Div("divBody","11","45","969","645",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("divBody");
            obj.set_url("EduBasic::Application/Application_data_list.xfdl");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divBody
            obj = new Layout("default","",0,0,this.divBody.form,function(p){});
            this.divBody.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1000,700,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","EduBasic::Application/Application_data_list.xfdl");
        };
        
        // User Script
        this.registerScript("Application_data_pass.xfdl", function() {

        this.Form_standard_onload = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_standard_onload,this);
        };
        this.loadIncludeScript("Application_data_pass.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
