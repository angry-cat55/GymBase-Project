(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_Edit");
            this.set_titletext("Comp_Edit");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta_title","20.00","0","300","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Edit");
            obj.set_cssclass("sta_WF_GuideTitle1");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20.00","60","462","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("basic usage");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","95","470","36",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("[Property] enable, readonly, password, displaynulltext");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20","131","86","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("enable = true");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","20","157","140","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_value("NEXACRO");
            obj.set_text("NEXACRO");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","170.00","131","93","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("enable = false");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","170.00","157","140","26",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_value("NEXACRO");
            obj.set_enable("false");
            obj.set_text("NEXACRO");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","320.00","131","99","26",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("readonly = true");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02","320.00","157","140","26",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_value("NEXACRO");
            obj.set_readonly("true");
            obj.set_text("NEXACRO");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","20","193","99","26",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("password = true");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03","20","219","140","26",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_value("NEXACRO");
            obj.set_password("true");
            obj.set_text("NEXACRO");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","170.00","193","99","26",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("displaynulltext");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit04","170.00","219","160","26",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_displaynulltext("Please enter your email");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","20.00","310","279","35",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("input type");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","20.00","345","470","36",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("[Property] inputtype = \"english\" & \"number\" & \"digit\"...");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","20","381","165","26",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("inputtype = english,digit");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit07","20.00","407","170","26",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_value("NEXACRO 24");
            obj.set_inputtype("english,digit");
            obj.set_text("NEXACRO 24");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","200.00","381","119","26",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("inputtype = number");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit08","201.00","407","170","26",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_value("-1,234.55");
            obj.set_autoselect("true");
            obj.set_text("-1,234.55");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","20.00","490","279","35",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("input mode");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","20.00","525","470","36",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("[Property] inputmode = \"normal\" | \"upper\" | \"lower\"");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","20.00","561","112","26",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("inputmode = upper");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit10","20.00","587","170","26",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_inputmode("upper");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","530.00","60","332","35",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("max length, auto skip, auto select");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","530.00","95","470","36",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text(" [Property] maxlength, autoskip, autoselect");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","530.00","131","198","26",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("maxlength = 4, autoskip = true");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit05","530.00","157","140","26",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_value("ABCD");
            obj.set_autoskip("true");
            obj.set_maxlength("4");
            obj.set_text("ABCD");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","530.00","193","112","26",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("autoselect = true");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit06","530.00","219","140","26",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_value("NEXACRO");
            obj.set_autoselect("true");
            obj.set_text("NEXACRO");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","530.00","310","279","35",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("input filter");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","530.00","345","470","36",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("[Property] inputfilter = \"none\" & \"alpha\" & \"digit\"...");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","530.00","381","126","26",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("inputfilter = digit");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit09","530","407","170","26",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_value("NEXACRO");
            obj.set_inputfilter("digit");
            obj.set_text("NEXACRO");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1020,650,this,function(p){});
            obj.set_stepcount("0");
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
        this.loadIncludeScript("Comp_Edit.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
