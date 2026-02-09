(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Hello");
            this.set_titletext("New Form");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1023,673);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btnHello","83.00","76","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Hello World");
            obj.set_background("darkblue");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","66","-133","240","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Desktop Screen");
            obj.set_font("normal bold 14px \"Arial\"");
            obj.set_color("red");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1023,673,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("NexacroStudio.xfdl","Lib::Lib_Common.xjs");
        this.registerScript("NexacroStudio.xfdl", function() {
        /***********************************************************/
        /* 프 로 그 램 : NexacroStudio.xfldl
        /* 작 성 일 자 : 2024.09.26
        /* 작  성   자 : 홍 길 동
        /* 설       명 :
        /***********************************************************/

        this.executeIncludeScript("Lib::Lib_Common.xjs"); /*include "Lib::Lib_Common.xjs"*/

        this.btnHello_onclick = function(obj,e)
        {
        	this.alert("Hello World");
        	trace("log Hello World");
        	if(e.altkey)
        	{
        		this.alert("true");
        	} else {
        	this.alert("false");
        	}
        };

        /********* 주요단축키 설명 ***********/
        /* 블럭이동 : Ctrl+]
        /* 블럭선택 : Ctrl+Shift+]
        /* 블럭주석 : Ctrl+/
        /* 주석해제 : Alt+/
        /* Options -> Environment->Script-> AutoComplete (Auto-insert-closing brace)
        /* Options -> Environment->Font and Color -> Source ->View Indent Guide
        /* Copy ID : Div 및 Tabpage의 Depth가 있는 컴포넌트 복사기능
        /****************************************/









        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnHello.addEventHandler("onclick",this.btnHello_onclick,this);
        };
        this.loadIncludeScript("NexacroStudio.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
