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
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(250,300);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","43","40","164","17",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("홍길동님 환영합니다!");
            obj.set_fittocontents("width");
            obj.set_font("normal 700 13pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","50","70","150","150",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_image("url(\'imagerc::success_signup.png\')");
            obj.set_background("transparent");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","54","230","142","50",null,null,null,null,null,null,this);
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("gybs1110fm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
