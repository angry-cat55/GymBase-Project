(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("gybs4011fm");
            this.set_titletext("게시글 화면");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,940);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_marketInfo", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "TITLE","type" : "STRING","size" : "256"},{"id" : "CONTENT","type" : "STRING","size" : "256"},{"id" : "GYM_CODE","type" : "STRING","size" : "256"},{"id" : "GYM_NAME","type" : "STRING","size" : "256"},{"id" : "ADDRESS","type" : "STRING","size" : "256"},{"id" : "SELLER_ID","type" : "STRING","size" : "256"},{"id" : "PROFILE_PATH","type" : "STRING","size" : "256"},{"id" : "PRICE","type" : "STRING","size" : "256"},{"id" : "UPLOAD_DATE","type" : "STRING","size" : "256"},{"id" : "START_DATE","type" : "STRING","size" : "256"},{"id" : "END_DATE","type" : "STRING","size" : "256"},{"id" : "STATUS_CODE","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_marketComment", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "COMMENT_NO","type" : "STRING","size" : "256"},{"id" : "PARENT_NO","type" : "STRING","size" : "256"},{"id" : "WRITER_ID","type" : "STRING","size" : "256"},{"id" : "PROFILE_PATH","type" : "STRING","size" : "256"},{"id" : "CONTENT","type" : "STRING","size" : "256"},{"id" : "REG_DATE","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_newComment", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "MARKET_NO","type" : "STRING","size" : "256"},{"id" : "PARENT_NO","type" : "STRING","size" : "256"},{"id" : "WRITER_ID","type" : "STRING","size" : "256"},{"id" : "PROFILE_PATH","type" : "STRING","size" : "256"},{"id" : "CONTENT","type" : "STRING","size" : "256"},{"id" : "REG_DATE","type" : "STRING","size" : "256"}]},"Rows" : [{}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_marketInfo","20","80",null,"760","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#efefef");
            obj.set_borderRadius("20px");
            obj.set_border("1px solid #d4d4d4");
            this.addChild(obj.name, obj);

            obj = new Static("sta_background2","54","85","558",null,null,"20",null,null,null,null,this.div_marketInfo.form);
            obj.set_taborder("20");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #d5d5d5");
            obj.set_borderRadius("10px");
            this.div_marketInfo.addChild(obj.name, obj);

            obj = new Button("btn_close","54","30","45","45",null,null,null,null,null,null,this.div_marketInfo.form);
            obj.set_taborder("0");
            obj.set_background("url(\'imagerc::form/backIcon3.png\') no-repeat center center /contain");
            obj.set_border("0px none");
            obj.set_text("");
            this.div_marketInfo.addChild(obj.name, obj);

            obj = new ImageViewer("img_profile","109","315","70","70",null,null,null,null,null,null,this.div_marketInfo.form);
            obj.set_taborder("6");
            obj.set_stretch("fixaspectratio");
            obj.set_borderRadius("100px");
            obj.set_border("1px solid black");
            obj.set_background("transparent");
            obj.set_image("url(\'imagerc::form/profileIcon.png\')");
            this.div_marketInfo.addChild(obj.name, obj);

            obj = new Static("sta_ID","img_profile:15","345","114","40",null,null,null,null,null,null,this.div_marketInfo.form);
            obj.set_taborder("1");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px");
            obj.set_verticalAlign("middle");
            obj.set_padding("0px 20px");
            obj.set_font("normal 600 13pt/normal \"Arial\"");
            obj.set_textAlign("left");
            obj.set_text("아이디");
            obj.set_color("#000000");
            obj.set_fittocontents("width");
            obj.set_border("1px solid #d5d5d5");
            this.div_marketInfo.addChild(obj.name, obj);

            obj = new Static("sta_price","224","105","125","40",null,null,null,null,null,null,this.div_marketInfo.form);
            obj.set_taborder("2");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px");
            obj.set_verticalAlign("middle");
            obj.set_padding("0px 20px");
            obj.set_font("normal 600 13pt/normal \"Arial\"");
            obj.set_textAlign("right");
            obj.set_text("가격");
            obj.set_color("#000000");
            obj.set_border("1px solid #d5d5d5");
            this.div_marketInfo.addChild(obj.name, obj);

            obj = new Static("sta_content","109","469","450",null,null,"30",null,null,null,null,this.div_marketInfo.form);
            obj.set_taborder("3");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px");
            obj.set_verticalAlign("top");
            obj.set_padding("20px");
            obj.set_font("normal 500 13pt/normal \"Arial\"");
            obj.set_textAlign("left");
            obj.set_text("글 내용");
            obj.set_wordWrap("english");
            obj.set_color("#000000");
            obj.set_letterSpacing("1px");
            obj.set_border("1px solid #d5d5d5");
            this.div_marketInfo.addChild(obj.name, obj);

            obj = new Static("sta_gymName","109","sta_price:10","400","40",null,null,null,null,null,null,this.div_marketInfo.form);
            obj.set_taborder("4");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px");
            obj.set_verticalAlign("middle");
            obj.set_padding("0px 0px 0px 20px");
            obj.set_font("normal 600 13pt/normal \"Arial\"");
            obj.set_textAlign("left");
            obj.set_text("헬스장 이름");
            obj.set_color("#000000");
            obj.set_border("1px solid #d5d5d5");
            this.div_marketInfo.addChild(obj.name, obj);

            obj = new Static("sta_status","109","105","100","40",null,null,null,null,null,null,this.div_marketInfo.form);
            obj.set_taborder("5");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 600 13pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_text("판매 상태");
            obj.set_color("#000000");
            obj.set_border("1px solid #d5d5d5");
            this.div_marketInfo.addChild(obj.name, obj);

            obj = new Grid("grd_comments","629","125",null,null,"51","139",null,null,null,null,this.div_marketInfo.form);
            obj.set_taborder("7");
            obj.set_binddataset("ds_marketComment");
            obj.set_autofittype("col");
            obj.set_autosizingtype("row");
            obj.set_extendsizetype("row");
            obj.set_tabstop("false");
            obj.set_border("1px solid #d5d5d5");
            obj.set_borderRadius("0px 10px 10px");
            obj.set_scrolldisplaymode("line");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"150\"/><Column size=\"23\"/><Column size=\"52\"/><Column size=\"85\"/></Columns><Rows><Row size=\"40\"/></Rows><Band id=\"body\"><Cell wordWrap=\"english\" verticalAlign=\"top\" font=\"normal 600 12px/normal &quot;Arial&quot;\" border=\"1px solid #dbdee2,0px none,1px solid #dbdee2,1px solid #dbdee2\" text=\"expr:(PARENT_NO == null || PARENT_NO == &quot;&quot;) ? &quot;imagerc::form/comment.png&quot; : &quot;imagerc::form/replyArrow.png&quot;\" autosizerow=\"none\" displaytype=\"imagecontrol\" textAlign=\"right\" controlautosizingtype=\"width\" autosizecol=\"none\" imagestretch=\"fixaspectratio\" padding=\"0px 10px 0px 10px\"/><Cell col=\"1\" text=\"bind:CONTENT\" displaytype=\"text\" wordWrap=\"english\" verticalAlign=\"top\" padding=\"15px 10px 15px 0px\" font=\"normal 600 14px/normal &quot;Arial&quot;\" textAlign=\"left\" border=\"1px solid #dbdee2,0px none\" color=\"#000000\"/><Cell col=\"2\" displaytype=\"imagecontrol\" border=\"1px solid #dbdee2,0px none\" imagestretch=\"fit\" text=\"bind:PROFILE_PATH\" autosizerow=\"none\" verticalAlign=\"top\" textAlign=\"center\" autosizecol=\"none\" controlautosizingtype=\"width\" padding=\"0px\" cssclass=\"comment\"/><Cell col=\"3\" text=\"bind:WRITER_ID\" wordWrap=\"english\" verticalAlign=\"middle\" padding=\"10px\" font=\"normal 600 12px/normal &quot;Arial&quot;\" displaytype=\"text\" border=\"1px solid #dbdee2,0px none\" textAlign=\"left\" color=\"#000000\"/><Cell col=\"4\" wordWrap=\"english\" verticalAlign=\"middle\" padding=\"10px\" font=\"normal 600 12px/normal &quot;Arial&quot;\" textAlign=\"center\" border=\"0px none,1px solid #dbdee2,1px solid #dbdee2,0px none\" text=\"expr:REG_DATE.substring(0,4) + &quot;.&quot; + REG_DATE.substring(4,6) + &quot;.&quot; + REG_DATE.substring(6,8) + &quot; &quot; + REG_DATE.substring(8,10) + &quot;:&quot; + REG_DATE.substring(10,12) + &quot;:&quot; + REG_DATE.substring(12,14)\" color=\"#000000\"/></Band></Format></Formats>");
            this.div_marketInfo.addChild(obj.name, obj);

            obj = new ImageViewer("btn_gotoGym","sta_gymName:15","158","35",null,null,"565",null,null,null,null,this.div_marketInfo.form);
            obj.set_taborder("8");
            obj.set_image("url(\'imagerc::form/btn.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_border("0px none");
            obj.set_borderRadius("25px");
            obj.set_text("");
            this.div_marketInfo.addChild(obj.name, obj);

            obj = new Static("sta_addr","109","sta_gymName:10","450","40",null,null,null,null,null,null,this.div_marketInfo.form);
            obj.set_taborder("17");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px");
            obj.set_verticalAlign("middle");
            obj.set_padding("0px 0px 0px 20px");
            obj.set_font("normal 600 13pt/normal \"Arial\"");
            obj.set_textAlign("left");
            obj.set_text("주소");
            obj.set_color("#000000");
            obj.set_border("1px solid #d5d5d5");
            this.div_marketInfo.addChild(obj.name, obj);

            obj = new Static("sta_date","109","sta_addr:10","450","40",null,null,null,null,null,null,this.div_marketInfo.form);
            obj.set_taborder("9");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px");
            obj.set_verticalAlign("middle");
            obj.set_padding("0px 0px 0px 20px");
            obj.set_font("normal 600 13pt/normal \"Arial\"");
            obj.set_textAlign("left");
            obj.set_text("기간");
            obj.set_color("#000000");
            obj.set_border("1px solid #d5d5d5");
            this.div_marketInfo.addChild(obj.name, obj);

            obj = new Static("sta_background","1149",null,"40","80",null,"20",null,null,null,null,this.div_marketInfo.form);
            obj.set_taborder("11");
            obj.set_background("#ffffff");
            obj.set_borderRadius("0px 10px 10px 0px");
            this.div_marketInfo.addChild(obj.name, obj);

            obj = new ImageViewer("img_sendComment",null,null,"30","30","sta_background:-32","sta_background:-40",null,null,null,null,this.div_marketInfo.form);
            obj.set_taborder("10");
            obj.set_image("url(\'imagerc::form/writeComment.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_border("0px none");
            obj.set_background("transparent");
            this.div_marketInfo.addChild(obj.name, obj);

            obj = new TextArea("txtArea_comment","629",null,"520","80",null,"20",null,null,null,null,this.div_marketInfo.form);
            obj.set_taborder("12");
            obj.set_font("normal 600 11pt/normal \"Arial\"");
            obj.set_borderRadius("10px 0px 0px 10px");
            obj.set_letterSpacing("1px");
            obj.set_padding("20px");
            obj.set_textAlign("left");
            obj.set_wordWrap("english");
            obj.set_displaynulltext("내용을 입력하세요.");
            obj.set_scrollbartype("none none");
            obj.set_border("0px none");
            this.div_marketInfo.addChild(obj.name, obj);

            obj = new Static("sta_replyTo","629","629","147",null,null,"txtArea_comment:-20",null,null,null,null,this.div_marketInfo.form);
            obj.set_taborder("13");
            obj.set_padding("0px 0px 0px 20px");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_background("#ffffff");
            obj.set_visible("false");
            obj.set_borderRadius("10px  0px 0px");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.div_marketInfo.addChild(obj.name, obj);

            obj = new Div("div_background","sta_replyTo:0","629","30","40",null,null,null,null,null,null,this.div_marketInfo.form);
            obj.set_taborder("14");
            obj.set_background("#ffffff");
            obj.set_borderRadius("0px 10px 0px 0px");
            obj.set_visible("false");
            this.div_marketInfo.addChild(obj.name, obj);

            obj = new ImageViewer("img_removeReply","0","5",null,null,"5","10",null,null,null,null,this.div_marketInfo.form.div_background.form);
            obj.set_taborder("0");
            obj.set_background("transparent");
            obj.set_border("0px none");
            obj.set_image("url(\'imagerc::form/cancel.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_visible("false");
            obj.set_enable("false");
            this.div_marketInfo.form.div_background.addChild(obj.name, obj);

            obj = new Button("btn_buyMembership","434","105","125","40",null,null,null,null,null,null,this.div_marketInfo.form);
            obj.set_taborder("15");
            obj.set_text("구매하기");
            obj.set_cssclass("GB_SoldButton");
            obj.set_enable("false");
            this.div_marketInfo.addChild(obj.name, obj);

            obj = new Static("sta_commentCnt","629","85","110","41",null,null,null,null,null,null,this.div_marketInfo.form);
            obj.set_taborder("16");
            obj.set_text("댓글 [N]");
            obj.set_font("normal bold 11pt/normal \"Arial\"");
            obj.set_color("#000000");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #d4d4d4,1px solid #d4d4d4,0px none");
            obj.set_padding("0px 10px");
            obj.set_borderRadius("10px 10px 0px 0px");
            obj.set_textAlign("center");
            this.div_marketInfo.addChild(obj.name, obj);

            obj = new Static("sta_upload",null,"345","151","40","679",null,null,null,null,null,this.div_marketInfo.form);
            obj.set_taborder("18");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px");
            obj.set_verticalAlign("middle");
            obj.set_padding("0px 20px");
            obj.set_font("normal 600 13pt/normal \"Arial\"");
            obj.set_textAlign("right");
            obj.set_text("업로드 일자");
            obj.set_color("#000000");
            obj.set_fittocontents("width");
            obj.set_border("1px solid #d5d5d5");
            this.div_marketInfo.addChild(obj.name, obj);

            obj = new Static("sta_title","109","402","450",null,null,"299",null,null,null,null,this.div_marketInfo.form);
            obj.set_taborder("19");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px");
            obj.set_verticalAlign("top");
            obj.set_padding("20px");
            obj.set_font("normal 600 13pt/normal \"Arial\"");
            obj.set_textAlign("left");
            obj.set_text("제목 내용");
            obj.set_wordWrap("english");
            obj.set_color("#000000");
            obj.set_letterSpacing("1px");
            obj.set_border("1px solid #d5d5d5");
            this.div_marketInfo.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_marketInfo.form.div_background.form
            obj = new Layout("default","",0,0,this.div_marketInfo.form.div_background.form,function(p){});
            this.div_marketInfo.form.div_background.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_marketInfo.form
            obj = new Layout("default","",0,0,this.div_marketInfo.form,function(p){});
            this.div_marketInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,940,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_marketInfo.form.sta_ID","text","ds_marketInfo","SELLER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_marketInfo.form.sta_gymName","text","ds_marketInfo","GYM_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_marketInfo.form.sta_content","text","ds_marketInfo","CONTENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_marketInfo.form.sta_title","text","ds_marketInfo","CONTENT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("gybs4011fm.xfdl", function() {
        this.fvApp = nexacro.getApplication();
        this.rejectMessage = "";

        this.gybs4011fm_onload = function(obj,e)
        {
        	var marketNo = this.fvApp.gv_marketNo;
        	// 전달받은 마켓 넘버로 게시글 정보와 댓글 정보, GYM_CODE 가져오기
        	var strSvcUrl = "p014/getMarketInfo.do";
        	var inData    = "";
        	var outData   = "ds_marketInfo=ds_marketInfo ds_marketComment=ds_marketComment";
        	var strArg    = "paramNo=" + marketNo + " paramID=" + this.fvApp.gds_accountInfo.getColumn(0, "ID");
        	this.gfnTransaction("getMarketInfo", strSvcUrl, inData, outData, strArg, "fnCallback", true);

        	var nHeight = this.getLayoutInfo(this.getCurrentLayoutID(), "height");
         	this.parent.parent.fnMainPageOnLoad(nHeight);
        	this.parent.parent.scrollTo(0,0);
        };

        this.div_marketInfo_btn_close_onclick = function(obj,e)
        {
        	if (this.fvApp.gds_search.getColumn(0, "gotoMain") == 1) { // 메인으로
        		this.parent.url = "UserForms::gybs2011fm.xfdl";
        	}
        	else if (this.fvApp.gds_search.getColumn(0, "gotoMain") == 0) { // 정기권 목록으로
        		this.parent.url = "MarketForms::gybs4010fm.xfdl";
        	}
        	else if (this.fvApp.gds_search.getColumn(0, "gotoMain") == 4) { // 마이페이지로
        		this.parent.url = "UserForms::gybs2014fm.xfdl";
        	}
        };


        this.div_marketInfo_btn_gotoGym_onclick = function(obj,e)
        {
        	this.fvApp.gv_tempGotoMainType = this.fvApp.gds_search.getColumn(0, "gotoMain");
        	this.fvApp.gds_search.setColumn(0, "gotoMain", 3);
        	this.parent.url = "UserForms::gybs2310fm.xfdl";
        };

        this.div_marketInfo_img_sendComment_onclick = function(obj,e)
        {
        	// 댓글 내용이 없으면 무반응
        	if (this.div_marketInfo.form.txtArea_comment.value == null || this.div_marketInfo.form.txtArea_comment.value == "") {
        		return;
        	}

        	// ds_newComment에 새로 등록할 댓글/답글 데이터 저장
        	this.ds_newComment.setColumn(0, "MARKET_NO", this.fvApp.gv_marketNo);
        	this.ds_newComment.setColumn(0, "WRITER_ID", this.fvApp.gds_accountInfo.getColumn(0, "ID"));
        	this.ds_newComment.setColumn(0, "CONTENT", this.div_marketInfo.form.txtArea_comment.value);
        	this.ds_newComment.setColumn(0, "PROFILE_PATH", this.fvApp.gds_accountInfo.getColumn(0, "PROFILE_PATH"));

        	// 트랜잭션으로 데이터 보낸 후 서버 쿼리에서 답글, 댓글 구분하여 데이터 저장
        	var strSvcUrl = "p014/setComment.do";
        	var inData    = "ds_newComment=ds_newComment";
        	var outData   = "ds_marketComment=ds_marketComment";
        	var strArg    = "paramNo=" + this.fvApp.gv_marketNo;

        	this.gfnTransaction("setComment", strSvcUrl, inData, outData, strArg, "fnCallback", true);


        	// 코멘트 전송 후 다시 텍스트 초기화 && 답글 ui 제거
        	this.div_marketInfo.form.txtArea_comment.value = null;
        	this.div_marketInfo_div_background_img_removeReply_onclick();
        };

        this.div_marketInfo_grd_comments_oncellclick = function(obj,e)
        {
        	// 댓글을 클릭했을 때만 기능
        	if (this.ds_marketComment.getColumn(e.row, "PARENT_NO") == null) {
        		this.div_marketInfo.form.sta_replyTo.text = this.ds_marketComment.getColumn(e.row, "WRITER_ID") + "님에게 답글";
        		this.div_marketInfo.form.sta_replyTo.visible = true;
        		this.div_marketInfo.form.div_background.visible = true;
        		this.div_marketInfo.form.div_background.form.img_removeReply.visible = true;
        		this.div_marketInfo.form.div_background.form.img_removeReply.enable = true;
        		this.ds_newComment.setColumn(0, "PARENT_NO", this.ds_marketComment.getColumn(e.row, "COMMENT_NO"));
        	}
        	// 답글을 클릭했을 때 ui 제거
        	else {
        		this.div_marketInfo_div_background_img_removeReply_onclick();
        	}
        };

        this.div_marketInfo_txtArea_comment_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13) {
        		this.div_marketInfo_img_sendComment_onclick();
        	}
        };

        this.div_marketInfo_div_background_img_removeReply_onclick = function(obj,e)
        {
        	this.div_marketInfo.form.sta_replyTo.text = "";
        	this.div_marketInfo.form.sta_replyTo.visible = false;
        	this.div_marketInfo.form.div_background.visible = false;
        	this.div_marketInfo.form.div_background.form.img_removeReply.visible = false;
        	this.div_marketInfo.form.div_background.form.img_removeReply.enable = false;
        	this.ds_newComment.setColumn(0, "PARENT_NO", null);
        };

        this.fnCallback = function (svcId, errCd, errMsg)
        {
        	if (svcId == "getMarketInfo") {
        		// 메인 화면에서 반려 사유 알림 클릭으로 왔을 경우 반려 사유 팝업 띄우기
        		if (this.fvApp.gds_rejectNoti.getColumn(0, "IS_FROM_REJECT") == "Y") {
        			this.fvApp.gds_rejectNoti.setColumn(0, "MESSAGE", this.rejectMessage);
        			trace("rejectMessage >>>>>>> " + this.fvApp.gds_rejectNoti.getColumn(0, "MESSAGE"));
        			var objChildFrame = new ChildFrame("popupRejectReason", 0, 0, 400, 500);
        			objChildFrame.formurl = "MarketForms::gybs4310pu.xfdl";
        			objChildFrame.openalign = "center middle";
        			objChildFrame.overlaycolor = "RGBA(196,196,196,0.5)";
        			objChildFrame.dragmovetype = "none";
        			objChildFrame.showtitlebar = false;
        			objChildFrame.border = "0px none";

        			var objParam = "";
        			objChildFrame.showModal(this.getOwnerFrame(), objParam, this, "fn_popupCallback");


        			this.fvApp.gds_rejectNoti.setColumn(0, "IS_FROM_REJECT", "N");
        		}

        		// 정보 바인딩
        		// 판매중 / 판매완료 구분해서 구매 버튼 활성화, 비활성화
        		if (this.ds_marketInfo.getColumn(0, "STATUS_CODE") == "SALE") {
        			this.div_marketInfo.form.btn_buyMembership.enable = true;
        			this.div_marketInfo.form.btn_buyMembership.cssclass = "GB_Login";
        		}
        		else if (this.ds_marketInfo.getColumn(0, "STATUS_CODE") == "SOLD" || this.ds_marketInfo.getColumn(0, "STATUS_CODE") == "REJECTED") {
        			this.div_marketInfo.form.btn_buyMembership.enable = false;
        			this.div_marketInfo.form.btn_buyMembership.cssclass = "GB_SoldButton";
        		}

        		// 기본 정보들 바인딩
        		this.fvApp.gv_gymCode						 = this.ds_marketInfo.getColumn(0, "GYM_CODE");
        		var sStatus = "";
        		switch(this.ds_marketInfo.getColumn(0, "STATUS_CODE")) {
        			case "SALE":
        				sStatus = "판매 중";
        				break;
        			case "SOLD":
        				sStatus = "판매 완료";
        				break;
        			case "REJECTED":
        				sStatus = "등록 반려";
        				break;
        		}
        		this.div_marketInfo.form.sta_status.text	 = sStatus;
        		var profilePath = "";
        		if (this.ds_marketInfo.getColumn(0, "PROFILE_PATH") == null || this.ds_marketInfo.getColumn(0, "PROFILE_PATH") == "") {
        			profilePath = "imagerc::form/profileIcon.png";
        		}
        		else profilePath = this.ds_marketInfo.getColumn(0, "PROFILE_PATH");
        		this.div_marketInfo.form.img_profile.image	 = profilePath;
        		this.div_marketInfo.form.sta_price.text	 = this.gfnAppendComma(this.ds_marketInfo.getColumn(0, "PRICE")) + "원";
        		var startDate = this.ds_marketInfo.getColumn(0, "START_DATE");
        		startDate = startDate.substring(0, 4) + "년 " + startDate.substring(4, 6) + "월 " + startDate.substring(6, 8) + "일";
        		var endDate = this.ds_marketInfo.getColumn(0, "END_DATE");
        		endDate = endDate.substring(0, 4) + "년 " + endDate.substring(4, 6) + "월 " + endDate.substring(6, 8) + "일";
        		this.div_marketInfo.form.sta_addr.text		 = "[주소] " + this.ds_marketInfo.getColumn(0, "ADDRESS");
        		this.div_marketInfo.form.sta_date.text		 = "[기간] " + startDate + " ~ " + endDate;
        		var uploadDate = this.ds_marketInfo.getColumn(0, "UPLOAD_DATE");
        		uploadDate = uploadDate.substring(0,4) + "." + uploadDate.substring(4,6) + "."  + uploadDate.substring(6,8);
        		this.div_marketInfo.form.sta_upload.text	 = uploadDate;
        		this.div_marketInfo.form.sta_commentCnt.text = "댓글 [" + this.ds_marketComment.rowcount + "]";
        		this.div_marketInfo.form.sta_title.text = this.ds_marketInfo.getColumn(0, "TITLE");
        	}
        	else if (svcId == "setComment") {
        		// 댓글 수 세팅
        		this.div_marketInfo.form.sta_commentCnt.text = "댓글 [" + this.ds_marketComment.rowcount + "]";
        	}
        };
        this.div_marketInfo_btn_buyMembership_onclick = function(obj,e)
        {
        	// 구매버튼 비활성화면 리턴 (안전 장치)
        	if (obj.enable == false) return;

        	// 구매 가능한 상태 => 구매 진행
        	var objChildFrame = new ChildFrame("popupBuyMembershp", 0, 0, 350, 500);
        	objChildFrame.formurl = "MarketForms::gybs4210pu.xfdl";
         	objChildFrame.openalign = "center middle";
         	objChildFrame.overlaycolor = "RGBA(196,196,196,0.5)";
        	objChildFrame.dragmovetype = "none";
        	objChildFrame.showtitlebar = false;
         	objChildFrame.border = "0px none";

        	var endDate = this.ds_marketInfo.getColumn(0, "END_DATE");
        	endDate = endDate.substring(0, 4) + "년 " + endDate.substring(4, 6) + "월 " + endDate.substring(6, 8) + "일";

        	var objParam = {param_gymName : this.ds_marketInfo.getColumn(0, "GYM_NAME"),
        					param_gymAddr : this.ds_marketInfo.getColumn(0, "ADDRESS"),
        					param_endDate : endDate,
        					param_title : this.ds_marketInfo.getColumn(0, "TITLE"),
        					param_sellerID : this.ds_marketInfo.getColumn(0, "SELLER_ID"),
        					param_price : this.ds_marketInfo.getColumn(0, "PRICE")}; // 만료일 D-Day 정보는 전역 변수로 전달
        	objChildFrame.showModal(this.getOwnerFrame(), objParam, this, "fn_popupCallback");
        };

        this.fnBuyMembership = function ()
        {
        	var objChildFrame = new ChildFrame("popupSuccessBuy", 0, 0, 330, 270);
        	objChildFrame.formurl = "MarketForms::gybs4211pu.xfdl";
         	objChildFrame.openalign = "center middle";
         	objChildFrame.overlaycolor = "RGBA(196,196,196,0.5)";
        	objChildFrame.dragmovetype = "none";
        	objChildFrame.showtitlebar = false;
         	objChildFrame.border = "0px none";

        	objChildFrame.showModal(this.getOwnerFrame(), "", this, "fn_popupCallback");
        };

        this.fn_popupCallback = function (sPopupId, sReturn)
        {
        	if (sPopupId == "popupSuccessBuy") {
        		this.gybs4011fm_onload();
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.gybs4011fm_onload,this);
            this.div_marketInfo.form.btn_close.addEventHandler("onclick",this.div_marketInfo_btn_close_onclick,this);
            this.div_marketInfo.form.grd_comments.addEventHandler("oncellclick",this.div_marketInfo_grd_comments_oncellclick,this);
            this.div_marketInfo.form.btn_gotoGym.addEventHandler("onclick",this.div_marketInfo_btn_gotoGym_onclick,this);
            this.div_marketInfo.form.img_sendComment.addEventHandler("onclick",this.div_marketInfo_img_sendComment_onclick,this);
            this.div_marketInfo.form.txtArea_comment.addEventHandler("onkeydown",this.div_marketInfo_txtArea_comment_onkeydown,this);
            this.div_marketInfo.form.div_background.form.img_removeReply.addEventHandler("onclick",this.div_marketInfo_div_background_img_removeReply_onclick,this);
            this.div_marketInfo.form.btn_buyMembership.addEventHandler("onclick",this.div_marketInfo_btn_buyMembership_onclick,this);
        };
        this.loadIncludeScript("gybs4011fm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
