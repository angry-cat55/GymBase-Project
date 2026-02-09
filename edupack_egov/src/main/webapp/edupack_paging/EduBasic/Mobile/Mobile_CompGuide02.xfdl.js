(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Mobile_Work");
            this.set_titletext("chk,rdo,chks,mcbo,tab,grd");
            if (Form == this.constructor)
            {
                this._setFormPosition(1680,2150);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_rdo", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "code","type" : "STRING","size" : "256"},{"id" : "data","type" : "STRING","size" : "256"}]},"Rows" : [{"code" : "1","data" : "Female"},{"code" : "2","data" : "Male"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_fruit", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "code","type" : "STRING","size" : "256"},{"id" : "data","type" : "STRING","size" : "256"},{"id" : "readonly","type" : "STRING","size" : "256"}]},"Rows" : [{"code" : "1","data" : "apple"},{"code" : "2","data" : "banana"},{"code" : "3","data" : "mangosteen","readonly" : "1"},{"code" : "4","data" : "durian"},{"code" : "5","data" : "cherry"},{"code" : "6","data" : "lime","readonly" : ""},{"code" : "7","data" : "blackberry","readonly" : "1"},{"code" : "8","data" : "coconut"},{"code" : "9","data" : "watermelon"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Name","type" : "STRING","size" : "256"},{"id" : "ID","type" : "STRING","size" : "256"},{"id" : "Dept","type" : "STRING","size" : "256"},{"id" : "Memo","type" : "STRING","size" : "256"},{"id" : "Gender","type" : "STRING","size" : "256"},{"id" : "Married","type" : "STRING","size" : "256"},{"id" : "WaddingDate","type" : "STRING","size" : "256"},{"id" : "HDate","type" : "STRING","size" : "256"},{"id" : "Salary","type" : "STRING","size" : "256"},{"id" : "Position","type" : "STRING","size" : "256"},{"id" : "Hobby","type" : "STRING","size" : "256"},{"id" : "Skill","type" : "STRING","size" : "256"}]},"Rows" : [{"Name" : "Kate","ID" : "TOBE0701","Dept" : "1","Gendar" : "1","Married" : "1","HDate" : "20200701","Salary" : "50000000","Position" : "1","Memo" : "Active","Hobby" : "1,3","Skill" : "1,3,5","Gender" : "1","WaddingDate" : "19791118"},{"Name" : "Dennis ","ID" : "TOBE0802","Dept" : "2","Gendar" : "1","Married" : "1","HDate" : "20190802","Salary" : "60000000","Position" : "2","Memo" : "Affectionnate","Hobby" : "2,5,6","Skill" : "2,4","Gender" : "2","WaddingDate" : "20010513"},{"Name" : "Max ","ID" : "TOBE0903","Dept" : "3","Gendar" : "1","Married" : "","HDate" : "20200201","Salary" : "70000000","Position" : "3","Memo" : "Aggressive","Hobby" : "3,5,8,9","Skill" : "3,5,9","Gender" : "2"},{"Name" : "Ted ","ID" : "TOBE0101","Dept" : "4","Gendar" : "1","Married" : "","HDate" : "20200201","Salary" : "40000000","Position" : "4","Memo" : "Altruistic","Hobby" : "4,5,8","Skill" : "5,10,11","Gender" : "2"},{"Name" : "Adam","ID" : "TOBE0204","Dept" : "5","Gendar" : "2","HDate" : "20200201","Salary" : "70000000","Position" : "5","Memo" : "Ambitious","Hobby" : "5,11,12","Skill" : "5,6,9","Gender" : "2"},{"Name" : "Belle","ID" : "TOBE0621","Dept" : "6","Gendar" : "2","HDate" : "20200201","Salary" : "40000000","Position" : "6","Memo" : "Arrogant","Hobby" : "6,8,9","Skill" : "10,11,12","Gender" : "2"},{"Name" : "Lexy","ID" : "TOBE0701","Dept" : "1","Gendar" : "1","Married" : "1","HDate" : "20200201","Salary" : "50000000","Position" : "1","Memo" : "Astute","Hobby" : "2,4,8","Skill" : "1,2,3","Gender" : "1","WaddingDate" : "20040223"},{"Name" : "Lucy","ID" : "TOBE0802","Dept" : "2","Gendar" : "1","Married" : "1","HDate" : "20190201","Salary" : "60000000","Position" : "2","Memo" : "Attractive","Hobby" : "13,14","Skill" : "10,13","Gender" : "1","WaddingDate" : "20060123"},{"Name" : "Kein","ID" : "TOBE0903","Dept" : "3","Gendar" : "1","HDate" : "20200201","Salary" : "70000000","Position" : "3","Memo" : "Avaricious","Hobby" : "2,6,8","Skill" : "1,3,5","Gender" : "2","WaddingDate" : ""},{"Name" : "Juliana","ID" : "TOBE0101","Dept" : "4","Gendar" : "1","HDate" : "20200201","Salary" : "40000000","Position" : "4","Memo" : "Benevolent","Hobby" : "11,12,13","Skill" : "3,6,9","Gender" : "1"},{"Name" : "Kara","ID" : "TOBE0204","Dept" : "5","Gendar" : "2","HDate" : "20200201","Salary" : "70000000","Position" : "5","Memo" : "Boastiful","Hobby" : "2,3,5","Skill" : "2,4,8","Gender" : "1"},{"Name" : "Andrew","ID" : "TOBE0621","Dept" : "6","Gendar" : "2","HDate" : "20200201","Salary" : "40000000","Position" : "6","Memo" : "Bossy","Hobby" : "3,5,7,9","Skill" : "2,5,10","Gender" : "2"},{"Name" : "Maria","ID" : "TOBE0701","Dept" : "1","Gendar" : "1","Married" : "1","HDate" : "20200201","Salary" : "50000000","Position" : "1","Memo" : "Brutal","Hobby" : "1,3,12","Skill" : "2,6,12","Gender" : "1","WaddingDate" : "20101110"},{"Name" : "Eddy","ID" : "TOBE0802","Dept" : "2","Gendar" : "1","Married" : "1","HDate" : "20190201","Salary" : "60000000","Position" : "2","Memo" : "Candid","Hobby" : "1,5,13","Skill" : "3,4,12","Gender" : "2","WaddingDate" : "20110418"},{"Name" : "Sarah","ID" : "TOBE0903","Dept" : "3","Gendar" : "1","HDate" : "20200201","Salary" : "70000000","Position" : "3","Memo" : "Calm","Hobby" : "5,6,8","Skill" : "3,6,9","Gender" : "1"},{"Name" : "Ivy","ID" : "TOBE0101","Dept" : "4","Gendar" : "1","HDate" : "20200201","Salary" : "40000000","Position" : "4","Memo" : "Careful","Skill" : "10,11,12,13","Hobby" : "5,7,9,11","Gender" : "1"},{"Name" : "Noel ","ID" : "TOBE0204","Dept" : "5","Gendar" : "2","HDate" : "20200201","Salary" : "70000000","Position" : "5","Memo" : "Careless","Skill" : "2,4,10","Hobby" : "2,5,6,15","Gender" : "2"},{"Name" : "Arnold","ID" : "TOBE0621","Dept" : "6","Gendar" : "2","HDate" : "20200201","Salary" : "40000000","Position" : "6","Memo" : "Caring","Skill" : "7,8,9","Hobby" : "8,10,12","Gender" : "2"},{"Name" : "Alex ","ID" : "TOBE0701","Dept" : "1","Gendar" : "1","Married" : "1","HDate" : "20200201","Salary" : "50000000","Position" : "1","Memo" : "Cheerful","Skill" : "1","Hobby" : "11,13,14","Gender" : "2","WaddingDate" : "20040512"},{"Name" : "John","ID" : "TOBE0802","Dept" : "2","Gendar" : "1","Married" : "1","HDate" : "20190201","Salary" : "60000000","Position" : "2","Memo" : "Confident","Hobby" : "2,4,8","Skill" : "1,2,3,4,5","Gender" : "2","WaddingDate" : "19580506"},{"Name" : "Steven ","ID" : "TOBE0903","Dept" : "3","Gendar" : "1","HDate" : "20200201","Salary" : "70000000","Position" : "3","Memo" : "Conservative","Hobby" : "4,6,8","Skill" : "2,5,7","Gender" : "2"},{"Name" : "Donald ","ID" : "TOBE0101","Dept" : "4","Gendar" : "1","HDate" : "20200201","Salary" : "40000000","Position" : "4","Memo" : "Cunning","Hobby" : "5,11,12","Skill" : "8,9,10,11","Gender" : "2"},{"Name" : "Ray ","ID" : "TOBE0204","Dept" : "5","Gendar" : "2","HDate" : "20200201","Salary" : "70000000","Position" : "5","Memo" : "Earnest","Hobby" : "9,10,11","Skill" : "1,3,5,7,9","Gender" : "1"},{"Name" : "Young","ID" : "TOBE0713","Dept" : "4","Gendar" : "1","HDate" : "20200201","Salary" : "40000000","Position" : "6","Memo" : "Extrovert","Hobby" : "8","Skill" : "12,13","Gender" : "1"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_tree", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "data","type" : "STRING","size" : "256"},{"id" : "level","type" : "STRING","size" : "256"}]},"Rows" : [{"data" : "PROPUCT","level" : "0"},{"data" : "Nexacro N","level" : "1"},{"data" : "Nexacro 17","level" : "1"},{"data" : "Nexacro 14","level" : "1"},{"data" : "XPLATFORM","level" : "1"},{"data" : "MiPlatform","level" : "1"},{"data" : "EDUCATION","level" : "0"},{"data" : "Notice","level" : "1"},{"data" : "Materials","level" : "1"},{"data" : "Schedule","level" : "1"},{"data" : "NEW SERVICE","level" : "0"},{"data" : "TobeDevOps","level" : "1"},{"data" : "Conversion","level" : "1"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd2", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column0","type" : "STRING","size" : "256"},{"id" : "Column1","type" : "STRING","size" : "256"},{"id" : "Column2","type" : "STRING","size" : "256"},{"id" : "Column3","type" : "STRING","size" : "256"},{"id" : "Column4","type" : "STRING","size" : "256"}]},"Rows" : [{"Column0" : "Edit","Column4" : "Button"},{"Column4" : "Button"},{"Column3" : "1","Column4" : "Button"},{"Column4" : "Button"},{"Column4" : "Button"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "code","type" : "STRING","size" : "256"},{"id" : "data","type" : "STRING","size" : "256"}]},"Rows" : [{"code" : "1","data" : "Financial Accounting Team"},{"code" : "2","data" : "Human Resource Team"},{"code" : "3","data" : "Marketing Team"},{"code" : "4","data" : "Education Team"},{"code" : "5","data" : "Sales Team"},{"code" : "6","data" : "Presales Team"},{"code" : "7","data" : "Technical Support Team"},{"code" : "8","data" : "Server Support Team"},{"code" : "9","data" : "Mobile Support Team"},{"code" : "10","data" : "Architecture  Team"},{"data" : "Platform Team","code" : "11"},{"data" : "Cloud Team","code" : "12"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","199.00","0","1421","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Style");
            obj.set_cssclass("sta_WF_GTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Component");
            obj.set_cssclass("sta_WF_GTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","29","200","162",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("CheckBox");
            obj.set_cssclass("sta_WF_GLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","199.00","29","1421","162",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","220","50","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("[enabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_01","600","50","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("[disabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","516","116","15","18",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("50");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_02","505","100","5","50",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","220","100","280","50",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("CheckBox");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","0","190","200","162",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Radio");
            obj.set_cssclass("sta_WF_GLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","199","190","1421","162",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00","220","211","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("[enabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_01_00","600","211","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("[disabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","220","261","280","50",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_innerdataset("ds_rdo");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_direction("vertical");
            obj.set_text("Female");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00","600","100","280","50",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("CheckBox");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00_00","600","261","280","50",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_innerdataset("ds_rdo");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_direction("vertical");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01","0","351","200","192",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("CheckBoxSet");
            obj.set_cssclass("sta_WF_GLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_01","199","351","1421","192",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01","220","372","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("[enabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new CheckBoxSet("CheckBoxSet00","220","412","889","105",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_innerdataset("ds_fruit");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_readonlycolumn("readonly");
            obj.set_rowcount("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","0","542","200","162",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("MultiCombo");
            obj.set_cssclass("sta_WF_GLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_01_00","199","542","1421","162",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_00","220","563","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("[enabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new MultiCombo("MultiCombo00","220","613","280","50",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_innerdataset("ds_fruit");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_readonlycolumn("readonly");
            obj.set_text("MultiCombo00");
            this.addChild(obj.name, obj);

            obj = new MultiCombo("MultiCombo00_00","600","613","280","50",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_innerdataset("ds_fruit");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_readonlycolumn("readonly");
            obj.set_showselectallcheckbox("true");
            obj.set_enable("false");
            obj.set_text("MultiCombo00");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_01_01","600","563","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("[disabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00","0","703","200","222",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("Tab");
            obj.set_cssclass("sta_WF_GLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_01_00_00","199","703","1421","222",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_GArea");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_00_00","220","724","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("[enabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00_00","220","774","665","95",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00_00);
            obj.set_text("Tabpage1");
            this.Tab00_00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00_00);
            obj.set_text("Tabpage2");
            this.Tab00_00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Tab00_00);
            obj.set_text("Tabpage3");
            this.Tab00_00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.Tab00_00);
            obj.set_text("Tabpage4");
            this.Tab00_00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage5",this.Tab00_00);
            obj.set_text("Tabpage5");
            this.Tab00_00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage6",this.Tab00_00);
            obj.set_text("Tabpage6");
            this.Tab00_00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage7",this.Tab00_00);
            obj.set_text("Tabpage7");
            this.Tab00_00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage8",this.Tab00_00);
            obj.set_text("Tabpage8");
            this.Tab00_00.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00","0","924","200","1086",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("Grid");
            obj.set_cssclass("sta_WF_GLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_01_00_00_00","199","924","1421","1086",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","220","995","760","239",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_binddataset("ds_grd");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"137\"/><Column size=\"183\"/><Column size=\"156\"/><Column size=\"191\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"50\"/><Row size=\"50\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"Name\"/><Cell col=\"1\" text=\"ID\"/><Cell col=\"2\" text=\"WaddingDate\"/><Cell col=\"3\" text=\"HDate\"/><Cell col=\"4\" text=\"Salary\"/></Band><Band id=\"body\"><Cell text=\"bind:Name\"/><Cell col=\"1\" text=\"bind:ID\"/><Cell col=\"2\" text=\"bind:WaddingDate\"/><Cell col=\"3\" text=\"bind:HDate\"/><Cell col=\"4\" text=\"bind:Salary\"/></Band><Band id=\"summary\"><Cell text=\"Summary\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_00_00_00","220","945","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("[enabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","1005","995","315","654",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_binddataset("ds_tree");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseline("false");
            obj.set_treeuseimage("false");
            obj.set_cssclass("grd_WF_Tree");
            obj.set_useselcolor("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"269\"/></Columns><Rows><Row size=\"50\"/></Rows><Band id=\"body\"><Cell text=\"bind:data\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:level\" cssclass=\"expr:level == &quot;0&quot; ? &quot;cell_WF_Level0&quot; : &quot;cell_WF_Level1&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02","220","1264","760","251",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_binddataset("ds_grd2");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"127\"/><Column size=\"167\"/><Column size=\"148\"/><Column size=\"80\"/><Column size=\"141\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"50\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" displaytype=\"editcontrol\"/><Cell col=\"1\" text=\"bind:Column1\" displaytype=\"calendarcontrol\" edittype=\"date\"/><Cell col=\"2\" text=\"bind:Column2\" edittype=\"combo\" displaytype=\"combocontrol\" combodataset=\"ds_dept\" combocodecol=\"code\" combodatacol=\"data\"/><Cell col=\"3\" text=\"bind:Column3\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"4\" text=\"bind:Column4\" displaytype=\"buttoncontrol\" edittype=\"checkbox\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02_00","220","1545","760","352",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_binddataset("ds_grd2");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"96\"/><Column size=\"228\"/><Column size=\"288\"/><Column size=\"141\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"150\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column4\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" expandshow=\"show\" expandsize=\"25\"/><Cell col=\"1\" text=\"bind:Column1\" displaytype=\"calendarcontrol\" edittype=\"date\" calendarbuttonsize=\"50\"/><Cell col=\"2\" text=\"bind:Column2\" edittype=\"multicombo\" displaytype=\"multicombocontrol\" combodataset=\"ds_dept\" combocodecol=\"code\" combodatacol=\"data\" multicombodataset=\"ds_fruit\" multicombocodecol=\"code\" multicombodatacol=\"data\" multicomboreadonlycolumn=\"readonly\" multicomboshowselectallcheckbox=\"true\" multicombobuttonsize=\"50\" multicomboedittype=\"multitag\"/><Cell col=\"3\" displaytype=\"textareacontrol\" edittype=\"textarea\" text=\"TextArea&#13;&#10;TextArea\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","1080","100","150","50",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_cssclass("chk_WF_Toggle");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01_00","1280","100","150","50",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_cssclass("chk_WF_Toggle");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","1090","40","490","40",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("CheckBox Toggle Type   <b v=\"true\"><fc v=\"#d50136\">cssclass =chk_WF_Toggle</fc></b>");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new MultiCombo("MultiCombo00_01","200","840","490","190",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_innerdataset("ds_fruit");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_readonlycolumn("readonly");
            obj.set_edittype("multitag");
            obj.set_text("apple,banana,mangosteen");
            obj.set_value("1,2,3");
            obj.set_index("0,1,2");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Tab00_00.Tabpage1
            obj = new Layout("default","",0,0,this.Tab00_00.Tabpage1.form,function(p){});
            this.Tab00_00.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00_00.Tabpage2
            obj = new Layout("default","",0,0,this.Tab00_00.Tabpage2.form,function(p){});
            this.Tab00_00.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00_00.Tabpage3.form
            obj = new Layout("default","",0,0,this.Tab00_00.Tabpage3.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Tab00_00.Tabpage3.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Tab00_00.Tabpage3.form
            obj = new Layout("default0","",0,0,this.Tab00_00.Tabpage3.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Tab00_00.Tabpage3.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Tab00_00.Tabpage4.form
            obj = new Layout("default","",0,0,this.Tab00_00.Tabpage4.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Tab00_00.Tabpage4.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Tab00_00.Tabpage4.form
            obj = new Layout("default0","",0,0,this.Tab00_00.Tabpage4.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Tab00_00.Tabpage4.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Tab00_00.Tabpage5.form
            obj = new Layout("default","",0,0,this.Tab00_00.Tabpage5.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Tab00_00.Tabpage5.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Tab00_00.Tabpage5.form
            obj = new Layout("default0","",0,0,this.Tab00_00.Tabpage5.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Tab00_00.Tabpage5.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Tab00_00.Tabpage6.form
            obj = new Layout("default","",0,0,this.Tab00_00.Tabpage6.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Tab00_00.Tabpage6.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Tab00_00.Tabpage6.form
            obj = new Layout("default0","",0,0,this.Tab00_00.Tabpage6.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Tab00_00.Tabpage6.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Tab00_00.Tabpage7.form
            obj = new Layout("default","",0,0,this.Tab00_00.Tabpage7.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Tab00_00.Tabpage7.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Tab00_00.Tabpage7.form
            obj = new Layout("default0","",0,0,this.Tab00_00.Tabpage7.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Tab00_00.Tabpage7.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Tab00_00.Tabpage8.form
            obj = new Layout("default","",0,0,this.Tab00_00.Tabpage8.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Tab00_00.Tabpage8.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Tab00_00.Tabpage8.form
            obj = new Layout("default0","",0,0,this.Tab00_00.Tabpage8.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Tab00_00.Tabpage8.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","screen_phone",1680,2150,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("chk,rdo,chks,mcbo,tab,grd");

                p.Static01.set_taborder("0");
                p.Static01.set_text("Style");
                p.Static01.set_cssclass("sta_WF_GTitle");
                p.Static01.move("199.00","0","1421","30",null,null);

                p.Static00.set_taborder("1");
                p.Static00.set_text("Component");
                p.Static00.set_cssclass("sta_WF_GTitle");
                p.Static00.move("0","0","200","30",null,null);

                p.Static02.set_taborder("2");
                p.Static02.set_text("CheckBox");
                p.Static02.set_cssclass("sta_WF_GLabel");
                p.Static02.move("0","29","200","162",null,null);

                p.Static03.set_taborder("3");
                p.Static03.set_cssclass("sta_WF_GArea");
                p.Static03.move("199.00","29","1421","162",null,null);

                p.Static05.set_taborder("4");
                p.Static05.set_text("[enabled]");
                p.Static05.set_cssclass("sta_WF_GStatus");
                p.Static05.move("220","50","120","20",null,null);

                p.Static05_01_01.set_taborder("5");
                p.Static05_01_01.set_text("[disabled]");
                p.Static05_01_01.set_cssclass("sta_WF_GStatus");
                p.Static05_01_01.move("600","50","120","20",null,null);

                p.Static07.set_taborder("6");
                p.Static07.set_text("50");
                p.Static07.set_cssclass("sta_WF_GTxt");
                p.Static07.move("516","116","15","18",null,null);

                p.Static04_02.set_taborder("7");
                p.Static04_02.set_cssclass("sta_WF_GLineV");
                p.Static04_02.move("505","100","5","50",null,null);

                p.CheckBox00.set_taborder("8");
                p.CheckBox00.set_text("CheckBox");
                p.CheckBox00.set_value("true");
                p.CheckBox00.move("220","100","280","50",null,null);

                p.Static02_00.set_taborder("9");
                p.Static02_00.set_text("Radio");
                p.Static02_00.set_cssclass("sta_WF_GLabel");
                p.Static02_00.move("0","190","200","162",null,null);

                p.Static03_00.set_taborder("10");
                p.Static03_00.set_cssclass("sta_WF_GArea");
                p.Static03_00.move("199","190","1421","162",null,null);

                p.Static05_00.set_taborder("11");
                p.Static05_00.set_text("[enabled]");
                p.Static05_00.set_cssclass("sta_WF_GStatus");
                p.Static05_00.move("220","211","120","20",null,null);

                p.Static05_01_01_00.set_taborder("12");
                p.Static05_01_01_00.set_text("[disabled]");
                p.Static05_01_01_00.set_cssclass("sta_WF_GStatus");
                p.Static05_01_01_00.move("600","211","120","20",null,null);

                p.Radio00.set_taborder("13");
                p.Radio00.set_innerdataset("ds_rdo");
                p.Radio00.set_codecolumn("code");
                p.Radio00.set_datacolumn("data");
                p.Radio00.set_direction("vertical");
                p.Radio00.set_value("1");
                p.Radio00.set_index("0");
                p.Radio00.move("220","261","280","50",null,null);

                p.CheckBox00_00.set_taborder("14");
                p.CheckBox00_00.set_text("CheckBox");
                p.CheckBox00_00.set_enable("false");
                p.CheckBox00_00.move("600","100","280","50",null,null);

                p.Radio00_00.set_taborder("15");
                p.Radio00_00.set_innerdataset("ds_rdo");
                p.Radio00_00.set_codecolumn("code");
                p.Radio00_00.set_datacolumn("data");
                p.Radio00_00.set_direction("vertical");
                p.Radio00_00.set_enable("false");
                p.Radio00_00.move("600","261","280","50",null,null);

                p.Static02_01.set_taborder("16");
                p.Static02_01.set_text("CheckBoxSet");
                p.Static02_01.set_cssclass("sta_WF_GLabel");
                p.Static02_01.move("0","351","200","192",null,null);

                p.Static03_01.set_taborder("18");
                p.Static03_01.set_cssclass("sta_WF_GArea");
                p.Static03_01.move("199","351","1421","192",null,null);

                p.Static05_01.set_taborder("17");
                p.Static05_01.set_text("[enabled]");
                p.Static05_01.set_cssclass("sta_WF_GStatus");
                p.Static05_01.move("220","372","120","20",null,null);

                p.CheckBoxSet00.set_taborder("19");
                p.CheckBoxSet00.set_innerdataset("ds_fruit");
                p.CheckBoxSet00.set_codecolumn("code");
                p.CheckBoxSet00.set_datacolumn("data");
                p.CheckBoxSet00.set_readonlycolumn("readonly");
                p.CheckBoxSet00.set_rowcount("3");
                p.CheckBoxSet00.move("220","412","889","105",null,null);

                p.Static02_01_00.set_taborder("20");
                p.Static02_01_00.set_text("MultiCombo");
                p.Static02_01_00.set_cssclass("sta_WF_GLabel");
                p.Static02_01_00.move("0","542","200","162",null,null);

                p.Static03_01_00.set_taborder("21");
                p.Static03_01_00.set_cssclass("sta_WF_GArea");
                p.Static03_01_00.move("199","542","1421","162",null,null);

                p.Static05_01_00.set_taborder("22");
                p.Static05_01_00.set_text("[enabled]");
                p.Static05_01_00.set_cssclass("sta_WF_GStatus");
                p.Static05_01_00.move("220","563","120","20",null,null);

                p.MultiCombo00.set_taborder("23");
                p.MultiCombo00.set_innerdataset("ds_fruit");
                p.MultiCombo00.set_codecolumn("code");
                p.MultiCombo00.set_datacolumn("data");
                p.MultiCombo00.set_readonlycolumn("readonly");
                p.MultiCombo00.set_text("MultiCombo00");
                p.MultiCombo00.move("220","613","280","50",null,null);

                p.MultiCombo00_00.set_taborder("24");
                p.MultiCombo00_00.set_innerdataset("ds_fruit");
                p.MultiCombo00_00.set_codecolumn("code");
                p.MultiCombo00_00.set_datacolumn("data");
                p.MultiCombo00_00.set_readonlycolumn("readonly");
                p.MultiCombo00_00.set_showselectallcheckbox("true");
                p.MultiCombo00_00.set_enable("false");
                p.MultiCombo00_00.set_text("MultiCombo00");
                p.MultiCombo00_00.move("600","613","280","50",null,null);

                p.Static05_01_01_01.set_taborder("25");
                p.Static05_01_01_01.set_text("[disabled]");
                p.Static05_01_01_01.set_cssclass("sta_WF_GStatus");
                p.Static05_01_01_01.move("600","563","120","20",null,null);

                p.Static02_01_00_00.set_taborder("26");
                p.Static02_01_00_00.set_text("Tab");
                p.Static02_01_00_00.set_cssclass("sta_WF_GLabel");
                p.Static02_01_00_00.move("0","703","200","222",null,null);

                p.Static03_01_00_00.set_taborder("27");
                p.Static03_01_00_00.set_cssclass("sta_WF_GArea");
                p.Static03_01_00_00.set_text("");
                p.Static03_01_00_00.move("199","703","1421","222",null,null);

                p.Static05_01_00_00.set_taborder("28");
                p.Static05_01_00_00.set_text("[enabled]");
                p.Static05_01_00_00.set_cssclass("sta_WF_GStatus");
                p.Static05_01_00_00.move("220","724","120","20",null,null);

                p.Tab00_00.set_taborder("29");
                p.Tab00_00.set_tabindex("0");
                p.Tab00_00.move("220","774","665","95",null,null);

                p.Tab00_00.Tabpage1.set_text("Tabpage1");

                p.Tab00_00.Tabpage2.set_text("Tabpage2");

                p.Tab00_00.Tabpage3.set_text("Tabpage3");

                p.Tab00_00.Tabpage4.set_text("Tabpage4");

                p.Tab00_00.Tabpage5.set_text("Tabpage5");

                p.Tab00_00.Tabpage6.set_text("Tabpage6");

                p.Tab00_00.Tabpage7.set_text("Tabpage7");

                p.Tab00_00.Tabpage8.set_text("Tabpage8");

                p.Static02_01_00_00_00.set_taborder("30");
                p.Static02_01_00_00_00.set_text("Grid");
                p.Static02_01_00_00_00.set_cssclass("sta_WF_GLabel");
                p.Static02_01_00_00_00.move("0","924","200","1086",null,null);

                p.Static03_01_00_00_00.set_taborder("31");
                p.Static03_01_00_00_00.set_cssclass("sta_WF_GArea");
                p.Static03_01_00_00_00.move("199","924","1421","1086",null,null);

                p.Grid00.set_taborder("32");
                p.Grid00.set_binddataset("ds_grd");
                p.Grid00.set_autofittype("col");
                p.Grid00.move("220","995","760","239",null,null);

                p.Static05_01_00_00_00.set_taborder("33");
                p.Static05_01_00_00_00.set_text("[enabled]");
                p.Static05_01_00_00_00.set_cssclass("sta_WF_GStatus");
                p.Static05_01_00_00_00.move("220","945","120","20",null,null);

                p.Grid01.set_taborder("34");
                p.Grid01.set_binddataset("ds_tree");
                p.Grid01.set_treeinitstatus("expand,all");
                p.Grid01.set_treeusecheckbox("false");
                p.Grid01.set_treeuseline("false");
                p.Grid01.set_treeuseimage("false");
                p.Grid01.set_cssclass("grd_WF_Tree");
                p.Grid01.set_useselcolor("false");
                p.Grid01.move("1005","995","315","654",null,null);

                p.Grid02.set_taborder("35");
                p.Grid02.set_binddataset("ds_grd2");
                p.Grid02.set_autofittype("col");
                p.Grid02.move("220","1264","760","251",null,null);

                p.Grid02_00.set_taborder("36");
                p.Grid02_00.set_binddataset("ds_grd2");
                p.Grid02_00.set_autofittype("col");
                p.Grid02_00.move("220","1545","760","352",null,null);

                p.CheckBox01.set_taborder("37");
                p.CheckBox01.set_cssclass("chk_WF_Toggle");
                p.CheckBox01.move("1080","100","150","50",null,null);

                p.CheckBox01_00.set_taborder("38");
                p.CheckBox01_00.set_cssclass("chk_WF_Toggle");
                p.CheckBox01_00.set_value("true");
                p.CheckBox01_00.move("1280","100","150","50",null,null);

                p.Static04.set_taborder("39");
                p.Static04.set_text("CheckBox Toggle Type   <b v=\"true\"><fc v=\"#d50136\">cssclass =chk_WF_Toggle</fc></b>");
                p.Static04.set_usedecorate("true");
                p.Static04.move("1090","40","490","40",null,null);

                p.MultiCombo00_01.set_taborder("40");
                p.MultiCombo00_01.set_innerdataset("ds_fruit");
                p.MultiCombo00_01.set_codecolumn("code");
                p.MultiCombo00_01.set_datacolumn("data");
                p.MultiCombo00_01.set_readonlycolumn("readonly");
                p.MultiCombo00_01.set_edittype("multitag");
                p.MultiCombo00_01.set_text("apple,banana,mangosteen");
                p.MultiCombo00_01.set_value("1,2,3");
                p.MultiCombo00_01.set_index("0,1,2");
                p.MultiCombo00_01.move("200","840","490","190",null,null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("default0","screen_phone",480,728,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Mobile_CompGuide02.xfdl", function() {

        this.Static04_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.addEventHandler("onbindingvaluechanged",this.Mobile_Work_onbindingvaluechanged,this);
            this.Static04.addEventHandler("onclick",this.Static04_onclick,this);
        };
        this.loadIncludeScript("Mobile_CompGuide02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
