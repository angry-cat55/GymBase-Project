(function()
{
    return function()  
	{
        this.on_loadAppVariables = function()
        {		
            var obj = null;
			// global dataobject
		
            // global dataset
            obj = new Dataset("gds_accountInfo", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "ID","type" : "STRING","size" : "256"},{"id" : "PW","type" : "STRING","size" : "256"},{"id" : "NAME","type" : "STRING","size" : "256"},{"id" : "PHONE_NO","type" : "STRING","size" : "256"},{"id" : "ROLE_TYPE","type" : "STRING","size" : "256"},{"id" : "GYM_CODE","type" : "INT","size" : "256"},{"id" : "PROFILE_PATH","type" : "STRING","size" : "256"},{"id" : "NOTI_COUNT","type" : "STRING","size" : "256"},{"id" : "GYM_STATUS","type" : "STRING","size" : "256"}]}});
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_search", this);
            obj.set_useclientlayout("false");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "cnt","type" : "INT","size" : "256"},{"id" : "offset","type" : "INT","size" : "256"},{"id" : "searchTerm","type" : "STRING","size" : "256"},{"id" : "gotoMain","type" : "STRING","size" : "256"},{"id" : "typeSearch","type" : "STRING","size" : "256"},{"id" : "isShowSold","type" : "STRING","size" : "256"}]},"Rows" : [{"cnt" : "10","offset" : "0","gotoMain" : "1"}]});
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_rejectNoti", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "IS_FROM_REJECT","type" : "STRING","size" : "256"},{"id" : "MESSAGE","type" : "STRING","size" : "1024"}]},"Rows" : [{}]});
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsMessage", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "MSG_ID","type" : "STRING","size" : "256"},{"id" : "MSG_TEXT","type" : "STRING","size" : "256"},{"id" : "MSG_TEXT_EN","type" : "STRING","size" : "256"},{"id" : "MSG_TYPE","type" : "STRING","size" : "2"},{"id" : "MSG_ICON","type" : "STRING","size" : "256"}]},"Rows" : [{"MSG_ID" : "msg.server.error.msg","MSG_TYPE" : "A","MSG_ICON" : "INF","MSG_TEXT" : "서버에서 다음과 같은 에러가 발생했습니다.\\n\\n{0}"},{"MSG_ID" : "msg.err.login.fail","MSG_TYPE" : "A","MSG_ICON" : "INF","MSG_TEXT" : "아이디 또는 비밀번호가 일치하지 않습니다."},{"MSG_ID" : "msg.err.wrong.password","MSG_TEXT" : "비밀번호가 일치하지 않습니다.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.err.signup.fail.IDcheck","MSG_TYPE" : "A","MSG_ICON" : "INF","MSG_TEXT" : "이미 사용 중인 아이디입니다."},{"MSG_ID" : "msg.signup.IDcheck","MSG_TYPE" : "A","MSG_ICON" : "INF","MSG_TEXT" : "사용 가능한 아이디입니다.\\n\\n(가입 후 변경 불가)"},{"MSG_ID" : "msg.err.enter.alldata","MSG_TYPE" : "A","MSG_ICON" : "INF","MSG_TEXT" : " 모든 항목을 입력해 주십시오."},{"MSG_ID" : "msg.err.wrong.phone","MSG_TYPE" : "A","MSG_ICON" : "INF","MSG_TEXT" : "올바른 전화번호 형식이 아닙니다."},{"MSG_ID" : "msg.err.no.img.select","MSG_TYPE" : "A","MSG_ICON" : "INF","MSG_TEXT" : "이미지 파일을 선택해 주십시오."},{"MSG_ID" : "msg.err.no.reject.reason","MSG_TYPE" : "A","MSG_ICON" : "INF","MSG_TEXT" : "반려 사유가 작성되지 않았습니다."},{"MSG_ID" : "msg.err.no.gymImg.select","MSG_TYPE" : "A","MSG_ICON" : "INF","MSG_TEXT" : "헬스장 대표 이미지를 등록해야 합니다."},{"MSG_ID" : "msg.err.wrong.date","MSG_TYPE" : "A","MSG_ICON" : "INF","MSG_TEXT" : "날짜 형식이 올바르지 않습니다."},{"MSG_ID" : "msg.err.wrong.password","MSG_TYPE" : "A","MSG_ICON" : "INF","MSG_TEXT" : "비밀번호가 일치하지 않습니다."},{"MSG_TYPE" : "C","MSG_ICON" : "CFN","MSG_ID" : "confirm.save.current","MSG_TEXT" : "현재 정보 수정 중입니다.\\n\\n입력된 내용으로 저장하시겠습니까?"},{"MSG_TYPE" : "C","MSG_ICON" : "CFN","MSG_ID" : "confirm.approve.transfer","MSG_TEXT" : "양도 요청을 승인하시겠습니까? \\n\\n(처리 후에는 수정할 수 없습니다.)"},{"MSG_TYPE" : "C","MSG_ICON" : "CFN","MSG_ID" : "confirm.reject.transfer","MSG_TEXT" : "양도 요청을 반려하시겠습니까? \\n\\n(처리 후에는 수정할 수 없습니다.)"},{"MSG_TYPE" : "C","MSG_ICON" : "CFN","MSG_ID" : "confirm.upload.gym","MSG_TEXT" : " 작성한 내용으로 헬스장을 등록하시겠습니까? \\n\\n(정보는 승인 후 변경 가능합니다.)"},{"MSG_TYPE" : "C","MSG_ICON" : "CFN","MSG_ID" : "confirm.approve.gym","MSG_TEXT" : "해당 헬스장의 등록을 승인하시겠습니까?"},{"MSG_TYPE" : "C","MSG_ICON" : "CFN","MSG_ID" : "confirm.reject.gym","MSG_TEXT" : "해당 헬스장의 등록을 반려하시겠습니까?"}]});
            this._addDataset(obj.name, obj);
            
            // global variable
            this._addVariable("gv_gymCode","");
            this._addVariable("gv_marketNo","");
            this._addVariable("gv_tempGotoMainType","");
            this._addVariable("gv_expiryDate","");
            this._addVariable("gv_isFromRejectNoti","");
            this._addVariable("gv_scrollPos","0");
            
            obj = null;
        };
 
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("Application_Desktop");
            this.set_screenid("Desktop_screen");
            this.set_licenseurl("NexacroN_client_license.xml");

            if (this._is_attach_childframe)
            	return;
        
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","1600","1000",null,null,this);
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("false");
            mainframe.set_titletext("GymBase");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;        
            // tray

        };
        
        this.loadPreloadList = function()
        {

        };
        
        this.mainframe_createBodyFrame = function()
        {
            var frame0 = new ChildFrame("Main",null,null,null,null,null,null,"AboutAccount::gybs1010fm.xfdl",this);
            frame0.set_showtitlebar("false");
            frame0.set_showtitleicon("false");
            this.addChild(frame0.name, frame0);
            frame0.set_formurl("AboutAccount::gybs1010fm.xfdl");

            this.frame=frame0;
        };
        
        this.on_initEvent = function()
        {

        };
        
        // script Compiler

        this.checkLicense("NexacroN_client_license.xml");
        
        this.loadPreloadList();

        this.loadIncludeScript("Application_Desktop.xadl");
    };
}
)();
