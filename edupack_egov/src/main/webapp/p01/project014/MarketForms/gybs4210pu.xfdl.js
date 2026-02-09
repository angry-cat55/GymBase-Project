(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("gybs4210pu");
            this.set_titletext("정기권 구매 팝업");
            this.set_background("transparent");
            if (Form == this.constructor)
            {
                this._setFormPosition(350,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_buyMembership","0","0","350","500",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#efefef");
            obj.set_borderRadius("20px");
            obj.set_border("1px solid #000000");
            this.addChild(obj.name, obj);

            obj = new Button("btn_buy",null,null,"120","50","39","20",null,null,null,null,this.div_buyMembership.form);
            obj.set_taborder("0");
            obj.set_text("구매 확정");
            obj.set_cssclass("GB_Login");
            obj.set_font("normal 13pt/normal \"Arial\"");
            this.div_buyMembership.addChild(obj.name, obj);

            obj = new Button("btn_cancel","39",null,"120","50",null,"20",null,null,null,null,this.div_buyMembership.form);
            obj.set_taborder("1");
            obj.set_text("취소");
            obj.set_cssclass("GB_Cancel");
            this.div_buyMembership.addChild(obj.name, obj);

            obj = new Div("div_marketInfo","19","20","310",null,null,"80",null,null,null,null,this.div_buyMembership.form);
            obj.set_taborder("2");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px");
            obj.set_border("1px solid #d4d4d4");
            obj.set_text("");
            this.div_buyMembership.addChild(obj.name, obj);

            obj = new Static("sta_title","0","47",null,"50","0",null,null,null,null,null,this.div_buyMembership.form.div_marketInfo.form);
            obj.set_taborder("8");
            obj.set_text("제목");
            obj.set_padding("0px 20px");
            obj.set_color("#000000");
            obj.set_font("normal 10pt/normal \"Arial\"");
            obj.set_wordWrap("english");
            this.div_buyMembership.form.div_marketInfo.addChild(obj.name, obj);

            obj = new Static("sta_gymName","0","sta_title:-10",null,"50","0",null,null,null,null,null,this.div_buyMembership.form.div_marketInfo.form);
            obj.set_taborder("3");
            obj.set_text("헬스장 이름");
            obj.set_padding("5px 20px");
            obj.set_wordWrap("english");
            obj.set_color("#000000");
            obj.set_font("normal 10pt/normal \"Arial\"");
            this.div_buyMembership.form.div_marketInfo.addChild(obj.name, obj);

            obj = new Static("sta_gymAddr","0","sta_gymName:-10",null,"50","0",null,null,null,null,null,this.div_buyMembership.form.div_marketInfo.form);
            obj.set_taborder("1");
            obj.set_text("헬스장 주소");
            obj.set_padding("5px 20px");
            obj.set_wordWrap("english");
            obj.set_color("#000000");
            obj.set_font("normal 10pt/normal \"Arial\"");
            this.div_buyMembership.form.div_marketInfo.addChild(obj.name, obj);

            obj = new Static("sta_sellerID","0","sta_gymAddr:0",null,"30","0",null,null,null,null,null,this.div_buyMembership.form.div_marketInfo.form);
            obj.set_taborder("4");
            obj.set_text("판매자");
            obj.set_padding("5px 20px");
            obj.set_wordWrap("english");
            obj.set_color("#000000");
            obj.set_font("normal 10pt/normal \"Arial\"");
            this.div_buyMembership.form.div_marketInfo.addChild(obj.name, obj);

            obj = new Static("sta_endDate","0","sta_sellerID:10",null,"30","0",null,null,null,null,null,this.div_buyMembership.form.div_marketInfo.form);
            obj.set_taborder("0");
            obj.set_text("만료일(남은 일수)");
            obj.set_padding("5px 20px");
            obj.set_wordWrap("english");
            obj.set_color("#000000");
            obj.set_font("normal 10pt/normal \"Arial\"");
            this.div_buyMembership.form.div_marketInfo.addChild(obj.name, obj);

            obj = new Static("sta_price","20","267",null,"47","20",null,null,null,null,null,this.div_buyMembership.form.div_marketInfo.form);
            obj.set_taborder("2");
            obj.set_text("최종 결제 금액");
            obj.set_padding("15px 0px");
            obj.set_wordWrap("english");
            obj.set_color("#000000");
            obj.set_font("normal 10pt/normal \"Arial\"");
            obj.set_border("1px solid #d4d4d4,0px none");
            this.div_buyMembership.form.div_marketInfo.addChild(obj.name, obj);

            obj = new Static("sta_nohwanbool","0",null,"308","44","0","0",null,null,null,null,this.div_buyMembership.form.div_marketInfo.form);
            obj.set_taborder("6");
            obj.set_text("(구매 후에는 취소가 불가능합니다.)");
            obj.set_textAlign("center");
            obj.set_color("#000000");
            obj.set_padding("10px 0px 20px");
            this.div_buyMembership.form.div_marketInfo.addChild(obj.name, obj);

            obj = new Static("sta_ruSure","0",null,null,"30","0","sta_nohwanbool:0",null,null,null,null,this.div_buyMembership.form.div_marketInfo.form);
            obj.set_taborder("5");
            obj.set_text("정말로 구매하겠습니까?");
            obj.set_textAlign("center");
            obj.set_color("#000000");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_padding("10px 0px");
            this.div_buyMembership.form.div_marketInfo.addChild(obj.name, obj);

            obj = new Static("sta_notice","0","0","308","57",null,null,null,null,null,null,this.div_buyMembership.form.div_marketInfo.form);
            obj.set_taborder("7");
            obj.set_text("[ 정기권 구매 확인 ]");
            obj.set_textAlign("center");
            obj.set_font("normal 600 11pt/normal \"Arial\"");
            obj.set_color("#000000");
            obj.set_padding("20px 0px");
            this.div_buyMembership.form.div_marketInfo.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_buyMembership.form.div_marketInfo.form
            obj = new Layout("default","",0,0,this.div_buyMembership.form.div_marketInfo.form,function(p){});
            this.div_buyMembership.form.div_marketInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_buyMembership.form
            obj = new Layout("default","",0,0,this.div_buyMembership.form,function(p){});
            this.div_buyMembership.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",350,500,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("gybs4210pu.xfdl", function() {
        this.fvApp = nexacro.getApplication();


        this.gybs4210pu_onload = function(obj,e)
        {
        	var objParam = this.getOwnerFrame();

        	this.div_buyMembership.form.div_marketInfo.form.sta_title.text		 = "게시글 : " + objParam.param_title;
        	this.div_buyMembership.form.div_marketInfo.form.sta_gymName.text	 = "헬스장 : " + objParam.param_gymName;
        	this.div_buyMembership.form.div_marketInfo.form.sta_gymAddr.text	 = "주소 : " + objParam.param_gymAddr;
        	this.div_buyMembership.form.div_marketInfo.form.sta_sellerID.text	 = "판매자 : " + objParam.param_sellerID;
        	this.div_buyMembership.form.div_marketInfo.form.sta_endDate.text	 = "만료일 : " + objParam.param_endDate + " (약 " + this.fvApp.gv_expiryDate + "일 남음)";
        	this.div_buyMembership.form.div_marketInfo.form.sta_price.text		 = "최종 결제 금액 : " + this.gfnAppendComma(objParam.param_price) + "원";

        	this.div_buyMembership.form.div_marketInfo.form.resetScroll();
        };

        this.div_buyMembership_Button01_onclick = function(obj,e)
        {
        	this.close();
        };

        this.div_buyMembership_btn_buy_onclick = function(obj,e)
        {
        	var objParam = this.getOwnerFrame();
        	// 트랜잭션으로 구매자 아이디, 구매 일자 추가
        	var strSvcUrl = "p014/setMembershipBuyer.do";
        	var inData    = "";
        	var outData   = "";
        	var strArg    = "paramSellerID=" + objParam.param_sellerID + " paramBuyerID=" + this.fvApp.gds_accountInfo.getColumn(0, "ID") + " paramMarketNo=" + this.fvApp.gv_marketNo;

        	this.gfnTransaction("setMembershipBuyer", strSvcUrl, inData, outData, strArg, "fnCallback", true);

        	this.opener.fnBuyMembership();
        	this.close();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.gybs4210pu_onload,this);
            this.div_buyMembership.form.btn_buy.addEventHandler("onclick",this.div_buyMembership_btn_buy_onclick,this);
            this.div_buyMembership.form.btn_cancel.addEventHandler("onclick",this.div_buyMembership_Button01_onclick,this);
        };
        this.loadIncludeScript("gybs4210pu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
