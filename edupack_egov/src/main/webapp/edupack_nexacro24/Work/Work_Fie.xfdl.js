(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Work_Fie");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFile", this);
            obj.set_useclientlayout("true");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "file_id","type" : "STRING","size" : "256"},{"id" : "file_name","type" : "STRING","size" : "256"},{"id" : "file_size","type" : "STRING","size" : "256"},{"id" : "file_type","type" : "STRING","size" : "256"},{"id" : "chk","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTemp", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "file_id","type" : "STRING","size" : "256"},{"id" : "file_name","type" : "STRING","size" : "256"},{"id" : "file_size","type" : "STRING","size" : "256"},{"id" : "file_type","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd00","70","88","668","292",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"64\"/><Column size=\"63\"/><Column size=\"62\"/><Column size=\"80\"/><Column size=\"68\"/><Column size=\"45\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"file_id\"/><Cell col=\"2\" text=\"file_name\"/><Cell col=\"3\" text=\"file_size\"/><Cell col=\"4\" text=\"file_type\"/><Cell col=\"5\"/><Cell col=\"6\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" text=\"bind:file_id\"/><Cell col=\"2\" text=\"bind:file_name\"/><Cell col=\"3\" text=\"bind:file_size\"/><Cell col=\"4\" text=\"bind:file_type\"/><Cell col=\"5\" text=\"다운로드\" displaytype=\"buttoncontrol\"/><Cell col=\"6\" displaytype=\"buttoncontrol\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","71","34","82","32",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("파일 선택");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","170","34","95","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("파일 업로드");
            this.addChild(obj.name, obj);

            obj = new Button("btn02","284","34","82","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("파일 목록");
            this.addChild(obj.name, obj);

            obj = new Button("btn03","380","34","108","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("전체 다운로드");
            this.addChild(obj.name, obj);

            obj = new Button("btn03_00","500","34","108","32",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("선택 다운로드");
            this.addChild(obj.name, obj);

            obj = new Button("btn04","620","34","126","32",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("<- 이거다른 방법");
            this.addChild(obj.name, obj);

            obj = new Grid("grd01","98","415","547","135",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("dsFile");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"177\"/><Column size=\"119\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"file_id\"/><Cell col=\"1\" text=\"file_name\"/><Cell col=\"2\" text=\"file_size\"/><Cell col=\"3\" text=\"file_type\"/><Cell col=\"4\" text=\"chk\"/></Band><Band id=\"body\"><Cell text=\"bind:file_id\"/><Cell col=\"1\" text=\"bind:file_name\"/><Cell col=\"2\" text=\"bind:file_size\"/><Cell col=\"3\" text=\"bind:file_type\"/><Cell col=\"4\" text=\"bind:chk\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,700,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Work_Fie.xfdl", function() {

        this.btn00_onclick = function(obj,e)
        {
        	this.FileDialog00.open("Select File", 3, "%DOCUMENT%");
        };

        this.FileDialog00_onclose = function(obj,e)
        {
        	var objFileList = e.virtualfiles;

        	for (var i = 0; i < objFileList.length; i++) {
        		var bExist = this.FileUpTransfer00.existFile(objFileList[i]);
        		if (!bExist) {
        			var sFileName = objFileList[i].filename;
        			var sFileType = sFileName.substr(sFileName.lastIndexOf(".") + 1);
        			this.FileUpTransfer00.addFile(sFileName, objFileList[i]);
        			var nRow = this.dsFile.addRow();
        			this.dsFile.setColumn(nRow, "chk", 0);
        			this.dsFile.setColumn(nRow, "file_id", sFileName);
        			this.dsFile.setColumn(nRow, "file_name", sFileName);
        			this.dsFile.setColumn(nRow, "file_type", sFileType);
        		}
        	}
        };

        this.btn01_onclick = function(obj,e)
        {
        	var sUrl = "SvcUrl::edu/uploadFile.do";
        	this.FileUpTransfer00.setPostData("userDir", "nexa_file");
        	this.FileUpTransfer00.upload(sUrl);
        };

        this.FileUpTransfer00_onsuccess = function(obj,e)
        {
        	var objDs = e.datasets[0];
        	for (var i = 0; i < objDs.rowcount; i++) {
        		var nRow = this.dsFile.findRow("file_name", objDs.getColumn(i, "file_name"));
        		this.dsFile.setColumn(nRow, "file_id", objDs.getColumn(i, "file_id"));
        		this.dsFile.setColumn(nRow, "file_size", objDs.getColumn(i, "file_size"));
        	}
        };

        this.btn02_onclick = function(obj,e)
        {

        	this.transaction("getFileList"
        					,"SvcUrl::edu/getFileList.do"
        					,""
        					,"dsFile=dsFile"
        					,"userDir='nexa_file'"
        					,"fnCallback")
        };

        this.grd00_oncellclick = function(obj,e)
        {
        	if (e.cell == 4) {
        		// 다운로드
        		var sFileId = this.dsFile.getColumn(e.row, "file_id");
        		var sUrl = "SvcUrl::edu/downloadFile.do";
        		this.FileDownTransfer00.setPostData("userDir", "nexa_file");
        		this.FileDownTransfer00.setPostData("fileId", sFileId);
        		this.FileDownTransfer00.downloadfilename = sFileId;
        		this.FileDownTransfer00.download(sUrl);

        	}
        	else if (e.cell == 5) {
        		// 삭제
        		var sFileId = this.dsFile.getColumn(e.row, "file_id");
        		this.transaction("deleteFile"
        					,"SvcUrl::edu/deleteFile.do"
        					,""
        					,""
        					,"userDir='nexa_file' fileId=" + nexacro.wrapQuote(sFileId)
        					,"fnCallback")
        	}
        };

        this.fnCallback = function(svcId, errCd, errMsg) {
        	if (errCd<0) return;
        	if (svcId == "deleteFile") {
        		this.dsFile.deleteRow(this.dsFile.rowposition);
        		this.dsFile.applyChange();
        	}
        }

        this.btn03_onclick = function(obj,e)
        {
        	var sUrl = "SvcUrl::edu/downloadFile.do";
        	this.FileDownTransfer00.setPostData("userDir", "nexa_file");
        	var sXml = encodeURIComponent(encodeURIComponent(this.dsFile.saveXML()));
        	this.FileDownTransfer00.setPostData("fileId", "");
        	this.FileDownTransfer00.setPostData("fileDs", sXml);
        	trace(this.dsFile.saveXML());
        	this.FileDownTransfer00.downloadfilename = "첨부파일.zip";
        	this.FileDownTransfer00.download(sUrl);
        };

        this.btn03_00_onclick = function(obj,e)
        {
        // 	var nCnt = 0;
        // 	for (var i = 0; i < this.dsFile.rowcount; i++) {
        // 		var nValue = this.dsFile.getColumn(i, "chk");
        // 		if (nValue == "1") nCnt++;
        // 	}
        	var nCnt = this.dsFile.getCaseCount("chk == '1'");

        	if (nCnt == 0) {
        		alert("선택한 파일이 없습니다.");
        	}
        	else if (nCnt == 1) {
        		var sFileId = this.dsFile.getColumn(e.row, "file_id");
        		var sUrl = "SvcUrl::edu/downloadFile.do";
        		this.FileDownTransfer00.setPostData("userDir", "nexa_file");
        		this.FileDownTransfer00.setPostData("fileId", sFileId);
        		this.FileDownTransfer00.downloadfilename = sFileId;
        		this.FileDownTransfer00.download(sUrl);
        	}
        	else if (nCnt >= 2) {
        		this.dsFile.filter("chk == '1'");
        		// this.dsTemp.copyData(this.dsFile); // 필터를 해도 원본 데이터가 복사됨
        		this.dsTemp.copyData(this.dsFile, true);
        		this.dsFile.filter("");

        		var sUrl = "SvcUrl::edu/downloadFile.do";
        		this.FileDownTransfer00.setPostData("userDir", "nexa_file");
        		var sXml = encodeURIComponent(encodeURIComponent(this.dsTemp.saveXML()));
        		this.FileDownTransfer00.setPostData("fileId", "");
        		this.FileDownTransfer00.setPostData("fileDs", sXml);
        		this.FileDownTransfer00.downloadfilename = "첨부파일.zip";
        		this.FileDownTransfer00.download(sUrl);
        	}
        };

        this.btn04_onclick = function(obj,e)
        {
        	var arrRow = this.dsFile.extractRows("chk == '1'");
        	// findRow를 쓰면 발견한 첫 행에서 중단되기 때문에 사용 X
        	if (arrRow.length == 0) {
        		alert("선택한 파일이 없습니다.");
        	}
        	else if (arrRow.length == 0) {
        		var sFileId = this.dsFile.getColumn(e.row, "file_id");
        		var sUrl = "SvcUrl::edu/downloadFile.do";
        		this.FileDownTransfer00.setPostData("userDir", "nexa_file");
        		this.FileDownTransfer00.setPostData("fileId", sFileId);
        		this.FileDownTransfer00.downloadfilename = sFileId;
        		this.FileDownTransfer00.download(sUrl);
        	}
        	else {
        		for (var i = 0; i < arrRow.length; i++) {
        			var nRow = this.dsTemp.addRow();
        			this.dsTemp.copyRow(nRow, this.dsFile, arrRow[i]);
        		}
        	}
        };

        this.grd00_ondrop = function(obj,e)
        {
        	var objFileList = e.filelist;

        	for (var i = 0; i < objFileList.length; i++) {
        		var bExist = this.FileUpTransfer00.existFile(objFileList[i]);
        		if (!bExist) {
        			var sFileName = objFileList[i].filename;
        			var sFileType = sFileName.substr(sFileName.lastIndexOf(".") + 1);
        			this.FileUpTransfer00.addFile(sFileName, objFileList[i]);
        			var nRow = this.dsFile.addRow();
        			this.dsFile.setColumn(nRow, "chk", 0);
        			this.dsFile.setColumn(nRow, "file_id", sFileName);
        			this.dsFile.setColumn(nRow, "file_name", sFileName);
        			this.dsFile.setColumn(nRow, "file_type", sFileType);
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.grd00.addEventHandler("oncellclick",this.grd00_oncellclick,this);
            this.grd00.addEventHandler("ondrop",this.grd00_ondrop,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
            this.btn03.addEventHandler("onclick",this.btn03_onclick,this);
            this.btn03_00.addEventHandler("onclick",this.btn03_00_onclick,this);
            this.btn04.addEventHandler("onclick",this.btn04_onclick,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
            this.FileDialog00.addEventHandler("onclose",this.FileDialog00_onclose,this);
        };
        this.loadIncludeScript("Work_Fie.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
