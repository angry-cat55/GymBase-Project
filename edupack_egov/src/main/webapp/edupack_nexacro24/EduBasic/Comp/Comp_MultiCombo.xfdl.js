(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_Combo");
            this.set_titletext("Comp_MultiCombo");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,820);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_data", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMP_NAME","type" : "STRING","size" : "256"},{"id" : "CODE","type" : "STRING","size" : "256"},{"id" : "DAY","type" : "STRING","size" : "256"}]},"Rows" : [{"CODE" : "01,03","EMP_NAME" : "Melon","DAY" : "MON,FRI"},{"CODE" : "02,04","EMP_NAME" : "Jackson","DAY" : "SUN"},{"EMP_NAME" : "Jennie","CODE" : "01,02,05","DAY" : "MON,WED"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_code", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "CODE","type" : "string","size" : "255"},{"id" : "NAME","type" : "string","size" : "255"},{"id" : "READONLY","type" : "STRING","size" : "256"}]},"Rows" : [{"CODE" : "01","NAME" : "HTML","READONLY" : "0"},{"CODE" : "02","NAME" : "CSS","READONLY" : "0"},{"CODE" : "03","NAME" : "JavaScript","READONLY" : "0"},{"CODE" : "04","NAME" : "JAVA","READONLY" : "0"},{"CODE" : "05","NAME" : "C/C++","READONLY" : "0"},{"CODE" : "06","NAME" : "Python","READONLY" : "0"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_type", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "CODE","type" : "STRING","size" : "32"},{"id" : "NAME","type" : "STRING","size" : "32"}]},"Rows" : [{"CODE" : "01","NAME" : "Accounting Team"},{"CODE" : "02","NAME" : "Finances Team"},{"CODE" : "03","NAME" : "Human Resource Team"},{"CODE" : "04","NAME" : "Marketing Team"},{"CODE" : "05","NAME" : "Sales 1 Team"},{"CODE" : "06","NAME" : "Sales 2 Team"},{"CODE" : "07","NAME" : "Sales 3 Team"},{"CODE" : "08","NAME" : "Sales Management Team"},{"CODE" : "09","NAME" : "Consulting 1 Team"},{"CODE" : "10","NAME" : "Consulting 2 Team"},{"CODE" : "11","NAME" : "Consulting 3 Team"},{"CODE" : "12","NAME" : "Design Team"},{"CODE" : "13","NAME" : "Mobile Team"},{"CODE" : "14","NAME" : "Education Team"},{"CODE" : "15","NAME" : "Technical Support 1 Team"},{"CODE" : "16","NAME" : "Technical Support 2 Team"},{"CODE" : "17","NAME" : "Technical Support 3 Team"},{"CODE" : "18","NAME" : "Customer Support 1 Team"},{"CODE" : "19","NAME" : "Customer Support 2 Team"},{"CODE" : "20","NAME" : "Customer Support 3 Team"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_title","20.00","0","300","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("MultiCombo");
            obj.set_cssclass("sta_WF_GuideTitle1");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20.00","60","462","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("basic usage");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20.00","95","470","36",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("[Property] innerdataset, codecolumn, datacolumn");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","131","145","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("innerdataset - ds_code");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new MultiCombo("MultiCombo00","20","157","200","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_code");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","259.00","131","191","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("innerdataset - set code, data");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new MultiCombo("MultiCombo01","259.00","157","200","26",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonlycolumn("readonlycolumn");
            var MultiCombo01_innerdataset = new nexacro.NormalDataset("MultiCombo01_innerdataset", obj);
            MultiCombo01_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"},{"id" : "readonlycolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "SUN","datacolumn" : "Sunday","readonlycolumn" : "1"},{"codecolumn" : "MON","datacolumn" : "Monday","readonlycolumn" : "0"},{"codecolumn" : "TUE","datacolumn" : "Tuesday","readonlycolumn" : "0"},{"codecolumn" : "WED","datacolumn" : "Wednesday","readonlycolumn" : "0"},{"codecolumn" : "THU","datacolumn" : "Thursday","readonlycolumn" : "0"},{"codecolumn" : "FRI","datacolumn" : "Friday","readonlycolumn" : "0"},{"codecolumn" : "STA","datacolumn" : "Saturday","readonlycolumn" : "1"}]});
            obj.set_innerdataset(MultiCombo01_innerdataset);
            obj.set_text("MultiCombo01");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","20.00","195","63","26",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("※ ds_code");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","20.00","221","230","106",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("ds_code");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"68\"/><Column size=\"144\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"CODE\"/><Cell col=\"1\" text=\"NAME\"/></Band><Band id=\"body\"><Cell text=\"bind:CODE\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","259.00","195","142","26",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("※ data bind - ds_data");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02","260.00","221","230","106",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("ds_data");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"85\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"EMP_NAME\"/><Cell col=\"1\" text=\"CODE\"/><Cell col=\"2\" text=\"DAY\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_NAME\"/><Cell col=\"1\" text=\"bind:CODE\"/><Cell col=\"2\" text=\"bind:DAY\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","21.00","408","242","35",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("type, select all");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","21.00","453","482","59",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("[Property] edittype = \"text\" | \"singletag\" | \"multitag\" | \"count\"\r\n           showselectallcheckbox = true | false");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","20","512","230","26",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("edittype=\"singletag\"");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new MultiCombo("MultiCombo02","20","538","230","50",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_innerdataset("ds_code");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_edittype("singletag");
            obj.set_buttonsize("26");
            obj.set_text("CSS,JavaScript,JAVA");
            obj.set_value("02,03,04");
            obj.set_index("1,2,3");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","260.00","512","175","26",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("edittype=\"multitag\"");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new MultiCombo("MultiCombo03","260.00","538","230","129",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_innerdataset("ds_code");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_edittype("multitag");
            obj.set_buttonsize("26");
            obj.set_text("CSS,JavaScript,JAVA");
            obj.set_value("02,03,04");
            obj.set_index("1,2,3");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","20","606","230","40",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("edittype=\"count\"\r\nshowselectallcheckbox = true");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new MultiCombo("MultiCombo04","20.00","643","230","26",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_innerdataset("ds_code");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_edittype("count");
            obj.set_showselectallcheckbox("true");
            obj.set_counttextformat("");
            obj.set_text("CSS,JavaScript,JAVA");
            obj.set_value("02,03,04");
            obj.set_index("1,2,3");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","18.00","694","93","35",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("count text");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","18.00","729","482","36",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("[Property] counttextformat // [*] item count,  [#] seleced count ");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","18.00","770","91","26",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("[#] / [*]");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","168.00","770","216","26",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("[#] selected from [*] items");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","530.00","62","189","35",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("index, value, text");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","530.00","97","470","36",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text(" [Property] index, value, text, textseparator");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","530.00","138","230","26",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("index = \"0,2\"");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","530.00","169","223","26",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("index = \"-1\"");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","530.00","200","245","26",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("value = \"02,04\"");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.addChild(obj.name, obj);

            obj = new Button("Button05","530.00","231","202","26",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("text");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.addChild(obj.name, obj);

            obj = new Button("Button06","530.00","262","273","26",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("textseparator = \"^\"");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.addChild(obj.name, obj);

            obj = new Button("Button07","827.00","262","173","26",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("dropdown()");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.addChild(obj.name, obj);

            obj = new MultiCombo("MultiCombo1","800.00","157","195","26",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_innerdataset("ds_code");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("MultiCombo00");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_desc1","530.00","293","470","80",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_positionstep("0");
            obj.set_cssclass("txt_WF_GuideDesc");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","530.00","408","116","35",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("get, set select");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","530.00","453","469","59",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("[Method] getSelectedItems(), setSelectedItems(), getSelectedCount(), selectAll(), clearSelect()");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Button("Button08","530.00","514","223","26",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("setSelectItems([2, 4], true)");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.addChild(obj.name, obj);

            obj = new Button("Button09","530.00","545","152","26",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("getSelectedCount()");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.addChild(obj.name, obj);

            obj = new Button("Button10","530.00","576","152","26",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("getSelectedItems()");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            obj.set_font("13px/normal consolas");
            this.addChild(obj.name, obj);

            obj = new Button("Button12","530.00","607","102","26",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("selectAll()");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.addChild(obj.name, obj);

            obj = new Button("Button13","530.00","638","116","26",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("clearSelect()");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.addChild(obj.name, obj);

            obj = new MultiCombo("MultiCombo2","800.00","538","195","26",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_innerdataset("ds_code");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("HTML,JavaScript");
            obj.set_value("01,03");
            obj.set_index("0,2");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_desc2","530.00","669","470","90",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_positionstep("0");
            obj.set_cssclass("txt_WF_GuideDesc");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","800.00","131","195","26",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("id = MultiCombo1");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","800.00","512","195","26",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("id = MultiCombo2");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1020,820,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","MultiCombo00","value","ds_data","CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","MultiCombo01","value","ds_data","DAY");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Comp_MultiCombo.xfdl", function() {
        this.fn_exec = function(obj,e)
        {
        	this.fn_result(obj, this.MultiCombo1, this.txt_desc1);
        };

        this.fn_exec2 = function(obj,e)
        {
        	this.fn_result(obj, this.MultiCombo2, this.txt_desc2);
        };

        this.fn_exec3 = function(obj,e)
        {
        	this.MultiCombo04.counttextformat = obj.text;
        };

        this.fn_result = function(obj, objComp, objTxt)
        {
        	var strText = obj.text;
        	var strDesc = ``;
        	strDesc = `this.${objComp.name}.${strText}`;
        	switch(strText) {
        		case 'index = "0,2"':
        			objComp.index = "0,2";
        			objComp.dropdown();
        			break;
        		case 'index = "-1"':
        			objComp.index = "-1";
        			objComp.dropdown();
        			break;
        		case 'value = "02,04"':
        			objComp.value = "02,04";
        			objComp.dropdown();
        			break;
        		case 'text':
        			strDesc += `\n//Result
			            ${objComp.text}`
			break;
        		case 'textseparator = "^"':
        			objComp.textseparator = "^";
        			strDesc += `\n//Result
			            ${objComp.text}`
			break;
        		case 'dropdown()':
        			objComp.dropdown();
        			break;
        		case 'setSelectItems([2, 4], true)':
        			objComp.setSelectItems([2, 4], true);
        			objComp.dropdown();
        			break;
        		case 'getSelectedCount()':
        			objComp.getSelectedCount();
        			strDesc += `\n//Result
			           ${objComp.getSelectedCount()}`
			break;
        		case 'getSelectedItems()':
        			objComp.getSelectedItems();
        			strDesc += `\n//Result
			           ${objComp.getSelectedItems()}`
			break;

        		case 'selectAll()':
        			objComp.selectAll();
        			objComp.dropdown();
        			break;
        		case 'clearSelect()':
        			objComp.clearSelect();
        			objComp.dropdown();
        			break;
        		default:
        			break;
        	}
        	objTxt.value = strDesc.split('\n').map(line => line.trimStart()).join('\n');
        }



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.fn_exec3,this);
            this.Button01.addEventHandler("onclick",this.fn_exec3,this);
            this.Button02.addEventHandler("onclick",this.fn_exec,this);
            this.Button03.addEventHandler("onclick",this.fn_exec,this);
            this.Button04.addEventHandler("onclick",this.fn_exec,this);
            this.Button05.addEventHandler("onclick",this.fn_exec,this);
            this.Button06.addEventHandler("onclick",this.fn_exec,this);
            this.Button07.addEventHandler("onclick",this.fn_exec,this);
            this.Button08.addEventHandler("onclick",this.fn_exec2,this);
            this.Button09.addEventHandler("onclick",this.fn_exec2,this);
            this.Button10.addEventHandler("onclick",this.fn_exec2,this);
            this.Button12.addEventHandler("onclick",this.fn_exec2,this);
            this.Button13.addEventHandler("onclick",this.fn_exec2,this);
        };
        this.loadIncludeScript("Comp_MultiCombo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
