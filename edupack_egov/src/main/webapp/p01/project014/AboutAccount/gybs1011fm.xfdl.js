(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Signup");
            this.set_titletext("회원가입");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_accountInfo", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "ID","type" : "STRING","size" : "256"},{"id" : "PW","type" : "STRING","size" : "256"},{"id" : "NAME","type" : "STRING","size" : "256"},{"id" : "PHONE_NO","type" : "STRING","size" : "256"},{"id" : "ROLE_TYPE","type" : "STRING","size" : "256"},{"id" : "GYM_CODE","type" : "STRING","size" : "256"},{"id" : "PROFILE_PATH","type" : "STRING","size" : "256"}]},"Rows" : [{}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0","50%","50%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_visible("false");
            obj.set_background("#ffe5fe");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","Static00:-175","Static00:-250","350","500",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#efefef");
            obj.set_borderRadius("30px");
            obj.set_text("");
            obj.set_cssclass("loginDiv");
            obj.set_boxShadow("0px 0px 15px 0px rgba(0,0,0,0.41)");
            obj.set_border("2px solid #000000");
            this.addChild(obj.name, obj);

            obj = new Static("sta_background","10","10",null,null,"10","10",null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_background("#ffffff");
            obj.set_borderRadius("20px");
            obj.set_text("");
            obj.set_border("1px solid #d4d4d4");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit_ID","45","85","166","36",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_borderRadius("10px 5px 5px 10px");
            obj.set_padding("0px 0px 0px 15px");
            obj.set_displaynulltext("아이디");
            obj.set_border("1px solid gray");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Btn_Signup","45",null,"190","48",null,"43",null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("가입");
            obj.set_cssclass("GB_Login");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit_PW","45","Edit_ID:25","260","36",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_password("true");
            obj.set_borderRadius("10px");
            obj.set_displaynulltext("비밀번호");
            obj.set_border("1px solid gray");
            obj.set_padding("0px 0px 0px 15px");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Sta_IncorrectID","55","Edit_ID:4","117","15",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("아이디를 입력하십시오.");
            obj.set_font("normal bold 8pt/normal \"Arial\"");
            obj.set_color("red");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Sta_IncorrectPW","55","Edit_PW:4","128","15",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("비밀번호를 입력하십시오.");
            obj.set_font("normal bold 8pt/normal \"Arial\"");
            obj.set_color("red");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Btn_IDCheck","215","85","90","36",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("아이디 중복 확인");
            obj.set_font("normal bold 10px/normal \"Arial\"");
            obj.set_border("1px solid gray");
            obj.set_background("white");
            obj.set_borderRadius("5px 10px 10px 5px");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit_PWCK","45","Edit_PW:25","260","36",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_password("true");
            obj.set_borderRadius("10px");
            obj.set_displaynulltext("비밀번호 확인");
            obj.set_border("1px solid gray");
            obj.set_padding("0px 0px 0px 15px");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Sta_IncorrectPWCK","55","Edit_PWCK:4","153","15",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("비밀번호가 일치하지 않습니다.");
            obj.set_font("normal bold 8pt/normal \"Arial\"");
            obj.set_color("red");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit_Name","45","Edit_PWCK:25","260","36",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_password("false");
            obj.set_borderRadius("10px");
            obj.set_displaynulltext("이름");
            obj.set_border("1px solid gray");
            obj.set_padding("0px 0px 0px 15px");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Sta_IncorrectName","55","Edit_Name:4","128","15",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("이름을 입력하십시오.");
            obj.set_font("normal bold 8pt/normal \"Arial\"");
            obj.set_color("red");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("Msk_PhoneNo","45","Edit_Name:25","260","36",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_border("1px solid gray");
            obj.set_borderRadius("10px");
            obj.set_format("###-####-####");
            obj.set_type("string");
            obj.set_autoselect("true");
            obj.set_trimtype("both");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Sta_IncorrectPhoneNo","55","Msk_PhoneNo:4","128","15",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("번호가 올바르지 않습니다.");
            obj.set_font("normal bold 8pt/normal \"Arial\"");
            obj.set_color("red");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Radio("Rdo_RoleType","45","40","260","19",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_columncount("2");
            obj.set_rowcount("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div00_form_Rdo_RoleType_innerdataset = new nexacro.NormalDataset("Div00_form_Rdo_RoleType_innerdataset", obj);
            Div00_form_Rdo_RoleType_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "Admin","datacolumn" : "관리자"},{"codecolumn" : "User","datacolumn" : "사용자"}]});
            obj.set_innerdataset(Div00_form_Rdo_RoleType_innerdataset);
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Sta_IncorrectRoleType","55","Rdo_RoleType:4","131","15",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("계정 유형을 선택하십시오.");
            obj.set_font("normal bold 8pt/normal \"Arial\"");
            obj.set_color("red");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_cancel","Btn_Signup:5",null,null,"48","45","43",null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("취소");
            obj.set_cssclass("GB_Cancel");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Sta_IncorrectIDCkeck","55","125","145","15",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_text("아이디 중복 확인을 하십시오.");
            obj.set_font("normal bold 8pt/normal \"Arial\"");
            obj.set_color("red");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.Rdo_RoleType","value","ds_accountInfo","ROLE_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.Edit_ID","value","ds_accountInfo","ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.Edit_PW","value","ds_accountInfo","PW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.Edit_Name","value","ds_accountInfo","NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00.form.Msk_PhoneNo","value","ds_accountInfo","PHONE_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("gybs1011fm.xfdl", function() {
        this.fvApp = nexacro.getApplication();
        this.idCheckYn = "N";

        this.Div00_Edit_PWCK_onkillfocus = function(obj,e)
        {
        	var PW = this.Div00.form.Edit_PW.value;
        	if (obj.value != PW) {
        		obj.border = "1px solid red";
        		this.Div00.form.Sta_IncorrectPWCK.visible = true;
        	}
        	else {
        		obj.border = "1px solid gray";
        		this.Div00.form.Sta_IncorrectPWCK.visible = false;
        	}
        };


        this.Div00_Btn_Signup_onclick = function(obj,e)
        {
        	// 회원가입 작성 목록 중 올바르지 않은 항목이 있을 경우 (+ 아이디 중복 체크 안 했을 경우)
        	if (this.is_correctSignup() == false) return;

        	// 이상 없을시 ds_accountInfo에 데이터 저장 후 트랜잭션으로 서버에 데이터 전송
        	var strSvcUrl = "p014/setAccountInfo.do";
        	var inData    = "ds_accountInfo=ds_accountInfo";
        	var outData   = "";
        	var strArg    = "";
        	this.gfnTransaction("setAccountInfo", strSvcUrl, inData, outData, strArg, "fnCallback");


        	// 회원가입 성공 모달 팝업
        	var objChildFrame = new ChildFrame("popupModal", 0, 0, 250, 300);
        	objChildFrame.formurl = "AboutAccount::gybs1110pu.xfdl";
         	objChildFrame.openalign = "center middle";
         	objChildFrame.overlaycolor = "RGBA(196,196,196,0.5)";
        	objChildFrame.dragmovetype = "none";
        	objChildFrame.showtitlebar = false;
         	objChildFrame.border = "1px solid black";

        	var objParam = {param_name : this.Div00.form.Edit_Name.value};
        	objChildFrame.showModal(this.getOwnerFrame(), objParam, this, "fn_popupCallback");

        };

        this.is_correctSignup = function()
        {
        	// 입력이 올바르지 않은 항목 있으면 포커스 + 보더 빨강 + 언더 텍스트 표시
        	while(true) {
        		if (this.Div00.form.Edit_PW.value != this.Div00.form.Edit_PWCK.value) {
        			this.Div00.form.Edit_PWCK.border = "1px solid red";
        			this.Div00.form.Sta_IncorrectPWCK.visible = true;
        			this.Div00.form.Edit_PWCK.setFocus();
        			break;
        		}
        		else if (this.Div00.form.Rdo_RoleType.value == null) {
        			this.Div00.form.Sta_IncorrectRoleType.visible = true;
        			this.Div00.form.Rdo_RoleType.setFocus();
        			break;
        		}
        		else if (this.Div00.form.Edit_ID.value == null) {
        			this.Div00.form.Edit_ID.border = "1px solid red";
        			this.Div00.form.Sta_IncorrectID.visible = true;
        			this.Div00.form.Edit_ID.setFocus();
        			break;
        		}
        		else if (this.Div00.form.Edit_PW.value == null) {
        			this.Div00.form.Edit_PW.border = "1px solid red";
        			this.Div00.form.Sta_IncorrectPW.visible = true;
        			this.Div00.form.Edit_PW.setFocus();
        			break;
        		}
        		else if (this.Div00.form.Edit_PWCK.value == null) {
        			this.Div00.form.Edit_PWCK.border = "1px solid red";
        			this.Div00.form.Sta_IncorrectPWCK.visible = true;
        			this.Div00.form.Edit_PWCK.setFocus();
        			break;
        		}
        		else if (this.Div00.form.Edit_Name.value == null) {
        			this.Div00.form.Edit_Name.border = "1px solid red";
        			this.Div00.form.Sta_IncorrectName.visible = true;
        			this.Div00.form.Edit_Name.setFocus();
        			break;
        		}
        		else if (this.Div00.form.Msk_PhoneNo.value == null || this.Div00.form.Msk_PhoneNo.value.length < 11) {
        			this.Div00.form.Msk_PhoneNo.border = "1px solid red";
        			this.Div00.form.Sta_IncorrectPhoneNo.visible = true;
        			this.Div00.form.Msk_PhoneNo.setFocus();
        			break;
        		}
        		else if (this.idCheckYn == "N") {
        			this.Div00.form.Btn_IDCheck.border = "1px solid red";
        			this.Div00.form.Sta_IncorrectIDCkeck.visible = true;
        			this.Div00.form.Btn_IDCheck.setFocus();
        			break;
        		}
        		else return true;
        	}
        	return false;
        }

        this.Div00_Btn_IDCheck_onclick = function(obj,e)
        {
        	// 아이디 중복 체크

        	// 아이디 데이터 존재 확인
        	if (this.Div00.form.Edit_ID.value == null) {
        		this.Div00.form.Sta_IncorrectID.visible = true;
        		this.Div00.form.Edit_ID.setFocus();
        		return;
        	}

        	// 아이디 중복 여부 초기화
        	this.idCheckYn = "N";

        	var strSvcUrl = "p014/checkID.do";
        	var inData    = "";
        	var outData   = "";
        	var strArg    = "paramID=" + this.Div00.form.Edit_ID.value;

        	this.gfnTransaction("checkID", strSvcUrl, inData, outData, strArg, "fnCallback");
        };

        this.Div00_btn_cancel_onclick = function(obj,e)
        {
        	this.fvApp.mainframe.Main.formurl = "AboutAccount::gybs1010fm.xfdl";
        };


        this.fnCallback = function(svcId, errCd, errMsg) {
        	if (errCd < 0) {
        		arrArg = [errMsg];
        		this.gfnAlert("msg.server.error.msg", errMsg, "msg.server.error.msg", "fnMsgCallback");
        	}

        	if (svcId == "checkID") {
        		if (errCd == 10100) { // 아이디 중복 상태
        			this.gfnAlert("msg.err.signup.fail.IDcheck", "", "msg.err.signup.fail.IDcheck", "fnMsgCallback");
        		}
        		else if (errCd == 10101) { // 아이디 사용 가능
        			this.gfnAlert("msg.signup.IDcheck", "", "msg.signup.IDcheck", "fnMsgCallback");
        			this.idCheckYn = "Y";
        			this.Div00.form.Btn_IDCheck.border = "1px solid gray";
        			this.Div00.form.Sta_IncorrectIDCkeck.visible = false;
        		}
        	}
        }
        this.Common_onkillfocus = function(obj,e)
        {
        	// 컴포넌트의 포커스가 벗겨지면 언더 텍스트 비활성화
        	this.Div00.form.Sta_IncorrectRoleType.visible = false;
        	this.Div00.form.Sta_IncorrectID.visible = false;
        	this.Div00.form.Sta_IncorrectPW.visible = false;
        	this.Div00.form.Sta_IncorrectPWCK.visible = false;
        	this.Div00.form.Sta_IncorrectName.visible = false;
        	this.Div00.form.Sta_IncorrectPhoneNo.visible = false;
        	this.Div00.form.Sta_IncorrectIDCkeck.visible = false;

        	// 컴포넌트의 포커스가 벗겨지면 보더 초기화
        	this.Div00.form.Edit_ID.border = "1px solid gray";
        	this.Div00.form.Edit_PW.border = "1px solid gray";
        	this.Div00.form.Edit_PWCK.border = "1px solid gray";
        	this.Div00.form.Edit_Name.border = "1px solid gray";
        	this.Div00.form.Msk_PhoneNo.border = "1px solid gray";

        };

        this.Div00_Edit_ID_onchanged = function(obj,e)
        {
        	this.idCheckYn = "N";
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.form.Edit_ID.addEventHandler("onkillfocus",this.Common_onkillfocus,this);
            this.Div00.form.Edit_ID.addEventHandler("onchanged",this.Div00_Edit_ID_onchanged,this);
            this.Div00.form.Btn_Signup.addEventHandler("onclick",this.Div00_Btn_Signup_onclick,this);
            this.Div00.form.Edit_PW.addEventHandler("onkillfocus",this.Common_onkillfocus,this);
            this.Div00.form.Btn_IDCheck.addEventHandler("onclick",this.Div00_Btn_IDCheck_onclick,this);
            this.Div00.form.Btn_IDCheck.addEventHandler("onkillfocus",this.Common_onkillfocus,this);
            this.Div00.form.Edit_PWCK.addEventHandler("onkillfocus",this.Common_onkillfocus,this);
            this.Div00.form.Edit_Name.addEventHandler("onkillfocus",this.Common_onkillfocus,this);
            this.Div00.form.Msk_PhoneNo.addEventHandler("onkillfocus",this.Common_onkillfocus,this);
            this.Div00.form.Rdo_RoleType.addEventHandler("onkillfocus",this.Common_onkillfocus,this);
            this.Div00.form.btn_cancel.addEventHandler("onclick",this.Div00_btn_cancel_onclick,this);
        };
        this.loadIncludeScript("gybs1011fm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
