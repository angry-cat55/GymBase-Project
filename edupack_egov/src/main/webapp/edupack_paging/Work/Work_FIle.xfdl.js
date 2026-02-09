(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Work_FIle");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFile", this);
            obj.set_useclientlayout("false");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "file_id","type" : "STRING","size" : "256"},{"id" : "file_name","type" : "STRING","size" : "256"},{"id" : "file_size","type" : "STRING","size" : "256"},{"id" : "file_type","type" : "STRING","size" : "256"},{"id" : "file_select","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTemp", this);
            obj._setContents({});
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn00","11","20","421","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("파일 선 택");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","460","20","630","250",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"87\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"file_id\"/><Cell col=\"2\" text=\"file_name\"/><Cell col=\"3\" text=\"file_size\"/><Cell col=\"4\" text=\"file_type\"/><Cell col=\"5\"/><Cell col=\"6\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:file_select\"/><Cell col=\"1\" text=\"bind:file_id\"/><Cell col=\"2\" text=\"bind:file_name\"/><Cell col=\"3\" text=\"bind:file_size\"/><Cell col=\"4\" text=\"bind:file_type\"/><Cell col=\"5\" text=\"다운로드\" displaytype=\"buttoncontrol\"/><Cell col=\"6\" text=\"삭제\" displaytype=\"buttoncontrol\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","11","45","421","21",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("파일 업로드");
            this.addChild(obj.name, obj);

            obj = new Button("btn02","11","76","421","22",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("파일목록");
            this.addChild(obj.name, obj);

            obj = new Button("btn03","10","109","421","22",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("전체 다운로드");
            this.addChild(obj.name, obj);

            obj = new Button("btn04","11","144","417","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("선택 다운로드");
            this.addChild(obj.name, obj);

            obj = new Button("btn05","10","185","418","25",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("선택 다운로드 2");
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
        this.registerScript("Work_FIle.xfdl", function() {


        this.btn00_onclick = function(obj,e)
        {
        	this.FileDialog00.open("Select File", 3,"%DOCUMENT%");

        };

        this.FileDialog00_onclose = function(obj,e)
        {
        	var objFileList=e.virtualfiles;
        	for(var i=0;i<objFileList.length;i++){
        		var bExist = this.FileUpTransfer00.existFile(objFileList[i]);
        		if(!bExist){
        			var sFileName=objFileList[i].filename;
        			var sFileType=sFileName.substr(sFileName.lastIndexOf(".")+1);
        			this.FileUpTransfer00.addFile(sFileName, objFileList[i]);

        			var nRow=this.dsFIle.addRow();
        			this.dsFIle.setColumn(nRow,"file_id",sFileName);
        			this.dsFIle.setColumn(nRow,"file_name",sFileName);
        			this.dsFIle.setColumn(nRow,"file_type",sFileType);
        		}
        	}
        };

        this.btn01_onclick = function(obj,e)
        {
        	var sUrl="SvcUrl::edu/uploadFile.do";
        	this.FileUpTransfer00.setPostData("userDir","nexa_file");//NAme
        	this.FileUpTransfer00.upload(sUrl);
        };


        this.FileUpTransfer00_onsuccess = function(obj,e)
        {
        		var objDs = e.datasets[0];
        		for(var i=0;i<objDS.rowcount;i++){
        			var nRow=this.dsFIle.findRow("file_name",objDs.getColumn(i,"file_name"));
        			this.dsFIle.setColumn(nRow,"file_id",objDs.getColumn(i,"file_id"));
        			this.dsFIle.setColumn(nRow,"file_size",objDs.getColumn(i,"file_size"));
        		}
        };

        this.btn02_onclick = function(obj,e)
        {
        		this.transaction("getFileList"
        					 ,"SvcUrl::edu/getFileList.do"
        					 ,""
        					 ,"dsFile=dsFile"
        				 	 ,"userDir='nexa_file'"
        					 ,"fnCallback");

        }

        this.btn03_onclick = function(obj,e)
        {
        		var sUrl="SvcUrl::edu/downloadFile.do"
        		this.FileDownTransfer00.setPostData("userDir","nexa_file");

        		var sXml=encodeURIComponent(encodeURIComponent(this.dsFile.saveXML()))	;
        		this.FileDownTransfer00.setPostData("fileDs","");
        		this.FileDownTransfer00.setPostData("fileDs",sXml);

        		trace(this.dsFile.saveXML());
        		this.FileDownTransfer00.downloadfilename = "첨부파일.zip";
        		this.FileDownTransfer00.download(sUrl);
        };







        this.grd00_oncellclick = function(obj,e)
        {
        	if(e.cell == 5){//다운로드
        		var FileId = this.dsFile.getColumn(e.row,"file_id");
        		var sUrl="SvcUrl::edu/downloadFile.do"
        		this.FileDownTransfer00.setPostData("userDir","nexa_file");
        		this.FileDownTransfer00.setPostData("fileId",FileId);
        		this.FileDownTransfer00.downloadfilename = FileId;
        		this.FileDownTransfer00.download(sUrl);
        	}
        	else if(e.cell==6){//삭제
        		var FileId = this.dsFile.getColumn(e.row,"file_id");
        		this.transaction("deleteFile"
        						,"SvcUrl::edu/deleteFile.do"
        						,""
        						,""
        						,"userDir='nexa_file' fileId="+nexacro.wrapQuote(FileId)
        						,"fnCallback");
        	}

        };

        this.fnCallback=function(svcId,errCd,errMsg){
        	if(svcId<0) return;
        	if(svcId=="deleteFile"){
        		this.dsFile.deleteRow(this.dsFile.rowposition);
        		this.dsFile.applyChange();
        	}
        }

        this.btn04_onclick = function(obj,e)
        {

        // 	var nCnt = 0;
        // 	for(var i=0; i<this.dsFile.rowcount;i++){
        // 		var nValue = this.dsFile.getColumn(i,"file_select");
        // 		if(nValue=="1"){
        // 		nCnt++;
        // 		}
        // 	}
        // 	alert(nCnt);


        // 	this.dsFile.filter("file_select == '1'");
        // 	alert(this.dsFile.getCount());
        // 	var sUrl="SvcUrl::edu/downloadFile.do"
        // 	this.FileDownTransfer00.setPostData("userDir","nexa_file");
        //
        // 	var sXml=encodeURIComponent(encodeURIComponent(this.dsFile.saveXML()))	;
        // 	this.FileDownTransfer00.setPostData("fileDs","");
        // 	this.FileDownTransfer00.setPostData("fileDs",sXml);
        //
        // 	trace(this.dsFile.saveXML());
        // 	this.FileDownTransfer00.downloadfilename = "첨부파일.zip";
        // 	this.FileDownTransfer00.download(sUrl);
        // 	this.dsFile.filter("");

        	var nCnt = this.dsFile.getCaseCount("file_select == '1'");
        	if(nCnt==0){
        		alert("선택한 파일이 없습니다");
        	}
        	else if(nCnt==1){//단건

        		var FileId = this.dsFile.getColumn(e.row,"file_id");
        		var sUrl="SvcUrl::edu/downloadFile.do"
        		this.FileDownTransfer00.setPostData("userDir","nexa_file");
        		this.FileDownTransfer00.setPostData("fileId",FileId);
        		this.FileDownTransfer00.downloadfilename = FileId;
        		this.FileDownTransfer00.download(sUrl);
        	}
        	else{//압축
        		this.dsFile.filter("file_select == '1'");
        		this.dsTemp.copyData(this.dsFile,true);
        		var sUrl="SvcUrl::edu/downloadFile.do"
        		this.FileDownTransfer00.setPostData("userDir","nexa_file");

        		var sXml=encodeURIComponent(encodeURIComponent(this.dsTemp.saveXML()))	;
        		this.FileDownTransfer00.setPostData("fileDs","");
        		this.FileDownTransfer00.setPostData("fileDs",sXml);

        		trace(this.dsTemp.saveXML());
        		this.FileDownTransfer00.downloadfilename = "첨부파일.zip";
        		this.FileDownTransfer00.download(sUrl);
        	}

        };

        this.btn05_onclick = function(obj,e)
        {
        	var arrRow=this.dsFile.extractRows("file_select=='1'");
        	if(arrRow.length==0){
        		//업서
        	}
        	else if(arrRow.length==1){//단건

        	}
        	else{//압출
        		for(var i=0;i<addRow.length;i++){
        			var nRow = this.dsTemp.addRow();
        			this.dsTemp.copyRow(nRow,this.dsFile,arrRow[i]);
        		}
        	}
        };

        this.grd00_ondrop = function(obj,e)
        {
        	var ovjFileList=e.filelist;
        	for(var i=0;i<objFileList.length;i++){
        		var bExist = this.FileUpTransfer00.existFile(objFileList[i]);
        		if(!bExist){
        			var sFileName=objFileList[i].filename;
        			var sFileType=sFileName.substr(sFileName.lastIndexOf(".")+1);
        			this.FileUpTransfer00.addFile(sFileName, objFileList[i]);

        			var nRow=this.dsFIle.addRow();
        			this.dsFIle.setColumn(nRow,"file_id",sFileName);
        			this.dsFIle.setColumn(nRow,"file_name",sFileName);
        			this.dsFIle.setColumn(nRow,"file_type",sFileType);
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.grd00.addEventHandler("oncellclick",this.grd00_oncellclick,this);
            this.grd00.addEventHandler("ondrop",this.grd00_ondrop,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
            this.btn03.addEventHandler("onclick",this.btn03_onclick,this);
            this.btn04.addEventHandler("onclick",this.btn04_onclick,this);
            this.btn05.addEventHandler("onclick",this.btn05_onclick,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
            this.FileDialog00.addEventHandler("onclose",this.FileDialog00_onclose,this);
        };
        this.loadIncludeScript("Work_FIle.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
