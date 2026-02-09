(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Sample_Fluid");
            this.set_background("#4a79c6");
            this.set_scrollbartype("autoindicator autoindicator");
            if (Form == this.constructor)
            {
                this._setFormPosition(1040,693);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div05","30","10",null,"250","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div05");
            obj.set_formscrolltype("both");
            obj.set_formscrollbartype("none none");
            obj.set_fittocontents("height");
            obj.set_cssclass("div_WF_Area_fluid");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","20","450","181",null,null,null,null,null,null,this.Div05.form);
            obj.set_taborder("0");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_background("url(\'imagerc::fluid_img19.png\') no-repeat left top transparent");
            obj.set_text("");
            this.Div05.addChild(obj.name, obj);

            obj = new Div("Div01","689.00","30","511","180",null,null,null,null,null,null,this.Div05.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_formscrolltype("none");
            obj.set_cssclass("div_WF_Area_fluid");
            obj.set_formscrollbartype("none none");
            this.Div05.addChild(obj.name, obj);

            obj = new Div("Div01","0","0","511","50",null,null,null,null,null,null,this.Div05.form.Div01.form);
            obj.set_taborder("0");
            obj.set_tablecellarea("");
            obj.set_edge("url(\'imagerc::fluid_img18.png\') 250px 0px");
            obj.set_text("");
            obj.set_cssclass("div_WF_Area_fluid");
            this.Div05.form.Div01.addChild(obj.name, obj);

            obj = new Div("Div02","0","80","511","100",null,null,null,null,null,null,this.Div05.form.Div01.form);
            obj.set_taborder("1");
            obj.set_background("url(\'imagerc::fluid_img17.png\') no-repeat center top transparent");
            obj.set_text("");
            obj.set_cssclass("div_WF_Area_fluid");
            this.Div05.form.Div01.addChild(obj.name, obj);

            obj = new Div("Div00","10","Div05:39",null,"330","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none none");
            obj.set_fittocontents("height");
            obj.set_cssclass("div_WF_Area_fluid");
            this.addChild(obj.name, obj);

            obj = new Div("Div02","1293","297","1200","300",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Div02");
            obj.set_fittocontents("height");
            obj.set_cssclass("div_WF_Area_fluid");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div03","0","0","730","271",null,null,null,null,null,null,this.Div00.form.Div02.form);
            obj.set_taborder("0");
            obj.set_fittocontents("height");
            obj.set_cssclass("div_WF_Area_fluid");
            this.Div00.form.Div02.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","0","0","120","135",null,null,null,null,null,null,this.Div00.form.Div02.form.Div03.form);
            obj.set_taborder("12");
            obj.set_image("url(\'imagerc::fluid_img01.png\')");
            this.Div00.form.Div02.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","0","120","135",null,null,null,null,null,null,this.Div00.form.Div02.form.Div03.form);
            obj.set_taborder("0");
            obj.set_background("pink");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"ImageViewer00\"/></Contents>");
            this.Div00.form.Div02.form.Div03.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01","183","40","120","135",null,null,null,null,null,null,this.Div00.form.Div02.form.Div03.form);
            obj.set_taborder("13");
            obj.set_image("url(\'imagerc::fluid_img02.png\')");
            this.Div00.form.Div02.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel01","150","0","120","135",null,null,null,null,null,null,this.Div00.form.Div02.form.Div03.form);
            obj.set_taborder("1");
            obj.set_background("skyblue");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"ImageViewer01\"/></Contents>");
            this.Div00.form.Div02.form.Div03.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer02","363","36","120","135",null,null,null,null,null,null,this.Div00.form.Div02.form.Div03.form);
            obj.set_taborder("14");
            obj.set_image("url(\'imagerc::fluid_img03.png\')");
            this.Div00.form.Div02.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel03","300.00","0","120","135",null,null,null,null,null,null,this.Div00.form.Div02.form.Div03.form);
            obj.set_taborder("2");
            obj.set_background("pink");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"ImageViewer02\"/></Contents>");
            this.Div00.form.Div02.form.Div03.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer03","513","56","120","135",null,null,null,null,null,null,this.Div00.form.Div02.form.Div03.form);
            obj.set_taborder("15");
            obj.set_image("url(\'imagerc::fluid_img04.png\')");
            this.Div00.form.Div02.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel04","450.00","0","120","135",null,null,null,null,null,null,this.Div00.form.Div02.form.Div03.form);
            obj.set_taborder("3");
            obj.set_background("skyblue");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"ImageViewer03\"/></Contents>");
            this.Div00.form.Div02.form.Div03.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer04","673","64","120","135",null,null,null,null,null,null,this.Div00.form.Div02.form.Div03.form);
            obj.set_taborder("16");
            obj.set_image("url(\'imagerc::fluid_img05.png\')");
            this.Div00.form.Div02.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel05","600.00","0","120","135",null,null,null,null,null,null,this.Div00.form.Div02.form.Div03.form);
            obj.set_taborder("4");
            obj.set_background("pink");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"ImageViewer04\"/></Contents>");
            this.Div00.form.Div02.form.Div03.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer05","800","70","120","135",null,null,null,null,null,null,this.Div00.form.Div02.form.Div03.form);
            obj.set_taborder("17");
            obj.set_image("url(\'imagerc::fluid_img06.png\')");
            this.Div00.form.Div02.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel06","750.00","0","120","135",null,null,null,null,null,null,this.Div00.form.Div02.form.Div03.form);
            obj.set_taborder("5");
            obj.set_background("skyblue");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"ImageViewer05\"/></Contents>");
            this.Div00.form.Div02.form.Div03.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer06","0","0","120","135",null,null,null,null,null,null,this.Div00.form.Div02.form.Div03.form);
            obj.set_taborder("18");
            obj.set_image("url(\'imagerc::fluid_img07.png\')");
            this.Div00.form.Div02.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel02","0","150","120","135",null,null,null,null,null,null,this.Div00.form.Div02.form.Div03.form);
            obj.set_taborder("6");
            obj.set_background("skyblue");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"ImageViewer06\"/></Contents>");
            this.Div00.form.Div02.form.Div03.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer07","205","189","120","135",null,null,null,null,null,null,this.Div00.form.Div02.form.Div03.form);
            obj.set_taborder("19");
            obj.set_image("url(\'imagerc::fluid_img08.png\')");
            this.Div00.form.Div02.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel12","150.00","150","120","135",null,null,null,null,null,null,this.Div00.form.Div02.form.Div03.form);
            obj.set_taborder("7");
            obj.set_background("pink");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"ImageViewer07\"/></Contents>");
            this.Div00.form.Div02.form.Div03.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer08","348","195","120","135",null,null,null,null,null,null,this.Div00.form.Div02.form.Div03.form);
            obj.set_taborder("20");
            obj.set_image("url(\'imagerc::fluid_img09.png\')");
            this.Div00.form.Div02.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel11","300.00","150","120","135",null,null,null,null,null,null,this.Div00.form.Div02.form.Div03.form);
            obj.set_taborder("8");
            obj.set_background("skyblue");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"ImageViewer08\"/></Contents>");
            this.Div00.form.Div02.form.Div03.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer09","476","174","120","135",null,null,null,null,null,null,this.Div00.form.Div02.form.Div03.form);
            obj.set_taborder("21");
            obj.set_image("url(\'imagerc::fluid_img10.png\')");
            this.Div00.form.Div02.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel08","750.00","150","120","135",null,null,null,null,null,null,this.Div00.form.Div02.form.Div03.form);
            obj.set_taborder("9");
            obj.set_background("pink");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"ImageViewer09\"/></Contents>");
            this.Div00.form.Div02.form.Div03.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer10","654","183","120","135",null,null,null,null,null,null,this.Div00.form.Div02.form.Div03.form);
            obj.set_taborder("22");
            obj.set_image("url(\'imagerc::fluid_img11.png\')");
            this.Div00.form.Div02.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel09","600.00","150","120","135",null,null,null,null,null,null,this.Div00.form.Div02.form.Div03.form);
            obj.set_taborder("10");
            obj.set_background("skyblue");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"ImageViewer10\"/></Contents>");
            this.Div00.form.Div02.form.Div03.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer11","796","191","120","135",null,null,null,null,null,null,this.Div00.form.Div02.form.Div03.form);
            obj.set_taborder("23");
            obj.set_image("url(\'imagerc::fluid_img12.png\')");
            this.Div00.form.Div02.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel10","450.00","150","120","135",null,null,null,null,null,null,this.Div00.form.Div02.form.Div03.form);
            obj.set_taborder("11");
            obj.set_background("pink");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"ImageViewer11\"/></Contents>");
            this.Div00.form.Div02.form.Div03.addChild(obj.name, obj);

            obj = new Div("Div00","740","0","150","271",null,null,null,null,null,null,this.Div00.form.Div02.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_cssclass("div_WF_Area_fluid\\");
            this.Div00.form.Div02.addChild(obj.name, obj);

            obj = new Div("Div11","0","14","270","130",null,null,null,null,null,null,this.Div00.form.Div02.form.Div00.form);
            obj.set_taborder("0");
            obj.set_background("url(\'imagerc::fluid_img16.png\') no-repeat left top transparent");
            obj.set_cssclass("div_WF_Area_fluid");
            this.Div00.form.Div02.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div10","0","155","270","130",null,null,null,null,null,null,this.Div00.form.Div02.form.Div00.form);
            obj.set_taborder("1");
            obj.set_background("url(\'imagerc::fluid_img15.png\') no-repeat left top transparent");
            obj.set_cssclass("div_WF_Area_fluid");
            this.Div00.form.Div02.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","0","Div00:9","100%",null,null,"-11",null,null,"352",null,this);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.set_background("#ffffff");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none none");
            obj.set_fittocontents("height");
            obj.set_cssclass("div_WF_Area_fluid");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","10","40","475","250",null,null,"450",null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_background("url(\'imagerc::fluid_img13.png\') no-repeat left top transparent");
            obj.set_flexshrink("0");
            obj.set_cssclass("div_WF_Area_fluid");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div03","516","40","490","250",null,null,"450",null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_background("url(\'imagerc::fluid_img14.png\') no-repeat left top transparent");
            obj.set_flexgrow("0");
            obj.set_cssclass("div_WF_Area_fluid");
            this.Div01.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div05.form.Div00.form
            obj = new Layout("default","",0,0,this.Div05.form.Div00.form,function(p){});
            this.Div05.form.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div05.form.Div01.form.Div01
            obj = new Layout("default","",0,0,this.Div05.form.Div01.form.Div01.form,function(p){});
            this.Div05.form.Div01.form.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div05.form.Div01.form.Div02
            obj = new Layout("default","",0,0,this.Div05.form.Div01.form.Div02.form,function(p){});
            this.Div05.form.Div01.form.Div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div05.form.Div01.form
            obj = new Layout("default","",0,0,this.Div05.form.Div01.form,function(p){});
            this.Div05.form.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div05.form
            obj = new Layout("default","",0,0,this.Div05.form,function(p){});
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("start");
            obj.set_spacing("20px 0px 0px 0px");
            obj.set_horizontalgap("20");
            this.Div05.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div02.form.Div03.form
            obj = new Layout("default","",0,0,this.Div00.form.Div02.form.Div03.form,function(p){});
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("center");
            this.Div00.form.Div02.form.Div03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div02.form.Div00.form.Div11
            obj = new Layout("default","",0,0,this.Div00.form.Div02.form.Div00.form.Div11.form,function(p){});
            this.Div00.form.Div02.form.Div00.form.Div11.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div02.form.Div00.form.Div10.form
            obj = new Layout("default","",0,0,this.Div00.form.Div02.form.Div00.form.Div10.form,function(p){});
            this.Div00.form.Div02.form.Div00.form.Div10.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div02.form.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form.Div02.form.Div00.form,function(p){});
            obj.set_flexmainaxisalign("center");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("10");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexcrossaxisalign("center");
            this.Div00.form.Div02.form.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div02.form
            obj = new Layout("default","",0,0,this.Div00.form.Div02.form,function(p){});
            obj.set_flexcrossaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("10");
            obj.set_verticalgap("10");
            obj.set_type("horizontal");
            this.Div00.form.Div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("15");
            obj.set_verticalgap("20");
            obj.set_flexmainaxisalign("center");
            obj.set_spacing("0px 0px 30px 0px");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexcrossaxisalign("start");
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form.Div00
            obj = new Layout("default","",0,0,this.Div01.form.Div00.form,function(p){});
            this.Div01.form.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form.Div03
            obj = new Layout("default","",0,0,this.Div01.form.Div03.form,function(p){});
            this.Div01.form.Div03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            obj.set_type("horizontal");
            obj.set_horizontalgap("40");
            obj.set_verticalgap("40");
            obj.set_flexmainaxisalign("center");
            obj.set_flexwrap("wrap");
            obj.set_spacing("40px 5px");
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1040,693,this,function(p){});
            obj.set_verticalgap("0");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Sample_Fluid.xfdl", function() {

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("Sample_Fluid.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
