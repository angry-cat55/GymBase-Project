(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CmmAlert");
            this.set_titletext("알림창");
            this.set_border("1px solid #000000");
            if (Form == this.constructor)
            {
                this._setFormPosition(360,190);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","0","40",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_POP_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnOk",null,null,"70","34","15","9",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("확인");
            obj.getSetter("uWord").set("popup.ok");
            obj.set_cssclass("btn_WF_FillRed");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtMsgContent","1","40",null,"100","1",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("txt_POP_Message");
            obj.set_value("해당 row의 위치를 이동하면\n변경된 데이터가 사라집니다. \n계속 진행 하시겠습니까?");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("staIcon","10","50","50","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_POP_Info");
            obj.set_background("url(\'imagerc::form/info.png\') no-repeat center center /contain");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img00","1","1","25","25",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_stretch("fixaspectratio");
            obj.set_background("transparent");
            obj.set_border("0px none");
            obj.set_image("url(\'imagerc::form/Logo_only_small.png\')");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",360,190,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CmmAlert.xfdl", function() {
        /**
        *  Nexacro Professional Training Couse
        *  @MenuPath    Alert 화면
        *  @FileName 	CmmAlert.xfdl
        *  @Creator 	TOBESOFT Education
        *  @CreateDate 	2025/01/03
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2025/01/03      		 TOBESOFT Education	 	  	최초 생성
        *******************************************************************************
        */



        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        //	this.gfnFormOnLoad(this); //초기화[필수]

        	var sContents = this.getOwnerFrame().paramContents;
        	var sIcon = this.getOwnerFrame().paramMsgIcon;
        	this.fnMsgSetting(sContents, sIcon);
        };

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

        /************************************************************************************************
         * CALLBACK 콜백 처리부분
         ************************************************************************************************/

         /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
        * @description 메세지설정
        */
        this.fnMsgSetting = function (sMsgContent, sIcon)
        {
        	this.txtMsgContent.value = sMsgContent;
        	switch(sIcon){
        		case "ERR":
        			this.staIcon.cssclass = "sta_POP_Error";
        			this.btnOk.cssclass = "btn_WF_FillRed";
        			break;
        		case "WAN":
        			this.staIcon.cssclass = "sta_POP_Warning";
        			this.btnOk.cssclass = "btn_WF_FillYellow";
        			break;
        	}
        	this.btnOk.setFocus();

        };

         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
        * @description OK버튼이벤트
        */
        this.btnOk_onclick = function(obj,e)
        {
        	this.close(true);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnOk.addEventHandler("onclick",this.btnOk_onclick,this);
        };
        this.loadIncludeScript("CmmAlert.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
