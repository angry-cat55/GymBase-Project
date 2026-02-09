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
            obj = new Dataset("ds_emp1", this);
            obj.set_keystring("");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMPL_ID","type" : "STRING","size" : "10"},{"id" : "FULL_NAME","type" : "STRING","size" : "50"},{"id" : "DEPT_CD","type" : "STRING","size" : "10"},{"id" : "POS_CD","type" : "STRING","size" : "10"},{"id" : "HIRE_DATE","type" : "DATE","size" : "10"},{"id" : "SALARY","type" : "STRING","size" : "10"},{"id" : "GENDER","type" : "STRING","size" : "10"},{"id" : "MARRIED","type" : "STRING","size" : "10"},{"id" : "MEMO","type" : "STRING","size" : "10"}]},"Rows" : [{"EMPL_ID" : "AA001","FULL_NAME" : "Olivia","DEPT_CD" : "01","POS_CD" : "03","HIRE_DATE" : "20101003","SALARY" : "83000","GENDER" : "W","MARRIED" : "true","MEMO" : "ivory"},{"EMPL_ID" : "AA002","FULL_NAME" : "John","DEPT_CD" : "02","POS_CD" : "04","HIRE_DATE" : "20051011","SALARY" : "76000","GENDER" : "M","MARRIED" : "false","MEMO" : "greenyellow"},{"EMPL_ID" : "BB001","FULL_NAME" : "Jackson","DEPT_CD" : "03","POS_CD" : "03","HIRE_DATE" : "20070206","SALARY" : "5000","GENDER" : "M","MARRIED" : "true","MEMO" : "aliceblue"},{"EMPL_ID" : "BB002","FULL_NAME" : "Maia","DEPT_CD" : "04","POS_CD" : "02","HIRE_DATE" : "20090512","SALARY" : "50000","GENDER" : "W","MARRIED" : "false","MEMO" : "ivory"},{"EMPL_ID" : "CC001","FULL_NAME" : "Adam","DEPT_CD" : "01","POS_CD" : "04","HIRE_DATE" : "20010109","SALARY" : "48000","GENDER" : "M","MARRIED" : "true","MEMO" : "greenyellow"},{"EMPL_ID" : "DD001","FULL_NAME" : "Ray","DEPT_CD" : "02","POS_CD" : "03","HIRE_DATE" : "20160202","SALARY" : "60000","GENDER" : "M","MARRIED" : "true","MEMO" : "lightpink"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_emp2", this);
            obj.set_keystring("");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMPL_ID","type" : "STRING","size" : "10"},{"id" : "FULL_NAME","type" : "STRING","size" : "50"},{"id" : "DEPT_CD","type" : "STRING","size" : "10"},{"id" : "POS_CD","type" : "STRING","size" : "10"},{"id" : "HIRE_DATE","type" : "DATE","size" : "10"},{"id" : "SALARY","type" : "INT","size" : "10"},{"id" : "GENDER","type" : "STRING","size" : "10"},{"id" : "MARRIED","type" : "STRING","size" : "10"},{"id" : "MEMO","type" : "STRING","size" : "10"}]},"Rows" : [{"EMPL_ID" : "AA001","FULL_NAME" : "Olivia","DEPT_CD" : "01","POS_CD" : "03","HIRE_DATE" : "20101003","SALARY" : "83000","GENDER" : "W","MARRIED" : "true","MEMO" : "ivory"},{"EMPL_ID" : "AA002","FULL_NAME" : "John","DEPT_CD" : "02","POS_CD" : "04","HIRE_DATE" : "20051011","SALARY" : "76000","GENDER" : "M","MARRIED" : "false","MEMO" : "greenyellow"},{"EMPL_ID" : "BB001","FULL_NAME" : "Jackson","DEPT_CD" : "03","POS_CD" : "03","HIRE_DATE" : "20070206","SALARY" : "5000","GENDER" : "M","MARRIED" : "true","MEMO" : "aliceblue"},{"EMPL_ID" : "BB002","FULL_NAME" : "Maia","DEPT_CD" : "04","POS_CD" : "02","HIRE_DATE" : "20090512","SALARY" : "50000","GENDER" : "W","MARRIED" : "false","MEMO" : "ivory"},{"EMPL_ID" : "CC001","FULL_NAME" : "Adam","DEPT_CD" : "01","POS_CD" : "04","HIRE_DATE" : "20010109","SALARY" : "48000","GENDER" : "M","MARRIED" : "true","MEMO" : "greenyellow"},{"EMPL_ID" : "DD001","FULL_NAME" : "Ray","DEPT_CD" : "02","POS_CD" : "03","HIRE_DATE" : "20160202","SALARY" : "60000","GENDER" : "M","MARRIED" : "true","MEMO" : "lightpink"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("st_title","10","8","270","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Sort");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_Title1");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","10","60","370","227",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.getSetter("leftbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_binddataset("ds_emp1");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"117\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Name\"/><Cell col=\"2\" text=\"ID\"/><Cell col=\"3\" text=\"Salary(String)\" background=\"royalblue\" color=\"white\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\" celltype=\"head\"/><Cell col=\"1\" text=\"bind:FULL_NAME\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:EMPL_ID\" editlimit=\"\" edittype=\"mask\" maskeditformat=\"AA-###\" displaytype=\"mask\" maskedittype=\"string\"/><Cell col=\"3\" text=\"bind:SALARY\" displaytype=\"number\" edittype=\"mask\" textAlign=\"right\" maskeditformat=\"#,###\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list00","400","60","380","227",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.getSetter("leftbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_binddataset("ds_emp2");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"113\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Name\"/><Cell col=\"2\" text=\"ID\"/><Cell col=\"3\" text=\"Salary(Int)\" background=\"royalblue\" color=\"white\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\" celltype=\"head\"/><Cell col=\"1\" text=\"bind:FULL_NAME\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:EMPL_ID\" editlimit=\"\" edittype=\"mask\" maskeditformat=\"AA-###\" displaytype=\"mask\" maskedittype=\"string\"/><Cell col=\"3\" text=\"bind:SALARY\" displaytype=\"number\" edittype=\"mask\" textAlign=\"right\" maskeditformat=\"#,###\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","280","298","100","37",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("+Ascending");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","400","298","100","37",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("-Descending");
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
        this.registerScript("Application_dataset_sort.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.ds_emp1.keystring = "S:+SALARY";
        	this.ds_emp2.keystring = "S:+SALARY";
        };

        this.Button00_00_onclick = function(obj,e)
        {
        	this.ds_emp1.keystring = "S:-SALARY";
        	this.ds_emp2.keystring = "S:-SALARY";
        };

        this.Form_onload = function(obj,e)
        {
        	trace("Application_dataset_sort");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button00_00.addEventHandler("onclick",this.Button00_00_onclick,this);
        };
        this.loadIncludeScript("Application_dataset_sort.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
