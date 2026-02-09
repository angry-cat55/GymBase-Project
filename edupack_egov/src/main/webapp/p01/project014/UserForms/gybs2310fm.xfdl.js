(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("gybs2310fm");
            this.set_titletext("헬스장 상세 정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,940);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_gymInfo", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "GYM_CODE","type" : "INT","size" : "10"},{"id" : "GYM_NAME","type" : "STRING","size" : "50"},{"id" : "ADDRESS","type" : "STRING","size" : "100"},{"id" : "TEL_NO","type" : "STRING","size" : "20"},{"id" : "DESCRIPTION","type" : "STRING","size" : "500"},{"id" : "OWNER_ID","type" : "STRING","size" : "15"},{"id" : "IMG_PATH","type" : "STRING","size" : "255"},{"id" : "FAVORITES_COUNT","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gymMachineInfo", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "MACHINE_CODE","type" : "STRING","size" : "256"},{"id" : "MACHINE_NAME","type" : "STRING","size" : "256"},{"id" : "MACHINE_TARGET","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_gymInfo","20","80",null,"760","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_background("#efefef");
            obj.set_borderRadius("20px");
            obj.set_border("1px solid #d4d4d4");
            this.addChild(obj.name, obj);

            obj = new Static("sta_background","44","85",null,null,"44","30",null,null,null,null,this.div_gymInfo.form);
            obj.set_taborder("11");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #d5d5d5");
            obj.set_borderRadius("10px");
            this.div_gymInfo.addChild(obj.name, obj);

            obj = new ImageViewer("img_gymImg","80","156","545","325",null,null,null,null,null,null,this.div_gymInfo.form);
            obj.set_taborder("0");
            obj.set_border("0px none");
            obj.set_background("transparent");
            obj.set_image("url(\'imagerc::form/imgNotFound.png\')");
            obj.set_stretch("fit");
            obj.set_borderRadius("10px");
            this.div_gymInfo.addChild(obj.name, obj);

            obj = new Static("sta_gymName","80","560",null,"60","613",null,null,null,null,null,this.div_gymInfo.form);
            obj.set_taborder("1");
            obj.set_text("이름");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 600 16pt/normal \"Arial\"");
            obj.set_padding("0px 0px 0px 20px");
            obj.set_border("1px solid #d5d5d5");
            obj.set_color("#000000");
            this.div_gymInfo.addChild(obj.name, obj);

            obj = new Static("sta_gymAddr","80","sta_gymName:10",null,"40","613",null,null,null,null,null,this.div_gymInfo.form);
            obj.set_taborder("2");
            obj.set_text("주소");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px");
            obj.set_font("normal 600 12pt/normal \"Arial\"");
            obj.set_verticalAlign("middle");
            obj.set_padding("0px 0px 0px 20px");
            obj.set_border("1px solid #d5d5d5");
            obj.set_color("#000000");
            this.div_gymInfo.addChild(obj.name, obj);

            obj = new Grid("grd_machineList",null,"156","320","300","269",null,null,null,null,null,this.div_gymInfo.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_gymMachineInfo");
            obj.set_autofittype("col");
            obj.set_borderRadius("10px");
            obj.set_border("1px solid #d5d5d5");
            obj.set_fastvscrolltype("default");
            obj.set_scrollbartype("autoindicator autoindicator");
            obj.set_autosizingtype("row");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"135\"/><Column size=\"135\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"기구 목록\" color=\"#000000\" font=\"normal 700 10pt/normal &quot;Malgun Gothic&quot;\"/><Cell row=\"1\" text=\"기구 이름\" color=\"#000000\" font=\"normal 700 10pt/normal &quot;Malgun Gothic&quot;\"/><Cell row=\"1\" col=\"1\" text=\"타겟 부위\" color=\"#000000\" font=\"normal 700 10pt/normal &quot;Malgun Gothic&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:MACHINE_NAME\" font=\"normal 500 10pt/normal &quot;Malgun Gothic&quot;\" textAlign=\"center\" wordWrap=\"english\" padding=\"5px\" color=\"#000000\" border=\"0px none,1px solid #d4d4d4,1px solid #d4d4d4,0px none\"/><Cell col=\"1\" text=\"bind:MACHINE_TARGET\" font=\"normal 500 10pt/normal &quot;Malgun Gothic&quot;\" wordWrap=\"english\" padding=\"5px\" color=\"#000000\" border=\"0px none,0px none,1px solid #d4d4d4\"/></Band></Format></Formats>");
            this.div_gymInfo.addChild(obj.name, obj);

            obj = new Static("sta_gymDesc",null,null,"509","194","80","88",null,null,null,null,this.div_gymInfo.form);
            obj.set_taborder("5");
            obj.set_text("상세 설명");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px");
            obj.set_verticalAlign("top");
            obj.set_padding("15px 20px 0px");
            obj.set_wordWrap("english");
            obj.set_font("normal 500 12pt/normal \"맑은 고딕\"");
            obj.set_border("1px solid #d5d5d5");
            obj.set_color("#000000");
            obj.set_letterSpacing("1px");
            this.div_gymInfo.addChild(obj.name, obj);

            obj = new CheckBoxSet("ckb_machineTarget",null,"156","179","300","80",null,null,null,null,null,this.div_gymInfo.form);
            obj.set_taborder("7");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonlycolumn("readonlycolumn");
            obj.set_columncount("2");
            obj.set_padding("10px");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px");
            obj.set_font("normal 700 10pt/normal \"맑은 고딕\"");
            obj.set_border("1px solid #d5d5d5");
            obj.set_color("#000000");
            var div_gymInfo_form_ckb_machineTarget_innerdataset = new nexacro.NormalDataset("div_gymInfo_form_ckb_machineTarget_innerdataset", obj);
            div_gymInfo_form_ckb_machineTarget_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"},{"id" : "readonlycolumn","size" : "256"}]},"Rows" : [{"datacolumn" : "가슴","codecolumn" : "가슴","readonlycolumn" : "0"},{"datacolumn" : "등","codecolumn" : "등","readonlycolumn" : "0"},{"datacolumn" : "어깨","codecolumn" : "어깨","readonlycolumn" : "0"},{"datacolumn" : "삼두","codecolumn" : "삼두","readonlycolumn" : "0"},{"datacolumn" : "이두","codecolumn" : "이두","readonlycolumn" : "0"},{"datacolumn" : "승모","codecolumn" : "승모","readonlycolumn" : "0"},{"datacolumn" : "대퇴사두","codecolumn" : "대퇴사두","readonlycolumn" : "0"},{"datacolumn" : "햄스트링","codecolumn" : "햄스트링","readonlycolumn" : "0"},{"datacolumn" : "둔근","codecolumn" : "둔근","readonlycolumn" : "0"},{"datacolumn" : "종아리","codecolumn" : "종아리","readonlycolumn" : "0"},{"datacolumn" : "전완","codecolumn" : "전완","readonlycolumn" : "0"},{"datacolumn" : "복근","codecolumn" : "복근","readonlycolumn" : "0"},{"datacolumn" : "유산소","codecolumn" : "유산소","readonlycolumn" : "0"},{"codecolumn" : "전신","datacolumn" : "전신","readonlycolumn" : "0"}]});
            obj.set_innerdataset(div_gymInfo_form_ckb_machineTarget_innerdataset);
            this.div_gymInfo.addChild(obj.name, obj);

            obj = new Static("sta_gymTelNo",null,"506","140","40","866",null,null,null,null,null,this.div_gymInfo.form);
            obj.set_taborder("4");
            obj.set_text("전화번호");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 600 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("1px solid #d5d5d5");
            obj.set_color("#000000");
            obj.set_letterSpacing("1px");
            this.div_gymInfo.addChild(obj.name, obj);

            obj = new Static("sta_gymOwnerID","80","506","134","40",null,null,null,null,null,null,this.div_gymInfo.form);
            obj.set_taborder("6");
            obj.set_text("계정주");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px");
            obj.set_verticalAlign("middle");
            obj.set_padding("0px 10px");
            obj.set_font("normal 600 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("1px solid #d5d5d5");
            obj.set_color("#000000");
            obj.set_wordWrap("english");
            this.div_gymInfo.addChild(obj.name, obj);

            obj = new Static("sta_gymFavoriteCnt",null,"506","54","40","613",null,null,null,null,null,this.div_gymInfo.form);
            obj.set_taborder("9");
            obj.set_text("999");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 600 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("1px solid #d5d5d5");
            obj.set_color("#000000");
            this.div_gymInfo.addChild(obj.name, obj);

            obj = new ImageViewer("img_favorites",null,"506","41","41","sta_gymFavoriteCnt:10",null,null,null,null,null,this.div_gymInfo.form);
            obj.set_taborder("8");
            obj.set_image("url(\'imagerc::form/unFavorite.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_background("transparent");
            obj.set_border("0px none");
            this.div_gymInfo.addChild(obj.name, obj);

            obj = new Button("btn_close","54","30","45","45",null,null,null,null,null,null,this.div_gymInfo.form);
            obj.set_taborder("10");
            obj.set_background("url(\'imagerc::form/backIcon3.png\') no-repeat center center /contain");
            obj.set_border("0px none");
            this.div_gymInfo.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_gymInfo.form
            obj = new Layout("default","",0,0,this.div_gymInfo.form,function(p){});
            this.div_gymInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,940,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("gybs2310fm.xfdl", function() {
        this.fvApp = nexacro.getApplication();
        this.accountFavorite = 0; // 0 : 현재 서버 데이터상 즐겨찾기 아님
        this.favoriteStatus = 0; // 0 : 현재 즐겨찾기 아님

        this.gybs2310fm_onload = function(obj,e)
        {

        	// 전달받은 GYM_CODE로 해당 헬스장 정보와 즐겨찾기 정보 불러오기
        	var gymCode = this.fvApp.gv_gymCode;
        	var strSvcUrl = "p014/getGymInfo.do";
        	var inData    = "";
        	var outData   = "ds_gymInfo=ds_gymInfo ds_gymMachineInfo=ds_gymMachineInfo";
        	var strArg    = "paramCode=" + gymCode + " paramID=" + this.fvApp.gds_accountInfo.getColumn(0, "ID");
        	this.gfnTransaction("getGymInfo", strSvcUrl, inData, outData, strArg, "fnCallback", true);

        	var nHeight = this.getLayoutInfo(this.getCurrentLayoutID(), "height");
         	this.parent.parent.fnMainPageOnLoad(nHeight);
        	this.parent.parent.scrollTo(0,0);
        };

        this.fnCallback = function (svcId, errCd, errMsg)
        {
        	if (svcId == "getGymInfo") {
        		this.div_gymInfo.form.sta_gymName.text = this.ds_gymInfo.getColumn(0, "GYM_NAME");
        		this.div_gymInfo.form.sta_gymAddr.text = this.ds_gymInfo.getColumn(0, "ADDRESS");
        		var nTelNo = this.ds_gymInfo.getColumn(0, "TEL_NO");
        		var nTelNo = nTelNo.substring(0, 3) + "-" + nTelNo.substring(3, 7) + "-" + nTelNo.substring(7, 11);
        		this.div_gymInfo.form.sta_gymTelNo.text = nTelNo;
        		this.div_gymInfo.form.sta_gymDesc.text = this.ds_gymInfo.getColumn(0, "DESCRIPTION");
        		this.div_gymInfo.form.sta_gymOwnerID.text = this.ds_gymInfo.getColumn(0, "OWNER_ID");
        		this.div_gymInfo.form.sta_gymFavoriteCnt.text = this.ds_gymInfo.getColumn(0, "FAVORITES_COUNT");
        		this.div_gymInfo.form.img_gymImg.image = this.ds_gymInfo.getColumn(0, "IMG_PATH");

        		if (this.accountFavorite == 1) { // 계정이 즐겨찾기인 상태
        			this.div_gymInfo.form.img_favorites.image = "imagerc::form/favorite.png";
        			this.favoriteStatus = 1;
        		}
        		else { // 계정이 즐겨찾기가 아닌 상태
        			this.div_gymInfo.form.img_favorites.image = "imagerc::form/unFavorite.png";
        		}
        	}
        };


        this.div_gymInfo_img_favorites_onclick = function(obj,e)
        {
        	if (this.favoriteStatus == 1) // 즐겨찾기 버튼이 활성화된 상태
        	{
        		this.favoriteStatus = 0;
        		var nCntFavorite = parseInt(this.div_gymInfo.form.sta_gymFavoriteCnt.text) - 1;
        		this.div_gymInfo.form.sta_gymFavoriteCnt.text = nCntFavorite.toString();
        		this.div_gymInfo.form.img_favorites.image = "imagerc::form/unFavorite.png";
        	}
        	else if (this.favoriteStatus == 0) // 즐겨찾기 버튼이 활성화가 안된 상태
        	{
        		this.favoriteStatus = 1;
        		var nCntFavorite = parseInt(this.div_gymInfo.form.sta_gymFavoriteCnt.text) + 1;
        		this.div_gymInfo.form.sta_gymFavoriteCnt.text = nCntFavorite.toString();
        		this.div_gymInfo.form.img_favorites.image = "imagerc::form/favorite.png";
        	}
        };

        this.gybs2310fm_onclose = function(obj,e)
        {
        	// 즐겨찾기 정보 변경
        	// 즐겨찾기 상태가 동일하면 그냥 종료
        	if (this.accountFavorite == this.favoriteStatus) {
        		return;
        	}
        	// 즐겨찾기 상태가 다르면 현재 버튼 상태에 따라 gym_favorite 테이블 데이터 추가/삭제
        	else {
        		var paramID = this.fvApp.gds_accountInfo.getColumn(0, "ID");
        		var paramCode = this.fvApp.gv_gymCode;
        		var paramStatus = this.favoriteStatus;
        		var strSvcUrl = "p014/changeFavoriteInfo.do";
        		var inData    = "";
        		var outData   = "";
        		var strArg    = "paramID=" + paramID + " paramCode=" + paramCode + " paramStatus=" + paramStatus;

        		this.gfnTransaction("changeFavoriteInfo", strSvcUrl, inData, outData, strArg, "fnCallback", true);
        	}
        };

        this.div_gymInfo_btn_close_onclick = function(obj,e)
        {
        	if (this.fvApp.gds_search.getColumn(0, "gotoMain") == 1) { // 메인으로
        		this.parent.url = "UserForms::gybs2011fm.xfdl";
        	}
        	else if (this.fvApp.gds_search.getColumn(0, "gotoMain") == 0) { // 헬스장 목록으로
        		this.parent.url = "UserForms::gybs2013fm.xfdl";
        	}
        	else if (this.fvApp.gds_search.getColumn(0, "gotoMain") == 2) { // 내 헬스장
        		this.parent.url = "UserForms::gybs2012fm.xfdl";
        	}
        	else if (this.fvApp.gds_search.getColumn(0, "gotoMain") == 3) { // 정기권 마켓
        		this.fvApp.gds_search.setColumn(0, "gotoMain", this.fvApp.gv_tempGotoMainType); // 저장해둔 정기권 마켓 화면에서의 전 화면의 정보 불러오기
        		this.parent.url = "MarketForms::gybs4011fm.xfdl";
        	}
        };

        this.div_gymInfo_ckb_machineTarget_onitemchanged = function(obj,e)
        {
        	if (e.postvalue == null || e.postvalue == "") {
        		this.ds_gymMachineInfo.filter("");
        		return;
        	}
        	var arr = e.postvalue.split(",");
        	var sfilter = "";

        	for (var i = 0; i < arr.length; i++) {
        		if (i == 0) {
        			sfilter = "MACHINE_TARGET.indexOf('" + arr[i] + "') > -1";
        		}
        		else {
        			sfilter += " || MACHINE_TARGET.indexOf('" + arr[i] + "') > -1";
        		}
        	}
        	trace(sfilter);
        	this.ds_gymMachineInfo.filter(sfilter);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.gybs2310fm_onload,this);
            this.addEventHandler("onclose",this.gybs2310fm_onclose,this);
            this.div_gymInfo.form.ckb_machineTarget.addEventHandler("onitemchanged",this.div_gymInfo_ckb_machineTarget_onitemchanged,this);
            this.div_gymInfo.form.img_favorites.addEventHandler("onclick",this.div_gymInfo_img_favorites_onclick,this);
            this.div_gymInfo.form.btn_close.addEventHandler("onclick",this.div_gymInfo_btn_close_onclick,this);
        };
        this.loadIncludeScript("gybs2310fm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
