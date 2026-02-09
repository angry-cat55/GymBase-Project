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
            obj = new Dataset("ds_emp", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMPL_ID","type" : "STRING","size" : "10"},{"id" : "FULL_NAME","type" : "STRING","size" : "50"},{"id" : "DEPT_CD","type" : "STRING","size" : "10"},{"id" : "POS_CD","type" : "STRING","size" : "10"},{"id" : "HIRE_DATE","type" : "DATE","size" : "10"},{"id" : "SALARY","type" : "INT","size" : "10"},{"id" : "GENDER","type" : "STRING","size" : "10"},{"id" : "MARRIED","type" : "STRING","size" : "10"},{"id" : "MEMO","type" : "STRING","size" : "10"}]},"Rows" : [{"EMPL_ID" : "AA001","FULL_NAME" : "Olivia","DEPT_CD" : "01","POS_CD" : "03","HIRE_DATE" : "20101003","SALARY" : "83000","GENDER" : "W","MARRIED" : "true","MEMO" : "ivory"},{"EMPL_ID" : "AA002","FULL_NAME" : "John","DEPT_CD" : "02","POS_CD" : "04","HIRE_DATE" : "20051011","SALARY" : "76000","GENDER" : "M","MARRIED" : "false","MEMO" : "greenyellow"},{"EMPL_ID" : "BB001","FULL_NAME" : "Jackson","DEPT_CD" : "03","POS_CD" : "03","HIRE_DATE" : "20070206","SALARY" : "95000","GENDER" : "M","MARRIED" : "true","MEMO" : "aliceblue"},{"EMPL_ID" : "BB002","FULL_NAME" : "Maia","DEPT_CD" : "04","POS_CD" : "02","HIRE_DATE" : "20090512","SALARY" : "60000","GENDER" : "W","MARRIED" : "false","MEMO" : "ivory"},{"EMPL_ID" : "CC001","FULL_NAME" : "Adam","DEPT_CD" : "01","POS_CD" : "04","HIRE_DATE" : "20010109","SALARY" : "88000","GENDER" : "M","MARRIED" : "true","MEMO" : "greenyellow"},{"EMPL_ID" : "DD001","FULL_NAME" : "Ray","DEPT_CD" : "02","POS_CD" : "03","HIRE_DATE" : "20160202","SALARY" : "60000","GENDER" : "M","MARRIED" : "true","MEMO" : "lightpink"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "DEPT_CD","type" : "STRING","size" : "32"},{"id" : "DEPT_NAME","type" : "STRING","size" : "32"}]},"Rows" : [{"DEPT_CD" : "01","DEPT_NAME" : "Accounting Team"},{"DEPT_CD" : "02","DEPT_NAME" : "HR Team"},{"DEPT_CD" : "03","DEPT_NAME" : "Sales Team"},{"DEPT_CD" : "04","DEPT_NAME" : "Design Team"},{"DEPT_CD" : "05","DEPT_NAME" : "Education Team"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("st_title","10","8","400","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("List");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_Title1");
            this.addChild(obj.name, obj);

            obj = new Grid("gdEmp","10.00","50",null,"500","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.getSetter("leftbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_emp");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"199\"/><Column size=\"70\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/><Row size=\"32\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Name\"/><Cell col=\"2\" text=\"ID\"/><Cell col=\"3\" text=\"Department\"/><Cell col=\"4\" text=\"Married\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\" celltype=\"head\"/><Cell col=\"1\" text=\"bind:FULL_NAME\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:EMPL_ID\" editlimit=\"\" edittype=\"mask\" maskeditformat=\"AA-###\" displaytype=\"mask\" maskedittype=\"string\"/><Cell col=\"3\" text=\"bind:DEPT_CD\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_dept\" combocodecol=\"DEPT_CD\" combodatacol=\"DEPT_NAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:MARRIED\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"expr: &quot;Count: &quot; + dataset.getRowCount()\" textAlign=\"right\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","10","566","143","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("go()");
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
        this.registerScript("Application_data_list.xfdl", function() {

        this.gdEmp_oncelldblclick = function(obj,e)
        {
        	this.fnChangePage("div");
        };

        this.fnChangePage = function(pParam)
        {
        	/*
        	주의 반드시 넘기고자 하는 ds를 this.removeChild하여 넘겨야 한다.
            폼에 있는 Dataset(ds_emp)을 바로 넘기면 Owner인 폼이 닫히기 때문에 함께 소멸되므로 값 전달이 안된다.
        	*/
        	var objDs = this.removeChild("ds_emp");

        	/*
        	또는 새로운 Dataset을 생성하여 Data를 복사한 후 사용가능
        	var objDs = new Dataset;
        	objDs.assign(this.ds_emp); // 또는 objDs.copyData(this.ds_emp);
        	*/

        	var objParam = {pEmpId : 1,
                            pDsObj : objDs
                            }
        	var objParentFrame = this.getOwnerFrame();

        	objParentFrame.objParam = objParam;
        	if(pParam == "go")
        	{
        		this.go("EduBasic::Application/Application_data_detail.xfdl");
        	} else {
        		this.parent.parent.divBody.url = "EduBasic::Application/Application_data_detail.xfdl";
        	}
        }

        this.Button00_onclick = function(obj,e)
        {
        	this.fnChangePage("go");
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_standard_onload,this);
            this.gdEmp.addEventHandler("oncelldblclick",this.gdEmp_oncelldblclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.ds_emp.addEventHandler("onrowsetchanged",this.ds_emp_onrowsetchanged,this);
            this.ds_dept.addEventHandler("onrowposchanged",this.ds_dept_onrowposchanged,this);
        };
        this.loadIncludeScript("Application_data_list.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
