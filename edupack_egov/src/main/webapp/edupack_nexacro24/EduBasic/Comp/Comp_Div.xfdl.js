(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_Div");
            this.set_titletext("Comp_Div");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_emp", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMP_NAME","type" : "STRING","size" : "50"},{"id" : "EMP_ID","type" : "STRING","size" : "10"},{"id" : "DEPT_CODE","type" : "STRING","size" : "256"},{"id" : "POSITION","type" : "STRING","size" : "10"},{"id" : "HIRE_DATE","type" : "DATE","size" : "10"},{"id" : "SALARY","type" : "INT","size" : "10"},{"id" : "GENDER","type" : "STRING","size" : "256"},{"id" : "MARRIED","type" : "STRING","size" : "256"},{"id" : "SKILL","type" : "STRING","size" : "256"},{"id" : "HOBBY","type" : "STRING","size" : "256"},{"id" : "MEMO","type" : "STRING","size" : "256"}]},"Rows" : [{"EMP_NAME" : "Melon","EMP_ID" : "KR010","POSITION" : "10","HIRE_DATE" : "20071001","SALARY" : "9000","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "01,05","DEPT_CODE" : "10","MEMO" : "aqua"},{"EMP_NAME" : "Jackson","EMP_ID" : "US050","POSITION" : "60","HIRE_DATE" : "20091021","SALARY" : "6000","GENDER" : "M","MARRIED" : "false","SKILL" : "11,03,13","HOBBY" : "09,14","DEPT_CODE" : "20","MEMO" : "gold"},{"EMP_NAME" : "Jennie","EMP_ID" : "KR240","POSITION" : "50","HIRE_DATE" : "20110508","SALARY" : "7000","GENDER" : "F","MARRIED" : "true","SKILL" : "01,06","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "greenyellow"},{"EMP_NAME" : "Dennis ","EMP_ID" : "JP150","POSITION" : "20","HIRE_DATE" : "20091021","SALARY" : "5000","GENDER" : "M","MARRIED" : "false","SKILL" : "09,11","HOBBY" : "07,06,05","DEPT_CODE" : "30","MEMO" : "khaki"},{"EMP_NAME" : "Andrew","EMP_ID" : "US020","POSITION" : "60","HIRE_DATE" : "20160602","SALARY" : "6500","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,13","DEPT_CODE" : "60","MEMO" : "lightpink"},{"EMP_NAME" : "Jungkook","EMP_ID" : "KR200","POSITION" : "60","HIRE_DATE" : "20120304","SALARY" : "7000","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,14","DEPT_CODE" : "50","MEMO" : "orange"},{"EMP_NAME" : "Adam","EMP_ID" : "JP230","POSITION" : "50","HIRE_DATE" : "20110928","SALARY" : "8000","GENDER" : "M","MARRIED" : "true","SKILL" : "11,03,13","HOBBY" : "09,15","DEPT_CODE" : "30","MEMO" : "silver"},{"EMP_NAME" : "JiYoung","EMP_ID" : "KR080","POSITION" : "50","HIRE_DATE" : "20131120","SALARY" : "8500","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "violet"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_title","20.00","0","57","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div");
            obj.set_cssclass("sta_WF_GuideTitle1");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20.00","60","259","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("basic usage - contents");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Div("div_contents","20","121","470","210",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10.00","0","226","35",null,null,null,null,null,null,this.div_contents.form);
            obj.set_taborder("0");
            obj.set_text("contents form");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.div_contents.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","35",null,"104","10",null,null,null,null,null,this.div_contents.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_emp");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"Name\"/><Cell col=\"1\" text=\"ID\"/><Cell col=\"2\" text=\"Hire Date\"/><Cell col=\"3\" text=\"Salary\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_NAME\"/><Cell col=\"1\" text=\"bind:EMP_ID\"/><Cell col=\"2\" text=\"bind:HIRE_DATE\"/><Cell col=\"3\" text=\"bind:SALARY\"/></Band></Format></Formats>");
            this.div_contents.addChild(obj.name, obj);

            obj = new Edit("Edit00","10","165","130","26",null,null,null,null,null,null,this.div_contents.form);
            obj.set_taborder("2");
            this.div_contents.addChild(obj.name, obj);

            obj = new Static("Static03","10","139","119","26",null,null,null,null,null,null,this.div_contents.form);
            obj.set_taborder("3");
            obj.set_text("edit id = \"Edit00\"");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.div_contents.addChild(obj.name, obj);

            obj = new Div("div_linked","530.00","121","470","390",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Div01");
            obj.set_cssclass("div_WF_Area");
            obj.set_url("EduBasic::Comp/Comp_DivSub.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20.00","447","178","35",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("form → div object");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","20.00","482","273","26",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("this.div_contents.form.Edit00.value");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","20.00","513","273","26",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("this.div_linked.form.Edit00.value");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","530.00","60","462","35",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("basic usage2 - linked");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","20","95","152","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div id = \"div_contents\"");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","530.00","95","139","26",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("div id = \"div_linked\"");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","20","377","130","26",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_value("NEXACRO");
            obj.set_text("NEXACRO");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","351","119","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("edit id = \"Edit00\"");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_desc","20.00","544","470","60",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_positionstep("0");
            obj.set_cssclass("txt_WF_GuideDesc");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","345.00","70","132","26",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("form id = \"Comp_Div\"");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","528.00","535","462","35",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("div structure");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","530","571","470","110",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("btn_div","5","5","142","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("1. div color > yellow");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_divform","152.00","5","160","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("2. div.form color > pink");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_size","317.00","5","112","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("3. div.form size");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_contents.form
            obj = new Layout("default","",0,0,this.div_contents.form,function(p){});
            this.div_contents.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_linked
            obj = new Layout("default","",0,0,this.div_linked.form,function(p){});
            this.div_linked.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1020,700,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","div_contents.form.Edit00","value","ds_emp","EMP_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","EduBasic::Comp/Comp_DivSub.xfdl");
        };
        
        // User Script
        this.registerScript("Comp_Div.xfdl", function() {
        this.form_onload = function(obj,e)
        {
        };


        this.fn_exec = function(obj,e)
        {
        	var objTxt = this.txt_desc;
        	var strDesc;

        	switch(obj.text) {
        		case 'this.div_contents.form.Edit00.value':
        			strDesc = `this.div_contents.form.Edit00.value:	${this.div_contents.form.Edit00.value}
					   this.div_linked.form.Edit00.value:	${this.div_linked.form.Edit00.value}`
			break;
        		case 'this.div_linked.form.Edit00.value':
        			strDesc = `this.div_contents.form.Edit00.value:	${this.div_contents.form.Edit00.value}
					   this.div_linked.form.Edit00.value:	${this.div_linked.form.Edit00.value}`
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.Button00.addEventHandler("onclick",this.fn_exec,this);
            this.Button01.addEventHandler("onclick",this.fn_exec,this);
            this.Div00.form.btn_div.addEventHandler("onclick",this.Div00_btn_div_onclick,this);
            this.Div00.form.btn_divform.addEventHandler("onclick",this.Div00_btn_divform_onclick,this);
            this.Div00.form.btn_size.addEventHandler("onclick",this.Div00_btn_size_onclick,this);
        };
        this.loadIncludeScript("Comp_Div.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
