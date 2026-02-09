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


            obj = new Dataset("ds_tree", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "ORG_NAME","type" : "STRING","size" : "256"},{"id" : "LEVEL","type" : "STRING","size" : "256"},{"id" : "POSITION","type" : "STRING","size" : "256"},{"id" : "PHONE_NO","type" : "STRING","size" : "256"},{"id" : "E_MAIL","type" : "STRING","size" : "256"},{"id" : "TREE_STATE","type" : "STRING","size" : "256"}]},"Rows" : [{"ORG_NAME" : "TOBESOFT","LEVEL" : "0","TREE_STATE" : "1"},{"ORG_NAME" : "Korea Corporation","LEVEL" : "1","TREE_STATE" : "1"},{"ORG_NAME" : "Joseph","LEVEL" : "2","POSITION" : "Chairman","PHONE_NO" : "0105339755","E_MAIL" : "Joseph@nexacro.com","TREE_STATE" : "1"},{"ORG_NAME" : "Management Group","LEVEL" : "2","TREE_STATE" : "1"},{"ORG_NAME" : "Anne","LEVEL" : "3","POSITION" : "Division Manager","PHONE_NO" : "0107401829","E_MAIL" : "Anne@nexacro.com","TREE_STATE" : "3"},{"ORG_NAME" : "Education Team","LEVEL" : "3","TREE_STATE" : "0"},{"ORG_NAME" : "John ","LEVEL" : "4","POSITION" : "Assistant Manager","PHONE_NO" : "0104293599","E_MAIL" : "John@nexacro.com","TREE_STATE" : "3"},{"ORG_NAME" : "Jackson","LEVEL" : "4","POSITION" : "Supervisor","PHONE_NO" : "0107726763","E_MAIL" : "Jackson@nexacro.com","TREE_STATE" : "3"},{"ORG_NAME" : "Adam","LEVEL" : "4","POSITION" : "Supervisor","PHONE_NO" : "0107314011","E_MAIL" : "Adamr@nexacro.com","TREE_STATE" : "3"},{"ORG_NAME" : "Melon","LEVEL" : "4","POSITION" : "Officer","PHONE_NO" : "0104316461","E_MAIL" : "Melon@nexacro.com","TREE_STATE" : "3"},{"ORG_NAME" : "Kate ","LEVEL" : "4","POSITION" : "Supervisor","PHONE_NO" : "0102320795","E_MAIL" : "Kate@nexacro.com","TREE_STATE" : "3"},{"ORG_NAME" : "Sales Team","LEVEL" : "3","TREE_STATE" : "1"},{"ORG_NAME" : "Bts","LEVEL" : "4","POSITION" : "Assistant Manager","PHONE_NO" : "0106348086","E_MAIL" : "Bts@nexacro.com","TREE_STATE" : "3"},{"ORG_NAME" : "Andrew ","LEVEL" : "4","POSITION" : "Department Manager","PHONE_NO" : "0101251107","E_MAIL" : "Andrew@nexacro.com"},{"ORG_NAME" : "Belle","LEVEL" : "4","POSITION" : "Assistant Manager","PHONE_NO" : "0104457429","E_MAIL" : "Belle@nexacro.com"},{"ORG_NAME" : "Elsa","LEVEL" : "4","POSITION" : "Assistant Manager","PHONE_NO" : "0109825316","E_MAIL" : "Ann@nexacro.com"},{"ORG_NAME" : "Marketing Team","LEVEL" : "3","POSITION" : "Supervisor","PHONE_NO" : "0103173402","E_MAIL" : "Lyle@nexacro.com"},{"ORG_NAME" : "Kein ","LEVEL" : "4","POSITION" : "Officer","PHONE_NO" : "0104643738","E_MAIL" : "Kein@nexacro.com"},{"ORG_NAME" : "Ivy","LEVEL" : "4","POSITION" : "Department Manager","PHONE_NO" : "0102989094","E_MAIL" : "Ivy@nexacro.com"},{"ORG_NAME" : "Kara","LEVEL" : "4","POSITION" : "Officer","PHONE_NO" : "0107956572","E_MAIL" : "Kara@nexacro.com"},{"ORG_NAME" : "Twice","LEVEL" : "4","POSITION" : "Assistant Manager","PHONE_NO" : "0107903476","E_MAIL" : "Twice@nexacro.com"},{"ORG_NAME" : "Japen Corporation","LEVEL" : "1","POSITION" : "Assistant Manager","PHONE_NO" : "0107903476","E_MAIL" : "Isaiah@nexacro.com"},{"ORG_NAME" : "Oleg","LEVEL" : "2","POSITION" : "Chairman","PHONE_NO" : "0105339755","E_MAIL" : "Oleg@nexacro.com"},{"ORG_NAME" : "Management Group","LEVEL" : "2"},{"ORG_NAME" : "Aladdin","LEVEL" : "3","POSITION" : "Division Manager","PHONE_NO" : "0107401829","E_MAIL" : "Aladdin@nexacro.com"},{"ORG_NAME" : "Education Team","LEVEL" : "3","POSITION" : "Assistant Manager","PHONE_NO" : "0106851530","E_MAIL" : "Evelyn@nexacro.com"},{"ORG_NAME" : "Cameron","LEVEL" : "4","POSITION" : "Assistant Manager","PHONE_NO" : "0104293599","E_MAIL" : "Cameron@nexacro.com"},{"ORG_NAME" : "Duncan","LEVEL" : "4","POSITION" : "Supervisor","PHONE_NO" : "0107726763","E_MAIL" : "Duncan@nexacro.com"},{"ORG_NAME" : "September","LEVEL" : "4","POSITION" : "Supervisor","PHONE_NO" : "0107314011","E_MAIL" : "September@nexacro.com"},{"ORG_NAME" : "Daquan","LEVEL" : "4","POSITION" : "Officer","PHONE_NO" : "0104316461","E_MAIL" : "Daquan@nexacro.com"},{"ORG_NAME" : "Channing","LEVEL" : "4","POSITION" : "Supervisor","PHONE_NO" : "0102320795","E_MAIL" : "Channing@nexacro.com"},{"ORG_NAME" : "Sales Team","LEVEL" : "3","POSITION" : "Officer","PHONE_NO" : "0107642474","E_MAIL" : "Lenore@nexacro.com"},{"ORG_NAME" : "Curran","LEVEL" : "4","POSITION" : "Assistant Manager","PHONE_NO" : "0106348086","E_MAIL" : "Curran@nexacro.com"},{"ORG_NAME" : "Idona","LEVEL" : "4","POSITION" : "Department Manager","PHONE_NO" : "0101251107","E_MAIL" : "Idona@nexacro.com"},{"ORG_NAME" : "Sopoline","LEVEL" : "4","POSITION" : "Assistant Manager","PHONE_NO" : "0104457429","E_MAIL" : "Sopoline@nexacro.com"},{"ORG_NAME" : "Cedric","LEVEL" : "4","POSITION" : "Assistant Manager","PHONE_NO" : "0109825316","E_MAIL" : "Cedric@nexacro.com"},{"ORG_NAME" : "Lyle","LEVEL" : "4","POSITION" : "Supervisor","PHONE_NO" : "0103173402","E_MAIL" : "Lyle@nexacro.com"},{"ORG_NAME" : "Marketing Team","LEVEL" : "3"},{"ORG_NAME" : "Adam","LEVEL" : "4","POSITION" : "Officer","PHONE_NO" : "0104643738","E_MAIL" : "Adam@nexacro.com"},{"ORG_NAME" : "Hyatt","LEVEL" : "4","POSITION" : "Department Manager","PHONE_NO" : "0102989094","E_MAIL" : "Hyatt@nexacro.com"},{"ORG_NAME" : "Melanie","LEVEL" : "4","POSITION" : "Officer","PHONE_NO" : "0107956572","E_MAIL" : "Melanie@nexacro.com"},{"ORG_NAME" : "Isaiah","LEVEL" : "4","POSITION" : "Assistant Manager","PHONE_NO" : "0107903476","E_MAIL" : "Isaiah@nexacro.com"},{"ORG_NAME" : "Dakota","LEVEL" : "4","POSITION" : "Officer","PHONE_NO" : "0108938528","E_MAIL" : "Dakota@nexacro.com"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sum", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "CORP_NAME","type" : "STRING","size" : "256"},{"id" : "EMP_ID","type" : "STRING","size" : "256"},{"id" : "EMP_NAME","type" : "STRING","size" : "256"},{"id" : "DEPT_NAME","type" : "STRING","size" : "256"},{"id" : "SALARY","type" : "INT","size" : "256","prop" : "SUM"},{"id" : "BONUS","type" : "INT","size" : "256"}]},"Rows" : [{"EMP_ID" : "KR010","EMP_NAME" : "Melon","DEPT_NAME" : "Education Team","SALARY" : "9000","BONUS" : "5000","CORP_NAME" : "Korea corporation"},{"EMP_ID" : "US050","EMP_NAME" : "Jackson","DEPT_NAME" : "Education Team","SALARY" : "6000","BONUS" : "1200","CORP_NAME" : "America corporation"},{"EMP_ID" : "KR240","EMP_NAME" : "Jennie","DEPT_NAME" : "Education Team","SALARY" : "7000","BONUS" : "2000","CORP_NAME" : "Korea corporation"},{"EMP_ID" : "JP150","EMP_NAME" : "Dennis?","DEPT_NAME" : "Support Team","SALARY" : "5000","BONUS" : "3000","CORP_NAME" : "Japan corporation"},{"EMP_ID" : "US020","EMP_NAME" : "Andrew","DEPT_NAME" : "Support Team","SALARY" : "6500","BONUS" : "800","CORP_NAME" : "America corporation"},{"EMP_ID" : "KR200","EMP_NAME" : "Jungkook","DEPT_NAME" : "Sales Team","SALARY" : "7000","BONUS" : "900","CORP_NAME" : "Korea corporation"},{"EMP_ID" : "JP230","EMP_NAME" : "Adam","DEPT_NAME" : "Sales Team","SALARY" : "8000","BONUS" : "1000","CORP_NAME" : "Japan corporation"},{"EMP_ID" : "KR080","EMP_NAME" : "JiYoung","DEPT_NAME" : "Support Team","SALARY" : "8500","BONUS" : "4000","CORP_NAME" : "Korea corporation"},{"EMP_ID" : "KR140","EMP_NAME" : "Kate","DEPT_NAME" : "Sales Team","SALARY" : "7300","BONUS" : "3000","CORP_NAME" : "Korea corporation"},{"EMP_ID" : "US020","EMP_NAME" : "Max","DEPT_NAME" : "Sales Team","SALARY" : "3500","BONUS" : "3000","CORP_NAME" : "America corporation"},{"EMP_ID" : "JP020","EMP_NAME" : "Ted","DEPT_NAME" : "Support Team","SALARY" : "6800","BONUS" : "3000","CORP_NAME" : "Japan corporation"},{"EMP_ID" : "KR030","EMP_NAME" : "Adam","DEPT_NAME" : "Education Team","SALARY" : "8600","BONUS" : "2000","CORP_NAME" : "Korea corporation"},{"EMP_ID" : "KR230","EMP_NAME" : "Belle","DEPT_NAME" : "Support Team","SALARY" : "7700","BONUS" : "5000","CORP_NAME" : "Korea corporation"},{"EMP_ID" : "JP040","EMP_NAME" : "Lexy","DEPT_NAME" : "Support Team","SALARY" : "9000","BONUS" : "2000","CORP_NAME" : "Japan corporation"},{"EMP_ID" : "JP050","EMP_NAME" : "Lucy","DEPT_NAME" : "Sales Team","SALARY" : "8000","BONUS" : "3000","CORP_NAME" : "Japan corporation"},{"EMP_ID" : "KR110","EMP_NAME" : "Kein","DEPT_NAME" : "Support Team","SALARY" : "9000","BONUS" : "1200","CORP_NAME" : "Korea corporation"},{"EMP_ID" : "JP110","EMP_NAME" : "Juliana","DEPT_NAME" : "Education Team","SALARY" : "7000","BONUS" : "800","CORP_NAME" : "Japan corporation"},{"EMP_ID" : "KR130","EMP_NAME" : "Kara","DEPT_NAME" : "Sales Team","SALARY" : "5000","BONUS" : "900","CORP_NAME" : "Korea corporation"},{"EMP_ID" : "JP030","EMP_NAME" : "Maria","DEPT_NAME" : "Support Team","SALARY" : "6500","BONUS" : "4000","CORP_NAME" : "Japan corporation"},{"EMP_ID" : "JP010","EMP_NAME" : "Eddy","DEPT_NAME" : "Education Team","SALARY" : "7000","BONUS" : "3000","CORP_NAME" : "Japan corporation"},{"EMP_ID" : "JP120","EMP_NAME" : "Sarah","DEPT_NAME" : "Sales Team","SALARY" : "8000","BONUS" : "5000","CORP_NAME" : "Japan corporation"},{"EMP_ID" : "KR120","EMP_NAME" : "Ivy","DEPT_NAME" : "Sales Team","SALARY" : "8500","BONUS" : "3000","CORP_NAME" : "Korea corporation"},{"EMP_ID" : "US030","EMP_NAME" : "Noel","DEPT_NAME" : "Sales Team","SALARY" : "7300","BONUS" : "400","CORP_NAME" : "America corporation"},{"EMP_ID" : "US240","EMP_NAME" : "Arnold","DEPT_NAME" : "Support Team","SALARY" : "5600","BONUS" : "3000","CORP_NAME" : "America corporation"},{"EMP_ID" : "US230","EMP_NAME" : "Alex","DEPT_NAME" : "Education Team","SALARY" : "3500","BONUS" : "1200","CORP_NAME" : "America corporation"},{"EMP_ID" : "US580","EMP_NAME" : "John","DEPT_NAME" : "Sales Team","SALARY" : "6000","BONUS" : "800","CORP_NAME" : "America corporation"},{"EMP_ID" : "US050","EMP_NAME" : "Steven","DEPT_NAME" : "Education Team","SALARY" : "8000","BONUS" : "900","CORP_NAME" : "America corporation"},{"EMP_ID" : "JP140","EMP_NAME" : "Donald","DEPT_NAME" : "Education Team","SALARY" : "5000","BONUS" : "1000","CORP_NAME" : "Japan corporation"},{"EMP_ID" : "US040","EMP_NAME" : "Ray","DEPT_NAME" : "Support Team","SALARY" : "9000","BONUS" : "3000","CORP_NAME" : "America corporation"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00","25","18","154","42",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Grid 기능");
            this.addChild(obj.name, obj);

            obj = new Grid("grd01","460","70","425","205",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_emp");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"EMP_NAME\"/><Cell col=\"1\" text=\"EMP_ID\"/><Cell col=\"2\" text=\"DEPT_CODE\"/><Cell col=\"3\" rowspan=\"2\" text=\"POSITION\"/><Cell col=\"4\" rowspan=\"2\" text=\"HIRE_DATE\"/><Cell row=\"1\" text=\"SALARY\"/><Cell row=\"1\" col=\"1\" text=\"GENDER\"/><Cell row=\"1\" col=\"2\" text=\"MARRIED\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_NAME\" edittype=\"normal\"/><Cell col=\"1\" text=\"bind:EMP_ID\" edittype=\"normal\"/><Cell col=\"2\" text=\"bind:DEPT_CODE\" edittype=\"normal\"/><Cell col=\"3\" rowspan=\"2\" text=\"bind:POSITION\" edittype=\"normal\"/><Cell col=\"4\" rowspan=\"2\" text=\"bind:HIRE_DATE\" edittype=\"normal\"/><Cell row=\"1\" text=\"bind:SALARY\" edittype=\"normal\"/><Cell row=\"1\" col=\"1\" text=\"bind:GENDER\" edittype=\"normal\"/><Cell row=\"1\" col=\"2\" text=\"bind:MARRIED\" edittype=\"normal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","20","70","425","205",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_emp");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"EMP_NAME\"/><Cell col=\"1\" text=\"EMP_ID\"/><Cell col=\"2\" text=\"DEPT_CODE\"/><Cell col=\"3\" text=\"POSITION\"/><Cell col=\"4\" text=\"HIRE_DATE\"/><Cell col=\"5\" text=\"SALARY\"/><Cell col=\"6\" text=\"GENDER\"/><Cell col=\"7\" text=\"MARRIED\"/><Cell col=\"8\" text=\"SKILL\"/><Cell col=\"9\" text=\"HOBBY\"/><Cell col=\"10\" text=\"MEMO\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_NAME\" edittype=\"normal\"/><Cell col=\"1\" text=\"bind:EMP_ID\" edittype=\"normal\"/><Cell col=\"2\" text=\"bind:DEPT_CODE\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:POSITION\" edittype=\"normal\"/><Cell col=\"4\" text=\"bind:HIRE_DATE\" edittype=\"normal\"/><Cell col=\"5\" text=\"bind:SALARY\" edittype=\"normal\"/><Cell col=\"6\" text=\"bind:GENDER\" edittype=\"normal\"/><Cell col=\"7\" text=\"bind:MARRIED\" edittype=\"normal\"/><Cell col=\"8\" text=\"bind:SKILL\" edittype=\"normal\"/><Cell col=\"9\" text=\"bind:HOBBY\" edittype=\"normal\"/><Cell col=\"10\" text=\"bind:MEMO\" edittype=\"normal\"/></Band></Format><Format id=\"format00\"><Columns><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"EMP_NAME\"/><Cell col=\"1\" text=\"EMP_ID\"/><Cell col=\"2\" text=\"DEPT_CODE\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_NAME\" edittype=\"normal\"/><Cell col=\"1\" text=\"bind:EMP_ID\" edittype=\"normal\"/><Cell col=\"2\" text=\"bind:DEPT_CODE\" edittype=\"normal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","25","290","275","31",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Cell에 바인드 되어있는 Dataset 컬럼 구하기");
            obj.set_background("#adadad");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","25","326","275","31",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("체크박스 칼럼 추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn02","25","362","275","31",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("체크 컬럼 형식 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btn03","25","398","275","31",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("헤드 체크로 모두 선택");
            obj.set_background("#adadad");
            this.addChild(obj.name, obj);

            obj = new Button("btn04","25","434","275","31",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("컬럼 사이즈 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btn05","310","290","275","31",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("포맷 가져오기");
            this.addChild(obj.name, obj);

            obj = new Button("btn06","310","326","275","31",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("원본 포맷 가져오기");
            this.addChild(obj.name, obj);

            obj = new Button("btn07","310","362","275","31",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("트리");
            this.addChild(obj.name, obj);

            obj = new Grid("grd02","37","31","883","590",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_positionstep("1");
            obj.set_binddataset("ds_tree");
            obj.set_treeasynctoggle("false");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"160\"/><Column size=\"37\"/><Column size=\"116\"/><Column size=\"103\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:ORG_NAME\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:LEVEL\"/><Cell col=\"1\" text=\"bind:LEVEL\"/><Cell col=\"2\" text=\"bind:POSITION\"/><Cell col=\"3\" text=\"bind:PHONE_NO\"/><Cell col=\"4\" text=\"bind:E_MAIL\"/><Cell col=\"5\" text=\"bind:TREE_STATE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd03","35","11","705","669",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_positionstep("2");
            obj.set_binddataset("ds_sum");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"144\"/><Column size=\"179\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"48\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"CORP_NAME\"/><Cell col=\"1\" text=\"DEPT_NAME\"/><Cell col=\"2\" text=\"EMP_ID\"/><Cell col=\"3\" text=\"EMP_NAME\"/><Cell col=\"4\" text=\"SALARY\"/><Cell col=\"5\" text=\"BONUS\"/><Cell col=\"6\"/></Band><Band id=\"body\"><Cell text=\"bind:CORP_NAME\" suppress=\"1\" suppressalign=\"middle\"/><Cell col=\"1\" text=\"bind:DEPT_NAME\" suppress=\"2\" subsumtext=\"expr:dataset.getRowLevel(currow) == 0 ? DEPT_NAME : (dataset.getRowLevel(currow) == 1 ? DEPT_NAME+&quot; 소계&quot; : &quot;&quot;)\"/><Cell col=\"2\" text=\"bind:EMP_ID\"/><Cell col=\"3\" text=\"bind:EMP_NAME\"/><Cell col=\"4\" text=\"bind:SALARY\"/><Cell col=\"5\" text=\"bind:BONUS\"/><Cell col=\"6\" text=\"expr:dataset.getRowLevel(currow)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn08","766","58","129","61",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("데이터 그룹");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Button("btn09","766","129","129","61",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("평균 구하기");
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
        	trace("col = " + e.col + " ::: cell = " + e.cell);
        	// e.cell은 한 열에 두개 이상의 셀이 있을 경우
        	// 맨오른쪽 다음 셀(맨 왼쪽 다음줄)을 0으로 초기화하지 않고 다음 번호로 넘어감

        	var sText = this.grd01.getCellProperty("body", e.cell, "text"); // body 영역의 특정 셀의 text 속성 => 예) "bind:EMP_NAME"
        	var arrCol = sText.split(":"); // arrCol[0] => bind, arrCol[1] => EMP_NAME
        	trace("컬럼 ID : " + arrCol[1]);
        };

        this.Grid_onheadclick = function(obj,e)
        {
        	if (e.cell == 0) { // 0번째 헤드일 때
        		// 체크 전체 선택
        		var sHeadValue = obj.getHeadValue(0);
        		for (var i = 0; i < this.ds_emp.rowcount; i++) {
        			this.ds_emp.setColumn(i, "COL_CHK", sHeadValue);
        		}
        	}

        	else {
        		// 헤드 칼럼을 눌렀을 때 오름차순으로 정렬
        		var sText = this.grd00.getCellProperty("body", e.cell, "text");
        		var arrCol = sText.split(":");

        		var sDs = this.grd01.binddataset; // => 오브젝트가 아닌 string "ds_emp"로 저장
        		var objDs = this.grd01.getBindDataset() // => 오브젝트로 저장

        		objDs.keystring = ("S:+" + arrCol[1]); // this.ds_emp.key~
        	}
        };

        this.btn01_onclick = function(obj,e)
        {
        	this.ds_emp.addColumn("COL_CHK", "STRING");
        	for (var i = 0; i < this.ds_emp.rowcount; i++) {
        		this.ds_emp.setColumn(i, "COL_CHK", "0");
        	}
        	this.grd00.insertContentsCol("body", 0);
        	this.grd00.setCellProperty("body", 0, "text", "bind:COL_CHK");
        };


        this.btn02_onclick = function(obj,e)
        {
        	this.grd00.setCellProperty("head", 0, "displaytype", "checkboxcontrol");
        	this.grd00.setCellProperty("head", 0, "edittype", "checkbox");
        	this.grd00.setCellProperty("body", 0, "displaytype", "checkboxcontrol");
        	this.grd00.setCellProperty("body", 0, "edittype", "checkbox");
        };
        this.btn04_onclick = function(obj,e)
        {
        	this.grd00.setFormatColProperty(2, "size", 0);
        };

        this.btn05_onclick = function(obj,e)
        {
        	var sFormat = this.grd00.getCurFormatString(); // 현재 그리드의 포맷을 xml 형태로 반환
        	this.grd01.formats = "<Formats>" + sFormat + "</Format>";
        };

        this.btn06_onclick = function(obj,e)
        {
        	var sFormat = this.grd00.getCurFormatString(true); // 바뀌기 전의 원래의 포맷을 반환
        	this.grd01.formats = "<Formats>" + sFormat + "</Format>";
        };

        this.grd02_oncelldblclick = function(obj,e)
        {
        	// 트리에서는 데이터셋의 행 인덱스와 보여지는 그리드 인덱스가 다를 수 있음
        	var nGridRow = obj.getTreeRow(e.row);
        	// e.row : 데이터셋의 인덱스
        	// getTreeRow : 데이터셋의 인덱스를 트리 그리드 인덱스로 변경
        	var nStatus = obj.getTreeStatus(nGridRow);
        	// getTreeStatus : 트리 그리드 인덱스의 행의 상태 (0~3) 반환
        	if (nStatus == 3) return;
        	nStatus = (nStatus == 0 ? 1 : 0);
        	obj.setTreeStatus(nGridRow, nStatus);
        };

        this.btn08_onclick = function(obj,e)
        {
        	this.ds_sum.keystring = "G:-CORP_NAME,+DEPT_NAME";
        };

        this.btn09_onclick = function(obj,e)
        {
        	var objCol = this.ds_sum.getColumnInfo("SALARY");
        	objCol.prop = "AVG";
        	this.ds_sum.updateSortGroup();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.grd01.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.grd01.addEventHandler("onheadclick",this.Grid_onheadclick,this);
            this.grd00.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.grd00.addEventHandler("onheadclick",this.Grid_onheadclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
            this.btn03.addEventHandler("onclick",this.Button_onclick,this);
            this.btn04.addEventHandler("onclick",this.btn04_onclick,this);
            this.btn05.addEventHandler("onclick",this.btn05_onclick,this);
            this.btn06.addEventHandler("onclick",this.btn06_onclick,this);
            this.grd02.addEventHandler("oncelldblclick",this.grd02_oncelldblclick,this);
            this.btn08.addEventHandler("onclick",this.btn08_onclick,this);
            this.btn09.addEventHandler("onclick",this.btn09_onclick,this);
            this.ds_emp.addEventHandler("cancolumnchange",this.ds_emp_cancolumnchange,this);
            this.ds_emp.addEventHandler("oncolumnchanged",this.ds_emp_oncolumnchanged,this);
            this.ds_emp.addEventHandler("canrowposchange",this.ds_emp_canrowposchange,this);
            this.ds_tree.addEventHandler("cancolumnchange",this.ds_emp_cancolumnchange,this);
            this.ds_tree.addEventHandler("oncolumnchanged",this.ds_emp_oncolumnchanged,this);
            this.ds_tree.addEventHandler("canrowposchange",this.ds_emp_canrowposchange,this);
        };
        this.loadIncludeScript("Work_Grid.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
