(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("gybs2014fm");
            this.set_titletext("마이페이지");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,920);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_accountInfo", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "ID","type" : "STRING","size" : "256"},{"id" : "PW","type" : "STRING","size" : "256"},{"id" : "NAME","type" : "STRING","size" : "256"},{"id" : "PHONE_NO","type" : "STRING","size" : "256"},{"id" : "ROLE_TYPE","type" : "STRING","size" : "256"},{"id" : "GYM_CODE","type" : "STRING","size" : "256"},{"id" : "PROFILE_PATH","type" : "STRING","size" : "256"}]},"Rows" : [{}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUser", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "IMAGE_ID","type" : "STRING","size" : "256"},{"id" : "IMAGE_NAME","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog00", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_info","60","175",null,"570","60",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #000000");
            obj.set_borderRadius("20px");
            this.addChild(obj.name, obj);

            obj = new Div("div_accountInfo","20","20","600",null,null,"20",null,null,null,null,this.div_info.form);
            obj.set_taborder("1");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #d4d4d4");
            obj.set_borderRadius("10px");
            obj.set_text("");
            this.div_info.addChild(obj.name, obj);

            obj = new Edit("edt_name","218","262","350","50",null,null,null,null,null,null,this.div_info.form.div_accountInfo.form);
            obj.set_taborder("0");
            obj.set_borderRadius("10px");
            obj.set_border("1px solid #d4d4d4");
            obj.set_enable("false");
            obj.set_padding("0px 20px");
            obj.set_textAlign("left");
            obj.set_color("#000000");
            obj.set_font("normal 13pt/normal \"Arial\"");
            obj.set_letterSpacing("1px");
            this.div_info.form.div_accountInfo.addChild(obj.name, obj);

            obj = new Edit("edt_ID","218","62","350","50",null,null,null,null,null,null,this.div_info.form.div_accountInfo.form);
            obj.set_taborder("1");
            obj.set_borderRadius("10px");
            obj.set_border("1px solid #d4d4d4");
            obj.set_enable("false");
            obj.set_padding("0px 20px");
            obj.set_textAlign("left");
            obj.set_color("#000000");
            obj.set_font("normal 13pt/normal \"Arial\"");
            obj.set_letterSpacing("1px");
            obj.set_tooltiptype("hover,mouseleave");
            obj.set_tooltiptext("아이디는 변경할 수 없습니다.");
            this.div_info.form.div_accountInfo.addChild(obj.name, obj);

            obj = new Edit("edt_PW","218","162","350","50",null,null,null,null,null,null,this.div_info.form.div_accountInfo.form);
            obj.set_taborder("2");
            obj.set_borderRadius("10px");
            obj.set_border("1px solid #d4d4d4");
            obj.set_enable("false");
            obj.set_padding("0px 50px 0px 20px");
            obj.set_textAlign("left");
            obj.set_color("#000000");
            obj.set_font("normal 13pt/normal \"Arial\"");
            obj.set_password("true");
            obj.set_letterSpacing("1px");
            this.div_info.form.div_accountInfo.addChild(obj.name, obj);

            obj = new Static("sta_names","218","222","120",null,null,"edt_name:0",null,null,null,null,this.div_info.form.div_accountInfo.form);
            obj.set_taborder("4");
            obj.set_text("이름");
            obj.set_font("normal 600 14pt/normal \"Arial\"");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_color("#000000");
            this.div_info.form.div_accountInfo.addChild(obj.name, obj);

            obj = new Static("sta_IDs","218","22","120",null,null,"edt_ID:0",null,null,null,null,this.div_info.form.div_accountInfo.form);
            obj.set_taborder("5");
            obj.set_text("아이디");
            obj.set_font("normal 600 14pt/normal \"Arial\"");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_color("#000000");
            this.div_info.form.div_accountInfo.addChild(obj.name, obj);

            obj = new Static("sta_PWs","218","122","120",null,null,"edt_PW:0",null,null,null,null,this.div_info.form.div_accountInfo.form);
            obj.set_taborder("6");
            obj.set_text("비밀번호");
            obj.set_font("normal 600 14pt/normal \"Arial\"");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_color("#000000");
            this.div_info.form.div_accountInfo.addChild(obj.name, obj);

            obj = new Static("sta_phoneNos","218","322","120",null,null,"164",null,null,null,null,this.div_info.form.div_accountInfo.form);
            obj.set_taborder("7");
            obj.set_text("전화번호");
            obj.set_font("normal 600 14pt/normal \"Arial\"");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_color("#000000");
            this.div_info.form.div_accountInfo.addChild(obj.name, obj);

            obj = new ImageViewer("img_profile","30","141","150","150",null,null,null,null,null,null,this.div_info.form.div_accountInfo.form);
            obj.set_taborder("8");
            obj.set_background("transparent");
            obj.set_image("url(\'imagerc::form/profileIcon.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_borderRadius("500px");
            obj.set_border("1px solid black");
            obj.set_text("");
            this.div_info.form.div_accountInfo.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,"453","80","45","120",null,null,null,null,null,this.div_info.form.div_accountInfo.form);
            obj.set_taborder("9");
            obj.set_text("취소");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            obj.set_borderRadius("10px");
            obj.set_font("normal 600 11pt/normal \"Arial\"");
            obj.set_visible("false");
            obj.set_enable("false");
            this.div_info.form.div_accountInfo.addChild(obj.name, obj);

            obj = new Button("btn_saveInfo",null,"453","80","45","30",null,null,null,null,null,this.div_info.form.div_accountInfo.form);
            obj.set_taborder("10");
            obj.set_text("저장");
            obj.set_background("#000000");
            obj.set_color("#ffffff");
            obj.set_borderRadius("10px");
            obj.set_font("normal 600 11pt/normal \"Arial\"");
            obj.set_visible("false");
            obj.set_enable("false");
            this.div_info.form.div_accountInfo.addChild(obj.name, obj);

            obj = new Button("btn_rewrite",null,"453","128","45","30",null,null,null,null,null,this.div_info.form.div_accountInfo.form);
            obj.set_taborder("11");
            obj.set_text("수정");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            obj.set_borderRadius("10px");
            obj.set_edge("");
            obj.set_font("normal 600 11pt/normal \"Arial\"");
            obj.set_padding("0px 0px 0px 25px");
            this.div_info.form.div_accountInfo.addChild(obj.name, obj);

            obj = new ImageViewer("img_rewrite",null,"btn_rewrite:-40","35","35","btn_rewrite:-42",null,null,null,null,null,this.div_info.form.div_accountInfo.form);
            obj.set_taborder("12");
            obj.set_border("0px none");
            obj.set_image("url(\'imagerc::form/rewrite.png\')");
            obj.set_stretch("fixaspectratio");
            this.div_info.form.div_accountInfo.addChild(obj.name, obj);

            obj = new Button("btn_showPW","edt_PW:-50","edt_PW:-40","30","30",null,null,null,null,null,null,this.div_info.form.div_accountInfo.form);
            obj.set_taborder("13");
            obj.set_cssclass("rememberPW");
            obj.set_text("");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.set_background("transparent");
            this.div_info.form.div_accountInfo.addChild(obj.name, obj);

            obj = new MaskEdit("edt_phoneNo","218","362","350","50",null,null,null,null,null,null,this.div_info.form.div_accountInfo.form);
            obj.set_taborder("3");
            obj.set_letterSpacing("2px");
            obj.set_border("1px solid #d4d4d4");
            obj.set_borderRadius("10px");
            obj.set_color("#000000");
            obj.set_font("normal 13pt/normal \"Arial\"");
            obj.set_padding("0px 20px");
            obj.set_textAlign("left");
            obj.set_enable("false");
            obj.set_format("###-####-####");
            obj.set_type("string");
            obj.set_trimtype("both");
            this.div_info.form.div_accountInfo.addChild(obj.name, obj);

            obj = new Button("btn_changeProfile","img_profile:-42","img_profile:-39","40","40",null,null,null,null,null,null,this.div_info.form.div_accountInfo.form);
            obj.set_taborder("14");
            obj.set_background("url(\'imagerc::form/editProfile.png\') no-repeat right center /contain #ffffff");
            obj.set_border("0px none");
            obj.set_borderRadius("20px");
            obj.set_enable("false");
            obj.set_text("");
            this.div_info.form.div_accountInfo.addChild(obj.name, obj);

            obj = new Static("sta_defaultProfile","45","img_profile:10","120","23",null,null,null,null,null,null,this.div_info.form.div_accountInfo.form);
            obj.set_taborder("15");
            obj.set_text("기본 프로필로 변경");
            obj.set_color("#000cac");
            obj.set_textAlign("center");
            obj.set_enable("false");
            this.div_info.form.div_accountInfo.addChild(obj.name, obj);

            obj = new Div("div_membership","div_accountInfo:20","20",null,null,"20","20",null,null,null,null,this.div_info.form);
            obj.set_taborder("1");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #d4d4d4");
            obj.set_borderRadius("10px");
            obj.set_url("UserForms::gybs2412fm.xfdl");
            this.div_info.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_info.form.div_accountInfo.form
            obj = new Layout("default","",0,0,this.div_info.form.div_accountInfo.form,function(p){});
            this.div_info.form.div_accountInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_info.form.div_membership
            obj = new Layout("default","",0,0,this.div_info.form.div_membership.form,function(p){});
            this.div_info.form.div_membership.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_info.form
            obj = new Layout("default","",0,0,this.div_info.form,function(p){});
            this.div_info.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,920,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item4","div_info.form.div_accountInfo.form.img_profile","image","gds_accountInfo","PROFILE_PATH");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","UserForms::gybs2412fm.xfdl");
        };
        
        // User Script
        this.registerScript("gybs2014fm.xfdl", function() {
        this.fvApp = nexacro.getApplication();
        this.sUploadUrl = this.gfnGetServerUrl() + "upload/p01/p014/";
        this.isChangedProfile = false;
        this.isImgSelected = false;

        this.gybs2014fm_onload = function(obj,e)
        {
        	this.fnGetDefaultInfo();
        };

        // 수정모드 활성화
        this.div_info_div_accountInfo_btn_rewrite_onclick = function(obj,e)
        {
        	// edit 활성화
        	this.fnEditActivate();
        };

        // 저장
        this.div_info_div_accountInfo_btn_saveInfo_onclick = function(obj,e)
        {
        	// 빈 항목이 있을 시 반환
        	if (this.checkNull()) {
        		return;
        	}
        	else {
        		// 새로운 정보로 전역 데이터셋, 서버에 저장
        		this.fnSetNewInfo();
        		// edit 비활성화
        		this.fnEditUnActivate();
        	}
        };

        // 취소
        this.div_info_div_accountInfo_btn_cancel_onclick = function(obj,e)
        {
        	// 기존 변경되지 않은 전역데이터셋 정보로 다시 덮어쓰기
        	this.fnGetDefaultInfo();
        	// edit 비활성화
        	this.fnEditUnActivate();
        	// 사진 변경 여부 false로 변경
        	this.isChangedProfile = false;
        };

        this.div_info_div_accountInfo_btn_changeProfile_onclick = function(obj,e)
        {
        	this.dsUser.clearData();
        	this.FileDialog00.open("프로필 사진 선택", 1, "%DOCUMENT%");
        };

        this.FileDialog00_onclose = function(obj,e)
        {
        	this.isChangedProfile = true;
        	var objFile = e.virtualfiles[0];
        	var sFileName = objFile.filename;

        	if (!/\.(jpe?g|png|gif)$/i.test(sFileName)) // 정규식으로 파일 유형 체크
        	{
        		this.isImgSelected = true;
        		trace("이미지를 안 골랐을 때 >>>>>>> " + this.isImgSelected);
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
        		this.div_info.form.div_accountInfo.form.img_profile.image = "URL('file://" + objFile.fullpath + "')";
        	}
        	else {
        		// NRE 아닐 때 (웹 브라우저)
        		var reader = new FileReader();
        		reader.targetForm = this;
        		reader.addEventListener("load"
        								,function() {
        									this.targetForm.div_info.form.div_accountInfo.form.img_profile.image = this.result;
        								}
        								,false);
        		reader.readAsDataURL(objFile._handle);
        		// 파일을 base64 형태로 읽기
        	}
        	var sUrl = "SvcUrl::edu/uploadFile.do";
        	this.FileUpTransfer00.setPostData("userDir", "");
        	this.FileUpTransfer00.upload(sUrl);

        	this.isImgSelected = false;
        	trace("FileDialog 닫을 때 >>>>>>> " + this.isImgSelected);
        };

        this.FileUpTransfer00_onsuccess = function(obj,e)
        {
        	var objDs = e.datasets[0];
        	this.dsUser.setColumn(0,"IMAGE_ID", objDs.getColumn(0, "file_id"));
        };


        /////////////////////////////[함수]/////////////////////////////////

        // 비어있는/옳지않은 항목 체크
        this.checkNull = function ()
        {
        	var sPhoneNo = this.div_info.form.div_accountInfo.form.edt_phoneNo.value;

        	if (this.gfnIsNull(this.div_info.form.div_accountInfo.form.edt_name.value) ||
        		this.gfnIsNull(this.div_info.form.div_accountInfo.form.edt_PW.value) ||
        		this.gfnIsNull(this.div_info.form.div_accountInfo.form.edt_phoneNo.value)) {
        		this.gfnAlert("msg.err.enter.alldata", "", "msg.err.enter.alldata", "fnMsgCallback");
        		return true
        	}
        	else if (sPhoneNo.length < 11) {
        		this.gfnAlert("msg.err.wrong.phone", "", "msg.err.wrong.phone", "fnMsgCallback");
        		return true;
        	}
        	else return false;
        };

        // 새로운 정보 전역 데이터 셋에 저장 후 트래잭션으로 정보 업데이트
        this.fnSetNewInfo = function ()
        {
        	this.fvApp.gds_accountInfo.setColumn(0, "NAME", this.div_info.form.div_accountInfo.form.edt_name.value);
        	this.fvApp.gds_accountInfo.setColumn(0, "PW", this.div_info.form.div_accountInfo.form.edt_PW.value);
        	this.fvApp.gds_accountInfo.setColumn(0, "PHONE_NO", this.div_info.form.div_accountInfo.form.edt_phoneNo.value);

        	// 프로필 변경됐으면 이 정보도 전송
        	if (this.isChangedProfile == true && this.dsUser.rowcount == 1) { // 사진이 변경되고 등록까지 된 경우

        		// 번경된 사진을 전역 데이터셋과 서버에 전송
        		var sImg = this.sUploadUrl + this.dsUser.getColumn(0, "IMAGE_ID");
        		this.fvApp.gds_accountInfo.setColumn(0, "PROFILE_PATH", sImg);

        		this.isChangedProfile = false;
        		this.dsUser.clearData();
        	}
        	// 기본 프로필로 변경됐으면 기본 프로필 적용
        	else if (this.isChangedProfile == true && this.dsUser.rowcount == 0) {
        		this.fvApp.gds_accountInfo.setColumn(0, "PROFILE_PATH", "imagerc::form/profileIcon.png");
        		this.isChangedProfile = false;
        	}

        	// 변경사항 div_haeder에도 적용
        	this.parent.parent.fnResetInfo();

        	this.ds_accountInfo.copyData(this.fvApp.gds_accountInfo);

        	var strSvcUrl = "p014/updateAccountInfo.do";
        	var inData    = "ds_accountInfo=ds_accountInfo";
        	var outData   = "";
        	var strArg    = "";

        	this.gfnTransaction("updateAccountInfo", strSvcUrl, inData, outData, strArg, "fnCallback", true);
        };

        // 기존 데이터로 복구
        this.fnGetDefaultInfo = function ()
        {
        	this.div_info.form.div_accountInfo.form.edt_ID.value = this.fvApp.gds_accountInfo.getColumn(0, "ID");
        	this.div_info.form.div_accountInfo.form.edt_name.value = this.fvApp.gds_accountInfo.getColumn(0, "NAME");
        	this.div_info.form.div_accountInfo.form.edt_PW.value = this.fvApp.gds_accountInfo.getColumn(0, "PW");
        	this.div_info.form.div_accountInfo.form.edt_phoneNo.value = this.fvApp.gds_accountInfo.getColumn(0, "PHONE_NO");
        	this.div_info.form.div_accountInfo.form.img_profile.image = this.fvApp.gds_accountInfo.getColumn(0, "PROFILE_PATH");
        };

        // 수정모드
        this.fnEditActivate = function()
        {
        	this.div_info.form.div_accountInfo.form.btn_changeProfile.backgroun
        	this.div_info.form.div_accountInfo.form.btn_saveInfo.visible = true;
        	this.div_info.form.div_accountInfo.form.btn_saveInfo.enable = true;
        	this.div_info.form.div_accountInfo.form.btn_cancel.visible = true;
        	this.div_info.form.div_accountInfo.form.btn_cancel.enable = true;
        	this.div_info.form.div_accountInfo.form.btn_rewrite.visible = false;
        	this.div_info.form.div_accountInfo.form.btn_rewrite.enable = false;
        	this.div_info.form.div_accountInfo.form.img_rewrite.visible = false;
        	this.div_info.form.div_accountInfo.form.btn_showPW.visible = true;
        	this.div_info.form.div_accountInfo.form.btn_showPW.enable = true;
        	this.div_info.form.div_accountInfo.form.sta_defaultProfile.enable = true;

        	this.div_info.form.div_accountInfo.form.edt_name.enable = true;
        	this.div_info.form.div_accountInfo.form.edt_PW.enable = true;
        	this.div_info.form.div_accountInfo.form.edt_phoneNo.enable = true;
        	this.div_info.form.div_accountInfo.form.btn_changeProfile.enable = true;
        }

        // 수정모드 해제
        this.fnEditUnActivate = function ()
        {
        	this.div_info.form.div_accountInfo.form.btn_saveInfo.visible = false;
        	this.div_info.form.div_accountInfo.form.btn_saveInfo.enable = false;
        	this.div_info.form.div_accountInfo.form.btn_cancel.visible = false;
        	this.div_info.form.div_accountInfo.form.btn_cancel.enable = false;
        	this.div_info.form.div_accountInfo.form.btn_rewrite.visible = true;
        	this.div_info.form.div_accountInfo.form.btn_rewrite.enable = true;
        	this.div_info.form.div_accountInfo.form.img_rewrite.visible = true;
        	this.div_info.form.div_accountInfo.form.btn_showPW.visible = false;
        	this.div_info.form.div_accountInfo.form.btn_showPW.enable = false;
        	this.div_info.form.div_accountInfo.form.btn_showPW.cssclass = "rememberPW";
        	this.div_info.form.div_accountInfo.form.sta_defaultProfile.enable = false;

        	this.div_info.form.div_accountInfo.form.edt_name.enable = false;
        	this.div_info.form.div_accountInfo.form.edt_PW.enable = false;
        	this.div_info.form.div_accountInfo.form.edt_phoneNo.enable = false;
        	this.div_info.form.div_accountInfo.form.edt_PW.password = true;
        	this.div_info.form.div_accountInfo.form.btn_changeProfile.enable = false;
        };

        // 비밀번호 보기 활성화/비활성화
        this.div_info_div_accountInfo_btn_showPW_onclick = function(obj,e)
        {
        	var btnClass = obj.cssclass == "rememberPW" ? "rememberPW_S" : "rememberPW";
        	obj.cssclass = btnClass;
        	var showPW = (obj.cssclass == "rememberPW" ? true : false);
        	this.div_info.form.div_accountInfo.form.edt_PW.password = showPW;
        };


        this.div_info_div_accountInfo_onkillfocus = function(obj,e)
        {
        	trace("onkillfocus 실행될 때 >>>>>>> " + this.isImgSelected);
        	if (this.isImgSelected == true) {
        		return;
        	}
        	// 수정 모드가 활성화 되어있는 상태라면
        	if (this.div_info.form.div_accountInfo.form.btn_rewrite.visible == false) {
        		this.gfnAlert("confirm.save.current", "", "confirm.save.current", "fnMsgCallback");
        	}
        };

        this.fnMsgCallback = function (strId, strVal)
        {
        	if (strId == "confirm.save.current") {
        		if (strVal == true) {
        			this.div_info_div_accountInfo_btn_saveInfo_onclick();
        		}
        		else {
        			this.div_info_div_accountInfo_btn_cancel_onclick();
        		}
        	}
        	else if (strId == "msg.err.no.img.select") {
        		this.isImgSelected = false;
        	}
        };

        this.div_info_div_accountInfo_sta_defaultProfile_onclick = function(obj,e)
        {
        	this.div_info.form.div_accountInfo.form.img_profile.image = "imagerc::form/profileIcon.png";
        	this.isChangedProfile = true;
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.gybs2014fm_onload,this);
            this.div_info.form.div_accountInfo.addEventHandler("onkillfocus",this.div_info_div_accountInfo_onkillfocus,this);
            this.div_info.form.div_accountInfo.form.btn_cancel.addEventHandler("onclick",this.div_info_div_accountInfo_btn_cancel_onclick,this);
            this.div_info.form.div_accountInfo.form.btn_saveInfo.addEventHandler("onclick",this.div_info_div_accountInfo_btn_saveInfo_onclick,this);
            this.div_info.form.div_accountInfo.form.btn_rewrite.addEventHandler("onclick",this.div_info_div_accountInfo_btn_rewrite_onclick,this);
            this.div_info.form.div_accountInfo.form.img_rewrite.addEventHandler("onclick",this.div_info_div_accountInfo_btn_rewrite_onclick,this);
            this.div_info.form.div_accountInfo.form.btn_showPW.addEventHandler("onclick",this.div_info_div_accountInfo_btn_showPW_onclick,this);
            this.div_info.form.div_accountInfo.form.btn_changeProfile.addEventHandler("onclick",this.div_info_div_accountInfo_btn_changeProfile_onclick,this);
            this.div_info.form.div_accountInfo.form.sta_defaultProfile.addEventHandler("onclick",this.div_info_div_accountInfo_sta_defaultProfile_onclick,this);
            this.FileDialog00.addEventHandler("onclose",this.FileDialog00_onclose,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
            this.dsUser.addEventHandler("onrowposchanged",this.dsUser_onrowposchanged,this);
        };
        this.loadIncludeScript("gybs2014fm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
