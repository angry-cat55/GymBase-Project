(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Obj_ExcelExportImport");
            this.set_titletext("Obj_ExcelExportImport");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_emp", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMP_NAME","type" : "STRING","size" : "50"},{"id" : "EMP_ID","type" : "STRING","size" : "10"},{"id" : "DEPT_CODE","type" : "STRING","size" : "256"},{"id" : "POSITION","type" : "STRING","size" : "10"},{"id" : "HIRE_DATE","type" : "DATE","size" : "10"},{"id" : "SALARY","type" : "INT","size" : "10"},{"id" : "GENDER","type" : "STRING","size" : "256"},{"id" : "MARRIED","type" : "STRING","size" : "256"},{"id" : "SKILL","type" : "STRING","size" : "256"},{"id" : "HOBBY","type" : "STRING","size" : "256"},{"id" : "MEMO","type" : "STRING","size" : "256"}]},"Rows" : [{"EMP_NAME" : "Melon","EMP_ID" : "KR010","POSITION" : "10","HIRE_DATE" : "20071001","SALARY" : "9000","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "01,05","DEPT_CODE" : "10","MEMO" : "aqua"},{"EMP_NAME" : "Jackson","EMP_ID" : "US050","POSITION" : "60","HIRE_DATE" : "20091021","SALARY" : "6000","GENDER" : "M","MARRIED" : "false","SKILL" : "11,03,13","HOBBY" : "09,14","DEPT_CODE" : "20","MEMO" : "gold"},{"EMP_NAME" : "Jennie","EMP_ID" : "KR240","POSITION" : "50","HIRE_DATE" : "20110508","SALARY" : "7000","GENDER" : "F","MARRIED" : "true","SKILL" : "01,06","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "greenyellow"},{"EMP_NAME" : "Dennis ","EMP_ID" : "JP150","POSITION" : "20","HIRE_DATE" : "20091021","SALARY" : "5000","GENDER" : "M","MARRIED" : "false","SKILL" : "09,11","HOBBY" : "07,06,05","DEPT_CODE" : "30","MEMO" : "khaki"},{"EMP_NAME" : "Andrew","EMP_ID" : "US020","POSITION" : "60","HIRE_DATE" : "20160602","SALARY" : "6500","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,13","DEPT_CODE" : "60","MEMO" : "lightpink"},{"EMP_NAME" : "Jungkook","EMP_ID" : "KR200","POSITION" : "60","HIRE_DATE" : "20120304","SALARY" : "7000","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,14","DEPT_CODE" : "50","MEMO" : "orange"},{"EMP_NAME" : "Adam","EMP_ID" : "JP230","POSITION" : "50","HIRE_DATE" : "20110928","SALARY" : "8000","GENDER" : "M","MARRIED" : "true","SKILL" : "11,03,13","HOBBY" : "09,15","DEPT_CODE" : "30","MEMO" : "silver"},{"EMP_NAME" : "JiYoung","EMP_ID" : "KR080","POSITION" : "50","HIRE_DATE" : "20131120","SALARY" : "8500","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "violet"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "DEPT_CODE","type" : "STRING","size" : "255"},{"id" : "DEPT_NAME","type" : "STRING","size" : "255"},{"id" : "DEPT_EMP","type" : "STRING","size" : "255"}]},"Rows" : [{"DEPT_CODE" : "10","DEPT_NAME" : "Accounting Team","DEPT_EMP" : "Kate"},{"DEPT_CODE" : "20","DEPT_NAME" : "Finances Team","DEPT_EMP" : "Dennis"},{"DEPT_CODE" : "30","DEPT_NAME" : "Human Resource Team","DEPT_EMP" : "Adam"},{"DEPT_CODE" : "40","DEPT_NAME" : "Support Team","DEPT_EMP" : "Jackson"},{"DEPT_CODE" : "50","DEPT_NAME" : "Sales Team","DEPT_EMP" : "Belle"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_skill", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "CODE","type" : "string","size" : "255"},{"id" : "NAME","type" : "string","size" : "255"}]},"Rows" : [{"CODE" : "01","NAME" : "HTML"},{"CODE" : "02","NAME" : "CSS"},{"CODE" : "03","NAME" : "JavaScript"},{"CODE" : "04","NAME" : "JAVA"},{"CODE" : "05","NAME" : "C/C++"},{"CODE" : "06","NAME" : "Python"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pos", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "CODE","type" : "STRING","size" : "256"},{"id" : "NAME","type" : "STRING","size" : "256"}]},"Rows" : [{"CODE" : "10","NAME" : "CEO"},{"CODE" : "20","NAME" : "Director"},{"CODE" : "30","NAME" : "General Manager"},{"CODE" : "40","NAME" : "Manager"},{"CODE" : "50","NAME" : "Assistant Manager"},{"CODE" : "60","NAME" : "Staff"}]});
            this.addChild(obj.name, obj);


            obj = new ExcelExportObject("ExcelExportObject00", this);
            this.addChild(obj.name, obj);


            obj = new ExcelImportObject("ExcelImportObject00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("st_title","20","0","171","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Excel Export/Import");
            obj.set_cssclass("sta_WF_GuideTitle1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_import","920","60","80","26",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Import");
            obj.set_cssclass("btn_WF_LineRed");
            this.addChild(obj.name, obj);

            obj = new Button("btn_export","835","60","80","26",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Export");
            obj.set_cssclass("btn_WF_LineBlue");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","20","60","670","26",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("-1");
            obj.set_columncount("-1");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"datacolumn" : "Excel 97~2003","codecolumn" : "EXCEL97"},{"datacolumn" : "Excel  2007","codecolumn" : "EXCEL2007"},{"datacolumn" : "Hancell  2010","codecolumn" : "HANCELL2010"},{"datacolumn" : "Hancell 2014","codecolumn" : "HANCELL2014"},{"codecolumn" : "CSV","datacolumn" : "CSV"}]});
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_text("Excel 97~2003");
            obj.set_value("EXCEL97");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_emp","20","Radio00:5","980","320",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_emp");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"100\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"30\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"ID\"/><Cell col=\"2\" text=\"Name\"/><Cell col=\"3\" text=\"Department\"/><Cell col=\"4\" text=\"Position\"/><Cell col=\"5\" text=\"Hire Date\"/><Cell col=\"6\" text=\"Salary\"/><Cell col=\"7\" text=\"Gender\"/><Cell col=\"8\" text=\"Marital&#13;&#10;Status\"/><Cell col=\"9\" text=\"Hobby\"/><Cell col=\"10\" text=\"Memo\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:EMP_ID\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"AA-###\" maskedittype=\"string\"/><Cell col=\"2\" text=\"bind:EMP_NAME\" displaytype=\"normal\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:DEPT_CODE\" combodataset=\"ds_dept\" combocodecol=\"DEPT_CODE\" combodatacol=\"DEPT_NAME\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"4\" text=\"bind:POSITION\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"ds_pos\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"5\" text=\"bind:HIRE_DATE\" displaytype=\"date\" edittype=\"date\"/><Cell col=\"6\" text=\"bind:SALARY\" displaytype=\"number\" edittype=\"mask\" maskeditformat=\"#,###\"/><Cell col=\"7\" text=\"expr:GENDER == &quot;M&quot; ? &quot;Male&quot; : &quot;Female&quot;\"/><Cell col=\"8\" text=\"bind:MARRIED\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"9\" text=\"bind:HOBBY\"/><Cell col=\"10\" text=\"bind:MEMO\" displaytype=\"normal\" edittype=\"textarea\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" text=\"expr:comp.parent.ds_emp.rowcount\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\" text=\"expr:dataset.getSum(&quot;SALARY&quot;)\" displaytype=\"number\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_dept","20","415","485","255",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_dept");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"97\"/><Column size=\"147\"/><Column size=\"147\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"Code\"/><Cell col=\"1\" text=\"Name\"/><Cell col=\"2\" text=\"Manager\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_CODE\"/><Cell col=\"1\" text=\"bind:DEPT_NAME\"/><Cell col=\"2\" text=\"bind:DEPT_EMP\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_skill","510","415","490","255",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_skill");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"215\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"Code\"/><Cell col=\"1\" text=\"Skill\"/></Band><Band id=\"body\"><Cell text=\"bind:CODE\"/><Cell col=\"1\" text=\"bind:NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1020,700,this,function(p){});
            obj.set_horizontalgap("0");
            obj.set_mobileorientation("landscape");
            obj.set_spacing("0px");
            obj.set_tabletemplate("1* / 1*");
            obj.set_verticalgap("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Obj_ExcelExportImport.xfdl", function() {

        this.btn_export_onclick = function(obj,e)
        {
        	if(system.navigatorname != "nexacro"){
        		alert("It can be run in the NRE(Nexacro Runtime Environment)");
        		return;
        	}

        	if(this.Radio00.value == "EXCEL97"){
        		this.ExcelExportObject00.exporttype = nexacro.ExportTypes.EXCEL97;
        	}
        	else if(this.Radio00.value == "EXCEL2007"){
        		this.ExcelExportObject00.exporttype = nexacro.ExportTypes.EXCEL2007;
        	}
        	else if(this.Radio00.value == "HANCELL2010"){
        		this.ExcelExportObject00.exporttype = nexacro.ExportTypes.HANCELL2010;
        	}
        	else if(this.Radio00.value == "HANCELL2014"){
        		this.ExcelExportObject00.exporttype = nexacro.ExportTypes.HANCELL2014;
        	}
        	else if(this.Radio00.value == "CSV"){
        		this.ExcelExportObject00.exporttype = nexacro.ExportTypes.CSV;
        	}

        	this.ExcelExportObject00.exportfilename = "Nexacro_Excel_Export";
        	this.ExcelExportObject00.exportactivemode = "active";
        	this.ExcelExportObject00.exporteventtype = "itemrecord";
        	this.ExcelExportObject00.exportuitype = "exportprogress";
        	this.ExcelExportObject00.exportmessageprocess = "%d [ %d / %d ]";
        //	this.ExcelExportObject00.commdataformat = "xml";



        //    this.ExcelExportObject00.exporturl = "http://localhost:8090/nexacro-xeni-java/XExportImport";
            this.ExcelExportObject00.exporturl = "http://demo.nexacro.com/nexacroN24-xeni/XExportImport";

            this.ExcelExportObject00.addExportItem(nexacro.ExportItemTypes.GRID, this.grd_emp, "Sheet1!A1", "nosumm");
            this.ExcelExportObject00.addExportItem(nexacro.ExportItemTypes.GRID, this.grd_dept, "Sheet2!A1");
            this.ExcelExportObject00.addExportItem(nexacro.ExportItemTypes.GRID, this.grd_skill, "Sheet2!A8");

            this.ExcelExportObject00.exportData();
        };

        this.btn_import_onclick = function(obj,e)
        {
        	if(system.navigatorname != "nexacro"){
        		alert("It can be run in the NRE(Nexacro Runtime Environment)");
        		return;
        	}

        //	this.ExcelImportObject00.importurl = "http://localhost:8090/nexacro-xeni-java/XExportImport";
        	this.ExcelImportObject00.importurl = "https://edu.tobesoft.com/nexacroN-xeni/XExportImport";


        	this.ExcelImportObject00.importtype = nexacro.ImportTypes.EXCEL97;

        	var strRange  = "";
        	strRange += "[Command='getsheetdata'; Output=out_emp; Head=Sheet1!B1:G1; Body=Sheet1!B2:G5]";
        	strRange += "[Head=Sheet2!A1:B1; Body=Sheet2!A2:B6]";
        	strRange += "[Head=Sheet2!A8:B8;Body=Sheet2!A9:B12]";

        	var strDataset = "ds_emp=out_emp ds_dept=output1 ds_skill=output2";
        	this.ExcelImportObject00.importData("",strRange, strDataset);
        };

        this.ExcelImportObject00_onsuccess = function(obj,e)
        {
        	trace(e.importid + " : " + e.url);
        	trace(this.ds_emp.saveXML());
        	trace(this.ds_dept.saveXML());
        	trace(this.ds_skill.saveXML());

        	this.grd_emp.createFormat();
        	this.grd_dept.createFormat();
        	this.grd_skill.createFormat();

        };

        this.ExcelImportObject00_onerror = function(obj,e)
        {
        	trace(e.errormsg);
        };

        this.ExcelExportObject00_onprogress = function(obj,e)
        {
        //	trace(e.itemindex + " : " + e.recordindex + " : " + e.itemtype)
        };


        this.ExcelExportObject00_onerror = function(obj,e)
        {
        	trace(e.errortype + " : " + e.errormsg);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_import.addEventHandler("onclick",this.btn_import_onclick,this);
            this.btn_export.addEventHandler("onclick",this.btn_export_onclick,this);
            this.Radio00.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
            this.grd_emp.addEventHandler("onheadclick",this.grd_emp_onheadclick,this);
            this.ExcelExportObject00.addEventHandler("onprogress",this.ExcelExportObject00_onprogress,this);
            this.ExcelExportObject00.addEventHandler("onerror",this.ExcelExportObject00_onerror,this);
            this.ExcelExportObject00.addEventHandler("onsuccess",this.ExcelExportObject00_onsuccess,this);
            this.ExcelImportObject00.addEventHandler("onsuccess",this.ExcelImportObject00_onsuccess,this);
            this.ExcelImportObject00.addEventHandler("onerror",this.ExcelImportObject00_onerror,this);
        };
        this.loadIncludeScript("Obj_ExcelExportImport.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
