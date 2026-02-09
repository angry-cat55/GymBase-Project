(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_TextArea");
            this.set_titletext("Comp_TextArea");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta_title","20.00","0","300","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("TextArea");
            obj.set_cssclass("sta_WF_GuideTitle1");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20.00","60","462","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("basic usage");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20.00","95","470","36",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("[Property] enable, readonly, displaynulltext");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20","131","86","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("enable = true");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","20","157","200","80",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_value("NEXACRO\nHello World");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","230.00","131","93","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("enable = false");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","230.00","157","200","80",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_value("NEXACRO\nHello World");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","20","247","99","26",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("readonly = true");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea02","20","273","200","80",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_value("NEXACRO\nHello World");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","231.00","247","99","26",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("displaynulltext");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea03","230.00","273","200","80",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_displaynulltext("Please enter your email");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","530.00","60","332","35",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("max length, auto skip, auto select, tab key");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","530.00","95","470","36",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text(" [Property] maxlength, autoskip, autoselect, acceptstab");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","530.00","131","198","26",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("maxlength = 4, autoskip = true");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea04","530.00","157","200","80",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_value("ABCD");
            obj.set_autoskip("true");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","530.00","247","238","26",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("autoselect = true, acceptstab = true");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea05","530.00","273","200","80",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_value("NEXACRO\n\tHello World");
            obj.set_autoselect("true");
            obj.set_acceptstab("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","20.00","392","279","35",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("input type");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","20.00","427","470","36",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("[Property] inputtype = \"english\" & \"number\" & \"digit\"...");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","20","463","165","26",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("inputtype = english,digit");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea06","20","489","200","80",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_value("NEXACRO 24\nHello World");
            obj.set_inputtype("english,digit");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","231.00","463","119","26",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("inputtype = number");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea07","231.00","489","200","80",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_value("12345\n-1,200.34");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","530.00","392","279","35",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("input filter");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","530.00","427","470","36",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("[Property] inputfilter = \"none\" & \"alpha\" & \"digit\"...");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","530.00","463","126","26",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("inputfilter = digit");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea08","530.00","489","200","80",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_value("NEXACRO\nHello World");
            obj.set_inputfilter("digit");
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("Comp_TextArea.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
