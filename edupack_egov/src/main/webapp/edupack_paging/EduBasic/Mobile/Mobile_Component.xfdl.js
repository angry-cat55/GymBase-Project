(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Mobile_Component");
            this.set_titletext("모바일컴포넌트");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,640);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_emp", this);
            obj.set_keystring("");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMPL_ID","type" : "STRING","size" : "10"},{"id" : "FULL_NAME","type" : "STRING","size" : "50"},{"id" : "DEPT_CD","type" : "STRING","size" : "10"},{"id" : "POS_CD","type" : "STRING","size" : "10"},{"id" : "HIRE_DATE","type" : "DATE","size" : "10"},{"id" : "SALARY","type" : "INT","size" : "10"},{"id" : "GENDER","type" : "STRING","size" : "10"},{"id" : "MARRIED","type" : "STRING","size" : "10"},{"id" : "MEMO","type" : "STRING","size" : "10"}]},"Rows" : [{"FULL_NAME" : "Olivia","POS_CD" : "03","HIRE_DATE" : "20101003","SALARY" : "83000","GENDER" : "W","MARRIED" : "true","MEMO" : "ivory","DEPT_CD" : "01","EMPL_ID" : "AA001"},{"FULL_NAME" : "John","POS_CD" : "04","HIRE_DATE" : "20051011","SALARY" : "76000","GENDER" : "M","MARRIED" : "false","MEMO" : "greenyellow","DEPT_CD" : "02","EMPL_ID" : "AA002"},{"FULL_NAME" : "Jackson","POS_CD" : "03","HIRE_DATE" : "20070206","SALARY" : "95000","GENDER" : "M","MARRIED" : "true","MEMO" : "aliceblue","DEPT_CD" : "03","EMPL_ID" : "BB001"},{"FULL_NAME" : "Maia","POS_CD" : "02","HIRE_DATE" : "20090512","SALARY" : "60000","GENDER" : "W","MARRIED" : "false","MEMO" : "ivory","DEPT_CD" : "04","EMPL_ID" : "BB002"},{"FULL_NAME" : "Adam","POS_CD" : "04","HIRE_DATE" : "20010109","SALARY" : "88000","GENDER" : "M","MARRIED" : "true","MEMO" : "greenyellow","DEPT_CD" : "01","EMPL_ID" : "CC001"},{"FULL_NAME" : "Ray","POS_CD" : "03","HIRE_DATE" : "20160202","SALARY" : "60000","GENDER" : "M","MARRIED" : "true","MEMO" : "lightpink","DEPT_CD" : "02","EMPL_ID" : "DD001"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "DEPT_CD","type" : "STRING","size" : "32"},{"id" : "DEPT_NAME","type" : "STRING","size" : "32"}]},"Rows" : [{"DEPT_CD" : "01","DEPT_NAME" : "Accounting Team"},{"DEPT_CD" : "02","DEPT_NAME" : "HR Team"},{"DEPT_CD" : "03","DEPT_NAME" : "Sales Team"},{"DEPT_CD" : "04","DEPT_NAME" : "Design Team"},{"DEPT_CD" : "05","DEPT_NAME" : "Education Team"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_slide","40","255","400","130",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none");
            obj.set_url("EduBasic::Mobile/Mobile_Sub_Slide.xfdl");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_toggle","160","146","146","47",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("chk_WF_Toggle");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_basic","24","455","212","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NAME");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_test","246","455","212","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_popuptype("none");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_center","24","525","212","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_popuptype("center");
            this.addChild(obj.name, obj);

            obj = new Static("st_title01","24","214","400","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Slidebar(Div - Linked form)");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_MSubTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","24","24","400","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Component");
            obj.set_cssclass("sta_WF_MTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_title02","24","400","400","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("popuptype (property)");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_MSubTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","24","640",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("24");
            obj.set_background("red");
            obj.set_opacity("30%");
            obj.set_visible("false");
            obj.set_font("13px \"Consolas\"");
            obj.set_color("#000000");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new TextField("TextField00_01_00","24","314",null,"110","24",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_labelposition("inside");
            obj.set_labeltext("Inside");
            obj.set_labelfloatingfixed("false");
            obj.set_usehelpertext("true");
            obj.set_usecharcount("true");
            obj.set_maxlength("20");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new TextField("TextField00_00_00","24","204",null,"110","24",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_labeltext("Overlap");
            obj.set_labelfloatingfixed("false");
            obj.set_labelposition("overlap");
            obj.set_usehelpertext("true");
            obj.set_usecharcount("true");
            obj.set_maxlength("20");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new TextField("TextField00_02","24","84",null,"120","24",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_labelposition("outside");
            obj.set_labelfloatingfixed("false");
            obj.set_labeltext("Outside");
            obj.set_usehelpertext("true");
            obj.set_usecharcount("true");
            obj.set_maxlength("20");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new TextField("TextField00_00_00_00","24","450",null,"110","24",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_labeltext("E-Mail");
            obj.set_labelfloatingfixed("false");
            obj.set_labelposition("overlap");
            obj.set_usehelpertext("true");
            obj.set_usecharcount("true");
            obj.set_inputtype("email");
            obj.set_trailingbuttonsize("30");
            obj.set_maxlength("20");
            obj.set_usetrailingbutton("true");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","24","24","204","40",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("TextField");
            obj.set_cssclass("sta_WF_MTitle");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","456","0","24","728",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("24");
            obj.set_background("red");
            obj.set_opacity("30%");
            obj.set_visible("false");
            obj.set_font("13px \"Consolas\"");
            obj.set_color("#000000");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0","0","480","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("24");
            obj.set_background("red");
            obj.set_opacity("30%");
            obj.set_visible("false");
            obj.set_font("13px \"Consolas\"");
            obj.set_color("#000000");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","24","24","204","40",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("DateField");
            obj.set_cssclass("sta_WF_MTitle");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","0","24","640",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("24");
            obj.set_background("red");
            obj.set_opacity("30%");
            obj.set_visible("false");
            obj.set_font("13px \"Consolas\"");
            obj.set_color("#000000");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","476","0","480","24",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("24");
            obj.set_background("red");
            obj.set_opacity("30%");
            obj.set_visible("false");
            obj.set_font("13px \"Consolas\"");
            obj.set_color("#000000");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","456","0","24","640",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("24");
            obj.set_background("red");
            obj.set_opacity("30%");
            obj.set_visible("false");
            obj.set_font("13px \"Consolas\"");
            obj.set_color("#000000");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","0","24","640",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("24");
            obj.set_background("red");
            obj.set_opacity("30%");
            obj.set_visible("false");
            obj.set_font("13px \"Consolas\"");
            obj.set_color("#000000");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","476","0","480","24",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("24");
            obj.set_background("red");
            obj.set_opacity("30%");
            obj.set_visible("false");
            obj.set_font("13px \"Consolas\"");
            obj.set_color("#000000");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00","456","0","24","640",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("24");
            obj.set_background("red");
            obj.set_opacity("30%");
            obj.set_visible("false");
            obj.set_font("13px \"Consolas\"");
            obj.set_color("#000000");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new DateField("DateField00","24","100","432","80",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_labeltext("Date");
            obj.set_positionstep("2");
            obj.set_iconbuttonsize("50");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new DateField("DateField00_00","24","204","432","80",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_labeltext("Datetime");
            obj.set_positionstep("2");
            obj.set_iconbuttonsize("50");
            obj.set_inputtype("datetime");
            this.addChild(obj.name, obj);

            obj = new DateField("DateField00_01","24","314","432","80",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_labeltext("Time");
            obj.set_positionstep("2");
            obj.set_iconbuttonsize("50");
            obj.set_inputtype("time");
            this.addChild(obj.name, obj);

            obj = new DateField("DateField00_00_00","24","450","432","80",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_labeltext("Datetime");
            obj.set_positionstep("2");
            obj.set_iconbuttonsize("50");
            obj.set_inputtype("datetime");
            obj.set_value("kkk");
            this.addChild(obj.name, obj);

            obj = new DateRangePicker("DateRangePicker00","24","84","432","356",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_positionstep("3");
            obj.set_displaytype("datetime");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","24","24","316","40",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("DateRangePicker");
            obj.set_cssclass("sta_WF_MTitle");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01","0","0","480","24",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("24");
            obj.set_background("red");
            obj.set_opacity("30%");
            obj.set_visible("false");
            obj.set_font("13px \"Consolas\"");
            obj.set_color("#000000");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("st_title01_00","24","90","400","40",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("Toggle Switch(CheckBox)");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_MSubTitle");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_slide.form
            obj = new Layout("default","",0,0,this.div_slide.form,function(p){});
            this.div_slide.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","screen_phone,screen_desktop",480,640,this,function(p){});
            obj.set_mobileorientation("portrait");
            obj.set_stepcount("4");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","EduBasic::Mobile/Mobile_Sub_Slide.xfdl");
        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div_slide.addEventHandler("ondragmove",this.div_slide_ondragmove,this);
            this.chk_toggle.addEventHandler("onchanged",this.CheckBox00_onchanged,this);
            this.chk_toggle.addEventHandler("onclick",this.CheckBox00_onclick,this);
            this.ds_emp.addEventHandler("cancolumnchange",this.ds_emp_cancolumnchange,this);
            this.ds_emp.addEventHandler("onrowsetchanged",this.ds_emp_onrowsetchanged,this);
            this.ds_emp.addEventHandler("onrowposchanged",this.ds_emp_onrowposchanged,this);
        };
        this.loadIncludeScript("Mobile_Component.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
