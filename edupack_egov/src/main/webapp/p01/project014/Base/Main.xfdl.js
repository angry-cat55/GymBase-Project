(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Main");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div_headerLogo","0","0","1280","100",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div_headerLogo");
            obj.set_background("#dae3f3");
            this.addChild(obj.name, obj);

            obj = new Button("Btn_Logout",null,"30","120","50","170",null,null,null,null,null,this.Div_headerLogo.form);
            obj.set_taborder("0");
            obj.set_text("로그아웃");
            this.Div_headerLogo.addChild(obj.name, obj);

            obj = new Button("Btn_MyPage",null,"34","120","50","20",null,null,null,null,null,this.Div_headerLogo.form);
            obj.set_taborder("1");
            obj.set_text("마이페이지");
            this.Div_headerLogo.addChild(obj.name, obj);

            obj = new Static("Sta_WelcomUser",null,"10","160","14","10",null,null,null,null,null,this.Div_headerLogo.form);
            obj.set_taborder("2");
            obj.set_text("홍길동님 어서오세요!");
            obj.set_textAlign("right");
            obj.set_fittocontents("width");
            this.Div_headerLogo.addChild(obj.name, obj);

            obj = new Static("Static00",null,"20","204","52","315",null,null,null,null,null,this.Div_headerLogo.form);
            obj.set_taborder("3");
            obj.set_text("로그인 중일때 아래, 아닐땐 위");
            obj.set_background("pink");
            this.Div_headerLogo.addChild(obj.name, obj);

            obj = new Button("Btn_Logo","20","14","220","70",null,null,null,null,null,null,this.Div_headerLogo.form);
            obj.set_taborder("4");
            obj.set_background("url(\'imagerc::로고_220x70.png\') repeat left top transparent");
            obj.set_border("0px none");
            this.Div_headerLogo.addChild(obj.name, obj);

            obj = new Div("Div_topMenu","0","100","1280","70",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div_topMenu");
            obj.set_background("#e2f0d9");
            this.addChild(obj.name, obj);

            obj = new Button("Btn_GoHome","301","10","120","50",null,null,null,null,null,null,this.Div_topMenu.form);
            obj.set_taborder("0");
            obj.set_text("홈");
            this.Div_topMenu.addChild(obj.name, obj);

            obj = new Button("Btn_MyGym","471","10","120","50",null,null,null,null,null,null,this.Div_topMenu.form);
            obj.set_taborder("1");
            obj.set_text("내 헬스장");
            this.Div_topMenu.addChild(obj.name, obj);

            obj = new Button("Btn_SearchGym","641","10","120","50",null,null,null,null,null,null,this.Div_topMenu.form);
            obj.set_taborder("2");
            obj.set_text("헬스장 찾기");
            this.Div_topMenu.addChild(obj.name, obj);

            obj = new Button("Btn_BuyMembership","818","5","120","50",null,null,null,null,null,null,this.Div_topMenu.form);
            obj.set_taborder("3");
            obj.set_text("정기권 구매");
            this.Div_topMenu.addChild(obj.name, obj);

            obj = new Div("Div_work","0","170","1280",null,null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_work");
            obj.set_background("#f8cbad");
            obj.set_url("UserWorkForms::Home.xfdl");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div_headerLogo.form
            obj = new Layout("default","",0,0,this.Div_headerLogo.form,function(p){});
            this.Div_headerLogo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div_topMenu.form
            obj = new Layout("default","",0,0,this.Div_topMenu.form,function(p){});
            this.Div_topMenu.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div_work
            obj = new Layout("default","",0,0,this.Div_work.form,function(p){});
            this.Div_work.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","UserWorkForms::Home.xfdl");
        };
        
        // User Script
        this.registerScript("Main.xfdl", function() {

        this.Div_topMenu_Button00_onclick = function(obj,e)
        {
        	this.Div_work.url = "WorkForms::Home.xfdl";
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div_topMenu.form.Btn_GoHome.addEventHandler("onclick",this.Div_topMenu_Button00_onclick,this);
        };
        this.loadIncludeScript("Main.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
