(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("gybs2411fm");
            this.set_titletext("구매한 정기권 상태");
            this.set_background("transparent");
            if (Form == this.constructor)
            {
                this._setFormPosition(498,528);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_membership", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "NO","type" : "STRING","size" : "256"},{"id" : "GYM_NAME","type" : "STRING","size" : "256"},{"id" : "STATUS_CODE","type" : "STRING","size" : "256"},{"id" : "MARKET_NO","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_membership","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","40","30","45","45",null,null,null,null,null,null,this.div_membership.form);
            obj.set_taborder("0");
            obj.set_background("url(\'imagerc::form/backIcon3.png\') no-repeat center center /contain");
            obj.set_border("0px none");
            obj.set_text("");
            this.div_membership.addChild(obj.name, obj);

            obj = new Grid("grd_membership","40","100",null,null,"40","40",null,null,null,null,this.div_membership.form);
            obj.set_taborder("1");
            obj.set_border("1px solid #d4d4d4");
            obj.set_borderRadius("5px");
            obj.set_binddataset("ds_membership");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"285\"/><Column size=\"90\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell colspan=\"3\" text=\"구매한 정기권 상태\" background=\"#efefef\" color=\"#000000\" font=\"normal 700 16px/normal &quot;Malgun Gothic&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:NO\" font=\"normal 500 14px/normal &quot;Malgun Gothic&quot;\" color=\"#000000\" textAlign=\"center\" border=\"1px solid #e0e0e0\"/><Cell col=\"1\" text=\"bind:GYM_NAME\" font=\"normal 500 14px/normal &quot;Malgun Gothic&quot;\" color=\"#000000\" border=\"1px solid #e0e0e0\" padding=\"10px 15px\"/><Cell col=\"2\" font=\"normal 500 14px/normal &quot;Malgun Gothic&quot;\" color=\"#000000\" textAlign=\"center\" border=\"1px solid #e0e0e0\" expr=\"comp.parent.parent.parent.fnSetStatus(STATUS_CODE)\"/></Band></Format></Formats>");
            this.div_membership.addChild(obj.name, obj);
            // Layout Functions
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
        this.registerScript("gybs2411fm.xfdl", function() {
        this.fvApp = nexacro.getApplication();

        this.div_membership_btn_close_onclick = function(obj,e)
        {
        	this.parent.url = "UserForms::gybs2412fm.xfdl";
        };

        this.gybs2411fm_onload = function(obj,e)
        {
        	var strSvcUrl = "p014/getMyMembershipList.do";
        	var inData    = "";
        	var outData   = "ds_membership=ds_membership";
        	var strArg    = "paramID=" + this.fvApp.gds_accountInfo.getColumn(0, "ID");

        	this.gfnTransaction("getMyMembershipList", strSvcUrl, inData, outData, strArg, "fnCallback", true);
        };

        this.div_membership_grd_membership_oncellclick = function(obj,e)
        {
        	var nMarketNo = this.ds_membership.getColumn(e.row, "MARKET_NO");
        	this.fvApp.gv_marketNo = nMarketNo;
        	this.fvApp.gds_search.setColumn(0, "gotoMain", 4);
        	if (this.ds_membership.getColumn(e.row, "STATUS_CODE") == "REJECTED") {
        		this.fvApp.gds_rejectNoti.setColumn(0, "IS_FROM_REJECT","Y");
        	}
        	this.parent.parent.parent.parent.parent.url = "MarketForms::gybs4011fm.xfdl";
        };

        this.fnSetStatus = function(param_status)
        {
        	var sStatus = "";
        	switch(param_status) {
        		case "REQUESTED":
        			sStatus = "등록 대기";
        			break;
        		case "APPROVED":
        			sStatus = "등록 완료";
        			break;
        		case "REJECTED":
        			sStatus = "등록 반려";
        			break;
        	}
        	return sStatus;
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.gybs2411fm_onload,this);
            this.div_membership.form.btn_close.addEventHandler("onclick",this.div_membership_btn_close_onclick,this);
            this.div_membership.form.grd_membership.addEventHandler("oncellclick",this.div_membership_grd_membership_oncellclick,this);
        };
        this.loadIncludeScript("gybs2411fm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
