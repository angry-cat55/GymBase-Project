(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_DateRangePicker");
            this.set_titletext("Comp_DateRangePicker");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,1430);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_day", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "date","type" : "STRING","size" : "256"},{"id" : "text_color","type" : "STRING","size" : "256"},{"id" : "bg_color","type" : "STRING","size" : "256"},{"id" : "border_color","type" : "STRING","size" : "256"},{"id" : "hint_text","type" : "STRING","size" : "256"},{"id" : "readonly","type" : "STRING","size" : "256"}]},"Rows" : [{"date" : "20241003","text_color" : "red","bg_color" : "yellow","border_color" : "1px solid red","hint_text" : "meeting","readonly" : "0"},{"date" : "20241015","text_color" : "blue","bg_color" : "yellow","border_color" : "1px solid blue","readonly" : "0","hint_text" : "education"},{"date" : "20241016","text_color" : "#7f7f7f","bg_color" : "#e0e0e0","border_color" : "1px solid #e0e0e0","readonly" : "1","hint_text" : ""},{"date" : "20241017","text_color" : "#7f7f7f","bg_color" : "#e0e0e0","border_color" : "1px solid #e0e0e0","readonly" : "1"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_title","20.00","0","300","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("DateRangePicker");
            obj.set_cssclass("sta_WF_GuideTitle1");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20.00","60","462","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("basic usage");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","95","470","59",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("[Property] displaytype  = \"date\" | \"datetime\" | \"time\", displaymonthcount = 1 | 2 | 3, useheadline = true | false");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","20","159","250","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "date","datacolumn" : "date"},{"codecolumn" : "datetime","datacolumn" : "datetime"},{"codecolumn" : "time","datacolumn" : "time"}]});
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_text("date");
            obj.set_value("date");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20","185","149","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("displaymonthcount = 2");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new DateRangePicker("DateRangePicker00","20","211","380","330",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","530","185","139","26",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("displaymonthcount = 3");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new DateRangePicker("DateRangePicker01","530","211","480","330",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_displaymonthcount("3");
            obj.set_displaytype("datetime");
            obj.set_headlinedateformat("SHORTDATE");
            obj.set_headlinetimeformat("SHORTTIME");
            obj.set_startdate("20240925070809");
            obj.set_enddate("20241125102030");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","20","588","279","35",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("start date, end date");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","20","623","470","36",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("[Property] startdate, enddate");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","20","664","180","26",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("startdate = today + 2");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","20","695","180","26",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("enddate = today + 10");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_desc1","20","726","470","60",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_positionstep("0");
            obj.set_cssclass("txt_WF_GuideDesc");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","531","588","279","35",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("format");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","531","623","470","36",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("[Property] headlinedateformat, headlinetimeformat");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","530","659","239","26",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("headlinedateformat");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio01","530","685","370","46",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var Radio01_innerdataset = new nexacro.NormalDataset("Radio01_innerdataset", obj);
            Radio01_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "yyyy-MM-dd","datacolumn" : "yyyy-MM-dd"},{"codecolumn" : "SHORTDATE","datacolumn" : "SHORTDATE"},{"codecolumn" : "MEDIUMDATE","datacolumn" : "MEDIUMDATE"},{"codecolumn" : "LONGDATE","datacolumn" : "LONGDATE"},{"codecolumn" : "FULLDATE","datacolumn" : "FULLDATE"}]});
            obj.set_innerdataset(Radio01_innerdataset);
            obj.set_text("SHORTDATE");
            obj.set_value("SHORTDATE");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","530","751","199","26",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("headlinetimeformat");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio02","530","777","370","26",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var Radio02_innerdataset = new nexacro.NormalDataset("Radio02_innerdataset", obj);
            Radio02_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "HH:MMs aa","datacolumn" : "HH:MMs aa"},{"codecolumn" : "SHORTTIME","datacolumn" : "SHORTTIME"},{"codecolumn" : "MEDIUMTIME","datacolumn" : "MEDIUMTIME"}]});
            obj.set_innerdataset(Radio02_innerdataset);
            obj.set_text("SHORTTIME");
            obj.set_value("SHORTTIME");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","20","851","279","35",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("dirction, position");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","20","886","470","59",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("[Property] direction = \"horizontal\" | \"vertical\", headlineposition  = \"top\" | \"left\"");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","20","945","369","26",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("direction = \"vertical\", headlineposition = \"left\"");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new DateRangePicker("DateRangePicker02","20","971","370","440",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_direction("vertical");
            obj.set_headlineposition("left");
            obj.set_innerdataset("ds_day");
            obj.set_backgroundcolumn("bg_color");
            obj.set_bordercolumn("border_color");
            obj.set_datecolumn("date");
            obj.set_hintingcolumn("hint_text");
            obj.set_readonlycolumn("readonly");
            obj.set_textcolorcolumn("text_color");
            obj.set_startdate("20241001");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","530","851",null,"35","20",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("Holidays, specific dates");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","530","886","470","59",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("[Property] innerdataset, datecolumn, backgroundcolumn, bordercolumn, textcolorcolumn, hintingcolumn, readonlycolumn");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","530","945","169","26",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_text("innerdataset - ds_day");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","530","971","470","140",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_binddataset("ds_day");
            obj.set_autofittype("col");
            obj.set_useselcolor("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"60\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"date\"/><Cell col=\"1\" text=\"text color\"/><Cell col=\"2\" text=\"bg color\"/><Cell col=\"3\" text=\"border color\"/><Cell col=\"4\" text=\"hint text\"/><Cell col=\"5\" text=\"readonly\"/></Band><Band id=\"body\"><Cell text=\"bind:date\" displaytype=\"date\" textAlign=\"center\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"1\" text=\"bind:text_color\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:bg_color\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:border_color\" edittype=\"text\"/><Cell col=\"4\" text=\"bind:hint_text\"/><Cell col=\"5\" text=\"bind:readonly\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","308","189","130","18",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("useheadline");
            obj.set_value("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1020,1430,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Comp_DateRangePicker.xfdl", function() {

        this.Radio_onitemchanged = function(obj,e)
        {
        	this.DateRangePicker00.displaytype = this.Radio00.value;
        	this.DateRangePicker01.headlinedateformat = this.Radio01.value;
        	this.DateRangePicker01.headlinetimeformat = this.Radio02.value;
        };


        this.CheckBox_onchanged = function(obj,e)
        {
        	this.DateRangePicker00.useheadline = e.postvalue;
        };


        this.fn_exec = function(obj,e)
        {
        	this.fn_result(obj, this.DateRangePicker00, this.txt_desc1);
        };

        this.fn_result = function(obj, objComp, objTxt)
        {
        	var strText = obj.text;
        	var strDesc = ``;
        	switch(strText) {
        		case 'startdate = today + 2':
        			var startDate = this.fn_getDay(2, this.Radio00.value);
        			this.DateRangePicker00.startdate = startDate;
        			strDesc = `this.DateRangePicker00.startdate = ${startDate}`;
        			break;
        		case 'enddate = today + 10':
        			var endDate = this.fn_getDay(10, this.Radio00.value);
        			this.DateRangePicker00.enddate = endDate;
        			strDesc = `this.DateRangePicker00.endDate = ${endDate}`;
        			break;

        		default:
        			break;
        	}
        	objTxt.value = strDesc.split('\n').map(line => line.trimStart()).join('\n');
        }


        this.fn_getDay = function(nDay, sType)
        {
        	if(typeof nDay != "number")	nDay = 0;
        	if(typeof sType == "undefined")	sType = "date";
        	var now = new Date();
        	now.setDate(now.getDate() + nDay);

        	var year = now.getFullYear();
        	var month = String(now.getMonth() + 1).padStart(2, '0');  // 월은 0부터 시작하므로 +1
            var day = String(now.getDate()).padStart(2, '0');
        	var hours = String(now.getHours()).padStart(2, '0');
        	var minutes = String(now.getMinutes()).padStart(2, '0');
        	var seconds = String(now.getSeconds()).padStart(2, '0');
        	var strDate = `${year}${month}${day}`;
        	if(sType == "datetime")
        		strDate += `${hours}${minutes}${seconds}`;
        	else if(sType == "time")
        		strDate = `${hours}${minutes}${seconds}`;

        	trace(strDate);
        	return strDate;
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Radio00.addEventHandler("onitemchanged",this.Radio_onitemchanged,this);
            this.Button00.addEventHandler("onclick",this.fn_exec,this);
            this.Button01.addEventHandler("onclick",this.fn_exec,this);
            this.Radio01.addEventHandler("onitemchanged",this.Radio_onitemchanged,this);
            this.Radio02.addEventHandler("onitemchanged",this.Radio_onitemchanged,this);
            this.CheckBox00.addEventHandler("onchanged",this.CheckBox_onchanged,this);
        };
        this.loadIncludeScript("Comp_DateRangePicker.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
