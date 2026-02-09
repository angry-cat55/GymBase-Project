(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Admin_Transfer");
            this.set_titletext("정기권 양도 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1128,698);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_transferList", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "MARKET_NO","type" : "STRING","size" : "256"},{"id" : "SOLD_DATE","type" : "STRING","size" : "256"},{"id" : "STATUS_CODE","type" : "STRING","size" : "256"},{"id" : "PROCESS_DATE","type" : "STRING","size" : "256"},{"id" : "SELLER_ID","type" : "STRING","size" : "256"},{"id" : "SELLER_NAME","type" : "STRING","size" : "256"},{"id" : "SELLER_PHONE_NO","type" : "STRING","size" : "256"},{"id" : "SELLER_PROFILE_PATH","type" : "STRING","size" : "256"},{"id" : "BUYER_ID","type" : "STRING","size" : "256"},{"id" : "BUYER_NAME","type" : "STRING","size" : "256"},{"id" : "BUYER_PHONE_NO","type" : "STRING","size" : "256"},{"id" : "BUYER_PROFILE_PATH","type" : "STRING","size" : "256"},{"id" : "REJECT_MESSAGE","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detailInfo", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "MARKET_NO","type" : "STRING","size" : "256"},{"id" : "SOLD_DATE","type" : "STRING","size" : "256"},{"id" : "STATUS_CODE","type" : "STRING","size" : "256"},{"id" : "PROCESS_DATE","type" : "STRING","size" : "256"},{"id" : "SELLER_ID","type" : "STRING","size" : "256"},{"id" : "SELLER_NAME","type" : "STRING","size" : "256"},{"id" : "SELLER_PHONE_NO","type" : "STRING","size" : "256"},{"id" : "SELLER_PROFILE_PATH","type" : "STRING","size" : "256"},{"id" : "BUYER_ID","type" : "STRING","size" : "256"},{"id" : "BUYER_NAME","type" : "STRING","size" : "256"},{"id" : "BUYER_PHONE_NO","type" : "STRING","size" : "256"},{"id" : "BUYER_PROFILE_PATH","type" : "STRING","size" : "256"},{"id" : "REJECT_MESSAGE","type" : "STRING","size" : "256"}]},"Rows" : [{}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_processInfo", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "MARKET_NO","type" : "STRING","size" : "256"},{"id" : "SELLER_ID","type" : "STRING","size" : "256"},{"id" : "BUYER_ID","type" : "STRING","size" : "256"},{"id" : "NEW_STATUS","type" : "STRING","size" : "256"},{"id" : "REJECT_MESSAGE","type" : "STRING","size" : "256"}]},"Rows" : [{}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_transfer_manage","20","20","580",null,null,"20",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#ffffff");
            obj.set_text("");
            obj.set_borderRadius("10px");
            obj.set_border("1px solid #d4d4d4");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_selectGridType","20","20","163","40",null,null,null,null,null,null,this.div_transfer_manage.form);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_itemheight("30");
            obj.set_borderRadius("5px");
            obj.set_font("normal 11pt/normal \"맑은 고딕\"");
            var div_transfer_manage_form_cbo_selectGridType_innerdataset = new nexacro.NormalDataset("div_transfer_manage_form_cbo_selectGridType_innerdataset", obj);
            div_transfer_manage_form_cbo_selectGridType_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "ALL","datacolumn" : "전체 양도 내역"},{"codecolumn" : "REQUESTED","datacolumn" : "양도 요청 관리"},{"codecolumn" : "APPROVED","datacolumn" : "현재 양수 회원"}]});
            obj.set_innerdataset(div_transfer_manage_form_cbo_selectGridType_innerdataset);
            obj.set_text("양도 요청 관리");
            obj.set_value("ALL");
            obj.set_index("0");
            this.div_transfer_manage.addChild(obj.name, obj);

            obj = new Grid("grd_tranferList","20","80",null,null,"20","20",null,null,null,null,this.div_transfer_manage.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_transferList");
            obj.set_autofittype("col");
            obj.set_border("1px solid #d4d4d4");
            obj.set_borderRadius("5px");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"100\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"요청 일자\" background=\"#efefef\" font=\"normal bold 11pt/normal &quot;맑은 고딕&quot;\"/><Cell col=\"1\" text=\"양도자\" background=\"#efefef\" font=\"normal bold 11pt/normal &quot;맑은 고딕&quot;\"/><Cell col=\"2\" text=\"양수자\" background=\"#efefef\" font=\"normal bold 11pt/normal &quot;맑은 고딕&quot;\"/><Cell col=\"3\" text=\"상태\" background=\"#efefef\" font=\"normal bold 11pt/normal &quot;맑은 고딕&quot;\"/><Cell col=\"4\" text=\"처리 일자\" background=\"#efefef\" font=\"normal bold 11pt/normal &quot;맑은 고딕&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:SOLD_DATE\" textAlign=\"center\" wordWrap=\"english\" padding=\"5px\" border=\"1px solid #e4e4e4\"/><Cell col=\"1\" text=\"bind:SELLER_NAME\" textAlign=\"center\" wordWrap=\"english\" padding=\"5px\" border=\"1px solid #e4e4e4\"/><Cell col=\"2\" text=\"bind:BUYER_NAME\" textAlign=\"center\" wordWrap=\"english\" padding=\"5px\" border=\"1px solid #e4e4e4\"/><Cell col=\"3\" text=\"bind:STATUS_CODE\" expr=\"(STATUS_CODE == &quot;REQUESTED&quot;) ? &quot;승인 대기&quot; : ((STATUS_CODE == &quot;APPROVED&quot;) ? &quot;등록 완료&quot; : &quot;등록 반려&quot;)\" textAlign=\"center\" wordWrap=\"english\" padding=\"5px\" border=\"1px solid #e4e4e4\"/><Cell col=\"4\" text=\"bind:PROCESS_DATE\" textAlign=\"center\" wordWrap=\"english\" padding=\"5px\" border=\"1px solid #e4e4e4\"/></Band></Format></Formats>");
            this.div_transfer_manage.addChild(obj.name, obj);

            obj = new Edit("edt_searchTerm","203","20",null,"40","80",null,null,null,null,null,this.div_transfer_manage.form);
            obj.set_taborder("2");
            obj.set_borderRadius("5px");
            obj.set_displaynulltext("양도자 / 양수자 이름 검색");
            obj.set_font("normal 11pt/normal \"Arial\"");
            obj.set_padding("0px 10px");
            obj.set_autoselect("true");
            this.div_transfer_manage.addChild(obj.name, obj);

            obj = new Button("btn_resetSearchTerm","edt_searchTerm:-32","edt_searchTerm:-31","25","23",null,null,null,null,null,null,this.div_transfer_manage.form);
            obj.set_taborder("3");
            obj.set_background("url(\'imagerc::form/cancel.png\') no-repeat center center /contain transparent");
            obj.set_border("0px none");
            this.div_transfer_manage.addChild(obj.name, obj);

            obj = new Div("div_transfer_Info",null,"20","488",null,"20","20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #d4d4d4");
            obj.set_borderRadius("10px");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtArea_rejectReason","20",null,null,"250","20","20",null,null,null,null,this.div_transfer_Info.form);
            obj.set_taborder("4");
            obj.set_font("normal 500 11pt/normal \"맑은 고딕\"");
            obj.set_letterSpacing("1px");
            obj.set_padding("10px 0px 10px 10px");
            obj.set_textAlign("left");
            obj.set_wordWrap("english");
            obj.set_scrollbartype("none none");
            obj.set_enable("false");
            obj.set_borderRadius("5px");
            this.div_transfer_Info.addChild(obj.name, obj);

            obj = new Static("sta_reject","20",null,"40","35",null,"txtArea_rejectReason:10",null,null,null,null,this.div_transfer_Info.form);
            obj.set_taborder("1");
            obj.set_text("반려");
            obj.set_textAlign("center");
            obj.set_font("normal 500 11pt/normal \"맑은 고딕\"");
            obj.set_color("#000000");
            this.div_transfer_Info.addChild(obj.name, obj);

            obj = new Div("div_toggle","sta_reject:10",null,"80","40",null,"txtArea_rejectReason:8",null,null,null,null,this.div_transfer_Info.form);
            obj.set_taborder("0");
            obj.set_url("AdminForms::gybs3110fm.xfdl");
            obj.set_background("transparent");
            this.div_transfer_Info.addChild(obj.name, obj);

            obj = new Static("sta_approve","div_toggle:10",null,"40","35",null,"txtArea_rejectReason:10",null,null,null,null,this.div_transfer_Info.form);
            obj.set_taborder("2");
            obj.set_text("승인");
            obj.set_textAlign("center");
            obj.set_font("normal 500 11pt/normal \"맑은 고딕\"");
            obj.set_color("#000000");
            this.div_transfer_Info.addChild(obj.name, obj);

            obj = new Button("btn_proceed",null,null,"80","35","20","txtArea_rejectReason:10",null,null,null,null,this.div_transfer_Info.form);
            obj.set_taborder("3");
            obj.set_text("처리");
            obj.set_cssclass("GB_Button");
            obj.set_font("normal 11pt/normal \"맑은 고딕\"");
            this.div_transfer_Info.addChild(obj.name, obj);

            obj = new ListView("listView_usersInfo","20","20",null,null,"20","335",null,null,null,null,this.div_transfer_Info.form);
            obj.set_taborder("5");
            obj.set_borderRadius("5px");
            obj.set_binddataset("ds_detailInfo");
            obj.set_enable("false");
            obj._setContents("<Formats><Format id=\"default\"><Band id=\"body\" width=\"100%\" height=\"50\" background=\"#ffffff\"><Cell id=\"Cell01\" left=\"5\" top=\"6\" width=\"180\" text=\"bind:SOLD_DATE\" color=\"#000000\" textAlign=\"left\" height=\"38\" border=\"0px none\" expr=\"EXPR:SOLD_DATE ? (&quot;요청 일자 : &quot; + SOLD_DATE) : &quot;&quot;\" font=\"normal 13px/normal &quot;Malgun Gothic&quot;\"/><Cell id=\"Cell02\" top=\"6\" width=\"70\" right=\"5\" text=\"bind:STATUS_CODE\" expr=\"EXPR:!STATUS_CODE ? &quot;&quot; : (STATUS_CODE == &quot;REQUESTED&quot;) ? &quot;승인 대기&quot; : ((STATUS_CODE == &quot;APPROVED&quot;) ? &quot;등록 완료&quot; : &quot;등록 반려&quot;)\" font=\"normal 13px/normal &quot;Malgun Gothic&quot;\" color=\"#000000\" textAlign=\"center\" height=\"38\" border=\"0px none\"/><Cell id=\"Cell03\" top=\"6\" text=\"bind:PROCESS_DATE\" right=\"Cell02:5\" width=\"120\" color=\"#000000\" textAlign=\"right\" height=\"38\" border=\"0px none\"/></Band><Band id=\"detail\" width=\"100%\" height=\"247\" background=\"#ffffff\"><Cell id=\"Cell00\" left=\"40\" top=\"10\" width=\"130\" height=\"130\" textAlign=\"center\" displaytype=\"imagecontrol\" imagestretch=\"fixaspectratio\" text=\"bind:SELLER_PROFILE_PATH\" borderRadius=\"100px\" padding=\"0px\"/><Cell id=\"Cell01\" left=\"40\" top=\"Cell00:5\" width=\"130\" height=\"44\" text=\"bind:SELLER_NAME\" textAlign=\"center\" font=\"normal 13px/normal &quot;Malgun Gothic&quot;\" color=\"#000000\"/><Cell id=\"Cell02\" left=\"40\" width=\"130\" color=\"#000000\" textAlign=\"center\" text=\"bind:SELLER_PHONE_NO\" font=\"normal 13px/normal &quot;Malgun Gothic&quot;\" top=\"Cell01:5\" height=\"44\" wordSpacing=\"2px\"/><Cell id=\"Cell03\" top=\"11\" width=\"130\" height=\"130\" textAlign=\"center\" displaytype=\"imagecontrol\" imagestretch=\"fixaspectratio\" text=\"bind:BUYER_PROFILE_PATH\" right=\"40\" borderRadius=\"100px\" padding=\"0px\"/><Cell id=\"Cell04\" top=\"Cell03:5\" width=\"130\" height=\"44\" text=\"bind:BUYER_NAME\" textAlign=\"center\" font=\"normal 13px/normal &quot;Malgun Gothic&quot;\" right=\"40\" color=\"#000000\"/><Cell id=\"Cell05\" top=\"Cell04:5\" width=\"130\" height=\"44\" color=\"#000000\" textAlign=\"center\" text=\"bind:BUYER_PHONE_NO\" font=\"normal 13px/normal &quot;Malgun Gothic&quot;\" right=\"40\" wordSpacing=\"2px\"/><Cell id=\"Cell06\" left=\"199\" top=\"97\" width=\"44\" height=\"44\" displaytype=\"imagecontrol\" imagestretch=\"fixaspectratio\" text=\"imagerc::form/arrowRight.png\" border=\"0px none\"/></Band></Format></Formats>");
            this.div_transfer_Info.addChild(obj.name, obj);

            obj = new Button("btn_refresh",null,"44","35","35","552",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("url(\'imagerc::form/refresh.png\') no-repeat center center /contain transparent");
            obj.set_border("0px none");
            obj.set_font("normal 700 11pt/normal \"맑은 고딕\"");
            obj.set_text("15");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_transfer_manage.form
            obj = new Layout("default","",0,0,this.div_transfer_manage.form,function(p){});
            this.div_transfer_manage.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_transfer_Info.form.div_toggle
            obj = new Layout("default","",0,0,this.div_transfer_Info.form.div_toggle.form,function(p){});
            this.div_transfer_Info.form.div_toggle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_transfer_Info.form
            obj = new Layout("default","",0,0,this.div_transfer_Info.form,function(p){});
            this.div_transfer_Info.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1128,698,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","AdminForms::gybs3110fm.xfdl");
        };
        
        // User Script
        this.registerScript("gybs3013fm.xfdl", function() {
        this.fvApp = nexacro.getApplication();
        this.countDown = 1000; // 1초마다 버튼 숫자 변경
        this.refresh = 15;
        this.fv_sCurMarketNo = "";

        this.fnToggleChanged = function() {
        	var sToggleValue = this.div_transfer_Info.form.div_toggle.form.getValue();
        	trace(sToggleValue);

        	if (this.ds_detailInfo.getColumn(0, "STATUS_CODE") == "REQUESTED") {
        		if (sToggleValue == "APPROVE") {
        			this.div_transfer_Info.form.txtArea_rejectReason.enable = false;
        			this.div_transfer_Info.form.txtArea_rejectReason.value = null;
        		}
        		else if (sToggleValue == "REJECT") {
        			this.div_transfer_Info.form.txtArea_rejectReason.enable = true;
        		}
        	}
        }

        this.Admin_Transfer_onload = function(obj,e)
        {
        	// 보고있던 정보가 있으면 저장
        	var nRow = this.ds_transferList.rowposition;
        	if (nRow > -1) {
        		this.fv_sCurMarketNo = this.ds_transferList.getColumn(nRow, "MARKET_NO");
        	}
        	else {
        		this.fv_sCurMarketNo = "";
        	}
        	this.setTimer(0, this.countDown);
        	trace("새로고침");

        	var strSvcUrl = "p014/getTransferManagementList.do";
        	var inData    = "";
        	var outData   = "ds_transferList=ds_transferList";
        	var strArg    = "paramCode=" + this.fvApp.gds_accountInfo.getColumn(0, "GYM_CODE");

        	this.gfnTransaction("getTransferManagementList", strSvcUrl, inData, outData, strArg, "fnCallback", true);
        };

        this.fnCallback = function(svcId, errCd, errMsg)
        {
        	if (svcId == "getTransferManagementList") {
        		// 가져온 데이터가 없으면 버튼 비활성화
        		if (this.ds_transferList.getRowCount() == 0) {
        			this.div_transfer_Info.form.div_toggle.enable = false;
        			this.div_transfer_Info.form.btn_proceed.enable = false;
        		}
        		// 로드 전 보고있던 데이터 정보 적용
        		if(this.fv_sCurMarketNo) {
        			var nFindRow = this.ds_transferList.findRow("MARKET_NO", this.fv_sCurMarketNo);
        			if(nFindRow > -1){
        				this.div_transfer_manage.form.grd_tranferList.selectRow(nFindRow);
        			}
        		}
        	}
        	else if (svcId == "transferProcess") {
        		this.Admin_Transfer_onload();
        	}
        };

        this.Admin_Transfer_ontimer = function(obj,e)
        {
        	if (e.timerid == 0) { // 1초가 지났을 경우
        		if (this.refresh == 0) { // 카운트가 0일 경우 새로고침
        			this.refresh = 15;
        			// 반려 사유 작성 중이면 새로고침 취소
        			trace(">>>>>>>>>>>>>>>" + this.gfnIsNull(this.div_transfer_Info.form.txtArea_rejectReason.value));
        			if (this.gfnIsNull(this.div_transfer_Info.form.txtArea_rejectReason.value) == true) {
        				this.Admin_Transfer_onload();
        			}
        		}
        		else { // 카운트다운
        			this.refresh -= 1;
        		}
        		this.setTimer(0, this.countDown);
        		this.btn_refresh.text = this.refresh;
        	}
        };

        this.div_transfer_manage_btn_refresh_onclick = function(obj,e)
        {
        	this.Admin_Transfer_onload();
        	this.refresh = 15;
        	this.btn_refresh.text = this.refresh;
        };

        this.div_transfer_manage_edt_searchTerm_onchanged = function(obj,e)
        {
        	this.fn_applyFilters();
        };

        this.div_transfer_manage_btn_resetSearchTerm_onclick = function(obj,e)
        {
        	this.div_transfer_manage.form.edt_searchTerm.value = null;
        	this.div_transfer_manage_edt_searchTerm_onchanged();
        };

        this.div_transfer_manage_cbo_selectGridType_onitemchanged = function(obj,e)
        {
        	this.fn_applyFilters();
        };

        this.fn_applyFilters = function()
        {
        	// 1. 각 컴포넌트에서 현재 선택된 값 가져오기
        	var sStatus = this.div_transfer_manage.form.cbo_selectGridType.value;
        	var sSearchTerm = this.div_transfer_manage.form.edt_searchTerm.value;

        	// 2. 각 필터 조건을 담을 배열 생성
        	var arrConditions = [];

        	// 3. 상태 필터 조건 생성
        	if (sStatus && sStatus != "ALL") {
        		var sStatusFilter = "STATUS_CODE == '" + sStatus + "'";
        		arrConditions.push(sStatusFilter);
        	}

        	// 4. 검색어 필터 조건 생성 (검색어가 있을 경우에만)
        	if (sSearchTerm) {
        		var sSearchFilter = "(SELLER_NAME.indexOf('" + sSearchTerm + "') > -1 || BUYER_NAME.indexOf('" + sSearchTerm + "') > -1)";
        		arrConditions.push(sSearchFilter);
        	}

        	// 5. 생성된 모든 필터 조건들을 '&&'(AND)로 연결하여 최종 필터 문자열 생성
        	var sFinalFilter = arrConditions.join(" && ");

        	// 6. 데이터셋에 최종 필터 적용
        	this.ds_transferList.filter(sFinalFilter);
        }

        this.ds_transferList_onrowposchanged = function(obj,e)
        {
        	this.ds_detailInfo.copyRow(0, this.ds_transferList, obj.rowposition);

        	// 불러오는 정기권 STATUS_CODE에 따라 컴포넌트 설정
        	switch(this.ds_detailInfo.getColumn(0, "STATUS_CODE")) {
        	case "REQUESTED":
        		this.div_transfer_Info.form.txtArea_rejectReason.enable = false;
        		this.div_transfer_Info.form.div_toggle.form.fnOn();
        		this.div_transfer_Info.form.div_toggle.enable = true;
        		this.div_transfer_Info.form.btn_proceed.enable = true;
        		this.div_transfer_Info.form.txtArea_rejectReason.value = null;
        		break;
        	case "REJECTED":
        		this.div_transfer_Info.form.txtArea_rejectReason.enable = false;
        		this.div_transfer_Info.form.div_toggle.form.fnOff();
        		this.div_transfer_Info.form.div_toggle.enable = false;
        		this.div_transfer_Info.form.btn_proceed.enable = false;
        		this.div_transfer_Info.form.txtArea_rejectReason.value = this.ds_detailInfo.getColumn(0, "REJECT_MESSAGE");
        		break;
        	case "APPROVED":
        		this.div_transfer_Info.form.txtArea_rejectReason.enable = false;
        		this.div_transfer_Info.form.div_toggle.form.fnOn();
        		this.div_transfer_Info.form.div_toggle.enable = false;
        		this.div_transfer_Info.form.btn_proceed.enable = false;
        		this.div_transfer_Info.form.txtArea_rejectReason.value = null;
        		break;
        	}
        };

        this.div_transfer_Info_btn_proceed_onclick = function(obj,e)
        {
        	if (this.div_transfer_Info.form.div_toggle.form.getValue() == "APPROVE") {
        		this.gfnAlert("confirm.approve.transfer", "", "confirm.approve.transfer", "fnMsgCallback");
        	}
        	else {
        		if (this.div_transfer_Info.form.txtArea_rejectReason.value == null || this.div_transfer_Info.form.txtArea_rejectReason.value == "") {
        			this.gfnAlert("msg.err.no.reject.reason", "", "msg.err.no.reject.reason", "fnMsgCallback");
        			return;
        		}
        		else {
        			this.gfnAlert("confirm.reject.transfer", "", "confirm.reject.transfer", "fnMsgCallback");
        		}
        	}
        };

        this.fnMsgCallback = function(strId, strVal) {
        	if (strId == "confirm.approve.transfer") {
        		if (strVal == false) {
        			return;
        		}
        		else {
        			var MARKET_NO = this.ds_detailInfo.getColumn(0, "MARKET_NO");
        			var NEW_STATUS = "";
        			if (this.div_transfer_Info.form.div_toggle.form.getValue() == "APPROVE") {
        				NEW_STATUS = "APPROVED";
        			}
        			else if (this.div_transfer_Info.form.div_toggle.form.getValue() == "REJECT") {
        				NEW_STATUS = "REJECTED";
        			}
        			var REJECT_MESSAGE = this.div_transfer_Info.form.txtArea_rejectReason.value;
        			var SELLER_ID = this.ds_detailInfo.getColumn(0, "SELLER_ID");
        			var BUYER_ID  = this.ds_detailInfo.getColumn(0, "BUYER_ID");

        			this.ds_processInfo.setColumn(0, "MARKET_NO", MARKET_NO);
        			this.ds_processInfo.setColumn(0, "NEW_STATUS", NEW_STATUS);
        			this.ds_processInfo.setColumn(0, "REJECT_MESSAGE", REJECT_MESSAGE);
        			this.ds_processInfo.setColumn(0, "SELLER_ID", SELLER_ID);
        			this.ds_processInfo.setColumn(0, "BUYER_ID", BUYER_ID);

        			var strSvcUrl = "p014/transferProcess.do";
        			var inData    = "ds_processInfo=ds_processInfo";
        			var outData   = "";
        			var strArg    = "";

        			this.gfnTransaction("transferProcess", strSvcUrl, inData, outData, strArg, "fnCallback", true);
        		}
        	}
        	else if (strId == "confirm.reject.transfer") {
        		if (strVal == false) {
        			return;
        		}
        		else {
        			var MARKET_NO = this.ds_detailInfo.getColumn(0, "MARKET_NO");
        			var NEW_STATUS = "";
        			if (this.div_transfer_Info.form.div_toggle.form.getValue() == "APPROVE") {
        				NEW_STATUS = "APPROVED";
        			}
        			else if (this.div_transfer_Info.form.div_toggle.form.getValue() == "REJECT") {
        				NEW_STATUS = "REJECTED";
        			}
        			var REJECT_MESSAGE = this.div_transfer_Info.form.txtArea_rejectReason.value;
        			var SELLER_ID = this.ds_detailInfo.getColumn(0, "SELLER_ID");
        			var BUYER_ID  = this.ds_detailInfo.getColumn(0, "BUYER_ID");

        			this.ds_processInfo.setColumn(0, "MARKET_NO", MARKET_NO);
        			this.ds_processInfo.setColumn(0, "NEW_STATUS", NEW_STATUS);
        			this.ds_processInfo.setColumn(0, "REJECT_MESSAGE", REJECT_MESSAGE);
        			this.ds_processInfo.setColumn(0, "SELLER_ID", SELLER_ID);
        			this.ds_processInfo.setColumn(0, "BUYER_ID", BUYER_ID);

        			var strSvcUrl = "p014/transferProcess.do";
        			var inData    = "ds_processInfo=ds_processInfo";
        			var outData   = "";
        			var strArg    = "";

        			this.gfnTransaction("transferProcess", strSvcUrl, inData, outData, strArg, "fnCallback", true);
        		}
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Admin_Transfer_onload,this);
            this.addEventHandler("ontimer",this.Admin_Transfer_ontimer,this);
            this.div_transfer_manage.form.cbo_selectGridType.addEventHandler("onitemchanged",this.div_transfer_manage_cbo_selectGridType_onitemchanged,this);
            this.div_transfer_manage.form.edt_searchTerm.addEventHandler("onchanged",this.div_transfer_manage_edt_searchTerm_onchanged,this);
            this.div_transfer_manage.form.btn_resetSearchTerm.addEventHandler("onclick",this.div_transfer_manage_btn_resetSearchTerm_onclick,this);
            this.div_transfer_Info.form.btn_proceed.addEventHandler("onclick",this.div_transfer_Info_btn_proceed_onclick,this);
            this.btn_refresh.addEventHandler("onclick",this.div_transfer_manage_btn_refresh_onclick,this);
            this.ds_transferList.addEventHandler("onrowposchanged",this.ds_transferList_onrowposchanged,this);
        };
        this.loadIncludeScript("gybs3013fm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
