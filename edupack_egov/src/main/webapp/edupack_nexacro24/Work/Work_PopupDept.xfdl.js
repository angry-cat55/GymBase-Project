(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Work_PopupDept");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dept", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "DEPT_CODE","type" : "string","size" : "255"},{"id" : "DEPT_NAME","type" : "string","size" : "255"},{"id" : "DEPT_EMP","type" : "string","size" : "255"}]},"Rows" : [{"DEPT_CODE" : "10","DEPT_NAME" : "Accounting Team","DEPT_EMP" : "Kate"},{"DEPT_CODE" : "20","DEPT_NAME" : "Finances Team","DEPT_EMP" : "Dennis"},{"DEPT_CODE" : "30","DEPT_NAME" : "Human Resource Team","DEPT_EMP" : "Adam"},{"DEPT_CODE" : "40","DEPT_NAME" : "Support Team","DEPT_EMP" : "Jackson"},{"DEPT_CODE" : "50","DEPT_NAME" : "Sales Team","DEPT_EMP" : "Belle"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds00", this);
            obj._setContents({});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTitle","50","31","81","39",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("부서 검색");
            obj.set_cssclass("sta_WF_Title1");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","50","85","298","315",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_dept");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"150\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Code\"/><Cell col=\"1\" text=\"Name\"/><Cell col=\"2\" text=\"Manager\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_CODE\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:DEPT_NAME\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:DEPT_EMP\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnOk","100","420","90","37",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("OK");
            obj.set_cssclass("btn_WF_FillGray");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00",null,"420","90","37","100",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("CANCEL");
            obj.set_cssclass("btn_WF_FillRed");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",400,500,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Work_PopupDept.xfdl", function() {

        this.btn00_00_onclick = function(obj,e)
        {
        	this.close();
        };

        this.form_onload = function(obj,e)
        {
        	var sTitle = this.getOwnerFrame().pTitle // getOwnerFrame() => ChildFrame
        	var sValue = this.parent.pValue // parent => ChildFrame

        	var sDeptCode = this.ds_dept.DEPT_CODE;
        	var sDeptName = this.ds_dept.DEPT_NAME;
        	var sDeptEmp = this.ds_dept.DEPT_EMP;

        	this.staTitle.text = sTitle;

        	this.transaction("svcGetDept"
        					, "SvcUrl::edu/edupack24_jsp/select_code_dept.jsp"
        					, ""
        					, "ds_dept=out_dept"
        					, ""
        					, ""
        					);

        };

        this.btnOk_onclick = function(obj,e)
        {
        	var sDeptCode = this.ds_dept.getColumn(this.ds_dept.rowposition, "DEPT_CODE"); // 현재 선택된 행, 어떤 행
        	var sDeptName = this.ds_dept.getColumn(this.ds_dept.rowposition, "DEPT_NAME"); // 현재 선택된 행, 어떤 행

        	this.opener.fnReturn(this.ds_dept);

        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnOk.addEventHandler("onclick",this.btnOk_onclick,this);
            this.btn00_00.addEventHandler("onclick",this.btn00_00_onclick,this);
        };
        this.loadIncludeScript("Work_PopupDept.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
