(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_EmpExe");
            this.set_titletext("Form_EmpExe");
            if (Form == this.constructor)
            {
                this._setFormPosition(1023,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_emp", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMP_NAME","type" : "STRING","size" : "50"},{"id" : "EMP_ID","type" : "STRING","size" : "10"},{"id" : "DEPT_CODE","type" : "STRING","size" : "256"},{"id" : "POSITION","type" : "STRING","size" : "10"},{"id" : "HIRE_DATE","type" : "DATE","size" : "10"},{"id" : "SALARY","type" : "INT","size" : "10"},{"id" : "GENDER","type" : "STRING","size" : "256"},{"id" : "MARRIED","type" : "STRING","size" : "256"},{"id" : "SKILL","type" : "STRING","size" : "256"},{"id" : "HOBBY","type" : "STRING","size" : "256"},{"id" : "MEMO","type" : "STRING","size" : "256"}]},"Rows" : [{"EMP_NAME" : "Melon","EMP_ID" : "KR010","POSITION" : "10","HIRE_DATE" : "20071001","SALARY" : "9000","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "01,05","DEPT_CODE" : "10","MEMO" : "aqua"},{"EMP_NAME" : "Jackson","EMP_ID" : "US050","POSITION" : "60","HIRE_DATE" : "20091021","SALARY" : "6000","GENDER" : "M","MARRIED" : "false","SKILL" : "11,03,13","HOBBY" : "09,14","DEPT_CODE" : "20","MEMO" : "gold"},{"EMP_NAME" : "Jennie","EMP_ID" : "KR240","POSITION" : "50","HIRE_DATE" : "20110508","SALARY" : "7000","GENDER" : "F","MARRIED" : "true","SKILL" : "01,06","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "greenyellow"},{"EMP_NAME" : "Dennis ","EMP_ID" : "JP150","POSITION" : "20","HIRE_DATE" : "20091021","SALARY" : "5000","GENDER" : "M","MARRIED" : "false","SKILL" : "09,11","HOBBY" : "07,06,05","DEPT_CODE" : "30","MEMO" : "khaki"},{"EMP_NAME" : "Andrew","EMP_ID" : "US020","POSITION" : "60","HIRE_DATE" : "20160602","SALARY" : "6500","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,13","DEPT_CODE" : "40","MEMO" : "lightpink"},{"EMP_NAME" : "Jungkook","EMP_ID" : "KR200","POSITION" : "60","HIRE_DATE" : "20120304","SALARY" : "7000","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,14","DEPT_CODE" : "50","MEMO" : "orange"},{"EMP_NAME" : "Adam","EMP_ID" : "JP230","POSITION" : "50","HIRE_DATE" : "20110928","SALARY" : "8000","GENDER" : "M","MARRIED" : "true","SKILL" : "11,03,13","HOBBY" : "09,15","DEPT_CODE" : "30","MEMO" : "silver"},{"EMP_NAME" : "JiYoung","EMP_ID" : "KR080","POSITION" : "50","HIRE_DATE" : "20131120","SALARY" : "8500","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "violet"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "DEPT_CODE","type" : "string","size" : "255"},{"id" : "DEPT_NAME","type" : "string","size" : "255"},{"id" : "DEPT_EMP","type" : "string","size" : "255"}]},"Rows" : [{"DEPT_CODE" : "10","DEPT_NAME" : "Accounting Team","DEPT_EMP" : "Kate"},{"DEPT_CODE" : "20","DEPT_NAME" : "Finances Team","DEPT_EMP" : "Dennis"},{"DEPT_CODE" : "30","DEPT_NAME" : "Human Resource Team","DEPT_EMP" : "Adam"},{"DEPT_CODE" : "40","DEPT_NAME" : "Support Team","DEPT_EMP" : "Jackson"},{"DEPT_CODE" : "50","DEPT_NAME" : "Sales Team","DEPT_EMP" : "Belle"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pos", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "CODE","type" : "STRING","size" : "256"},{"id" : "NAME","type" : "STRING","size" : "256"}]},"Rows" : [{"CODE" : "10","NAME" : "CEO"},{"CODE" : "20","NAME" : "Director"},{"CODE" : "30","NAME" : "General Manager"},{"CODE" : "40","NAME" : "Manager"},{"CODE" : "50","NAME" : "Assistant Manager"},{"CODE" : "60","NAME" : "Staff"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_skill", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "CODE","type" : "string","size" : "255"},{"id" : "NAME","type" : "string","size" : "255"}]},"Rows" : [{"CODE" : "01","NAME" : "HTML"},{"CODE" : "02","NAME" : "CSS"},{"CODE" : "03","NAME" : "JavaScript"},{"CODE" : "04","NAME" : "JAVA"},{"CODE" : "05","NAME" : "C/C++"},{"CODE" : "06","NAME" : "Python"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_hobby", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "CODE","type" : "STRING","size" : "256"},{"id" : "NAME","type" : "STRING","size" : "256"}]},"Rows" : [{"CODE" : "01","NAME" : "Climbing"},{"CODE" : "02","NAME" : "Running"},{"CODE" : "03","NAME" : "Cycling"},{"CODE" : "04","NAME" : "Swimming"},{"CODE" : "05","NAME" : "Yoga"},{"CODE" : "06","NAME" : "Golf"},{"CODE" : "07","NAME" : "tennis"},{"CODE" : "08","NAME" : "Reading "},{"CODE" : "09","NAME" : "Cooking"},{"CODE" : "10","NAME" : "Photography"},{"CODE" : "11","NAME" : "Painting"},{"CODE" : "12","NAME" : "Movie and Drama"},{"CODE" : "13","NAME" : "Game"},{"CODE" : "14","NAME" : "Sleeping"},{"CODE" : "15","NAME" : "Shopping"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_retrieve",null,"10","80","30","265",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Retrieve");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"10","80","30","180",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Add");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"10","80","30","95",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Delete");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"10","80","30","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Save");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","10","50",null,"44","10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Search");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","9","129","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("Department");
            obj.set_cssclass("sta_WF_SchLabel");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_deptCode","129.00","9","90","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_findDept","189.00","8","28","28",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_Find");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_deptName","217.00","9","170","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","603.00","9","98","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("Gender");
            obj.set_cssclass("sta_WF_SchLabel");
            this.div_search.addChild(obj.name, obj);

            obj = new Radio("rdo_gender","701.00","9","220","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("-1");
            obj.set_columncount("-1");
            var div_search_form_rdo_gender_innerdataset = new nexacro.NormalDataset("div_search_form_rdo_gender_innerdataset", obj);
            div_search_form_rdo_gender_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "A","datacolumn" : "All"},{"codecolumn" : "M","datacolumn" : "Male"},{"codecolumn" : "F","datacolumn" : "Female"}]});
            obj.set_innerdataset(div_search_form_rdo_gender_innerdataset);
            obj.set_text("All");
            obj.set_value("A");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static01","387","9","86","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("Name");
            obj.set_cssclass("sta_WF_SchLabel");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_empName","473","9","130","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            this.div_search.addChild(obj.name, obj);

            obj = new Grid("grd_emp","10","134",null,null,"10","334",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_detail","10",null,null,"284","10","10",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","0","105",null,"100","0",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Stati11","0","70",null,"36","0",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("9");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static05","0.00","35",null,"36","0",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,"36","0",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_DetailArea");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","14.880952380952381%","36",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("0");
            obj.set_text("Name");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static02","50.09920634920635%","0","14.880952380952381%","36",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("2");
            obj.set_text("Emp ID");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static04","0.00","35","14.880952380952381%","36",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("3");
            obj.set_text("Department");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static06","0","105","14.880952380952381%","100",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("5");
            obj.set_text("Position");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static08","50.09920634920635%","35","14.880952380952381%","36",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("6");
            obj.set_text("Hire Date");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Stati10","53.44%","57","14.86%","36",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("8");
            obj.set_text("Gender / Marial Status");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Stati14","0.00","70","14.880952380952381%","36",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("10");
            obj.set_text("Salary");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Stati17","0.00","204",null,"79","0",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("12");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Stati16","50.09920634920635%","204","14.880952380952381%","80",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("11");
            obj.set_text("Skill");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Stati18","0","204","14.880952380952381%","80",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("13");
            obj.set_text("Hobby");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Stati20","50.09920634920635%","105","14.880952380952381%","100",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("14");
            obj.set_text("Memo");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Edit("edt_name","154","5","180","26",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("15");
            obj.set_text("");
            this.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_empId","656","4","180","26",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("16");
            obj.set_type("string");
            obj.set_format("AA-###");
            this.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_salary","154","75","180","26",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("17");
            obj.set_format("#,#");
            this.div_detail.addChild(obj.name, obj);

            obj = new ListBox("lsb_pos","154","110","180","90",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("18");
            obj.set_innerdataset("ds_pos");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            this.div_detail.addChild(obj.name, obj);

            obj = new CheckBox("chk_married","856","75","112","26",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("19");
            obj.set_text("Marital Status");
            this.div_detail.addChild(obj.name, obj);

            obj = new TextArea("txt_memo","656","110",null,"90","129",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("20");
            this.div_detail.addChild(obj.name, obj);

            obj = new MultiCombo("mcbo_hobby","154","210","310","68",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("21");
            obj.set_innerdataset("ds_hobby");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_buttonsize("28");
            obj.set_edittype("text");
            obj.set_text("MultiCombo00");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static00","10","0","88","50",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Employees");
            obj.set_cssclass("sta_WF_GuideTitle1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10","94","88","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("List");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","10","366","88","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Detail");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_search.form
            obj = new Layout("default","",0,0,this.div_search.form,function(p){});
            this.div_search.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_detail.form
            obj = new Layout("default","",0,0,this.div_detail.form,function(p){});
            this.div_detail.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1023,700,this,function(p){});
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
            this.addEventHandler("onload",this.form_onload,this);
            this.div_search.form.rdo_gender.addEventHandler("onitemchanged",this.div_search_rdo_gender_onitemchanged,this);
            this.grd_emp.addEventHandler("onheadclick",this.grd_emp_onheadclick,this);
        };
        this.loadIncludeScript("Form_EmpExe.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
