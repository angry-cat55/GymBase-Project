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
            this.set_titletext("Comp_Combo");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_data", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMP_NAME","type" : "STRING","size" : "256"},{"id" : "CODE","type" : "STRING","size" : "256"},{"id" : "DAY","type" : "STRING","size" : "256"}]},"Rows" : [{"CODE" : "01","EMP_NAME" : "Melon","DAY" : "SUN"},{"CODE" : "02","EMP_NAME" : "Jackson","DAY" : "MON"},{"EMP_NAME" : "Jennie","CODE" : "05","DAY" : "FRI"}]});
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
            obj.set_text("Combo");
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
            obj.set_text("[Property] innerdataset, codecolumn, datacolumn");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20","131","145","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("innerdataset - ds_code");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","20","157","180","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_code");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","259.00","131","191","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("innerdataset - set code, data");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","259.00","157","190","26",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Combo01_innerdataset = new nexacro.NormalDataset("Combo01_innerdataset", obj);
            Combo01_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"},{"id" : "readonlycolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "SUN","datacolumn" : "Sunday"},{"codecolumn" : "MON","datacolumn" : "Monday"},{"codecolumn" : "TUE","datacolumn" : "Tuesday"},{"codecolumn" : "WED","datacolumn" : "Wednesday"},{"codecolumn" : "THU","datacolumn" : "Thursday"},{"codecolumn" : "FRI","datacolumn" : "Friday"},{"codecolumn" : "STA","datacolumn" : "Saturday"}]});
            obj.set_innerdataset(Combo01_innerdataset);
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","20","203","63","26",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("※ ds_code");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","20.00","233","230","106",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("ds_code");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"68\"/><Column size=\"144\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"CODE\"/><Cell col=\"1\" text=\"NAME\"/></Band><Band id=\"body\"><Cell text=\"bind:CODE\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","259.00","203","142","26",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("※ data bind - ds_data");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","260.00","233","230","106",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("ds_data");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"85\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"EMP_NAME\"/><Cell col=\"1\" text=\"CODE\"/><Cell col=\"2\" text=\"DAY\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_NAME\"/><Cell col=\"1\" text=\"bind:CODE\"/><Cell col=\"2\" text=\"bind:DAY\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","18.00","392","478","35",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("combo type");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","18.00","427","470","36",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("[Property] type = \"dropdown\" | \"search\" | \"filter\" ... ");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_type","18.00","468","402","50",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("2");
            obj.set_fittocontents("width");
            var rdo_type_innerdataset = new nexacro.NormalDataset("rdo_type_innerdataset", obj);
            rdo_type_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "dropdown","datacolumn" : "dropdown"},{"codecolumn" : "search","datacolumn" : "search"},{"codecolumn" : "filter","datacolumn" : "filter"},{"datacolumn" : "filterlike","codecolumn" : "filterlike"},{"datacolumn" : "caseisearch","codecolumn" : "caseisearch"},{"datacolumn" : "caseifilter","codecolumn" : "caseifilter"},{"datacolumn" : "caseifilterlike","codecolumn" : "caseifilterlike"}]});
            obj.set_innerdataset(rdo_type_innerdataset);
            obj.set_value("dropdown");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_type","18.00","529","190","26",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_innerdataset("ds_type");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo02");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","530.00","60","332","35",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("index, value, text");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","530.00","95","470","36",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text(" [Property] index, value, text");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","530.00","136","166","26",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("index = 0");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","530.00","167","173","26",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("index = -1");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","530.00","198","188","26",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("value = \"03\"");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","530.00","229","188","26",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("text");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo1","800","162","180","26",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_innerdataset("ds_code");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","800","229","106","26",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("dropdown()");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_desc1","530","260","470","80",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_positionstep("0");
            obj.set_cssclass("txt_WF_GuideDesc");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","530.00","392","275","35",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("null text");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","530.00","427","470","36",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("[Property] displaynulltext");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo02","530.00","468","198","26",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_innerdataset("ds_code");
            obj.set_displaynulltext("Please Select...");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","530.00","539","491","35",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("display count");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","530.00","574","470","36",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("[Property] displayrowcount");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","530","610","33","26",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("count");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Spin("spn_count","530","636","74","26",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_min("5");
            obj.set_max("20");
            obj.set_value("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","610.00","611","40","26",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("result");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_count","610.00","636","198","26",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_innerdataset("ds_type");
            obj.set_displayrowcount("5");
            obj.set_text("Accounting Team");
            obj.set_value("01");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","800.00","136","195","26",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("id = Combo1");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1020,700,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Combo00","value","ds_data","CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Combo01","value","ds_data","DAY");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Comp_Combo.xfdl", function() {
        this.fn_exec = function(obj,e)
        {
        	this.fn_result(obj, this.Combo1, this.txt_desc1);
        };

        this.fn_result = function(obj, objComp, objTxt)
        {
        	var strText = obj.text;
        	var strDesc = ``
        	strDesc = `this.${objComp.name}.${strText}`;
        	switch(strText) {
        		case 'index = 0':
        			objComp.index = 0 ;
        			objComp.dropdown();
        			break;
        		case 'index = -1':
        			objComp.index = -1;
        			objComp.dropdown();
        			break;
        		case 'value = "03"':
        			objComp.value = "03";
        			break;
        		case 'text':
        			strDesc += `\n//Result \n${objComp.text}`
        			break;
        		case 'dropdown()':
        			objComp.dropdown();
        			break;
        		default:
        			break;
        	}
        	objTxt.value = strDesc.split('\n').map(line => line.trimStart()).join('\n');
        }


        this.rdo_type_onitemchanged = function(obj,e)
        {
        	this.cmb_type.type = e.postvalue;
        };

        this.spn_count_onchanged = function(obj,e)
        {
        	this.cmb_count.displayrowcount = obj.value;
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.rdo_type.addEventHandler("onitemchanged",this.rdo_type_onitemchanged,this);
            this.Button00.addEventHandler("onclick",this.fn_exec,this);
            this.Button01.addEventHandler("onclick",this.fn_exec,this);
            this.Button02.addEventHandler("onclick",this.fn_exec,this);
            this.Button03.addEventHandler("onclick",this.fn_exec,this);
            this.Button04.addEventHandler("onclick",this.fn_exec,this);
            this.spn_count.addEventHandler("onchanged",this.spn_count_onchanged,this);
        };
        this.loadIncludeScript("Comp_Combo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
