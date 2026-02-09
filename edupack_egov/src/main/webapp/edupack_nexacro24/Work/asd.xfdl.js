(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("asd");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(300,300);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta00","47","13","140","36",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div 링크 화면");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","45","111","187","45",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("버튼");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",300,300,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("asd.xfdl", function() {

        this.btn00_onclick = function(obj,e)
        {
        	trace(this);
        	trace(this.parent);
        	trace(this.parent.parent);

        	trace(this.parent.parent.edt00.value);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
        };
        this.loadIncludeScript("asd.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
