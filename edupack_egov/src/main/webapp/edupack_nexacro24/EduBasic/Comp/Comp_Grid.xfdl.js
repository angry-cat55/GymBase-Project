(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_Grid");
            this.set_titletext("Comp_Grid");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,1240);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_emp", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMP_NAME","type" : "STRING","size" : "50"},{"id" : "EMP_ID","type" : "STRING","size" : "10"},{"id" : "DEPT_CODE","type" : "STRING","size" : "256"},{"id" : "POSITION","type" : "STRING","size" : "10"},{"id" : "HIRE_DATE","type" : "DATE","size" : "10"},{"id" : "SALARY","type" : "INT","size" : "10"},{"id" : "GENDER","type" : "STRING","size" : "256"},{"id" : "MARRIED","type" : "STRING","size" : "256"},{"id" : "SKILL","type" : "STRING","size" : "256"},{"id" : "HOBBY","type" : "STRING","size" : "256"},{"id" : "MEMO","type" : "STRING","size" : "256"}]},"Rows" : [{"EMP_NAME" : "Melon","EMP_ID" : "KR010","POSITION" : "10","HIRE_DATE" : "20071001","SALARY" : "9000","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "01,05","DEPT_CODE" : "10","MEMO" : "aqua"},{"EMP_NAME" : "Jackson","EMP_ID" : "US050","POSITION" : "60","HIRE_DATE" : "20091021","SALARY" : "6000","GENDER" : "M","MARRIED" : "false","SKILL" : "11,03,13","HOBBY" : "09,14","DEPT_CODE" : "20","MEMO" : "gold"},{"EMP_NAME" : "Jennie","EMP_ID" : "KR240","POSITION" : "50","HIRE_DATE" : "20110508","SALARY" : "7000","GENDER" : "F","MARRIED" : "true","SKILL" : "01,06","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "greenyellow"},{"EMP_NAME" : "Dennis ","EMP_ID" : "JP150","POSITION" : "20","HIRE_DATE" : "20091021","SALARY" : "5000","GENDER" : "M","MARRIED" : "false","SKILL" : "09,11","HOBBY" : "07,06,05","DEPT_CODE" : "30","MEMO" : "khaki"},{"EMP_NAME" : "Andrew","EMP_ID" : "US020","POSITION" : "60","HIRE_DATE" : "20160602","SALARY" : "6500","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,13","DEPT_CODE" : "40","MEMO" : "lightpink"},{"EMP_NAME" : "Jungkook","EMP_ID" : "KR200","POSITION" : "60","HIRE_DATE" : "20120304","SALARY" : "7000","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,14","DEPT_CODE" : "50","MEMO" : "orange"},{"EMP_NAME" : "Adam","EMP_ID" : "JP230","POSITION" : "50","HIRE_DATE" : "20110928","SALARY" : "8000","GENDER" : "M","MARRIED" : "true","SKILL" : "11,03,13","HOBBY" : "09,15","DEPT_CODE" : "30","MEMO" : "silver"},{"EMP_NAME" : "JiYoung","EMP_ID" : "KR080","POSITION" : "50","HIRE_DATE" : "20131120","SALARY" : "8500","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "violet"}]});
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
            obj = new Static("sta_title","20.00","0","300","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Grid");
            obj.set_cssclass("sta_WF_GuideTitle1");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20.00","60","462","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("basic usage");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","95","983","36",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("[Property] binddataset");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20.00","369","188","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("column, row size");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20.00","404","470","128",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("[Property] autofittype = \"none\" | \"col\"\r\ncellsizingtype = \"none\" | \"col\" | \"row\" | \"both\"\r\nautosizingtype = \"none\" | \"col\" | \"row\" | \"both\"\r\nautosizebandtype = \"body\" | \"head\" | \"allband\" ...");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","20","558","142","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("-1");
            obj.set_fittocontents("width");
            obj.set_columncount("-1");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "none","datacolumn" : "none"},{"codecolumn" : "col","datacolumn" : "col"}]});
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_text("none");
            obj.set_value("none");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","530.00","369","275","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("row, cell select");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","530.00","656","66","26",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("selecttype");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","20.00","136",null,"205","17",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("ds_emp");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"70\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Name\"/><Cell col=\"2\" text=\"Emp ID\"/><Cell col=\"3\" text=\"Department\"/><Cell col=\"4\" text=\"Position Grade\"/><Cell col=\"5\" text=\"Hire Date\"/><Cell col=\"6\" text=\"Salary\"/><Cell col=\"7\" text=\"Married\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:EMP_NAME\" edittype=\"normal\"/><Cell col=\"2\" text=\"bind:EMP_ID\" displaytype=\"mask\" edittype=\"mask\" maskedittype=\"string\" maskeditformat=\"AA-###\"/><Cell col=\"3\" text=\"bind:DEPT_CODE\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_dept\" combocodecol=\"DEPT_CODE\" combodatacol=\"DEPT_NAME\"/><Cell col=\"4\" text=\"bind:POSITION\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"ds_pos\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"5\" text=\"bind:HIRE_DATE\" displaytype=\"date\" edittype=\"date\"/><Cell col=\"6\" text=\"bind:SALARY\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"#,#\"/><Cell col=\"7\" text=\"bind:MARRIED\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\" text=\"Avg.\"/><Cell col=\"6\" text=\"expr:nexacro.round(dataset.getAvg(&quot;SALARY&quot;), 2)\" displaytype=\"number\" maskeditformat=\"#,#.00\"/><Cell col=\"7\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","20","656","93","26",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("autosizingtype");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio02","20","682","268","26",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("-1");
            obj.set_fittocontents("width");
            obj.set_columncount("-1");
            var Radio02_innerdataset = new nexacro.NormalDataset("Radio02_innerdataset", obj);
            Radio02_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "none","datacolumn" : "none"},{"codecolumn" : "col","datacolumn" : "col"},{"codecolumn" : "row","datacolumn" : "row"},{"codecolumn" : "both","datacolumn" : "both"}]});
            obj.set_innerdataset(Radio02_innerdataset);
            obj.set_text("none");
            obj.set_value("none");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","20","718","106","26",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("autosizebandtype");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio03","20","744","238","26",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("-1");
            obj.set_fittocontents("width");
            obj.set_columncount("-1");
            var Radio03_innerdataset = new nexacro.NormalDataset("Radio03_innerdataset", obj);
            Radio03_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "body","datacolumn" : "body"},{"codecolumn" : "head","datacolumn" : "head"},{"codecolumn" : "allband","datacolumn" : "allband"}]});
            obj.set_innerdataset(Radio03_innerdataset);
            obj.set_text("body");
            obj.set_value("body");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","20","594","93","26",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("cellsizingtype");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio01","20","620","268","26",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("-1");
            obj.set_fittocontents("width");
            obj.set_columncount("-1");
            var Radio01_innerdataset = new nexacro.NormalDataset("Radio01_innerdataset", obj);
            Radio01_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "none","datacolumn" : "none"},{"codecolumn" : "col","datacolumn" : "col"},{"codecolumn" : "row","datacolumn" : "row"},{"codecolumn" : "both","datacolumn" : "both"}]});
            obj.set_innerdataset(Radio01_innerdataset);
            obj.set_text("none");
            obj.set_value("none");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio12","530.00","682","402","26",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("-1");
            obj.set_fittocontents("width");
            obj.set_columncount("-1");
            var Radio12_innerdataset = new nexacro.NormalDataset("Radio12_innerdataset", obj);
            Radio12_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "row","datacolumn" : "row"},{"codecolumn" : "multirow","datacolumn" : "multirow"},{"codecolumn" : "cell","datacolumn" : "cell"},{"codecolumn" : "area","datacolumn" : "area"},{"codecolumn" : "multiarea","datacolumn" : "multiarea"}]});
            obj.set_innerdataset(Radio12_innerdataset);
            obj.set_text("row");
            obj.set_value("row");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio10","530.00","558","142","26",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("-1");
            obj.set_fittocontents("width");
            obj.set_columncount("-1");
            var Radio10_innerdataset = new nexacro.NormalDataset("Radio10_innerdataset", obj);
            Radio10_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "none","datacolumn" : "none"},{"codecolumn" : "col","datacolumn" : "col"}]});
            obj.set_innerdataset(Radio10_innerdataset);
            obj.set_text("none");
            obj.set_value("none");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","530.00","404","470","128",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("[Property] cellmovingtype = \"none\" | \"col\" | \"col,band\"\r\nautoenter = \"none\" | \"select\" | \"key\"\r\nselecttype = \"row\" | \"multirow\" | \"cell\" | \"area\" | \"multiarea\"\r\nselectstartrow, selectstartcol, selectendrow, selectendcol\r\n[Method] getSelectedDatasetRows()");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","530.00","594","60","26",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("autoenter");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio11","530.00","620","232","26",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("-1");
            obj.set_fittocontents("width");
            obj.set_columncount("-1");
            var Radio11_innerdataset = new nexacro.NormalDataset("Radio11_innerdataset", obj);
            Radio11_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "none","datacolumn" : "none"},{"codecolumn" : "select","datacolumn" : "select"},{"codecolumn" : "key","datacolumn" : "key"}]});
            obj.set_innerdataset(Radio11_innerdataset);
            obj.set_text("none");
            obj.set_value("none");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","530.00","718","86","26",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("get selected ");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","530","775","180","26",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("select row, col");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_desc1","530","806","470","60",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_positionstep("0");
            obj.set_cssclass("txt_WF_GuideDesc");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","530","744","200","26",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("getSelectedDatasetRows()");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","20.00","966","613","195",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_binddataset("ds_emp");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"90\" band=\"left\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\" background=\"#f6edc5\"/><Cell col=\"1\" text=\"Name\" background=\"#f6edc5\"/><Cell col=\"2\" text=\"Emp ID\"/><Cell col=\"3\" text=\"Department\"/><Cell col=\"4\" text=\"Position Grade\"/><Cell col=\"5\" text=\"Hire Date\"/><Cell col=\"6\" text=\"Married\"/><Cell col=\"7\" text=\"Salary\" background=\"#fae4ee\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\" displaytype=\"text\" background=\"#f6edc5\"/><Cell col=\"1\" text=\"bind:EMP_NAME\" edittype=\"normal\" background=\"#f6edc5\"/><Cell col=\"2\" text=\"bind:EMP_ID\" displaytype=\"mask\" edittype=\"mask\" maskedittype=\"string\" maskeditformat=\"AA-###\"/><Cell col=\"3\" text=\"bind:DEPT_CODE\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_dept\" combocodecol=\"DEPT_CODE\" combodatacol=\"DEPT_NAME\"/><Cell col=\"4\" text=\"bind:POSITION\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"ds_pos\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"5\" text=\"bind:HIRE_DATE\" displaytype=\"date\" edittype=\"date\"/><Cell col=\"6\" text=\"bind:MARRIED\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"7\" text=\"bind:SALARY\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"#,#\" background=\"#fae4ee\"/></Band></Format><Format id=\"format2\"><Columns><Column size=\"150\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"36\"/></Rows><Band id=\"head\"><Cell text=\"Department\"/><Cell col=\"1\" text=\"Emp ID\"/><Cell col=\"2\" text=\"Name\"/><Cell col=\"3\" text=\"Hire Date\"/><Cell col=\"4\" text=\"Married\"/><Cell col=\"5\" text=\"Salary\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_CODE\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_dept\" combocodecol=\"DEPT_CODE\" combodatacol=\"DEPT_NAME\"/><Cell col=\"1\" text=\"bind:EMP_ID\" displaytype=\"mask\" edittype=\"mask\" maskedittype=\"string\" maskeditformat=\"AA-###\"/><Cell col=\"2\" text=\"bind:EMP_NAME\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:HIRE_DATE\" displaytype=\"date\" edittype=\"date\"/><Cell col=\"4\" text=\"bind:MARRIED\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"5\" text=\"bind:SALARY\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"#,#\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00","20.00","890","281","35",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("column fix - left column, right column");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_02","20.00","925","610","36",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("[Grid > Column Property] band = \"body\" | \"left\" | \"right\"");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","650","890","188","35",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("format");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","650","925","350","36",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("[Property] formatid");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","650","966","100","26",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("default");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","750","966","100","26",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("format2");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","20","532","73","26",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("autofittype");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","530.00","532","99","26",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("cellmovingtype ");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1020,1240,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Comp_Grid.xfdl", function() {
        this.fn_exec = function(obj,e)
        {
        	this.fn_result(obj, this.Grid00, this.txt_desc1);
        };

        this.fn_result = function(obj, objComp, objTxt)
        {
        	var strText = obj.text;
        	var strDesc = ``
        	switch(strText) {
        		case 'getSelectedDatasetRows()':
        			strDesc = `this.${objComp.name}.${strText}
			           index: ${this.Grid00.getSelectedDatasetRows()}`;
			break;
        		case 'select row, col':
        			strDesc = `this.Grid00.selectstartrow: ${this.Grid00.selectstartrow}   this.Grid00.selectstartcol: ${this.Grid00.selectstartcol}
			           this.Grid00.selectendrow: ${this.Grid00.selectendrow}     this.Grid00.selectendcol: ${this.Grid00.selectendcol}`;
			break;
        		case 'default':
        			this.Grid01.formatid = "default";
        			break;
        		case 'format2':
        			this.Grid01.formatid = "format2";
        			break;
        		default:
        			break;
        	}
        	objTxt.value = strDesc.split('\n').map(line => line.trimStart()).join('\n');
        }

        this.Radio_onitemchanged = function(obj,e)
        {
        	this.Grid00.autofittype = this.Radio00.value;
        	this.Grid00.cellsizingtype = this.Radio01.value
        	this.Grid00.autosizingtype = this.Radio02.value;
        	this.Grid00.autosizebandtype = this.Radio03.value;
        	this.Grid00.cellmovingtype = this.Radio10.value;
        	this.Grid00.autoenter = this.Radio11.value;
        	this.Grid00.selecttype = this.Radio12.value;

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Radio00.addEventHandler("onitemchanged",this.Radio_onitemchanged,this);
            this.Grid00.addEventHandler("onheadclick",this.grd_emp_onheadclick,this);
            this.Radio02.addEventHandler("onitemchanged",this.Radio_onitemchanged,this);
            this.Radio03.addEventHandler("onitemchanged",this.Radio_onitemchanged,this);
            this.Radio01.addEventHandler("onitemchanged",this.Radio_onitemchanged,this);
            this.Radio12.addEventHandler("onitemchanged",this.Radio_onitemchanged,this);
            this.Radio10.addEventHandler("onitemchanged",this.Radio_onitemchanged,this);
            this.Radio11.addEventHandler("onitemchanged",this.Radio_onitemchanged,this);
            this.Button01.addEventHandler("onclick",this.fn_exec,this);
            this.Button00.addEventHandler("onclick",this.fn_exec,this);
            this.Grid01.addEventHandler("onheadclick",this.grd_emp_onheadclick,this);
            this.Button02.addEventHandler("onclick",this.fn_exec,this);
            this.Button03.addEventHandler("onclick",this.fn_exec,this);
        };
        this.loadIncludeScript("Comp_Grid.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
