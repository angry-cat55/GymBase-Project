(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_Static");
            this.set_titletext("Comp_Static");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta_title","20.00","0","300","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Static");
            obj.set_cssclass("sta_WF_GuideTitle1");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20.00","60","462","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("basic usage");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20.00","90","112","26",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("default");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","32","116","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("NEXACRO");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","150.00","90","112","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("cssclass");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","150","116","120","46",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("NEXACRO");
            obj.set_cssclass("sta_WF_CompLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","20.00","209","332","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("decorate");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","20.00","244","470","36",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("[Property] usedecorate = \"true\" | \"false\"");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","20.00","280","112","26",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("default");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","410.00","280","132","26",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("usedecorate = \"true\"");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","20","306","354","26",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("NEXACRO <fs v=\'16\'>N24</fs>");
            obj.set_expr("");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","410.00","308","204","26",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("NEXACRO <fs v=\'16\'>N24</fs>");
            obj.set_expr("");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","20.00","337","354","26",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("NEXACRO <fc v=\'red\'>N24</fc>");
            obj.set_expr("");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","410.00","339","204","26",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("NEXACRO <fc v=\'red\'>N24</fc>");
            obj.set_expr("");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","20.00","368","354","26",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("<ff v=\'Arial\'>NEXACRO N24</ff>");
            obj.set_expr("");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","410.00","370","204","26",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("<ff v=\'Arial\'>NEXACRO N24</ff>");
            obj.set_expr("");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","20.00","399","354","26",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("NEXACRO <b v=\'true\'>N24</b>");
            obj.set_expr("");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","410.00","401","204","26",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("NEXACRO <b v=\'true\'>N24</b>");
            obj.set_expr("");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","20.00","430","354","26",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("NEXACRO <i v=\'true\'>N24</i>");
            obj.set_expr("");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","410.00","432","204","26",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("NEXACRO <i v=\'true\'>N24</i>");
            obj.set_expr("");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","20.00","461","354","26",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("NEXACRO <u v=\'true\'>N24</u>");
            obj.set_expr("");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","410.00","463","204","26",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("NEXACRO <u v=\'true\'>N24</u>");
            obj.set_expr("");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","20.00","492","354","26",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("NEXACRO <s v=\'true\'>N24</s>");
            obj.set_expr("");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","410.00","494","204","26",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("NEXACRO <s v=\'true\'>N24</s>");
            obj.set_expr("");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","20.00","523","354","26",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("<l v=\'http://www.tobesoft.com\'>Link WebPage</l>");
            obj.set_expr("");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","410.00","525","204","26",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("<l v=\'http://www.tobesoft.com\'>Link WebPage</l>");
            obj.set_expr("");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","20.00","554","354","26",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("<l v=\'tel:010-1234-5678\'> Phone Call </l>");
            obj.set_expr("");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","410.00","556","204","26",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("<l v=\'tel:010-1234-5678\'> Phone Call </l>");
            obj.set_expr("");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static27","20.00","585","354","26",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("<l v=\'mailto:edu@tobesoft.com\'> Send Mail </l>");
            obj.set_expr("");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Static("Static28","410.00","587","204","26",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("<l v=\'mailto:edu@tobesoft.com\'> Send Mail </l>");
            obj.set_expr("");
            obj.set_usedecorate("true");
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
        this.registerScript("Comp_Static.xfdl", function() {
        this.CheckBox00_onchanged = function(obj,e)
        {
        	this.Spin00.circulation = e.postvalue;
        };

        this.CheckBox01_onchanged = function(obj,e)
        {
        	this.Spin00.displaycomma = e.postvalue;
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static03.addEventHandler("onclick",this.Static03_00_00_onclick,this);
            this.Static08.addEventHandler("onclick",this.Static03_00_00_onclick,this);
        };
        this.loadIncludeScript("Comp_Static.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
