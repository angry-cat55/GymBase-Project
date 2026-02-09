(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Layout_Vertical");
            this.set_titletext("Layout_Vertical");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static01","25","96","3.14%","26",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("start");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","25","Static01:0","27.75%",null,null,"40",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_flexshrink("0");
            obj.set_positionstep("1");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","12","14","80","80",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_Status");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01","12","14","80","80",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_Status");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button03","12","14","80","80",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_Status");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button04","12","14","80","80",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_Status");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button05","12","14","80","80",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("5");
            obj.set_cssclass("btn_WF_Status");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","35.20%","96","3.53%","26",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("center");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","361","122","27.75%",null,null,"47",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_flexshrink("2");
            obj.set_positionstep("1");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","12","14","80","80",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_Status");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button02","12","14","80","80",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_Status");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button03","12","14","80","80",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_Status");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button04","12","14","80","80",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_Status");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button05","12","14","80","80",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("5");
            obj.set_cssclass("btn_WF_Status");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static04","67.55%","96","1.67%","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("end");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Div("Div03","690","122","27.75%",null,null,"47",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_flexshrink("0");
            obj.set_positionstep("1");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","12","14","80","80",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_Status");
            this.Div03.addChild(obj.name, obj);

            obj = new Button("Button01","12","14","80","80",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_Status");
            this.Div03.addChild(obj.name, obj);

            obj = new Button("Button03","12","14","80","80",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_Status");
            this.Div03.addChild(obj.name, obj);

            obj = new Button("Button04","12","14","80","80",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("3");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_Status");
            this.Div03.addChild(obj.name, obj);

            obj = new Button("Button05","12","14","80","80",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("4");
            obj.set_text("5");
            obj.set_cssclass("btn_WF_Status");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static11","20","119","3.14%","26",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("start");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","Static11:849.20%","119","1.67%","26",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("end");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","Static12:1719.89%","119","3.53%","26",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("center");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Div("Div11","20","Static11:0","27.75%","33.00%",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Div00");
            obj.set_flexshrink("0");
            obj.set_positionstep("2");
            obj.set_cssclass("div_WF_Area");
            obj.set_formscrollbartype("auto auto");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","12","14","50","60",null,null,null,null,null,null,this.Div11.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_Status");
            obj.set_cursor("none");
            this.Div11.addChild(obj.name, obj);

            obj = new Button("Button02","0.00","80","50","60",null,null,null,null,null,null,this.Div11.form);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_Status");
            obj.set_cursor("none");
            this.Div11.addChild(obj.name, obj);

            obj = new Button("Button03","50.00","0","50","60",null,null,null,null,null,null,this.Div11.form);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_Status");
            obj.set_cursor("none");
            this.Div11.addChild(obj.name, obj);

            obj = new Button("Button04","50.00","90","50","60",null,null,null,null,null,null,this.Div11.form);
            obj.set_taborder("3");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_Status");
            obj.set_cursor("none");
            this.Div11.addChild(obj.name, obj);

            obj = new Button("Button05","100.00","0","50","60",null,null,null,null,null,null,this.Div11.form);
            obj.set_taborder("4");
            obj.set_text("5");
            obj.set_cssclass("btn_WF_Status");
            obj.set_cursor("none");
            this.Div11.addChild(obj.name, obj);

            obj = new Button("Button06","100.00","90","50","60",null,null,null,null,null,null,this.Div11.form);
            obj.set_taborder("5");
            obj.set_text("6");
            obj.set_cssclass("btn_WF_Status");
            obj.set_cursor("none");
            this.Div11.addChild(obj.name, obj);

            obj = new Static("Static14","20","Div11:20","8.00%","26",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("spacebetween");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Div("Div12","Div11:17","Static12:0","27.75%","33.00%",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Div00");
            obj.set_flexshrink("0");
            obj.set_positionstep("2");
            obj.set_formscrolltype("both");
            obj.set_formscrollbartype("auto auto");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","133.00","0","50","60",null,null,null,null,null,null,this.Div12.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_Status");
            this.Div12.addChild(obj.name, obj);

            obj = new Button("Button02","133.00","90","50","60",null,null,null,null,null,null,this.Div12.form);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_Status");
            this.Div12.addChild(obj.name, obj);

            obj = new Button("Button03","183.00","0","50","60",null,null,null,null,null,null,this.Div12.form);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_Status");
            this.Div12.addChild(obj.name, obj);

            obj = new Button("Button04","183.00","90","50","60",null,null,null,null,null,null,this.Div12.form);
            obj.set_taborder("3");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_Status");
            this.Div12.addChild(obj.name, obj);

            obj = new Button("Button05","233.00","0","50","60",null,null,null,null,null,null,this.Div12.form);
            obj.set_taborder("4");
            obj.set_text("5");
            obj.set_cssclass("btn_WF_Status");
            this.Div12.addChild(obj.name, obj);

            obj = new Button("Button06","233.00","90","50","60",null,null,null,null,null,null,this.Div12.form);
            obj.set_taborder("5");
            obj.set_text("6");
            obj.set_cssclass("btn_WF_Status");
            this.Div12.addChild(obj.name, obj);

            obj = new Static("Static15","Static14:278.79%","Div12:20","8.00%","26",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("spaceround");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Div("Div13","Div12:22","Static13:0","27.75%","33.00%",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("Div00");
            obj.set_flexshrink("0");
            obj.set_positionstep("2");
            obj.set_formscrolltype("both");
            obj.set_formscrollbartype("auto auto");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","66.00","0","50","60",null,null,null,null,null,null,this.Div13.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_Status");
            this.Div13.addChild(obj.name, obj);

            obj = new Button("Button02","66.00","90","50","60",null,null,null,null,null,null,this.Div13.form);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_Status");
            this.Div13.addChild(obj.name, obj);

            obj = new Button("Button03","116.00","0","50","60",null,null,null,null,null,null,this.Div13.form);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_Status");
            this.Div13.addChild(obj.name, obj);

            obj = new Button("Button04","116.00","90","50","60",null,null,null,null,null,null,this.Div13.form);
            obj.set_taborder("3");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_Status");
            this.Div13.addChild(obj.name, obj);

            obj = new Button("Button05","166.00","0","50","60",null,null,null,null,null,null,this.Div13.form);
            obj.set_taborder("4");
            obj.set_text("5");
            obj.set_cssclass("btn_WF_Status");
            this.Div13.addChild(obj.name, obj);

            obj = new Button("Button06","166.00","90","50","60",null,null,null,null,null,null,this.Div13.form);
            obj.set_taborder("5");
            obj.set_text("6");
            obj.set_cssclass("btn_WF_Status");
            this.Div13.addChild(obj.name, obj);

            obj = new Static("Static16","Static15:273.90%","Div13:20","8.00%","26",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("spaceevenly");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Div("Div14","20","Static14:0","27.75%",null,null,"31",null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Div00");
            obj.set_flexshrink("0");
            obj.set_positionstep("2");
            obj.set_formscrolltype("both");
            obj.set_cssclass("div_WF_Area");
            obj.set_formscrollbartype("auto auto");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0.00","0","50","60",null,null,null,null,null,null,this.Div14.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_Status");
            this.Div14.addChild(obj.name, obj);

            obj = new Button("Button02","0.00","90","50","60",null,null,null,null,null,null,this.Div14.form);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_Status");
            this.Div14.addChild(obj.name, obj);

            obj = new Button("Button03","116.00","0","50","60",null,null,null,null,null,null,this.Div14.form);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_Status");
            this.Div14.addChild(obj.name, obj);

            obj = new Button("Button04","116.00","90","50","60",null,null,null,null,null,null,this.Div14.form);
            obj.set_taborder("3");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_Status");
            this.Div14.addChild(obj.name, obj);

            obj = new Button("Button05","233.00","0","50","60",null,null,null,null,null,null,this.Div14.form);
            obj.set_taborder("4");
            obj.set_text("5");
            obj.set_cssclass("btn_WF_Status");
            this.Div14.addChild(obj.name, obj);

            obj = new Button("Button06","233.00","90","50","60",null,null,null,null,null,null,this.Div14.form);
            obj.set_taborder("5");
            obj.set_text("6");
            obj.set_cssclass("btn_WF_Status");
            this.Div14.addChild(obj.name, obj);

            obj = new Div("Div15","Div14:17","Static15:0","27.75%",null,null,"31",null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Div00");
            obj.set_flexshrink("0");
            obj.set_positionstep("2");
            obj.set_formscrolltype("both");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","22.00","0","50","60",null,null,null,null,null,null,this.Div15.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_Status");
            this.Div15.addChild(obj.name, obj);

            obj = new Button("Button02","22.00","90","50","60",null,null,null,null,null,null,this.Div15.form);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_Status");
            this.Div15.addChild(obj.name, obj);

            obj = new Button("Button03","116.00","0","50","60",null,null,null,null,null,null,this.Div15.form);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_Status");
            this.Div15.addChild(obj.name, obj);

            obj = new Button("Button04","116.00","90","50","60",null,null,null,null,null,null,this.Div15.form);
            obj.set_taborder("3");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_Status");
            this.Div15.addChild(obj.name, obj);

            obj = new Button("Button05","210.00","0","50","60",null,null,null,null,null,null,this.Div15.form);
            obj.set_taborder("4");
            obj.set_text("5");
            obj.set_cssclass("btn_WF_Status");
            this.Div15.addChild(obj.name, obj);

            obj = new Button("Button06","210.00","90","50","60",null,null,null,null,null,null,this.Div15.form);
            obj.set_taborder("5");
            obj.set_text("6");
            obj.set_cssclass("btn_WF_Status");
            this.Div15.addChild(obj.name, obj);

            obj = new Div("Div16","Div15:22","Static16:0","27.75%",null,null,"31",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Div00");
            obj.set_flexshrink("0");
            obj.set_positionstep("2");
            obj.set_formscrolltype("both");
            obj.set_formscrollbartype("auto");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","33.00","0","50","60",null,null,null,null,null,null,this.Div16.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_Status");
            this.Div16.addChild(obj.name, obj);

            obj = new Button("Button02","33.00","90","50","60",null,null,null,null,null,null,this.Div16.form);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_Status");
            this.Div16.addChild(obj.name, obj);

            obj = new Button("Button03","116.00","90","50","60",null,null,null,null,null,null,this.Div16.form);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_Status");
            this.Div16.addChild(obj.name, obj);

            obj = new Button("Button04","199.00","0","50","60",null,null,null,null,null,null,this.Div16.form);
            obj.set_taborder("3");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_Status");
            this.Div16.addChild(obj.name, obj);

            obj = new Button("Button05","199.00","90","50","60",null,null,null,null,null,null,this.Div16.form);
            obj.set_taborder("4");
            obj.set_text("5");
            obj.set_cssclass("btn_WF_Status");
            this.Div16.addChild(obj.name, obj);

            obj = new Button("Button06","199.00","90","50","60",null,null,null,null,null,null,this.Div16.form);
            obj.set_taborder("5");
            obj.set_text("6");
            obj.set_cssclass("btn_WF_Status");
            this.Div16.addChild(obj.name, obj);

            obj = new Static("Static17","20","119","3.14%","26",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("start");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_positionstep("3");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Div("Div17","20","Static17:0","14.51%",null,null,"42",null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("Div00");
            obj.set_flexshrink("0");
            obj.set_positionstep("3");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","12","14","70","70",null,null,null,null,null,null,this.Div17.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_Status");
            this.Div17.addChild(obj.name, obj);

            obj = new Button("Button01","12","14","70","70",null,null,null,null,null,null,this.Div17.form);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_Status");
            this.Div17.addChild(obj.name, obj);

            obj = new Button("Button02","12","14","70","70",null,null,null,null,null,null,this.Div17.form);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_Status");
            this.Div17.addChild(obj.name, obj);

            obj = new Static("Static18","Static17:443.29%","119","1.76%","26",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("end");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_positionstep("3");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Div("Div18","Div17:19","Static18:0","14.51%",null,null,"42",null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("Div00");
            obj.set_flexshrink("0");
            obj.set_positionstep("3");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","12","14","70","70",null,null,null,null,null,null,this.Div18.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_Status");
            this.Div18.addChild(obj.name, obj);

            obj = new Button("Button01","12","14","70","70",null,null,null,null,null,null,this.Div18.form);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_Status");
            this.Div18.addChild(obj.name, obj);

            obj = new Button("Button02","12","14","70","70",null,null,null,null,null,null,this.Div18.form);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_Status");
            this.Div18.addChild(obj.name, obj);

            obj = new Static("Static19","Static18:802.41%","119","3.53%","26",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("center");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_positionstep("3");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Div("Div19","Div18:21","Static19:0","14.51%",null,null,"42",null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("Div00");
            obj.set_flexshrink("0");
            obj.set_positionstep("3");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","12","14","70","70",null,null,null,null,null,null,this.Div19.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_Status");
            this.Div19.addChild(obj.name, obj);

            obj = new Button("Button01","12","14","70","70",null,null,null,null,null,null,this.Div19.form);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_Status");
            this.Div19.addChild(obj.name, obj);

            obj = new Button("Button02","12","14","70","70",null,null,null,null,null,null,this.Div19.form);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_Status");
            this.Div19.addChild(obj.name, obj);

            obj = new Static("Static20","Static19:374.94%","119","7.84%","26",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("spacebetween");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_positionstep("3");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Div("Div20","Div19:20","Static20:0","14.51%",null,null,"42",null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("Div00");
            obj.set_flexshrink("0");
            obj.set_positionstep("3");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","12","14","70","70",null,null,null,null,null,null,this.Div20.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_Status");
            this.Div20.addChild(obj.name, obj);

            obj = new Button("Button01","12","14","70","70",null,null,null,null,null,null,this.Div20.form);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_Status");
            this.Div20.addChild(obj.name, obj);

            obj = new Button("Button02","12","14","70","70",null,null,null,null,null,null,this.Div20.form);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_Status");
            this.Div20.addChild(obj.name, obj);

            obj = new Static("Static21","Static20:105.08%","119","7.84%","26",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("spaceround");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_positionstep("3");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Div("Div21","Div20:21","Static21:0","14.51%",null,null,"42",null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("Div00");
            obj.set_flexshrink("0");
            obj.set_positionstep("3");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","12","14","70","70",null,null,null,null,null,null,this.Div21.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_Status");
            this.Div21.addChild(obj.name, obj);

            obj = new Button("Button01","12","14","70","70",null,null,null,null,null,null,this.Div21.form);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_Status");
            this.Div21.addChild(obj.name, obj);

            obj = new Button("Button02","12","14","70","70",null,null,null,null,null,null,this.Div21.form);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_Status");
            this.Div21.addChild(obj.name, obj);

            obj = new Static("Static22","Static21:93.83%","119","7.75%","26",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("spaceevenly");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_positionstep("3");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Div("Div23","Div21:11","Static22:0","14.51%",null,null,"42",null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("Div00");
            obj.set_flexshrink("0");
            obj.set_positionstep("3");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","12","14","70","70",null,null,null,null,null,null,this.Div23.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_Status");
            this.Div23.addChild(obj.name, obj);

            obj = new Button("Button01","12","14","70","70",null,null,null,null,null,null,this.Div23.form);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_Status");
            this.Div23.addChild(obj.name, obj);

            obj = new Button("Button02","12","14","70","70",null,null,null,null,null,null,this.Div23.form);
            obj.set_taborder("2");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_Status");
            this.Div23.addChild(obj.name, obj);

            obj = new Static("Static40","20","60","460","36",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("[Property] flexcrossaxisalign = \"start\" | \"end\" | \"center\"");
            obj.set_cssclass("sta_WF_GuideScript");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","0","148","60",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("Type - Vertical");
            obj.set_cssclass("sta_WF_GuideTitle1");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static37","20","60","788","59",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("[Property] flexwrap = wrap\r\nflexcrossaxiswrapalign = \"start\" | \"end\" | \"center\" | \"spacebetween\" | \"spaceround\" | \"spaceevenly\"");
            obj.set_cssclass("sta_WF_GuideScript");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static36","20","60","767","59",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("[Property] flexwrap = wrap\r\nflexmainaxisalign = \"start\" | \"end\" | \"center\" | \"spacebetween\" | \"spaceround\" | \"spaceevenly\"");
            obj.set_cssclass("sta_WF_GuideScript");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static34","20","60","327","59",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("[Property] flexwrap = \"nowrap\" | \"wrap\"\r\n[Component] Panel");
            obj.set_cssclass("sta_WF_GuideScript");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","20","119","3.73%","26",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("nowrap");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_00","20","Static01_00:0","27.94%",null,null,"40",null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("Div00");
            obj.set_flexshrink("0");
            obj.set_positionstep("4");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","47","9","120","50",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_Status");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button01","54","74","120","50",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_Status");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button02","18","122","120","50",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_Status");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button03","139","241","120","50",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("3");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_Status");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button04","134","260","120","50",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("4");
            obj.set_text("5");
            obj.set_cssclass("btn_WF_Status");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button05","102","322","120","50",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("5");
            obj.set_text("6");
            obj.set_cssclass("btn_WF_Status");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button06","97","347","120","50",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("6");
            obj.set_text("7");
            obj.set_cssclass("btn_WF_Status");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button07","197","20","120","50",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("7");
            obj.set_text("8");
            obj.set_cssclass("btn_WF_Status");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00","Static01_00:720.06%","119","2.55%","26",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("wrap");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new Div("Div01_00","Div00_00:20","Static02_00:0","27.94%",null,null,"40",null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("Div00");
            obj.set_flexshrink("2");
            obj.set_positionstep("4");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","47","9","120","50",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_Status");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button01","54","74","120","50",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_Status");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button02","18","122","120","50",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_Status");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button04","134","260","120","50",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("3");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_Status");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button03","139","241","120","50",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("4");
            obj.set_text("5");
            obj.set_cssclass("btn_WF_Status");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button05","102","322","120","50",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("5");
            obj.set_text("6");
            obj.set_cssclass("btn_WF_Status");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button06","97","347","120","50",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("6");
            obj.set_text("7");
            obj.set_cssclass("btn_WF_Status");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button07","197","20","120","50",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("7");
            obj.set_text("8");
            obj.set_cssclass("btn_WF_Status");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static04_00","Static02_00:1080.32%","119","7.35%","26",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("wrap / Panel");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new Div("Div03_00","Div01_00:20","Static04_00:0","27.94%",null,null,"40",null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("Div00");
            obj.set_flexshrink("0");
            obj.set_positionstep("4");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","47","9","120","50",null,null,null,null,null,null,this.Div03_00.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_Status");
            this.Div03_00.addChild(obj.name, obj);

            obj = new Button("Button01","54","74","120","50",null,null,null,null,null,null,this.Div03_00.form);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_Status");
            this.Div03_00.addChild(obj.name, obj);

            obj = new Button("Button02","18","122","120","50",null,null,null,null,null,null,this.Div03_00.form);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_Status");
            this.Div03_00.addChild(obj.name, obj);

            obj = new Button("Button04","134","260","120","50",null,null,null,null,null,null,this.Div03_00.form);
            obj.set_taborder("3");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_Status");
            this.Div03_00.addChild(obj.name, obj);

            obj = new Button("Button03","139","241","120","50",null,null,null,null,null,null,this.Div03_00.form);
            obj.set_taborder("4");
            obj.set_text("5");
            obj.set_cssclass("btn_WF_Status");
            this.Div03_00.addChild(obj.name, obj);

            obj = new Button("Button05","102","322","120","50",null,null,null,null,null,null,this.Div03_00.form);
            obj.set_taborder("5");
            obj.set_text("6");
            obj.set_cssclass("btn_WF_Status");
            this.Div03_00.addChild(obj.name, obj);

            obj = new Button("Button06","97","347","120","50",null,null,null,null,null,null,this.Div03_00.form);
            obj.set_taborder("6");
            obj.set_text("7");
            obj.set_cssclass("btn_WF_Status");
            this.Div03_00.addChild(obj.name, obj);

            obj = new Button("Button07","197","20","120","50",null,null,null,null,null,null,this.Div03_00.form);
            obj.set_taborder("7");
            obj.set_text("8");
            obj.set_cssclass("btn_WF_Status");
            this.Div03_00.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","0","120","97",null,null,null,null,null,null,this.Div03_00.form);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button01\"/></Contents>");
            this.Div03_00.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","97","120","97",null,null,null,null,null,null,this.Div03_00.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button02\"/><PanelItem id=\"PanelItem01\" componentid=\"Button04\"/></Contents>");
            this.Div03_00.addChild(obj.name, obj);

            obj = new Panel("Panel02","0","194","120","97",null,null,null,null,null,null,this.Div03_00.form);
            obj.set_taborder("10");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button03\"/><PanelItem id=\"PanelItem01\" componentid=\"Button05\"/></Contents>");
            this.Div03_00.addChild(obj.name, obj);

            obj = new Panel("Panel03","0","291","120","97",null,null,null,null,null,null,this.Div03_00.form);
            obj.set_taborder("11");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button06\"/><PanelItem id=\"PanelItem01\" componentid=\"Button07\"/></Contents>");
            this.Div03_00.addChild(obj.name, obj);

            obj = new Static("Static17_00","19","119","9.78%","26",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("default");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_positionstep("0");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_01","20","Static17_00:0","21.51%",null,null,"30",null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("Div00");
            obj.set_flexshrink("0");
            obj.set_positionstep("0");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","12","14","90","90",null,null,null,null,null,null,this.Div00_01.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_Status");
            this.Div00_01.addChild(obj.name, obj);

            obj = new Button("Button01","12","14","90","90",null,null,null,null,null,null,this.Div00_01.form);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_Status");
            this.Div00_01.addChild(obj.name, obj);

            obj = new Button("Button03","12","14","90","90",null,null,null,null,null,null,this.Div00_01.form);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_Status");
            this.Div00_01.addChild(obj.name, obj);

            obj = new Button("Button04","12","14","90","90",null,null,null,null,null,null,this.Div00_01.form);
            obj.set_taborder("3");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_Status");
            this.Div00_01.addChild(obj.name, obj);

            obj = new Button("Button05","12","14","90","90",null,null,null,null,null,null,this.Div00_01.form);
            obj.set_taborder("4");
            obj.set_text("5");
            obj.set_cssclass("btn_WF_Status");
            this.Div00_01.addChild(obj.name, obj);

            obj = new Button("Button05_00","12","14","90","90",null,null,null,null,null,null,this.Div00_01.form);
            obj.set_taborder("5");
            obj.set_text("6");
            obj.set_cssclass("btn_WF_Status");
            this.Div00_01.addChild(obj.name, obj);

            obj = new Static("Static18_00","26.69%","119","9.78%","26",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("flexshrink");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_positionstep("0");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Div("Div01_01","Div00_01:25","Static18_00:0","21.51%",null,null,"30",null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("Div00");
            obj.set_flexshrink("2");
            obj.set_positionstep("0");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","12","14","90","90",null,null,null,null,null,null,this.Div01_01.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_Status");
            obj.set_flexshrink("0");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Button("Button02","12","14","90","90",null,null,null,null,null,null,this.Div01_01.form);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_Status");
            obj.set_flexshrink("0");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Button("Button03","12","14","90","90",null,null,null,null,null,null,this.Div01_01.form);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_Status");
            obj.set_flexshrink("0");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Button("Button04","12","14","90","90",null,null,null,null,null,null,this.Div01_01.form);
            obj.set_taborder("3");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_Status");
            obj.set_flexshrink("0");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Button("Button05","12","14","90","90",null,null,null,null,null,null,this.Div01_01.form);
            obj.set_taborder("4");
            obj.set_text("5");
            obj.set_cssclass("btn_WF_Status");
            obj.set_flexshrink("0");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Button("Button05_00","12","14","90","90",null,null,null,null,null,null,this.Div01_01.form);
            obj.set_taborder("5");
            obj.set_text("6");
            obj.set_cssclass("btn_WF_Status");
            obj.set_flexshrink("0");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Static("Static19_00","50.64%","119","9.78%","26",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("flexwrap");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_positionstep("0");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Div("Div01_01_00","Div01_01:30","Static19_00:0","21.51%",null,null,"30",null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("Div00");
            obj.set_flexshrink("2");
            obj.set_positionstep("0");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","12","14","90","90",null,null,null,null,null,null,this.Div01_01_00.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_Status");
            this.Div01_01_00.addChild(obj.name, obj);

            obj = new Button("Button02","12","14","90","90",null,null,null,null,null,null,this.Div01_01_00.form);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_Status");
            this.Div01_01_00.addChild(obj.name, obj);

            obj = new Button("Button03","12","14","90","90",null,null,null,null,null,null,this.Div01_01_00.form);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_Status");
            this.Div01_01_00.addChild(obj.name, obj);

            obj = new Button("Button04","12","14","90","90",null,null,null,null,null,null,this.Div01_01_00.form);
            obj.set_taborder("3");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_Status");
            this.Div01_01_00.addChild(obj.name, obj);

            obj = new Button("Button05","12","14","90","90",null,null,null,null,null,null,this.Div01_01_00.form);
            obj.set_taborder("4");
            obj.set_text("5");
            obj.set_cssclass("btn_WF_Status");
            this.Div01_01_00.addChild(obj.name, obj);

            obj = new Button("Button05_00","12","14","90","90",null,null,null,null,null,null,this.Div01_01_00.form);
            obj.set_taborder("5");
            obj.set_text("6");
            obj.set_cssclass("btn_WF_Status");
            this.Div01_01_00.addChild(obj.name, obj);

            obj = new Static("Static20_00","74.98%","119","160","26",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("flexwrap / flexgrow");
            obj.set_cssclass("sta_WF_GuideRefer");
            obj.set_positionstep("0");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Div("Div01_01_00_00","Div01_01_00:30","Static20_00:0","21.51%",null,null,"30",null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("Div00");
            obj.set_flexshrink("2");
            obj.set_positionstep("0");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","12","14","90","90",null,null,null,null,null,null,this.Div01_01_00_00.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_Status");
            obj.set_flexgrow("2");
            this.Div01_01_00_00.addChild(obj.name, obj);

            obj = new Button("Button02","12","14","90","90",null,null,null,null,null,null,this.Div01_01_00_00.form);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_Status");
            obj.set_flexgrow("2");
            this.Div01_01_00_00.addChild(obj.name, obj);

            obj = new Button("Button03","12","14","90","90",null,null,null,null,null,null,this.Div01_01_00_00.form);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_Status");
            obj.set_flexgrow("2");
            this.Div01_01_00_00.addChild(obj.name, obj);

            obj = new Button("Button04","12","14","90","90",null,null,null,null,null,null,this.Div01_01_00_00.form);
            obj.set_taborder("3");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_Status");
            obj.set_flexgrow("2");
            this.Div01_01_00_00.addChild(obj.name, obj);

            obj = new Button("Button05","12","14","90","90",null,null,null,null,null,null,this.Div01_01_00_00.form);
            obj.set_taborder("4");
            obj.set_text("5");
            obj.set_cssclass("btn_WF_Status");
            obj.set_flexgrow("2");
            this.Div01_01_00_00.addChild(obj.name, obj);

            obj = new Button("Button05_00","12","14","90","90",null,null,null,null,null,null,this.Div01_01_00_00.form);
            obj.set_taborder("5");
            obj.set_text("6");
            obj.set_cssclass("btn_WF_Status");
            obj.set_flexgrow("2");
            this.Div01_01_00_00.addChild(obj.name, obj);

            obj = new Static("Static40_00","20","60","448","59",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("[Property] flexgrow , flexshrink\r\nflexwrap = \"wrap\" | \"nowrap\" ");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            obj.set_type("vertical");
            obj.set_horizontalgap("0");
            obj.set_flexwrap("nowrap");
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            obj.set_type("vertical");
            obj.set_horizontalgap("0");
            obj.set_flexwrap("nowrap");
            obj.set_flexcrossaxisalign("center");
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div03.form
            obj = new Layout("default","",0,0,this.Div03.form,function(p){});
            obj.set_type("vertical");
            obj.set_horizontalgap("0");
            obj.set_flexwrap("nowrap");
            obj.set_flexcrossaxisalign("end");
            this.Div03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div11.form
            obj = new Layout("default","",0,0,this.Div11.form,function(p){});
            obj.set_type("vertical");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_verticalgap("20");
            this.Div11.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div12.form
            obj = new Layout("default","",0,0,this.Div12.form,function(p){});
            obj.set_type("vertical");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("start");
            obj.set_flexcrossaxiswrapalign("end");
            obj.set_verticalgap("20");
            this.Div12.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div13.form
            obj = new Layout("default","",0,0,this.Div13.form,function(p){});
            obj.set_type("vertical");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("start");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_verticalgap("20");
            this.Div13.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div14.form
            obj = new Layout("default","",0,0,this.Div14.form,function(p){});
            obj.set_type("vertical");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("start");
            obj.set_flexcrossaxiswrapalign("spacebetween");
            obj.set_verticalgap("20");
            this.Div14.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div15.form
            obj = new Layout("default","",0,0,this.Div15.form,function(p){});
            obj.set_type("vertical");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("start");
            obj.set_flexcrossaxiswrapalign("spacearound");
            obj.set_verticalgap("20");
            this.Div15.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div16.form
            obj = new Layout("default","",0,0,this.Div16.form,function(p){});
            obj.set_type("vertical");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("start");
            obj.set_flexcrossaxiswrapalign("spaceevenly");
            obj.set_verticalgap("20");
            this.Div16.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div17.form
            obj = new Layout("default","",0,0,this.Div17.form,function(p){});
            obj.set_type("vertical");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            this.Div17.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div18.form
            obj = new Layout("default","",0,0,this.Div18.form,function(p){});
            obj.set_type("vertical");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("end");
            obj.set_flexcrossaxiswrapalign("start");
            this.Div18.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div19.form
            obj = new Layout("default","",0,0,this.Div19.form,function(p){});
            obj.set_type("vertical");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxiswrapalign("start");
            this.Div19.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div20.form
            obj = new Layout("default","",0,0,this.Div20.form,function(p){});
            obj.set_type("vertical");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("spacebetween");
            obj.set_flexcrossaxiswrapalign("start");
            this.Div20.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div21.form
            obj = new Layout("default","",0,0,this.Div21.form,function(p){});
            obj.set_type("vertical");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("spacearound");
            obj.set_flexcrossaxiswrapalign("start");
            this.Div21.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div23.form
            obj = new Layout("default","",0,0,this.Div23.form,function(p){});
            obj.set_type("vertical");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("spaceevenly");
            obj.set_flexcrossaxiswrapalign("start");
            this.Div23.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00_00.form
            obj = new Layout("default","",0,0,this.Div00_00.form,function(p){});
            obj.set_type("vertical");
            obj.set_horizontalgap("0");
            obj.set_flexwrap("nowrap");
            this.Div00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01_00.form
            obj = new Layout("default","",0,0,this.Div01_00.form,function(p){});
            obj.set_type("vertical");
            obj.set_horizontalgap("0");
            obj.set_flexwrap("wrap");
            obj.set_flexcrossaxisalign("start");
            this.Div01_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div03_00.form
            obj = new Layout("default","",0,0,this.Div03_00.form,function(p){});
            obj.set_type("vertical");
            obj.set_horizontalgap("0");
            obj.set_flexwrap("wrap");
            obj.set_flexcrossaxisalign("start");
            this.Div03_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00_01.form
            obj = new Layout("default","",0,0,this.Div00_01.form,function(p){});
            obj.set_type("vertical");
            obj.set_horizontalgap("0");
            obj.set_flexwrap("nowrap");
            this.Div00_01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01_01.form
            obj = new Layout("default","",0,0,this.Div01_01.form,function(p){});
            obj.set_type("vertical");
            obj.set_horizontalgap("0");
            obj.set_flexwrap("nowrap");
            obj.set_flexcrossaxisalign("start");
            this.Div01_01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01_01_00.form
            obj = new Layout("default","",0,0,this.Div01_01_00.form,function(p){});
            obj.set_type("vertical");
            obj.set_horizontalgap("0");
            obj.set_flexwrap("wrap");
            obj.set_flexcrossaxisalign("center");
            this.Div01_01_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01_01_00_00.form
            obj = new Layout("default","",0,0,this.Div01_01_00_00.form,function(p){});
            obj.set_type("vertical");
            obj.set_horizontalgap("0");
            obj.set_flexwrap("wrap");
            obj.set_flexcrossaxisalign("center");
            this.Div01_01_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1020,700,this,function(p){});
            obj.set_flexwrap("wrap");
            obj.set_stepcount("5");
            obj.set_stepindex("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item7","Static04","value","ds_emp","DEPT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","Static01_00","value","ds_emp","DEPT_CODE");
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
            this.addEventHandler("ondragmove",this.Fluid_Sample_Vertical_ondragmove,this);
            this.Static40.addEventHandler("onclick",this.Static02_00_onclick,this);
            this.Static37.addEventHandler("onclick",this.Static02_00_onclick,this);
            this.Static36.addEventHandler("onclick",this.Static02_00_onclick,this);
            this.Static34.addEventHandler("onclick",this.Static02_00_onclick,this);
            this.Static40_00.addEventHandler("onclick",this.Static02_00_onclick,this);
        };
        this.loadIncludeScript("Layout_Vertical.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
