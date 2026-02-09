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
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_emp", this);
            obj.set_keystring("");
            obj.set_useclientlayout("false");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMPL_ID","type" : "STRING","size" : "10"},{"id" : "FULL_NAME","type" : "STRING","size" : "50"},{"id" : "DEPT_CD","type" : "STRING","size" : "10"},{"id" : "POS_CD","type" : "STRING","size" : "10"},{"id" : "HIRE_DATE","type" : "DATE","size" : "10"},{"id" : "SALARY","type" : "INT","size" : "10"},{"id" : "GENDER","type" : "STRING","size" : "10"},{"id" : "MARRIED","type" : "STRING","size" : "10"},{"id" : "MEMO","type" : "STRING","size" : "10"}]},"Rows" : [{"EMPL_ID" : "AA001","FULL_NAME" : "Olivia","DEPT_CD" : "01","POS_CD" : "03","HIRE_DATE" : "20101003","SALARY" : "83000","GENDER" : "W","MARRIED" : "true","MEMO" : "ivory"},{"EMPL_ID" : "AA002","FULL_NAME" : "John","DEPT_CD" : "02","POS_CD" : "04","HIRE_DATE" : "20051011","SALARY" : "76000","GENDER" : "M","MARRIED" : "false","MEMO" : "greenyellow"},{"EMPL_ID" : "BB001","FULL_NAME" : "Jackson","DEPT_CD" : "03","POS_CD" : "03","HIRE_DATE" : "20070206","SALARY" : "95000","GENDER" : "M","MARRIED" : "true","MEMO" : "aliceblue"},{"EMPL_ID" : "BB002","FULL_NAME" : "Maia","DEPT_CD" : "04","POS_CD" : "02","HIRE_DATE" : "20090512","SALARY" : "60000","GENDER" : "W","MARRIED" : "false","MEMO" : "ivory"},{"EMPL_ID" : "CC001","FULL_NAME" : "Adam","DEPT_CD" : "01","POS_CD" : "04","HIRE_DATE" : "20010109","SALARY" : "88000","GENDER" : "M","MARRIED" : "true","MEMO" : "greenyellow"},{"EMPL_ID" : "DD001","FULL_NAME" : "Ray","DEPT_CD" : "02","POS_CD" : "03","HIRE_DATE" : "20160202","SALARY" : "60000","GENDER" : "M","MARRIED" : "true","MEMO" : "lightpink"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pos", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "POS_CD","type" : "string","size" : "32"},{"id" : "POS_NAME","type" : "string","size" : "32"}]},"Rows" : [{"POS_CD" : "04","POS_NAME" : "Officer"},{"POS_CD" : "03","POS_NAME" : "Assistant Manager"},{"POS_CD" : "02","POS_NAME" : "Division Manager"},{"POS_CD" : "01","POS_NAME" : "Chairman"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "DEPT_CD","type" : "STRING","size" : "32"},{"id" : "DEPT_NAME","type" : "STRING","size" : "32"}]},"Rows" : [{"DEPT_CD" : "01","DEPT_NAME" : "Accounting Team"},{"DEPT_CD" : "02","DEPT_NAME" : "HR Team"},{"DEPT_CD" : "03","DEPT_NAME" : "Sales Team"},{"DEPT_CD" : "04","DEPT_NAME" : "Design Team"},{"DEPT_CD" : "05","DEPT_NAME" : "Education Team"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("st_title","10","8","193","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("event");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_Title1");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","10","50",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.getSetter("leftbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_binddataset("ds_emp");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"120\"/><Column size=\"130\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"120\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Name\"/><Cell col=\"2\" text=\"ID\"/><Cell col=\"3\" text=\"Department\"/><Cell col=\"4\" text=\"Position\"/><Cell col=\"5\" text=\"Hire Date\"/><Cell col=\"6\" text=\"Salary\"/><Cell col=\"7\" text=\"Gender\"/><Cell col=\"8\" text=\"Married\"/><Cell col=\"9\" text=\"Memo\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\" celltype=\"head\"/><Cell col=\"1\" text=\"bind:FULL_NAME\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:EMPL_ID\" editlimit=\"\" edittype=\"mask\" maskeditformat=\"AA-###\" displaytype=\"mask\" maskedittype=\"string\"/><Cell col=\"3\" text=\"bind:DEPT_CD\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_dept\" combocodecol=\"DEPT_CD\" combodatacol=\"DEPT_NAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:POS_CD\" combodataset=\"ds_pos\" combocodecol=\"POS_CD\" combodatacol=\"POS_NAME\" displaytype=\"combocontrol\" edittype=\"combo\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:HIRE_DATE\" displaytype=\"date\" edittype=\"date\" textAlign=\"center\" calendarpopupsize=\"200 220\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"6\" text=\"bind:SALARY\" displaytype=\"number\" edittype=\"mask\" textAlign=\"right\" maskeditformat=\"#,###\"/><Cell col=\"7\" text=\"expr:comp.parent.fn_gender(GENDER)\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:MARRIED\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"9\" text=\"bind:MEMO\" edittype=\"normal\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"expr: &quot;Count: &quot; + dataset.getRowCount()\" textAlign=\"right\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\" text=\"expr:dataset.getAvg(&quot;SALARY&quot;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnAppend","580","14","129","26",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Append");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete","720","14","129","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Delete");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btnSort","860","14","129","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Sort");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,700,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Application_event.xfdl", function() {

        this.ds_emp_onrowsetchanged = function(obj,e)
        {
        	trace("ds_emp_onrowsetchanged-> reason : " + e.reason );
        // 	if(e.reason == 12) //Append
        // 	{
        // 			trace("Append");
        // 	} else if(e.reason == 20)//Delete
        // 	{
        // 		trace("Delete");
        // 	} else if(e.reason == 30) //Sort
        // 	{
        // 		trace("Sort");
        // 	}
        };

        this.ds_emp_onload = function(obj,e)
        {
        	trace("ds_emp_onload-> reason : " + e.reason );
        };

        this.btnAppend_onclick = function(obj,e)
        {
        	this.ds_emp.addRow();
        };


        this.btnDelete_onclick = function(obj,e)
        {
        	this.ds_emp.deleteRow(this.ds_emp.rowposition);
        };

        this.btnSort_onclick = function(obj,e)
        {
        	this.ds_emp.keystring = "S:+EMPL_ID";
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.grd_list.addEventHandler("onheadclick",this.grd_list_onheadclick,this);
            this.btnAppend.addEventHandler("onclick",this.btnAppend_onclick,this);
            this.btnDelete.addEventHandler("onclick",this.btnDelete_onclick,this);
            this.btnSort.addEventHandler("onclick",this.btnSort_onclick,this);
            this.ds_emp.addEventHandler("onrowsetchanged",this.ds_emp_onrowsetchanged,this);
            this.ds_emp.addEventHandler("onload",this.ds_emp_onload,this);
        };
        this.loadIncludeScript("Application_event.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
