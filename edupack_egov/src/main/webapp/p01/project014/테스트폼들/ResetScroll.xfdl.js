(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ResetScroll");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(550,350);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00","55","40","430","100",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_background("yellow");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","343","21","71","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("펼치기");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","55","Div00:20","430","100",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_background("pink");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","343","15","71","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("펼치기");
            this.Div01.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",550,350,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("ResetScroll.xfdl", function() {

        this.Div00_Button00_onclick = function(obj,e)
        {
        	if(obj.text == "접기"){
        		this.Div00.height = 100;
        		obj.text = "펼치기";
        	}
        	else if (obj.text == "펼치기"){
        		this.Div00.height = 500;
        		obj.text = "접기";
        	}
        	this.resetScroll();
        };

        this.Div01_Button01_onclick = function(obj,e)
        {
        	if(obj.text == "접기"){
        		this.Div01.height = 100;
        		obj.text = "펼치기";
        	}
        	else if (obj.text == "펼치기"){
        		this.Div01.height = 500;
        		obj.text = "접기";
        	}
        	this.resetScroll();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.form.Button00.addEventHandler("onclick",this.Div00_Button00_onclick,this);
            this.Div01.form.Button01.addEventHandler("onclick",this.Div01_Button01_onclick,this);
        };
        this.loadIncludeScript("ResetScroll.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
