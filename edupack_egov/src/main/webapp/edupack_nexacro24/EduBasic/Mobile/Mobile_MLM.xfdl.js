(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("M_MLM_Main");
            this.set_titletext("MLM 메인화면");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Mnu", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "mnu_Img","type" : "STRING","size" : "256"},{"id" : "mnu_Name","type" : "STRING","size" : "256"}]},"Rows" : [{"mnu_Img" : "theme://mobile/icon_MB_mnuStar_yel.png","mnu_Name" : "Menu1"},{"mnu_Img" : "theme://mobile/icon_MB_mnuStar_yel.png","mnu_Name" : "Menu2"},{"mnu_Img" : "theme://mobile/icon_MB_mnuStar_yel.png","mnu_Name" : "Menu3"},{"mnu_Img" : "theme://mobile/icon_MB_mnuStar_yel.png","mnu_Name" : "Menu4"},{"mnu_Img" : "theme://mobile/icon_MB_mnuStar_yel.png","mnu_Name" : "Menu5"},{"mnu_Img" : "theme://mobile/icon_MB_mnuStar_yel.png","mnu_Name" : "Menu6"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,"72","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_MLM_Titlebg");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","21","100%","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_MLM_TOBECI");
            this.addChild(obj.name, obj);

            obj = new Button("btn_mnu","16","12","48","48",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_MLM_Menu");
            this.addChild(obj.name, obj);

            obj = new Button("btn_home",null,"12","48","48","16",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_MLM_Home");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","72",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_url("EduBasic::Mobile/Mobile_MLM_sub.xfdl");
            obj.set_text("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",480,768,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("MLM 메인화면");

                p.Static00.set_taborder("0");
                p.Static00.set_cssclass("sta_MLM_Titlebg");
                p.Static00.move("0","0",null,"72","0",null);

                p.Static01.set_taborder("3");
                p.Static01.set_cssclass("sta_MLM_TOBECI");
                p.Static01.move("0","21","100%","30",null,null);

                p.btn_mnu.set_taborder("1");
                p.btn_mnu.set_cssclass("btn_MLM_Menu");
                p.btn_mnu.move("16","12","48","48",null,null);

                p.btn_home.set_taborder("2");
                p.btn_home.set_cssclass("btn_MLM_Home");
                p.btn_home.move(null,"12","48","48","16",null);

                p.Div00.set_taborder("4");
                p.Div00.set_url("EduBasic::Mobile/Mobile_MLM_sub.xfdl");
                p.Div00.set_text("");
                p.Div00.move("0","72",null,null,"0","0");
            	}
            );
            obj.set_horizontalgap("0");
            obj.set_spacing("0px");
            obj.set_tabletemplate("1* / 1*");
            obj.set_verticalgap("0");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","",768,480,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00_00.move("0","72",null,null,"0","0");

                p.Static01_00.move("30","197","420","338",null,null);

                p.Button00.move("0",null,"120","90",null,"20");

                p.Button00_00.move("119",null,"123","90",null,"20");

                p.Button00_01.move("241",null,"120","90",null,"20");

                p.Button00_02.move("360",null,"120","90",null,"20");
            	}
            );
            obj.set_mobileorientation("landscape");
            obj.set_type("default");
            obj.set_horizontalgap("0");
            obj.set_spacing("0px");
            obj.set_tabletemplate("1* / 1*");
            obj.set_verticalgap("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","EduBasic::Mobile/Mobile_MLM_sub.xfdl");
        };
        
        // User Script
        this.registerScript("Mobile_MLM.xfdl", function() {
        this.objApp = nexacro.getApplication();

        this.btn_mnu_onclick = function(obj,e)
        {
        	this.objApp.av_WorkFrame.form.fn_action("EduBasic::Mobile/Mobile_Main_IconType_sub.xfdl" , "sub");
        };

        this.btn_home_onclick = function(obj,e)
        {
        	this.objApp.av_WorkFrame.form.fn_action("EduBasic::Mobile/Mobile_Main_IconType_sub.xfdl" , "sub");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static01.addEventHandler("onclick",this.Static01_onclick,this);
            this.btn_mnu.addEventHandler("onclick",this.btn_mnu_onclick,this);
            this.btn_home.addEventHandler("onclick",this.btn_home_onclick,this);
        };
        this.loadIncludeScript("Mobile_MLM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
