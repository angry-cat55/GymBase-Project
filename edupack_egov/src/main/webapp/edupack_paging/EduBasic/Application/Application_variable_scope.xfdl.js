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
                this._setFormPosition(1000,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_emp", this);
            obj.set_keystring("");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMPL_ID","type" : "STRING","size" : "10"},{"id" : "FULL_NAME","type" : "STRING","size" : "50"},{"id" : "DEPT_CD","type" : "STRING","size" : "10"},{"id" : "POS_CD","type" : "STRING","size" : "10"},{"id" : "HIRE_DATE","type" : "DATE","size" : "10"},{"id" : "SALARY","type" : "STRING","size" : "10"},{"id" : "GENDER","type" : "STRING","size" : "10"},{"id" : "MARRIED","type" : "STRING","size" : "10"},{"id" : "MEMO","type" : "STRING","size" : "10"}]},"Rows" : [{"EMPL_ID" : "AA001","FULL_NAME" : "Olivia","DEPT_CD" : "01","POS_CD" : "03","HIRE_DATE" : "20101003","SALARY" : "83000","GENDER" : "W","MARRIED" : "true","MEMO" : "ivory"},{"EMPL_ID" : "AA002","FULL_NAME" : "John","DEPT_CD" : "02","POS_CD" : "04","HIRE_DATE" : "20051011","SALARY" : "76000","GENDER" : "M","MARRIED" : "false","MEMO" : "greenyellow"},{"EMPL_ID" : "BB001","FULL_NAME" : "Jackson","DEPT_CD" : "03","POS_CD" : "03","HIRE_DATE" : "20070206","SALARY" : "5000","GENDER" : "M","MARRIED" : "true","MEMO" : "aliceblue"},{"EMPL_ID" : "BB002","FULL_NAME" : "Maia","DEPT_CD" : "04","POS_CD" : "02","HIRE_DATE" : "20090512","SALARY" : "50000","GENDER" : "W","MARRIED" : "false","MEMO" : "ivory"},{"EMPL_ID" : "CC001","FULL_NAME" : "Adam","DEPT_CD" : "01","POS_CD" : "04","HIRE_DATE" : "20010109","SALARY" : "48000","GENDER" : "M","MARRIED" : "true","MEMO" : "greenyellow"},{"EMPL_ID" : "DD001","FULL_NAME" : "Ray","DEPT_CD" : "02","POS_CD" : "03","HIRE_DATE" : "20160202","SALARY" : "60000","GENDER" : "M","MARRIED" : "true","MEMO" : "lightpink"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_org", this);
            obj.set_keystring("");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMPL_ID","type" : "STRING","size" : "10"},{"id" : "FULL_NAME","type" : "STRING","size" : "50"},{"id" : "DEPT_CD","type" : "STRING","size" : "10"},{"id" : "POS_CD","type" : "STRING","size" : "10"},{"id" : "HIRE_DATE","type" : "DATE","size" : "10"},{"id" : "SALARY","type" : "STRING","size" : "10"},{"id" : "GENDER","type" : "STRING","size" : "10"},{"id" : "MARRIED","type" : "STRING","size" : "10"},{"id" : "MEMO","type" : "STRING","size" : "10"}]},"Rows" : [{"EMPL_ID" : "AA001","FULL_NAME" : "Olivia","DEPT_CD" : "01","POS_CD" : "03","HIRE_DATE" : "20101003","SALARY" : "83000","GENDER" : "W","MARRIED" : "true","MEMO" : "ivory"},{"EMPL_ID" : "AA002","FULL_NAME" : "John","DEPT_CD" : "02","POS_CD" : "04","HIRE_DATE" : "20051011","SALARY" : "76000","GENDER" : "M","MARRIED" : "false","MEMO" : "greenyellow"},{"EMPL_ID" : "BB001","FULL_NAME" : "Jackson","DEPT_CD" : "03","POS_CD" : "03","HIRE_DATE" : "20070206","SALARY" : "5000","GENDER" : "M","MARRIED" : "true","MEMO" : "aliceblue"},{"EMPL_ID" : "BB002","FULL_NAME" : "Maia","DEPT_CD" : "04","POS_CD" : "02","HIRE_DATE" : "20090512","SALARY" : "50000","GENDER" : "W","MARRIED" : "false","MEMO" : "ivory"},{"EMPL_ID" : "CC001","FULL_NAME" : "Adam","DEPT_CD" : "01","POS_CD" : "04","HIRE_DATE" : "20010109","SALARY" : "48000","GENDER" : "M","MARRIED" : "true","MEMO" : "greenyellow"},{"EMPL_ID" : "DD001","FULL_NAME" : "Ray","DEPT_CD" : "02","POS_CD" : "03","HIRE_DATE" : "20160202","SALARY" : "60000","GENDER" : "M","MARRIED" : "true","MEMO" : "lightpink"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("st_title","10","8","193","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Variable Scope");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_Title1");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","10","60",null,"255","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.getSetter("leftbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_binddataset("ds_emp");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"EMPL_ID\"/><Cell col=\"1\" text=\"FULL_NAME\"/><Cell col=\"2\" text=\"DEPT_CD\"/><Cell col=\"3\" text=\"POS_CD\"/><Cell col=\"4\" text=\"HIRE_DATE\"/><Cell col=\"5\" text=\"SALARY\"/><Cell col=\"6\" text=\"GENDER\"/><Cell col=\"7\" text=\"MARRIED\"/><Cell col=\"8\" text=\"MEMO\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPL_ID\"/><Cell col=\"1\" text=\"bind:FULL_NAME\"/><Cell col=\"2\" text=\"bind:DEPT_CD\"/><Cell col=\"3\" text=\"bind:POS_CD\"/><Cell col=\"4\" text=\"bind:HIRE_DATE\"/><Cell col=\"5\" text=\"bind:SALARY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"6\" text=\"bind:GENDER\"/><Cell col=\"7\" text=\"bind:MARRIED\"/><Cell col=\"8\" text=\"bind:MEMO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","374","329","114","37",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("var(this)");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","497","329","114","37",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("this");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","380",null,"310","10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_emp");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"108\"/><Column size=\"148\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"strValue1\"/><Cell col=\"1\" text=\"this.strValue2\"/><Cell col=\"2\" text=\"EMPL_ID\"/><Cell col=\"3\" text=\"FULL_NAME\"/><Cell col=\"4\" text=\"DEPT_CD\"/><Cell col=\"5\" text=\"POS_CD\"/><Cell col=\"6\" text=\"HIRE_DATE\"/><Cell col=\"7\" text=\"SALARY\"/><Cell col=\"8\" text=\"GENDER\"/><Cell col=\"9\" text=\"MARRIED\"/><Cell col=\"10\" text=\"MEMO\"/></Band><Band id=\"body\"><Cell text=\"expr:comp.parent.fnVal()\"/><Cell col=\"1\" text=\"expr:comp.parent.strValue2\"/><Cell col=\"2\" text=\"bind:EMPL_ID\"/><Cell col=\"3\" text=\"bind:FULL_NAME\"/><Cell col=\"4\" text=\"bind:DEPT_CD\"/><Cell col=\"5\" text=\"bind:POS_CD\"/><Cell col=\"6\" text=\"bind:HIRE_DATE\"/><Cell col=\"7\" text=\"bind:SALARY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"8\" text=\"bind:GENDER\"/><Cell col=\"9\" text=\"bind:MARRIED\"/><Cell col=\"10\" text=\"bind:MEMO\"/></Band></Format></Formats>");
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
        this.registerScript("Application_variable_scope.xfdl", function() {
        strValue1 = "123";
        this.strValue2 = "ABC";
        this.nRowCount = 0;


        this.Form_Emp_onload = function(obj,e)
        {
        	this.ds_emp.enableevent = false;
        	for(var i=0;i<10000;i++)
        	{
        		this.ds_emp.addRow();
        		this.ds_emp.copyRow(this.ds_emp.rowposition, this.ds_org, 0);
        	}
        	this.ds_emp.enableevent = true;
        };

        this.Button00_onclick = function(obj,e)
        {
        	strValue1 = this.ds_emp.saveXML();
        };

        this.fnVal = function()
        {
        	return strValue1;
        }

        this.Button00_00_onclick = function(obj,e)
        {
        	this.strValue2 = this.ds_emp.saveXML();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Emp_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button00_00.addEventHandler("onclick",this.Button00_00_onclick,this);
        };
        this.loadIncludeScript("Application_variable_scope.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
