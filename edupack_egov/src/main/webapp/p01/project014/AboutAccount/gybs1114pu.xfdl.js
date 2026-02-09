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
            this.set_titletext("비번 찾기 실패");
            if (Form == this.constructor)
            {
                this._setFormPosition(250,300);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new ImageViewer("img_fail","100","30","50","47",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_image("url(\'imagerc::form/searchingFail.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_background("transparent");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cantFindID","0","87",null,"28","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("비밀번호를 찾지 못했습니다.");
            obj.set_font("normal 900 13pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_inform","0","140",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_font("normal bold 12pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_text("아이디 또는 비밀번호가");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Button("btn_retry","54","230","142","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("다시 시도하기");
            obj.set_cssclass("GB_Login");
            this.addChild(obj.name, obj);

            obj = new Static("sta_informID","0","170",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_font("normal bold 12pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("black");
            obj.set_text("일치하지 않습니다.");
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
        this.registerScript("gybs1114pu.xfdl", function() {

        this.btn_retry_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_retry.addEventHandler("onclick",this.btn_retry_onclick,this);
        };
        this.loadIncludeScript("gybs1114pu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
