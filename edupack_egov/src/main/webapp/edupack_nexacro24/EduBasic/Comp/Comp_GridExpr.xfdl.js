(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_GridExpr");
            this.set_titletext("Comp_GridExpr");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_data", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMP_NAME","type" : "STRING","size" : "50"},{"id" : "EMP_ID","type" : "STRING","size" : "10"},{"id" : "DEPT_CODE","type" : "STRING","size" : "256"},{"id" : "POSITION","type" : "STRING","size" : "10"},{"id" : "HIRE_DATE","type" : "DATE","size" : "10"},{"id" : "SALARY","type" : "INT","size" : "10"},{"id" : "GENDER","type" : "STRING","size" : "256"}]},"Rows" : [{"EMP_NAME" : "Melon","EMP_ID" : "KR010","POSITION" : "10","HIRE_DATE" : "20071001","SALARY" : "9000","GENDER" : "F","DEPT_CODE" : "10"},{"EMP_NAME" : "Jackson","EMP_ID" : "US050","POSITION" : "60","HIRE_DATE" : "20091021","SALARY" : "6000","GENDER" : "F","DEPT_CODE" : "20"},{"EMP_NAME" : "Jennie","EMP_ID" : "KR240","POSITION" : "50","HIRE_DATE" : "20110508","SALARY" : "7000","GENDER" : "M","DEPT_CODE" : "40"},{"EMP_NAME" : "Dennis ","EMP_ID" : "JP150","POSITION" : "20","HIRE_DATE" : "20091021","SALARY" : "5000","GENDER" : "F","DEPT_CODE" : "30"},{"EMP_NAME" : "Andrew","EMP_ID" : "US020","POSITION" : "60","HIRE_DATE" : "20160602","SALARY" : "6500","GENDER" : "M","DEPT_CODE" : "60"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "DEPT_CODE","type" : "STRING","size" : "255"},{"id" : "DEPT_NAME","type" : "STRING","size" : "255"},{"id" : "DEPT_EMP","type" : "STRING","size" : "255"}]},"Rows" : [{"DEPT_CODE" : "10","DEPT_NAME" : "Accounting Team","DEPT_EMP" : "Kate"},{"DEPT_CODE" : "20","DEPT_NAME" : "Finances Team","DEPT_EMP" : "Dennis"},{"DEPT_CODE" : "30","DEPT_NAME" : "Human Resource Team","DEPT_EMP" : "Adam"},{"DEPT_CODE" : "40","DEPT_NAME" : "Support Team","DEPT_EMP" : "Jackson"},{"DEPT_CODE" : "50","DEPT_NAME" : "Sales Team","DEPT_EMP" : "Belle"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pos", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "CODE","type" : "STRING","size" : "256"},{"id" : "NAME","type" : "STRING","size" : "256"}]},"Rows" : [{"CODE" : "10","NAME" : "CEO"},{"CODE" : "20","NAME" : "Director"},{"CODE" : "30","NAME" : "General Manager"},{"CODE" : "40","NAME" : "Manager"},{"CODE" : "50","NAME" : "Assistant Manager"},{"CODE" : "60","NAME" : "Staff"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_data","20.00","95","980","185",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_data");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"EMP_NAME\"/><Cell col=\"1\" text=\"EMP_ID\"/><Cell col=\"2\" text=\"DEPT_CODE\"/><Cell col=\"3\" text=\"POSITION\"/><Cell col=\"4\" text=\"HIRE_DATE\"/><Cell col=\"5\" text=\"SALARY\"/><Cell col=\"6\" text=\"GENDER\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_NAME\"/><Cell col=\"1\" text=\"bind:EMP_ID\"/><Cell col=\"2\" text=\"bind:DEPT_CODE\"/><Cell col=\"3\" text=\"bind:POSITION\"/><Cell col=\"4\" text=\"bind:HIRE_DATE\"/><Cell col=\"5\" text=\"bind:SALARY\"/><Cell col=\"6\" text=\"bind:GENDER\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","20.00","305","250","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("cell expr");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_expr","20.00","338","980","238",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_data");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"62\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"180\"/></Columns><Rows><Row size=\"42\" band=\"head\"/><Row size=\"30\"/><Row size=\"28\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"1) Property\"/><Cell col=\"1\" text=\"2) EMP_ID + EMP_NAME\"/><Cell col=\"2\" text=\"3) Javascript API&#13;&#10;(String)\"/><Cell col=\"3\" text=\"4) SALARY / 12\"/><Cell col=\"4\" text=\"5) Javascript API&#13;&#10;(Math)\"/><Cell col=\"5\" text=\"6) Nexacro API\"/><Cell col=\"6\" text=\"7) Operator\"/><Cell col=\"7\" text=\"8) Form Function Call\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\" displaytype=\"text\"/><Cell col=\"1\" text=\"expr:EMP_ID + &apos; &apos; + EMP_NAME\"/><Cell col=\"2\" text=\"expr:EMP_NAME.substr(0,3).padEnd(EMP_NAME.length, &apos;*&apos;)\"/><Cell col=\"3\" text=\"expr:SALARY / 12\" displaytype=\"number\"/><Cell col=\"4\" text=\"expr:Math.round(SALARY / 12)\" displaytype=\"number\"/><Cell col=\"5\" text=\"expr:nexacro.round(SALARY / 12, 2)\" displaytype=\"mask\" maskeditformat=\"#,##0.00\"/><Cell col=\"6\" text=\"expr:GENDER == &quot;M&quot; ? &quot;Male&quot; : &quot;Female&quot;\" cssclass=\"expr:GENDER == &quot;F&quot; ? &quot;cell_WF_ExprF&quot; : &quot;cell_WF_ExprM&quot;\"/><Cell col=\"7\" text=\"expr:comp.parent.fv_text + EMP_NAME + comp.parent.fn_position(POSITION)\"/></Band><Band id=\"summary\"><Cell text=\"9) \" textAlign=\"right\"/><Cell col=\"1\" text=\"expr:&quot;Count: &quot; + dataset.getRowCount()\"/><Cell col=\"2\" text=\"10) \" textAlign=\"right\"/><Cell col=\"3\" text=\"expr:dataset.getAvg(&quot;SALARY / 12&quot;)\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,#.00\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","20.00","0","210","60",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Grid Expression");
            obj.set_cssclass("sta_WF_GuideTitle1");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20.00","60","462","35",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("bind - ds_data");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_desc1","20.00","580","430","130",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_positionstep("0");
            obj.set_cssclass("txt_WF_GuideDesc");
            obj.set_readonly("true");
            obj.set_value(" 1) currow + 1\n 2) EMP_ID + \' \' + EMP_NAME\n 3) EMP_NAME.substr(0,3).padEnd(EMP_NAME.length, \'*\')\n 4) SALARY / 12\n 5) Math.round(SALARY / 12)");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_desc1_00","460.00","580","540","130",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_positionstep("0");
            obj.set_cssclass("txt_WF_GuideDesc");
            obj.set_readonly("true");
            obj.set_value(" 6) nexacro.round(SALARY / 12, 2)\n 7) GENDER == \"M\"; ? \"Male\" : \"Female\"\n 8) comp.parent.fv_text + EMP_NAME + comp.parent.fn_position(POSITION)\n 9) \"Count: \" + dataset.getRowCount()\n10) dataset.getAvg(\"SALARY / 12\")");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1020,720,this,function(p){});
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
        this.registerScript("Comp_GridExpr.xfdl", function() {

        this.fv_text = "Hello! ";
        this.fn_position = function(pCode)
        {
        	var sName = this.ds_pos.lookup("CODE", pCode, "NAME");
        	return " [" + sName + "]";
        }



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.grd_data.addEventHandler("onheadclick",this.grd_emp_onheadclick,this);
            this.grd_expr.addEventHandler("onheadclick",this.grd_emp_onheadclick,this);
        };
        this.loadIncludeScript("Comp_GridExpr.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
