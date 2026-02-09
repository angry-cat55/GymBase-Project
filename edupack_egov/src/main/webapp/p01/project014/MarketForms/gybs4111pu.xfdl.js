(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("gybs4111pu");
            this.set_titletext("정기권 등록 팝업");
            this.set_background("RGBA(196,196,196,0.02)");
            if (Form == this.constructor)
            {
                this._setFormPosition(720,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_marketInfo", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "TITLE","type" : "STRING","size" : "256"},{"id" : "CONTENT","type" : "STRING","size" : "256"},{"id" : "GYM_CODE","type" : "STRING","size" : "256"},{"id" : "GYM_NAME","type" : "STRING","size" : "256"},{"id" : "SELLER_ID","type" : "STRING","size" : "256"},{"id" : "PRICE","type" : "STRING","size" : "256"},{"id" : "START_DATE","type" : "STRING","size" : "256"},{"id" : "END_DATE","type" : "STRING","size" : "256"}]},"Rows" : [{}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gymList", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "GYM_CODE","type" : "STRING","size" : "256"},{"id" : "GYM_NAME","type" : "STRING","size" : "256"},{"id" : "ADDRESS","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_upload","0","0","720","800",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#efefef");
            obj.set_text("");
            obj.set_borderRadius("20px");
            obj.set_border("1px solid #000000");
            this.addChild(obj.name, obj);

            obj = new Static("sta_background","20","20",null,null,"20","20",null,null,null,null,this.div_upload.form);
            obj.set_taborder("15");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px");
            obj.set_border("1px solid #d4d4d4");
            this.div_upload.addChild(obj.name, obj);

            obj = new Static("sta_content","63","389","80","40",null,null,null,null,null,null,this.div_upload.form);
            obj.set_taborder("11");
            obj.set_text("정기권 설명");
            obj.set_font("normal bold 11pt/normal \"Arial\"");
            obj.set_color("#000000");
            this.div_upload.addChild(obj.name, obj);

            obj = new TextArea("txtArea_content","63","sta_content:10","595",null,null,"160",null,null,null,null,this.div_upload.form);
            obj.set_taborder("1");
            obj.set_border("1px solid #d5d5d5");
            obj.set_font("normal 600 11pt/normal \"Arial\"");
            obj.set_borderRadius("10px");
            obj.set_letterSpacing("1px");
            obj.set_padding("20px");
            obj.set_textAlign("left");
            obj.set_wordWrap("english");
            obj.set_displaynulltext("내용을 입력하세요.");
            obj.set_scrollbartype("none none");
            this.div_upload.addChild(obj.name, obj);

            obj = new Button("btn_upload",null,"710","120","50","62",null,null,null,null,null,this.div_upload.form);
            obj.set_taborder("3");
            obj.set_text("등록");
            obj.set_background("#000000");
            obj.set_color("#ffffff");
            obj.set_borderRadius("15px");
            obj.set_font("normal 600 13pt/normal \"Arial\"");
            this.div_upload.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,"710","120","50","btn_upload:30",null,null,null,null,null,this.div_upload.form);
            obj.set_taborder("2");
            obj.set_text("취소");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            obj.set_borderRadius("15px");
            obj.set_font("normal 600 13pt/normal \"Arial\"");
            this.div_upload.addChild(obj.name, obj);

            obj = new Static("sta_gym","63","105","50","40",null,null,null,null,null,null,this.div_upload.form);
            obj.set_taborder("13");
            obj.set_text("헬스장");
            obj.set_font("normal bold 11pt/normal \"Arial\"");
            obj.set_color("#000000");
            this.div_upload.addChild(obj.name, obj);

            obj = new Static("sta_gymName","sta_gym:10","105","206","40",null,null,null,null,null,null,this.div_upload.form);
            obj.set_taborder("4");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 600 10pt/normal \"Arial\"");
            obj.set_textAlign("left");
            obj.set_color("#000000");
            obj.set_padding("0px 60px 0px 30px");
            obj.set_border("1px solid #d5d5d5");
            obj.set_wordWrap("english");
            obj.set_fittocontents("width");
            this.div_upload.addChild(obj.name, obj);

            obj = new ImageViewer("btn_search","sta_gymName:-35","113","25","25",null,null,null,null,null,null,this.div_upload.form);
            obj.set_taborder("5");
            obj.set_image("url(\'imagerc::form/search.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_border("0px none");
            obj.set_borderRadius("20px");
            obj.set_text("");
            obj.set_background("transparent");
            this.div_upload.addChild(obj.name, obj);

            obj = new Static("sta_startDate","63","190","50","40",null,null,null,null,null,null,this.div_upload.form);
            obj.set_taborder("8");
            obj.set_text("시작일");
            obj.set_font("normal bold 11pt/normal \"Arial\"");
            obj.set_color("#000000");
            this.div_upload.addChild(obj.name, obj);

            obj = new DateField("df_startDate","sta_startDate:10","190","125","40",null,null,null,null,null,null,this.div_upload.form);
            obj.set_taborder("6");
            obj.set_border("1px solid #d5d5d5");
            obj.set_borderRadius("10px");
            this.div_upload.addChild(obj.name, obj);

            obj = new Static("sta_endDate","df_startDate:20","190","50","40",null,null,null,null,null,null,this.div_upload.form);
            obj.set_taborder("9");
            obj.set_text("만료일");
            obj.set_font("normal bold 11pt/normal \"Arial\"");
            obj.set_color("#000000");
            this.div_upload.addChild(obj.name, obj);

            obj = new DateField("df_endDate","sta_endDate:10","190","125","40",null,null,null,null,null,null,this.div_upload.form);
            obj.set_taborder("7");
            obj.set_border("1px solid #d5d5d5");
            obj.set_borderRadius("10px");
            this.div_upload.addChild(obj.name, obj);

            obj = new Static("sta_price","df_endDate:20","190","50","40",null,null,null,null,null,null,this.div_upload.form);
            obj.set_taborder("10");
            obj.set_text("가격");
            obj.set_font("normal bold 11pt/normal \"Arial\"");
            obj.set_color("#000000");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_letterSpacing("2px");
            this.div_upload.addChild(obj.name, obj);

            obj = new MaskEdit("msk_price","533","190","125","40",null,null,null,null,null,null,this.div_upload.form);
            obj.set_taborder("16");
            obj.set_format("#,#");
            obj.set_borderRadius("10px");
            obj.set_border("1px solid #d5d5d5");
            obj.set_color("#000000");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_letterSpacing("1px");
            obj.set_padding("0px 20px 0px 10px");
            obj.set_textAlign("right");
            this.div_upload.addChild(obj.name, obj);

            obj = new Static("sta_won","msk_price:-24","msk_price:-30","20","20",null,null,null,null,null,null,this.div_upload.form);
            obj.set_taborder("12");
            obj.set_text("원");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("#000000");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_upload.addChild(obj.name, obj);

            obj = new Static("sta_title","63","269","80","40",null,null,null,null,null,null,this.div_upload.form);
            obj.set_taborder("14");
            obj.set_text("제목");
            obj.set_font("normal bold 11pt/normal \"Arial\"");
            obj.set_color("#000000");
            this.div_upload.addChild(obj.name, obj);

            obj = new Edit("edt_title","63","sta_title:10","595","40",null,null,null,null,null,null,this.div_upload.form);
            obj.set_taborder("0");
            obj.set_border("1px solid #d4d4d4");
            obj.set_borderRadius("10px");
            obj.set_padding("0px 20px");
            obj.set_textAlign("left");
            obj.set_letterSpacing("1px");
            obj.set_font("normal 700 11pt/normal \"Arial\"");
            obj.set_displaynulltext("내용을 입력하세요.");
            this.div_upload.addChild(obj.name, obj);

            obj = new PopupDiv("pdiv_gymList","760","105","390","370",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #d4d4d4");
            obj.set_borderRadius("20px");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ok",null,"314","59","40","20",null,null,null,null,null,this.pdiv_gymList.form);
            obj.set_taborder("0");
            obj.set_text("확인");
            obj.set_background("#000000");
            obj.set_color("#ffffff");
            obj.set_borderRadius("10px");
            obj.set_font("normal 600 10pt/normal \"Arial\"");
            this.pdiv_gymList.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,"314","59","40","btn_ok:5",null,null,null,null,null,this.pdiv_gymList.form);
            obj.set_taborder("1");
            obj.set_text("취소");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            obj.set_borderRadius("10px");
            obj.set_font("normal 600 10pt/normal \"Arial\"");
            this.pdiv_gymList.addChild(obj.name, obj);

            obj = new Grid("grd_gymList","20","20",null,null,"20","70",null,null,null,null,this.pdiv_gymList.form);
            obj.set_taborder("2");
            obj.set_border("2px solid #d4d4d4");
            obj.set_binddataset("ds_gymList");
            obj.set_autofittype("col");
            obj.set_borderRadius("10px");
            obj.set_autosizingtype("row");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"160\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"헬스장 이름\" font=\"normal 600 13px/normal &quot;Arial&quot;\" background=\"#efefef\"/><Cell col=\"1\" text=\"주소\" font=\"normal 600 13px/normal &quot;Arial&quot;\" background=\"#efefef\"/></Band><Band id=\"body\"><Cell text=\"bind:GYM_NAME\" border=\"1px solid #efefef,1px solid #c4c4c4,1px solid #efefef,1px solid #efefef\" textAlign=\"center\" displaytype=\"text\" padding=\"8px 5px\" wordWrap=\"english\" color=\"#000000\"/><Cell col=\"1\" text=\"bind:ADDRESS\" border=\"1px solid #efefef,1px solid #efefef,1px solid #efefef,1px solid #c4c4c4\" displaytype=\"text\" padding=\"8px 5px\" color=\"#000000\"/></Band></Format></Formats>");
            this.pdiv_gymList.addChild(obj.name, obj);

            obj = new Edit("edt_searchTerm","20","314","219","40",null,null,null,null,null,null,this.pdiv_gymList.form);
            obj.set_taborder("3");
            obj.set_borderRadius("5px");
            obj.set_displaynulltext("이름 혹은 주소를 검색하세요");
            obj.set_font("normal 10pt/normal \"Arial\"");
            obj.set_padding("0px 10px");
            this.pdiv_gymList.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_upload.form
            obj = new Layout("default","",0,0,this.div_upload.form,function(p){});
            this.div_upload.form.addLayout(obj.name, obj);

            //-- Default Layout : this.pdiv_gymList.form
            obj = new Layout("default","",0,0,this.pdiv_gymList.form,function(p){});
            this.pdiv_gymList.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",720,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_upload.form.df_startDate","value","ds_marketInfo","START_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_upload.form.df_endDate","value","ds_marketInfo","END_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_upload.form.sta_gymName","text","ds_marketInfo","GYM_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_upload.form.edt_title","value","ds_marketInfo","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_upload.form.txtArea_content","value","ds_marketInfo","CONTENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_upload.form.msk_price","value","ds_emp","SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_upload.form.msk_price","accessibilityaction","ds_marketInfo","PRICE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("gybs4111pu.xfdl", function() {
        this.fvApp = nexacro.getApplication();

        this.gybs4111pu_onload = function(obj,e)
        {
        	this.ds_marketInfo.setColumn(0, "SELLER_ID", this.fvApp.gds_accountInfo.getColumn(0, "ID"));
        	var strSvcUrl = "p014/getGymList.do";
        	var inData    = "";
        	var outData   = "ds_gymList=ds_gymList";
        	var strArg    = "";

        	this.gfnTransaction("getGymList", strSvcUrl, inData, outData, strArg, "fnCallback", true);
        };

        this.div_upload_btn_cancel_onclick = function(obj,e)
        {
        	this.close();
        };

        this.div_upload_btn_upload_onclick = function(obj,e)
        {
        	// 빈 항목이 있을 경우 리턴
        	if (this.gfnIsNull(this.div_upload.form.sta_gymName.text)
        	 || this.gfnIsNull(this.div_upload.form.df_startDate.value)
        	 || this.gfnIsNull(this.div_upload.form.df_endDate.value)
        	 || this.gfnIsNull(this.div_upload.form.msk_price.value)
        	 || this.gfnIsNull(this.div_upload.form.txtArea_content.value)
        	 || this.gfnIsNull(this.div_upload.form.edt_title.value)) {
        		this.gfnAlert("msg.err.enter.alldata", "", "msg.err.enter.alldata", "fnMsgCallback");
        		return;
        	}

        	// 기간 형식이 옳지 않을 경우
        	else if (this.div_upload.form.df_endDate.value < this.div_upload.form.df_startDate.value) {
        		this.gfnAlert("msg.err.wrong.date", "", "msg.err.wrong.date", "fnMsgCallback");
        		return;
        	}

        	// 서버로 게시글 데이터 전송
        	var sPrice = this.div_upload.form.msk_price.value.toString();
        	this.ds_marketInfo.setColumn(0, "PRICE", sPrice)

        	var strSvcUrl = "p014/setNewMarket.do";
        	var inData    = "ds_marketInfo=ds_marketInfo";
        	var outData   = "";
        	var strArg    = "";

        	this.gfnTransaction("setNewMarket", strSvcUrl, inData, outData, strArg, "fnCallback", true);
        };
        this.div_upload_btn_search_onclick = function(obj,e)
        {
        	this.pdiv_gymList.trackPopupByComponent(this.div_upload.form.sta_gymName, 0, 50);
        };

        this.pdiv_gymList_btn_cancel_onclick = function(obj,e)
        {
        	this.pdiv_gymList.closePopup();
        	this.pdiv_gymList.form.edt_searchTerm.value = null;
        	this.ds_gymList.filter("");
        	// 헬스장 이름에 따라 static의 길이 변경 적용
        	this.div_upload.form.resetScroll();
        };

        this.pdiv_gymList_btn_ok_onclick = function(obj,e)
        {
        	var nGymCode = this.ds_gymList.getColumn(this.ds_gymList.rowposition, "GYM_CODE");
        	var nGymName = this.ds_gymList.getColumn(this.ds_gymList.rowposition, "GYM_NAME");;
        	this.ds_marketInfo.setColumn(0, "GYM_CODE", nGymCode);
        	this.ds_marketInfo.setColumn(0, "GYM_NAME", nGymName);

        	this.div_upload.form.sta_gymName.text = this.ds_marketInfo.getColumn(0, "GYM_NAME");
        	this.pdiv_gymList_btn_cancel_onclick();
        };

        this.pdiv_gymList_edt_searchTerm_onchanged = function(obj,e)
        {
        	// 검색어
        	var sSearchTerm = this.pdiv_gymList.form.edt_searchTerm.value;

        	// 검색어가 없을 경우 필터 해제
        	if (sSearchTerm == "" || sSearchTerm == null)
            {
                this.ds_gymList.filter("");
                return;
            }

        	// 검색어가 있을 경우 필터
        	var sFilterExpr = "GYM_NAME.indexOf('" + sSearchTerm + "') > -1"
                            + " || "
                            + "ADDRESS.indexOf('" + sSearchTerm + "') > -1";
            this.ds_gymList.filter(sFilterExpr);
        };

        this.fnCallback = function(svcId, errCd, errMsg) {
        	if (errCd < 0) {
        		arrArg = [errMsg];
        		this.gfnAlert("msg.server.error.msg", arrArg, "msg.server.error.msg", "fnMsgCallback");
        	}
        	if (svcId == "setNewMarket") {
        		// 팝업으로 성공 확인
        		var objChildFrame = new ChildFrame("popupSuccessUpload", 0, 0, 280, 270);
        		objChildFrame.formurl = "MarketForms::gybs4212pu.xfdl";
        		objChildFrame.openalign = "center middle";
        		objChildFrame.overlaycolor = "RGBA(196,196,196,0.5)";
        		objChildFrame.dragmovetype = "none";
        		objChildFrame.showtitlebar = false;
        		objChildFrame.border = "0px none";

        		objChildFrame.showModal(this.getOwnerFrame(), "", this, "fn_popupCallback");
        	}
        };

        this.fn_popupCallback = function(sPopupId, sReturn) {
        	if (sPopupId == "popupSuccessUpload") {
        		// 부모창의 div 삭제, 새로고침 진행 후 닫기
        		this.opener.fnDeleteDiv();
        		this.opener.fnSearch();
        		this.close();
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.gybs4111pu_onload,this);
            this.div_upload.form.btn_upload.addEventHandler("onclick",this.div_upload_btn_upload_onclick,this);
            this.div_upload.form.btn_cancel.addEventHandler("onclick",this.div_upload_btn_cancel_onclick,this);
            this.div_upload.form.btn_search.addEventHandler("onclick",this.div_upload_btn_search_onclick,this);
            this.pdiv_gymList.addEventHandler("onkillfocus",this.pdiv_gymList_btn_cancel_onclick,this);
            this.pdiv_gymList.addEventHandler("onpopup",this.pdiv_gymList_onpopup,this);
            this.pdiv_gymList.form.btn_ok.addEventHandler("onclick",this.pdiv_gymList_btn_ok_onclick,this);
            this.pdiv_gymList.form.btn_cancel.addEventHandler("onclick",this.pdiv_gymList_btn_cancel_onclick,this);
            this.pdiv_gymList.form.edt_searchTerm.addEventHandler("onchanged",this.pdiv_gymList_edt_searchTerm_onchanged,this);
        };
        this.loadIncludeScript("gybs4111pu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
