(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Exe2_Chap3_Div_PopupDiv");
            this.set_titletext("Exe2_Chap3_Div_PopupDiv");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset1", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "DEPT_NAME","type" : "STRING","size" : "256"},{"id" : "EMP_NAME","type" : "STRING","size" : "256"},{"id" : "EMP_ID","type" : "STRING","size" : "256"}]},"Rows" : [{"DEPT_NAME" : "Education","EMP_NAME" : "John ","EMP_ID" : "KR101"},{"DEPT_NAME" : "Education","EMP_NAME" : "Jackson","EMP_ID" : "KR102"},{"DEPT_NAME" : "Education","EMP_NAME" : "Adam","EMP_ID" : "KR103"},{"DEPT_NAME" : "Education","EMP_NAME" : "Melon","EMP_ID" : "KR104"},{"DEPT_NAME" : "Education","EMP_NAME" : "Kate ","EMP_ID" : "KR105"},{"DEPT_NAME" : "Sales","EMP_NAME" : "Bts","EMP_ID" : "KR106"},{"DEPT_NAME" : "Sales","EMP_NAME" : "Andrew ","EMP_ID" : "KR107"},{"DEPT_NAME" : "Sales","EMP_NAME" : "Belle","EMP_ID" : "KR108"},{"DEPT_NAME" : "Sales","EMP_NAME" : "Elsa","EMP_ID" : "KR109"},{"DEPT_NAME" : "Marketing","EMP_NAME" : "Kein ","EMP_ID" : "KR110"},{"DEPT_NAME" : "Marketing","EMP_NAME" : "Ivy","EMP_ID" : "KR111"},{"DEPT_NAME" : "Marketing","EMP_NAME" : "Kara","EMP_ID" : "KR112"},{"DEPT_NAME" : "Marketing","EMP_NAME" : "Twice","EMP_ID" : "KR113"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static06","10","10","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Exercise - Div / PopupDiv");
            obj.set_cssclass("sta_WF_GuideTitle1");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","10","40","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Exe 1 - PopupDiv1");
            obj.set_cssclass("sta_WF_GuideTitle3");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv1","590","10","400","250",null,null,null,null,null,null,this);
            obj.set_text("PopupDiv00");
            obj.set_cssclass("pdiv_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","40","378","150",null,null,null,null,null,null,this.PopupDiv1.form);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset1");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"36\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\"/></Rows><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:DEPT_NAME\"/><Cell col=\"2\" text=\"bind:EMP_NAME\"/><Cell col=\"3\" text=\"bind:EMP_ID\"/></Band></Format></Formats>");
            this.PopupDiv1.addChild(obj.name, obj);

            obj = new Button("btn_Exe1_Close","10","200","100","30",null,null,null,null,null,null,this.PopupDiv1.form);
            obj.set_taborder("1");
            obj.set_text("Exe1_Close");
            this.PopupDiv1.addChild(obj.name, obj);

            obj = new Static("Static02","10","10","81","30",null,null,null,null,null,null,this.PopupDiv1.form);
            obj.set_taborder("2");
            obj.set_text("Contents");
            this.PopupDiv1.addChild(obj.name, obj);

            obj = new Button("btn_Exe1_1","10","110","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("1_1");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept","80","110","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_displaynulltext("Dept");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","210","110","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_displaynulltext("Name");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_id","320","110","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_displaynulltext("ID");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv2","590","270","400","250",null,null,null,null,null,null,this);
            obj.set_url("EduBasic::Exe/Exe_Chap3_Div_PopupDiv_Sub.xfdl");
            obj.set_text("");
            obj.set_cssclass("pdiv_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe2_1","10","230","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("2_1");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept2","80","230","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_displaynulltext("Dept");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name2","210","230","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_displaynulltext("Name");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_id2","320","230","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_displaynulltext("ID");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","170","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Exe 2 - PopupDiv2");
            obj.set_cssclass("sta_WF_GuideTitle3");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10","290","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Exe 3 - PopupDiv3");
            obj.set_cssclass("sta_WF_GuideTitle3");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_from","10","350","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_positionstep("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_popuptype("none");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_to","183","350","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_positionstep("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_popuptype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","166","350","10","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("~");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv3","15","403","430","280",null,null,null,null,null,null,this);
            obj.getSetter("positionstep").set("0");
            obj.set_border("1px solid #919396");
            obj.set_cssclass("pdiv_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_from","10","10","200","220",null,null,null,null,null,null,this.PopupDiv3.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_type("monthonly");
            obj.set_value("");
            this.PopupDiv3.addChild(obj.name, obj);

            obj = new Calendar("cal_to","220","10","200","220",null,null,null,null,null,null,this.PopupDiv3.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_type("monthonly");
            this.PopupDiv3.addChild(obj.name, obj);

            obj = new Button("btn_confirm","130","240","80","30",null,null,null,null,null,null,this.PopupDiv3.form);
            obj.set_taborder("3");
            obj.set_text("Confirm");
            obj.getSetter("uWord").set("popup.ok");
            this.PopupDiv3.addChild(obj.name, obj);

            obj = new Button("btn_cancel","220","240","80","30",null,null,null,null,null,null,this.PopupDiv3.form);
            obj.set_taborder("2");
            obj.set_text("Cancel");
            obj.getSetter("uWord").set("popup.cancel");
            this.PopupDiv3.addChild(obj.name, obj);

            obj = new Static("Static03","10","70","406","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Contents로 구성된 PopupDiv1을 버튼 하단에 오픈. ");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","10","200","407","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Linked Form으로 구성된 PopupDiv2을 버튼 하단에 오픈. ");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","10","320","408","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("PopupDiv를 이용하여 기간 달력 기능 구현. ");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.PopupDiv1.form
            obj = new Layout("default","",0,0,this.PopupDiv1.form,function(p){});
            this.PopupDiv1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.PopupDiv2
            obj = new Layout("default","",0,0,this.PopupDiv2.form,function(p){});
            this.PopupDiv2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.PopupDiv3.form
            obj = new Layout("default","",0,0,this.PopupDiv3.form,function(p){});
            this.PopupDiv3.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1000,700,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","EduBasic::Exe/Exe_Chap3_Div_PopupDiv_Sub.xfdl");
        };
        
        // User Script
        this.registerScript("Exe_Chap3_Div_PopupDiv.xfdl", function() {
        this.btn_Exe1_1_onclick = function(obj,e)
        {
         	var nX = 0;
         	var nY = 0;
        	this.PopupDiv1.trackPopupByComponent(obj, nX, nY);
        };

        this.PopupDiv1_btn_Exe1_Close_onclick = function(obj,e)
        {
            var sDept = this.Dataset1.getColumn(this.Dataset1.rowposition, "DEPT_NAME");
        	var sName = this.Dataset1.getColumn(this.Dataset1.rowposition, "EMP_NAME");
        	var sID   = this.Dataset1.getColumn(this.Dataset1.rowposition, "EMP_ID");

         	this.edt_dept.value=sDept;
         	this.edt_name.value=sName;
         	this.edt_id.value=sID;
        	this.PopupDiv1.closePopup();
        };

        this.btn_Exe2_1_onclick = function(obj,e)
        {
        	var nX = parseInt(0);
        	var nY = parseInt(obj.height);
        	this.PopupDiv2.trackPopupByComponent(obj
        	                                   , nX
        									   , nY
        									   , null
        									   , null
        									   , "fn_pDivCallback");
        };

        this.fn_pDivCallback = function(objID, rtnValue)
        {
        	if(rtnValue == ""){
        		return;
        	}
        	if(objID == "PopupDiv2"){
        		this.edt_dept2.value=rtnValue[0];
        		this.edt_name2.value=rtnValue[1];
        		this.edt_id2.value=rtnValue[2];
        	}
        };

        // Exe 3
        this.Form_onload = function(obj,e)
        {
        	var objDate = new Date();
        	var sToday = objDate.getFullYear()
        			   + ((objDate.getMonth() + 1) + "").padLeft(2, '0')
        			   + (objDate.getDate() + "").padLeft(2, '0');

            this.cal_from.value=sToday.substring(0,6) + "01";
            this.cal_to.value=sToday;
        };

        this.cal_from_ondropdown = function(obj,e)
        {

        };

        // Confirm Button
        this.PopupDiv3_btn_confirm_onclick = function(obj,e)
        {

        };

        this.PopupDiv3_btn_cancel_onclick = function(obj,e)
        {
        	this.PopupDiv3.closePopup();
        };

        this.PopupDiv3_oncloseup = function(obj,e)
        {
        	if(this.cal_from.value > this.cal_to.value){
        		this.alert("End Date Should be later than From Date");
        		this.cal_to.value="";
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.PopupDiv1.form.btn_Exe1_Close.addEventHandler("onclick",this.PopupDiv1_btn_Exe1_Close_onclick,this);
            this.btn_Exe1_1.addEventHandler("onclick",this.btn_Exe1_1_onclick,this);
            this.PopupDiv2.addEventHandler("oncloseup",this.PopupDiv2_oncloseup,this);
            this.btn_Exe2_1.addEventHandler("onclick",this.btn_Exe2_1_onclick,this);
            this.cal_from.addEventHandler("ondropdown",this.cal_from_ondropdown,this);
            this.cal_to.addEventHandler("ondropdown",this.cal_from_ondropdown,this);
            this.PopupDiv3.addEventHandler("oncloseup",this.PopupDiv3_oncloseup,this);
            this.PopupDiv3.form.btn_confirm.addEventHandler("onclick",this.PopupDiv3_btn_confirm_onclick,this);
            this.PopupDiv3.form.btn_cancel.addEventHandler("onclick",this.PopupDiv3_btn_cancel_onclick,this);
        };
        this.loadIncludeScript("Exe_Chap3_Div_PopupDiv.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
