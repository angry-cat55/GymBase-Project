(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("gybs1111pu");
            this.set_titletext("아이디 찾기 성공");
            if (Form == this.constructor)
            {
                this._setFormPosition(250,300);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new ImageViewer("img_success","100","30","50","47",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_image("url(\'imagerc::form/searchingSuccess.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_background("transparent");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Static("sta_findID","0","87",null,"28","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("아이디를 찾았습니다!");
            obj.set_font("normal 900 15pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_informID","0","140",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_font("normal bold 12pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_text("default님의 아이디는");
            obj.set_color("black");
            obj.set_wordWrap("english");
            this.addChild(obj.name, obj);

            obj = new Button("btn_gotoLogin","54","230","142","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("로그인 하러가기");
            obj.set_cssclass("GB_Login");
            this.addChild(obj.name, obj);

            obj = new Static("sta_informID00","0","sta_informID:0",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_font("normal bold 12pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("black");
            obj.set_text("dafault입니다.");
            obj.set_wordWrap("english");
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
        this.registerScript("gybs1111pu.xfdl", function() {
        this.fvApp = nexacro.getApplication();

        this.gybs1111pu_onload = function(obj,e)
        {
        	var objFrame = this.getOwnerFrame();
        	this.sta_informID.text = objFrame.param_name + "님의 아이디는";
        	this.sta_informID00.text = objFrame.param_ID + "입니다.";
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
            this.addEventHandler("onload",this.gybs1111pu_onload,this);
            this.btn_gotoLogin.addEventHandler("onclick",this.btn_gotoLogin_onclick,this);
        };
        this.loadIncludeScript("gybs1111pu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
