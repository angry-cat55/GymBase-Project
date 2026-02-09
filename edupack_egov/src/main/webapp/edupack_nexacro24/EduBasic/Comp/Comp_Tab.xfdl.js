(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_Tab");
            this.set_titletext("Comp_Tab");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_emp", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMP_NAME","type" : "STRING","size" : "50"},{"id" : "EMP_ID","type" : "STRING","size" : "10"},{"id" : "DEPT_CODE","type" : "STRING","size" : "256"},{"id" : "POSITION","type" : "STRING","size" : "10"},{"id" : "HIRE_DATE","type" : "DATE","size" : "10"},{"id" : "SALARY","type" : "INT","size" : "10"},{"id" : "GENDER","type" : "STRING","size" : "256"},{"id" : "MARRIED","type" : "STRING","size" : "256"},{"id" : "SKILL","type" : "STRING","size" : "256"},{"id" : "HOBBY","type" : "STRING","size" : "256"},{"id" : "MEMO","type" : "STRING","size" : "256"}]},"Rows" : [{"EMP_NAME" : "Melon","EMP_ID" : "KR010","POSITION" : "10","HIRE_DATE" : "20071001","SALARY" : "9000","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "01,05","DEPT_CODE" : "10","MEMO" : "aqua"},{"EMP_NAME" : "Jackson","EMP_ID" : "US050","POSITION" : "60","HIRE_DATE" : "20091021","SALARY" : "6000","GENDER" : "M","MARRIED" : "false","SKILL" : "11,03,13","HOBBY" : "09,14","DEPT_CODE" : "20","MEMO" : "gold"},{"EMP_NAME" : "Jennie","EMP_ID" : "KR240","POSITION" : "50","HIRE_DATE" : "20110508","SALARY" : "7000","GENDER" : "F","MARRIED" : "true","SKILL" : "01,06","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "greenyellow"},{"EMP_NAME" : "Dennis ","EMP_ID" : "JP150","POSITION" : "20","HIRE_DATE" : "20091021","SALARY" : "5000","GENDER" : "M","MARRIED" : "false","SKILL" : "09,11","HOBBY" : "07,06,05","DEPT_CODE" : "30","MEMO" : "khaki"},{"EMP_NAME" : "Andrew","EMP_ID" : "US020","POSITION" : "60","HIRE_DATE" : "20160602","SALARY" : "6500","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,13","DEPT_CODE" : "60","MEMO" : "lightpink"},{"EMP_NAME" : "Jungkook","EMP_ID" : "KR200","POSITION" : "60","HIRE_DATE" : "20120304","SALARY" : "7000","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,14","DEPT_CODE" : "50","MEMO" : "orange"},{"EMP_NAME" : "Adam","EMP_ID" : "JP230","POSITION" : "50","HIRE_DATE" : "20110928","SALARY" : "8000","GENDER" : "M","MARRIED" : "true","SKILL" : "11,03,13","HOBBY" : "09,15","DEPT_CODE" : "30","MEMO" : "silver"},{"EMP_NAME" : "JiYoung","EMP_ID" : "KR080","POSITION" : "50","HIRE_DATE" : "20131120","SALARY" : "8500","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "violet"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_title","20.00","0","67","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Tab");
            obj.set_cssclass("sta_WF_GuideTitle1");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20.00","60","259","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("basic usage");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","530.00","166","221","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("form → tab > tabpage object");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","530.00","201","345","26",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("this.Tab00.tabpage_contents.form.Edit00.value");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","530.00","232","330","26",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("this.Tab00.tabpage_linked.form.Edit00.value");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","530","121","130","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_value("NEXACRO");
            obj.set_text("NEXACRO");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","530.00","95","119","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("edit id = \"Edit00\"");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_desc","530.00","263","470","60",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_positionstep("0");
            obj.set_cssclass("txt_WF_GuideDesc");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","345.00","60","132","26",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("form id = \"Comp_Tab\"");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","529.00","348","462","35",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("tab structure");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","20","121","470","440",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_tabindex("0");
            obj.set_preload("true");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tabpage_contents",this.Tab00);
            obj.set_text("contents id = \"tabpage_contents\"");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static00","10.00","0","146","35",null,null,null,null,null,null,this.Tab00.tabpage_contents.form);
            obj.set_taborder("0");
            obj.set_text("contents form");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.Tab00.tabpage_contents.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","35",null,"104","10",null,null,null,null,null,this.Tab00.tabpage_contents.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_emp");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"Name\"/><Cell col=\"1\" text=\"ID\"/><Cell col=\"2\" text=\"Hire Date\"/><Cell col=\"3\" text=\"Salary\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_NAME\"/><Cell col=\"1\" text=\"bind:EMP_ID\"/><Cell col=\"2\" text=\"bind:HIRE_DATE\"/><Cell col=\"3\" text=\"bind:SALARY\"/></Band></Format></Formats>");
            this.Tab00.tabpage_contents.addChild(obj.name, obj);

            obj = new Static("Static01","10","139","119","26",null,null,null,null,null,null,this.Tab00.tabpage_contents.form);
            obj.set_taborder("2");
            obj.set_text("edit id = \"Edit00\"");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.Tab00.tabpage_contents.addChild(obj.name, obj);

            obj = new Edit("Edit00","10","165","130","26",null,null,null,null,null,null,this.Tab00.tabpage_contents.form);
            obj.set_taborder("3");
            this.Tab00.tabpage_contents.addChild(obj.name, obj);

            obj = new Tabpage("tabpage_linked",this.Tab00);
            obj.set_text("linked  id = \"tabpage_linked\"");
            obj.set_url("EduBasic::Comp/Comp_TabSub.xfdl");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static02","20.00","95","152","26",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("tab id = \"Tab00\"");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab01","529.00","383","470","180",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab01);
            obj.set_text("Tabpage1");
            this.Tab01.addChild(obj.name, obj);

            obj = new Button("btn_tab","5.00","5","202","26",null,null,null,null,null,null,this.Tab01.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("1. tabpage color > yellow");
            this.Tab01.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_form","5.00","36","202","26",null,null,null,null,null,null,this.Tab01.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("2. tabpage.form color > pink");
            this.Tab01.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_size","5.00","67","202","26",null,null,null,null,null,null,this.Tab01.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("3. tabpage.form size");
            this.Tab01.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab01);
            obj.set_text("Tabpage2");
            this.Tab01.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Tab00.tabpage_contents.form
            obj = new Layout("default","",0,0,this.Tab00.tabpage_contents.form,function(p){});
            this.Tab00.tabpage_contents.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.tabpage_linked
            obj = new Layout("default","",0,0,this.Tab00.tabpage_linked.form,function(p){});
            this.Tab00.tabpage_linked.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab01.Tabpage1.form
            obj = new Layout("default","",0,0,this.Tab01.Tabpage1.form,function(p){});
            this.Tab01.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab01.Tabpage2
            obj = new Layout("default","",0,0,this.Tab01.Tabpage2.form,function(p){});
            this.Tab01.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1020,700,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","Tab00.tabpage_contents.form.Edit00","value","ds_emp","EMP_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","EduBasic::Comp/Comp_TabSub.xfdl");
        };
        
        // User Script
        this.registerScript("Comp_Tab.xfdl", function() {
        this.form_onload = function(obj,e)
        {
        };


        this.fn_exec = function(obj,e)
        {
        	var objTxt = this.txt_desc;
        	var strDesc;

        	switch(obj.text) {
        		case 'this.Tab00.tabpage_contents.form.Edit00.value':
        		this.Tab00.tabpage_linked
        			strDesc = `this.Tab00.tabpage_contents.form.Edit00.value:	${this.Tab00.tabpage_contents.form.Edit00.value}
					   this.Tab00.tabpage_linked.form.Edit00.value:	${this.Tab00.tabpage_linked.form.Edit00.value}`
			break;
        		case 'this.Tab00.tabpage_linked.form.Edit00.value':
        			strDesc = `this.Tab00.tabpage_contents.form.Edit00.value:	${this.Tab00.tabpage_contents.form.Edit00.value}
					   this.Tab00.tabpage_linked.form.Edit00.value:	${this.Tab00.tabpage_linked.form.Edit00.value}`
			break;
        	}

        	objTxt.value = strDesc.split('\n').map(line => line.trimStart()).join('\n');


        };



        this.Div00_btn_div_onclick = function(obj,e)
        {
        	this.Div00.background = "yellow";
        };

        this.Div00_btn_divform_onclick = function(obj,e)
        {
        	this.Div00.form.background = "pink";
        };

        this.Div00_btn_size_onclick = function(obj,e)
        {
        	this.Div00.form.width = 440;
        	this.Div00.form.height = 80;

        };

        this.fn_tabStructure = function(obj,e)
        {
        	if(obj.name == "btn_tab"){
        		this.Tab01.Tabpage1.background = "yellow";
        	}
        	else if(obj.name == "btn_form"){
        		this.Tab01.Tabpage1.form.background = "pink";
        	}
        	else if(obj.name == "btn_size"){
        		this.Tab01.Tabpage1.form.width = 440;
        		this.Tab01.Tabpage1.form.height = 120;
        	}

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.Button00.addEventHandler("onclick",this.fn_exec,this);
            this.Button01.addEventHandler("onclick",this.fn_exec,this);
            this.Tab01.Tabpage1.form.btn_tab.addEventHandler("onclick",this.fn_tabStructure,this);
            this.Tab01.Tabpage1.form.btn_form.addEventHandler("onclick",this.fn_tabStructure,this);
            this.Tab01.Tabpage1.form.btn_size.addEventHandler("onclick",this.fn_tabStructure,this);
        };
        this.loadIncludeScript("Comp_Tab.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
