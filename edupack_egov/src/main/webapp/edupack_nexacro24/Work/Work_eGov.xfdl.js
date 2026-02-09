(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Work_Emp");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(900,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds00", this);
            obj._setContents({});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "DEPT_CODE","type" : "string","size" : "255"},{"id" : "DEPT_NAME","type" : "string","size" : "255"},{"id" : "DEPT_EMP","type" : "string","size" : "255"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pos", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "CODE","type" : "STRING","size" : "256"},{"id" : "NAME","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_skill", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "CODE","type" : "string","size" : "255"},{"id" : "NAME","type" : "string","size" : "255"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_hobby", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "CODE","type" : "STRING","size" : "256"},{"id" : "NAME","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_emp", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMP_NAME","type" : "STRING","size" : "50"},{"id" : "EMP_ID","type" : "STRING","size" : "10"},{"id" : "DEPT_CODE","type" : "STRING","size" : "256"},{"id" : "POSITION","type" : "STRING","size" : "10"},{"id" : "HIRE_DATE","type" : "DATE","size" : "10"},{"id" : "SALARY","type" : "INT","size" : "10"},{"id" : "GENDER","type" : "STRING","size" : "256"},{"id" : "MARRIED","type" : "STRING","size" : "256"},{"id" : "SKILL","type" : "STRING","size" : "256"},{"id" : "HOBBY","type" : "STRING","size" : "256"},{"id" : "MEMO","type" : "STRING","size" : "256"}]},"Rows" : [{"EMP_NAME" : "Melon","EMP_ID" : "KR010","POSITION" : "10","HIRE_DATE" : "20071001","SALARY" : "9000","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "01,05","DEPT_CODE" : "10","MEMO" : "aqua"},{"EMP_NAME" : "Jackson","EMP_ID" : "US050","POSITION" : "60","HIRE_DATE" : "20091021","SALARY" : "6000","GENDER" : "M","MARRIED" : "false","SKILL" : "11,03,13","HOBBY" : "09,14","DEPT_CODE" : "20","MEMO" : "gold"},{"EMP_NAME" : "Jennie","EMP_ID" : "KR240","POSITION" : "50","HIRE_DATE" : "20110508","SALARY" : "7000","GENDER" : "F","MARRIED" : "true","SKILL" : "01,06","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "greenyellow"},{"EMP_NAME" : "Dennis ","EMP_ID" : "JP150","POSITION" : "20","HIRE_DATE" : "20091021","SALARY" : "5000","GENDER" : "M","MARRIED" : "false","SKILL" : "09,11","HOBBY" : "07,06,05","DEPT_CODE" : "30","MEMO" : "khaki"},{"EMP_NAME" : "Andrew","EMP_ID" : "US020","POSITION" : "60","HIRE_DATE" : "20160602","SALARY" : "6500","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,13","DEPT_CODE" : "40","MEMO" : "lightpink"},{"EMP_NAME" : "Jungkook","EMP_ID" : "KR200","POSITION" : "60","HIRE_DATE" : "20120304","SALARY" : "7000","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,14","DEPT_CODE" : "50","MEMO" : "orange"},{"EMP_NAME" : "Adam","EMP_ID" : "JP230","POSITION" : "50","HIRE_DATE" : "20110928","SALARY" : "8000","GENDER" : "M","MARRIED" : "true","SKILL" : "11,03,13","HOBBY" : "09,15","DEPT_CODE" : "30","MEMO" : "silver"},{"EMP_NAME" : "JiYoung","EMP_ID" : "KR080","POSITION" : "50","HIRE_DATE" : "20131120","SALARY" : "8500","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "violet"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds00_copy", this);
            obj._setContents({});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept_copy", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "DEPT_CODE","type" : "string","size" : "255"},{"id" : "DEPT_NAME","type" : "string","size" : "255"},{"id" : "DEPT_EMP","type" : "string","size" : "255"}]},"Rows" : [{"DEPT_CODE" : "10","DEPT_NAME" : "Accounting Team","DEPT_EMP" : "Kate"},{"DEPT_CODE" : "20","DEPT_NAME" : "Finances Team","DEPT_EMP" : "Dennis"},{"DEPT_CODE" : "30","DEPT_NAME" : "Human Resource Team","DEPT_EMP" : "Adam"},{"DEPT_CODE" : "40","DEPT_NAME" : "Support Team","DEPT_EMP" : "Jackson"},{"DEPT_CODE" : "50","DEPT_NAME" : "Sales Team","DEPT_EMP" : "Belle"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pos_copy", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "CODE","type" : "STRING","size" : "256"},{"id" : "NAME","type" : "STRING","size" : "256"}]},"Rows" : [{"CODE" : "10","NAME" : "CEO"},{"CODE" : "20","NAME" : "Director"},{"CODE" : "30","NAME" : "General Manager"},{"CODE" : "40","NAME" : "Manager"},{"CODE" : "50","NAME" : "Assistant Manager"},{"CODE" : "60","NAME" : "Staff"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_skill_copy", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "CODE","type" : "string","size" : "255"},{"id" : "NAME","type" : "string","size" : "255"}]},"Rows" : [{"CODE" : "01","NAME" : "HTML"},{"CODE" : "02","NAME" : "CSS"},{"CODE" : "03","NAME" : "JavaScript"},{"CODE" : "04","NAME" : "JAVA"},{"CODE" : "05","NAME" : "C/C++"},{"CODE" : "06","NAME" : "Python"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_hobby_copy", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "CODE","type" : "STRING","size" : "256"},{"id" : "NAME","type" : "STRING","size" : "256"}]},"Rows" : [{"CODE" : "01","NAME" : "Climbing"},{"CODE" : "02","NAME" : "Running"},{"CODE" : "03","NAME" : "Cycling"},{"CODE" : "04","NAME" : "Swimming"},{"CODE" : "05","NAME" : "Yoga"},{"CODE" : "06","NAME" : "Golf"},{"CODE" : "07","NAME" : "tennis"},{"CODE" : "08","NAME" : "Reading "},{"CODE" : "09","NAME" : "Cooking"},{"CODE" : "10","NAME" : "Photography"},{"CODE" : "11","NAME" : "Painting"},{"CODE" : "12","NAME" : "Movie and Drama"},{"CODE" : "13","NAME" : "Game"},{"CODE" : "14","NAME" : "Sleeping"},{"CODE" : "15","NAME" : "Shopping"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_emp_copy", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMP_NAME","type" : "STRING","size" : "50"},{"id" : "EMP_ID","type" : "STRING","size" : "10"},{"id" : "DEPT_CODE","type" : "STRING","size" : "256"},{"id" : "POSITION","type" : "STRING","size" : "10"},{"id" : "HIRE_DATE","type" : "DATE","size" : "10"},{"id" : "SALARY","type" : "INT","size" : "10"},{"id" : "GENDER","type" : "STRING","size" : "256"},{"id" : "MARRIED","type" : "STRING","size" : "256"},{"id" : "SKILL","type" : "STRING","size" : "256"},{"id" : "HOBBY","type" : "STRING","size" : "256"},{"id" : "MEMO","type" : "STRING","size" : "256"}]},"Rows" : [{"EMP_NAME" : "Melon","EMP_ID" : "KR010","POSITION" : "10","HIRE_DATE" : "20071001","SALARY" : "9000","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "01,05","DEPT_CODE" : "10","MEMO" : "aqua"},{"EMP_NAME" : "Jackson","EMP_ID" : "US050","POSITION" : "60","HIRE_DATE" : "20091021","SALARY" : "6000","GENDER" : "M","MARRIED" : "false","SKILL" : "11,03,13","HOBBY" : "09,14","DEPT_CODE" : "20","MEMO" : "gold"},{"EMP_NAME" : "Jennie","EMP_ID" : "KR240","POSITION" : "50","HIRE_DATE" : "20110508","SALARY" : "7000","GENDER" : "F","MARRIED" : "true","SKILL" : "01,06","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "greenyellow"},{"EMP_NAME" : "Dennis ","EMP_ID" : "JP150","POSITION" : "20","HIRE_DATE" : "20091021","SALARY" : "5000","GENDER" : "M","MARRIED" : "false","SKILL" : "09,11","HOBBY" : "07,06,05","DEPT_CODE" : "30","MEMO" : "khaki"},{"EMP_NAME" : "Andrew","EMP_ID" : "US020","POSITION" : "60","HIRE_DATE" : "20160602","SALARY" : "6500","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,13","DEPT_CODE" : "40","MEMO" : "lightpink"},{"EMP_NAME" : "Jungkook","EMP_ID" : "KR200","POSITION" : "60","HIRE_DATE" : "20120304","SALARY" : "7000","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,14","DEPT_CODE" : "50","MEMO" : "orange"},{"EMP_NAME" : "Adam","EMP_ID" : "JP230","POSITION" : "50","HIRE_DATE" : "20110928","SALARY" : "8000","GENDER" : "M","MARRIED" : "true","SKILL" : "11,03,13","HOBBY" : "09,15","DEPT_CODE" : "30","MEMO" : "silver"},{"EMP_NAME" : "JiYoung","EMP_ID" : "KR080","POSITION" : "50","HIRE_DATE" : "20131120","SALARY" : "8500","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "violet"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "SRC_DEPT_CODE","type" : "STRING","size" : "256"},{"id" : "SRC_EMP_NAME","type" : "STRING","size" : "256"}]},"Rows" : [{}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJoin", this);
            obj._setContents({});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00","20","7","81","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("사원 관리");
            obj.set_cssclass("sta_WF_GuideTitle1");
            this.addChild(obj.name, obj);

            obj = new Grid("grd01","20","214","400","218",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_emp");
            obj.set_autosizingtype("none");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"27\"/><Column size=\"63\"/><Column size=\"63\"/><Column size=\"63\"/><Column size=\"114\"/><Column size=\"94\"/><Column size=\"69\"/><Column size=\"51\"/><Column size=\"48\"/><Column size=\"93\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"월급\"/><Cell col=\"2\" text=\"EMP_NAME\"/><Cell col=\"3\" text=\"EMP_ID\"/><Cell col=\"4\" text=\"DEPT_CODE\"/><Cell col=\"5\" text=\"POSITION\"/><Cell col=\"6\" text=\"HIRE_DATE\"/><Cell col=\"7\" text=\"GENDER\"/><Cell col=\"8\" text=\"MARRIED\"/><Cell col=\"9\" text=\"SKILL\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\" edittype=\"text\" textAlign=\"center\"/><Cell col=\"1\" text=\"expr:Math.round(SALARY / 12)\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:EMP_NAME\" edittype=\"expr:EMP_ID.substring(0, 2) == dataset.parent.fv_corp ? &quot;text&quot; : &quot;none&quot;\"/><Cell col=\"3\" text=\"bind:EMP_ID\" edittype=\"mask\" editautoselect=\"true\" maskedittype=\"string\" maskeditformat=\"AA-###\" displaytype=\"mask\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:DEPT_CODE\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_dept\" combocodecol=\"DEPT_CODE\" combodatacol=\"DEPT_NAME\"/><Cell col=\"5\" text=\"bind:POSITION\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"ds_pos\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"6\" text=\"bind:HIRE_DATE\" displaytype=\"date\" edittype=\"date\"/><Cell col=\"7\" text=\"expr:GENDER == &quot;M&quot; ? &quot;남자&quot; : &quot;여자&quot;\"/><Cell col=\"8\" text=\"bind:MARRIED\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"9\" text=\"bind:SKILL\" displaytype=\"multicombocontrol\" edittype=\"multicombo\" multicombodataset=\"ds_skill\" multicombocodecol=\"CODE\" multicombodatacol=\"NAME\"/></Band><Band id=\"summary\"><Cell text=\"expr:dataset.getRowCount()\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\" text=\"평균급여(남)\"/><Cell col=\"4\" text=\"expr:Math.round(dataset.getCaseAvg(&quot;GENDER == &apos;M&apos;&quot;, &quot;SALARY&quot;, 0, -1, false) * 100) / 100.0\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell row=\"1\"/><Cell row=\"1\" col=\"1\"/><Cell row=\"1\" col=\"2\"/><Cell row=\"1\" col=\"3\" text=\"평균급여(여)\"/><Cell row=\"1\" col=\"4\" text=\"expr:Math.round(dataset.getCaseAvg(&quot;GENDER == &apos;F&apos;&quot;, &quot;SALARY&quot;, 0, -1, false) * 100) / 100.0\"/><Cell row=\"1\" col=\"5\"/><Cell row=\"1\" col=\"6\"/><Cell row=\"1\" col=\"7\"/><Cell row=\"1\" col=\"8\"/><Cell row=\"1\" col=\"9\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div00","20","439","870","270",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","8","6","72","35",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("성명");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt00","80","5","119","35",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_00","8","62","72","35",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_text("사원번호");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("msk00","80","60","119","35",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_type("string");
            obj.set_format("AA-###");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","8","114","72","35",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("연봉");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("msk01","80","115","119","35",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_format("#,###");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00","8","171","72","35",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_text("입사일자");
            this.div00.addChild(obj.name, obj);

            obj = new Calendar("cal00","80","170","119","35",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_00","8","222","72","35",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_text("결혼여부");
            this.div00.addChild(obj.name, obj);

            obj = new CheckBox("chk00","80","222","19","35",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_text("");
            obj.set_truevalue("true");
            obj.set_falsevalue("false");
            obj.set_value("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_01","245","6","72","35",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("10");
            obj.set_text("성명");
            this.div00.addChild(obj.name, obj);

            obj = new TextArea("txt00","316","6","199","88",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("11");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cbo00","316","116","199","35",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("12");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPT_CODE");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_text("cbo00");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_01_00","244","116","72","35",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("13");
            obj.set_text("부서");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_01_01","560","6","72","35",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("14");
            obj.set_text("직급");
            this.div00.addChild(obj.name, obj);

            obj = new ListBox("lst00","631","7","173","93",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("15");
            obj.set_innerdataset("ds_pos");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_00","560","115","72","35",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("16");
            obj.set_text("성별");
            this.div00.addChild(obj.name, obj);

            obj = new Radio("rdo00","631","115","129","33",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("17");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("1");
            obj.set_columncount("2");
            var div00_form_rdo00_innerdataset = new nexacro.NormalDataset("div00_form_rdo00_innerdataset", obj);
            div00_form_rdo00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "M","datacolumn" : "남자"},{"codecolumn" : "F","datacolumn" : "여자"}]});
            obj.set_innerdataset(div00_form_rdo00_innerdataset);
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_00","245","170","72","35",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("18");
            obj.set_text("보유기술");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_00_00","560","171","72","35",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("19");
            obj.set_text("취미");
            this.div00.addChild(obj.name, obj);

            obj = new CheckBoxSet("CheckBoxSet00","316","173","199","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("20");
            obj.set_innerdataset("ds_skill");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_rowcount("3");
            this.div00.addChild(obj.name, obj);

            obj = new MultiCombo("MultiCombo00","626","170","176","35",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("21");
            obj.set_innerdataset("ds_hobby");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_buttonsize("25");
            obj.set_text("MultiCombo00");
            this.div00.addChild(obj.name, obj);

            obj = new Div("divSearch","20","142","870","65",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div01");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","18","15","31","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("부서");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtDeptCode","65","15","98","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtDeptName","195","15","175","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnPopupDept","163","15","27","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_Find");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00_00","419","15","41","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("이름");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtName","466","15","98","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","609","15","41","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("성별");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("rdo00","659","15","190","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("1");
            var divSearch_form_rdo00_innerdataset = new nexacro.NormalDataset("divSearch_form_rdo00_innerdataset", obj);
            divSearch_form_rdo00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"datacolumn" : "All","codecolumn" : "A"},{"codecolumn" : "M","datacolumn" : "남자"},{"codecolumn" : "F","datacolumn" : "여자"}]});
            obj.set_innerdataset(divSearch_form_rdo00_innerdataset);
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btn00","130","11","82","31",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("사원 조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","217","11","115","31",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("파라미터 전달1");
            this.addChild(obj.name, obj);

            obj = new Button("btn02","337","11","115","31",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("파라미터 전달2");
            this.addChild(obj.name, obj);

            obj = new Button("btn02_00","457","11","108","31",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("데이터셋 전달");
            this.addChild(obj.name, obj);

            obj = new Button("btn03","570","11","151","31",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("전체 데이터 불러오기");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","426","230","93","73",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_binddataset("ds_dept");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"DEPT_CODE\"/><Cell col=\"1\" text=\"DEPT_NAME\"/><Cell col=\"2\" text=\"DEPT_EMP\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_CODE\"/><Cell col=\"1\" text=\"bind:DEPT_NAME\"/><Cell col=\"2\" text=\"bind:DEPT_EMP\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00_00","529","230","93","73",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("ds_pos");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"CODE\"/><Cell col=\"1\" text=\"NAME\"/></Band><Band id=\"body\"><Cell text=\"bind:CODE\"/><Cell col=\"1\" text=\"bind:NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00_01","426","336","93","73",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_binddataset("ds_skill");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"CODE\"/><Cell col=\"1\" text=\"NAME\"/></Band><Band id=\"body\"><Cell text=\"bind:CODE\"/><Cell col=\"1\" text=\"bind:NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00_02","529","336","93","73",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_binddataset("ds_hobby");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"CODE\"/><Cell col=\"1\" text=\"NAME\"/></Band><Band id=\"body\"><Cell text=\"bind:CODE\"/><Cell col=\"1\" text=\"bind:NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn04","726","11","138","31",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("코드 파라미터 전달");
            this.addChild(obj.name, obj);

            obj = new Button("btn05","130","47","125","31",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("코드 가져오기 IN");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd","260","47","52","31",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete","317","47","52","31",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","374","47","52","31",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskEmpId","431","47","67","31",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_format("AA-###");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new Button("btn06","503","47","108","31",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("사번 중복체크");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",900,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div00.form.edt00","value","ds_emp","EMP_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div00.form.msk00","value","ds_emp","EMP_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div00.form.msk01","value","ds_emp","SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div00.form.cal00","value","ds_emp","HIRE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div00.form.chk00","value","ds_emp","MARRIED");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div00.form.txt00","value","ds_emp","MEMO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div00.form.cbo00","value","ds_emp","DEPT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div00.form.lst00","value","ds_emp","POSITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div00.form.rdo00","value","ds_emp","GENDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div00.form.lst00","acceptvaluetype","ds_pos","CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div00.form.CheckBoxSet00","value","ds_emp","SKILL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div00.form.MultiCombo00","value","ds_emp","HOBBY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtDeptCode","value","dsSearch","SRC_DEPT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divSearch.form.edtName","value","dsSearch","SRC_EMP_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Work_eGov.xfdl", function() {
        this.btn00_onclick = function(obj,e)
        {
        	this.transaction("svcGetEmp"
        					, "SvcUrl::edu/getEmpList.do"
        					, ""
        					, "ds_emp=out_emp"
        					, ""
        					, "");
        };

        this.btn01_onclick = function(obj,e)
        {
        	this.transaction("svcGetEmpParam1"
        					, "SvcUrl::edu/getEmpListParam1.do"
        					, ""
        					, "ds_emp=out_emp"
        					, "paramDept=" + this.divSearch.form.edtDeptCode.value
        					, "");
        };

        this.btn02_onclick = function(obj,e)
        {
        	this.transaction("svcGetEmpParam2"
        					, "SvcUrl::edu/getEmpListParam2.do"
        					, ""
        					, "ds_emp=out_emp"
        					, "paramDept=" + this.divSearch.form.edtDeptCode.value + " paramName=" + this.divSearch.form.edtName.value
        					, "");
        };

        this.btn02_00_onclick = function(obj,e)
        {
        	this.transaction("svcGetEmpParamDs"
        					, "SvcUrl::edu/getEmpListParamDs.do"
        					, "srcData=dsSearch"
        					, "ds_emp=out_emp"
        					, ""
        					, "");
        };

        this.btn03_onclick = function(obj,e)
        {
        	this.transaction("svcGetCodeData"
        					, "SvcUrl::edu/getCodeData.do"
        					, ""
        					, "ds_dept=out_dept ds_pos=out_pos ds_hobby=out_hobby ds_skill=out_skill"
        					, ""
        					, "fnCallBack");
        };

        this.btn04_onclick = function(obj,e)
        {
        	var arrCode = ["SKILL", "HOBBY"];
        	this.transaction("svcGetCodeParam"
        					, "SvcUrl::edu/getCodeParam.do"
        					, ""
        					, "ds_skill=SKILL ds_hobby=HOBBY"
        					, "paramCode=" + arrCode.toString()
        					, "fnCallBack");
        };

        this.btn05_onclick = function(obj,e)
        {
        	var arrCode = ["SKILL", "HOBBY"];
        	this.transaction("svcGetCodeIn"
        					, "SvcUrl::edu/getCodeIn.do"
        					, ""
        					, "ds_pos=out_code"
        					, "paramCode=" + arrCode.toString()
        					, "fnCallBack");
        };

        this.btnAdd_onclick = function(obj,e)
        {
        	this.ds_emp.addRow();
        };

        this.btnDelete_onclick = function(obj,e)
        {
        	this.ds_emp.deleteRow(this.ds_emp.rowposition);
        };

        this.btnSave_onclick = function(obj,e)
        {
        	this.transaction("svcSaveEmp"
        					, "SvcUrl::edu/saveEmp.do"
        					, "out_emp=ds_emp:u"
        					, ""
        					, ""
        					, "fnCallBack");
        };





        this.fnCallBack = function(svcId, errCd, errMsg) {
        	if (errCd < 0) {
        		this.alert("에러 : " + errMsg);
        	}
        	if (svcId == "scvCheckId") {
        		// alert(errCd + " : " + errMsg);
        		alert(this.emp_count);
        	}
        }

        this.emp_count = "";

        this.btn06_onclick = function(obj,e)
        {
        	this.transaction("svcCheckId"
        					, "SvcUrl::edu/checkId.do"
        					, ""
        					, ""
        					, "paramEmpId=" + this.mskEmpId.value
        					, "fnCallBack");
        };

        this.Work_Emp_onload = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Work_Emp_onload,this);
            this.div00.form.sta00_00_00_00.addEventHandler("onclick",this.div00_sta00_00_00_00_onclick,this);
            this.div00.form.txt00.addEventHandler("onchanged",this.div00_txt00_onchanged,this);
            this.divSearch.form.edtDeptCode.addEventHandler("onchanged",this.divSearch_edtDeptCode_onchanged,this);
            this.divSearch.form.btnPopupDept.addEventHandler("onclick",this.divSearch_btnPopupDept_onclick,this);
            this.divSearch.form.rdo00.addEventHandler("onitemchanged",this.divSearch_rdo00_onitemchanged,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
            this.btn02_00.addEventHandler("onclick",this.btn02_00_onclick,this);
            this.btn03.addEventHandler("onclick",this.btn03_onclick,this);
            this.btn04.addEventHandler("onclick",this.btn04_onclick,this);
            this.btn05.addEventHandler("onclick",this.btn05_onclick,this);
            this.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
            this.btnDelete.addEventHandler("onclick",this.btnDelete_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btn06.addEventHandler("onclick",this.btn06_onclick,this);
        };
        this.loadIncludeScript("Work_eGov.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
