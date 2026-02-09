(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("M_MLM_MainSub");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,696);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_MLM_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","30","125","420","338",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_MLM_Img");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0",null,"120","90",null,"20",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Community");
            obj.set_cssclass("btn_MLM_Cmunity");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","119",null,"123","90",null,"20",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Product Inquiry");
            obj.set_cssclass("btn_MLM_Inquiry");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01","241",null,"120","90",null,"20",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Support");
            obj.set_cssclass("btn_MLM_Support");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_02","360",null,"120","90",null,"20",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Product Guide");
            obj.set_cssclass("btn_MLM_Guide");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",480,696,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("New Form");

                p.Static00.set_taborder("0");
                p.Static00.set_cssclass("sta_MLM_Bg");
                p.Static00.move("0","0",null,null,"0","0");

                p.Static01.set_taborder("1");
                p.Static01.set_cssclass("sta_MLM_Img");
                p.Static01.move("30","125","420","338",null,null);

                p.Button00.set_taborder("2");
                p.Button00.set_text("Community");
                p.Button00.set_cssclass("btn_MLM_Cmunity");
                p.Button00.move("0",null,"120","90",null,"20");

                p.Button00_00.set_taborder("3");
                p.Button00_00.set_text("Product Inquiry");
                p.Button00_00.set_cssclass("btn_MLM_Inquiry");
                p.Button00_00.move("119",null,"123","90",null,"20");

                p.Button00_01.set_taborder("4");
                p.Button00_01.set_text("Support");
                p.Button00_01.set_cssclass("btn_MLM_Support");
                p.Button00_01.move("241",null,"120","90",null,"20");

                p.Button00_02.set_taborder("5");
                p.Button00_02.set_text("Product Guide");
                p.Button00_02.set_cssclass("btn_MLM_Guide");
                p.Button00_02.move("360",null,"120","90",null,"20");
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Mobile","",696,480,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static01.move("0","71","100.00%","338",null,null);

                p.Button00.move("16","110","120","90",null,null);

                p.Button00_00.move("16","279","123","90",null,null);

                p.Button00_01.move(null,"110","120","90","16",null);

                p.Button00_02.move(null,"279","120","90","16",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            obj.set_type("default");
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
        this.loadIncludeScript("Mobile_MLM_sub.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
