(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Sample_MultiLangPopup");
            this.set_titletext("Sample_MultiLangPopup");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"150\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"TEXT(&quot;dept.code&quot;,&quot;부서코드&quot;)\"/><Cell col=\"1\" text=\"TEXT(&quot;dept.name&quot;,&quot;부서명&quot;)\"/><Cell col=\"2\" text=\"TEXT(&quot;manager&quot;,&quot;관리자&quot;)\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_CODE\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:DEPT_NAME\"/><Cell col=\"2\" text=\"bind:DEPT_EMP\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ok","97","392","80","32",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("TEXT(\"action.ok\",\"확인\")");
            obj.set_cssclass("btn_WF_FillRed");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","183","392","80","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("TEXT(\"action.cancel\",\"취소\")");
            obj.set_cssclass("btn_WF_FillGray");
            this.addChild(obj.name, obj);

            obj = new Static("st_title","0","0",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_POP_Title");
            obj.set_text("TEXT(\"dept.list\",\"부서 목록\")");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"5","30","30","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_POP_Close");
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
        this.registerScript("Sample_MultiLangPopup.xfdl", function() {

        this.Form_onload = function(obj,e)
        {
        	if(system.navigatorname == "nexacro"){
        		this.transaction("svcSelectDept"
        						,"EduUrl::select_code_dept.jsp"
        						,""
        						,"ds_dept=out_dept"
        						,""
        						,"fn_callback");
        	}
        };


        this.fn_callback = function(svcId, errCd, errMsg)
        {
        	if(errCd < 0){
        		this.alert("Error: " + errMsg);
        	}
        }

        this.fn_ok = function()
        {
        	var sRtn  =  this.ds_dept.getColumn(this.ds_dept.rowposition, "DEPT_CODE") + "||";
        	    sRtn += this.ds_dept.getColumn(this.ds_dept.rowposition, "DEPT_NAME");
        	this.close(sRtn);
        }

        this.fn_cancel = function(obj,e)
        {
        	this.close();
        };
        this.btn_close_onclick = function(obj,e)
        {
        	this.fn_cancel();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.btn_ok.addEventHandler("onclick",this.fn_ok,this);
            this.btn_cancel.addEventHandler("onclick",this.fn_cancel,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("Sample_MultiLangPopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
