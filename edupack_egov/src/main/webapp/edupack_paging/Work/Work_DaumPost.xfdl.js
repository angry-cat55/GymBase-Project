(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Work_DaumPost");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(790,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Edit("edtPost","30","30","90","29",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("btnPost","130","30","136","29",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("우편번호 찾기");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAddr1","30","69","236","29",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAddr2","30","108","236","29",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new WebView("WebView00","282","30","236","383",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",790,570,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Work_DaumPost.xfdl", function() {

        this.Work_DaumPost_onload = function(obj,e)
        {
        	this.WebView00.url = "http://localhost:8088/edupack_egov/external/p01/P014DaumPost.html";
        };
        this.btnPost_onclick = function(obj,e)
        {
        	var param = this.edtAddr1.value;
        	if (this.gfnIsNull(param)) param = "";
        	this.WebView00.callScript("searchDaumPost('" + param + "')");

        };

        this.WebView00_onusernotify = function(obj,e)
        {
        	trace(e.userdata);

        	var addrArr = e.userdata.split("::");

        	this.edtPost.value = addrArr[0];
        	this.edtAddr1.value = addrArr[1];
        	this.edtAddr2.value = addrArr[2];
        };

        this.edtAddr1_onkeyup = function(obj,e)
        {
        	if (e.keycode == 13) {
        		this.btnPost_onclick();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Work_DaumPost_onload,this);
            this.btnPost.addEventHandler("onclick",this.btnPost_onclick,this);
            this.edtAddr1.addEventHandler("onkeyup",this.edtAddr1_onkeyup,this);
            this.WebView00.addEventHandler("onusernotify",this.WebView00_onusernotify,this);
        };
        this.loadIncludeScript("Work_DaumPost.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
