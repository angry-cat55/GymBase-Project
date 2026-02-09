(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("gybs2412fm");
            this.set_titletext("마이페이지-정기권관련");
            this.set_background("transparent");
            if (Form == this.constructor)
            {
                this._setFormPosition(498,528);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_membership","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px");
            this.addChild(obj.name, obj);

            obj = new Div("div_uploadedMembership","30","72",null,"155","30",null,null,null,null,null,this.div_membership.form);
            obj.set_taborder("0");
            obj.set_borderRadius("20px");
            obj.set_border("1px solid #d5d5d5");
            obj.set_background("#efefef");
            this.div_membership.addChild(obj.name, obj);

            obj = new Static("sta_uploadedmembership","0","65",null,"25","70",null,null,null,null,null,this.div_membership.form.div_uploadedMembership.form);
            obj.set_taborder("0");
            obj.set_text("등록한 정기권");
            obj.set_font("normal 600 14pt/normal \"Arial\"");
            obj.set_padding("0px 0px 0px 20px");
            obj.set_color("#000000");
            obj.set_verticalAlign("middle");
            this.div_membership.form.div_uploadedMembership.addChild(obj.name, obj);

            obj = new ImageViewer("btn_goMyMarket",null,null,"35","35","20","58",null,null,null,null,this.div_membership.form.div_uploadedMembership.form);
            obj.set_taborder("1");
            obj.set_image("url(\'imagerc::form/btn.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_border("0px none");
            obj.set_borderRadius("25px");
            this.div_membership.form.div_uploadedMembership.addChild(obj.name, obj);

            obj = new Div("div_membershipManage","31",null,null,"155","29","72",null,null,null,null,this.div_membership.form);
            obj.set_taborder("1");
            obj.set_background("#efefef");
            obj.set_borderRadius("20px");
            obj.set_border("1px solid #d5d5d5");
            this.div_membership.addChild(obj.name, obj);

            obj = new Static("sta_membershipManage","0","65",null,"25","70",null,null,null,null,null,this.div_membership.form.div_membershipManage.form);
            obj.set_taborder("0");
            obj.set_text("정기권 구매 내역");
            obj.set_font("normal 600 14pt/normal \"Arial\"");
            obj.set_padding("0px 0px 0px 20px");
            obj.set_color("#000000");
            obj.set_verticalAlign("middle");
            this.div_membership.form.div_membershipManage.addChild(obj.name, obj);

            obj = new ImageViewer("btn_goMyMembership",null,null,"35","35","20","58",null,null,null,null,this.div_membership.form.div_membershipManage.form);
            obj.set_taborder("1");
            obj.set_image("url(\'imagerc::form/btn.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_border("0px none");
            obj.set_borderRadius("25px");
            this.div_membership.form.div_membershipManage.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_membership.form.div_uploadedMembership.form
            obj = new Layout("default","",0,0,this.div_membership.form.div_uploadedMembership.form,function(p){});
            this.div_membership.form.div_uploadedMembership.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_membership.form.div_membershipManage.form
            obj = new Layout("default","",0,0,this.div_membership.form.div_membershipManage.form,function(p){});
            this.div_membership.form.div_membershipManage.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_membership.form
            obj = new Layout("default","",0,0,this.div_membership.form,function(p){});
            this.div_membership.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",498,528,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("gybs2412fm.xfdl", function() {
        this.div_info_div_membership_div_uploadedMembership_btn_goMyMarket_onclick = function(obj,e)
        {
        	this.parent.url = "UserForms::gybs2410fm.xfdl";
        };

        this.div_info_div_membership_div_membershipManage_btn_goMyMembership_onclick = function(obj,e)
        {
        	this.parent.url = "UserForms::gybs2411fm.xfdl";
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div_membership.form.div_uploadedMembership.form.btn_goMyMarket.addEventHandler("onclick",this.div_info_div_membership_div_uploadedMembership_btn_goMyMarket_onclick,this);
            this.div_membership.form.div_membershipManage.form.btn_goMyMembership.addEventHandler("onclick",this.div_info_div_membership_div_membershipManage_btn_goMyMembership_onclick,this);
        };
        this.loadIncludeScript("gybs2412fm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
