(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("gybs1110fm");
            this.set_titletext("회원가입 성공");
            this.set_background("white");
            if (Form == this.constructor)
            {
                this._setFormPosition(250,300);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta_welcome","0","35",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("default님 환영합니다!");
            obj.set_font("normal 700 13pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#000000");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_workout","50","70","150","150",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_image("url(\'imagerc::form/success_signup.png\')");
            obj.set_background("transparent");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Button("btn_gotoLogin","54","230","142","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("로그인 하러가기");
            obj.set_cssclass("GB_Login");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",250,300,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("gybs1110pu.xfdl", function() {
        this.fvApp = nexacro.getApplication();

        this.gybs1110fm_onload = function(obj,e)
        {
        	var objFrame = this.getOwnerFrame();

        	this.sta_welcome.text = objFrame.param_name + "님 환영합니다!";
        };

        this.btn_gotoLogin_onclick = function(obj,e)
        {
        	this.close();
        	this.fvApp.mainframe.Main.formurl = "AboutAccount::gybs1010fm.xfdl";
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.gybs1110fm_onload,this);
            this.btn_gotoLogin.addEventHandler("onclick",this.btn_gotoLogin_onclick,this);
        };
        this.loadIncludeScript("gybs1110pu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
