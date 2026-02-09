(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_CheckBoxSet");
            this.set_titletext("Comp_CheckBoxSet");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,850);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_data", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMP_NAME","type" : "STRING","size" : "256"},{"id" : "CODE","type" : "STRING","size" : "256"}]},"Rows" : [{"CODE" : "01,03","EMP_NAME" : "Melon"},{"CODE" : "02,04","EMP_NAME" : "Jackson"},{"EMP_NAME" : "Jennie","CODE" : "01,02,05"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_code", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "CODE","type" : "string","size" : "255"},{"id" : "NAME","type" : "string","size" : "255"},{"id" : "READONLY","type" : "STRING","size" : "256"}]},"Rows" : [{"CODE" : "01","NAME" : "HTML","READONLY" : "0"},{"CODE" : "02","NAME" : "CSS","READONLY" : "0"},{"CODE" : "03","NAME" : "JavaScript","READONLY" : "0"},{"CODE" : "04","NAME" : "JAVA","READONLY" : "0"},{"CODE" : "05","NAME" : "C/C++","READONLY" : "0"},{"CODE" : "06","NAME" : "Python","READONLY" : "0"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_title","20.00","0","300","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("CheckBoxSet");
            obj.set_cssclass("sta_WF_GuideTitle1");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","131","145","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("innerdataset - ds_code");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new CheckBoxSet("CheckBoxSet00","20","157","507","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_code");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_readonlycolumn("READONLY");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","95","470","36",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("[Property] innerdataset, codecolumn, datacolumn, readonlycolumn");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new CheckBoxSet("CheckBoxSet01","20","236","471","46",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonlycolumn("readonlycolumn");
            obj.set_rowcount("2");
            var CheckBoxSet01_innerdataset = new nexacro.NormalDataset("CheckBoxSet01_innerdataset", obj);
            CheckBoxSet01_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"},{"id" : "readonlycolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "SUN","datacolumn" : "Sunday","readonlycolumn" : "1"},{"codecolumn" : "MON","datacolumn" : "Monday","readonlycolumn" : "0"},{"codecolumn" : "TUE","datacolumn" : "Tuesday","readonlycolumn" : "0"},{"codecolumn" : "WED","datacolumn" : "Wednesday","readonlycolumn" : "0"},{"codecolumn" : "THU","datacolumn" : "Thursday","readonlycolumn" : "0"},{"codecolumn" : "FRI","datacolumn" : "Friday","readonlycolumn" : "0"},{"codecolumn" : "STA","datacolumn" : "Saturday","readonlycolumn" : "1"}]});
            obj.set_innerdataset(CheckBoxSet01_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20.00","60","300","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Basic Usage");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20.00","210","201","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("innerdataset - set code, data");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","20.00","314","63","26",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("※ ds_code");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","20.00","340","230","106",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("ds_code");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"68\"/><Column size=\"144\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"CODE\"/><Cell col=\"1\" text=\"NAME\"/></Band><Band id=\"body\"><Cell text=\"bind:CODE\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","259.00","314","142","26",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("※ data bind - ds_data");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","260.00","340","230","106",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("ds_data");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"85\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"EMP_NAME\"/><Cell col=\"1\" text=\"CODE\"/><Cell col=\"2\" text=\"DAY\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_NAME\"/><Cell col=\"1\" text=\"bind:CODE\"/><Cell col=\"2\" text=\"bind:DAY\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","20.00","496","332","35",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("column, row count");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","20.00","531","470","50",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("[Property] columncount, rowcount, \r\ndirection = \"horizontal\" | \"vertical\"");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","20","581","205","26",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("columncount = 3 or rowcount = 2");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","370.00","581","60","26",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("direction");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","20.00","698","211","26",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("columncount = -1 & rowcount = -1");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio05","370.00","607","100","50",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Radio05_innerdataset = new nexacro.NormalDataset("Radio05_innerdataset", obj);
            Radio05_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "horizontal","datacolumn" : "horizontal"},{"codecolumn" : "vertical","datacolumn" : "vertical"}]});
            obj.set_innerdataset(Radio05_innerdataset);
            obj.set_text("horizontal");
            obj.set_value("horizontal");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new CheckBoxSet("CheckBoxSet02","20.00","607","311","76",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonlycolumn("readonlycolumn");
            obj.set_columncount("3");
            var CheckBoxSet02_innerdataset = new nexacro.NormalDataset("CheckBoxSet02_innerdataset", obj);
            CheckBoxSet02_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"},{"id" : "readonlycolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "SUN","datacolumn" : "Sunday","readonlycolumn" : "1"},{"codecolumn" : "MON","datacolumn" : "Monday","readonlycolumn" : "0"},{"codecolumn" : "TUE","datacolumn" : "Tuesday","readonlycolumn" : "0"},{"codecolumn" : "WED","datacolumn" : "Wednesday","readonlycolumn" : "0"},{"codecolumn" : "THU","datacolumn" : "Thursday","readonlycolumn" : "0"},{"codecolumn" : "FRI","datacolumn" : "Friday","readonlycolumn" : "0"},{"codecolumn" : "STA","datacolumn" : "Saturday","readonlycolumn" : "1"}]});
            obj.set_innerdataset(CheckBoxSet02_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Static("Static14","530.00","60","189","35",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("index, value, text");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","530.00","95","470","36",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("[Property] index, value, text, textseparator");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","530","131","180","26",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("index = \"0,2\"");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","530.00","162","180","26",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("index = \"-1\"");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","530.00","193","180","26",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("value = \"02,04\"");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.addChild(obj.name, obj);

            obj = new Button("Button05","530.00","224","180","26",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("text");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.addChild(obj.name, obj);

            obj = new Button("Button06","530.00","255","180","26",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("textseparator = \"^\"");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_desc1","530","286","470","80",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_positionstep("0");
            obj.set_cssclass("txt_WF_GuideDesc");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","530.00","496","116","35",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("get, set select");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","530","531","469","56",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("[Method] getSelectedItems(), setSelectedItems(), getSelectedCount(), selectAll(), clearSelect()");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Button("Button08","530","587","223","26",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("setSelectItems([2, 4], true)");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.addChild(obj.name, obj);

            obj = new Button("Button09","530.00","618","152","26",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("getSelectedCount()");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.addChild(obj.name, obj);

            obj = new Button("Button10","530.00","649","152","26",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("getSelectedItems()");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            obj.set_font("13px/normal consolas");
            this.addChild(obj.name, obj);

            obj = new Button("Button12","530.00","680","102","26",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("selectAll()");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.addChild(obj.name, obj);

            obj = new Button("Button13","530.00","711","116","26",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("clearSelect()");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_desc2","530.00","742","470","80",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_positionstep("0");
            obj.set_cssclass("txt_WF_GuideDesc");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new CheckBoxSet("CheckBoxSet03","20","724","407","26",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_innerdataset("ds_code");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_readonlycolumn("READONLY");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            this.addChild(obj.name, obj);

            obj = new CheckBoxSet("CheckBoxSet1","800","157","197","78",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_innerdataset("ds_code");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_readonlycolumn("READONLY");
            obj.set_columncount("2");
            this.addChild(obj.name, obj);

            obj = new CheckBoxSet("CheckBoxSet2","800","613","197","76",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_innerdataset("ds_code");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_readonlycolumn("READONLY");
            obj.set_columncount("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","800.00","131","145","26",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("id = CheckBoxSet1");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","800.00","587","145","26",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("id = CheckBoxSet2");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1020,850,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Comp_CheckBoxSet.xfdl", function() {
        this.fn_exec = function(obj,e)
        {
        	this.fn_result(obj, this.CheckBoxSet1, this.txt_desc1);
        };

        this.fn_exec2 = function(obj,e)
        {
        	this.fn_result(obj, this.CheckBoxSet2, this.txt_desc2);
        };


        this.fn_result = function(obj, objComp, objTxt)
        {
        	var strText = obj.text;	// index = "0,2
        	var strDesc = ``;
        	strDesc = `this.${objComp.name}.${strText}`;
        	switch(strText) {
        		case 'index = "0,2"':
        			objComp.index = "0,2";
        			break;
        		case 'index = "-1"':
        			objComp.index = "-1";
        			break;
        		case 'value = "02,04"':
        			objComp.value = "02,04";
        			break;
        		case 'text':
        			strDesc += `\n//Result \n${objComp.text}`;
        			break;
        		case 'textseparator = "^"':
        			objComp.textseparator = "^";
        			strDesc += `\n//Result \n${objComp.text}`;
        			break;
        		case 'setSelectItems([2, 4], true)':
        			objComp.setSelectItems([2, 4], true);
        			break;
        		case 'getSelectedCount()':
        			objComp.getSelectedCount();
        			strDesc += `\n//Result \n${objComp.getSelectedCount()}`
        			break;
        		case 'getSelectedItems()':
        			objComp.getSelectedItems();
        			strDesc += `\n//Result \n${objComp.getSelectedItems()}`
        			break;
        		case 'selectAll()':
        			objComp.selectAll();
        			break;
        		case 'clearSelect()':
        			objComp.clearSelect();
        			break;
        		default:
        			break;
        	}
        	objTxt.value = strDesc.split('\n').map(line => line.trimStart()).join('\n');
        }


        this.Radio05_onitemchanged = function(obj,e)
        {
        	this.CheckBoxSet02.direction = e.postvalue;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Radio05.addEventHandler("onitemchanged",this.Radio05_onitemchanged,this);
            this.Button02.addEventHandler("onclick",this.fn_exec,this);
            this.Button03.addEventHandler("onclick",this.fn_exec,this);
            this.Button04.addEventHandler("onclick",this.fn_exec,this);
            this.Button05.addEventHandler("onclick",this.fn_exec,this);
            this.Button06.addEventHandler("onclick",this.fn_exec,this);
            this.Button08.addEventHandler("onclick",this.fn_exec2,this);
            this.Button09.addEventHandler("onclick",this.fn_exec2,this);
            this.Button10.addEventHandler("onclick",this.fn_exec2,this);
            this.Button12.addEventHandler("onclick",this.fn_exec2,this);
            this.Button13.addEventHandler("onclick",this.fn_exec2,this);
        };
        this.loadIncludeScript("Comp_CheckBoxSet.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
