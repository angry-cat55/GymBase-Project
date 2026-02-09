(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("gybs4310pu");
            this.set_titletext("정기권 반려 사유");
            this.set_background("transparent");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_reject","0","0","400","500",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#efefef");
            obj.set_borderRadius("20px");
            obj.set_border("1px solid #000000");
            this.addChild(obj.name, obj);

            obj = new Button("btn_buy",null,null,"100","40","20","20",null,null,null,null,this.div_reject.form);
            obj.set_taborder("0");
            obj.set_text("확인");
            obj.set_cssclass("GB_Login");
            obj.set_font("normal 13pt/normal \"Arial\"");
            this.div_reject.addChild(obj.name, obj);

            obj = new Div("div_rejectReason","20","20",null,null,"20","70",null,null,null,null,this.div_reject.form);
            obj.set_taborder("1");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px");
            obj.set_border("1px solid #d4d4d4");
            obj.set_text("");
            this.div_reject.addChild(obj.name, obj);

            obj = new Static("sta_notice","20","20",null,"57","20",null,null,null,null,null,this.div_reject.form.div_rejectReason.form);
            obj.set_taborder("1");
            obj.set_text("[ 정기권 등록 반려 사유 ]");
            obj.set_textAlign("center");
            obj.set_font("normal 600 14pt/normal \"맑은 고딕\"");
            obj.set_color("#000000");
            obj.set_padding("0px");
            obj.set_border("0px none,0px none,2px solid #efefef");
            this.div_reject.form.div_rejectReason.addChild(obj.name, obj);

            obj = new Static("Static00","20","sta_notice:20",null,null,"20","20",null,null,null,null,this.div_reject.form.div_rejectReason.form);
            obj.set_taborder("1");
            obj.set_wordWrap("english");
            obj.set_textAlign("left");
            obj.set_verticalAlign("top");
            obj.set_letterSpacing("1px");
            obj.set_color("#000000");
            obj.set_font("normal 500 12pt/normal \"맑은 고딕\"");
            this.div_reject.form.div_rejectReason.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_reject.form.div_rejectReason.form
            obj = new Layout("default","",0,0,this.div_reject.form.div_rejectReason.form,function(p){});
            this.div_reject.form.div_rejectReason.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_reject.form
            obj = new Layout("default","",0,0,this.div_reject.form,function(p){});
            this.div_reject.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",400,500,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_reject.form.div_rejectReason.form.Static00","text","gds_rejectNoti","MESSAGE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("gybs4310pu.xfdl", function() {

        this.div_reject_btn_buy_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div_reject.form.btn_buy.addEventHandler("onclick",this.div_reject_btn_buy_onclick,this);
        };
        this.loadIncludeScript("gybs4310pu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
