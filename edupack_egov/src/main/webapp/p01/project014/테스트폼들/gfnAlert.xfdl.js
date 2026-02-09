(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("gfnAlert");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00","139","127","203","51",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("alert");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","421","122","278","58",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("confirm");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("gfnAlert.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	arr = "안녕";
        	arrArg = [arr];
        	this.gfnAlert("msg.server.error.msg", arrArg);
        };

        this.Button01_onclick = function(obj,e)
        {
        	var sMsgId = "confirm.approve.gym";	 	//메세지ID
        	var arrArg = "";						//메세지취환될값 배열[생략가능]
        	var sPopId = sMsgId;					//메세지팝업ID[생략가능]	*해당화면에서 메시지 중복사용시 구분되는값을 넣어줘야함
        	var sMsgCallback = "fnMsgCallback";		//메세지콜백[생략가능] 		* confirm성 메시지를 사용 시 반드시 필요

        	// 변경된 내역을 저장 하시겠습니까?
        	//this.gfnAlert(sMsgId, arrArg, sPopId, sMsgCallback);

        	// function 전달
        	this.gfnAlert(sMsgId, arrArg, sPopId, "fnMsgCallback");
        };

        this.fnMsgCallback = function(strId, strVal) {
        	if (strVal == true) {
        		alert("확인 선택");
        	}
        	else {
        		alert("취소 선택");
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
        };
        this.loadIncludeScript("gfnAlert.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
