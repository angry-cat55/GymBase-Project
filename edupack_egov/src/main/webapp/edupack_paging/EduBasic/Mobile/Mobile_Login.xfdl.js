(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Mobile_Login");
            this.set_titletext("로그인");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new CheckBox("chk_save","72","440","340","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Remember me");
            obj.set_cssclass("chk_Login_idsave");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_login","0",null,null,"80","0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Login");
            obj.set_cssclass("btn_LOGIN_Login");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","72","0",null,"220","72",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_LOGIN_Logo");
            this.addChild(obj.name, obj);

            obj = new TextField("tf_id","72","220",null,"80","72",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_labeltext("USER ID");
            obj.set_cssclass("txtf_LOGIN_ID");
            obj.set_useleadingbutton("true");
            obj.set_labelfloatingfixed("true");
            this.addChild(obj.name, obj);

            obj = new TextField("tf_pwd","72","320",null,"80","72",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_labeltext("PASSWORD");
            obj.set_cssclass("txtf_LOGIN_PW");
            obj.set_useleadingbutton("true");
            obj.set_labelfloatingfixed("true");
            obj.set_inputtype("password");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",480,768,this,function(p){});
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Mobile_Login.xfdl", function() {
        //로그인 버튼 선택
        this.btn_login_onclick = function(obj,e)
        {
        	var sId = this.tf_id.value;
        	var sPw = this.tf_pwd.value;
        	//화면이동
        	nexacro.getApplication().av_WorkFrame.form.fn_login(sId, sPw);

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_login.addEventHandler("onclick",this.btn_login_onclick,this);
        };
        this.loadIncludeScript("Mobile_Login.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
