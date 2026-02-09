(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_EmpDetail");
            this.set_titletext("Employees");
            if (Form == this.constructor)
            {
                this._setFormPosition(620,580);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_emp", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMP_NAME","type" : "STRING","size" : "50"},{"id" : "EMP_ID","type" : "STRING","size" : "10"},{"id" : "DEPT_CODE","type" : "STRING","size" : "256"},{"id" : "POSITION","type" : "STRING","size" : "10"},{"id" : "HIRE_DATE","type" : "DATE","size" : "10"},{"id" : "SALARY","type" : "INT","size" : "10"},{"id" : "GENDER","type" : "STRING","size" : "256"},{"id" : "MARRIED","type" : "STRING","size" : "256"},{"id" : "SKILL","type" : "STRING","size" : "256"},{"id" : "HOBBY","type" : "STRING","size" : "256"},{"id" : "MEMO","type" : "STRING","size" : "256"}]},"Rows" : [{"EMP_NAME" : "Melon","EMP_ID" : "KR010","POSITION" : "10","HIRE_DATE" : "20071001","SALARY" : "9000","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "01,05","DEPT_CODE" : "10","MEMO" : "aqua"},{"EMP_NAME" : "Jackson","EMP_ID" : "US050","POSITION" : "60","HIRE_DATE" : "20091021","SALARY" : "6000","GENDER" : "M","MARRIED" : "false","SKILL" : "11,03,13","HOBBY" : "09,14","DEPT_CODE" : "20","MEMO" : "gold"},{"EMP_NAME" : "Jennie","EMP_ID" : "KR240","POSITION" : "50","HIRE_DATE" : "20110508","SALARY" : "7000","GENDER" : "F","MARRIED" : "true","SKILL" : "01,06","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "greenyellow"},{"EMP_NAME" : "Dennis ","EMP_ID" : "JP150","POSITION" : "20","HIRE_DATE" : "20091021","SALARY" : "5000","GENDER" : "M","MARRIED" : "false","SKILL" : "09,11","HOBBY" : "07,06,05","DEPT_CODE" : "30","MEMO" : "khaki"},{"EMP_NAME" : "Andrew","EMP_ID" : "US020","POSITION" : "60","HIRE_DATE" : "20160602","SALARY" : "6500","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,13","DEPT_CODE" : "60","MEMO" : "lightpink"},{"EMP_NAME" : "Jungkook","EMP_ID" : "KR200","POSITION" : "60","HIRE_DATE" : "20120304","SALARY" : "7000","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,14","DEPT_CODE" : "50","MEMO" : "orange"},{"EMP_NAME" : "Adam","EMP_ID" : "JP230","POSITION" : "50","HIRE_DATE" : "20110928","SALARY" : "8000","GENDER" : "M","MARRIED" : "true","SKILL" : "11,03,13","HOBBY" : "09,15","DEPT_CODE" : "30","MEMO" : "silver"},{"EMP_NAME" : "JiYoung","EMP_ID" : "KR080","POSITION" : "50","HIRE_DATE" : "20131120","SALARY" : "8500","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "violet"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "DEPT_CODE","type" : "string","size" : "255"},{"id" : "DEPT_NAME","type" : "string","size" : "255"},{"id" : "DEPT_EMP","type" : "string","size" : "255"}]},"Rows" : [{"DEPT_CODE" : "10","DEPT_NAME" : "Accounting Team","DEPT_EMP" : "Kate"},{"DEPT_CODE" : "20","DEPT_NAME" : "Finances Team","DEPT_EMP" : "Dennis"},{"DEPT_CODE" : "30","DEPT_NAME" : "Human Resource Team","DEPT_EMP" : "Adam"},{"DEPT_CODE" : "40","DEPT_NAME" : "Support Team","DEPT_EMP" : "Jackson"},{"DEPT_CODE" : "50","DEPT_NAME" : "Sales Team","DEPT_EMP" : "Belle"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pos", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "CODE","type" : "STRING","size" : "256"},{"id" : "NAME","type" : "STRING","size" : "256"}]},"Rows" : [{"CODE" : "10","NAME" : "CEO"},{"CODE" : "20","NAME" : "Director"},{"CODE" : "30","NAME" : "General Manager"},{"CODE" : "40","NAME" : "Manager"},{"CODE" : "50","NAME" : "Assistant Manager"},{"CODE" : "60","NAME" : "Staff"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_skill", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "CODE","type" : "string","size" : "255"},{"id" : "NAME","type" : "string","size" : "255"}]},"Rows" : [{"CODE" : "01","NAME" : "HTML"},{"CODE" : "02","NAME" : "CSS"},{"CODE" : "03","NAME" : "JavaScript"},{"CODE" : "04","NAME" : "JAVA"},{"CODE" : "05","NAME" : "C/C++"},{"CODE" : "06","NAME" : "Python"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_hobby", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "CODE","type" : "STRING","size" : "256"},{"id" : "NAME","type" : "STRING","size" : "256"},{"id" : "NAME_KR","type" : "STRING","size" : "256"}]},"Rows" : [{"CODE" : "01","NAME" : "Climbing","NAME_KR" : "등산"},{"CODE" : "02","NAME" : "Running","NAME_KR" : "러닝"},{"CODE" : "03","NAME" : "Cycling","NAME_KR" : "자전거"},{"CODE" : "04","NAME" : "Swimming","NAME_KR" : "수영"},{"CODE" : "05","NAME" : "Yoga","NAME_KR" : "요가"},{"CODE" : "06","NAME" : "Golf","NAME_KR" : "골프"},{"CODE" : "07","NAME" : "tennis","NAME_KR" : "테니스"},{"CODE" : "08","NAME" : "Reading ","NAME_KR" : "독서"},{"CODE" : "09","NAME" : "Cooking","NAME_KR" : "요리"},{"CODE" : "10","NAME" : "Photography","NAME_KR" : "사진"},{"CODE" : "11","NAME" : "Painting","NAME_KR" : "그리기"},{"CODE" : "12","NAME" : "Movie and Drama","NAME_KR" : "영화&드라마"},{"CODE" : "13","NAME" : "Game","NAME_KR" : "게임"},{"CODE" : "14","NAME" : "Sleeping","NAME_KR" : "잠자기"},{"CODE" : "15","NAME" : "Shopping","NAME_KR" : "쇼핑"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","30.00","80","281","36",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","310.00","80","281","36",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","310.00","115","281","36",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","30.00","115","281","36",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","30.00","150","281","106",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","310.00","150","281","36",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","310.00","185","281","36",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","310.00","220","281","36",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","30.00","300","562","56",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","30.00","355","562","56",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","30.00","410","562","106",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","20.00","50","168","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Detail Information");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","30.00","80","100","36",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Emp ID");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_empId","135.00","85","90","26",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_type("string");
            obj.set_format("AA-###");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","310.00","80","100","36",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Name");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","415.00","85","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","30.00","115","100","36",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Department");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_dept","135.00","120","160","26",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPT_CODE");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","310.00","115","100","36",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Hire Date");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_hireDate","415.00","120","160","26",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","30.00","150","100","106",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Position");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new ListBox("lsb_pos","135.00","155","160","96",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_innerdataset("ds_pos");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","310.00","150","100","36",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Salary");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_salary","415.00","155","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_format("#,#");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","310.00","185","100","36",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("Marital Status");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_married","415.00","190","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","310.00","220","100","36",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("Gender");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_gender","415.00","225","160","26",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var rdo_gender_innerdataset = new nexacro.NormalDataset("rdo_gender_innerdataset", obj);
            rdo_gender_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "M","datacolumn" : "Male"},{"codecolumn" : "F","datacolumn" : "Female"}]});
            obj.set_innerdataset(rdo_gender_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Static("Static21","20.00","270","178","30",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("Additional Information");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","30.00","300","100","56",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("Skill");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new CheckBoxSet("chks_skill00","135.00","305","440","46",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_innerdataset("ds_skill");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_rowcount("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","30.00","355","100","56",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("Hobby");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new MultiCombo("mcbo_hobby","135.00","360","440","46",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_innerdataset("ds_hobby");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_buttonsize("28");
            obj.set_edittype("text");
            obj.set_text("MultiCombo00");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","30.00","410","100","106",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("Memo");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_memo00","135.00","415","440","96",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","514",null,"80","32",null,"19",null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("Close");
            obj.set_cssclass("btn_WF_FillRed");
            this.addChild(obj.name, obj);

            obj = new Static("st_title","0","0",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_cssclass("sta_POP_Title");
            obj.set_text("Detail");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close00",null,"5","30","30","10",null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_cssclass("btn_POP_Close");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",620,580,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_name","value","ds_emp","EMP_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","msk_empId","value","ds_emp","EMP_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cbo_dept","value","ds_emp","DEPT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","lsb_pos","value","ds_emp","POSITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","cal_hireDate","value","ds_emp","HIRE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","msk_salary","value","ds_emp","SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","rdo_gender","value","ds_emp","GENDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","chk_married","value","ds_emp","MARRIED");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","chks_skill00","value","ds_emp","SKILL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","mcbo_hobby","value","ds_emp","HOBBY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","txt_memo00","value","ds_emp","MEMO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_EmpDetail.xfdl", function() {

        this.fv_empId;

        this.form_onload = function(obj,e)
        {
        	this.fv_empId = this.parent.sEmpId;
        	if(system.navigatorname == "nexacro"){
        		//this.fn_getComCode();
        		this.fn_getEmpInfo(this.fv_empId);
        	}
        };

        this.fn_getComCode = function()
        {

        	this.transaction("svcSelectCode"
        	                ,"http://demo.nexacro.com/edu/nexacroN24/select_code.jsp"
        					,""
        					,"ds_dept=out_dept ds_pos=out_pos ds_skill=out_skill ds_hobby=out_hobby"
        					,""
        					,"fn_callback");
        }

        this.fn_callback = function(svcId, errCd, errMSg)
        {
        	if(errCd < 0){
        		this.alert("Error: " + errMSg);
        		return;
        	}

        	if(svcId == "svcSelectCode"){
        		trace("Success: Select Common Code");
        		this.fn_getEmpInfo(this.fv_empId);
        	}
        	else if(svcId == "svcSelectEmp"){
        //		this.alert("Success: Select Employees");
        	}
        }

        this.fn_getEmpInfo = function(pEmpId)
        {
        	this.transaction("svcSelectEmp"
        				    ,"EduUrl::select_emp.jsp"
        					,""
        					,"ds_emp=out_emp"
        					,"empId=" + pEmpId
        					,"fn_callback");
        };

        this.fn_today = function()
        {
        	var objDate = new Date();
        	var sToday  = objDate.getFullYear().toString();
        	    sToday += (objDate.getMonth()+1).toString().padLeft(2, "0")
        	    sToday += objDate.getDate().toString().padLeft(2, "0");

        	return sToday;
        }



        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_close00.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("Form_EmpDetail.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
