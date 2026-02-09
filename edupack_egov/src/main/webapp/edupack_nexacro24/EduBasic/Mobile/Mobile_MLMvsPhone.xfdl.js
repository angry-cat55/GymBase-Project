(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Mobile_MLMvsPhone");
            this.set_titletext("MLM ");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_emp", this);
            obj.set_keystring("");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMPL_ID","type" : "STRING","size" : "10"},{"id" : "FULL_NAME","type" : "STRING","size" : "50"},{"id" : "DEPT_CD","type" : "STRING","size" : "10"},{"id" : "POS_CD","type" : "STRING","size" : "10"},{"id" : "HIRE_DATE","type" : "DATE","size" : "10"},{"id" : "SALARY","type" : "INT","size" : "10"},{"id" : "GENDER","type" : "STRING","size" : "10"},{"id" : "MARRIED","type" : "STRING","size" : "10"},{"id" : "MEMO","type" : "STRING","size" : "10"}]},"Rows" : [{"FULL_NAME" : "Olivia","POS_CD" : "03","HIRE_DATE" : "20101003","SALARY" : "83000","GENDER" : "W","MARRIED" : "true","MEMO" : "ivory","DEPT_CD" : "01","EMPL_ID" : "AA001"},{"FULL_NAME" : "John","POS_CD" : "04","HIRE_DATE" : "20051011","SALARY" : "76000","GENDER" : "M","MARRIED" : "false","MEMO" : "greenyellow","DEPT_CD" : "02","EMPL_ID" : "AA002"},{"FULL_NAME" : "Jackson","POS_CD" : "03","HIRE_DATE" : "20070206","SALARY" : "95000","GENDER" : "M","MARRIED" : "true","MEMO" : "aliceblue","DEPT_CD" : "03","EMPL_ID" : "BB001"},{"FULL_NAME" : "Maia","POS_CD" : "02","HIRE_DATE" : "20090512","SALARY" : "60000","GENDER" : "W","MARRIED" : "false","MEMO" : "ivory","DEPT_CD" : "04","EMPL_ID" : "BB002"},{"FULL_NAME" : "Adam","POS_CD" : "04","HIRE_DATE" : "20010109","SALARY" : "88000","GENDER" : "M","MARRIED" : "true","MEMO" : "greenyellow","DEPT_CD" : "01","EMPL_ID" : "CC001"},{"FULL_NAME" : "Ray","POS_CD" : "03","HIRE_DATE" : "20160202","SALARY" : "60000","GENDER" : "M","MARRIED" : "true","MEMO" : "lightpink","DEPT_CD" : "02","EMPL_ID" : "DD001"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pos", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "POS_CD","type" : "string","size" : "32"},{"id" : "POS_NAME","type" : "string","size" : "32"}]},"Rows" : [{"POS_CD" : "04","POS_NAME" : "Officer"},{"POS_CD" : "03","POS_NAME" : "Assistant Manager"},{"POS_CD" : "02","POS_NAME" : "Division Manager"},{"POS_CD" : "01","POS_NAME" : "Chairman"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "DEPT_CD","type" : "STRING","size" : "32"},{"id" : "DEPT_NAME","type" : "STRING","size" : "32"}]},"Rows" : [{"DEPT_CD" : "01","DEPT_NAME" : "Accounting Team"},{"DEPT_CD" : "02","DEPT_NAME" : "HR Team"},{"DEPT_CD" : "03","DEPT_NAME" : "Sales Team"},{"DEPT_CD" : "04","DEPT_NAME" : "Design Team"},{"DEPT_CD" : "05","DEPT_NAME" : "Education Team"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("st_title","15","10","193","26",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Employees");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"10","50","26","83",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Add");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"10","63","26","15",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Delete");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","15","46",null,null,"391","15",null,null,null,null,this);
            obj.set_taborder("3");
            obj.getSetter("leftbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_binddataset("ds_emp");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"120\"/><Column size=\"130\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Name\"/><Cell col=\"2\" text=\"ID\"/><Cell col=\"3\" text=\"Department\"/><Cell col=\"4\" text=\"Position\"/><Cell col=\"5\" text=\"Hire Date\"/><Cell col=\"6\" text=\"Salary\"/><Cell col=\"7\" text=\"Gender\"/><Cell col=\"8\" text=\"Married\"/><Cell col=\"9\" text=\"Memo\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\" celltype=\"head\"/><Cell col=\"1\" text=\"bind:FULL_NAME\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:EMPL_ID\" editlimit=\"\" edittype=\"mask\" maskeditformat=\"AA-###\" displaytype=\"mask\" maskedittype=\"string\"/><Cell col=\"3\" text=\"bind:DEPT_CD\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_dept\" combocodecol=\"DEPT_CD\" combodatacol=\"DEPT_NAME\"/><Cell col=\"4\" text=\"bind:POS_CD\" combodataset=\"ds_pos\" combocodecol=\"POS_CD\" combodatacol=\"POS_NAME\" displaytype=\"combocontrol\" edittype=\"combo\"/><Cell col=\"5\" text=\"bind:HIRE_DATE\" displaytype=\"date\" edittype=\"date\" textAlign=\"center\" calendarpopupsize=\"200 220\"/><Cell col=\"6\" text=\"bind:SALARY\" displaytype=\"number\" edittype=\"mask\" textAlign=\"right\" maskeditformat=\"#,###\"/><Cell col=\"7\" text=\"expr:comp.parent.fn_gender(GENDER)\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:MARRIED\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"9\" text=\"bind:MEMO\" edittype=\"normal\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"expr: &quot;Count: &quot; + dataset.getRowCount()\" textAlign=\"right\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\" text=\"expr:dataset.getAvg(&quot;SALARY&quot;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/></Band></Format><Format id=\"Format_Phone\"><Columns><Column size=\"35\"/><Column size=\"80\"/><Column size=\"210\"/><Column size=\"130\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"50\" band=\"head\"/><Row size=\"60\"/><Row size=\"60\"/><Row size=\"50\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" text=\"Name\"/><Cell col=\"2\" text=\"Hire Date\"/><Cell col=\"3\" text=\"Married\"/><Cell row=\"1\" col=\"1\" text=\"ID\"/><Cell row=\"1\" col=\"2\" text=\"Position\"/><Cell row=\"1\" col=\"3\" text=\"Salary\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" text=\"expr:currow+1\" textAlign=\"center\" celltype=\"head\"/><Cell col=\"1\" text=\"bind:FULL_NAME\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:HIRE_DATE\" displaytype=\"calendarcontrol\" edittype=\"date\" combodataset=\"ds_dept\" combocodecol=\"DEPT_CD\" combodatacol=\"DEPT_NAME\" calendardateformat=\"yyyy-MM-dd \" padding=\"7px\"/><Cell col=\"3\" text=\"bind:MARRIED\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\" calendarpopupsize=\"200 220\" calendardateformat=\"yyyy-MM-dd\"/><Cell row=\"1\" col=\"1\" text=\"bind:EMPL_ID\" editlimit=\"\" edittype=\"mask\" maskeditformat=\"AA-###\" displaytype=\"mask\" maskedittype=\"string\"/><Cell row=\"1\" col=\"2\" text=\"bind:POS_CD\" combodataset=\"ds_pos\" combocodecol=\"POS_CD\" combodatacol=\"POS_NAME\" displaytype=\"combocontrol\" edittype=\"combo\" padding=\"7px\" combopopuptype=\"center\"/><Cell row=\"1\" col=\"3\" text=\"bind:SALARY\" displaytype=\"number\" edittype=\"mask\" textAlign=\"right\" maskeditformat=\"#,###\" padding=\"0px 15px 0px 0px\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"expr: &quot;Count: &quot; + dataset.getRowCount()\"/><Cell col=\"2\"/><Cell col=\"3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_detail",null,"46","366",null,"15","15",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.getSetter("leftbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","129","0","237","36",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("10");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static01","129","35","237","36",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("11");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static09","129","70","237","36",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("13");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static15","129","105","237","100",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("18");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static17","129","204","237","36",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("20");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static13","129","239","237","36",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("16");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static20","129","274","237","36",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static04","129","309","237","36",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("24");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static07","129","344","237","195",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("26");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.div_detail.addChild(obj.name, obj);

            obj = new Edit("edt_name","134","5","180","26",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("0");
            this.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_id","134","40","180","26",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("1");
            obj.set_type("string");
            obj.set_format("AA-###");
            this.div_detail.addChild(obj.name, obj);

            obj = new Combo("cbo_dept","134","75","180","26",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.div_detail.addChild(obj.name, obj);

            obj = new ListBox("lst_pos","135","111","180","88",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_pos");
            obj.set_codecolumn("POS_CD");
            obj.set_datacolumn("POS_NAME");
            this.div_detail.addChild(obj.name, obj);

            obj = new Radio("rdo_gender","134","209","180","26",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            var div_detail_form_rdo_gender_innerdataset = new nexacro.NormalDataset("div_detail_form_rdo_gender_innerdataset", obj);
            div_detail_form_rdo_gender_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "M","datacolumn" : "Male"},{"codecolumn" : "W","datacolumn" : "Female"}]});
            obj.set_innerdataset(div_detail_form_rdo_gender_innerdataset);
            this.div_detail.addChild(obj.name, obj);

            obj = new CheckBox("chk_married","134","244","180","26",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("5");
            this.div_detail.addChild(obj.name, obj);

            obj = new Calendar("cal_date","134","279","180","26",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("6");
            this.div_detail.addChild(obj.name, obj);

            obj = new TextArea("txt_memo","134","350","180","183",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("9");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static08","0","70","130","36",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("12");
            obj.set_text("Department");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static10","0","0","130","36",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("14");
            obj.set_text("Name");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static12","0","274","130","36",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("15");
            obj.set_text("Hire Date");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static14","0","105","130","100",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("17");
            obj.set_text("Position");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static16","0","204","130","36",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("19");
            obj.set_text("Gender");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static19","0","309","130","36",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("21");
            obj.set_text("Annual Salary");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static00","0","35","130","36",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("22");
            obj.set_text("Emp ID");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static03","0","239","130","36",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("23");
            obj.set_text("Married");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static05","0","344","130","195",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("25");
            obj.set_text("Memo");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_salary","134","314","180","26",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("8");
            obj.set_type("number");
            obj.set_format("#,###");
            this.div_detail.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_detail.form
            obj = new Layout("default","",0,0,this.div_detail.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static02.set_taborder("10");
                p.Static02.set_text("");
                p.Static02.set_background("");
                p.Static02.set_padding("");
                p.Static02.set_cssclass("sta_WF_DetailArea");
                p.Static02.move("129","0","237","36",null,null);

                p.Static01.set_taborder("11");
                p.Static01.set_text("");
                p.Static01.set_background("");
                p.Static01.set_padding("");
                p.Static01.set_cssclass("sta_WF_DetailArea");
                p.Static01.move("129","35","237","36",null,null);

                p.Static09.set_taborder("13");
                p.Static09.set_text("");
                p.Static09.set_background("");
                p.Static09.set_padding("");
                p.Static09.set_cssclass("sta_WF_DetailArea");
                p.Static09.move("129","70","237","36",null,null);

                p.Static15.set_taborder("18");
                p.Static15.set_text("");
                p.Static15.set_background("");
                p.Static15.set_padding("");
                p.Static15.set_cssclass("sta_WF_DetailArea");
                p.Static15.move("129","105","237","100",null,null);

                p.Static17.set_taborder("20");
                p.Static17.set_text("");
                p.Static17.set_background("");
                p.Static17.set_padding("");
                p.Static17.set_cssclass("sta_WF_DetailArea");
                p.Static17.move("129","204","237","36",null,null);

                p.Static13.set_taborder("16");
                p.Static13.set_text("");
                p.Static13.set_background("");
                p.Static13.set_padding("");
                p.Static13.set_cssclass("sta_WF_DetailArea");
                p.Static13.move("129","239","237","36",null,null);

                p.Static20.set_taborder("7");
                p.Static20.set_text("");
                p.Static20.set_background("");
                p.Static20.set_padding("");
                p.Static20.set_cssclass("sta_WF_DetailArea");
                p.Static20.move("129","274","237","36",null,null);

                p.Static04.set_taborder("24");
                p.Static04.set_text("");
                p.Static04.set_background("");
                p.Static04.set_padding("");
                p.Static04.set_cssclass("sta_WF_DetailArea");
                p.Static04.move("129","309","237","36",null,null);

                p.Static07.set_taborder("26");
                p.Static07.set_text("");
                p.Static07.set_background("");
                p.Static07.set_padding("");
                p.Static07.set_cssclass("sta_WF_DetailArea");
                p.Static07.move("129","344","237","195",null,null);

                p.edt_name.set_taborder("0");
                p.edt_name.move("134","5","180","26",null,null);

                p.msk_id.set_taborder("1");
                p.msk_id.set_type("string");
                p.msk_id.set_format("AA-###");
                p.msk_id.move("134","40","180","26",null,null);

                p.cbo_dept.set_taborder("2");
                p.cbo_dept.set_innerdataset("ds_dept");
                p.cbo_dept.set_codecolumn("DEPT_CD");
                p.cbo_dept.set_datacolumn("DEPT_NAME");
                p.cbo_dept.set_text("");
                p.cbo_dept.set_value("");
                p.cbo_dept.set_index("-1");
                p.cbo_dept.move("134","75","180","26",null,null);

                p.lst_pos.set_taborder("3");
                p.lst_pos.set_innerdataset("ds_pos");
                p.lst_pos.set_codecolumn("POS_CD");
                p.lst_pos.set_datacolumn("POS_NAME");
                p.lst_pos.move("135","111","180","88",null,null);

                p.rdo_gender.set_taborder("4");
                p.rdo_gender.set_codecolumn("codecolumn");
                p.rdo_gender.set_datacolumn("datacolumn");
                p.rdo_gender.set_columncount("2");
                p.rdo_gender.set_innerdataset(div_detail_form_rdo_gender_innerdataset);
                p.rdo_gender.move("134","209","180","26",null,null);

                p.chk_married.set_taborder("5");
                p.chk_married.move("134","244","180","26",null,null);

                p.cal_date.set_taborder("6");
                p.cal_date.move("134","279","180","26",null,null);

                p.txt_memo.set_taborder("9");
                p.txt_memo.move("134","350","180","183",null,null);

                p.Static08.set_taborder("12");
                p.Static08.set_text("Department");
                p.Static08.set_background("");
                p.Static08.set_padding("");
                p.Static08.set_cssclass("sta_WF_DetailLabel");
                p.Static08.move("0","70","130","36",null,null);

                p.Static10.set_taborder("14");
                p.Static10.set_text("Name");
                p.Static10.set_background("");
                p.Static10.set_padding("");
                p.Static10.set_cssclass("sta_WF_DetailLabel");
                p.Static10.move("0","0","130","36",null,null);

                p.Static12.set_taborder("15");
                p.Static12.set_text("Hire Date");
                p.Static12.set_background("");
                p.Static12.set_padding("");
                p.Static12.set_cssclass("sta_WF_DetailLabel");
                p.Static12.move("0","274","130","36",null,null);

                p.Static14.set_taborder("17");
                p.Static14.set_text("Position");
                p.Static14.set_background("");
                p.Static14.set_padding("");
                p.Static14.set_cssclass("sta_WF_DetailLabel");
                p.Static14.move("0","105","130","100",null,null);

                p.Static16.set_taborder("19");
                p.Static16.set_text("Gender");
                p.Static16.set_background("");
                p.Static16.set_padding("");
                p.Static16.set_cssclass("sta_WF_DetailLabel");
                p.Static16.move("0","204","130","36",null,null);

                p.Static19.set_taborder("21");
                p.Static19.set_text("Annual Salary");
                p.Static19.set_background("");
                p.Static19.set_padding("");
                p.Static19.set_cssclass("sta_WF_DetailLabel");
                p.Static19.move("0","309","130","36",null,null);

                p.Static00.set_taborder("22");
                p.Static00.set_text("Emp ID");
                p.Static00.set_background("");
                p.Static00.set_padding("");
                p.Static00.set_cssclass("sta_WF_DetailLabel");
                p.Static00.move("0","35","130","36",null,null);

                p.Static03.set_taborder("23");
                p.Static03.set_text("Married");
                p.Static03.set_background("");
                p.Static03.set_padding("");
                p.Static03.set_cssclass("sta_WF_DetailLabel");
                p.Static03.move("0","239","130","36",null,null);

                p.Static05.set_taborder("25");
                p.Static05.set_text("Memo");
                p.Static05.set_background("");
                p.Static05.set_padding("");
                p.Static05.set_cssclass("sta_WF_DetailLabel");
                p.Static05.move("0","344","130","195",null,null);

                p.msk_salary.set_taborder("8");
                p.msk_salary.set_type("number");
                p.msk_salary.set_format("#,###");
                p.msk_salary.move("134","314","180","26",null,null);
            	}
            );
            this.div_detail.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div_detail.form
            obj = new Layout("Layout0","",0,0,this.div_detail.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static02.move("159","0","264","52",null,null);

                p.Static01.move("159","51","264","52",null,null);

                p.Static09.move("159","102","264","52",null,null);

                p.Static15.move("159","153","264","134",null,null);

                p.Static17.move("159","286","264","52",null,null);

                p.Static13.move("159","337","264","52",null,null);

                p.Static20.move("159","388","264","52",null,null);

                p.Static04.move("159","439","264","52",null,null);

                p.Static07.move("159","490","264","178",null,null);

                p.edt_name.move("170","6","230","40",null,null);

                p.msk_id.move("170","57","230","40",null,null);

                p.cbo_dept.set_scrollbardecbuttonsize("0");
                p.cbo_dept.set_scrollbarincbuttonsize("0");
                p.cbo_dept.set_popuptype("center");
                p.cbo_dept.move("170","108","230","40",null,null);

                p.lst_pos.set_scrollbardecbuttonsize("0");
                p.lst_pos.set_scrollbarincbuttonsize("0");
                p.lst_pos.move("170","159","230","122",null,null);

                p.rdo_gender.move("165","292","230","40",null,null);

                p.chk_married.set_text("Married");
                p.chk_married.move("165","343","230","40",null,null);

                p.cal_date.set_daysize("40 40");
                p.cal_date.set_headheight("50");
                p.cal_date.set_popupsize("282 332");
                p.cal_date.set_usetrailingday("true");
                p.cal_date.set_popuptype("center");
                p.cal_date.set_headformat("yyyy . MM");
                p.cal_date.move("165","394","230","40",null,null);

                p.txt_memo.move("165","496","230","166",null,null);

                p.msk_salary.move("165","445","230","40",null,null);

                p.Static08.move("0","102","160","52",null,null);

                p.Static10.move("0","0","160","52",null,null);

                p.Static12.move("0","388","160","52",null,null);

                p.Static14.move("0","153","160","134",null,null);

                p.Static16.move("0","286","160","52",null,null);

                p.Static19.move("0","439","160","52",null,null);

                p.Static00.move("0","51","160","52",null,null);

                p.Static03.move("0","337","160","52",null,null);

                p.Static05.move("0","490","160","178",null,null);
            	}
            );
            this.div_detail.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","screen_desktop",800,600,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("MLM ");

                p.st_title.set_taborder("0");
                p.st_title.set_text("Employees");
                p.st_title.getSetter("leftbase").set("");
                p.st_title.getSetter("topbase").set("");
                p.st_title.getSetter("bottombase").set("");
                p.st_title.getSetter("rightbase").set("");
                p.st_title.getSetter("widthbase").set("");
                p.st_title.getSetter("heightbase").set("");
                p.st_title.set_cssclass("sta_WF_Title");
                p.st_title.move("15","10","193","26",null,null);

                p.btn_add.set_taborder("1");
                p.btn_add.set_text("Add");
                p.btn_add.set_cssclass("btn_WF_CRUD");
                p.btn_add.move(null,"10","50","26","83",null);

                p.btn_del.set_taborder("2");
                p.btn_del.set_text("Delete");
                p.btn_del.set_cssclass("btn_WF_CRUD");
                p.btn_del.move(null,"10","63","26","15",null);

                p.grd_list.set_taborder("3");
                p.grd_list.getSetter("leftbase").set("");
                p.grd_list.getSetter("bottombase").set("");
                p.grd_list.getSetter("widthbase").set("");
                p.grd_list.getSetter("heightbase").set("");
                p.grd_list.set_binddataset("ds_emp");
                p.grd_list.move("15","46",null,null,"391","15");

                p.div_detail.set_taborder("4");
                p.div_detail.set_text("Div00");
                p.div_detail.getSetter("leftbase").set("");
                p.div_detail.getSetter("bottombase").set("");
                p.div_detail.getSetter("rightbase").set("");
                p.div_detail.getSetter("widthbase").set("");
                p.div_detail.getSetter("heightbase").set("");
                p.div_detail.move(null,"46","366",null,"15","15");
            	}
            );
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","screen_phone",480,768,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("MLM");

                p.div_detail.set_text("Div00");
                p.div_detail.set_cssclass("div_WF_back");
                p.div_detail.set_positionstep("1");
                p.div_detail.move("15","75",null,null,"15","25");

                p.grd_list.set_formatid("Format_Phone");
                p.grd_list.set_autofittype("col");
                p.grd_list.set_scrollbardecbuttonsize("0");
                p.grd_list.set_scrollbarincbuttonsize("0");
                p.grd_list.move("15","75",null,null,"14","25");

                p.st_title.set_positionstep("-1");
                p.st_title.set_cssclass("sta_WF_MTitle");
                p.st_title.move("15","10","193","50",null,null);

                p.btn_add.set_positionstep("-1");
                p.btn_add.move(null,"10","100","50","117",null);

                p.btn_del.set_positionstep("-1");
                p.btn_del.move(null,"10","97","50","15",null);
            	}
            );
            obj.set_mobileorientation("portrait");
            obj.set_stepcount("2");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_detail.form.cbo_dept","value","ds_emp","DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_detail.form.edt_name","value","ds_emp","FULL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_detail.form.msk_id","value","ds_emp","EMPL_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_detail.form.cal_date","value","ds_emp","HIRE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_detail.form.msk_salary","value","ds_emp","SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_detail.form.rdo_gender","value","ds_emp","GENDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_detail.form.chk_married","value","ds_emp","MARRIED");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_detail.form.txt_memo","value","ds_emp","MEMO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_detail.form.lst_pos","value","ds_emp","POS_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Mobile_MLMvsPhone.xfdl", function() {

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.addEventHandler("ontimer",this.Form_Emp_ontimer,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.grd_list.addEventHandler("onheadclick",this.grd_list_onheadclick,this);
            this.div_detail.form.Static04.addEventHandler("onclick",this.Div00_Static04_onclick,this);
            this.div_detail.form.Static07.addEventHandler("onclick",this.Div00_Static07_onclick,this);
            this.div_detail.form.edt_name.addEventHandler("canchange",this.div_detail_edt_name_canchange,this);
            this.div_detail.form.Static10.addEventHandler("onclick",this.div_detail_Static10_onclick,this);
            this.div_detail.form.Static05.addEventHandler("onclick",this.Div00_Static05_onclick,this);
            this.ds_emp.addEventHandler("cancolumnchange",this.ds_emp_cancolumnchange,this);
            this.ds_emp.addEventHandler("onrowsetchanged",this.ds_emp_onrowsetchanged,this);
            this.ds_emp.addEventHandler("onrowposchanged",this.ds_emp_onrowposchanged,this);
        };
        this.loadIncludeScript("Mobile_MLMvsPhone.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
