(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("gybs3212fm");
            this.set_titletext("헬스장 등록 반려");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_gymInfo", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "GYM_CODE","type" : "STRING","size" : "256"},{"id" : "GYM_NAME","type" : "STRING","size" : "256"},{"id" : "ADDRESS","type" : "STRING","size" : "256"},{"id" : "TEL_NO","type" : "STRING","size" : "256"},{"id" : "DESCRIPTION","type" : "STRING","size" : "256"},{"id" : "IMG_PATH","type" : "STRING","size" : "256"}]},"Rows" : [{}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gymMachineInfo", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "MACHINE_CODE","type" : "STRING","size" : "256"},{"id" : "MACHINE_NAME","type" : "STRING","size" : "256"},{"id" : "IS_OWNED","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUser", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "IMAGE_ID","type" : "STRING","size" : "256"},{"id" : "IMAGE_NAME","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rejectReason", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "MESSAGE","type" : "STRING","size" : "256"},{"id" : "REJECT_DATE","type" : "STRING","size" : "256"}]},"Rows" : [{}]});
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0","50%","50%",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_visible("false");
            obj.set_background("#ffe5fe");
            this.addChild(obj.name, obj);

            obj = new Div("div_info","Static00:-450","Static00:-329","900","658",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#efefef");
            obj.set_border("1px solid #000000");
            obj.set_borderRadius("20px");
            obj.set_text("");
            obj.set_boxShadow("0px 0px 15px 0px rgba(0,0,0,0.41)");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_background","10","10",null,null,"10","10",null,null,null,null,this.div_info.form);
            obj.set_taborder("14");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px");
            obj.set_text("");
            this.div_info.addChild(obj.name, obj);

            obj = new ImageViewer("img_gymPhoto","30","25","488","270",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("0");
            obj.set_borderRadius("5px");
            obj.set_stretch("fit");
            this.div_info.addChild(obj.name, obj);

            obj = new Edit("edt_post","156","360","296","35",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("2");
            obj.set_enable("false");
            obj.set_cssclass("readonly");
            obj.set_font("normal 10pt/normal \"맑은 고딕\"");
            obj.set_color("#000000");
            obj.set_tooltiptext("주소를 변경하려면\r\n주소 검색 버튼을 사용하세요.");
            obj.set_tooltiptype("hover");
            obj.set_borderRadius("5px");
            this.div_info.addChild(obj.name, obj);

            obj = new Button("btn_searchPost","edt_post:5","360","61","35",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("1");
            obj.set_text("주소 검색");
            obj.set_cssclass("GB_Button");
            obj.set_font("normal 9pt/normal \"Arial\"");
            obj.set_enable("true");
            obj.set_border("1px solid #d4d4d4");
            this.div_info.addChild(obj.name, obj);

            obj = new Static("sta_gymName","30","315","105","35",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("3");
            obj.set_text("헬스장 이름");
            obj.set_font("normal bold 11pt/normal \"맑은 고딕\"");
            obj.set_border("0px none,2px solid #d4d4d4,0px none,0px none");
            obj.set_color("#000000");
            this.div_info.addChild(obj.name, obj);

            obj = new Static("sta_gymName00","30","360","105","35",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("4");
            obj.set_text("주소");
            obj.set_font("normal bold 11pt/normal \"맑은 고딕\"");
            obj.set_border("0px none,2px solid #d4d4d4,0px none,0px none");
            obj.set_color("#000000");
            this.div_info.addChild(obj.name, obj);

            obj = new Static("sta_gymName00_00","30","405","105","35",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("5");
            obj.set_text("전화번호");
            obj.set_font("normal bold 11pt/normal \"맑은 고딕\"");
            obj.set_border("0px none,2px solid #d4d4d4,0px none,0px none");
            obj.set_color("#000000");
            this.div_info.addChild(obj.name, obj);

            obj = new Edit("edt_gymName","156","315","362","35",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("6");
            obj.set_color("#000000");
            obj.set_font("normal 10pt/normal \"맑은 고딕\"");
            obj.set_borderRadius("5px");
            obj.set_cssclass("readonly");
            obj.set_enable("true");
            obj.set_text("");
            this.div_info.addChild(obj.name, obj);

            obj = new Static("sta_gymName00_00_00","30","450","105","129",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("7");
            obj.set_text("상세 설명");
            obj.set_font("normal bold 11pt/normal \"맑은 고딕\"");
            obj.set_border("0px none,2px solid #d4d4d4,0px none,0px none");
            obj.set_color("#000000");
            this.div_info.addChild(obj.name, obj);

            obj = new TextArea("txtArea_Desc","156",null,"362","130",null,"78",null,null,null,null,this.div_info.form);
            obj.set_taborder("8");
            obj.set_scrollbartype("none none");
            obj.set_wordWrap("english");
            obj.set_color("#000000");
            obj.set_font("normal 10pt/normal \"맑은 고딕\"");
            obj.set_borderRadius("5px");
            obj.set_enable("true");
            obj.set_cssclass("readonly");
            obj.set_padding("10px");
            this.div_info.addChild(obj.name, obj);

            obj = new WebView("webPost","30","606","30","28",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("9");
            obj.set_visible("false");
            this.div_info.addChild(obj.name, obj);

            obj = new Button("btn_changeProfile","img_gymPhoto:-50","img_gymPhoto:-50","40","40",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("10");
            obj.set_background("url(\'imagerc::form/editProfile.png\') no-repeat right center /contain #ffffff");
            obj.set_border("0px none");
            obj.set_borderRadius("20px");
            obj.set_enable("true");
            this.div_info.addChild(obj.name, obj);

            obj = new MaskEdit("edt_gymTelNo","156","405","362","35",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("11");
            obj.set_letterSpacing("2px");
            obj.set_border("1px solid #d4d4d4");
            obj.set_borderRadius("5px");
            obj.set_color("#000000");
            obj.set_font("normal 10pt/normal \"맑은 고딕\"");
            obj.set_padding("0px 10px");
            obj.set_textAlign("left");
            obj.set_enable("true");
            obj.set_format("###-####-####");
            obj.set_type("string");
            obj.set_trimtype("both");
            obj.set_cssclass("readonly");
            this.div_info.addChild(obj.name, obj);

            obj = new Button("btn_rewrite","788",null,"80","40",null,"25",null,null,null,null,this.div_info.form);
            obj.set_taborder("12");
            obj.set_text("수정");
            obj.set_background("#000000");
            obj.set_color("#ffffff");
            obj.set_borderRadius("10px");
            obj.set_font("normal 600 11pt/normal \"Arial\"");
            obj.set_visible("true");
            obj.set_enable("true");
            this.div_info.addChild(obj.name, obj);

            obj = new Grid("grd_machineList",null,"25","330","553","30",null,null,null,null,null,this.div_info.form);
            obj.set_taborder("13");
            obj.set_binddataset("ds_gymMachineInfo");
            obj.set_autofittype("col");
            obj.set_borderRadius("5px");
            obj.set_border("1px solid #d5d5d5");
            obj.set_fastvscrolltype("default");
            obj.set_scrollbartype("autoindicator autoindicator");
            obj.set_autosizingtype("none");
            obj.set_extendsizetype("row");
            obj.set_enable("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"50\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"25\"/></Rows><Band id=\"head\"><Cell text=\"기구 이름\" color=\"#000000\"/><Cell col=\"1\" text=\"보유 여부\" color=\"#000000\"/></Band><Band id=\"body\"><Cell text=\"bind:MACHINE_NAME\" color=\"#000000\" padding=\"0px 0px 0px 10px\" border=\"1px solid #d4d4d4\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" border=\"1px solid #d4d4d4\" checkboxtruevalue=\"Y\" checkboxfalsevalue=\"N\" text=\"bind:IS_OWNED\"/></Band></Format></Formats>");
            this.div_info.addChild(obj.name, obj);

            obj = new Div("div_successMachine","Static00:-265","Static00:-350","530","700",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("#efefef");
            obj.set_border("1px solid #000000");
            obj.set_borderRadius("20px");
            obj.set_boxShadow("0px 0px 15px 0px rgba(0,0,0,0.41)");
            obj.set_visible("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_background","10","10",null,null,"10","10",null,null,null,null,this.div_successMachine.form);
            obj.set_taborder("0");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px");
            obj.set_text("");
            this.div_successMachine.addChild(obj.name, obj);

            obj = new Button("btn_reUpload",null,null,"140","50","118","40",null,null,null,null,this.div_successMachine.form);
            obj.set_taborder("1");
            obj.set_text("재신청");
            obj.set_borderRadius("10px");
            obj.set_visible("true");
            obj.set_enable("true");
            obj.set_cssclass("GB_Login");
            obj.set_font("normal 600 12pt/normal \"Arial\"");
            this.div_successMachine.addChild(obj.name, obj);

            obj = new ImageViewer("img_success","190","80","150","150",null,null,null,null,null,null,this.div_successMachine.form);
            obj.set_taborder("2");
            obj.set_stretch("fixaspectratio");
            obj.set_image("url(\'imagerc::form/reject.png\')");
            obj.set_background("transparent");
            obj.set_border("0px none");
            this.div_successMachine.addChild(obj.name, obj);

            obj = new Static("sta_text1","10","236",null,"50","10",null,null,null,null,null,this.div_successMachine.form);
            obj.set_taborder("3");
            obj.set_text("헬스장 등록 신청이 반려되었습니다.");
            obj.set_textAlign("center");
            obj.set_font("normal 600 15pt/normal \"맑은 고딕\"");
            obj.set_color("#000000");
            this.div_successMachine.addChild(obj.name, obj);

            obj = new Static("sta_text2","10","291",null,"105","10",null,null,null,null,null,this.div_successMachine.form);
            obj.set_taborder("4");
            obj.set_text("운영팀 검토 결과, 제출하신 헬스장 정보에\r\n수정이 필요한 부분이 확인되었습니다.\n\r\n아래 반려 사유를 확인하신 후,\r\n내용을 수정하여 다시 신청해 주시기 바랍니다.");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 500 11pt/normal \"맑은 고딕\"");
            obj.set_color("#000000");
            this.div_successMachine.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,"608","140",null,"268","40",null,null,null,null,this.div_successMachine.form);
            obj.set_taborder("5");
            obj.set_text("로그인 화면으로");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            obj.set_borderRadius("10px");
            obj.set_font("normal 600 12pt/normal \"Arial\"");
            obj.set_visible("true");
            obj.set_enable("true");
            this.div_successMachine.addChild(obj.name, obj);

            obj = new Static("sta_rejectReason","20","450",null,null,"20","109",null,null,null,null,this.div_successMachine.form);
            obj.set_taborder("6");
            obj.set_border("1px solid #d4d4d4");
            obj.set_borderRadius("5px");
            obj.set_color("#000000");
            obj.set_font("normal 500 12pt/normal \"맑은 고딕\"");
            obj.set_padding("10px");
            obj.set_textAlign("left");
            obj.set_wordWrap("english");
            obj.set_letterSpacing("1px");
            obj.set_verticalAlign("top");
            this.div_successMachine.addChild(obj.name, obj);

            obj = new Static("sta_rejectDate","20",null,"232","30",null,"sta_rejectReason:0",null,null,null,null,this.div_successMachine.form);
            obj.set_taborder("7");
            obj.set_font("normal 500 12pt/normal \"맑은 고딕\"");
            obj.set_color("#000000");
            obj.set_padding("0px 0px 0px 10px");
            this.div_successMachine.addChild(obj.name, obj);

            obj = new Div("div_successReUpload","Static00:-265","Static00:-350","530","700",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("#efefef");
            obj.set_border("1px solid #000000");
            obj.set_borderRadius("20px");
            obj.set_boxShadow("0px 0px 15px 0px rgba(0,0,0,0.41)");
            obj.set_visible("false");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_background","10","10",null,null,"10","10",null,null,null,null,this.div_successReUpload.form);
            obj.set_taborder("0");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px");
            obj.set_text("");
            this.div_successReUpload.addChild(obj.name, obj);

            obj = new Button("btn_gotoLogin",null,null,"140","50","193","40",null,null,null,null,this.div_successReUpload.form);
            obj.set_taborder("1");
            obj.set_text("로그인 화면으로");
            obj.set_borderRadius("10px");
            obj.set_visible("true");
            obj.set_enable("true");
            obj.set_cssclass("GB_Login");
            obj.set_font("normal 600 13pt/normal \"Arial\"");
            this.div_successReUpload.addChild(obj.name, obj);

            obj = new ImageViewer("img_success","190","80","150","150",null,null,null,null,null,null,this.div_successReUpload.form);
            obj.set_taborder("2");
            obj.set_stretch("fixaspectratio");
            obj.set_image("url(\'imagerc::form/reUpload.png\')");
            obj.set_background("transparent");
            obj.set_border("0px none");
            this.div_successReUpload.addChild(obj.name, obj);

            obj = new Static("sta_text1","10","266",null,"60","10",null,null,null,null,null,this.div_successReUpload.form);
            obj.set_taborder("3");
            obj.set_text("재승인 요청이 정상적으로 접수되었습니다.");
            obj.set_textAlign("center");
            obj.set_font("normal 600 15pt/normal \"맑은 고딕\"");
            obj.set_color("#000000");
            this.div_successReUpload.addChild(obj.name, obj);

            obj = new Static("sta_text2","10","341",null,"198","10",null,null,null,null,null,this.div_successReUpload.form);
            obj.set_taborder("4");
            obj.set_text("헬스장 정보가 성공적으로 수정되어\r\n\r\n다시 승인 대기 상태가 되었습니다.\r\n\r\n\r\n꼼꼼하게 검토한 후, 좋은 소식으로 찾아뵙겠습니다.\r\n\r\n다시 한번 신청해주셔서 감사합니다.");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 500 12pt/normal \"맑은 고딕\"");
            obj.set_color("#000000");
            this.div_successReUpload.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_info.form
            obj = new Layout("default","",0,0,this.div_info.form,function(p){});
            this.div_info.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_successMachine.form
            obj = new Layout("default","",0,0,this.div_successMachine.form,function(p){});
            this.div_successMachine.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_successReUpload.form
            obj = new Layout("default","",0,0,this.div_successReUpload.form,function(p){});
            this.div_successReUpload.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_info.form.img_gymPhoto","image","ds_gymInfo","IMG_PATH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_info.form.edt_gymName","value","ds_gymInfo","GYM_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_info.form.edt_post","value","ds_gymInfo","ADDRESS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_info.form.txtArea_Desc","value","ds_gymInfo","DESCRIPTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_info.form.edt_gymTelNo","value","ds_gymInfo","TEL_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_successMachine.form.sta_rejectReason","text","ds_rejectReason","MESSAGE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("gybs3212fm.xfdl", function() {
        this.fvApp = nexacro.getApplication();
        this.sUploadUrl = this.gfnGetServerUrl() + "upload/p01/p014/";

        this.gybs3212fm_onload = function(obj,e)
        {
        	var strSvcUrl = "p014/getRejectReason.do";
        	var inData    = "";
        	var outData   = "ds_rejectReason=ds_rejectReason";
        	var strArg    = "paramCode=" + this.fvApp.gds_accountInfo.getColumn(0, "GYM_CODE");

        	this.gfnTransaction("getRejectReason", strSvcUrl, inData, outData, strArg, "fnCallback", true);
        };

        this.btn_searchPost_onclick = function(obj,e)
        {
        	this.gfnPostSearchDaum(this.div_info.form.webPost);
        };

        this.WebPost_onusernotify = function(obj,e)
        {
        	var strPost = e.userdata;
        	trace("strPost ==> " + strPost);
        	if (strPost.indexOf("OK!!!:::") == 0) {
        		var aAddr = strPost.split(":::");
        		/*
        		trace("onusernotify -------------------------------------------");
        		trace("array[1]=>구우편번호 앞 3자리          ==> " +	aAddr[1] );
        		trace("array[2]=>구우편번호 뒷 3자리          ==> " +	aAddr[2] );
        		trace("array[3]=>신규우편번호                  ==> " +  aAddr[3] );
        		trace("array[4]=>도로명주소                    ==> " +	aAddr[4] );
        		trace("array[5]=>지번주소                      ==> " +	aAddr[5] );
        		trace("array[6]=>조합형 주소여부에 따른 주소	==> " +	aAddr[6] );
        		trace("-------------------------------------------------------");
        		*/
        		this.div_info.form.edt_post.value = aAddr[6];	// 조합형 주소여부에 따른 주소
        	}
        };

        this.div_info_btn_changeProfile_onclick = function(obj,e)
        {
        	this.dsUser.clearData();
        	this.FileDialog00.open("프로필 사진 선택", 1, "%DOCUMENT%");
        };

        this.FileDialog00_onclose = function(obj,e)
        {
        	var objFile = e.virtualfiles[0];
        	var sFileName = objFile.filename;

        	if (!/\.(jpe?g|png|gif)$/i.test(sFileName)) // 정규식으로 파일 유형 체크
        	{
        		this.gfnAlert("msg.err.no.img.select", "", "msg.err.no.img.select", "fnMsgCallback");
        		return;
        	}

        	this.FileUpTransfer00.clearFileList();
        	this.FileUpTransfer00.addFile(sFileName, objFile);
        	var nRow = this.dsUser.addRow();
        	this.dsUser.setColumn(nRow, "IMAGE_ID", sFileName);
        	this.dsUser.setColumn(nRow, "IMAGE_NAME", sFileName);

        	if (nexacro._Browser == "Runtime") {
        		// NRE
        		this.div_info.form.img_gymPhoto.image = "URL('file://" + objFile.fullpath + "')";
        	}
        	else {
        		// NRE 아닐 때 (웹 브라우저)
        		var reader = new FileReader();
        		reader.targetForm = this;
        		reader.addEventListener("load"
        								,function() {
        									this.targetForm.div_info.form.img_gymPhoto.image = this.result;
        								}
        								,false);
        		reader.readAsDataURL(objFile._handle);
        		// 파일을 base64 형태로 읽기
        	}
        	var sUrl = "SvcUrl::edu/uploadFile.do";
        	this.FileUpTransfer00.setPostData("userDir", "");
        	this.FileUpTransfer00.upload(sUrl);
        };

        this.FileUpTransfer00_onsuccess = function(obj,e)
        {
        	var objDs = e.datasets[0];
        	this.dsUser.setColumn(0,"IMAGE_ID", objDs.getColumn(0, "file_id"));

        	var sImg = this.sUploadUrl + this.dsUser.getColumn(0, "IMAGE_ID");
        	this.div_info.form.img_gymPhoto.image = sImg;
        	this.ds_gymInfo.setColumn(0, "IMG_PATH", sImg);
        };
        this.btn_saveInfo_onclick = function(obj,e)
        {
        	// 빈 칸이 있는지 체크
        	// 빈 항목이 있을 시 반환
        	if (this.checkNull()) {
        		return;
        	}
        	else {
        		// 새로운 헬스장 정보로 데이터셋(ds_gymInfo), 서버에 저장
        		this.fnUpdateNewGymInfo();
        	}
        };

        this.checkNull = function()
        {
        	var sPhoneNo = this.div_info.form.edt_gymTelNo.value;

        	if (this.gfnIsNull(this.div_info.form.edt_gymName.value) ||
        		this.gfnIsNull(this.div_info.form.edt_post.value) ||
        		this.gfnIsNull(this.div_info.form.edt_gymTelNo.value) ||
        		this.gfnIsNull(this.div_info.form.txtArea_Desc.value)) {
        		this.gfnAlert("msg.err.enter.alldata", "", "msg.err.enter.alldata", "fnMsgCallback");
        		return true
        	}
        	else if (sPhoneNo.length < 11) {
        		this.gfnAlert("msg.err.wrong.phone", "", "msg.err.wrong.phone", "fnMsgCallback");
        		return true;
        	}
        	else return false;
        };

        this.fnUpdateNewGymInfo = function ()
        {
        	var strSvcUrl = "p014/reUploadGymInfo.do";
        	var inData    = "ds_gymInfo=ds_gymInfo ds_gymMachineInfo=ds_gymMachineInfo";
        	var outData   = "";
        	var strArg    = "paramCode=" + this.fvApp.gds_accountInfo.getColumn(0, "GYM_CODE");

        	this.gfnTransaction("reUploadGymInfo", strSvcUrl, inData, outData, strArg, "fnCallback", true);
        };
        this.div_successMachine_btn_reUpload_onclick = function(obj,e)
        {
        	var strSvcUrl = "p014/getMyGymInfo.do";
        	var inData    = "";
        	var outData   = "ds_gymInfo=ds_gymInfo ds_gymMachineInfo=ds_gymMachineInfo";
        	var strArg    = "paramID=" + this.fvApp.gds_accountInfo.getColumn(0, "ID");

        	this.gfnTransaction("getMyGymInfo", strSvcUrl, inData, outData, strArg, "fnCallback", true);
        };

        this.div_successMachine_btn_cancel_onclick = function(obj,e)
        {
        	this.fvApp.mainframe.Main.formurl = "AboutAccount::gybs1010fm.xfdl";
        };

        this.fnCallback = function(svcId, errCd, errMsg) {
        	if (svcId == "getMyGymInfo") {
        		this.div_successMachine.visible = false;
        		this.div_info.visible = true;
        	}
        	else if (svcId == "getRejectReason") {
        		this.div_successMachine.form.sta_rejectDate.text = "반려 일자 : " + this.ds_rejectReason.getColumn(0, "REJECT_DATE");
        	}
        	else if (svcId == "reUploadGymInfo") {
        		// 재신청 성공 로직
        		this.div_info.visible = false;
        		this.div_successReUpload.visible = true;
        	}
        }
        this.div_successReUpload_btn_gotoLogin_onclick = function(obj,e)
        {
        	this.fvApp.mainframe.Main.formurl = "AboutAccount::gybs1010fm.xfdl";
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.gybs3212fm_onload,this);
            this.div_info.form.btn_searchPost.addEventHandler("onclick",this.btn_searchPost_onclick,this);
            this.div_info.form.webPost.addEventHandler("onusernotify",this.WebPost_onusernotify,this);
            this.div_info.form.btn_changeProfile.addEventHandler("onclick",this.div_info_btn_changeProfile_onclick,this);
            this.div_info.form.btn_rewrite.addEventHandler("onclick",this.btn_saveInfo_onclick,this);
            this.div_info.form.grd_machineList.addEventHandler("onexpandup",this.div_info_grd_machineList_onexpandup,this);
            this.div_successMachine.form.sta_background.addEventHandler("onclick",this.div_machine_sta_background_onclick,this);
            this.div_successMachine.form.btn_reUpload.addEventHandler("onclick",this.div_successMachine_btn_reUpload_onclick,this);
            this.div_successMachine.form.btn_cancel.addEventHandler("onclick",this.div_successMachine_btn_cancel_onclick,this);
            this.div_successReUpload.form.sta_background.addEventHandler("onclick",this.div_machine_sta_background_onclick,this);
            this.div_successReUpload.form.btn_gotoLogin.addEventHandler("onclick",this.div_successReUpload_btn_gotoLogin_onclick,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
            this.FileDialog00.addEventHandler("onclose",this.FileDialog00_onclose,this);
            this.dsUser.addEventHandler("onrowposchanged",this.dsUser_onrowposchanged,this);
        };
        this.loadIncludeScript("gybs3212fm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
