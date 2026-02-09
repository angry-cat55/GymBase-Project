(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Popup_SearchDeptExe");
            this.set_titletext("Popup_SearchDeptExe");
            if (Form == this.constructor)
            {
                this._setFormPosition(360,440);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dept", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "DEPT_CODE","type" : "string","size" : "255"},{"id" : "DEPT_NAME","type" : "string","size" : "255"},{"id" : "DEPT_EMP","type" : "string","size" : "255"}]},"Rows" : [{"DEPT_CODE" : "10","DEPT_NAME" : "Accounting Team","DEPT_EMP" : "Kate"},{"DEPT_CODE" : "20","DEPT_NAME" : "Finances Team","DEPT_EMP" : "Dennis"},{"DEPT_CODE" : "30","DEPT_NAME" : "Human Resource Team","DEPT_EMP" : "Adam"},{"DEPT_CODE" : "40","DEPT_NAME" : "Support Team","DEPT_EMP" : "Jackson"},{"DEPT_CODE" : "50","DEPT_NAME" : "Sales Team","DEPT_EMP" : "Belle"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_dept","20","60","320","310",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_dept");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"180\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Code\"/><Cell col=\"1\" text=\"Name\"/><Cell col=\"2\" text=\"Manager\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_CODE\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:DEPT_NAME\"/><Cell col=\"2\" text=\"bind:DEPT_EMP\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("st_title","0","0",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_POP_Title");
            obj.set_text("Department List");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"5","30","30","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_POP_Close");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ok","97","392","80","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Ok");
            obj.set_cssclass("btn_WF_FillGray");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","183","392","80","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Cancel");
            obj.set_cssclass("btn_WF_FillRed");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",360,440,this,function(p){});
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
            this.addEventHandler("onload",this.Form_onload,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_ok.addEventHandler("onclick",this.fn_ok,this);
            this.btn_cancel.addEventHandler("onclick",this.fn_cancel,this);
        };
        this.loadIncludeScript("Popup_SearchDeptExe.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
