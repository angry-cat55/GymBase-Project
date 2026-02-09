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
            
            // UI Components Initialize
            obj = new Static("staTitle","-1","0","404","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("         부서 검색");
            obj.set_background("#f0fa28");
            obj.set_font("normal bold 30pt/normal \"Arial\"");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","34","101","316","304",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_dept");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"부서 코드\"/><Cell col=\"1\" text=\"부서 이름\"/><Cell col=\"2\" text=\"부서장 이름\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_CODE\"/><Cell col=\"1\" text=\"bind:DEPT_NAME\"/><Cell col=\"2\" text=\"bind:DEPT_EMP\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnok","168","437","91","36",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("확인");
            obj.set_borderRadius("30px");
            obj.set_background("#f0fa28");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","268","437","91","36",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("취소");
            obj.set_border("1px solid crimson");
            obj.set_borderRadius("30px");
            obj.set_color("crimson");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",400,500,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Work_PopupDept.xfdl", function() {



        this.btnClose_onclick = function(obj,e)
        {
        	this.close();
        };

        this.form_onload = function(obj,e)
        {
        	var sTitle=this.getOwnerFrame().pTitle;
        	var sValue=this.getOwnerFrame().pValue;

        	var sTitle2=this.parent.pTitle;
        	var sValue2=this.parent.pValue;

        	this.staTitle.text=sTitle;
        // 	trace(sTitle+":"+sTitle2);
        // 	trace(sValue+":"+sValue2); //같다


        	this.transaction("svcGetDept"//아이디
        					 ,"SvcUrl::edu/edupack24_jsp/select_code_dept.jsp"// EduUrlLocal::selecr_emp.jsp
        					 ,""//화면 데이터-->서버 전달 저장 처리 할 때 사용
        					 ,"ds_dept=out_dept"//서버에서 전달되는 데이터를 화면에서 받을때 사용 조화사용
        				 	 ,""//서버로 전달한 변수
        					 ,"");

        };

        this.btnok_onclick = function(obj,e)
        {
        	var sDeptCode=this.ds_dept.getColumn(this.ds_dept.rowposition,"DEPT_CODE");//인자가 2개지요
        	var sDeptName=this.ds_dept.getColumn(this.ds_dept.rowposition,"DEPT_NAME");//밑에도 2개지요

        	this.opener.fnReturn(this.ds_dept);
        	this.close();//특수한 구분값을 이용해서 하나의 문자열로 보냄..? close 함수에는 string만전달가능
        	//this.close(sDeptCode+":"+sDeptName);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.staTitle.addEventHandler("onclick",this.sta00_onclick,this);
            this.btnok.addEventHandler("onclick",this.btnok_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
        };
        this.loadIncludeScript("Work_PopupDept.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
