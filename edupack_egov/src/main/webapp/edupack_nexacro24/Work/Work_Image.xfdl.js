(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Work_Image");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUser", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "USER_NAME","type" : "STRING","size" : "256"},{"id" : "EMAIL","type" : "STRING","size" : "256"},{"id" : "TEL_NO","type" : "STRING","size" : "256"},{"id" : "IMAGE_ID","type" : "STRING","size" : "256"},{"id" : "IMAGE_NAME","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog00", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new ImageViewer("imgPhoto","57","50","123","124",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_stretch("fixaspectratio");
            this.addChild(obj.name, obj);

            obj = new Button("btnSelect","57","184","123","26",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("이미지 선택");
            obj.set_cssclass("btn_WF_LineRed");
            this.addChild(obj.name, obj);

            obj = new Edit("edtName","211","50","140","26",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_displaynulltext("성명");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMail","211","96","140","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_displaynulltext("이메일");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTelNo","211","142","140","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_displaynulltext("전화번호");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","211","184","69","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_FillBlue");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","30","235","680","270",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("dsUser");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"215\"/><Column size=\"217\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"USER_NAME\"/><Cell col=\"1\" text=\"EMAIL\"/><Cell col=\"2\" text=\"TEL_NO\"/><Cell col=\"3\" text=\"IMAGE_ID\"/><Cell col=\"4\" text=\"IMAGE_NAME\"/></Band><Band id=\"body\"><Cell text=\"bind:USER_NAME\"/><Cell col=\"1\" text=\"bind:EMAIL\"/><Cell col=\"2\" text=\"bind:TEL_NO\"/><Cell col=\"3\" text=\"bind:IMAGE_ID\"/><Cell col=\"4\" text=\"bind:IMAGE_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch","281","184","69","26",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_FillRed");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtName","value","dsUser","USER_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtMail","value","dsUser","EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edtTelNo","value","dsUser","TEL_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Work_Image.xfdl", function() {

        this.btnSelect_onclick = function(obj,e)
        {
        	this.FileDialog00.open("이미지 선택", 1, "%MYDOCUMENT%");

        };

        this.FileDialog00_onclose = function(obj,e)
        {
        	var objFile = e.virtualfiles[0];
        	var sFileName = objFile.filename;

        	if (!/\.(jpe?g|png|gif)$/i.test(sFileName)) // 정규식으로 파일 유형 체크
        	{
        		alert("이미지 파일을 선택하십시오.");
        		return;
        	}

        	this.FileUpTransfer00.clearFileList();
        	this.FileUpTransfer00.addFile(sFileName, objFile);
        	var nRow = this.dsUser.addRow();
        	this.dsUser.setColumn(nRow, "IMAGE_ID", sFileName);
        	this.dsUser.setColumn(nRow, "IMAGE_NAME", sFileName);

        	if (nexacro._Browser == "Runtime") {
        		// NRE
        		this.imgPhoto.image = "URL('file://" + objFile.fullpath + "')";
        	}
        	else {
        		// NRE 아닐 때 (웹 브라우저)
        		var reader = new FileReader();
        		reader.targetForm = this;
        		reader.addEventListener("load"
        								,function() {
        									this.targetForm.imgPhoto.image = this.result;
        								}
        								,false);
        		reader.readAsDataURL(objFile._handle);
        		// 파일을 base64 형태로 읽기
        	}
        };

        this.btnSave_onclick = function(obj,e)
        {
        	var sUrl = "SvcUrl::edu/uploadFile.do";
        	this.FileUpTransfer00.setPostData("userDir", "nexa_file");
        	this.FileUpTransfer00.upload(sUrl);
        };

        this.FileUpTransfer00_onsuccess = function(obj,e)
        {
        	var objDs = e.datasets[0];
        	this.dsUser.setColumn(0,"IMAGE_ID", objDs.getColumn(0, "file_id"));
        	this.fnSaveData();
        };

        this.fnSaveData = function()
        {
        	this.gfnTransaction("saveUserInfo"
        						, "edu/saveUserInfo.do"
        						, "outUser=dsUser"
        						, ""
        						, ""
        						, "fnCallback");
        };



        this.btnSearch_onclick = function(obj,e)
        {
        	this.gfnTransaction("searchUserInfo"
        						, "edu/searchUserInfo.do"
        						, ""
        						, "dsUser=outSearch"
        						, ""
        						, "fnCallback");
        };

        this.sUploadUrl = this.gfnGetServerUrl() + "upload/nexa_file/";
        // this.gfnGetServerUrl() => http://localhost8088/edupack_egov/

        this.dsUser_onrowposchanged = function(obj,e)
        {
        	var sImg = this.sUploadUrl + obj.getColumn(e.newrow, "IMAGE_ID");
        	this.imgPhoto.image = sImg;
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnSelect.addEventHandler("onclick",this.btnSelect_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.dsUser.addEventHandler("onrowposchanged",this.dsUser_onrowposchanged,this);
            this.FileDialog00.addEventHandler("onclose",this.FileDialog00_onclose,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
        };
        this.loadIncludeScript("Work_Image.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
