(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_fluidLayout");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(950,710);
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
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "CODE","type" : "STRING","size" : "256"},{"id" : "NAME","type" : "STRING","size" : "256"}]},"Rows" : [{"CODE" : "01","NAME" : "Climbing"},{"CODE" : "02","NAME" : "Running"},{"CODE" : "03","NAME" : "Cycling"},{"CODE" : "04","NAME" : "Swimming"},{"CODE" : "05","NAME" : "Yoga"},{"CODE" : "06","NAME" : "Golf"},{"CODE" : "07","NAME" : "tennis"},{"CODE" : "08","NAME" : "Reading "},{"CODE" : "09","NAME" : "Cooking"},{"CODE" : "10","NAME" : "Photography"},{"CODE" : "11","NAME" : "Painting"},{"CODE" : "12","NAME" : "Movie and Drama"},{"CODE" : "13","NAME" : "Game"},{"CODE" : "14","NAME" : "Sleeping"},{"CODE" : "15","NAME" : "Shopping"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("st_title","10.00","8","193","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Fluid Layout");
            obj.set_cssclass("sta_WF_GuideTitle1");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","10.00","40","930","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Form Layout 내 배치되는 컴포넌트의 위치를 고정하지 않고 설정된 규칙에 따라 자동으로 배치되도록 설정");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","10.00","70","930","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("동적으로 컴포넌트를 추가하는 기능을 구현하거나 화면 크기에 따라 컴포넌트 배치 방식을 자동으로 변경하고자 할 경우에 활용");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","20.00","115","290","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Type :  horizontal");
            obj.set_cssclass("sta_WF_GuideTitle2");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","26.00","151",null,"50","100",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_flexshrink("0");
            obj.set_positionstep("1");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","0","0","100","42",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Name");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_name","103","0","160","42",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_value("Hong Gil Dong");
            obj.set_text("Hong Gil Dong");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","266","0","100","42",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("Emp ID");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("msk_id","370","0","160","42",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_type("string");
            obj.set_format("AA-###");
            obj.set_value("AA001");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static12","533","0","100","42",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("Hire Date");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("cal_date","561.00","0","160","42",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static10","20.00","211","324","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Type :  horizontal & flexwrap : wrap");
            obj.set_cssclass("sta_WF_GuideTitle2");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","26.00","255",null,"50","100",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div00");
            obj.set_flexshrink("0");
            obj.set_fittocontents("height");
            obj.set_positionstep("1");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","0","0","100","42",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("Name");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_name","85.00","0","160","42",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_value("Hong Gil Dong");
            obj.set_text("Hong Gil Dong");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","229.00","0","100","42",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("Emp ID");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div01.addChild(obj.name, obj);

            obj = new MaskEdit("msk_id","321.00","0","160","42",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_type("string");
            obj.set_format("AA-###");
            obj.set_value("AA001");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static12","839.00","191","100","42",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("Hire Date");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Calendar("cal_date","561.00","0","160","42",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static11","20.00","Div01:11","788","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Type :  horizontal & flexwrap : wrap   /  Panel");
            obj.set_cssclass("sta_WF_GuideTitle2");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Div("Div03","26.00","Static11:7",null,null,"100","307",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Div00");
            obj.set_flexshrink("0");
            obj.set_fittocontents("height");
            obj.set_positionstep("1");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02","1","1","260","42",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static10\"/><PanelItem id=\"PanelItem01\" componentid=\"edt_name\"/></Contents>");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static10","0","0","100","42",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("0");
            obj.set_text("Name");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("edt_name","85.00","0","160","42",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("1");
            obj.set_value("Hong Gil Dong");
            obj.set_text("Hong Gil Dong");
            this.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel01","261","1","260","42",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("7");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/><PanelItem id=\"PanelItem01\" componentid=\"msk_id\"/></Contents>");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static00","229.00","0","100","42",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("2");
            obj.set_text("Emp ID");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("msk_id","321.00","0","160","42",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("3");
            obj.set_type("string");
            obj.set_format("AA-###");
            obj.set_value("AA001");
            this.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00","521","1","260","42",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("6");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static12\"/><PanelItem id=\"PanelItem01\" componentid=\"cal_date\"/></Contents>");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static12","839.00","191","100","42",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("4");
            obj.set_text("Hire Date");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div03.addChild(obj.name, obj);

            obj = new Calendar("cal_date","561.00","0","160","42",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("5");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("st_title00","10.00","8","193","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Fluid Layout");
            obj.set_cssclass("sta_WF_GuideTitle1");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","10.00","40","923","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Form Layout 내 배치되는 컴포넌트의 위치를 고정하지 않고 설정된 규칙에 따라 자동으로 배치되도록 설정");
            obj.set_cssclass("sta_WF_GStatus");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","10.00","70","923","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("동적으로 컴포넌트를 추가하는 기능을 구현하거나 화면 크기에 따라 컴포넌트 배치 방식을 자동으로 변경하고자 할 경우에 활용");
            obj.set_cssclass("sta_WF_GStatus");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","20.00","115","290","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Type :  Vertical");
            obj.set_cssclass("sta_WF_GuideTitle2");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Div("Div5","35","Static15:0","30.00%",null,null,"10",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Div00");
            obj.set_flexshrink("0");
            obj.set_positionstep("0");
            obj.set_flexgrow("0");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","119","78",null,null,null,null,null,null,this.Div5.form);
            obj.set_taborder("0");
            obj.set_text("Department");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div5.addChild(obj.name, obj);

            obj = new Combo("Combo00","0","50","119","78",null,null,null,null,null,null,this.Div5.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_text("Combo00");
            this.Div5.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","119","78",null,null,null,null,null,null,this.Div5.form);
            obj.set_taborder("2");
            obj.set_text("Emp ID");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div5.addChild(obj.name, obj);

            obj = new MaskEdit("msk_id","0.00","180","119","78",null,null,null,null,null,null,this.Div5.form);
            obj.set_taborder("3");
            obj.set_type("string");
            obj.set_format("AA-###");
            obj.set_value("AA001");
            this.Div5.addChild(obj.name, obj);

            obj = new Static("Static02","0","0","119","78",null,null,null,null,null,null,this.Div5.form);
            obj.set_taborder("4");
            obj.set_text("Hire Date");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div5.addChild(obj.name, obj);

            obj = new Calendar("cal_date","0.00","300","119","78",null,null,null,null,null,null,this.Div5.form);
            obj.set_taborder("5");
            this.Div5.addChild(obj.name, obj);

            obj = new Static("Static16","Static15:15","115","290","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("Vertical & flexwrap : wrap");
            obj.set_cssclass("sta_WF_GuideTitle2");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Div("Div06","Div5:20","Static16:0","30.00%",null,null,"10",null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Div00");
            obj.set_flexshrink("0");
            obj.set_positionstep("0");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","119","80",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("0");
            obj.set_text("Department");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div06.addChild(obj.name, obj);

            obj = new Combo("Combo00","0","50","119","80",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_text("Combo00");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","119","80",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("2");
            obj.set_text("Emp ID");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div06.addChild(obj.name, obj);

            obj = new MaskEdit("msk_id","0","180","119","80",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("3");
            obj.set_type("string");
            obj.set_format("AA-###");
            obj.set_value("AA001");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static02","0","0","119","80",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("4");
            obj.set_text("Hire Date");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div06.addChild(obj.name, obj);

            obj = new Calendar("cal_date","0","300","119","80",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("5");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("st_title01","10.00","8","193","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Fluid Layout");
            obj.set_cssclass("sta_WF_GuideTitle1");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","10.00","40","930","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Form Layout 내 배치되는 컴포넌트의 위치를 고정하지 않고 설정된 규칙에 따라 자동으로 배치되도록 설정");
            obj.set_cssclass("sta_WF_GStatus");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","10.00","70","930","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("동적으로 컴포넌트를 추가하는 기능을 구현하거나 화면 크기에 따라 컴포넌트 배치 방식을 자동으로 변경하고자 할 경우에 활용");
            obj.set_cssclass("sta_WF_GStatus");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","25.00","115","290","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("Type :  Table");
            obj.set_cssclass("sta_WF_GuideTitle2");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","Static16:20","115","290","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("Vertical & flexwrap : wrap / Panel");
            obj.set_cssclass("sta_WF_GuideTitle2");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Div("Div07","Div06:20","Static17:1","30.00%",null,null,"10",null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("Div00");
            obj.set_flexshrink("0");
            obj.set_positionstep("0");
            obj.set_flexgrow("0");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","1","1","120","160",null,null,null,null,null,null,this.Div07.form);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/><PanelItem id=\"PanelItem01\" componentid=\"Combo00\"/></Contents>");
            this.Div07.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","119","80",null,null,null,null,null,null,this.Div07.form);
            obj.set_taborder("0");
            obj.set_text("Department");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div07.addChild(obj.name, obj);

            obj = new Combo("Combo00","0","50","119","80",null,null,null,null,null,null,this.Div07.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_text("Combo00");
            this.Div07.addChild(obj.name, obj);

            obj = new Panel("Panel01","1","51","120","160",null,null,null,null,null,null,this.Div07.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static01\"/><PanelItem id=\"PanelItem02\" componentid=\"msk_id\"/></Contents>");
            this.Div07.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","119","80",null,null,null,null,null,null,this.Div07.form);
            obj.set_taborder("2");
            obj.set_text("Emp ID");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div07.addChild(obj.name, obj);

            obj = new Panel("Panel02","1","101","120","160",null,null,null,null,null,null,this.Div07.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static02\"/><PanelItem id=\"PanelItem02\" componentid=\"cal_date\"/></Contents>");
            this.Div07.addChild(obj.name, obj);

            obj = new Static("Static02","0","0","119","80",null,null,null,null,null,null,this.Div07.form);
            obj.set_taborder("3");
            obj.set_text("Hire Date");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div07.addChild(obj.name, obj);

            obj = new Calendar("cal_date","0","300","119","80",null,null,null,null,null,null,this.Div07.form);
            obj.set_taborder("7");
            this.Div07.addChild(obj.name, obj);

            obj = new MaskEdit("msk_id","0","180","119","80",null,null,null,null,null,null,this.Div07.form);
            obj.set_taborder("8");
            obj.set_type("string");
            obj.set_format("AA-###");
            obj.set_value("AA001");
            this.Div07.addChild(obj.name, obj);

            obj = new Div("Div09","12","162","36%",null,null,"10",null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("Div01");
            obj.set_positionstep("2");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("Button05","356","229","100%","100%",null,null,null,null,null,null,this.Div09.form);
            obj.set_taborder("0");
            obj.set_text("Button05");
            obj.set_tablecellarea("1/2");
            this.Div09.addChild(obj.name, obj);

            obj = new Button("Button08","414","370","100%","100%",null,null,null,null,null,null,this.Div09.form);
            obj.set_taborder("1");
            obj.set_text("Button08");
            obj.set_tablecellarea("2/2");
            this.Div09.addChild(obj.name, obj);

            obj = new Button("Button11","392","534","100%","100%",null,null,null,null,null,null,this.Div09.form);
            obj.set_taborder("2");
            obj.set_text("Button11");
            obj.set_tablecellarea("3/2");
            this.Div09.addChild(obj.name, obj);

            obj = new Static("Static00","2","4","100%","100%",null,null,null,null,null,null,this.Div09.form);
            obj.set_taborder("3");
            obj.set_text("Name");
            obj.set_tablecellarea("0/0");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div09.addChild(obj.name, obj);

            obj = new Edit("Edit00","204","24","100%","100%",null,null,null,null,null,null,this.Div09.form);
            obj.set_taborder("4");
            obj.set_tablecellarea("0/1");
            this.Div09.addChild(obj.name, obj);

            obj = new Static("Static01","80","76","100%","100%",null,null,null,null,null,null,this.Div09.form);
            obj.set_taborder("5");
            obj.set_text("Emp ID");
            obj.set_tablecellarea("1/0");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div09.addChild(obj.name, obj);

            obj = new Static("Static02","78","139","100%","100%",null,null,null,null,null,null,this.Div09.form);
            obj.set_taborder("6");
            obj.set_text("Department");
            obj.set_tablecellarea("2/0");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div09.addChild(obj.name, obj);

            obj = new Static("Static03","60","176","100%","100%",null,null,null,null,null,null,this.Div09.form);
            obj.set_taborder("7");
            obj.set_text("Poistion");
            obj.set_tablecellarea("3 5/0 0");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div09.addChild(obj.name, obj);

            obj = new Static("Static04","73","341","100%","100%",null,null,null,null,null,null,this.Div09.form);
            obj.set_taborder("8");
            obj.set_text("Gender");
            obj.set_tablecellarea("6/0");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div09.addChild(obj.name, obj);

            obj = new Static("Static05","128","388","100%","100%",null,null,null,null,null,null,this.Div09.form);
            obj.set_taborder("9");
            obj.set_text("Hire Date");
            obj.set_tablecellarea("7/0");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div09.addChild(obj.name, obj);

            obj = new Static("Static06","50","428","100%","100%",null,null,null,null,null,null,this.Div09.form);
            obj.set_taborder("10");
            obj.set_text("Meno");
            obj.set_tablecellarea("8 10/0 0");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div09.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","218","73","100%","100%",null,null,null,null,null,null,this.Div09.form);
            obj.set_taborder("11");
            obj.set_tablecellarea("1/1");
            obj.set_format("AA-###");
            obj.set_type("string");
            this.Div09.addChild(obj.name, obj);

            obj = new Combo("Combo00","276","130","100%","100%",null,null,null,null,null,null,this.Div09.form);
            obj.set_taborder("12");
            obj.set_tablecellarea("2/1");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPT_CODE");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_text("Combo00");
            this.Div09.addChild(obj.name, obj);

            obj = new ListBox("ListBox00","250","182","100%","100%",null,null,null,null,null,null,this.Div09.form);
            obj.set_taborder("13");
            obj.set_tablecellarea("3 5/1 1");
            obj.set_innerdataset("ds_pos");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            this.Div09.addChild(obj.name, obj);

            obj = new Radio("Radio00","256","335","100%","100%",null,null,null,null,null,null,this.Div09.form);
            obj.set_taborder("14");
            obj.set_tablecellarea("6/1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            obj.set_rowcount("0");
            var Div09_form_Radio00_innerdataset = new nexacro.NormalDataset("Div09_form_Radio00_innerdataset", obj);
            Div09_form_Radio00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "M","datacolumn" : "남자"},{"codecolumn" : "W","datacolumn" : "여자"}]});
            obj.set_innerdataset(Div09_form_Radio00_innerdataset);
            this.Div09.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","281","386","100%","100%",null,null,null,null,null,null,this.Div09.form);
            obj.set_taborder("15");
            obj.set_tablecellarea("7/1");
            this.Div09.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","276","448","100%","100%",null,null,null,null,null,null,this.Div09.form);
            obj.set_taborder("16");
            obj.set_tablecellarea("8 10/1 1");
            this.Div09.addChild(obj.name, obj);

            obj = new Div("Div10","Div09:16","164","60%","37%",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("Div00");
            obj.set_positionstep("2");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","100%","100%",null,null,null,null,null,null,this.Div10.form);
            obj.set_taborder("0");
            obj.set_text("Name");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div10.addChild(obj.name, obj);

            obj = new Edit("edt_name","5","5","100%","100%",null,null,null,null,null,null,this.Div10.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.Div10.addChild(obj.name, obj);

            obj = new Static("Static02","50.09920634920635%","0","100%","100%",null,null,null,null,null,null,this.Div10.form);
            obj.set_taborder("2");
            obj.set_text("Emp ID");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div10.addChild(obj.name, obj);

            obj = new MaskEdit("msk_empId","5","4","100%","100%",null,null,null,null,null,null,this.Div10.form);
            obj.set_taborder("3");
            obj.set_type("string");
            obj.set_format("AA-###");
            this.Div10.addChild(obj.name, obj);

            obj = new Static("Static04","0","35","100%","100%",null,null,null,null,null,null,this.Div10.form);
            obj.set_taborder("4");
            obj.set_text("Department");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div10.addChild(obj.name, obj);

            obj = new Combo("cbo_dept","5","40","100%","100%",null,null,null,null,null,null,this.Div10.form);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPT_CODE");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_text("Combo00");
            this.Div10.addChild(obj.name, obj);

            obj = new Static("Static03","70","178","100%","100%",null,null,null,null,null,null,this.Div10.form);
            obj.set_taborder("6");
            obj.set_text("Salary");
            obj.set_tablecellarea("4/0");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div10.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","208","180","100%","100%",null,null,null,null,null,null,this.Div10.form);
            obj.set_taborder("7");
            obj.set_tablecellarea("4/1");
            obj.set_format("#,#");
            this.Div10.addChild(obj.name, obj);

            obj = new Static("Static01","12","92","100%","100%",null,null,null,null,null,null,this.Div10.form);
            obj.set_taborder("8");
            obj.set_text("Position");
            obj.set_tablecellarea("2 3/0 0");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div10.addChild(obj.name, obj);

            obj = new ListBox("ListBox00","160","90","100%","100.00%",null,null,null,null,null,null,this.Div10.form);
            obj.set_taborder("9");
            obj.set_tablecellarea("2 3/1 1");
            obj.set_innerdataset("ds_pos");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            this.Div10.addChild(obj.name, obj);

            obj = new Static("Stati16","50.00%","40","100%","100%",null,null,null,null,null,null,this.Div10.form);
            obj.set_taborder("10");
            obj.set_text("Skill");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_tablecellarea("1 2/2 2");
            this.Div10.addChild(obj.name, obj);

            obj = new CheckBoxSet("chks_skill","480.00","40","100%","100%",null,null,null,null,null,null,this.Div10.form);
            obj.set_taborder("11");
            obj.set_innerdataset("ds_skill");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_rowcount("3");
            obj.set_tablecellarea("1 2/3 3");
            this.Div10.addChild(obj.name, obj);

            obj = new Static("Static08","50.09920634920635%","35","100%","100%",null,null,null,null,null,null,this.Div10.form);
            obj.set_taborder("12");
            obj.set_text("Hire Date");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div10.addChild(obj.name, obj);

            obj = new Calendar("cal_hireDate","5","40","100%","100%",null,null,null,null,null,null,this.Div10.form);
            obj.set_taborder("13");
            this.Div10.addChild(obj.name, obj);

            obj = new Static("Stati18","330","160","100%","100%",null,null,null,null,null,null,this.Div10.form);
            obj.set_taborder("14");
            obj.set_text("Hobby");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_tablecellarea("4 5/2 2");
            this.Div10.addChild(obj.name, obj);

            obj = new MultiCombo("mcbo_hobby","480.00","160","100%","100%",null,null,null,null,null,null,this.Div10.form);
            obj.set_taborder("15");
            obj.set_innerdataset("ds_hobby");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_buttonsize("28");
            obj.set_edittype("multitag");
            obj.set_tablecellarea("4 5/3 3");
            obj.set_text("MultiCombo00");
            this.Div10.addChild(obj.name, obj);

            obj = new Static("Stati10","50.09920634920635%","70","100%","100%",null,null,null,null,null,null,this.Div10.form);
            obj.set_taborder("16");
            obj.set_text("Gender ");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div10.addChild(obj.name, obj);

            obj = new Radio("rdo_gender","5","75","100%","100%",null,null,null,null,null,null,this.Div10.form);
            obj.set_taborder("17");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var Div10_form_rdo_gender_innerdataset = new nexacro.NormalDataset("Div10_form_rdo_gender_innerdataset", obj);
            Div10_form_rdo_gender_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "M","datacolumn" : "Male"},{"codecolumn" : "F","datacolumn" : "Female"}]});
            obj.set_innerdataset(Div10_form_rdo_gender_innerdataset);
            this.Div10.addChild(obj.name, obj);

            obj = new Button("Button00","816","118","124","38",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("Template");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            obj.set_type("horizontal");
            obj.set_horizontalgap("5");
            obj.set_flexwrap("nowrap");
            obj.set_flexcrossaxiswrapalign("start");
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            obj.set_type("horizontal");
            obj.set_horizontalgap("5");
            obj.set_flexwrap("wrap");
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div03.form
            obj = new Layout("default","",0,0,this.Div03.form,function(p){});
            obj.set_type("horizontal");
            obj.set_horizontalgap("5");
            obj.set_flexwrap("wrap");
            this.Div03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div5.form
            obj = new Layout("default","",0,0,this.Div5.form,function(p){});
            obj.set_type("vertical");
            obj.set_horizontalgap("0");
            obj.set_flexwrap("nowrap");
            obj.set_verticalgap("10");
            obj.set_spacing("10px 10px 10px ");
            this.Div5.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div06.form
            obj = new Layout("default","",0,0,this.Div06.form,function(p){});
            obj.set_type("vertical");
            obj.set_horizontalgap("0");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("10");
            obj.set_spacing("10px 10px 10px ");
            this.Div06.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div07.form
            obj = new Layout("default","",0,0,this.Div07.form,function(p){});
            obj.set_type("vertical");
            obj.set_horizontalgap("0");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("10");
            obj.set_spacing("10px 10px 20px 15px");
            this.Div07.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div09.form
            obj = new Layout("default","",0,0,this.Div09.form,function(p){});
            obj.set_type("table");
            obj.set_tabletemplate("9% 9% 9% 9% 9% 9% 9% 9% 9% 9% 9% / 38% 62%");
            obj.set_tabletemplatearea("\"A B\" \"A B\" \"A B\" \"A B\" \"A B\" \"A B\" \"A B\" \"A B\" \"A B\" \"A B\" \"A B\"\\");
            obj.set_flexwrap("wrap");
            this.Div09.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div10.form
            obj = new Layout("default","",0,0,this.Div10.form,function(p){});
            obj.set_type("table");
            obj.set_tabletemplatearea("\"A B C D\" \"A B C D\" \"A B C D\" \"A B C D\" \"A B C D\" \"A B C D\" ");
            obj.set_flexwrap("wrap");
            this.Div10.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",950,710,this,function(p){});
            obj.set_horizontalgap("0");
            obj.set_mobileorientation("landscape");
            obj.set_tabletemplate("1* / 1*");
            obj.set_verticalgap("0");
            obj.set_stepcount("3");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div09.form.Edit00","value","ds_emp","EMP_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div09.form.MaskEdit00","value","ds_emp","EMP_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div09.form.Combo00","value","ds_emp","DEPT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div09.form.ListBox00","value","ds_emp","POSITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div09.form.Radio00","value","ds_emp","GENDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div09.form.Calendar00","value","ds_emp","HIRE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div09.form.TextArea00","value","ds_emp","MEMO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Div10.form.edt_name","value","ds_emp","EMP_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Div10.form.cbo_dept","value","ds_emp","DEPT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","Div10.form.ListBox00","value","ds_emp","POSITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","Div10.form.MaskEdit00","value","ds_emp","SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","Div10.form.rdo_gender","value","ds_emp","GENDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","Div10.form.msk_empId","value","ds_emp","EMP_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","Div10.form.chks_skill","value","ds_emp","SKILL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","Div10.form.cal_hireDate","value","ds_emp","HIRE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","Div10.form.mcbo_hobby","value","ds_emp","HOBBY");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Exe_fluidLayout.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.Div10.form.setFluidLayoutProperty("default", "tabletemplate", "16% 16% 16% 16% 16% 16% / 20% 30% 20% 30%");
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.form.Static10.addEventHandler("onclick",this.div_detail_Static10_onclick,this);
            this.Div00.form.edt_name.addEventHandler("canchange",this.div_detail_edt_name_canchange,this);
            this.Div01.form.Static10.addEventHandler("onclick",this.div_detail_Static10_onclick,this);
            this.Div01.form.edt_name.addEventHandler("canchange",this.div_detail_edt_name_canchange,this);
            this.Div03.form.Static10.addEventHandler("onclick",this.div_detail_Static10_onclick,this);
            this.Div03.form.edt_name.addEventHandler("canchange",this.div_detail_edt_name_canchange,this);
            this.Static17.addEventHandler("onclick",this.Static09_00_00_00_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("Exe_fluidLayout.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
