(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Obj_FileUpDownTransfer");
            this.set_titletext("Obj_FileUpDownTransfer");
            this.set_border("");
            this.set_background("");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUpload", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "CHK","type" : "STRING","size" : "256"},{"id" : "FILE_NAME","type" : "STRING","size" : "256"},{"id" : "FILE_URL","type" : "STRING","size" : "256"},{"id" : "DEPTH","type" : "STRING","size" : "256"},{"id" : "STATUS","type" : "STRING","size" : "256"},{"id" : "FiLE_SIZE","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDownload", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "CHK","type" : "STRING","size" : "256"},{"id" : "FILE_NAME","type" : "STRING","size" : "256"},{"id" : "FILE_URL","type" : "STRING","size" : "256"},{"id" : "DEPTH","type" : "STRING","size" : "256"},{"id" : "STATUS","type" : "STRING","size" : "256"},{"id" : "FiLE_SIZE","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","20","380","250","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("FileDownload");
            obj.set_cssclass("sta_WF_GuideTitle2");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"64","69","26","93",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("delete");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_LineBlue");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFileUpload","20","95",null,"260","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsUpload");
            obj.set_autofittype("col");
            obj.set_nodatatext("You can attach files by dragging them.");
            obj.set_positionstep("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"42\" band=\"left\"/><Column size=\"152\"/><Column size=\"320\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"FILE_NAME\"/><Cell col=\"2\" text=\"FILE_URL\"/><Cell col=\"3\" text=\"SIZE\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:FILE_NAME\" displaytype=\"normal\" edittype=\"none\" treelevel=\"bind:DEPTH\"/><Cell col=\"2\" text=\"bind:FILE_URL\"/><Cell col=\"3\" treelevel=\"bind:DEPTH\" text=\"bind:FiLE_SIZE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnUpload",null,"64","69","26","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("upload");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_LineBlue");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFileDownload","20","415",null,"260","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsDownload");
            obj.set_autofittype("col");
            obj.set_positionstep("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\" band=\"left\"/><Column size=\"152\"/><Column size=\"320\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"0\"/><Cell col=\"1\" text=\"FILE_NAME\"/><Cell col=\"2\" text=\"FILE_URL\"/><Cell col=\"3\" text=\"SIZE\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:FILE_NAME\" displaytype=\"normal\" edittype=\"none\" treelevel=\"bind:DEPTH\"/><Cell col=\"2\" text=\"bind:FILE_URL\"/><Cell col=\"3\" treelevel=\"bind:DEPTH\" text=\"bind:FiLE_SIZE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnDonwload",null,"384","106","26","19",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("All DownLoad");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_LineRed");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"384","106","26","131",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Get List");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_LineRed");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"64","69","26","167",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("add");
            obj.set_cssclass("btn_WF_LineBlue");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","20","0","300","60",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("FileUpTransfer, FileDownTransfer");
            obj.set_cssclass("sta_WF_GuideTitle1");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static56","20","60","250","35",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("FileUpload");
            obj.set_cssclass("sta_WF_GuideTitle2");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","desktop,Desktop_screen",1020,700,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("Obj_FileUpDownTransfer");
                p.set_border("");
                p.set_background("");

                p.Static02.set_taborder("0");
                p.Static02.set_text("FileDownload");
                p.Static02.set_cssclass("sta_WF_GuideTitle2");
                p.Static02.set_positionstep("0");
                p.Static02.move("20","380","250","35",null,null);

                p.btnDel.set_taborder("1");
                p.btnDel.set_text("delete");
                p.btnDel.set_positionstep("0");
                p.btnDel.set_cssclass("btn_WF_LineBlue");
                p.btnDel.move(null,"64","69","26","93",null);

                p.grdFileUpload.set_taborder("2");
                p.grdFileUpload.set_binddataset("dsUpload");
                p.grdFileUpload.set_autofittype("col");
                p.grdFileUpload.set_nodatatext("You can attach files by dragging them.");
                p.grdFileUpload.set_positionstep("0");
                p.grdFileUpload.move("20","95",null,"260","20",null);

                p.btnUpload.set_taborder("3");
                p.btnUpload.set_text("upload");
                p.btnUpload.set_positionstep("0");
                p.btnUpload.set_cssclass("btn_WF_LineBlue");
                p.btnUpload.move(null,"64","69","26","20",null);

                p.grdFileDownload.set_taborder("4");
                p.grdFileDownload.set_binddataset("dsDownload");
                p.grdFileDownload.set_autofittype("col");
                p.grdFileDownload.set_positionstep("0");
                p.grdFileDownload.move("20","415",null,"260","20",null);

                p.btnDonwload.set_taborder("5");
                p.btnDonwload.set_text("All DownLoad");
                p.btnDonwload.set_positionstep("0");
                p.btnDonwload.set_cssclass("btn_WF_LineRed");
                p.btnDonwload.move(null,"384","106","26","19",null);

                p.btnSearch.set_taborder("6");
                p.btnSearch.set_text("Get List");
                p.btnSearch.set_positionstep("0");
                p.btnSearch.set_cssclass("btn_WF_LineRed");
                p.btnSearch.move(null,"384","106","26","131",null);

                p.btnAdd.set_taborder("7");
                p.btnAdd.set_text("add");
                p.btnAdd.set_cssclass("btn_WF_LineBlue");
                p.btnAdd.move(null,"64","69","26","167",null);

                p.sta_title.set_taborder("8");
                p.sta_title.set_text("FileUpTransfer, FileDownTransfer");
                p.sta_title.set_cssclass("sta_WF_GuideTitle1");
                p.sta_title.set_positionstep("-1");
                p.sta_title.move("20","0","300","60",null,null);

                p.Static56.set_taborder("9");
                p.Static56.set_text("FileUpload");
                p.Static56.set_cssclass("sta_WF_GuideTitle2");
                p.Static56.set_positionstep("0");
                p.Static56.move("20","60","250","35",null,null);
            	}
            );
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","mobile",480,1050,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static02.set_text("FileDownload");
                p.Static02.move("20","592","220","40",null,null);

                p.btnDel.move(null,"194","90","46","115",null);

                p.grdFileUpload.set_cssclass("grd_WF_FileUpload");
                p.grdFileUpload.move("20","247",null,"320","20",null);

                p.btnUpload.move(null,"194","90","46","20",null);

                p.grdFileDownload.set_cssclass("grd_WF_FileDownload");
                p.grdFileDownload.move("20","697",null,"320","20",null);

                p.btnDonwload.move(null,"644","126","46","20",null);

                p.btnSearch.move(null,"644","150","46","151",null);

                p.btnAdd.move(null,"194","90","46","210",null);
            	}
            );
            obj.set_mobileorientation("portrait");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Obj_FileUpDownTransfer.xfdl", function() {
        //this.serverUrl = "http://localhost:8080/edu/nexacroN24/"
        this.serverUrl = "http://demo.nexacro.com/edu/nexacroN24/";
        this.folderName = "uploadFile";	//upload directory

        this.btnAdd_onclick = function(obj,e)
        {
        	this.FileDialog00.open("SELECT FILE", FileDialog.MULTILOAD, "%DOCUMENT%" );
        };

        this.FileDialog00_onclose = function(obj,e)
        {
        	this.fnAddFileList(e.virtualfiles);
        };

        this.fnAddFileList = function(objFileList)
        {
        	//array type virtualfile List
        	var objFile, strId;
        	var len = objFileList.length;
        	for(var i=0; i<len; i++){
        		var bExist = this.FileUpTransfer00.existFile(objFileList[i]);
        		if(!bExist){
        			strId = this.fnGetUniqueId();
        			this.FileUpTransfer00.addFile(strId, objFileList[i]);
        			objFileList[i].addEventHandler("onsuccess", this.objFileList_onsuccess, this);
        			objFileList[i].addEventHandler("onerror", this.objFileList_onerror, this);

        			objFileList[i].open(null, VirtualFile.openRead);
        			objFileList[i].getFileSize();	//return file size
        			objFileList[i].close();
        		}
        	}
        }

        this.objFileList_onsuccess = function(obj, e)
        {
        	//getFileSize() call --> reason : 9
        	if(e.reason == 9){
        		var nRowIdx = this.dsUpload.addRow();
        		this.dsUpload.setColumn(nRowIdx, "FILE_NAME", obj.filename);
        		this.dsUpload.setColumn(nRowIdx, "FiLE_SIZE", this.fnGetFileSize(e.filesize));
        		this.dsUpload.setColumn(nRowIdx, "FILE_URL", obj.fullpath);
        	}
        }

        this.objFileList_onerror = function(obj, e)
        {
        	trace("errortype: "+e.errortype);
        	trace("errormsg: "+e.errormsg);
        	trace("statuscode: "+e.statuscode);
        }

        this.btnDel_onclick = function(obj,e)
        {
        	//selected file delete
        	var length = this.dsUpload.rowcount;
        	for(var i=(length-1); i>=0; i--){
        		if(this.dsUpload.getColumn(i, "CHK") == "1"){
        			this.dsUpload.deleteRow(i);
        			var objFileList = this.FileUpTransfer00.filelist[i];		//selected file search
        			this.FileUpTransfer00.removeFile(objFileList);			//filelist remove
        		}
        	}
        };

        this.btnUpload_onclick = function(obj,e)
        {
        	//file upload 실행
        	this.setWaitCursor(true);
        	var uploadUrl = this.serverUrl +"fileUploadTransfer.jsp?filefolder=" + this.folderName;
        	this.FileUpTransfer00.upload(uploadUrl);
        };

        /**
         * @description success
        */
        this.FileUpTransfer00_onsuccess = function(obj,e)
        {
        	this.setWaitCursor(false);
        	var objCallDs = e.datasets[0];

        	for(var i=0; i<objCallDs.getRowCount(); i++){
        		this.dsUpload.setColumn(i, "FILE_URL",objCallDs.getColumn(i,"savePath"));
        	}

        	alert("file upload success");
        };

        /**
         * @description error
        */
        this.FileUpTransfer00_onerror = function(obj,e)
        {
        	this.setWaitCursor(false);
        	alert(e.errortype + ">>" + e.errormsg);
        };



        /**
         * @description 파일 목록 가져오기
        */
        this.btnSearch_onclick = function(obj,e)
        {
        	//search attach file list
        	this.transaction("getFileList"
        	                ,"EduUrl::fileUploadList.jsp"
        					,""
        					,"dsDownload=dsList"
        					,"filefolder="+this.folderName
        					,"fn_callback");
        };

        this.fn_callback = function(svcId, errCode, errMsg)
        {
        	if(svcId == "getFileList"){
        		this.dsDownload.set_enableevent(false);
        		this.dsDownload.addColumn("CHK", "STRING", 255);
        		for(var i=0; i<this.dsDownload.getRowCount(); i++){
        			this.dsDownload.setColumn(i, "CHK", 0);
        			this.dsDownload.setColumn(i,"FiLE_SIZE",this.fnGetFileSize(this.dsDownload.getColumn(i,"FiLE_SIZE")));
        		}
        		this.dsDownload.set_enableevent(true);
        	}
        };


        this.btnDonwload_onclick = function(obj,e)
        {
        	if(this.dsDownload.getCaseCount("CHK == '1'") < 1){
        		alert("You must select 1 item.");
        	}
        	else{
        		if(this.dsDownload.getCaseCount("CHK == '1'") > 1){
        			this.fnDownloadFileAll();
        		}
        		else{
        			var nRow = this.dsDownload.filterRow("CHK", 1);
        			this.fnDownloadFile(nRow);
        		}
        	}
        };

        this.fnDownloadFile = function(i)
        {
        	this.FileDownTransfer00.clearPostDataList();

        	this.FileDownTransfer00.downloadfilename = this.dsDownload.getColumn(i, "FILE_NAME");	//runtime 전용 프로퍼티
        	this.FileDownTransfer00.setPostData("filepath", this.dsDownload.getColumn(i, "FILE_URL"));
        	this.FileDownTransfer00.setPostData("filename", this.dsDownload.getColumn(i, "FILE_NAME"));
        	this.FileDownTransfer00.setPostData("filefolder", this.folderName);
        	this.FileDownTransfer00.download(this.serverUrl + "fileDownloadTransfer.jsp");
        }

        this.fnDownloadFileAll = function()
        {
        	this.FileDownTransfer00.clearPostDataList();
        	var arrNameList = new Array();
        	for(var i=0; i<this.dsDownload.getRowCount(); i++){
        		if(this.dsDownload.getColumn(i, "CHK") == 1)
        			arrNameList.push(this.dsDownload.getColumn(i, "FILE_NAME"));
        	}

        	this.FileDownTransfer00.downloadfilename = "downFile.zip";	//runtime 전용 프로퍼티
        	this.FileDownTransfer00.setPostData("filenamelist", arrNameList);
        	this.FileDownTransfer00.download(this.serverUrl + "fileDownloadTransferAll.jsp?filefolder=" + "fileSample");
        }





        this.fnGetFileSize = function(filesize)
        {
        	var sOutput = filesize + " bytes";
        	for (var aMultiples = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], nMultiple = 0, nApprox = filesize / 1024; nApprox > 1; nApprox /= 1024, nMultiple++) {
        		sOutput = nApprox.toFixed(3) + " " + aMultiples[nMultiple];
        	}
        	return sOutput;
        };



        /**
         * @description 파일업로드 그리드 마우스 드랍 이벤트
        */
        this.grdFileUpload_ondrop = function(obj,e)
        {
        	if(e.datatype == "file")
        	{
        		this.fnAddFileList(e.filelist);
        	}
        };


        /**
         * @description 파일업로드 전체선택 이벤트
        */
        this.grdFileUpload_onheadclick = function(obj,e)
        {
        	if(e.col == 0){
        		var chk = obj.getHeadValue(0);
        		for(var i=0; i<this.dsUpload.rowcount; i++){
        			this.dsUpload.setColumn(i, "CHK", chk);
        		}
        	}
        };



        /**
         * @description All Check
        */
        this.grdFileDownload_onheadclick = function(obj,e)
        {
        	if(e.col == 0){
        		var chk = obj.getHeadValue(0); //  .getCellPropertyValue(e.row, e.cell, "text");
        		for(var i=0; i<this.dsUpload.rowcount; i++){
        			this.dsUpload.setColumn(i, "CHK", chk);
        		}
        	}
        };

        /**
         * @description
        */
        this.grdFileDownload_oncelldblclick = function(obj,e)
        {
        	this.fnDownloadFile(e.row);
        };

        /**
         * @description onsuccess
        */
        this.FileDownTransfer00_onsuccess = function(obj,e)
        {
        	trace(e.targetfullpath);
        };

        /**
         * @description onerror
        */
        this.FileDownTransfer00_onerror = function(obj,e)
        {
        	trace("error : " + e.errormsg);
        };


        this.fnGetUniqueId = function(prefix, separator)
        {
        	if ( this.fnIsNull(prefix) ) prefix = "";
        	if ( this.fnIsNull(separator) ) {
        		separator = 45;
        	} else {
        		separator = separator.charCodeAt(0);
        	}

        	var pThis = this,
        		charcode = this._ALPHA_CHAR_CODES,
        		math = Math;
        	var seq = 0;
        	var seq0;
        	var tmpArray = new Array(36);
        	var idx = -1;

        	while (seq < 8)
        	{
        		tmpArray[++idx] = charcode[math.random() * 16 | 0];
        		seq++;
        	}
        	seq = 0;
        	while (seq < 3)
        	{
        		tmpArray[++idx] = separator;//45 => "-", 95=> "_"
        		seq0 = 0;
        		while (seq0 < 4)
        		{
        			tmpArray[++idx] = charcode[math.random() * 16  | 0];
        			seq0++;
        		}
        		seq++;
        	}
        	tmpArray[++idx] = separator; //45 => "-", 95=> "_"

        	var tmpStr = (new Date()).getTime();
        	tmpStr = ("0000000" + tmpStr.toString(16)).substr(-8);
        	seq = 0;
        	while (seq < 8)
        	{
        		tmpArray[++idx] = tmpStr.charCodeAt(seq);
        		seq++;
        	}
        	seq = 0;
        	while (seq < 4)
        	{
        		tmpArray[++idx] = charcode[math.random() * 16 | 0];
        		seq++;
        	}
        	return prefix + String.fromCharCode.apply(null, tmpArray);
        };


        /**
         * @class Check whether a value exists
         * @param {String} sValue
         * @return {Boolean} true/false
         * @example
         * var bNull = this.fnIsNull("aaa");	// false
         */
        this.fnIsNull = function(sValue)
        {
            if (new String(sValue).valueOf() == "undefined") return true;
            if (sValue == null) return true;

            var ChkStr = new String(sValue);

            if (ChkStr == null) return true;
            if (ChkStr.toString().length == 0 ) return true;
            return false;
        };


        /**
         * @class  alphabet character code.
         * charvalue => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, a, b, c, d, e, f]
        */
        this._ALPHA_CHAR_CODES = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 97, 98, 99, 100, 101, 102]


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnDel.addEventHandler("onclick",this.btnDel_onclick,this);
            this.grdFileUpload.addEventHandler("oncelldblclick",this.grdFileUpload_oncelldblclick,this);
            this.grdFileUpload.addEventHandler("ondrop",this.grdFileUpload_ondrop,this);
            this.grdFileUpload.addEventHandler("onheadclick",this.grdFileUpload_onheadclick,this);
            this.btnUpload.addEventHandler("onclick",this.btnUpload_onclick,this);
            this.grdFileDownload.addEventHandler("oncelldblclick",this.grdFileDownload_oncelldblclick,this);
            this.grdFileDownload.addEventHandler("onheadclick",this.grdFileDownload_onheadclick,this);
            this.btnDonwload.addEventHandler("onclick",this.btnDonwload_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
            this.FileUpTransfer00.addEventHandler("onerror",this.FileUpTransfer00_onerror,this);
            this.FileDownTransfer00.addEventHandler("onsuccess",this.FileDownTransfer00_onsuccess,this);
            this.FileDownTransfer00.addEventHandler("onerror",this.FileDownTransfer00_onerror,this);
            this.FileDialog00.addEventHandler("onclose",this.FileDialog00_onclose,this);
        };
        this.loadIncludeScript("Obj_FileUpDownTransfer.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
