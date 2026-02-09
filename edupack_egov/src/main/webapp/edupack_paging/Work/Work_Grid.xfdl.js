(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Work_Grid");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_emp", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMP_NAME","type" : "STRING","size" : "50"},{"id" : "EMP_ID","type" : "STRING","size" : "10"},{"id" : "DEPT_CODE","type" : "STRING","size" : "256"},{"id" : "POSITION","type" : "STRING","size" : "10"},{"id" : "HIRE_DATE","type" : "DATE","size" : "10"},{"id" : "SALARY","type" : "INT","size" : "10"},{"id" : "GENDER","type" : "STRING","size" : "256"},{"id" : "MARRIED","type" : "STRING","size" : "256"},{"id" : "SKILL","type" : "STRING","size" : "256"},{"id" : "HOBBY","type" : "STRING","size" : "256"},{"id" : "MEMO","type" : "STRING","size" : "256"}]},"Rows" : [{"EMP_NAME" : "Melon","EMP_ID" : "KR010","POSITION" : "10","HIRE_DATE" : "20071001","SALARY" : "9000","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "01,05","DEPT_CODE" : "10","MEMO" : "aqua"},{"EMP_NAME" : "Jackson","EMP_ID" : "US050","POSITION" : "60","HIRE_DATE" : "20091021","SALARY" : "6000","GENDER" : "M","MARRIED" : "false","SKILL" : "11,03,13","HOBBY" : "09,14","DEPT_CODE" : "20","MEMO" : "gold"},{"EMP_NAME" : "Jennie","EMP_ID" : "KR240","POSITION" : "50","HIRE_DATE" : "20110508","SALARY" : "7000","GENDER" : "F","MARRIED" : "true","SKILL" : "01,06","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "greenyellow"},{"EMP_NAME" : "Dennis ","EMP_ID" : "JP150","POSITION" : "20","HIRE_DATE" : "20091021","SALARY" : "5000","GENDER" : "M","MARRIED" : "false","SKILL" : "09,11","HOBBY" : "07,06,05","DEPT_CODE" : "30","MEMO" : "khaki"},{"EMP_NAME" : "Andrew","EMP_ID" : "US020","POSITION" : "60","HIRE_DATE" : "20160602","SALARY" : "","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,13","DEPT_CODE" : "40","MEMO" : "lightpink"},{"EMP_NAME" : "Jungkook","EMP_ID" : "KR200","POSITION" : "60","HIRE_DATE" : "20120304","SALARY" : "7000","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,14","DEPT_CODE" : "50","MEMO" : "orange"},{"EMP_NAME" : "Adam","EMP_ID" : "JP230","POSITION" : "50","HIRE_DATE" : "20110928","SALARY" : "","GENDER" : "M","MARRIED" : "true","SKILL" : "11,03,13","HOBBY" : "09,15","DEPT_CODE" : "30","MEMO" : "silver"},{"EMP_NAME" : "JiYoung","EMP_ID" : "KR080","POSITION" : "50","HIRE_DATE" : "20131120","SALARY" : "8500","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "violet"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dstree", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "ORG_NAME","type" : "STRING","size" : "256"},{"id" : "LEVEL","type" : "STRING","size" : "256"},{"id" : "POSITION","type" : "STRING","size" : "256"},{"id" : "PHONE_NO","type" : "STRING","size" : "256"},{"id" : "E_MAIL","type" : "STRING","size" : "256"},{"id" : "TREE_STATE","type" : "STRING","size" : "256"}]},"Rows" : [{"ORG_NAME" : "TOBESOFT","LEVEL" : "0","TREE_STATE" : "1"},{"ORG_NAME" : "Korea Corporation","LEVEL" : "1","TREE_STATE" : "1"},{"ORG_NAME" : "Joseph","LEVEL" : "2","POSITION" : "Chairman","PHONE_NO" : "0105339755","E_MAIL" : "Joseph@nexacro.com","TREE_STATE" : "1"},{"ORG_NAME" : "Management Group","LEVEL" : "2","TREE_STATE" : "1"},{"ORG_NAME" : "Anne","LEVEL" : "3","POSITION" : "Division Manager","PHONE_NO" : "0107401829","E_MAIL" : "Anne@nexacro.com","TREE_STATE" : "3"},{"ORG_NAME" : "Education Team","LEVEL" : "3","TREE_STATE" : "0"},{"ORG_NAME" : "John ","LEVEL" : "4","POSITION" : "Assistant Manager","PHONE_NO" : "0104293599","E_MAIL" : "John@nexacro.com","TREE_STATE" : "3"},{"ORG_NAME" : "Jackson","LEVEL" : "4","POSITION" : "Supervisor","PHONE_NO" : "0107726763","E_MAIL" : "Jackson@nexacro.com","TREE_STATE" : "3"},{"ORG_NAME" : "Adam","LEVEL" : "4","POSITION" : "Supervisor","PHONE_NO" : "0107314011","E_MAIL" : "Adamr@nexacro.com","TREE_STATE" : "3"},{"ORG_NAME" : "Melon","LEVEL" : "4","POSITION" : "Officer","PHONE_NO" : "0104316461","E_MAIL" : "Melon@nexacro.com","TREE_STATE" : "3"},{"ORG_NAME" : "Kate ","LEVEL" : "4","POSITION" : "Supervisor","PHONE_NO" : "0102320795","E_MAIL" : "Kate@nexacro.com","TREE_STATE" : "3"},{"ORG_NAME" : "Sales Team","LEVEL" : "3","TREE_STATE" : "1"},{"ORG_NAME" : "Bts","LEVEL" : "4","POSITION" : "Assistant Manager","PHONE_NO" : "0106348086","E_MAIL" : "Bts@nexacro.com","TREE_STATE" : "3"},{"ORG_NAME" : "Andrew ","LEVEL" : "4","POSITION" : "Department Manager","PHONE_NO" : "0101251107","E_MAIL" : "Andrew@nexacro.com"},{"ORG_NAME" : "Belle","LEVEL" : "4","POSITION" : "Assistant Manager","PHONE_NO" : "0104457429","E_MAIL" : "Belle@nexacro.com"},{"ORG_NAME" : "Elsa","LEVEL" : "4","POSITION" : "Assistant Manager","PHONE_NO" : "0109825316","E_MAIL" : "Ann@nexacro.com"},{"ORG_NAME" : "Marketing Team","LEVEL" : "3","POSITION" : "Supervisor","PHONE_NO" : "0103173402","E_MAIL" : "Lyle@nexacro.com"},{"ORG_NAME" : "Kein ","LEVEL" : "4","POSITION" : "Officer","PHONE_NO" : "0104643738","E_MAIL" : "Kein@nexacro.com"},{"ORG_NAME" : "Ivy","LEVEL" : "4","POSITION" : "Department Manager","PHONE_NO" : "0102989094","E_MAIL" : "Ivy@nexacro.com"},{"ORG_NAME" : "Kara","LEVEL" : "4","POSITION" : "Officer","PHONE_NO" : "0107956572","E_MAIL" : "Kara@nexacro.com"},{"ORG_NAME" : "Twice","LEVEL" : "4","POSITION" : "Assistant Manager","PHONE_NO" : "0107903476","E_MAIL" : "Twice@nexacro.com"},{"ORG_NAME" : "Japen Corporation","LEVEL" : "1","POSITION" : "Assistant Manager","PHONE_NO" : "0107903476","E_MAIL" : "Isaiah@nexacro.com"},{"ORG_NAME" : "Oleg","LEVEL" : "2","POSITION" : "Chairman","PHONE_NO" : "0105339755","E_MAIL" : "Oleg@nexacro.com"},{"ORG_NAME" : "Management Group","LEVEL" : "2"},{"ORG_NAME" : "Aladdin","LEVEL" : "3","POSITION" : "Division Manager","PHONE_NO" : "0107401829","E_MAIL" : "Aladdin@nexacro.com"},{"ORG_NAME" : "Education Team","LEVEL" : "3","POSITION" : "Assistant Manager","PHONE_NO" : "0106851530","E_MAIL" : "Evelyn@nexacro.com"},{"ORG_NAME" : "Cameron","LEVEL" : "4","POSITION" : "Assistant Manager","PHONE_NO" : "0104293599","E_MAIL" : "Cameron@nexacro.com"},{"ORG_NAME" : "Duncan","LEVEL" : "4","POSITION" : "Supervisor","PHONE_NO" : "0107726763","E_MAIL" : "Duncan@nexacro.com"},{"ORG_NAME" : "September","LEVEL" : "4","POSITION" : "Supervisor","PHONE_NO" : "0107314011","E_MAIL" : "September@nexacro.com"},{"ORG_NAME" : "Daquan","LEVEL" : "4","POSITION" : "Officer","PHONE_NO" : "0104316461","E_MAIL" : "Daquan@nexacro.com"},{"ORG_NAME" : "Channing","LEVEL" : "4","POSITION" : "Supervisor","PHONE_NO" : "0102320795","E_MAIL" : "Channing@nexacro.com"},{"ORG_NAME" : "Sales Team","LEVEL" : "3","POSITION" : "Officer","PHONE_NO" : "0107642474","E_MAIL" : "Lenore@nexacro.com"},{"ORG_NAME" : "Curran","LEVEL" : "4","POSITION" : "Assistant Manager","PHONE_NO" : "0106348086","E_MAIL" : "Curran@nexacro.com"},{"ORG_NAME" : "Idona","LEVEL" : "4","POSITION" : "Department Manager","PHONE_NO" : "0101251107","E_MAIL" : "Idona@nexacro.com"},{"ORG_NAME" : "Sopoline","LEVEL" : "4","POSITION" : "Assistant Manager","PHONE_NO" : "0104457429","E_MAIL" : "Sopoline@nexacro.com"},{"ORG_NAME" : "Cedric","LEVEL" : "4","POSITION" : "Assistant Manager","PHONE_NO" : "0109825316","E_MAIL" : "Cedric@nexacro.com"},{"ORG_NAME" : "Lyle","LEVEL" : "4","POSITION" : "Supervisor","PHONE_NO" : "0103173402","E_MAIL" : "Lyle@nexacro.com"},{"ORG_NAME" : "Marketing Team","LEVEL" : "3"},{"ORG_NAME" : "Adam","LEVEL" : "4","POSITION" : "Officer","PHONE_NO" : "0104643738","E_MAIL" : "Adam@nexacro.com"},{"ORG_NAME" : "Hyatt","LEVEL" : "4","POSITION" : "Department Manager","PHONE_NO" : "0102989094","E_MAIL" : "Hyatt@nexacro.com"},{"ORG_NAME" : "Melanie","LEVEL" : "4","POSITION" : "Officer","PHONE_NO" : "0107956572","E_MAIL" : "Melanie@nexacro.com"},{"ORG_NAME" : "Isaiah","LEVEL" : "4","POSITION" : "Assistant Manager","PHONE_NO" : "0107903476","E_MAIL" : "Isaiah@nexacro.com"},{"ORG_NAME" : "Dakota","LEVEL" : "4","POSITION" : "Officer","PHONE_NO" : "0108938528","E_MAIL" : "Dakota@nexacro.com"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dssum", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "CORP_NAME","type" : "STRING","size" : "256"},{"id" : "EMP_ID","type" : "STRING","size" : "256"},{"id" : "EMP_NAME","type" : "STRING","size" : "256"},{"id" : "DEPT_NAME","type" : "STRING","size" : "256"},{"id" : "SALARY","type" : "INT","size" : "256","prop" : "SUM"},{"id" : "BONUS","type" : "INT","size" : "256"}]},"Rows" : [{"EMP_ID" : "KR010","EMP_NAME" : "Melon","DEPT_NAME" : "Education Team","SALARY" : "9000","BONUS" : "5000","CORP_NAME" : "Korea corporation"},{"EMP_ID" : "US050","EMP_NAME" : "Jackson","DEPT_NAME" : "Education Team","SALARY" : "6000","BONUS" : "1200","CORP_NAME" : "America corporation"},{"EMP_ID" : "KR240","EMP_NAME" : "Jennie","DEPT_NAME" : "Education Team","SALARY" : "7000","BONUS" : "2000","CORP_NAME" : "Korea corporation"},{"EMP_ID" : "JP150","EMP_NAME" : "Dennis?","DEPT_NAME" : "Support Team","SALARY" : "5000","BONUS" : "3000","CORP_NAME" : "Japan corporation"},{"EMP_ID" : "US020","EMP_NAME" : "Andrew","DEPT_NAME" : "Support Team","SALARY" : "6500","BONUS" : "800","CORP_NAME" : "America corporation"},{"EMP_ID" : "KR200","EMP_NAME" : "Jungkook","DEPT_NAME" : "Sales Team","SALARY" : "7000","BONUS" : "900","CORP_NAME" : "Korea corporation"},{"EMP_ID" : "JP230","EMP_NAME" : "Adam","DEPT_NAME" : "Sales Team","SALARY" : "8000","BONUS" : "1000","CORP_NAME" : "Japan corporation"},{"EMP_ID" : "KR080","EMP_NAME" : "JiYoung","DEPT_NAME" : "Support Team","SALARY" : "8500","BONUS" : "4000","CORP_NAME" : "Korea corporation"},{"EMP_ID" : "KR140","EMP_NAME" : "Kate","DEPT_NAME" : "Sales Team","SALARY" : "7300","BONUS" : "3000","CORP_NAME" : "Korea corporation"},{"EMP_ID" : "US020","EMP_NAME" : "Max","DEPT_NAME" : "Sales Team","SALARY" : "3500","BONUS" : "3000","CORP_NAME" : "America corporation"},{"EMP_ID" : "JP020","EMP_NAME" : "Ted","DEPT_NAME" : "Support Team","SALARY" : "6800","BONUS" : "3000","CORP_NAME" : "Japan corporation"},{"EMP_ID" : "KR030","EMP_NAME" : "Adam","DEPT_NAME" : "Education Team","SALARY" : "8600","BONUS" : "2000","CORP_NAME" : "Korea corporation"},{"EMP_ID" : "KR230","EMP_NAME" : "Belle","DEPT_NAME" : "Support Team","SALARY" : "7700","BONUS" : "5000","CORP_NAME" : "Korea corporation"},{"EMP_ID" : "JP040","EMP_NAME" : "Lexy","DEPT_NAME" : "Support Team","SALARY" : "9000","BONUS" : "2000","CORP_NAME" : "Japan corporation"},{"EMP_ID" : "JP050","EMP_NAME" : "Lucy","DEPT_NAME" : "Sales Team","SALARY" : "8000","BONUS" : "3000","CORP_NAME" : "Japan corporation"},{"EMP_ID" : "KR110","EMP_NAME" : "Kein","DEPT_NAME" : "Support Team","SALARY" : "9000","BONUS" : "1200","CORP_NAME" : "Korea corporation"},{"EMP_ID" : "JP110","EMP_NAME" : "Juliana","DEPT_NAME" : "Education Team","SALARY" : "7000","BONUS" : "800","CORP_NAME" : "Japan corporation"},{"EMP_ID" : "KR130","EMP_NAME" : "Kara","DEPT_NAME" : "Sales Team","SALARY" : "5000","BONUS" : "900","CORP_NAME" : "Korea corporation"},{"EMP_ID" : "JP030","EMP_NAME" : "Maria","DEPT_NAME" : "Support Team","SALARY" : "6500","BONUS" : "4000","CORP_NAME" : "Japan corporation"},{"EMP_ID" : "JP010","EMP_NAME" : "Eddy","DEPT_NAME" : "Education Team","SALARY" : "7000","BONUS" : "3000","CORP_NAME" : "Japan corporation"},{"EMP_ID" : "JP120","EMP_NAME" : "Sarah","DEPT_NAME" : "Sales Team","SALARY" : "8000","BONUS" : "5000","CORP_NAME" : "Japan corporation"},{"EMP_ID" : "KR120","EMP_NAME" : "Ivy","DEPT_NAME" : "Sales Team","SALARY" : "8500","BONUS" : "3000","CORP_NAME" : "Korea corporation"},{"EMP_ID" : "US030","EMP_NAME" : "Noel","DEPT_NAME" : "Sales Team","SALARY" : "7300","BONUS" : "400","CORP_NAME" : "America corporation"},{"EMP_ID" : "US240","EMP_NAME" : "Arnold","DEPT_NAME" : "Support Team","SALARY" : "5600","BONUS" : "3000","CORP_NAME" : "America corporation"},{"EMP_ID" : "US230","EMP_NAME" : "Alex","DEPT_NAME" : "Education Team","SALARY" : "3500","BONUS" : "1200","CORP_NAME" : "America corporation"},{"EMP_ID" : "US580","EMP_NAME" : "John","DEPT_NAME" : "Sales Team","SALARY" : "6000","BONUS" : "800","CORP_NAME" : "America corporation"},{"EMP_ID" : "US050","EMP_NAME" : "Steven","DEPT_NAME" : "Education Team","SALARY" : "8000","BONUS" : "900","CORP_NAME" : "America corporation"},{"EMP_ID" : "JP140","EMP_NAME" : "Donald","DEPT_NAME" : "Education Team","SALARY" : "5000","BONUS" : "1000","CORP_NAME" : "Japan corporation"},{"EMP_ID" : "US040","EMP_NAME" : "Ray","DEPT_NAME" : "Support Team","SALARY" : "9000","BONUS" : "3000","CORP_NAME" : "America corporation"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00","24","27","488","57",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Grid 기능");
            obj.set_font("24pt \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","21","99","619","219",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_emp");
            obj.set_autofittype("none");
            obj.set_cellclickbound("cell");
            obj.set_cellmovingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"EMP_NAME\"/><Cell col=\"1\" text=\"EMP_ID\"/><Cell col=\"2\" text=\"DEPT_CODE\"/><Cell col=\"3\" text=\"POSITION\"/><Cell col=\"4\" text=\"HIRE_DATE\"/><Cell col=\"5\" text=\"SALARY\"/><Cell col=\"6\" text=\"GENDER\"/><Cell col=\"7\" text=\"MARRIED\"/><Cell col=\"8\" text=\"SKILL\"/><Cell col=\"9\" text=\"HOBBY\"/><Cell col=\"10\" text=\"MEMO\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_NAME\"/><Cell col=\"1\" text=\"bind:EMP_ID\"/><Cell col=\"2\" text=\"bind:DEPT_CODE\"/><Cell col=\"3\" text=\"bind:POSITION\"/><Cell col=\"4\" text=\"bind:HIRE_DATE\"/><Cell col=\"5\" text=\"bind:SALARY\"/><Cell col=\"6\" text=\"bind:GENDER\"/><Cell col=\"7\" text=\"bind:MARRIED\"/><Cell col=\"8\" text=\"bind:SKILL\"/><Cell col=\"9\" text=\"bind:HOBBY\"/><Cell col=\"10\" text=\"bind:MEMO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00_00","650","99","611","219",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_emp");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"EMP_NAME\"/><Cell col=\"1\" text=\"EMP_ID\"/><Cell col=\"2\" text=\"DEPT_CODE\"/><Cell col=\"3\" text=\"POSITION\"/><Cell col=\"4\" rowspan=\"2\" text=\"HIRE_DATE\"/><Cell col=\"5\" rowspan=\"2\" text=\"SALARY\"/><Cell col=\"6\" rowspan=\"2\" text=\"GENDER\"/><Cell row=\"1\" text=\"MARRIED\"/><Cell row=\"1\" col=\"1\" text=\"SKILL\"/><Cell row=\"1\" col=\"2\" text=\"HOBBY\"/><Cell row=\"1\" col=\"3\" text=\"MEMO\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_NAME\"/><Cell col=\"1\" text=\"bind:EMP_ID\"/><Cell col=\"2\" text=\"bind:DEPT_CODE\"/><Cell col=\"3\" text=\"bind:POSITION\"/><Cell col=\"4\" rowspan=\"2\" text=\"bind:HIRE_DATE\"/><Cell col=\"5\" rowspan=\"2\" text=\"bind:SALARY\"/><Cell col=\"6\" rowspan=\"2\" text=\"bind:GENDER\"/><Cell row=\"1\" text=\"bind:MARRIED\"/><Cell row=\"1\" col=\"1\" text=\"bind:SKILL\"/><Cell row=\"1\" col=\"2\" text=\"bind:HOBBY\"/><Cell row=\"1\" col=\"3\" text=\"bind:MEMO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","24","360","436","60",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("cell에 바인드 되어있는 Dataset 컬럼 구하기");
            obj.set_font("14pt \"Arial\"");
            obj.set_borderRadius("10000px");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","24","450","196","60",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("체크박스 컬럼 추가");
            obj.set_font("14pt \"Arial\"");
            obj.set_borderRadius("10000px");
            this.addChild(obj.name, obj);

            obj = new Button("btn02","264","450","196","60",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("체크박스 모양 변경");
            obj.set_font("14pt \"Arial\"");
            obj.set_borderRadius("10000px");
            this.addChild(obj.name, obj);

            obj = new Button("btn03","24","530","196","60",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("칼럼 사이즈 변경");
            obj.set_font("14pt \"Arial\"");
            obj.set_borderRadius("10000px");
            this.addChild(obj.name, obj);

            obj = new Button("btn04","264","530","196","60",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("포멧 가져오기");
            obj.set_font("14pt \"Arial\"");
            obj.set_borderRadius("10000px");
            this.addChild(obj.name, obj);

            obj = new Button("btn05","28","620","196","60",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("원본 포멧 가져오기");
            obj.set_font("14pt \"Arial\"");
            obj.set_borderRadius("10000px");
            this.addChild(obj.name, obj);

            obj = new Grid("grd01","70","42","780","616",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_positionstep("1");
            obj.set_binddataset("dstree");
            obj.set_autofittype("col");
            obj.set_treeasynctoggle("false");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:ORG_NAME\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:LEVEL\"/><Cell col=\"1\" text=\"bind:LEVEL\"/><Cell col=\"2\" text=\"bind:POSITION\"/><Cell col=\"3\" text=\"bind:PHONE_NO\"/><Cell col=\"4\" text=\"bind:E_MAIL\"/><Cell col=\"5\" text=\"bind:TREE_STATE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd02","86","60","658","593",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_positionstep("2");
            obj.set_binddataset("dssum");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"198\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"48\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"CORP_NAME\"/><Cell col=\"1\" text=\"DEPT_NAME\"/><Cell col=\"2\" text=\"EMP_ID\"/><Cell col=\"3\" text=\"EMP_NAME\"/><Cell col=\"4\" text=\"SALARY\"/><Cell col=\"5\" text=\"BONUS\"/><Cell col=\"6\"/></Band><Band id=\"body\"><Cell text=\"bind:CORP_NAME\" suppress=\"1\" suppressalign=\"middle\"/><Cell col=\"1\" text=\"bind:DEPT_NAME\" suppress=\"2\" subsumtext=\"expr:dataset.getRowLevel(currow)==0?DEPT_NAME:(dataset.getRowLevel(currow)==1?DEPT_NAME+&quot; 소계&quot;:&quot;&quot;)\"/><Cell col=\"2\" text=\"bind:EMP_ID\" suppress=\"3\"/><Cell col=\"3\" text=\"bind:EMP_NAME\" suppress=\"4\"/><Cell col=\"4\" text=\"bind:SALARY\" suppress=\"5\"/><Cell col=\"5\" text=\"bind:BONUS\" suppress=\"6\"/><Cell col=\"6\" text=\"expr:dataset.getRowLevel(currow)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn06","762","62","251","63",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("데이터 그룹핑");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Button("btn07","760","150","251","63",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("평균핑");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_stepcount("3");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Work_Grid.xfdl", function() {

        this.Grid_oncellclick = function(obj,e)
        {
        	trace("col="+e.col+":::cell="+e.cell);
        //	if(e.cell==5){
        //}//컬과 셀을 구분해서 사용해라
        	var sText=this.grd00.getCellProperty("body",e.cell,"text");//bind:EMP_NAME
        	var arrCol=sText.split(":");//arrCol[0]=bind,arrCol[1]=EMP_NAME
        	trace("칼럼 ID: "+arrCol[1]);
        	//많이 사용 내가 클릭한 셀에 데이터 셋에 text 속성값을 알고 싶다
        };


        this.grd00_onheadclick = function(obj,e)
        {
        	if(e.cell==0){
        		//전체선택
        		this.ds_emp.enableevent=false;
        		var sHeadValue=obj.getHeadValue(0);
        		for(var i=0;i<this.ds_emp.rowcount;i++){
        			this.ds_emp.setColumn(i,"COL_CHK",sHeadValue);
        		}
        		this.ds_emp.enableevent=true;
        	}
        	else{
        		var sText=this.grd00.getCellProperty("body",e.cell,"text");//bind:EMP_NAME
        		var arrCol=sText.split(":");//arrCol[0]=bind,arrCol[1]=EMP_NAME
        		trace("칼럼 ID: "+arrCol[1]);
        		var sDs=this.grd00.binddataset;
        		var objDs=this.grd00.getBindDataset();
        		objDs.keystring="S:+"+arrCol[1];
        	}
        };

        this.btn01_onclick = function(obj,e)
        {
        	this.ds_emp.addColumn("COL_CHK","STRING");
        	for(var i=0;i<this.ds_emp.rowcount;i++){
        		this.ds_emp.setColumn(i,"COL_CHK","0");
        	}
        	this.grd00.insertContentsCol("body",0);
        	this.grd00.setCellProperty("body",0,"text","bind:COL_CHK");
        };

        this.btn02_onclick = function(obj,e)
        {
        	this.grd00.setCellProperty("head",0,"displaytype","checkboxcontrol");
        	this.grd00.setCellProperty("head",0,"edittype","checkbox");
        	this.grd00.setCellProperty("body",0,"displaytype","checkboxcontrol");
        	this.grd00.setCellProperty("body",0,"edittype","checkbox");

        };

        this.btn03_onclick = function(obj,e)
        {
        	this.grd00.setFormatColProperty(2,"size",0);//컬럼의 인덱스,속성, 바뀔 값
        	//로그인 하는 사람마다 다르게 보일 수 있다.

        };

        this.btn04_onclick = function(obj,e)
        {
        	var sFormat=this.grd00.getCurFormatString();
        	this.grd00_00.formats="<Formats>"+sFormat+"</Formats>";
        	trace(sFormat);
        };

        this.btn05_onclick = function(obj,e)
        {
        	var sFormat=this.grd00.getCurFormatString(true);
        	this.grd00_00.formats="<Formats>="+sFormat+"</Formats>"
        };

        this.grd01_oncelldblclick = function(obj,e)
        {
        	var nGridRow= obj.getTreeRow(e.row);
        	//더블클릭한 셀의 로우 인덱스를 알 수 있다 but 일반 그리는 처럼 오루 인덱스가 항상 맞지 않아서 gridrow로 변환시킨다
        	var nStatus=obj.getTreeStatus(nGridRow);
        	if(nStatus==3)return;

        	nStatus=(nStatus==0?1:0);
        	obj.setTreeStatus(nGridRow,nStatus);
        };

        this.btn06_onclick = function(obj,e)
        {
        	this.dssum.keystring="G:-CORP_NAME,+DEPT_NAME";//-내림차순,+오름차순
        };


        this.btn07_onclick = function(obj,e)
        {
        	var objCol=this.dssum.getColumnInfo("SALARY");
        	objCol.prop="AVG";
        	this.dssum.updateSortGroup();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.grd00.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.grd00.addEventHandler("onheadclick",this.grd00_onheadclick,this);
            this.grd00_00.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
            this.btn03.addEventHandler("onclick",this.btn03_onclick,this);
            this.btn04.addEventHandler("onclick",this.btn04_onclick,this);
            this.btn05.addEventHandler("onclick",this.btn05_onclick,this);
            this.grd01.addEventHandler("oncelldblclick",this.grd01_oncelldblclick,this);
            this.btn06.addEventHandler("onclick",this.btn06_onclick,this);
            this.btn07.addEventHandler("onclick",this.btn07_onclick,this);
            this.ds_emp.addEventHandler("cancolumnchange",this.ds_emp_cancolumnchange,this);
            this.ds_emp.addEventHandler("oncolumnchanged",this.ds_emp_oncolumnchanged,this);
        };
        this.loadIncludeScript("Work_Grid.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
