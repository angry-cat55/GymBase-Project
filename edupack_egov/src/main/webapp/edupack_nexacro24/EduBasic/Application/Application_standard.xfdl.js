(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_standard");
            this.set_titletext("Employees");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dept", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "DEPT_CODE","type" : "STRING","size" : "32"},{"id" : "DEPT_NAME","type" : "STRING","size" : "32"}]},"Rows" : [{"DEPT_CODE" : "01","DEPT_NAME" : "Accounting Team"},{"DEPT_CODE" : "02","DEPT_NAME" : "HR Team"},{"DEPT_CODE" : "03","DEPT_NAME" : "Sales Team"},{"DEPT_CODE" : "04","DEPT_NAME" : "Design Team"},{"DEPT_CODE" : "05","DEPT_NAME" : "Education Team"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_emp", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMP_ID","type" : "STRING","size" : "10"},{"id" : "EMP_NAME","type" : "STRING","size" : "50"},{"id" : "DEPT_CODE","type" : "STRING","size" : "10"},{"id" : "POSITION","type" : "STRING","size" : "10"},{"id" : "HIRE_DATE","type" : "DATE","size" : "10"},{"id" : "SALARY","type" : "INT","size" : "10"},{"id" : "GENDER","type" : "STRING","size" : "10"},{"id" : "MARRIED","type" : "STRING","size" : "10"},{"id" : "SKILL","type" : "STRING","size" : "256"},{"id" : "HOBBY","type" : "STRING","size" : "256"},{"id" : "MEMO","type" : "STRING","size" : "10"}]},"Rows" : [{"EMP_ID" : "AA001","EMP_NAME" : "Olivia","DEPT_CODE" : "01","POSITION" : "03","HIRE_DATE" : "20101003","SALARY" : "83000","GENDER" : "W","MARRIED" : "true","MEMO" : "ivory"},{"EMP_ID" : "AA002","EMP_NAME" : "John","DEPT_CODE" : "02","POSITION" : "04","HIRE_DATE" : "20051011","SALARY" : "76000","GENDER" : "M","MARRIED" : "false","MEMO" : "greenyellow"},{"EMP_ID" : "BB001","EMP_NAME" : "Jackson","DEPT_CODE" : "03","POSITION" : "03","HIRE_DATE" : "20070206","SALARY" : "95000","GENDER" : "M","MARRIED" : "true","MEMO" : "aliceblue"},{"EMP_ID" : "BB002","EMP_NAME" : "Maia","DEPT_CODE" : "04","POSITION" : "02","HIRE_DATE" : "20090512","SALARY" : "60000","GENDER" : "W","MARRIED" : "false","MEMO" : "ivory"},{"EMP_ID" : "CC001","EMP_NAME" : "Adam","DEPT_CODE" : "01","POSITION" : "04","HIRE_DATE" : "20010109","SALARY" : "88000","GENDER" : "M","MARRIED" : "true","MEMO" : "greenyellow"},{"EMP_ID" : "DD001","EMP_NAME" : "Ray","DEPT_CODE" : "02","POSITION" : "03","HIRE_DATE" : "20160202","SALARY" : "60000","GENDER" : "M","MARRIED" : "true","MEMO" : "lightpink"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("st_title","10","8","400","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Script (Writing Events Based on Dataset)");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_Title1");
            this.addChild(obj.name, obj);

            obj = new Grid("gdEmp","336","50",null,"300","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.getSetter("leftbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_emp");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"199\"/><Column size=\"70\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/><Row size=\"32\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Name\"/><Cell col=\"2\" text=\"ID\"/><Cell col=\"3\" text=\"Department\"/><Cell col=\"4\" text=\"Married\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\" celltype=\"head\"/><Cell col=\"1\" text=\"bind:EMP_NAME\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:EMP_ID\" editlimit=\"\" edittype=\"mask\" maskeditformat=\"AA-###\" displaytype=\"mask\" maskedittype=\"string\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:DEPT_CODE\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_dept\" combocodecol=\"DEPT_CODE\" combodatacol=\"DEPT_NAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:MARRIED\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"expr: &quot;Count: &quot; + dataset.getRowCount()\" textAlign=\"right\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_detail","10","360",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.getSetter("leftbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","128","12","240","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("8");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static01","128","45","240","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("9");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static17","128","78","240","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("14");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static13","128","111","240","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("12");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static20","527","9","240","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static04","527","42","240","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("18");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static07","527","75","240","74",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("20");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.div_detail.addChild(obj.name, obj);

            obj = new Edit("edt_name","133","17","162","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("0");
            this.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_id","133","50","88","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("1");
            obj.set_type("string");
            obj.set_format("AA-###");
            this.div_detail.addChild(obj.name, obj);

            obj = new Radio("rdo_gender","133","83","139","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            var div_detail_form_rdo_gender_innerdataset = new nexacro.NormalDataset("div_detail_form_rdo_gender_innerdataset", obj);
            div_detail_form_rdo_gender_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "M","datacolumn" : "Male"},{"codecolumn" : "W","datacolumn" : "Female"}]});
            obj.set_innerdataset(div_detail_form_rdo_gender_innerdataset);
            this.div_detail.addChild(obj.name, obj);

            obj = new CheckBox("chk_married","133","116","21","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("3");
            this.div_detail.addChild(obj.name, obj);

            obj = new Calendar("cal_date","532","14","162","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_detail.addChild(obj.name, obj);

            obj = new TextArea("txt_memo","532","80","229","49",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("7");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static10","9","12","120","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("10");
            obj.set_text("Name");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static12","408","9","120","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("11");
            obj.set_text("Hire Date");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static16","9","78","120","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("13");
            obj.set_text("Gender");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static19","408","42","120","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("15");
            obj.set_text("Annual Salary");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static00","9","45","120","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("16");
            obj.set_text("Emp ID");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static03","9","111","120","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("17");
            obj.set_text("Married");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static05","408","75","120","74",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("19");
            obj.set_text("Memo");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_salary","532","47","123","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("6");
            obj.set_type("number");
            obj.set_format("#,###");
            this.div_detail.addChild(obj.name, obj);

            obj = new Grid("gdDept","10","50","317","300",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_dept");
            obj.set_autofittype("col");
            obj.set_background("aliceblue");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"111\"/><Column size=\"188\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"DEPT CODE\"/><Cell col=\"1\" text=\"DEPT_NAME\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_CODE\"/><Cell col=\"1\" text=\"bind:DEPT_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_detail.form
            obj = new Layout("default","",0,0,this.div_detail.form,function(p){});
            this.div_detail.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1000,700,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","div_detail.form.edt_name","value","ds_emp","EMP_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_detail.form.msk_id","value","ds_emp","EMP_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_detail.form.cal_date","value","ds_emp","HIRE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_detail.form.msk_salary","value","ds_emp","SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_detail.form.rdo_gender","value","ds_emp","GENDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_detail.form.chk_married","value","ds_emp","MARRIED");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_detail.form.txt_memo","value","ds_emp","MEMO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Application_standard.xfdl", function() {

        this.ds_dept_onrowposchanged = function(obj,e)
        {
        // 	this.ds_emp.filter("DEPT_CODE == '" + obj.getColumn(e.newrow,"DEPT_CODE") + "'");
        // 	this.ds_emp.rowposition = 0;

        };

        this.Form_standard_onload = function(obj,e)
        {
        	this.gdDept.setFocus();
        };

        this.gdDept_oncellclick = function(obj,e)
        {

        	var objDs     = obj.getBindDataset();
        	this.ds_emp.filter("DEPT_CODE == '" + objDs.getColumn(e.row,"DEPT_CODE") + "'");
        	this.ds_emp.rowposition = 0;

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_standard_onload,this);
            this.gdEmp.addEventHandler("onheadclick",this.grd_list_onheadclick,this);
            this.div_detail.form.Static04.addEventHandler("onclick",this.Div00_Static04_onclick,this);
            this.div_detail.form.Static07.addEventHandler("onclick",this.Div00_Static07_onclick,this);
            this.div_detail.form.Static10.addEventHandler("onclick",this.div_detail_Static10_onclick,this);
            this.div_detail.form.Static05.addEventHandler("onclick",this.Div00_Static05_onclick,this);
            this.gdDept.addEventHandler("oncellclick",this.gdDept_oncellclick,this);
            this.ds_dept.addEventHandler("onrowposchanged",this.ds_dept_onrowposchanged,this);
        };
        this.loadIncludeScript("Application_standard.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
