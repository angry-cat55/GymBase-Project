(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Layout_Table");
            this.set_titletext("Layout_Table");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,700);
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
            obj = new Static("Static03","20","0","101","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Type - Table");
            obj.set_cssclass("sta_WF_GuideTitle1");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","20","96","7.75%","26",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("start/ start");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","Static04:313.67%","96","7.94%","26",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("start/ end");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Div("Div04","20","Static04:0","27.75%","34.00%",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("Div02");
            obj.set_positionstep("1");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0","0","50%","60%",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_tablecellarea("0/0");
            obj.set_cssclass("btn_WF_Status");
            this.Div04.addChild(obj.name, obj);

            obj = new Button("Button01","138","0","50%","60%",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_tablecellarea("0/1");
            obj.set_cssclass("btn_WF_Status");
            this.Div04.addChild(obj.name, obj);

            obj = new Button("Button02","0","116","50%","60%",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_tablecellarea("1/0");
            obj.set_cssclass("btn_WF_Status");
            this.Div04.addChild(obj.name, obj);

            obj = new Button("Button03","138","116","50%","60%",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("3");
            obj.set_text("4");
            obj.set_tablecellarea("1/1");
            obj.set_cssclass("btn_WF_Status");
            this.Div04.addChild(obj.name, obj);

            obj = new Div("Div03","Div04:36","Static05:0","27.75%","34.00%",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div02");
            obj.set_positionstep("1");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0","0","50%","60%",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_tablecellarea("0/0");
            obj.set_cssclass("btn_WF_Status");
            this.Div03.addChild(obj.name, obj);

            obj = new Button("Button01","138","0","50%","60%",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_tablecellarea("0/1");
            obj.set_cssclass("btn_WF_Status");
            this.Div03.addChild(obj.name, obj);

            obj = new Button("Button02","0","116","50%","60%",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_tablecellarea("1/0");
            obj.set_cssclass("btn_WF_Status");
            this.Div03.addChild(obj.name, obj);

            obj = new Button("Button03","138","116","50%","60%",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("3");
            obj.set_text("4");
            obj.set_tablecellarea("1/1");
            obj.set_cssclass("btn_WF_Status");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static09","Static05:303.76%","96","7.84%","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("end/ start");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Div("Div05","Div03:42","Static09:0","27.75%","34.00%",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div02");
            obj.set_positionstep("1");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0","0","50%","60%",null,null,null,null,null,null,this.Div05.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_tablecellarea("0/0");
            obj.set_cssclass("btn_WF_Status");
            this.Div05.addChild(obj.name, obj);

            obj = new Button("Button01","138","0","50%","60%",null,null,null,null,null,null,this.Div05.form);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_tablecellarea("0/1");
            obj.set_cssclass("btn_WF_Status");
            this.Div05.addChild(obj.name, obj);

            obj = new Button("Button02","0","116","50%","60%",null,null,null,null,null,null,this.Div05.form);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_tablecellarea("1/0");
            obj.set_cssclass("btn_WF_Status");
            this.Div05.addChild(obj.name, obj);

            obj = new Button("Button03","138","116","50%","60%",null,null,null,null,null,null,this.Div05.form);
            obj.set_taborder("3");
            obj.set_text("4");
            obj.set_tablecellarea("1/1");
            obj.set_cssclass("btn_WF_Status");
            this.Div05.addChild(obj.name, obj);

            obj = new Static("Static14","20","Div04:20","8.24%","26",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("center/ start");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Div("Div07","20","Static14:0","27.94%","34.00%",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div02");
            obj.set_positionstep("1");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0","0","50%","60%",null,null,null,null,null,null,this.Div07.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_tablecellarea("0/0");
            obj.set_cssclass("btn_WF_Status");
            this.Div07.addChild(obj.name, obj);

            obj = new Button("Button01","138","0","50%","60%",null,null,null,null,null,null,this.Div07.form);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_tablecellarea("0/1");
            obj.set_cssclass("btn_WF_Status");
            this.Div07.addChild(obj.name, obj);

            obj = new Button("Button02","0","116","50%","60%",null,null,null,null,null,null,this.Div07.form);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_tablecellarea("1/0");
            obj.set_cssclass("btn_WF_Status");
            this.Div07.addChild(obj.name, obj);

            obj = new Button("Button03","138","116","50%","60%",null,null,null,null,null,null,this.Div07.form);
            obj.set_taborder("3");
            obj.set_text("4");
            obj.set_tablecellarea("1/1");
            obj.set_cssclass("btn_WF_Status");
            this.Div07.addChild(obj.name, obj);

            obj = new Static("Static03","27","99","24.93%","26",null,null,null,null,null,null,this.Div07.form);
            obj.set_taborder("4");
            obj.set_text("flexcrossaxiswrapalign : start");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_positionstep("1");
            this.Div07.addChild(obj.name, obj);

            obj = new Static("Static16","Static14:292.63%","Div03:20","8.73%","26",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("center/ center");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Div("Div13","Div07:39","Static16:0","27.94%","34.00%",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Div02");
            obj.set_positionstep("1");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0","0","50%","60%",null,null,null,null,null,null,this.Div13.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_tablecellarea("0/0");
            obj.set_cssclass("btn_WF_Status");
            this.Div13.addChild(obj.name, obj);

            obj = new Button("Button01","138","0","50%","60%",null,null,null,null,null,null,this.Div13.form);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_tablecellarea("0/1");
            obj.set_cssclass("btn_WF_Status");
            this.Div13.addChild(obj.name, obj);

            obj = new Button("Button02","0","116","50%","60%",null,null,null,null,null,null,this.Div13.form);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_tablecellarea("1/0");
            obj.set_cssclass("btn_WF_Status");
            this.Div13.addChild(obj.name, obj);

            obj = new Button("Button03","138","116","50%","60%",null,null,null,null,null,null,this.Div13.form);
            obj.set_taborder("3");
            obj.set_text("4");
            obj.set_tablecellarea("1/1");
            obj.set_font("14px/normal \"Segoe UI\",\"Malgun Gothic\"");
            obj.set_cssclass("btn_WF_Status");
            this.Div13.addChild(obj.name, obj);

            obj = new Static("Static18","Static16:259.37%","Div05:20","7.75%","26",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("center / end");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Div("Div12","Div13:39","Static18:0","27.94%","34.00%",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Div02");
            obj.set_positionstep("1");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0","0","50%","60%",null,null,null,null,null,null,this.Div12.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_tablecellarea("0/0");
            obj.set_cssclass("btn_WF_Status");
            this.Div12.addChild(obj.name, obj);

            obj = new Button("Button01","138","0","50%","60%",null,null,null,null,null,null,this.Div12.form);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_tablecellarea("0/1");
            obj.set_cssclass("btn_WF_Status");
            this.Div12.addChild(obj.name, obj);

            obj = new Button("Button02","0","116","50%","60%",null,null,null,null,null,null,this.Div12.form);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_tablecellarea("1/0");
            obj.set_cssclass("btn_WF_Status");
            this.Div12.addChild(obj.name, obj);

            obj = new Button("Button03","138","116","50%","60%",null,null,null,null,null,null,this.Div12.form);
            obj.set_taborder("3");
            obj.set_text("4");
            obj.set_tablecellarea("1/1");
            obj.set_cssclass("btn_WF_Status");
            this.Div12.addChild(obj.name, obj);

            obj = new Static("Static19","20","96","7.53%","26",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("start/ start");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Div("Div14","20","Static19:0","27.94%","34.00%",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Div02");
            obj.set_positionstep("0");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0","0","50%","60%",null,null,null,null,null,null,this.Div14.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_tablecellarea("0/0");
            obj.set_cssclass("btn_WF_Status");
            this.Div14.addChild(obj.name, obj);

            obj = new Button("Button01","138","0","50%","60%",null,null,null,null,null,null,this.Div14.form);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_tablecellarea("0/1");
            obj.set_cssclass("btn_WF_Status");
            this.Div14.addChild(obj.name, obj);

            obj = new Button("Button02","0","116","50%","60%",null,null,null,null,null,null,this.Div14.form);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_tablecellarea("1/0");
            obj.set_cssclass("btn_WF_Status");
            this.Div14.addChild(obj.name, obj);

            obj = new Button("Button03","138","116","50%","60%",null,null,null,null,null,null,this.Div14.form);
            obj.set_taborder("3");
            obj.set_text("4");
            obj.set_tablecellarea("1/1");
            obj.set_cssclass("btn_WF_Status");
            this.Div14.addChild(obj.name, obj);

            obj = new Static("Static06","Static19:306.33%","96","8.90%","26",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("center/ center");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Div("Div10","Div14:15","Static06:0","27.75%","34.00%",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Div02");
            obj.set_positionstep("0");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0","0","50%","60%",null,null,null,null,null,null,this.Div10.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_tablecellarea("0/0");
            obj.set_cssclass("btn_WF_Status");
            this.Div10.addChild(obj.name, obj);

            obj = new Button("Button01","138","0","50%","60%",null,null,null,null,null,null,this.Div10.form);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_tablecellarea("0/1");
            obj.set_cssclass("btn_WF_Status");
            this.Div10.addChild(obj.name, obj);

            obj = new Button("Button02","0","116","50%","60%",null,null,null,null,null,null,this.Div10.form);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_tablecellarea("1/0");
            obj.set_cssclass("btn_WF_Status");
            this.Div10.addChild(obj.name, obj);

            obj = new Button("Button03","138","116","50%","60%",null,null,null,null,null,null,this.Div10.form);
            obj.set_taborder("3");
            obj.set_text("4");
            obj.set_tablecellarea("1/1");
            obj.set_cssclass("btn_WF_Status");
            this.Div10.addChild(obj.name, obj);

            obj = new Static("Static10","Static06:232.80%","96","60","26",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("end / end");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Div("Div11","Div10:23","Static10:0","27.75%","34.00%",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Div02");
            obj.set_positionstep("0");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0","0","50%","60%",null,null,null,null,null,null,this.Div11.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_tablecellarea("0/0");
            obj.set_cssclass("btn_WF_Status");
            this.Div11.addChild(obj.name, obj);

            obj = new Button("Button01","138","0","50%","60%",null,null,null,null,null,null,this.Div11.form);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_tablecellarea("0/1");
            obj.set_cssclass("btn_WF_Status");
            this.Div11.addChild(obj.name, obj);

            obj = new Button("Button02","0","116","50%","60%",null,null,null,null,null,null,this.Div11.form);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_tablecellarea("1/0");
            obj.set_cssclass("btn_WF_Status");
            this.Div11.addChild(obj.name, obj);

            obj = new Button("Button03","138","116","50%","60%",null,null,null,null,null,null,this.Div11.form);
            obj.set_taborder("3");
            obj.set_text("4");
            obj.set_tablecellarea("1/1");
            obj.set_cssclass("btn_WF_Status");
            this.Div11.addChild(obj.name, obj);

            obj = new Static("Static20","20","Div14:20","12.32%","26",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("spacebetween/ start");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Div("Div09","20","Static20:0","27.75%","34.00%",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Div02");
            obj.set_positionstep("0");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0","0","50%","60%",null,null,null,null,null,null,this.Div09.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_tablecellarea("0/0");
            obj.set_cssclass("btn_WF_Status");
            this.Div09.addChild(obj.name, obj);

            obj = new Button("Button01","138","0","50%","60%",null,null,null,null,null,null,this.Div09.form);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_tablecellarea("0/1");
            obj.set_cssclass("btn_WF_Status");
            this.Div09.addChild(obj.name, obj);

            obj = new Button("Button02","0","116","50%","60%",null,null,null,null,null,null,this.Div09.form);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_tablecellarea("1/0");
            obj.set_cssclass("btn_WF_Status");
            this.Div09.addChild(obj.name, obj);

            obj = new Button("Button03","138","116","50%","60%",null,null,null,null,null,null,this.Div09.form);
            obj.set_taborder("3");
            obj.set_text("4");
            obj.set_tablecellarea("1/1");
            obj.set_cssclass("btn_WF_Status");
            this.Div09.addChild(obj.name, obj);

            obj = new Static("Static08","Static20:146.78695262351923%","Div10:20","10.95%","26",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("spacearound / end");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","Static08:174.0791658483458%","Div11:20","131","26",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("spaceevenly / center");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Div("Div08","Div09:16","Static08:0","27.75%","34.00%",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("Div02");
            obj.set_positionstep("0");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0","0","50%","60%",null,null,null,null,null,null,this.Div08.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_tablecellarea("0/0");
            obj.set_cssclass("btn_WF_Status");
            this.Div08.addChild(obj.name, obj);

            obj = new Button("Button01","138","0","50%","60%",null,null,null,null,null,null,this.Div08.form);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_tablecellarea("0/1");
            obj.set_cssclass("btn_WF_Status");
            this.Div08.addChild(obj.name, obj);

            obj = new Button("Button02","0","116","50%","60%",null,null,null,null,null,null,this.Div08.form);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_tablecellarea("1/0");
            obj.set_cssclass("btn_WF_Status");
            this.Div08.addChild(obj.name, obj);

            obj = new Button("Button03","138","116","50%","60%",null,null,null,null,null,null,this.Div08.form);
            obj.set_taborder("3");
            obj.set_text("4");
            obj.set_tablecellarea("1/1");
            obj.set_cssclass("btn_WF_Status");
            this.Div08.addChild(obj.name, obj);

            obj = new Div("Div06","Div08:22","Static11:0","27.75%","34.00%",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Div02");
            obj.set_positionstep("0");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0","0","50%","60%",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_tablecellarea("0/0");
            obj.set_cssclass("btn_WF_Status");
            this.Div06.addChild(obj.name, obj);

            obj = new Button("Button01","138","0","50%","60%",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_tablecellarea("0/1");
            obj.set_cssclass("btn_WF_Status");
            this.Div06.addChild(obj.name, obj);

            obj = new Button("Button02","0","116","50%","60%",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_tablecellarea("1/0");
            obj.set_cssclass("btn_WF_Status");
            this.Div06.addChild(obj.name, obj);

            obj = new Button("Button03","138","116","50%","60%",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("3");
            obj.set_text("4");
            obj.set_tablecellarea("1/1");
            obj.set_cssclass("btn_WF_Status");
            this.Div06.addChild(obj.name, obj);

            obj = new Div("Div01","20","122","43.63%","74.86%",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("Div01");
            obj.set_positionstep("2");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","88","69","100%","100%",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_tablecellarea("0/0");
            obj.set_cssclass("btn_WF_Status");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button01","40","198","100%","100%",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("1");
            obj.set_tablecellarea("1/0");
            obj.set_cssclass("btn_WF_Status");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button02","93","321","100%","100%",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("1");
            obj.set_tablecellarea("2/0");
            obj.set_cssclass("btn_WF_Status");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button03","58","409","100%","100%",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("1");
            obj.set_tablecellarea("3/0");
            obj.set_cssclass("btn_WF_Status");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button04","262","60","100%","100%",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("2");
            obj.set_tablecellarea("0/1");
            obj.set_cssclass("btn_WF_Status");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button05","180","186","100%","100%",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("2");
            obj.set_tablecellarea("1/1");
            obj.set_cssclass("btn_WF_Status");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button06","371","164","100%","100%",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("5");
            obj.set_tablecellarea("1/2");
            obj.set_cssclass("btn_WF_Status");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button07","148","250","100%","50%",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("4");
            obj.set_tablecellarea("2/1");
            obj.set_cssclass("btn_WF_Status");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button08","296","250","100%","50%",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("4");
            obj.set_tablecellarea("2/2");
            obj.set_cssclass("btn_WF_Status");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button09","246","450","100%","100%",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_text("3");
            obj.set_tablecellarea("3/1");
            obj.set_cssclass("btn_WF_Status");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static12","20","96","11.57%","26",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("No - tabletemplate");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","Static12:327.07%","96","21.27%","26",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("tabletemplate & tabletemplatearea");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Div("Div02","Div01:56","Static13:0",null,"74.00%","20",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("Div01");
            obj.set_positionstep("2");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0","0","100%","100%",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_tablecellarea("0 3/0 0");
            obj.set_cssclass("btn_WF_Status");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button01","148.00","0","100%","100%",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_tablecellarea("0 1/1 1");
            obj.set_cssclass("btn_WF_Status");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button02","146.00","402","100%","100%",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_tablecellarea("3/1");
            obj.set_cssclass("btn_WF_Status");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button03","152.00","268","100%","50%",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            obj.set_text("4");
            obj.set_tablecellarea("2 2/1 2");
            obj.set_cssclass("btn_WF_Status");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button04","159.00","0","100%","100%",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("4");
            obj.set_text("5");
            obj.set_tablecellarea("1/2");
            obj.set_cssclass("btn_WF_Status");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static39","20","60","450","36",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("[Property] tablecellalign = \"start\" | \"end\" | \"center\" ");
            obj.set_cssclass("sta_WF_GuideScript");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static37","20","60","370","36",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("[Property] tabletemplate , tabletemplatearea");
            obj.set_cssclass("sta_WF_GuideScript");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static40","20","60","800","36",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("[Property] tablecellalign = \"start\" | \"end\" | \"center\" | \"spacebetween\" | \"spaceround\" | \"spaceevenly\"");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div04.form
            obj = new Layout("default","",0,0,this.Div04.form,function(p){});
            obj.set_type("table");
            obj.set_tabletemplate("1* 1* / 1* 1*");
            obj.set_tablecellincompalign("start start");
            this.Div04.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div03.form
            obj = new Layout("default","",0,0,this.Div03.form,function(p){});
            obj.set_type("table");
            obj.set_tabletemplate("1* 1* / 1* 1*");
            obj.set_tablecellincompalign("start end");
            this.Div03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div05.form
            obj = new Layout("default","",0,0,this.Div05.form,function(p){});
            obj.set_type("table");
            obj.set_tabletemplate("1* 1* / 1* 1*");
            obj.set_tablecellincompalign("end");
            this.Div05.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div07.form
            obj = new Layout("default","",0,0,this.Div07.form,function(p){});
            obj.set_type("table");
            obj.set_tabletemplate("1* 1* / 1* 1*");
            obj.set_tablecellincompalign("center start");
            this.Div07.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div13.form
            obj = new Layout("default","",0,0,this.Div13.form,function(p){});
            obj.set_type("table");
            obj.set_tabletemplate("1* 1* / 1* 1*");
            obj.set_tablecellincompalign("center center");
            this.Div13.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div12.form
            obj = new Layout("default","",0,0,this.Div12.form,function(p){});
            obj.set_type("table");
            obj.set_tabletemplate("1* 1* / 1* 1*");
            obj.set_tablecellincompalign("center end");
            this.Div12.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div14.form
            obj = new Layout("default","",0,0,this.Div14.form,function(p){});
            obj.set_type("table");
            obj.set_tabletemplate("40% 40% / 40% 40%");
            obj.set_tabledirection("horizontal");
            this.Div14.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div10.form
            obj = new Layout("default","",0,0,this.Div10.form,function(p){});
            obj.set_type("table");
            obj.set_tabletemplate("40% 40% / 40% 40%");
            obj.set_tablecellalign("center center");
            obj.set_tabledirection("horizontal");
            this.Div10.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div11.form
            obj = new Layout("default","",0,0,this.Div11.form,function(p){});
            obj.set_type("table");
            obj.set_tabletemplate("40% 40% / 40% 40%");
            obj.set_tablecellalign("end end");
            this.Div11.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div09.form
            obj = new Layout("default","",0,0,this.Div09.form,function(p){});
            obj.set_type("table");
            obj.set_tabletemplate("40% 40% / 40% 40%");
            obj.set_tablecellalign("spacebetween start");
            this.Div09.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div08.form
            obj = new Layout("default","",0,0,this.Div08.form,function(p){});
            obj.set_type("table");
            obj.set_tabletemplate("40% 40% / 40% 40%");
            obj.set_tablecellalign("spacearound end");
            this.Div08.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div06.form
            obj = new Layout("default","",0,0,this.Div06.form,function(p){});
            obj.set_type("table");
            obj.set_tabletemplate("40% 40% / 40% 40%");
            obj.set_tablecellalign("spaceevenly center");
            this.Div06.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            obj.set_type("table");
            obj.set_tabletemplate("1* 1* 1* 1* / 1* 1* 1*");
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div02.form
            obj = new Layout("default","",0,0,this.Div02.form,function(p){});
            obj.set_type("table");
            obj.set_tabletemplate("25% 25% 25% 25%/ 1* 1* 1*");
            obj.set_tabletemplatearea("\"A B C\" \"A B C\" \"A B C\" \"A B C\"");
            this.Div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1020,700,this,function(p){});
            obj.set_flexwrap("wrap");
            obj.set_stepcount("3");
            obj.set_stepindex("4");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item7","Static04","value","ds_emp","DEPT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static04.addEventHandler("onclick",this.Static02_00_00_03_01_onclick,this);
            this.Static19.addEventHandler("onclick",this.Static02_00_00_03_01_onclick,this);
            this.Div10.form.Button03.addEventHandler("onclick",this.Div02_03_00_Button03_onclick,this);
            this.Static10.addEventHandler("onclick",this.Static02_00_00_03_01_01_00_onclick,this);
            this.Static20.addEventHandler("onclick",this.Static02_00_00_03_01_onclick,this);
            this.Static08.addEventHandler("onclick",this.Static02_00_00_03_01_00_00_00_onclick,this);
            this.Static11.addEventHandler("onclick",this.Static02_00_00_03_01_01_00_onclick,this);
            this.Static13.addEventHandler("onclick",this.Static02_00_00_03_01_01_01_00_onclick,this);
            this.Static39.addEventHandler("onclick",this.Static02_00_onclick,this);
            this.Static37.addEventHandler("onclick",this.Static02_00_onclick,this);
            this.Static40.addEventHandler("onclick",this.Static02_00_onclick,this);
        };
        this.loadIncludeScript("Layout_Table.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
