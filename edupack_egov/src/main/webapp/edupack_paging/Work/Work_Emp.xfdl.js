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
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds00", this);
            obj._setContents({});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_emp", this);
            obj.set_useclientlayout("false");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMP_ID","type" : "STRING","size" : "256"},{"id" : "EMP_NAME","type" : "STRING","size" : "256"}]}});
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


            obj = new Dataset("ds_emp00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMP_NAME","type" : "STRING","size" : "50"},{"id" : "EMP_ID","type" : "STRING","size" : "10"},{"id" : "DEPT_CODE","type" : "STRING","size" : "256"},{"id" : "POSITION","type" : "STRING","size" : "10"},{"id" : "HIRE_DATE","type" : "DATE","size" : "10"},{"id" : "SALARY","type" : "INT","size" : "10"},{"id" : "GENDER","type" : "STRING","size" : "256"},{"id" : "MARRIED","type" : "STRING","size" : "256"},{"id" : "SKILL","type" : "STRING","size" : "256"},{"id" : "HOBBY","type" : "STRING","size" : "256"},{"id" : "MEMO","type" : "STRING","size" : "256"}]},"Rows" : [{"EMP_NAME" : "Melon","EMP_ID" : "KR010","POSITION" : "10","HIRE_DATE" : "20071001","SALARY" : "9000","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "01,05","DEPT_CODE" : "10","MEMO" : "aqua"},{"EMP_NAME" : "Jackson","EMP_ID" : "US050","POSITION" : "60","HIRE_DATE" : "20091021","SALARY" : "6000","GENDER" : "M","MARRIED" : "false","SKILL" : "11,03,13","HOBBY" : "09,14","DEPT_CODE" : "20","MEMO" : "gold"},{"EMP_NAME" : "Jennie","EMP_ID" : "KR240","POSITION" : "50","HIRE_DATE" : "20110508","SALARY" : "7000","GENDER" : "F","MARRIED" : "true","SKILL" : "01,06","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "greenyellow"},{"EMP_NAME" : "Dennis ","EMP_ID" : "JP150","POSITION" : "20","HIRE_DATE" : "20091021","SALARY" : "5000","GENDER" : "M","MARRIED" : "false","SKILL" : "09,11","HOBBY" : "07,06,05","DEPT_CODE" : "30","MEMO" : "khaki"},{"EMP_NAME" : "Andrew","EMP_ID" : "US020","POSITION" : "60","HIRE_DATE" : "20160602","SALARY" : "6500","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,13","DEPT_CODE" : "40","MEMO" : "lightpink"},{"EMP_NAME" : "Jungkook","EMP_ID" : "KR200","POSITION" : "60","HIRE_DATE" : "20120304","SALARY" : "7000","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,14","DEPT_CODE" : "50","MEMO" : "orange"},{"EMP_NAME" : "Adam","EMP_ID" : "JP230","POSITION" : "50","HIRE_DATE" : "20110928","SALARY" : "8000","GENDER" : "M","MARRIED" : "true","SKILL" : "11,03,13","HOBBY" : "09,15","DEPT_CODE" : "30","MEMO" : "silver"},{"EMP_NAME" : "JiYoung","EMP_ID" : "KR080","POSITION" : "50","HIRE_DATE" : "20131120","SALARY" : "8500","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "violet"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00","43","23","177","75",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("사원 관리");
            obj.set_font("normal 700 24pt/normal \"Arial\",\"Broadway\"");
            obj.set_background("#ffffff");
            obj.set_borderRadius("100px");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"33","97","58","371",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd","btnSearch:10","33","97","58",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("입력");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete","btnAdd:10","33","97","58",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","btnDelete:10","33","97","58",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","57","200","1157","190",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_emp");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"81\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"no\"/><Cell col=\"1\"/><Cell col=\"2\" text=\"EMP_NAME\"/><Cell col=\"3\" text=\"EMP_ID\"/><Cell col=\"4\" text=\"DEPT_CODE\"/><Cell col=\"5\" text=\"POSITION\"/><Cell col=\"6\" text=\"HIRE_DATE\"/><Cell col=\"7\" text=\"GENDER\"/><Cell col=\"8\" text=\"MARRIED\"/><Cell col=\"9\" text=\"SKILL\"/><Cell col=\"10\" text=\"HOBBY\"/><Cell col=\"11\" text=\"MEMO\"/></Band><Band id=\"body\"><Cell text=\"expr:dataset.getRowType(currow)\"/><Cell col=\"1\" text=\"expr:EMP_ID.substr(0, 2)==dataset.parent.fv_corp?&quot;A&quot;:&quot;B&quot;\" displaytype=\"normal\"/><Cell col=\"2\" text=\"bind:EMP_NAME\" edittype=\"expr:EMP_ID.substr(0, 2)==dataset.parent.fv_corp?&quot;text&quot;:&quot;none&quot;\" displaytype=\"text\"/><Cell col=\"3\" text=\"bind:EMP_ID\" edittype=\"mask\" maskeditformat=\"AA-###\" displaytype=\"mask\" maskedittype=\"string\"/><Cell col=\"4\" text=\"bind:DEPT_CODE\" edittype=\"combo\" displaytype=\"combotext\" combodataset=\"ds_dept\" combocodecol=\"DEPT_CODE\" combodatacol=\"DEPT_NAME\"/><Cell col=\"5\" text=\"bind:POSITION\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"ds_pos\" combodatacol=\"NAME\" combocodecol=\"CODE\"/><Cell col=\"6\" text=\"bind:HIRE_DATE\" edittype=\"date\" displaytype=\"date\" calendardataset=\"ds_emp\" calendarbordercol=\"HIRE_DATE\" calendarbackgroundcol=\"HIRE_DATE\"/><Cell col=\"7\" text=\"expr:comp.parent.fn_gender(GENDER)\" displaytype=\"normal\" edittype=\"text\" checkboxfalsevalue=\"bind:GENDER\" checkboxtruevalue=\"bind:GENDER\"/><Cell col=\"8\" text=\"bind:MARRIED\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"9\" text=\"bind:SKILL\" displaytype=\"multicombocontrol\" edittype=\"multicombo\" multicombodataset=\"ds_skill\" multicombodatacol=\"NAME\" multicombocodecol=\"CODE\"/><Cell col=\"10\" text=\"bind:HOBBY\" displaytype=\"multicombocontrol\" edittype=\"multicombo\" multicombodataset=\"ds_hobby\" multicombodatacol=\"NAME\" multicombocodecol=\"CODE\"/><Cell col=\"11\" text=\"bind:MEMO\"/></Band><Band id=\"summary\"><Cell text=\"expr:dataset.getRowCount()\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\" text=\"평균급여(남)\"/><Cell col=\"4\" text=\"expr:nexacro.round(comp.parent.ds_emp.getCaseAvg(&quot;GENDER==&apos;M&apos;&quot;,&quot;SALARY&quot;),2)\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell row=\"1\"/><Cell row=\"1\" col=\"1\"/><Cell row=\"1\" col=\"2\"/><Cell row=\"1\" col=\"3\" text=\"평균급여(여)\"/><Cell row=\"1\" col=\"4\" text=\"expr:Math.round(comp.parent.ds_emp.getCaseAvg(&quot;GENDER==&apos;F&apos;&quot;,&quot;SALARY&quot;)*100)/100\"/><Cell row=\"1\" col=\"5\"/><Cell row=\"1\" col=\"6\"/><Cell row=\"1\" col=\"7\"/><Cell row=\"1\" col=\"8\"/><Cell row=\"1\" col=\"9\"/><Cell row=\"1\" col=\"10\"/><Cell row=\"1\" col=\"11\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div00","57","400","1157","296",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","38","22","130","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("성명");
            obj.set_font("20px/normal \"Segoe UI\",\"Malgun Gothic\"");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt00","106","22","220","36",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_00","32","82","130","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_text("사원번호");
            obj.set_font("20px/normal \"Segoe UI\",\"Malgun Gothic\"");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("msk00","142","82","184","36",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_type("string");
            obj.set_format("AA-###");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("msk02","145","136","181","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_format("#,###");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","32","128","130","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_text("급여");
            obj.set_font("20px/normal \"Segoe UI\",\"Malgun Gothic\"");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00","32","194","130","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_text("입사일자");
            obj.set_font("20px/normal \"Segoe UI\",\"Malgun Gothic\"");
            this.div00.addChild(obj.name, obj);

            obj = new Calendar("cal00","144","196","182","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_00","32","247","130","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_text("결혼여부");
            obj.set_font("20px/normal \"Segoe UI\",\"Malgun Gothic\"");
            this.div00.addChild(obj.name, obj);

            obj = new CheckBox("chk00","151","256","35","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_01","386","22","130","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("10");
            obj.set_text("메모");
            obj.set_font("20px/normal \"Segoe UI\",\"Malgun Gothic\"");
            this.div00.addChild(obj.name, obj);

            obj = new TextArea("txt00","486","20","236","72",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("11");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cbo00","486","125","239","49",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("12");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPT_CODE");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_type("dropdown");
            obj.set_text("cbo00");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_00","384","125","130","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("13");
            obj.set_text("부서");
            obj.set_font("20px/normal \"Segoe UI\",\"Malgun Gothic\"");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_00_00","382","203","130","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("14");
            obj.set_text("직급");
            obj.set_font("20px/normal \"Segoe UI\",\"Malgun Gothic\"");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_00_00_00","756","28","130","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("15");
            obj.set_text("성별");
            obj.set_font("20px/normal \"Segoe UI\",\"Malgun Gothic\"");
            this.div00.addChild(obj.name, obj);

            obj = new ListBox("lst00","483","198","179","87",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("16");
            obj.set_innerdataset("ds_pos");
            obj.set_datacolumn("NAME");
            obj.set_codecolumn("CODE");
            this.div00.addChild(obj.name, obj);

            obj = new Radio("rdo00","856","17","96","74",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("17");
            obj.set_rowcount("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_rdo00_innerdataset = new nexacro.NormalDataset("div00_form_rdo00_innerdataset", obj);
            div00_form_rdo00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "M","datacolumn" : "남자"},{"codecolumn" : "F","datacolumn" : "여자"}]});
            obj.set_innerdataset(div00_form_rdo00_innerdataset);
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_00_00_00_00","754","121","130","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("18");
            obj.set_text("취미");
            obj.set_font("20px/normal \"Segoe UI\",\"Malgun Gothic\"");
            this.div00.addChild(obj.name, obj);

            obj = new MultiCombo("MultiCombo00","821","112","270","74",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("19");
            obj.set_innerdataset("ds_hobby");
            obj.set_datacolumn("NAME");
            obj.set_codecolumn("CODE");
            obj.set_text("MultiCombo00");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_00_00_00_00_00","723","223","130","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("20");
            obj.set_text("보유기술");
            obj.set_font("20px/normal \"Segoe UI\",\"Malgun Gothic\"");
            this.div00.addChild(obj.name, obj);

            obj = new CheckBoxSet("CheckBoxSet01","821","211","306","85",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("21");
            obj.set_innerdataset("ds_skill");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_rowcount("2");
            obj.set_rtl("false");
            this.div00.addChild(obj.name, obj);

            obj = new Div("divSearch","60","108","1154","69",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","21","22","95","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("부서");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtDeptCode","63","13","113","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtDeptName","169","13","166","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnPopupDept","126","13","47","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_Find");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","365","18","106","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("이름");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edt01","409","15","230","37",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta02","698","18","109","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("성별");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("rdo00","752","7","339","52",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("1");
            obj.set_tabstop("false");
            var divSearch_form_rdo00_innerdataset = new nexacro.NormalDataset("divSearch_form_rdo00_innerdataset", obj);
            divSearch_form_rdo00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "A","datacolumn" : "전체"},{"codecolumn" : "M","datacolumn" : "남자"},{"codecolumn" : "F","datacolumn" : "여자"}]});
            obj.set_innerdataset(divSearch_form_rdo00_innerdataset);
            this.divSearch.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div00.form.edt00","value","ds_emp","EMP_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div00.form.msk00","value","ds_emp","EMP_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div00.form.msk02","value","ds_emp","SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div00.form.chk00","value","ds_emp","MARRIED");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div00.form.cal00","value","ds_emp","HIRE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div00.form.txt00","value","ds_emp","MEMO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div00.form.edt00","background","ds_emp","MEMO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div00.form.cbo00","value","ds_emp","DEPT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div00.form.lst00","value","ds_emp","POSITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div00.form.rdo00","value","ds_emp","GENDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div00.form.MultiCombo00","value","ds_emp","HOBBY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div00.form.CheckBoxSet01","value","ds_emp","SKILL");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Work_Emp.xfdl", function() {
        this.fn_gender=function(arg)
        {
        	if(arg=="M"){
        		return "남자";
        	}
        	else{
        		return "여자";
        	}
        }

        this.fv_corp="KR";




        this.divSearch_btnPopupDept_onclick = function(obj,e)
        {
        	var objCF=new ChildFrame("popupDept",0,0,400,500);
        //                   이름    좌표 너비,높이
        	objCF.formurl="Work::Work_PopupDept.xfdl";
        	objCF.openalign="center middle";
        	objCF.dragmovetype="all";
        	objCF.showtitlebar=false;
        	var objParam={pTitle:"부서 검색창",
        				  pValue:"ABC"};
        //팝업을 띄우는 방식은 2개 모델로 띄우거나 모델 리스로 띄우거나
        //모달로 띄무면 끌떄까지 부모창에 접근 X 리스는 가능
        	objCF.showModal(this.getOwnerFrame(),objParam,this,"fnPopupCallback");
        //                   부모프레임,원하는 값의 변수       콜백함수

        //스크립트는 기달리지 않아서 팝업에 값이 돌아올곳이 없다-> 콜백 함수를 미리 선언
        };

        this.fnPopupCallback=function(sPopupId,sReturn)
        {

        	if(sReturn==undefined) return;

        	if(sPopupId=="popupDept")
        	{
        		var sCode=sReturn.split(":")[0];
        		var sName=sReturn.split(":")[1];
        		this.divSearch.form.edtDeptCode.value=sCode;
        		this.divSearch.form.edtDeptName.value=sName;
        		//trace(sCode+"==="+sName);
        	}

        };




        //사원 데이터 조회
        this.btnSearch_onclick = function(obj,e)
        {
        	var sDeptCode= this.divSearch.form.edtDeptCode.value;
        	var sEmpName = this.divSearch.form.edt01.value;

        	this.transaction("svcGetEmp"//아이디
        					 ,"SvcUrl::edu/edupack24_jsp/select_emp.jsp"// EduUrlLocal::selecr_emp.jsp
        					 ,""//화면 데이터-->서버 전달 저장 처리 할 때 사용
        					 ,"ds_emp=out_emp"//서버에서 전달되는 데이터를 화면에서 받을때 사용 조화사용
        				 	 ,"deptCode="+ sDeptCode + " empName=" + nexacro.wrapQuote(sEmpName)//서버로 전달한 변수
        					 ,"fnCallback");
        					/* "key1=value1 key2=value2 key3=value3"//d이런식으로 서버로 데이터를 전달한다*/
        					//띄어쓰기 때문에 nexacro.wrapQuote로 한번 감싸줘야 된다
        	//필수 인자가 6개 아이디(중복X),
        };

        this.fnCallback=function(svcId,errCD,errMsg){
        	if(errCD<0){
        	alert("에러"+errMSG);
        	return;
        	}
        	if(svcId=="svcGetEmp"){
        		alert(this.ds_emp.getRowCount()+"건 조회되었습니다.");
        	}
        	else if(svcId=="svcSaveEmp"){
        		alert("저장되셨습니다!");
        	}
        	else if(svcId=="svcOnloadEmp"){
        		this.btnSearch_onclick();
        	}
        };


        this.btnAdd_onclick = function(obj,e)
        {
        	var nRow=this.ds_emp.addRow();
        	this.ds_emp.setColumn(nRow,"HIRE_DATE","20250704");
        	//몇번째 무슨 컬럼에 내영
        };//추가

        this.btnDelete_onclick = function(obj,e)
        {
        	this.ds_emp.deleteRow(this.ds_emp.rowposition);
        };//삭제

        this.btnSave_onclick = function(obj,e)
        {
        	var sName="홍 길동";
        	this.transaction("svcSaveEmp",
        					 "SvcUrl::edu/edupack24_jsp/save_emp.jsp",
        					 "in_emp=ds_emp:u", //"in_ab=ds_dept",//서버로 전달할 데이터셋 구분자 space 또 있으면 space 한번더
        					 //:u를 이용하면 데이터 수정한 것만 넘겨서 효율적이다
        					 "",//"ds_emp=our_emp ds_dept=out_22",
        					 "in_var1="+nexacro.wrapQuote(sName)+" in_var2=ABC",
        					 "fnCallback");
        };//저장

        this.Work_Emp_onload = function(obj,e)
        {
        		this.transaction("svcOnloadEmp",
        					 "SvcUrl::edu/edupack24_jsp/select_code.jsp",
        					 "",
        					 "ds_dept=out_dept ds_pos=out_pos ds_skill=out_skill ds_hobby=out_hobby",
        					 "",
        					 "fnCallback");
        };

        this.divSearch_rdo00_onitemchanged = function(obj,e)
        {
        	var sValue=this.divSearch.form.rdo00.value;//obj.value;


        // 	if (sValue=='A')
        // 	{
        // 		this.ds_emp.filter("");
        // 	}
        // 	else
        // 	{
        // 		this.ds_emp.filter("GENDER=='"+sValue+"'");
        // 	}
        //

        	if (sValue=="A")
        	{
        		this.ds_emp.filter("");
        	}
        	else
        	{
        		this.ds_emp.filter("GENDER=='"+e.postvalue+"'");
        	}

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Work_Emp_onload,this);
            this.sta00.addEventHandler("onclick",this.sta00_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
            this.btnDelete.addEventHandler("onclick",this.btnDelete_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.div00.form.sta00_00.addEventHandler("onclick",this.div00_sta00_00_onclick,this);
            this.div00.form.msk00.addEventHandler("onchanged",this.div00_msk00_onchanged,this);
            this.div00.form.sta00_00_00.addEventHandler("onclick",this.div00_sta00_00_00_onclick,this);
            this.div00.form.sta00_00_00_00.addEventHandler("onclick",this.div00_sta00_00_00_00_onclick,this);
            this.div00.form.txt00.addEventHandler("onchanged",this.div00_txt00_onchanged,this);
            this.div00.form.sta00_01_00_00.addEventHandler("onclick",this.div00_sta00_01_00_00_onclick,this);
            this.div00.form.sta00_01_00_00_00_00.addEventHandler("onclick",this.div00_sta00_01_00_00_00_00_onclick,this);
            this.div00.form.rdo00.addEventHandler("onitemchanged",this.div00_rdo00_onitemchanged,this);
            this.div00.form.sta00_01_00_00_00_00_00.addEventHandler("onclick",this.div00_sta00_01_00_00_00_00_onclick,this);
            this.div00.form.sta00_01_00_00_00_00_00_00.addEventHandler("onclick",this.div00_sta00_01_00_00_00_00_onclick,this);
            this.divSearch.form.btnPopupDept.addEventHandler("onclick",this.divSearch_btnPopupDept_onclick,this);
            this.divSearch.form.rdo00.addEventHandler("onitemchanged",this.divSearch_rdo00_onitemchanged,this);
        };
        this.loadIncludeScript("Work_Emp.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
