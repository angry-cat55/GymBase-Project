(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FindID");
            this.set_titletext("아이디");
            if (Form == this.constructor)
            {
                this._setFormPosition(270,215);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta_name","25","24","30","20",null,null,null,null,null,null,this);
            obj.set_text("이름");
            obj.set_font("normal 11pt/normal \"Arial\"");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","0","46",null,"36","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_password("false");
            obj.set_borderRadius("10px");
            obj.set_displaynulltext("ex ) 홍길동");
            obj.set_border("1px solid gray");
            obj.set_padding("0px 0px 0px 15px");
            this.addChild(obj.name, obj);

            obj = new Static("sta_phoneNo","25","108","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("전화번호");
            obj.set_font("normal 11pt/normal \"Arial\"");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_phoneNo","0","130",null,"36","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_border("1px solid gray");
            obj.set_borderRadius("10px");
            obj.set_format("###-####-####");
            obj.set_type("string");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ID","-70","166",null,"18","295",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_password("false");
            obj.set_borderRadius("10px");
            obj.set_displaynulltext("ex ) nexacro123");
            obj.set_border("1px solid gray");
            obj.set_padding("0px 0px 0px 15px");
            obj.set_visible("false");
            obj.set_enable("false");
            obj.set_enableevent("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",270,215,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_name","value","ds_info","NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","msk_phoneNo","value","ds_info","PHONE_NO");
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

        };
        this.loadIncludeScript("gybs1013fm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
