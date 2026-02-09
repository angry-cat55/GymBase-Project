(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_TextField");
            this.set_titletext("Comp_TextField");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta_title","20.00","0","300","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("TextField");
            obj.set_cssclass("sta_WF_GuideTitle1");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20.00","60","462","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("basic usage");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20.00","95","470","59",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("[Property] labeltext, labelfloatingfixed, \r\nlabelposition = \"overlap\" | \"outside\" | \"inside\"");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","530","60","279","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("helper text");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","530","95","470","59",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("[Property] usehelpertext, helpertext, usecharcount");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","530","159","396","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("usehelpertext = true, helpertext = \"Please enter your email\"");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","530","275","126","26",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("usecharcount = true");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","20","415","332","35",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("use image button");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","20","450","470","59",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("[Property] useleadingbutton, usetrailingbutton");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new TextField("TextField00","20","190","220","60",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_labeltext("TextField00");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20","275","297","26",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("labeltext = \"Email\" labelfloatingfixed = true");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","20","159","250","26",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "overlap","datacolumn" : "overlap"},{"codecolumn" : "outside","datacolumn" : "outside"},{"codecolumn" : "inside","datacolumn" : "inside"}]});
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_text("overlap");
            obj.set_value("overlap");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new TextField("TextField01","20","Static02:-2","220","60",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_labeltext("Email");
            obj.set_labelfloatingfixed("true");
            this.addChild(obj.name, obj);

            obj = new TextField("TextField02","530","190","220","70",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_labeltext("Email");
            obj.set_helpertext("Please enter your email");
            obj.set_usehelpertext("true");
            this.addChild(obj.name, obj);

            obj = new TextField("TextField03","530","299","220","70",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_labeltext("Email");
            obj.set_helpertext("Please enter your email");
            obj.set_usehelpertext("true");
            obj.set_usecharcount("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","509","323","26",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("useleadingbutton = true, usetrailingbutton = true");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new TextField("TextField04","20","535","250","60",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_labeltext("Email");
            obj.set_useleadingbutton("true");
            obj.set_usetrailingbutton("true");
            obj.set_leadingbuttonsize("26");
            obj.set_trailingbuttonsize("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","530.00","449","470","59",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("[Property] inputtype  = \"text\" | \"email\" | \"url\" | \"password\" | \"number\" | \"tel\"");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","530.00","414","332","35",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("input type");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new TextField("TextField05","530","535","220","70",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_labeltext("Email");
            obj.set_helpertext("Please enter your email");
            obj.set_usehelpertext("true");
            obj.set_usecharcount("true");
            obj.set_inputtype("email");
            obj.set_useleadingbutton("true");
            obj.set_usetrailingbutton("true");
            obj.set_value("nexacro");
            this.addChild(obj.name, obj);

            obj = new TextField("TextField06","780","535","220","70",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_labeltext("Password");
            obj.set_helpertext("Please enter password");
            obj.set_usehelpertext("true");
            obj.set_usecharcount("true");
            obj.set_inputtype("password");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","530","509","153","26",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("inputtype = email");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","780","509","153","26",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("inputtype = password");
            obj.set_cssclass("sta_WF_GuideRefer");
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
        this.registerScript("Comp_TextField.xfdl", function() {
        this.TextField04_ontrailingbuttonclick = function(obj,e)
        {
        	obj.value = "";
        };

        this.Radio_onitemchanged = function(obj,e)
        {
        	this.TextField00.labelposition = this.Radio00.value;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Radio00.addEventHandler("onitemchanged",this.Radio_onitemchanged,this);
            this.TextField04.addEventHandler("ontrailingbuttonclick",this.TextField04_ontrailingbuttonclick,this);
        };
        this.loadIncludeScript("Comp_TextField.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
