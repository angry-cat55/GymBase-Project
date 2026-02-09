(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_Button");
            this.set_titletext("Comp_Button");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta_title","20.00","0","300","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Button");
            obj.set_cssclass("sta_WF_GuideTitle1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20.00","60","131","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("basic usage");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","20.00","95","116","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Button - enable");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","Button00:5","95","118","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Button - disable");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","18","267","116","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("cssclass");
            obj.set_cssclass("btn_WF_FillBlue");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20.00","170","323","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("button deesign - cssclass, icon, background");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","18","340","116","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Save");
            obj.set_icon("url(\'imagerc::img_icon_save.png\')");
            obj.set_textPadding("0px 0px 0px 10px");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","18","418","246","70",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_textPadding("0px 0px 0px 10px");
            obj.set_background("url(\'imagerc::img_nexacro.png\') no-repeat center center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sun","20.00","606","50","26",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Sun");
            obj.set_cssclass("btn_WF_Status");
            this.addChild(obj.name, obj);

            obj = new Button("btn_mon","75","607","50","26",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Mon");
            obj.set_cssclass("btn_WF_Status");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","21","565","482","36",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("[Method] getSelectStatus(),setSelectStatus()");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Button("btn_tue","130","607","50","26",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Tue");
            obj.set_cssclass("btn_WF_Status");
            this.addChild(obj.name, obj);

            obj = new Button("btn_wed","185","607","50","26",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Wed");
            obj.set_cssclass("btn_WF_Status");
            this.addChild(obj.name, obj);

            obj = new Button("btn_thu","240","607","50","26",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Thu");
            obj.set_cssclass("btn_WF_Status");
            this.addChild(obj.name, obj);

            obj = new Button("btn_fri","295","607","50","26",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Fri");
            obj.set_cssclass("btn_WF_Status");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sat","350","607","50","26",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Sat");
            obj.set_cssclass("btn_WF_Status");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","20.00","530","323","35",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("status - selected");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","18.00","205","482","36",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("[Property] cssclass, icon, background");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","21","241","185","26",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("cssclass = \"btn_WF_FillBlue\"");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","21","314","231","26",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("icon = \"imagerc::img_icon_save.png\"");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","20","392","462","26",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("background = \"url(\'imagerc::img_nexacro.png\') no-repeat center center\"");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1020,700,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Comp_Button.xfdl", function() {

        this.fn_status = function(obj,e)
        {
        	var bStatus = obj.getSelectStatus();

        	if(bStatus){
        		obj.setSelectStatus(false);
        	}
        	else{
        		obj.setSelectStatus(true);
        	}

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_sun.addEventHandler("onclick",this.fn_status,this);
            this.btn_mon.addEventHandler("onclick",this.fn_status,this);
            this.btn_tue.addEventHandler("onclick",this.fn_status,this);
            this.btn_wed.addEventHandler("onclick",this.fn_status,this);
            this.btn_thu.addEventHandler("onclick",this.fn_status,this);
            this.btn_fri.addEventHandler("onclick",this.fn_status,this);
            this.btn_sat.addEventHandler("onclick",this.fn_status,this);
        };
        this.loadIncludeScript("Comp_Button.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
