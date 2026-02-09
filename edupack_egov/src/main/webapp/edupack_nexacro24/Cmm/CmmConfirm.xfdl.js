(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CmmConfirm");
            this.set_titletext("확인창");
            if (Form == this.constructor)
            {
                this._setFormPosition(360,200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","0","75","360","125",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_POP_Bg");
            this.addChild(obj.name, obj);

            obj = new Button("btnOk",null,null,"70","34","90","10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("확인");
            obj.getSetter("uWord").set("popup.ok");
            obj.set_cssclass("btn_WF_FillTeal");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancle",null,null,"70","34","15","10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("취소");
            obj.getSetter("uWord").set("popup.cancel");
            obj.set_cssclass("btn_WF_FillGray");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtMsgContent","0","20","360","125",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("txt_POP_Message");
            obj.set_value("해당 row의 위치를 이동하면 변경된 데이터가 사라집니다. \\n계속 진행 하시겠습니까?");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("staIcon","15","40","50","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_POP_Confirm");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",360,200,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CmmConfirm.xfdl", function() {
        /**
        *  Nexacro Professional Training Couse
        *  @MenuPath    Confirm
        *  @FileName 	CmmConfirm.xfdl
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
        	this.fnMsgSetting(sContents);
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
        this.fnMsgSetting = function (sMsgContent)
        {
         	this.txtMsgContent.value = sMsgContent;
        };

        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        /**
        * @description 확인버튼
        */
        this.btnOk_onclick = function(obj,e)
        {
        	this.close(true);
        };

        /**
        * @description 취소버튼
        */
        this.btnCancle_onclick = function(obj,e)
        {
        	this.close(false);
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnOk.addEventHandler("onclick",this.btnOk_onclick,this);
            this.btnCancle.addEventHandler("onclick",this.btnCancle_onclick,this);
        };
        this.loadIncludeScript("CmmConfirm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
