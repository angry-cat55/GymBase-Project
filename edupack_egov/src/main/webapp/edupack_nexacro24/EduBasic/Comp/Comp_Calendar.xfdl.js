(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_Calendar");
            this.set_titletext("Comp_Calendar");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,970);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_day", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "date","type" : "STRING","size" : "256"},{"id" : "text_color","type" : "STRING","size" : "256"},{"id" : "bg_color","type" : "STRING","size" : "256"},{"id" : "border_color","type" : "STRING","size" : "256"}]},"Rows" : [{"date" : "20241003","text_color" : "red","bg_color" : "yellow","border_color" : "1px solid red"},{"date" : "20241015","text_color" : "#7f7f7f","bg_color" : "#e0e0e0","border_color" : "1px solid #e0e0e0"},{"date" : "20241016","text_color" : "#7f7f7f","bg_color" : "#e0e0e0","border_color" : "1px solid #e0e0e0"},{"date" : "20241017","text_color" : "#7f7f7f","bg_color" : "#e0e0e0","border_color" : "1px solid #e0e0e0"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_title","20.00","0","300","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Calendar");
            obj.set_cssclass("sta_WF_GuideTitle1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20.00","60","470","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Calender Type");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","95","470","59",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("[Property] type = \"normal\" | \"spin\" | \"monthonly\" ");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20","154","99","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("type = \"normal\"");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","20","180","180","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_locale("");
            obj.set_value("20241001");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20.00","220","86","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("type = \"spin\"");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","20","246","180","26",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_locale("");
            obj.set_value("20241001");
            obj.set_type("spin");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","240.00","154","119","26",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("type = \"monthonly\"");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar02","240.00","180","200","220",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_locale("");
            obj.set_value("20241001");
            obj.set_type("monthonly");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","530","60","470","35",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("DatePicker Type /  Trailing Day");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","530","95","470","59",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("[Property] datepickerchangetype = \"auto\" | \"spin\" | \"button\"\r\nusetrailingday = \"true\" | \"false\"");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","530","154","369","26",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_text("datepickerchangetype = \"button\", usetrailingday = \"true\"");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar03","530","180","200","220",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_locale("");
            obj.set_value("20241001");
            obj.set_datepickerchangetype("button");
            obj.set_type("monthonly");
            obj.set_usetrailingday("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","20","460",null,"35","528",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Date Format");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","20","495","472","56",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("[Property] dateformat, editformat");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","20","551","229","40",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("dateformat = \"yyyy.MM.dd dddd\"\r\neditformat = \"yyyy.MM.dd\"");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar04","20","591","180","26",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_locale("");
            obj.set_value("20241001");
            obj.set_dateformat("yyyy.MM.dd dddd");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","249","551","258","40",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("dateformat = \"yyyy.MM.dd ddd HH:mm:ss\"\r\neditformat = \"yyyy.MM.dd HH:mm:ss\"");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar05","249","591","190","26",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_locale("");
            obj.set_value("20241001092030000");
            obj.set_dateformat("yyyy.MM.dd ddd HH:mm:ss");
            obj.set_editformat("yyyy.MM.dd HH:mm:ss");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","20","627","211","40",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("dateformat = \"SHORTDATE\"\r\neditformat = \"SHORTDATE\"");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar06","20","667","180","26",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_locale("");
            obj.set_value("20241001");
            obj.set_dateformat("SHORTDATE");
            obj.set_editformat("SHORTDATE");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","249","627","211","40",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("dateformat = \"LONGDATE\"\r\neditformat = \"LONGDATE\"");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar07","249","667","190","26",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_locale("");
            obj.set_value("20241001");
            obj.set_dateformat("LONGDATE");
            obj.set_editformat("LONGDATE");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","26","754",null,"35","522",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("Locale");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","26","789","472","36",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("[Property] locale = \"ko_KR\" | \"en_US\" | \"en_JP\" ...");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","26","825","106","26",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("locale = \"en_US\"");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar08","26","851","200","26",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_value("20241001");
            obj.set_dateformat("LONGDATE");
            obj.set_editformat("SHORTDATE");
            obj.set_locale("en_US");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","250","825","106","26",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("locale = \"ja_JP\"");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar09","250","851","200","26",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_value("20241001");
            obj.set_locale("ja_JP");
            obj.set_dateformat("SHORTDATE");
            obj.set_editformat("SHORTDATE");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","530.00","460",null,"35","20",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("Holidays, specific dates");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","530.00","495","470","56",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("[Property] innerdataset, datecolumn, backgroundcolumn, bordercolumn, textcolorcolumn");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","530.00","551","139","26",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_text("innerdataset - ds_day");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","530.00","577","470","140",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_binddataset("ds_day");
            obj.set_autofittype("col");
            obj.set_useselcolor("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"date\"/><Cell col=\"1\" text=\"text color\"/><Cell col=\"2\" text=\"bg color\"/><Cell col=\"3\" text=\"border color\"/></Band><Band id=\"body\"><Cell text=\"bind:date\" displaytype=\"date\" textAlign=\"center\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"1\" text=\"bind:text_color\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:bg_color\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:border_color\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar10","530.00","722","200","220",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_locale("");
            obj.set_value("20241001");
            obj.set_type("monthonly");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_innerdataset("ds_day");
            obj.set_backgroundcolumn("bg_color");
            obj.set_bordercolumn("border_color");
            obj.set_datecolumn("date");
            obj.set_textcolorcolumn("text_color");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1020,970,this,function(p){});
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
        this.loadIncludeScript("Comp_Calendar.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
