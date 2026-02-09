(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_ListView");
            this.set_titletext("Comp_ListView");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_emp", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMP_NAME","type" : "STRING","size" : "50"},{"id" : "EMP_ID","type" : "STRING","size" : "10"},{"id" : "DEPT_CODE","type" : "STRING","size" : "256"},{"id" : "POSITION","type" : "STRING","size" : "10"},{"id" : "HIRE_DATE","type" : "DATE","size" : "10"},{"id" : "SALARY","type" : "INT","size" : "10"},{"id" : "GENDER","type" : "STRING","size" : "256"},{"id" : "MARRIED","type" : "STRING","size" : "256"},{"id" : "SKILL","type" : "STRING","size" : "256"},{"id" : "HOBBY","type" : "STRING","size" : "256"},{"id" : "MEMO","type" : "STRING","size" : "256"},{"id" : "PROFILE","type" : "STRING","size" : "256"}]},"Rows" : [{"EMP_NAME" : "Melon","EMP_ID" : "KR010","POSITION" : "10","HIRE_DATE" : "20071001","SALARY" : "9000","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "01,05","DEPT_CODE" : "10","MEMO" : "aqua","PROFILE" : "imagerc::emp/img_emp11.png"},{"EMP_NAME" : "Jackson","EMP_ID" : "US050","POSITION" : "60","HIRE_DATE" : "20091021","SALARY" : "6000","GENDER" : "M","MARRIED" : "false","SKILL" : "11,03,13","HOBBY" : "09,14","DEPT_CODE" : "20","MEMO" : "gold","PROFILE" : "imagerc::emp/img_emp12.png"},{"EMP_NAME" : "Jennie","EMP_ID" : "KR240","POSITION" : "50","HIRE_DATE" : "20110508","SALARY" : "7000","GENDER" : "F","MARRIED" : "true","SKILL" : "01,06","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "greenyellow","PROFILE" : "imagerc::emp/img_emp13.png"},{"EMP_NAME" : "Dennis ","EMP_ID" : "JP150","POSITION" : "20","HIRE_DATE" : "20091021","SALARY" : "5000","GENDER" : "M","MARRIED" : "false","SKILL" : "09,11","HOBBY" : "07,06,05","DEPT_CODE" : "30","MEMO" : "khaki","PROFILE" : "imagerc::emp/img_emp14.png"},{"EMP_NAME" : "Andrew","EMP_ID" : "US020","POSITION" : "60","HIRE_DATE" : "20160602","SALARY" : "6500","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,13","DEPT_CODE" : "40","MEMO" : "lightpink","PROFILE" : "imagerc::emp/img_emp15.png"},{"EMP_NAME" : "Jungkook","EMP_ID" : "KR200","POSITION" : "60","HIRE_DATE" : "20120304","SALARY" : "7000","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,14","DEPT_CODE" : "50","MEMO" : "orange","PROFILE" : "imagerc::emp/img_emp16.png"},{"EMP_NAME" : "Adam","EMP_ID" : "JP230","POSITION" : "50","HIRE_DATE" : "20110928","SALARY" : "8000","GENDER" : "M","MARRIED" : "true","SKILL" : "11,03,13","HOBBY" : "09,15","DEPT_CODE" : "30","MEMO" : "silver","PROFILE" : "imagerc::emp/img_emp17.png"},{"EMP_NAME" : "JiYoung","EMP_ID" : "KR080","POSITION" : "50","HIRE_DATE" : "20131120","SALARY" : "8500","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "violet","PROFILE" : "imagerc::emp/img_emp18.png"}]});
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
            obj.set_text("ListView");
            obj.set_cssclass("sta_WF_GuideTitle1");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20.00","60","462","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("basic usage");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20.00","95","470","36",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("[Property] binddataset");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new ListView("ListView00","20.00","136","584","401",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_emp");
            obj.set_formatid("default");
            obj._setContents("<Formats><Format id=\"default\"><Band id=\"body\" width=\"100%\" height=\"40\" expandbartype=\"true\" expandbarsize=\"30 30\"><Cell id=\"Cell01\" left=\"70.00\" top=\"13\" width=\"110\" height=\"26\" text=\"bind:EMP_NAME\"/><Cell id=\"Cell03\" left=\"10.00\" top=\"13\" width=\"90\" height=\"26\" text=\"bind:EMP_ID\"/><Cell id=\"Cell05\" left=\"170.00\" top=\"13\" width=\"160\" height=\"26\" text=\"bind:DEPT_CODE\" edittype=\"combo\" displaytype=\"combotext\" combodataset=\"ds_dept\" combocodecol=\"DEPT_CODE\" combodatacol=\"DEPT_NAME\"/><Cell id=\"Cell09\" left=\"350.00\" top=\"13\" width=\"130\" height=\"26\" text=\"bind:HIRE_DATE\" edittype=\"date\" displaytype=\"date\"/></Band><Band id=\"detail\" width=\"100%\" height=\"160\" background=\"#ffffff\"><Cell id=\"Cell06\" left=\"125.00\" top=\"11\" width=\"70\" height=\"26\" text=\"POSITION\" border=\"1px solid #acacac\" padding=\"0px 0px 0px 5px\" cssclass=\"lstv_WF_DLabel\"/><Cell id=\"Cell07\" left=\"200.00\" top=\"11\" width=\"130\" height=\"26\" text=\"bind:POSITION\" border=\"1px solid #acacac\" displaytype=\"combotext\" combodataset=\"ds_pos\" combocodecol=\"CODE\" combodatacol=\"NAME\" edittype=\"combo\"/><Cell id=\"Cell10\" left=\"340.00\" top=\"11\" width=\"70\" height=\"26\" text=\"SALARY\" border=\"1px solid #acacac\" padding=\"0px 0px 0px 5px\"/><Cell id=\"Cell11\" left=\"415.00\" top=\"11\" width=\"150\" height=\"26\" text=\"bind:SALARY\" border=\"1px solid #acacac\" displaytype=\"number\"/><Cell id=\"Cell12\" left=\"125.00\" top=\"42\" width=\"70\" height=\"26\" text=\"GENDER\" border=\"1px solid #acacac\" padding=\"0px 0px 0px 5px\"/><Cell id=\"Cell13\" left=\"200.00\" top=\"42\" width=\"130\" height=\"26\" text=\"expr:GENDER == &quot;M&quot; ? &quot;Male&quot; : &quot;Female&quot;\" border=\"1px solid #acacac\"/><Cell id=\"Cell14\" left=\"340.00\" top=\"42\" width=\"70\" height=\"26\" text=\"MARRIED\" border=\"1px solid #acacac\" padding=\"0px 0px 0px 5px\"/><Cell id=\"Cell15\" left=\"415.00\" top=\"42\" width=\"150\" height=\"26\" text=\"bind:MARRIED\" border=\"1px solid #acacac\"/><Cell id=\"Cell16\" left=\"125.00\" top=\"73\" width=\"70\" height=\"77\" text=\"SKILL\" border=\"1px solid #acacac\" padding=\"0px 0px 0px 5px\"/><Cell id=\"Cell17\" left=\"200.00\" top=\"73\" width=\"130\" height=\"77\" text=\"bind:SKILL\" border=\"1px solid #acacac\" displaytype=\"multicombocontrol\" multicombodataset=\"ds_skill\" multicombocodecol=\"CODE\" multicombodatacol=\"NAME\" edittype=\"multicombo\"/><Cell id=\"Cell20\" left=\"340.00\" top=\"73\" width=\"70\" height=\"77\" text=\"MEMO\" border=\"1px solid #acacac\" padding=\"0px 0px 0px 5px\"/><Cell id=\"Cell21\" left=\"415.00\" top=\"73\" width=\"150\" height=\"77\" text=\"bind:MEMO\" edittype=\"textarea\" displaytype=\"textareacontrol\"/><Cell id=\"Cell23\" left=\"10.00\" top=\"10\" width=\"110\" height=\"140\" text=\"bind:PROFILE\" displaytype=\"imagecontrol\" border=\"1px solid #acacac\" imagestretch=\"fixaspectratio\"/></Band></Format><Format id=\"format00\"><Band id=\"body\" width=\"33%\" height=\"160\" expandbartype=\"true\" expandbarsize=\"30 30\"><Cell id=\"Cell00\" left=\"37\" top=\"11\" width=\"117\" height=\"111\" text=\"bind:PROFILE\" displaytype=\"imagecontrol\" imagestretch=\"fixaspectratio\"/><Cell id=\"Cell01\" left=\"38\" top=\"125\" width=\"115\" height=\"24\" text=\"bind:EMP_NAME\" displaytype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","625","60","352","35",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("expand, collapse");
            obj.set_cssclass("sta_WF_GuideTitle2");
            obj.set_fittocontents("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","625","95","380","82",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("[Property] bandinitstatus = \"expand\" | \"collapse\"\r\nbandexpandtype = \"none\" | \"expand\" | \"accordion\" | \"popup\"");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","625","203","225","26",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("-1");
            obj.set_enable("true");
            obj.set_columncount("-1");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "expand","datacolumn" : "expand"},{"codecolumn" : "collapse","datacolumn" : "collapse"}]});
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_text("expand");
            obj.set_value("expand");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio01","625","265","345","26",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("-1");
            obj.set_enable("true");
            obj.set_columncount("-1");
            var Radio01_innerdataset = new nexacro.NormalDataset("Radio01_innerdataset", obj);
            Radio01_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "none","datacolumn" : "none"},{"codecolumn" : "expand","datacolumn" : "expand"},{"codecolumn" : "accordion","datacolumn" : "accordion"},{"codecolumn" : "popup","datacolumn" : "popup"}]});
            obj.set_innerdataset(Radio01_innerdataset);
            obj.set_text("expand");
            obj.set_value("expand");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","625","177","93","26",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("bandinitstatus");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_fittocontents("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","625","239","93","26",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("bandexpandtype");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","625","330","332","35",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("format");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","625","365","380","36",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("[Property] formatid");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio02","625","406","179","26",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("-1");
            obj.set_enable("true");
            obj.set_columncount("-1");
            var Radio02_innerdataset = new nexacro.NormalDataset("Radio02_innerdataset", obj);
            Radio02_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "default","datacolumn" : "default"},{"codecolumn" : "format00","datacolumn" : "format00"}]});
            obj.set_innerdataset(Radio02_innerdataset);
            obj.set_text("default");
            obj.set_value("default");
            obj.set_index("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1020,700,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Comp_ListView.xfdl", function() {

        this.Radio_onitemchanged = function(obj,e)
        {
        	this.ListView00.bandinitstatus = this.Radio00.value;
        	this.ListView00.bandexpandtype = this.Radio01.value;
        	this.ListView00.formatid = this.Radio02.value;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Radio00.addEventHandler("onitemchanged",this.Radio_onitemchanged,this);
            this.Radio01.addEventHandler("onitemchanged",this.Radio_onitemchanged,this);
            this.Radio02.addEventHandler("onitemchanged",this.Radio_onitemchanged,this);
        };
        this.loadIncludeScript("Comp_ListView.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
