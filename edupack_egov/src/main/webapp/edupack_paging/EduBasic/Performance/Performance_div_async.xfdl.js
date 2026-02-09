(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("div");
            this.set_titletext("div_async");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("st_title","10","8","193","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_Title1");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","13","72","800","600",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_async("false");
            obj.set_background("");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","862","173","120","37",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("url");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","860","72","124","39",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("async=true");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00","860","119","124","39",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("async=false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1000,700,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Performance_div_async.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.Div00.url = "EduBasic::Performance/Performance_div_async_sub.xfdl";
            trace("main");

        };

        this.Button01_onclick = function(obj,e)
        {
        	this.Div00.text = "aync=true";
        	this.Div00.async = true;
        	this.Div00.url = "";
        };

        this.Button01_00_onclick = function(obj,e)
        {
        	this.Div00.text = "aync=false";
        	this.Div00.async = false;
        	this.Div00.url = "";
        };


        this.Form_Emp_onload = function(obj,e)
        {
        //	trace("main load");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ontimer",this.Form_Emp_ontimer,this);
            this.addEventHandler("onload",this.Form_Emp_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button01_00.addEventHandler("onclick",this.Button01_00_onclick,this);
        };
        this.loadIncludeScript("Performance_div_async.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
