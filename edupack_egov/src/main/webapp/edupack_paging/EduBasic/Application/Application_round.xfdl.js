(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Application_round");
            this.set_titletext("round");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj.set_progressload("false");
            obj._setContents({});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","10","60","290","41",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Math.round vs nexacro.round");
            this.addChild(obj.name, obj);

            obj = new Static("st_title","10","8","290","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Math.round / nexacro.round");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_Title1");
            this.addChild(obj.name, obj);
            // Layout Functions
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
        this.registerScript("Application_round.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {

        	var  pie = 3.14159265358979;
        	trace("pid :" + pie);
        	trace("Math.round(pie) : " + Math.round(pie)); // 3
        	trace("Math.round(pie,2) : " + Math.round(pie,2)); // 3


        	trace("Math.round(pie*100)/100.0 : " + Math.round(pie*100)/100.0); //3.14
        	trace("Math.round(pie*1000)/1000.0 : " + Math.round(pie*1000)/1000.0); //3.142
        	trace("nexacro.round(pie,2) : " + nexacro.round(pie,2)); //3.14
        	trace("nexacro.round(pie,3) : " + nexacro.round(pie,3)); //3.142

        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("Application_round.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
