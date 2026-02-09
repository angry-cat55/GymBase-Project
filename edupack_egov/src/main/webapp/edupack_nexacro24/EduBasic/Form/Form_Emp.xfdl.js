(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Emp");
            this.set_titletext("Employees");
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
            obj = new Static("Static00","10","0","108","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Employees");
            obj.set_cssclass("sta_WF_GuideTitle1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_retrieve",null,"10","80","30","265",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Retrieve");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"10","80","30","180",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Add");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"10","80","30","95",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Delete");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"10","80","30","10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Save");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","10.00","50",null,"44","10",null,"1000",null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Search");
            obj.set_formscrollbartype("none none");
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

            obj = new Static("Static01","10","94","88","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("List");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_emp","10","134",null,null,"10","334",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_emp");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"70\"/><Column size=\"150\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Name\"/><Cell col=\"2\" text=\"Emp ID\"/><Cell col=\"3\" text=\"Department\"/><Cell col=\"4\" text=\"Position Grade\"/><Cell col=\"5\" text=\"Hire Date\"/><Cell col=\"6\" text=\"Salary\"/><Cell col=\"7\" text=\"Gender\"/><Cell col=\"8\" text=\"Married\"/><Cell col=\"9\" text=\"Skill\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:EMP_NAME\" edittype=\"normal\"/><Cell col=\"2\" text=\"bind:EMP_ID\" displaytype=\"mask\" edittype=\"mask\" maskedittype=\"string\" maskeditformat=\"AA-###\"/><Cell col=\"3\" text=\"bind:DEPT_CODE\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_dept\" combocodecol=\"DEPT_CODE\" combodatacol=\"DEPT_NAME\"/><Cell col=\"4\" text=\"bind:POSITION\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"ds_pos\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"5\" text=\"bind:HIRE_DATE\" displaytype=\"date\" edittype=\"date\"/><Cell col=\"6\" text=\"bind:SALARY\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"#,#\"/><Cell col=\"7\" text=\"expr:GENDER == &quot;M&quot; ? &quot;Male&quot; : &quot;Female&quot;\" displaytype=\"text\"/><Cell col=\"8\" text=\"bind:MARRIED\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"9\" text=\"bind:SKILL\" displaytype=\"multicombocontrol\" edittype=\"multicombo\" multicombodataset=\"ds_skill\" multicombocodecol=\"CODE\" multicombodatacol=\"NAME\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\" text=\"Avg.\"/><Cell col=\"6\" text=\"expr:nexacro.round(dataset.getAvg(&quot;SALARY&quot;), 2)\" displaytype=\"number\" maskeditformat=\"#,#.00\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","10","grd_emp:0","88","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Detail");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Div("div_detail","10","Static02:0",null,"284","10",null,"1000",null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
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

            obj = new Static("Stati10","50.09920634920635%","70","14.880952380952381%","36",null,null,null,null,null,null,this.div_detail.form);
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

            obj = new Edit("edt_name","Static00:5","5","180","26",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("15");
            obj.set_text("");
            this.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_empId","Static02:5","4","180","26",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("16");
            obj.set_type("string");
            obj.set_format("AA-###");
            this.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_salary","Stati14:5","75","180","26",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("17");
            obj.set_format("#,#");
            this.div_detail.addChild(obj.name, obj);

            obj = new Combo("cbo_dept","Static04:5","40","180","26",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("18");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPT_CODE");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_text("Combo00");
            this.div_detail.addChild(obj.name, obj);

            obj = new ListBox("lsb_pos","Static06:5","110","180","90",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("19");
            obj.set_innerdataset("ds_pos");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            this.div_detail.addChild(obj.name, obj);

            obj = new Calendar("cal_hireDate","Static08:5","40","180","26",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("20");
            this.div_detail.addChild(obj.name, obj);

            obj = new Radio("rdo_gender","Stati10:5","75","180","26",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("21");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var div_detail_form_rdo_gender_innerdataset = new nexacro.NormalDataset("div_detail_form_rdo_gender_innerdataset", obj);
            div_detail_form_rdo_gender_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "M","datacolumn" : "Male"},{"codecolumn" : "F","datacolumn" : "Female"}]});
            obj.set_innerdataset(div_detail_form_rdo_gender_innerdataset);
            this.div_detail.addChild(obj.name, obj);

            obj = new CheckBox("chk_married","rdo_gender:20","75","112","26",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("22");
            obj.set_text("Marital Status");
            this.div_detail.addChild(obj.name, obj);

            obj = new CheckBoxSet("chks_skill","Stati16:5","209",null,"70","38",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("23");
            obj.set_innerdataset("ds_skill");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_rowcount("3");
            this.div_detail.addChild(obj.name, obj);

            obj = new TextArea("txt_memo","Stati20:5","110",null,"90","129",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("24");
            this.div_detail.addChild(obj.name, obj);

            obj = new MultiCombo("mcbo_hobby","Stati18:5","210","30.907278165503488%","68",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("25");
            obj.set_innerdataset("ds_hobby");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_buttonsize("28");
            obj.set_edittype("text");
            obj.set_text("MultiCombo00");
            this.div_detail.addChild(obj.name, obj);
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
            obj = new BindItem("item11","div_detail.form.edt_name","value","ds_emp","EMP_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_detail.form.msk_empId","value","ds_emp","EMP_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_detail.form.cbo_dept","value","ds_emp","DEPT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_detail.form.lsb_pos","value","ds_emp","POSITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_detail.form.cal_hireDate","value","ds_emp","HIRE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_detail.form.msk_salary","value","ds_emp","SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_detail.form.rdo_gender","value","ds_emp","GENDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_detail.form.chk_married","value","ds_emp","MARRIED");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_detail.form.mcbo_hobby","value","ds_emp","HOBBY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_detail.form.chks_skill","value","ds_emp","SKILL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_detail.form.txt_memo","value","ds_emp","MEMO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Form_Emp.xfdl","Lib::Lib_Common.xjs");
        this.registerScript("Form_Emp.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_Common.xjs"); /*include "Lib::Lib_Common.xjs"*/;


        this.form_onload = function(obj,e)
        {
        	if(system.navigatorname == "nexacro"){
        		this.fn_getComCode();
        	}
        };

        this.fn_getComCode = function()
        {

        	this.transaction("svcSelectCode"
        	                ,"EduUrl::select_code.jsp"
        					,""
        					,"ds_dept=out_dept ds_pos=out_pos ds_skill=out_skill ds_hobby=out_hobby"
        					,""
        					,"fn_callback");
        }

        this.fn_callback = function(svcId, errCd, errMSg)
        {
        	if(errCd < 0){
        		this.alert("Error: " + errMSg);
        		return;
        	}

        	if(svcId == "svcSelectCode"){
        		trace("Success: Select Common Code");
        	}
        	else if(svcId == "svcSelectEmp"){
        		this.alert("Success: Select Employees");
        	}
        	else if(svcId == "svcSaveEmp"){
        		this.alert("Success: Save Employees");
        	}
        }

        this.btn_retrieve_onclick = function(obj,e)
        {
        	var sDeptCode = this.div_search.form.edt_deptCode.value;
        	var sEmpName  = this.div_search.form.edt_empName.value
        	this.transaction("svcSelectEmp"
        				    ,"EduUrl::select_emp.jsp"
        					,""
        					,"ds_emp=out_emp"
        					,"deptCode="+sDeptCode+" empName=" + nexacro.wrapQuote(sEmpName)
        					,"fn_callback");
        };

        this.btn_add_onclick = function(obj,e)
        {
        	var rowIdx = this.ds_emp.addRow();
        	this.ds_emp.setColumn(rowIdx, "HIRE_DATE", this.fn_today());
        };

        this.fn_today = function()
        {
        	var objDate = new Date();
        	var sToday  = objDate.getFullYear().toString();
        	    sToday += (objDate.getMonth()+1).toString().padLeft(2, "0")
        	    sToday += objDate.getDate().toString().padLeft(2, "0");

        	return sToday;
        }

        this.btn_delete_onclick = function(obj,e)
        {
        	this.ds_emp.deleteRow(this.ds_emp.rowposition);
        };

        this.btn_save_onclick = function(obj,e)
        {
        	var sForm  = this.name;
        	var sTitle = nexacro.wrapQuote(this.titletext);
        	this.transaction("svcSaveEmp"
        					,"EduUrl::save_emp.jsp"
        					,"in_emp=ds_emp:u"
        					,""
        					,"in_var1="+sForm+" in_var2="+sTitle
        					,"fn_callback");
        };

        this.fn_gender = function(arg)
        {
        	if(arg == "M"){
        		return "Male";
        	}
        	else{
        		return "Female";
        	}
        }

        this.div_search_btn_findDept_onclick = function(obj,e)
        {
        	var objChild = new ChildFrame("popupDept", 0, 0, 360, 440);
        	objChild.formurl = "EduBasic::Popup/Popup_SearchDept.xfdl";
        	objChild.openalign = "center middle";
        	objChild.dragmovetype = "all";
        	objChild.showtitlebar = false;

            objChild.showModal(this.getOwnerFrame()
                             , {}
                             , this
                             , "fn_callback_popup");
        };

        // Dept Popup Callback
        this.fn_callback_popup = function(sPopupId, sReturn)
        {
        	if(sPopupId == "popupDept"){
        		if(sReturn.length > 0){
        			var arrRtn = sReturn.split("||");
        			this.div_search.form.edt_deptCode.value = arrRtn[0];
        			this.div_search.form.edt_deptName.value = arrRtn[1];
        		}
        	}
        }

        this.div_search_rdo_gender_onitemchanged = function(obj,e)
        {
        	this.fn_setFilter(e.postvalue);
        };

        this.fn_setFilter = function(sValue)
        {
        	if(sValue == "A"){
        		this.ds_emp.filter("");
        	}
        	else{
        		this.ds_emp.filter("GENDER == '" + sValue + "'");
        	}
        }

        this.grd_emp_onheadclick = function(obj,e)
        {
        	this.lfn_gridSort(obj, e);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_retrieve.addEventHandler("onclick",this.btn_retrieve_onclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.div_search.form.btn_findDept.addEventHandler("onclick",this.div_search_btn_findDept_onclick,this);
            this.div_search.form.rdo_gender.addEventHandler("onitemchanged",this.div_search_rdo_gender_onitemchanged,this);
            this.grd_emp.addEventHandler("onheadclick",this.grd_emp_onheadclick,this);
        };
        this.loadIncludeScript("Form_Emp.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
