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
            this.set_titletext("edt,msk,txt,btn,cbo,lst,cal");
            if (Form == this.constructor)
            {
                this._setFormPosition(1680,1420);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dept", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "code","type" : "STRING","size" : "256"},{"id" : "data","type" : "STRING","size" : "256"}]},"Rows" : [{"code" : "1","data" : "Financial Accounting Team"},{"code" : "2","data" : "Human Resource Team"},{"code" : "3","data" : "Marketing Team"},{"code" : "4","data" : "Education Team"},{"code" : "5","data" : "Sales Team"},{"code" : "6","data" : "Presales Team"},{"code" : "7","data" : "Technical Support Team"},{"code" : "8","data" : "Server Support Team"},{"code" : "9","data" : "Mobile Support Team"},{"code" : "10","data" : "Architecture  Team"},{"data" : "Platform Team","code" : "11"},{"data" : "Cloud Team","code" : "12"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_position", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "code","type" : "STRING","size" : "256"},{"id" : "data","type" : "STRING","size" : "256"}]},"Rows" : [{"code" : "1","data" : "CEO"},{"code" : "2","data" : "Director"},{"code" : "3","data" : "General Manager"},{"code" : "4","data" : "Manager"},{"code" : "5","data" : "Assistant Manager"},{"code" : "6","data" : "Staff"}]});
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
            obj.set_text("Edit");
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

            obj = new Static("Static05_01_01","550","50","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("[disabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_01_00","880","50","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("[readonly]");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_01_00_00","1210","50","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("[nulltext]");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","220","100","280","50",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_value("Nexacro N24");
            obj.set_text("Nexacro N24");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","550","100","280","50",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_enable("false");
            obj.set_value("Nexacro N24");
            obj.set_text("Nexacro N24");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","880","100","280","50",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_readonly("true");
            obj.set_value("Nexacro N24");
            obj.set_text("Nexacro N24");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02","1210","100","280","50",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_displaynulltext("PASSWORD");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","516","116","15","18",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("50");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_02","505","100","5","50",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","0","190","200","162",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("MaskEdit");
            obj.set_cssclass("sta_WF_GLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","199","190","1421","162",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00","220","211","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("[enabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_01_01","550","211","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("[disabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_01_00_01","880","211","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("[readonly]");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_01_00_00_00","1210","211","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("[invalidtext]");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00","516","278","15","18",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("50");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_02_00","505","262","5","50",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","0","351","200","282",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("TextArea");
            obj.set_cssclass("sta_WF_GLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00","199","351","1421","282",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00","220","372","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("[enabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_01_01_00","550","372","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("[disabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_01_00_01_00","880","372","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("[readonly]");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_01_00_00_00_00","1210","372","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("[nulltext]");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","220","262","280","50",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_value("12345000");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00","550","262","280","50",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_value("12345000");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01","880","262","280","50",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_value("12345000");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_02","1210","262","280","50",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_value("12345000");
            obj.set_type("string");
            obj.set_format("AAAA_####");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","220","422","280","180",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_value("Digital transformation is the incorporation of computer-based technologies into an organization\'s products, processes and strategies.");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00_00","550","422","280","180",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_value("Digital transformation is the incorporation of computer-based technologies into an organization\'s products, processes and strategies.");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00_01","880","422","280","180",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_value("Digital transformation is the incorporation of computer-based technologies into an organization\'s products, processes and strategies.");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00_02","1210","422","280","180",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_displaynulltext("Memo");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_01","199","632","1421","162",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_01","220","653","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("[enabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01","0","632","200","162",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("Button");
            obj.set_cssclass("sta_WF_GLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_01_01_01","550","653","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("[disabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","220","703","280","50",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("Button");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","550","703","280","50",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("Button");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_02","0","793","200","162",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("Combo");
            obj.set_cssclass("sta_WF_GLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_02","199","793","1421","162",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_02","220","814","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("[enabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_01_01_02","550","814","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("[disabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_01_00_01_01","880","814","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("[readonly]");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","220","864","280","50",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","550","864","280","50",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_enable("false");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00_01","880","864","280","50",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_readonly("true");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","0","954","200","282",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("ListBox");
            obj.set_cssclass("sta_WF_GLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00","199","954","1421","282",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_00","220","975","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("[enabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_01_01_00_00","550","975","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("[disabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new ListBox("ListBox00","220","1025","280","180",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_innerdataset("ds_position");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            this.addChild(obj.name, obj);

            obj = new ListBox("ListBox00_00","550","1025","280","180",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_innerdataset("ds_position");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00","0","1235","200","162",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("Calendar");
            obj.set_cssclass("sta_WF_GLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00_00","199","1235","1421","162",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_00_00","220","1256","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("[enabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_01_01_00_00_00","550","1256","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("[disabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","220","1306","280","50",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_popupsize("355 353");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00","550","1306","280","50",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_popupsize("355 353");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","screen_phone",1680,1420,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("edt,msk,txt,btn,cbo,lst,cal");

                p.Static01.set_taborder("0");
                p.Static01.set_text("Style");
                p.Static01.set_cssclass("sta_WF_GTitle");
                p.Static01.move("199.00","0","1421","30",null,null);

                p.Static00.set_taborder("1");
                p.Static00.set_text("Component");
                p.Static00.set_cssclass("sta_WF_GTitle");
                p.Static00.move("0","0","200","30",null,null);

                p.Static02.set_taborder("2");
                p.Static02.set_text("Edit");
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
                p.Static05_01_01.move("550","50","120","20",null,null);

                p.Static05_01_01_00.set_taborder("6");
                p.Static05_01_01_00.set_text("[readonly]");
                p.Static05_01_01_00.set_cssclass("sta_WF_GStatus");
                p.Static05_01_01_00.move("880","50","120","20",null,null);

                p.Static05_01_01_00_00.set_taborder("7");
                p.Static05_01_01_00_00.set_text("[nulltext]");
                p.Static05_01_01_00_00.set_cssclass("sta_WF_GStatus");
                p.Static05_01_01_00_00.move("1210","50","120","20",null,null);

                p.Edit00.set_taborder("8");
                p.Edit00.set_value("Nexacro N24");
                p.Edit00.move("220","100","280","50",null,null);

                p.Edit00_00.set_taborder("9");
                p.Edit00_00.set_enable("false");
                p.Edit00_00.set_value("Nexacro N24");
                p.Edit00_00.move("550","100","280","50",null,null);

                p.Edit00_01.set_taborder("10");
                p.Edit00_01.set_readonly("true");
                p.Edit00_01.set_value("Nexacro N24");
                p.Edit00_01.move("880","100","280","50",null,null);

                p.Edit00_02.set_taborder("11");
                p.Edit00_02.set_displaynulltext("PASSWORD");
                p.Edit00_02.move("1210","100","280","50",null,null);

                p.Static07.set_taborder("12");
                p.Static07.set_text("50");
                p.Static07.set_cssclass("sta_WF_GTxt");
                p.Static07.move("516","116","15","18",null,null);

                p.Static04_02.set_taborder("13");
                p.Static04_02.set_cssclass("sta_WF_GLineV");
                p.Static04_02.move("505","100","5","50",null,null);

                p.Static02_00.set_taborder("14");
                p.Static02_00.set_text("MaskEdit");
                p.Static02_00.set_cssclass("sta_WF_GLabel");
                p.Static02_00.move("0","190","200","162",null,null);

                p.Static03_00.set_taborder("15");
                p.Static03_00.set_cssclass("sta_WF_GArea");
                p.Static03_00.move("199","190","1421","162",null,null);

                p.Static05_00.set_taborder("16");
                p.Static05_00.set_text("[enabled]");
                p.Static05_00.set_cssclass("sta_WF_GStatus");
                p.Static05_00.move("220","211","120","20",null,null);

                p.Static05_01_01_01.set_taborder("17");
                p.Static05_01_01_01.set_text("[disabled]");
                p.Static05_01_01_01.set_cssclass("sta_WF_GStatus");
                p.Static05_01_01_01.move("550","211","120","20",null,null);

                p.Static05_01_01_00_01.set_taborder("18");
                p.Static05_01_01_00_01.set_text("[readonly]");
                p.Static05_01_01_00_01.set_cssclass("sta_WF_GStatus");
                p.Static05_01_01_00_01.move("880","211","120","20",null,null);

                p.Static05_01_01_00_00_00.set_taborder("19");
                p.Static05_01_01_00_00_00.set_text("[invalidtext]");
                p.Static05_01_01_00_00_00.set_cssclass("sta_WF_GStatus");
                p.Static05_01_01_00_00_00.move("1210","211","120","20",null,null);

                p.Static07_00.set_taborder("20");
                p.Static07_00.set_text("50");
                p.Static07_00.set_cssclass("sta_WF_GTxt");
                p.Static07_00.move("516","278","15","18",null,null);

                p.Static04_02_00.set_taborder("21");
                p.Static04_02_00.set_cssclass("sta_WF_GLineV");
                p.Static04_02_00.move("505","262","5","50",null,null);

                p.Static02_00_00.set_taborder("22");
                p.Static02_00_00.set_text("TextArea");
                p.Static02_00_00.set_cssclass("sta_WF_GLabel");
                p.Static02_00_00.move("0","351","200","282",null,null);

                p.Static03_00_00.set_taborder("23");
                p.Static03_00_00.set_cssclass("sta_WF_GArea");
                p.Static03_00_00.move("199","351","1421","282",null,null);

                p.Static05_00_00.set_taborder("24");
                p.Static05_00_00.set_text("[enabled]");
                p.Static05_00_00.set_cssclass("sta_WF_GStatus");
                p.Static05_00_00.move("220","372","120","20",null,null);

                p.Static05_01_01_01_00.set_taborder("25");
                p.Static05_01_01_01_00.set_text("[disabled]");
                p.Static05_01_01_01_00.set_cssclass("sta_WF_GStatus");
                p.Static05_01_01_01_00.move("550","372","120","20",null,null);

                p.Static05_01_01_00_01_00.set_taborder("26");
                p.Static05_01_01_00_01_00.set_text("[readonly]");
                p.Static05_01_01_00_01_00.set_cssclass("sta_WF_GStatus");
                p.Static05_01_01_00_01_00.move("880","372","120","20",null,null);

                p.Static05_01_01_00_00_00_00.set_taborder("27");
                p.Static05_01_01_00_00_00_00.set_text("[nulltext]");
                p.Static05_01_01_00_00_00_00.set_cssclass("sta_WF_GStatus");
                p.Static05_01_01_00_00_00_00.move("1210","372","120","20",null,null);

                p.MaskEdit00.set_taborder("28");
                p.MaskEdit00.set_value("12345000");
                p.MaskEdit00.move("220","262","280","50",null,null);

                p.MaskEdit00_00.set_taborder("29");
                p.MaskEdit00_00.set_value("12345000");
                p.MaskEdit00_00.move("550","262","280","50",null,null);

                p.MaskEdit00_01.set_taborder("30");
                p.MaskEdit00_01.set_value("12345000");
                p.MaskEdit00_01.move("880","262","280","50",null,null);

                p.MaskEdit00_02.set_taborder("31");
                p.MaskEdit00_02.set_value("12345000");
                p.MaskEdit00_02.set_type("string");
                p.MaskEdit00_02.set_format("AAAA_####");
                p.MaskEdit00_02.move("1210","262","280","50",null,null);

                p.TextArea00.set_taborder("32");
                p.TextArea00.set_value("Digital transformation is the incorporation of computer-based technologies into an organization\'s products, processes and strategies.");
                p.TextArea00.move("220","422","280","180",null,null);

                p.TextArea00_00.set_taborder("33");
                p.TextArea00_00.set_value("Digital transformation is the incorporation of computer-based technologies into an organization\'s products, processes and strategies.");
                p.TextArea00_00.move("550","422","280","180",null,null);

                p.TextArea00_01.set_taborder("34");
                p.TextArea00_01.set_value("Digital transformation is the incorporation of computer-based technologies into an organization\'s products, processes and strategies.");
                p.TextArea00_01.move("880","422","280","180",null,null);

                p.TextArea00_02.set_taborder("35");
                p.TextArea00_02.set_displaynulltext("Memo");
                p.TextArea00_02.move("1210","422","280","180",null,null);

                p.Static03_00_01.set_taborder("36");
                p.Static03_00_01.set_cssclass("sta_WF_GArea");
                p.Static03_00_01.move("199","632","1421","162",null,null);

                p.Static05_00_01.set_taborder("37");
                p.Static05_00_01.set_text("[enabled]");
                p.Static05_00_01.set_cssclass("sta_WF_GStatus");
                p.Static05_00_01.move("220","653","120","20",null,null);

                p.Static02_00_01.set_taborder("38");
                p.Static02_00_01.set_text("Button");
                p.Static02_00_01.set_cssclass("sta_WF_GLabel");
                p.Static02_00_01.move("0","632","200","162",null,null);

                p.Static05_01_01_01_01.set_taborder("39");
                p.Static05_01_01_01_01.set_text("[disabled]");
                p.Static05_01_01_01_01.set_cssclass("sta_WF_GStatus");
                p.Static05_01_01_01_01.move("550","653","120","20",null,null);

                p.Button00.set_taborder("40");
                p.Button00.set_text("Button");
                p.Button00.move("220","703","280","50",null,null);

                p.Button00_00.set_taborder("41");
                p.Button00_00.set_text("Button");
                p.Button00_00.set_enable("false");
                p.Button00_00.move("550","703","280","50",null,null);

                p.Static02_00_02.set_taborder("42");
                p.Static02_00_02.set_text("Combo");
                p.Static02_00_02.set_cssclass("sta_WF_GLabel");
                p.Static02_00_02.move("0","793","200","162",null,null);

                p.Static03_00_02.set_taborder("46");
                p.Static03_00_02.set_cssclass("sta_WF_GArea");
                p.Static03_00_02.move("199","793","1421","162",null,null);

                p.Static05_00_02.set_taborder("43");
                p.Static05_00_02.set_text("[enabled]");
                p.Static05_00_02.set_cssclass("sta_WF_GStatus");
                p.Static05_00_02.move("220","814","120","20",null,null);

                p.Static05_01_01_01_02.set_taborder("44");
                p.Static05_01_01_01_02.set_text("[disabled]");
                p.Static05_01_01_01_02.set_cssclass("sta_WF_GStatus");
                p.Static05_01_01_01_02.move("550","814","120","20",null,null);

                p.Static05_01_01_00_01_01.set_taborder("45");
                p.Static05_01_01_00_01_01.set_text("[readonly]");
                p.Static05_01_01_00_01_01.set_cssclass("sta_WF_GStatus");
                p.Static05_01_01_00_01_01.move("880","814","120","20",null,null);

                p.Combo00.set_taborder("47");
                p.Combo00.set_innerdataset("ds_dept");
                p.Combo00.set_codecolumn("code");
                p.Combo00.set_datacolumn("data");
                p.Combo00.set_text("Combo00");
                p.Combo00.move("220","864","280","50",null,null);

                p.Combo00_00.set_taborder("48");
                p.Combo00_00.set_innerdataset("ds_dept");
                p.Combo00_00.set_codecolumn("code");
                p.Combo00_00.set_datacolumn("data");
                p.Combo00_00.set_enable("false");
                p.Combo00_00.set_text("Combo00");
                p.Combo00_00.move("550","864","280","50",null,null);

                p.Combo00_01.set_taborder("49");
                p.Combo00_01.set_innerdataset("ds_dept");
                p.Combo00_01.set_codecolumn("code");
                p.Combo00_01.set_datacolumn("data");
                p.Combo00_01.set_readonly("true");
                p.Combo00_01.set_text("Combo00");
                p.Combo00_01.move("880","864","280","50",null,null);

                p.Static02_00_00_00.set_taborder("50");
                p.Static02_00_00_00.set_text("ListBox");
                p.Static02_00_00_00.set_cssclass("sta_WF_GLabel");
                p.Static02_00_00_00.move("0","954","200","282",null,null);

                p.Static03_00_00_00.set_taborder("53");
                p.Static03_00_00_00.set_cssclass("sta_WF_GArea");
                p.Static03_00_00_00.move("199","954","1421","282",null,null);

                p.Static05_00_00_00.set_taborder("51");
                p.Static05_00_00_00.set_text("[enabled]");
                p.Static05_00_00_00.set_cssclass("sta_WF_GStatus");
                p.Static05_00_00_00.move("220","975","120","20",null,null);

                p.Static05_01_01_01_00_00.set_taborder("52");
                p.Static05_01_01_01_00_00.set_text("[disabled]");
                p.Static05_01_01_01_00_00.set_cssclass("sta_WF_GStatus");
                p.Static05_01_01_01_00_00.move("550","975","120","20",null,null);

                p.ListBox00.set_taborder("54");
                p.ListBox00.set_innerdataset("ds_position");
                p.ListBox00.set_codecolumn("code");
                p.ListBox00.set_datacolumn("data");
                p.ListBox00.move("220","1025","280","180",null,null);

                p.ListBox00_00.set_taborder("55");
                p.ListBox00_00.set_innerdataset("ds_position");
                p.ListBox00_00.set_codecolumn("code");
                p.ListBox00_00.set_datacolumn("data");
                p.ListBox00_00.set_enable("false");
                p.ListBox00_00.move("550","1025","280","180",null,null);

                p.Static02_00_00_00_00.set_taborder("56");
                p.Static02_00_00_00_00.set_text("Calendar");
                p.Static02_00_00_00_00.set_cssclass("sta_WF_GLabel");
                p.Static02_00_00_00_00.move("0","1235","200","162",null,null);

                p.Static03_00_00_00_00.set_taborder("59");
                p.Static03_00_00_00_00.set_cssclass("sta_WF_GArea");
                p.Static03_00_00_00_00.move("199","1235","1421","162",null,null);

                p.Static05_00_00_00_00.set_taborder("57");
                p.Static05_00_00_00_00.set_text("[enabled]");
                p.Static05_00_00_00_00.set_cssclass("sta_WF_GStatus");
                p.Static05_00_00_00_00.move("220","1256","120","20",null,null);

                p.Static05_01_01_01_00_00_00.set_taborder("58");
                p.Static05_01_01_01_00_00_00.set_text("[disabled]");
                p.Static05_01_01_01_00_00_00.set_cssclass("sta_WF_GStatus");
                p.Static05_01_01_01_00_00_00.move("550","1256","120","20",null,null);

                p.Calendar00.set_taborder("60");
                p.Calendar00.set_popupsize("355 353");
                p.Calendar00.move("220","1306","280","50",null,null);

                p.Calendar00_00.set_taborder("61");
                p.Calendar00_00.set_popupsize("355 353");
                p.Calendar00_00.move("550","1306","280","50",null,null);
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.addEventHandler("onbindingvaluechanged",this.Mobile_Work_onbindingvaluechanged,this);
        };
        this.loadIncludeScript("Mobile_CompGuide01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
