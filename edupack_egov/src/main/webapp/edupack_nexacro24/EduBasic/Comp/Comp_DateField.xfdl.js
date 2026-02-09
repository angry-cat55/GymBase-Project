(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_DateField");
            this.set_titletext("Comp_DateField");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_day", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "date","type" : "STRING","size" : "256"},{"id" : "text_color","type" : "STRING","size" : "256"},{"id" : "bg_color","type" : "STRING","size" : "256"},{"id" : "border_color","type" : "STRING","size" : "256"},{"id" : "hint_text","type" : "STRING","size" : "256"},{"id" : "readonly","type" : "STRING","size" : "256"}]},"Rows" : [{"date" : "20241003","text_color" : "red","bg_color" : "yellow","border_color" : "1px solid red","hint_text" : "meeting","readonly" : "0"},{"date" : "20241015","text_color" : "blue","bg_color" : "yellow","border_color" : "1px solid blue","readonly" : "0","hint_text" : "education"},{"date" : "20241016","text_color" : "#7f7f7f","bg_color" : "#e0e0e0","border_color" : "1px solid #e0e0e0","readonly" : "1","hint_text" : ""},{"date" : "20241017","text_color" : "#7f7f7f","bg_color" : "#e0e0e0","border_color" : "1px solid #e0e0e0","readonly" : "1"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_title","20.00","0","300","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("DateField");
            obj.set_cssclass("sta_WF_GuideTitle1");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20.00","60","462","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("basic usage");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20.00","95","470","59",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("[Property] labeltext, labelfloatingfixed, \r\nlabelposition = \"overlap\" | \"outside\" | \"inside\"");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","530","60","279","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("helper text");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","530","95","470","59",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("[Property] usehelpertext, helpertext");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","530","154","369","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("usehelpertext = true, helpertext = \"Please enter a date\"");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20","265","297","26",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("labeltext = \"Date\", labelfloatingfixed = true");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","20","159","250","26",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "overlap","datacolumn" : "overlap"},{"codecolumn" : "outside","datacolumn" : "outside"},{"codecolumn" : "inside","datacolumn" : "inside"}]});
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_text("overlap");
            obj.set_value("overlap");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","20","438","470","36",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("[Property] inputtype  = \"date\" | \"datetime\" | \"time\"");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","20","403","332","35",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("input type");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","20","474","153","26",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("inputtype = \"datetime\"");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","270","474","153","26",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("inputtype = \"time\"");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new DateField("DateField00","20","190","220","60",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_labeltext("DateField00");
            this.addChild(obj.name, obj);

            obj = new DateField("DateField01","20","283","220","60",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_labeltext("Date");
            this.addChild(obj.name, obj);

            obj = new DateField("DateField02","530","180","220","70",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_labeltext("Date");
            obj.set_helpertext("Please enter a date");
            obj.set_usehelpertext("true");
            this.addChild(obj.name, obj);

            obj = new DateField("DateField03","20","500","220","70",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_labeltext("Date");
            obj.set_helpertext("Please enter a date");
            obj.set_usehelpertext("true");
            obj.set_inputtype("datetime");
            obj.set_okbuttontext("OK");
            this.addChild(obj.name, obj);

            obj = new DateField("DateField04","262","500","220","70",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_labeltext("Date");
            obj.set_helpertext("Please enter a date");
            obj.set_usehelpertext("true");
            obj.set_inputtype("time");
            this.addChild(obj.name, obj);

            obj = new DateField("DateField05","530","500","220","70",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_labeltext("Date");
            obj.set_helpertext("Please enter a date");
            obj.set_usehelpertext("true");
            obj.set_displayformat("yyyy/MM/dd dddd");
            obj.set_format("yyyy/MM/dd");
            obj.set_value("20241001");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","530.00","474","376","26",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("displayformat = \"yyyy/MM/dd dddd\", format = \"yyyy/MM//dd\"");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","530","403","332","35",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("date format");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","530","438","470","36",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("[Property] displayformat, format");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","20","616",null,"35","530",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("holidays, specific dates");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","20","651","470","56",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("[Property] innerdataset, datecolumn, backgroundcolumn, bordercolumn, textcolorcolumn, hintingcolumn, readonlycolumn");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","20","707","139","26",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_text("innerdataset - ds_day");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","20","733","510","140",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_binddataset("ds_day");
            obj.set_autofittype("col");
            obj.set_useselcolor("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"82\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"date\"/><Cell col=\"1\" text=\"text color\"/><Cell col=\"2\" text=\"bg color\"/><Cell col=\"3\" text=\"border color\"/><Cell col=\"4\" text=\"hint text\"/><Cell col=\"5\" text=\"readonly\"/></Band><Band id=\"body\"><Cell text=\"bind:date\" displaytype=\"date\" textAlign=\"center\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"1\" text=\"bind:text_color\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:bg_color\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:border_color\" edittype=\"text\"/><Cell col=\"4\" text=\"bind:hint_text\"/><Cell col=\"5\" text=\"bind:readonly\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new DateField("DateField06","535","735","220","70",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_labeltext("Date");
            obj.set_helpertext("Please enter a date");
            obj.set_usehelpertext("true");
            obj.set_displayformat("yyyy/MM/dd dddd");
            obj.set_format("yyyy/MM/dd");
            obj.set_value("20241001");
            obj.set_innerdataset("ds_day");
            obj.set_backgroundcolumn("bg_color");
            obj.set_bordercolumn("border_color");
            obj.set_datecolumn("date");
            obj.set_hintingcolumn("hint_text");
            obj.set_readonlycolumn("readonly");
            obj.set_textcolorcolumn("text_color");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1020,900,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Comp_DateField.xfdl", function() {

        this.Radio_onitemchanged = function(obj,e)
        {
        	this.DateField00.labelposition = this.Radio00.value;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Radio00.addEventHandler("onitemchanged",this.Radio_onitemchanged,this);
        };
        this.loadIncludeScript("Comp_DateField.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
