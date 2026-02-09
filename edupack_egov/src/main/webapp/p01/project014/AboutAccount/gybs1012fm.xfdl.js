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
            this.set_titletext("아이디/비번 찾기");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_findedInfo", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "ID","type" : "STRING","size" : "256"},{"id" : "PW","type" : "STRING","size" : "256"}]},"Rows" : [{}]});
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
            obj.set_taborder("5");
            obj.set_background("#ffffff");
            obj.set_borderRadius("20px");
            obj.set_text("");
            obj.set_border("1px solid #d4d4d4");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_ok","45",null,"190","48",null,"43",null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_cssclass("GB_Login");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_findAccount","40","69",null,"48","40",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("아이디/비밀번호 찾기");
            obj.set_font("normal 18pt/normal \"Arial\"");
            obj.set_padding("0px 0px 20px");
            obj.set_border("0px none,0px none,2px solid black");
            this.Div00.addChild(obj.name, obj);

            obj = new Radio("rdo_selectType","40","sta_findAccount:30","270","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("1");
            obj.set_font("normal 11pt/normal \"Arial\"");
            var Div00_form_rdo_selectType_innerdataset = new nexacro.NormalDataset("Div00_form_rdo_selectType_innerdataset", obj);
            Div00_form_rdo_selectType_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "ID","datacolumn" : "아이디 찾기"},{"codecolumn" : "PW","datacolumn" : "비밀번호 찾기"}]});
            obj.set_innerdataset(Div00_form_rdo_selectType_innerdataset);
            obj.set_text("아이디 찾기");
            obj.set_value("ID");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("div_find","40","rdo_selectType:11","270","215",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_url("AboutAccount::gybs1013fm.xfdl");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_cancel","btn_ok:5",null,null,"48","45","43",null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("취소");
            obj.set_cssclass("GB_Cancel");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form.div_find
            obj = new Layout("default","",0,0,this.Div00.form.div_find.form,function(p){});
            this.Div00.form.div_find.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","AboutAccount::gybs1013fm.xfdl");
        };
        
        // User Script
        this.registerScript("gybs1012fm.xfdl", function() {
        this.fvApp = nexacro.getApplication();
        this.comp = this.Div00.form.div_find.form;

        // 아이디 찾기 / 비번 찾기 선택
        this.Div00_rdo_selectType_onitemchanged = function(obj,e)
        {
        	if (obj.value == "ID") {
        		this.Div00.form.div_find.url = "AboutAccount::gybs1013fm.xfdl";
        	}
        	else if (obj.value == "PW") {
        		this.Div00.form.div_find.url = "AboutAccount::gybs1014fm.xfdl";
        	}
        	// comp 경로 재설정
        	this.comp = this.Div00.form.div_find.form;
        };

        // 로그인 화면으로
        this.Div00_btn_cancel_onclick = function(obj,e)
        {
        	this.fvApp.mainframe.Main.formurl = "AboutAccount::gybs1010fm.xfdl";
        };

        // 확인
        this.Div00_btn_ok_onclick = function(obj,e)
        {

        	// 미입력 체크
        	if (this.fn_checkNull() == false) {
        		this.gfnAlert("msg.err.enter.alldata", "", "msg.err.enter.alldata", "fnMsgCallback");
        		return;
        	}

        	var strSvcUrl = "p014/findAccount.do";
        	var inData    = "";
        	var outData   = "ds_findedInfo=ds_findedInfo";
        	var strArg    = "paramID=" + this.comp.edt_ID.value
        				  + " paramName=" + this.comp.edt_name.value
        				  + " paramPhoneNo=" + this.comp.msk_phoneNo.value;

        	this.gfnTransaction("findAccount", strSvcUrl, inData, outData, strArg, "fnCallback", true);

        };

        // 각 화면에서 미입력 정보가 있는지(false) 확인
        this.fn_checkNull = function()
        {
        	if (this.Div00.form.rdo_selectType.value == "ID") {
        		if (this.comp.edt_name.value == null ||
        			this.comp.msk_phoneNo.value == null) {
        			return false;
        		}
        	}
        	else if (this.Div00.form.rdo_selectType.value == "PW") {
        		if (this.comp.edt_name.value == null ||
        			this.comp.msk_phoneNo.value == null ||
        			this.comp.edt_ID.value == null) {
        			return false;
        		}
        	}
        	return true;
        };

        this.fnCallback = function(svcId, errCd, errMsg) {
        	if (errCd < 0) {
        		arrArg = [errMsg];
        		this.gfnAlert("msg.server.error.msg", arrArg, "msg.server.error.msg", "fnMsgCallback");
        	}

        	if (svcId == "findAccount") {
        		if (errCd == 10120) { // 찾기 실패
        			if (this.Div00.form.rdo_selectType.value == "ID") {

        				var objChildFrame = new ChildFrame("popupFailFindID", 0, 0, 250, 300);
        				objChildFrame.formurl = "AboutAccount::gybs1112pu.xfdl";
        				objChildFrame.openalign = "center middle";
        				objChildFrame.overlaycolor = "RGBA(196,196,196,0.5)";
        				objChildFrame.dragmovetype = "none";
        				objChildFrame.showtitlebar = false;
        				objChildFrame.border = "1px solid black";

        				var objParam = {};
        				objChildFrame.showModal(this.getOwnerFrame(), objParam, this, "fn_popupCallback");
        			}
        			else if (this.Div00.form.rdo_selectType.value == "PW") {

        				var objChildFrame = new ChildFrame("popupFailFindPW", 0, 0, 250, 300);
        				objChildFrame.formurl = "AboutAccount::gybs1114pu.xfdl";
        				objChildFrame.openalign = "center middle";
        				objChildFrame.overlaycolor = "RGBA(196,196,196,0.5)";
        				objChildFrame.dragmovetype = "none";
        				objChildFrame.showtitlebar = false;
        				objChildFrame.border = "1px solid black";

        				var objParam = {};
        				objChildFrame.showModal(this.getOwnerFrame(), objParam, this, "fn_popupCallback");
        			}
        		}
        		else if (errCd == 10121) { // 찾기 성공
        			if (this.Div00.form.rdo_selectType.value == "ID") {

        				var objChildFrame = new ChildFrame("popupSuccessFindID", 0, 0, 250, 300);
        				objChildFrame.formurl = "AboutAccount::gybs1111pu.xfdl";
        				objChildFrame.openalign = "center middle";
        				objChildFrame.overlaycolor = "RGBA(196,196,196,0.5)";
        				objChildFrame.dragmovetype = "none";
        				objChildFrame.showtitlebar = false;
        				objChildFrame.border = "1px solid black";

        				var objParam = {param_name : this.comp.edt_name.value, param_ID : this.ds_findedInfo.getColumn(0, "ID")};
        				objChildFrame.showModal(this.getOwnerFrame(), objParam, this, "fn_popupCallback");
        			}
        			else if (this.Div00.form.rdo_selectType.value == "PW") {

        				var objChildFrame = new ChildFrame("popupSuccessFindPW", 0, 0, 360, 470);
        				objChildFrame.formurl = "AboutAccount::gybs1113pu.xfdl";
        				objChildFrame.openalign = "center middle";
        				objChildFrame.overlaycolor = "RGBA(196,196,196,0.5)";
        				objChildFrame.dragmovetype = "none";
        				objChildFrame.showtitlebar = false;
        				objChildFrame.border = "1px solid black";

        				var objParam = {param_ID : this.ds_findedInfo.getColumn(0, "ID"), param_name : this.comp.edt_name.value, param_PW : this.ds_findedInfo.getColumn(0, "PW")};
        				objChildFrame.showModal(this.getOwnerFrame(), objParam, this, "fn_popupCallback");
        			}
        			this.fvApp.mainframe.Main.formurl = "AboutAccount::gybs1010fm.xfdl";
        		}
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.form.btn_ok.addEventHandler("onclick",this.Div00_btn_ok_onclick,this);
            this.Div00.form.rdo_selectType.addEventHandler("onitemchanged",this.Div00_rdo_selectType_onitemchanged,this);
            this.Div00.form.btn_cancel.addEventHandler("onclick",this.Div00_btn_cancel_onclick,this);
        };
        this.loadIncludeScript("gybs1012fm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
