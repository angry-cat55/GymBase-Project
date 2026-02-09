(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Layout_Horizontal");
            this.set_titletext("Layout_Horizontal");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static37","20","60","788","59",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("[Property] flexwrap = wrap\r\nflexcrossaxiswrapalign = \"start\" | \"end\" | \"center\" | \"spacebetween\" | \"spaceround\" | \"spaceevenly\"");
            obj.set_cssclass("sta_WF_GuideScript");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","20","119","3.23%","26",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("start");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","Static17:841.23%","119","1.96%","26",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("end");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","Static18:1391.27%","119","40","26",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("center");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Div("Div10","20","Static17:0","28%","34%",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("Div00");
            obj.set_flexshrink("0");
            obj.set_positionstep("2");
            obj.set_cssclass("div_WF_Area");
            obj.set_formscrollbartype("auto auto");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0.00","72","50","60",null,null,null,null,null,null,this.Div10.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_Status");
            this.Div10.addChild(obj.name, obj);

            obj = new Button("Button01","50.00","72","50","60",null,null,null,null,null,null,this.Div10.form);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_Status");
            this.Div10.addChild(obj.name, obj);

            obj = new Button("Button03","100.00","72","50","60",null,null,null,null,null,null,this.Div10.form);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_Status");
            this.Div10.addChild(obj.name, obj);

            obj = new Button("Button04","150.00","72","50","60",null,null,null,null,null,null,this.Div10.form);
            obj.set_taborder("3");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_Status");
            this.Div10.addChild(obj.name, obj);

            obj = new Button("Button05","200.00","72","50","60",null,null,null,null,null,null,this.Div10.form);
            obj.set_taborder("4");
            obj.set_text("5");
            obj.set_cssclass("btn_WF_Status");
            this.Div10.addChild(obj.name, obj);

            obj = new Button("Button06","0.00","142","50","60",null,null,null,null,null,null,this.Div10.form);
            obj.set_taborder("5");
            obj.set_text("6");
            obj.set_cssclass("btn_WF_Status");
            this.Div10.addChild(obj.name, obj);

            obj = new Button("Button07","50.00","142","50","60",null,null,null,null,null,null,this.Div10.form);
            obj.set_taborder("6");
            obj.set_text("7");
            obj.set_cssclass("btn_WF_Status");
            this.Div10.addChild(obj.name, obj);

            obj = new Button("Button08","100.00","142","50","60",null,null,null,null,null,null,this.Div10.form);
            obj.set_taborder("7");
            obj.set_text("8");
            obj.set_cssclass("btn_WF_Status");
            this.Div10.addChild(obj.name, obj);

            obj = new Button("Button09","150.00","142","50","60",null,null,null,null,null,null,this.Div10.form);
            obj.set_taborder("8");
            obj.set_text("9");
            obj.set_cssclass("btn_WF_Status");
            this.Div10.addChild(obj.name, obj);

            obj = new Button("Button10","200.00","142","50","60",null,null,null,null,null,null,this.Div10.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("btn_WF_Status");
            this.Div10.addChild(obj.name, obj);

            obj = new Static("Static20","20","Div10:13","7.92%","26",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("spacebetween");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Div("Div11","Div10:19","Static18:0","27.96%","34.00%",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_flexshrink("0");
            obj.set_positionstep("2");
            obj.set_cssclass("div_WF_Area");
            obj.set_formscrollbartype("auto auto");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0.00","72","50","60",null,null,null,null,null,null,this.Div11.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_Status");
            this.Div11.addChild(obj.name, obj);

            obj = new Button("Button01","50.00","72","50","60",null,null,null,null,null,null,this.Div11.form);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_Status");
            this.Div11.addChild(obj.name, obj);

            obj = new Button("Button03","100.00","72","50","60",null,null,null,null,null,null,this.Div11.form);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_Status");
            this.Div11.addChild(obj.name, obj);

            obj = new Button("Button04","150.00","72","50","60",null,null,null,null,null,null,this.Div11.form);
            obj.set_taborder("3");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_Status");
            this.Div11.addChild(obj.name, obj);

            obj = new Button("Button05","200.00","72","50","60",null,null,null,null,null,null,this.Div11.form);
            obj.set_taborder("4");
            obj.set_text("5");
            obj.set_cssclass("btn_WF_Status");
            this.Div11.addChild(obj.name, obj);

            obj = new Button("Button06","0.00","142","50","60",null,null,null,null,null,null,this.Div11.form);
            obj.set_taborder("5");
            obj.set_text("6");
            obj.set_cssclass("btn_WF_Status");
            this.Div11.addChild(obj.name, obj);

            obj = new Button("Button07","50.00","142","50","60",null,null,null,null,null,null,this.Div11.form);
            obj.set_taborder("6");
            obj.set_text("7");
            obj.set_cssclass("btn_WF_Status");
            this.Div11.addChild(obj.name, obj);

            obj = new Button("Button08","100.00","142","50","60",null,null,null,null,null,null,this.Div11.form);
            obj.set_taborder("7");
            obj.set_text("8");
            obj.set_cssclass("btn_WF_Status");
            this.Div11.addChild(obj.name, obj);

            obj = new Button("Button09","150.00","142","50","60",null,null,null,null,null,null,this.Div11.form);
            obj.set_taborder("8");
            obj.set_text("9");
            obj.set_cssclass("btn_WF_Status");
            this.Div11.addChild(obj.name, obj);

            obj = new Button("Button10","200.00","142","50","60",null,null,null,null,null,null,this.Div11.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("btn_WF_Status");
            this.Div11.addChild(obj.name, obj);

            obj = new Static("Static21","Static20:281.38%","Div11:13","7.92%","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("spaceround");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Div("Div18","Div11:20","Static19:0","27.96%","34.00%",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Div00");
            obj.set_flexshrink("0");
            obj.set_positionstep("2");
            obj.set_cssclass("div_WF_Area");
            obj.set_formscrollbartype("auto auto");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0.00","36","50","60",null,null,null,null,null,null,this.Div18.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_Status");
            this.Div18.addChild(obj.name, obj);

            obj = new Button("Button01","50.00","36","50","60",null,null,null,null,null,null,this.Div18.form);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_Status");
            this.Div18.addChild(obj.name, obj);

            obj = new Button("Button03","100.00","36","50","60",null,null,null,null,null,null,this.Div18.form);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_Status");
            this.Div18.addChild(obj.name, obj);

            obj = new Button("Button04","150.00","36","50","60",null,null,null,null,null,null,this.Div18.form);
            obj.set_taborder("3");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_Status");
            this.Div18.addChild(obj.name, obj);

            obj = new Button("Button05","200.00","36","50","60",null,null,null,null,null,null,this.Div18.form);
            obj.set_taborder("4");
            obj.set_text("5");
            obj.set_cssclass("btn_WF_Status");
            this.Div18.addChild(obj.name, obj);

            obj = new Button("Button06","0.00","106","50","60",null,null,null,null,null,null,this.Div18.form);
            obj.set_taborder("5");
            obj.set_text("6");
            obj.set_cssclass("btn_WF_Status");
            this.Div18.addChild(obj.name, obj);

            obj = new Button("Button07","50.00","106","50","60",null,null,null,null,null,null,this.Div18.form);
            obj.set_taborder("6");
            obj.set_text("7");
            obj.set_cssclass("btn_WF_Status");
            this.Div18.addChild(obj.name, obj);

            obj = new Button("Button08","100.00","106","50","60",null,null,null,null,null,null,this.Div18.form);
            obj.set_taborder("7");
            obj.set_text("8");
            obj.set_cssclass("btn_WF_Status");
            this.Div18.addChild(obj.name, obj);

            obj = new Button("Button09","150.00","106","50","60",null,null,null,null,null,null,this.Div18.form);
            obj.set_taborder("8");
            obj.set_text("9");
            obj.set_cssclass("btn_WF_Status");
            this.Div18.addChild(obj.name, obj);

            obj = new Button("Button10","200.00","106","50","60",null,null,null,null,null,null,this.Div18.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("btn_WF_Status");
            this.Div18.addChild(obj.name, obj);

            obj = new Static("Static22","Static21:269.04%","Div18:13","81","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("spaceevenly");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Div("Div19","20","Static20:0","27.96%","34.00%",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Div00");
            obj.set_flexshrink("0");
            obj.set_positionstep("2");
            obj.set_cssclass("div_WF_Area");
            obj.set_formscrollbartype("auto auto");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0.00","0","50","60",null,null,null,null,null,null,this.Div19.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_Status");
            this.Div19.addChild(obj.name, obj);

            obj = new Button("Button00_00","50.00","0","50","60",null,null,null,null,null,null,this.Div19.form);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_Status");
            this.Div19.addChild(obj.name, obj);

            obj = new Button("Button03","100.00","0","50","60",null,null,null,null,null,null,this.Div19.form);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_Status");
            this.Div19.addChild(obj.name, obj);

            obj = new Button("Button04","150.00","0","50","60",null,null,null,null,null,null,this.Div19.form);
            obj.set_taborder("3");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_Status");
            this.Div19.addChild(obj.name, obj);

            obj = new Button("Button05","200.00","0","50","60",null,null,null,null,null,null,this.Div19.form);
            obj.set_taborder("4");
            obj.set_text("5");
            obj.set_cssclass("btn_WF_Status");
            this.Div19.addChild(obj.name, obj);

            obj = new Button("Button06","0.00","151","50","60",null,null,null,null,null,null,this.Div19.form);
            obj.set_taborder("5");
            obj.set_text("6");
            obj.set_cssclass("btn_WF_Status");
            this.Div19.addChild(obj.name, obj);

            obj = new Button("Button07","50.00","151","50","60",null,null,null,null,null,null,this.Div19.form);
            obj.set_taborder("6");
            obj.set_text("7");
            obj.set_cssclass("btn_WF_Status");
            this.Div19.addChild(obj.name, obj);

            obj = new Button("Button08","100.00","151","50","60",null,null,null,null,null,null,this.Div19.form);
            obj.set_taborder("7");
            obj.set_text("8");
            obj.set_cssclass("btn_WF_Status");
            this.Div19.addChild(obj.name, obj);

            obj = new Button("Button09","150.00","151","50","60",null,null,null,null,null,null,this.Div19.form);
            obj.set_taborder("8");
            obj.set_text("9");
            obj.set_cssclass("btn_WF_Status");
            this.Div19.addChild(obj.name, obj);

            obj = new Button("Button10","200.00","151","50","60",null,null,null,null,null,null,this.Div19.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("btn_WF_Status");
            this.Div19.addChild(obj.name, obj);

            obj = new Div("Div20","Div19:15","Static21:0","27.96%","34.00%",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div00");
            obj.set_flexshrink("0");
            obj.set_positionstep("2");
            obj.set_cssclass("div_WF_Area");
            obj.set_formscrollbartype("auto auto");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0.00","20","50","60",null,null,null,null,null,null,this.Div20.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_Status");
            this.Div20.addChild(obj.name, obj);

            obj = new Button("Button00_00","50.00","20","50","60",null,null,null,null,null,null,this.Div20.form);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_Status");
            this.Div20.addChild(obj.name, obj);

            obj = new Button("Button03","100.00","20","50","60",null,null,null,null,null,null,this.Div20.form);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_Status");
            this.Div20.addChild(obj.name, obj);

            obj = new Button("Button04","150.00","20","50","60",null,null,null,null,null,null,this.Div20.form);
            obj.set_taborder("3");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_Status");
            this.Div20.addChild(obj.name, obj);

            obj = new Button("Button05","200.00","20","50","60",null,null,null,null,null,null,this.Div20.form);
            obj.set_taborder("4");
            obj.set_text("5");
            obj.set_cssclass("btn_WF_Status");
            this.Div20.addChild(obj.name, obj);

            obj = new Button("Button06","0.00","130","50","60",null,null,null,null,null,null,this.Div20.form);
            obj.set_taborder("5");
            obj.set_text("6");
            obj.set_cssclass("btn_WF_Status");
            this.Div20.addChild(obj.name, obj);

            obj = new Button("Button07","50.00","130","50","60",null,null,null,null,null,null,this.Div20.form);
            obj.set_taborder("6");
            obj.set_text("7");
            obj.set_cssclass("btn_WF_Status");
            this.Div20.addChild(obj.name, obj);

            obj = new Button("Button08","100.00","130","50","60",null,null,null,null,null,null,this.Div20.form);
            obj.set_taborder("7");
            obj.set_text("8");
            obj.set_cssclass("btn_WF_Status");
            this.Div20.addChild(obj.name, obj);

            obj = new Button("Button09","150.00","130","50","60",null,null,null,null,null,null,this.Div20.form);
            obj.set_taborder("8");
            obj.set_text("9");
            obj.set_cssclass("btn_WF_Status");
            this.Div20.addChild(obj.name, obj);

            obj = new Button("Button10","200.00","130","50","60",null,null,null,null,null,null,this.Div20.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("btn_WF_Status");
            this.Div20.addChild(obj.name, obj);

            obj = new Div("Div21","Div20:17","Static22:0","27.96%","34.00%",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Div00");
            obj.set_flexshrink("0");
            obj.set_positionstep("2");
            obj.set_cssclass("div_WF_Area");
            obj.set_formscrollbartype("auto auto");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0.00","20","50","60",null,null,null,null,null,null,this.Div21.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_Status");
            this.Div21.addChild(obj.name, obj);

            obj = new Button("Button00_00","50.00","20","50","60",null,null,null,null,null,null,this.Div21.form);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_Status");
            this.Div21.addChild(obj.name, obj);

            obj = new Button("Button03","100.00","20","50","60",null,null,null,null,null,null,this.Div21.form);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_Status");
            this.Div21.addChild(obj.name, obj);

            obj = new Button("Button04","150.00","20","50","60",null,null,null,null,null,null,this.Div21.form);
            obj.set_taborder("3");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_Status");
            this.Div21.addChild(obj.name, obj);

            obj = new Button("Button05","200.00","20","50","60",null,null,null,null,null,null,this.Div21.form);
            obj.set_taborder("4");
            obj.set_text("5");
            obj.set_cssclass("btn_WF_Status");
            this.Div21.addChild(obj.name, obj);

            obj = new Button("Button06","0.00","130","50","60",null,null,null,null,null,null,this.Div21.form);
            obj.set_taborder("5");
            obj.set_text("6");
            obj.set_cssclass("btn_WF_Status");
            this.Div21.addChild(obj.name, obj);

            obj = new Button("Button07","50.00","130","50","60",null,null,null,null,null,null,this.Div21.form);
            obj.set_taborder("6");
            obj.set_text("7");
            obj.set_cssclass("btn_WF_Status");
            this.Div21.addChild(obj.name, obj);

            obj = new Button("Button08","100.00","130","50","60",null,null,null,null,null,null,this.Div21.form);
            obj.set_taborder("7");
            obj.set_text("8");
            obj.set_cssclass("btn_WF_Status");
            this.Div21.addChild(obj.name, obj);

            obj = new Button("Button09","150.00","130","50","60",null,null,null,null,null,null,this.Div21.form);
            obj.set_taborder("8");
            obj.set_text("9");
            obj.set_cssclass("btn_WF_Status");
            this.Div21.addChild(obj.name, obj);

            obj = new Button("Button10","200.00","130","50","60",null,null,null,null,null,null,this.Div21.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("btn_WF_Status");
            this.Div21.addChild(obj.name, obj);

            obj = new Static("Static36","20","70","767","59",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("[Property] flexwrap = wrap\r\nflexmainaxisalign = \"start\" | \"end\" | \"center\" | \"spacebetween\" | \"spaceround\" | \"spaceevenly\"");
            obj.set_cssclass("sta_WF_GuideScript");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","20","134","3.23%","18",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("start");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static35","Static30:847.4063313358755%","134","1.96%","18",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("end");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static33","Static35:1396.508728179551%","134","40","18",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("center");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Div("Div22","20","Static30:5","28%","34%",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Div00");
            obj.set_flexshrink("0");
            obj.set_positionstep("3");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0.00","0","50","60",null,null,null,null,null,null,this.Div22.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_Status");
            this.Div22.addChild(obj.name, obj);

            obj = new Button("Button01","50.00","0","50","60",null,null,null,null,null,null,this.Div22.form);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_Status");
            this.Div22.addChild(obj.name, obj);

            obj = new Button("Button03","100.00","0","50","60",null,null,null,null,null,null,this.Div22.form);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_Status");
            this.Div22.addChild(obj.name, obj);

            obj = new Button("Button04","150.00","0","50","60",null,null,null,null,null,null,this.Div22.form);
            obj.set_taborder("3");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_Status");
            this.Div22.addChild(obj.name, obj);

            obj = new Static("Static31","20","Div22:23","8%","18",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("spacebetween");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Div("Div23","Div22:20","Static35:5","28%","34%",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Div00");
            obj.set_flexshrink("0");
            obj.set_positionstep("3");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","83.00","0","50","60",null,null,null,null,null,null,this.Div23.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_Status");
            this.Div23.addChild(obj.name, obj);

            obj = new Button("Button01","133.00","0","50","60",null,null,null,null,null,null,this.Div23.form);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_Status");
            this.Div23.addChild(obj.name, obj);

            obj = new Button("Button03","183.00","0","50","60",null,null,null,null,null,null,this.Div23.form);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_Status");
            this.Div23.addChild(obj.name, obj);

            obj = new Button("Button04","233.00","0","50","60",null,null,null,null,null,null,this.Div23.form);
            obj.set_taborder("3");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_Status");
            this.Div23.addChild(obj.name, obj);

            obj = new Static("Static26","Static31:284.90%","Div23:23","7.92%","18",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("spaceround");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Div("Div24","Div23:20","Static33:5","28%","34%",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("Div00");
            obj.set_flexshrink("0");
            obj.set_positionstep("3");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","41.00","0","50","60",null,null,null,null,null,null,this.Div24.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_Status");
            this.Div24.addChild(obj.name, obj);

            obj = new Button("Button01","91.00","0","50","60",null,null,null,null,null,null,this.Div24.form);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_Status");
            this.Div24.addChild(obj.name, obj);

            obj = new Button("Button03","141.00","0","50","60",null,null,null,null,null,null,this.Div24.form);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_Status");
            this.Div24.addChild(obj.name, obj);

            obj = new Button("Button04","191.00","0","50","60",null,null,null,null,null,null,this.Div24.form);
            obj.set_taborder("3");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_Status");
            this.Div24.addChild(obj.name, obj);

            obj = new Static("Static32","Static26:270.10%","Div24:23","81","18",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("spaceevenly");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Div("Div25","20","Static31:4","28%","34%",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("Div00");
            obj.set_flexshrink("0");
            obj.set_positionstep("3");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0.00","0","50","60",null,null,null,null,null,null,this.Div25.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_Status");
            this.Div25.addChild(obj.name, obj);

            obj = new Button("Button01","77.00","0","50","60",null,null,null,null,null,null,this.Div25.form);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_Status");
            this.Div25.addChild(obj.name, obj);

            obj = new Button("Button03","155.00","0","50","60",null,null,null,null,null,null,this.Div25.form);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_Status");
            this.Div25.addChild(obj.name, obj);

            obj = new Button("Button04","233.00","0","50","60",null,null,null,null,null,null,this.Div25.form);
            obj.set_taborder("3");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_Status");
            this.Div25.addChild(obj.name, obj);

            obj = new Div("Div26","Div25:19","Static26:4","28%","34%",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("Div00");
            obj.set_flexshrink("0");
            obj.set_positionstep("3");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","10.00","0","50","60",null,null,null,null,null,null,this.Div26.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_Status");
            this.Div26.addChild(obj.name, obj);

            obj = new Button("Button01","81.00","0","50","60",null,null,null,null,null,null,this.Div26.form);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_Status");
            this.Div26.addChild(obj.name, obj);

            obj = new Button("Button03","151.00","0","50","60",null,null,null,null,null,null,this.Div26.form);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_Status");
            this.Div26.addChild(obj.name, obj);

            obj = new Button("Button04","222.00","0","50","60",null,null,null,null,null,null,this.Div26.form);
            obj.set_taborder("3");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_Status");
            this.Div26.addChild(obj.name, obj);

            obj = new Div("Div27","Div26:20","Static32:4","28%","34%",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("Div00");
            obj.set_flexshrink("0");
            obj.set_positionstep("3");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","16.00","0","50","60",null,null,null,null,null,null,this.Div27.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_Status");
            this.Div27.addChild(obj.name, obj);

            obj = new Button("Button01","83.00","0","50","60",null,null,null,null,null,null,this.Div27.form);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_Status");
            this.Div27.addChild(obj.name, obj);

            obj = new Button("Button03","149.00","0","50","60",null,null,null,null,null,null,this.Div27.form);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_Status");
            this.Div27.addChild(obj.name, obj);

            obj = new Button("Button04","216.00","0","50","60",null,null,null,null,null,null,this.Div27.form);
            obj.set_taborder("3");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_Status");
            this.Div27.addChild(obj.name, obj);

            obj = new Static("Static09","20","119","40","26",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("nowrap");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new Div("Div29","20","Static09:0",null,"75","100",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("Div00");
            obj.set_flexshrink("0");
            obj.set_positionstep("4");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","2","3","120","36",null,null,null,null,null,null,this.Div29.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_Status");
            this.Div29.addChild(obj.name, obj);

            obj = new Button("Button01","2","3","120","36",null,null,null,null,null,null,this.Div29.form);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_Status");
            this.Div29.addChild(obj.name, obj);

            obj = new Button("Button03","2","3","120","36",null,null,null,null,null,null,this.Div29.form);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_Status");
            this.Div29.addChild(obj.name, obj);

            obj = new Button("Button04","2","3","120","36",null,null,null,null,null,null,this.Div29.form);
            obj.set_taborder("3");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_Status");
            this.Div29.addChild(obj.name, obj);

            obj = new Button("Button05","2","3","120","36",null,null,null,null,null,null,this.Div29.form);
            obj.set_taborder("4");
            obj.set_text("5");
            obj.set_cssclass("btn_WF_Status");
            this.Div29.addChild(obj.name, obj);

            obj = new Button("Button06","2","3","120","36",null,null,null,null,null,null,this.Div29.form);
            obj.set_taborder("5");
            obj.set_text("6");
            obj.set_cssclass("btn_WF_Status");
            this.Div29.addChild(obj.name, obj);

            obj = new Static("Static10","20","Div29:50","27","26",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("wrap");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new Div("Div30","20","Static10:0",null,"75","100",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("Div00");
            obj.set_flexshrink("0");
            obj.set_fittocontents("height");
            obj.set_positionstep("4");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","2","3","120","36",null,null,null,null,null,null,this.Div30.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_Status");
            this.Div30.addChild(obj.name, obj);

            obj = new Button("Button01","2","3","120","36",null,null,null,null,null,null,this.Div30.form);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_Status");
            this.Div30.addChild(obj.name, obj);

            obj = new Button("Button03","2","3","120","36",null,null,null,null,null,null,this.Div30.form);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_Status");
            this.Div30.addChild(obj.name, obj);

            obj = new Button("Button04","2","3","120","36",null,null,null,null,null,null,this.Div30.form);
            obj.set_taborder("3");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_Status");
            this.Div30.addChild(obj.name, obj);

            obj = new Button("Button05","2","3","120","36",null,null,null,null,null,null,this.Div30.form);
            obj.set_taborder("4");
            obj.set_text("5");
            obj.set_cssclass("btn_WF_Status");
            this.Div30.addChild(obj.name, obj);

            obj = new Button("Button06","2","3","120","36",null,null,null,null,null,null,this.Div30.form);
            obj.set_taborder("5");
            obj.set_text("6");
            obj.set_cssclass("btn_WF_Status");
            this.Div30.addChild(obj.name, obj);

            obj = new Static("Static11","20","Div30:50","86","26",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("wrap / Panel");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","0","148","60",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("Type - Horiziontal");
            obj.set_cssclass("sta_WF_GuideTitle1");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Div("Div31","20","Static11:0",null,null,"100","145",null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("Div00");
            obj.set_flexshrink("0");
            obj.set_fittocontents("height");
            obj.set_positionstep("4");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","2","3","120","36",null,null,null,null,null,null,this.Div31.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_Status");
            this.Div31.addChild(obj.name, obj);

            obj = new Button("Button01","2","3","120","36",null,null,null,null,null,null,this.Div31.form);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_Status");
            this.Div31.addChild(obj.name, obj);

            obj = new Button("Button03","2","3","120","36",null,null,null,null,null,null,this.Div31.form);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_Status");
            this.Div31.addChild(obj.name, obj);

            obj = new Button("Button04","2","3","120","36",null,null,null,null,null,null,this.Div31.form);
            obj.set_taborder("3");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_Status");
            this.Div31.addChild(obj.name, obj);

            obj = new Button("Button05","2","3","120","36",null,null,null,null,null,null,this.Div31.form);
            obj.set_taborder("4");
            obj.set_text("5");
            obj.set_cssclass("btn_WF_Status");
            this.Div31.addChild(obj.name, obj);

            obj = new Button("Button06","2","3","120","36",null,null,null,null,null,null,this.Div31.form);
            obj.set_taborder("5");
            obj.set_text("6");
            obj.set_cssclass("btn_WF_Status");
            this.Div31.addChild(obj.name, obj);

            obj = new Panel("Panel00","1","1","240","36",null,null,null,null,null,null,this.Div31.form);
            obj.set_taborder("6");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button01\"/></Contents>");
            this.Div31.addChild(obj.name, obj);

            obj = new Panel("Panel01","1","1","240","36",null,null,null,null,null,null,this.Div31.form);
            obj.set_taborder("7");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button03\"/><PanelItem id=\"PanelItem01\" componentid=\"Button04\"/></Contents>");
            this.Div31.addChild(obj.name, obj);

            obj = new Panel("Panel02","1","1","240","36",null,null,null,null,null,null,this.Div31.form);
            obj.set_taborder("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button05\"/><PanelItem id=\"PanelItem01\" componentid=\"Button06\"/></Contents>");
            this.Div31.addChild(obj.name, obj);

            obj = new Static("Static34","20","60","327","59",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("[Property] flexwrap = \"nowrap\" | \"wrap\"\r\n[Component] Panel");
            obj.set_cssclass("sta_WF_GuideScript");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static40","20","60","448","59",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("[Property] flexgrow , flexshrink\r\nflexwrap = \"wrap\" | \"nowrap\" ");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","20","145","46.73%","33.43%",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("Div00");
            obj.set_flexshrink("0");
            obj.set_positionstep("0");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","12","14","100","70",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_Status");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01","80.00","0","100","70",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_Status");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button02","187.00","0","100","70",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_Status");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button03","294.00","0","100","70",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_Status");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button04","401.00","0","100","70",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("5");
            obj.set_cssclass("btn_WF_Status");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button05","401.00","0","100","70",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("6");
            obj.set_cssclass("btn_WF_Status");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div45","Div00:9","145","46.73%","33.43%",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("Div00");
            obj.set_positionstep("0");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","12","14","100","70",null,null,null,null,null,null,this.Div45.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_Status");
            obj.set_flexshrink("0");
            this.Div45.addChild(obj.name, obj);

            obj = new Button("Button01","80.00","0","100","70",null,null,null,null,null,null,this.Div45.form);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_Status");
            obj.set_flexshrink("0");
            this.Div45.addChild(obj.name, obj);

            obj = new Button("Button02","187.00","0","100","70",null,null,null,null,null,null,this.Div45.form);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_Status");
            obj.set_flexshrink("0");
            this.Div45.addChild(obj.name, obj);

            obj = new Button("Button03","294.00","0","100","70",null,null,null,null,null,null,this.Div45.form);
            obj.set_taborder("3");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_Status");
            obj.set_flexshrink("0");
            this.Div45.addChild(obj.name, obj);

            obj = new Button("Button04","401.00","0","100","70",null,null,null,null,null,null,this.Div45.form);
            obj.set_taborder("4");
            obj.set_text("5");
            obj.set_cssclass("btn_WF_Status");
            obj.set_flexshrink("0");
            this.Div45.addChild(obj.name, obj);

            obj = new Button("Button05","401.00","0","100","70",null,null,null,null,null,null,this.Div45.form);
            obj.set_taborder("5");
            obj.set_text("6");
            obj.set_cssclass("btn_WF_Status");
            obj.set_flexshrink("0");
            this.Div45.addChild(obj.name, obj);

            obj = new Div("Div46","20","430","46.73%","33.43%",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("Div00");
            obj.set_flexshrink("0");
            obj.set_positionstep("0");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","12","14","100","70",null,null,null,null,null,null,this.Div46.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_Status");
            this.Div46.addChild(obj.name, obj);

            obj = new Button("Button01","80.00","0","100","70",null,null,null,null,null,null,this.Div46.form);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_Status");
            this.Div46.addChild(obj.name, obj);

            obj = new Button("Button02","187.00","0","100","70",null,null,null,null,null,null,this.Div46.form);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_Status");
            this.Div46.addChild(obj.name, obj);

            obj = new Button("Button03","294.00","0","100","70",null,null,null,null,null,null,this.Div46.form);
            obj.set_taborder("3");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_Status");
            this.Div46.addChild(obj.name, obj);

            obj = new Button("Button04","401.00","0","100","70",null,null,null,null,null,null,this.Div46.form);
            obj.set_taborder("4");
            obj.set_text("5");
            obj.set_cssclass("btn_WF_Status");
            this.Div46.addChild(obj.name, obj);

            obj = new Button("Button05","401.00","0","100","70",null,null,null,null,null,null,this.Div46.form);
            obj.set_taborder("5");
            obj.set_text("6");
            obj.set_cssclass("btn_WF_Status");
            this.Div46.addChild(obj.name, obj);

            obj = new Div("Div47","Div46:5","430","46.73%","33.43%",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("Div00");
            obj.set_positionstep("0");
            obj.set_cssclass("div_WF_Area");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","12","14","100","70",null,null,null,null,null,null,this.Div47.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_Status");
            obj.set_flexgrow("1");
            this.Div47.addChild(obj.name, obj);

            obj = new Button("Button01","80.00","0","100","70",null,null,null,null,null,null,this.Div47.form);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_Status");
            obj.set_flexgrow("1");
            this.Div47.addChild(obj.name, obj);

            obj = new Button("Button02","187.00","0","100","70",null,null,null,null,null,null,this.Div47.form);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_Status");
            obj.set_flexgrow("1");
            this.Div47.addChild(obj.name, obj);

            obj = new Button("Button03","294.00","0","100","70",null,null,null,null,null,null,this.Div47.form);
            obj.set_taborder("3");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_Status");
            obj.set_flexgrow("1");
            this.Div47.addChild(obj.name, obj);

            obj = new Button("Button04","401.00","0","100","70",null,null,null,null,null,null,this.Div47.form);
            obj.set_taborder("4");
            obj.set_text("5");
            obj.set_cssclass("btn_WF_Status");
            obj.set_flexgrow("1");
            this.Div47.addChild(obj.name, obj);

            obj = new Button("Button05","294.00","0","100","70",null,null,null,null,null,null,this.Div47.form);
            obj.set_taborder("5");
            obj.set_text("6");
            obj.set_cssclass("btn_WF_Status");
            obj.set_flexgrow("1");
            this.Div47.addChild(obj.name, obj);

            obj = new Static("Static55","27","96","40","26",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("start");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Div("Div02","22","Static55:0","95.31%","19.43%",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("Div00");
            obj.set_flexshrink("0");
            obj.set_positionstep("1");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0.00","56","70","70",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_Status");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button01","80.00","56","70","70",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_Status");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button02","160.00","56","70","70",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_Status");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button03","240.00","56","70","70",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_Status");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button04","320.00","56","70","70",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("4");
            obj.set_text("5");
            obj.set_cssclass("btn_WF_Status");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static56","27","Div02:15","20","26",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("end");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Div("Div44","22","Static56:0","95.31%","19.43%",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("Div00");
            obj.set_flexshrink("0");
            obj.set_positionstep("1");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0.00","28","70","70",null,null,null,null,null,null,this.Div44.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_Status");
            this.Div44.addChild(obj.name, obj);

            obj = new Button("Button01","80.00","28","70","70",null,null,null,null,null,null,this.Div44.form);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_Status");
            this.Div44.addChild(obj.name, obj);

            obj = new Button("Button02","160.00","28","70","70",null,null,null,null,null,null,this.Div44.form);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_Status");
            this.Div44.addChild(obj.name, obj);

            obj = new Button("Button03","240.00","28","70","70",null,null,null,null,null,null,this.Div44.form);
            obj.set_taborder("3");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_Status");
            this.Div44.addChild(obj.name, obj);

            obj = new Button("Button04","320.00","28","70","70",null,null,null,null,null,null,this.Div44.form);
            obj.set_taborder("4");
            obj.set_text("5");
            obj.set_cssclass("btn_WF_Status");
            this.Div44.addChild(obj.name, obj);

            obj = new Static("Static57","20","Div44:15","40","26",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("center");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Div("Div43","22","Static57:0","95.31%","19.43%",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("Div00");
            obj.set_flexshrink("0");
            obj.set_positionstep("1");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0.00","28","70","70",null,null,null,null,null,null,this.Div43.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_Status");
            this.Div43.addChild(obj.name, obj);

            obj = new Button("Button01","80.00","28","70","70",null,null,null,null,null,null,this.Div43.form);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_Status");
            this.Div43.addChild(obj.name, obj);

            obj = new Button("Button02","160.00","28","70","70",null,null,null,null,null,null,this.Div43.form);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_Status");
            this.Div43.addChild(obj.name, obj);

            obj = new Button("Button03","240.00","28","70","70",null,null,null,null,null,null,this.Div43.form);
            obj.set_taborder("3");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_Status");
            this.Div43.addChild(obj.name, obj);

            obj = new Button("Button04","320.00","28","70","70",null,null,null,null,null,null,this.Div43.form);
            obj.set_taborder("4");
            obj.set_text("5");
            obj.set_cssclass("btn_WF_Status");
            this.Div43.addChild(obj.name, obj);

            obj = new Static("Static51","20","60","460","36",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("[Property] flexcrossaxisalign = \"start\" | \"end\" | \"center\"");
            obj.set_cssclass("sta_WF_GuideScript");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static17_00","20","119","5.87%","26",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("default");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static18_00","49.56%","119","102","26",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("flexshrink");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static17_00_00","20","404","9.78%","26",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("flexwrap");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static18_00_00","49.17%","404","153","26",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("flexwrap/ flexgrow");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div10.form
            obj = new Layout("default","",0,0,this.Div10.form,function(p){});
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            this.Div10.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div11.form
            obj = new Layout("default","",0,0,this.Div11.form,function(p){});
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("start");
            obj.set_flexcrossaxiswrapalign("end");
            this.Div11.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div18.form
            obj = new Layout("default","",0,0,this.Div18.form,function(p){});
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("start");
            obj.set_flexcrossaxiswrapalign("center");
            this.Div18.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div19.form
            obj = new Layout("default","",0,0,this.Div19.form,function(p){});
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("start");
            obj.set_flexcrossaxiswrapalign("spacebetween");
            this.Div19.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div20.form
            obj = new Layout("default","",0,0,this.Div20.form,function(p){});
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("start");
            obj.set_flexcrossaxiswrapalign("spacearound");
            this.Div20.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div21.form
            obj = new Layout("default","",0,0,this.Div21.form,function(p){});
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("start");
            obj.set_flexcrossaxiswrapalign("spaceevenly");
            obj.set_verticalgap("20");
            this.Div21.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div22.form
            obj = new Layout("default","",0,0,this.Div22.form,function(p){});
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            this.Div22.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div23.form
            obj = new Layout("default","",0,0,this.Div23.form,function(p){});
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("end");
            obj.set_flexcrossaxiswrapalign("start");
            this.Div23.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div24.form
            obj = new Layout("default","",0,0,this.Div24.form,function(p){});
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxiswrapalign("start");
            this.Div24.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div25.form
            obj = new Layout("default","",0,0,this.Div25.form,function(p){});
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("spacebetween");
            obj.set_flexcrossaxiswrapalign("start");
            this.Div25.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div26.form
            obj = new Layout("default","",0,0,this.Div26.form,function(p){});
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("spacearound");
            obj.set_flexcrossaxiswrapalign("start");
            this.Div26.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div27.form
            obj = new Layout("default","",0,0,this.Div27.form,function(p){});
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("spaceevenly");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_verticalgap("20");
            this.Div27.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div29.form
            obj = new Layout("default","",0,0,this.Div29.form,function(p){});
            obj.set_type("horizontal");
            obj.set_horizontalgap("0");
            obj.set_flexwrap("nowrap");
            this.Div29.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div30.form
            obj = new Layout("default","",0,0,this.Div30.form,function(p){});
            obj.set_type("horizontal");
            obj.set_horizontalgap("0");
            obj.set_flexwrap("wrap");
            this.Div30.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div31.form
            obj = new Layout("default","",0,0,this.Div31.form,function(p){});
            obj.set_type("horizontal");
            obj.set_horizontalgap("0");
            obj.set_flexwrap("wrap");
            this.Div31.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            obj.set_type("horizontal");
            obj.set_horizontalgap("0");
            obj.set_flexwrap("nowrap");
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div45.form
            obj = new Layout("default","",0,0,this.Div45.form,function(p){});
            obj.set_type("horizontal");
            obj.set_horizontalgap("0");
            obj.set_flexwrap("nowrap");
            this.Div45.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div46.form
            obj = new Layout("default","",0,0,this.Div46.form,function(p){});
            obj.set_type("horizontal");
            obj.set_horizontalgap("0");
            obj.set_flexwrap("wrap");
            this.Div46.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div47.form
            obj = new Layout("default","",0,0,this.Div47.form,function(p){});
            obj.set_type("horizontal");
            obj.set_horizontalgap("0");
            obj.set_flexwrap("wrap");
            this.Div47.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div02.form
            obj = new Layout("default","",0,0,this.Div02.form,function(p){});
            obj.set_type("horizontal");
            obj.set_horizontalgap("0");
            obj.set_flexwrap("nowrap");
            obj.set_flexcrossaxisalign("end");
            this.Div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div44.form
            obj = new Layout("default","",0,0,this.Div44.form,function(p){});
            obj.set_type("horizontal");
            obj.set_horizontalgap("0");
            obj.set_flexwrap("nowrap");
            obj.set_flexcrossaxisalign("end");
            this.Div44.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div43.form
            obj = new Layout("default","",0,0,this.Div43.form,function(p){});
            obj.set_type("horizontal");
            obj.set_horizontalgap("0");
            obj.set_flexwrap("nowrap");
            obj.set_flexcrossaxisalign("center");
            this.Div43.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1020,700,this,function(p){});
            obj.set_flexwrap("nowrap");
            obj.set_stepcount("5");
            obj.set_stepindex("0");
            obj.set_flexcrossaxiswrapalign("start");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","Static56","value","ds_emp","DEPT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Static57","value","ds_emp","DEPT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static37.addEventHandler("onclick",this.Static02_00_onclick,this);
            this.Div10.form.Button00.addEventHandler("onclick",this.Button_onclick,this);
            this.Div10.form.Button01.addEventHandler("onclick",this.Button_onclick,this);
            this.Div10.form.Button03.addEventHandler("onclick",this.Button_onclick,this);
            this.Div10.form.Button04.addEventHandler("onclick",this.Button_onclick,this);
            this.Div10.form.Button05.addEventHandler("onclick",this.Button_onclick,this);
            this.Div10.form.Button06.addEventHandler("onclick",this.Button_onclick,this);
            this.Div10.form.Button07.addEventHandler("onclick",this.Button_onclick,this);
            this.Div10.form.Button08.addEventHandler("onclick",this.Button_onclick,this);
            this.Div10.form.Button09.addEventHandler("onclick",this.Button_onclick,this);
            this.Div10.form.Button10.addEventHandler("onclick",this.Button_onclick,this);
            this.Static36.addEventHandler("onclick",this.Static02_00_onclick,this);
            this.Static34.addEventHandler("onclick",this.Static02_00_onclick,this);
            this.Static40.addEventHandler("onclick",this.Static02_00_onclick,this);
            this.Static51.addEventHandler("onclick",this.Static02_00_onclick,this);
        };
        this.loadIncludeScript("Layout_Horizontal.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
