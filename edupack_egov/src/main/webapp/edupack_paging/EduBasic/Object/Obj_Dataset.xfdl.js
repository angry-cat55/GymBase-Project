(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Obj_Dataset");
            this.set_titletext("Obj_Dataset");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_data", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "CORP_CODE","type" : "STRING","size" : "256"},{"id" : "EMP_ID","type" : "STRING","size" : "256"},{"id" : "EMP_NAME","type" : "STRING","size" : "256"},{"id" : "DEPT_CODE","type" : "STRING","size" : "256"},{"id" : "HIRE_DATE","type" : "STRING","size" : "256"},{"id" : "GENDER","type" : "STRING","size" : "256"},{"id" : "SALARY","type" : "INT","size" : "256"},{"id" : "BONUS","type" : "INT","size" : "256"}]},"Rows" : [{"CORP_CODE" : "KR","EMP_ID" : "KR010","EMP_NAME" : "Melon","DEPT_CODE" : "10","HIRE_DATE" : "20071001","SALARY" : "8000","BONUS" : "4000","GENDER" : "F"},{"CORP_CODE" : "US","EMP_ID" : "US050","EMP_NAME" : "Jackson","DEPT_CODE" : "20","HIRE_DATE" : "20091021","SALARY" : "4000","BONUS" : "2000","GENDER" : "M"},{"CORP_CODE" : "KR","EMP_ID" : "KR240","EMP_NAME" : "Jennie","DEPT_CODE" : "40","HIRE_DATE" : "20110508","SALARY" : "6000","BONUS" : "3000","GENDER" : "F"},{"CORP_CODE" : "JP","EMP_ID" : "JP150","EMP_NAME" : "Dennis","DEPT_CODE" : "30","GENDER" : "M"},{"CORP_CODE" : "US","EMP_ID" : "US020","EMP_NAME" : "Andrew","DEPT_CODE" : "40","HIRE_DATE" : "20160602","SALARY" : "4000","BONUS" : "1000","GENDER" : "M"},{"CORP_CODE" : "KR","EMP_ID" : "KR200","EMP_NAME" : "Jungkook","DEPT_CODE" : "40","GENDER" : "M"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp", this);
            obj._setContents({});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_title","20.00","0","300","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Dataset");
            obj.set_cssclass("sta_WF_GuideTitle1");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","20","86","480","181",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_data");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"55\"/><Column size=\"65\"/><Column size=\"65\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"CORP_CODE\"/><Cell col=\"1\" text=\"EMP_ID\"/><Cell col=\"2\" text=\"EMP_NAME\"/><Cell col=\"3\" text=\"DEPT_CODE\"/><Cell col=\"4\" text=\"GENDER\"/><Cell col=\"5\" text=\"SALARY\"/><Cell col=\"6\" text=\"BONUS\"/></Band><Band id=\"body\"><Cell text=\"bind:CORP_CODE\"/><Cell col=\"1\" text=\"bind:EMP_ID\"/><Cell col=\"2\" text=\"bind:EMP_NAME\"/><Cell col=\"3\" text=\"bind:DEPT_CODE\"/><Cell col=\"4\" text=\"bind:GENDER\"/><Cell col=\"5\" text=\"bind:SALARY\"/><Cell col=\"6\" text=\"bind:BONUS\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","520","86","480","181",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_temp");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"55\"/><Column size=\"65\"/><Column size=\"65\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"CORP_CODE\"/><Cell col=\"1\" text=\"EMP_ID\"/><Cell col=\"2\" text=\"EMP_NAME\"/><Cell col=\"3\" text=\"DEPT_CODE\"/><Cell col=\"4\" text=\"GENDER\"/><Cell col=\"5\" text=\"SALARY\"/><Cell col=\"6\" text=\"BONUS\"/></Band><Band id=\"body\"><Cell text=\"bind:CORP_CODE\"/><Cell col=\"1\" text=\"bind:EMP_ID\"/><Cell col=\"2\" text=\"bind:EMP_NAME\"/><Cell col=\"3\" text=\"bind:DEPT_CODE\"/><Cell col=\"4\" text=\"bind:GENDER\"/><Cell col=\"5\" text=\"bind:SALARY\"/><Cell col=\"6\" text=\"bind:BONUS\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_desc1","520","280","480","399",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_positionstep("0");
            obj.set_cssclass("txt_WF_GuideDesc");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20.00","60","152","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("binddataset = \"ds_data\"");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","520","60","152","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("binddataset = \"ds_temp\"");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","20","280","480","400",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","188","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("dataset - column");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","35",null,"59","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("[Property] colcount\r\n[Method] getColCount, addColumn, getColID, getColumnInfo");
            obj.set_cssclass("sta_WF_GuideScript");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","0","99","109","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("column count");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01","129","99","95","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("column add");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button02","244","99","88","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("column id");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button03","352","99","102","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("column info");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","0","160","188","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("dataset - row");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","0","195","460","82",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("[Property] rowposition, rowcount\r\n[Method] getRowCount, addRow, insertRow, deleteRow, deleteMultiRows\tdeleteAll");
            obj.set_cssclass("sta_WF_GuideScript");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button04","0","282","88","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("row index");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button05","108","282","88","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("row count");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button06","216","282","131","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("row add, insert");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button07","367","282","95","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("row delete");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","2","343","188","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("data control");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05","0","378","460","59",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("[Method] getColumn, setColumn, getOrgColumn, getDeletedRowCount, getDeletedColumn");
            obj.set_cssclass("sta_WF_GuideScript");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button08","0","442","81","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("get data");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button09","101","442","81","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_text("set data");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button10","202","442","116","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_text("original data");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button11","338","442","109","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_text("deleted data");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06","0","503","188","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_text("find data");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static07","0","538","460","59",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_text("[Method] getColumn, setColumn, getOrgColumn, getDeletedRowCount, getDeletedColumn");
            obj.set_cssclass("sta_WF_GuideScript");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button12","10","602","116","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_text("find-single");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button13","146","602","109","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_text("find-multi");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button14","275","602","109","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_text("find-array");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static08","0","663","188","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_text("sort, filter");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static09","0","698","460","59",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_text("[Property] keystring\r\n[Method] filter, getRowCountNF");
            obj.set_cssclass("sta_WF_GuideScript");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button15","10","762","52","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_text("sort");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button16","107","793","109","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("28");
            obj.set_text("clear filter");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button17","246","793","116","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("29");
            obj.set_text("filterd count");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button18","11","793","66","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            obj.set_text("filter");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button19","107","762","116","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            obj.set_text("clear sorting");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static10","5","854","188","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("30");
            obj.set_text("data calculation");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static11","2","889","460","36",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("31");
            obj.set_text("[Method] getAvg, getSum,  getCaseAvg");
            obj.set_cssclass("sta_WF_GuideScript");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button20","5","930","73","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("32");
            obj.set_text("average");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button21","211","930","52","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("34");
            obj.set_text("case");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static12","10","991","188","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("35");
            obj.set_text("data copy");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static13","2","1026","460","36",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("36");
            obj.set_text("[Method] copyData, appendData, copyRow\t");
            obj.set_cssclass("sta_WF_GuideScript");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button22","11","1067","52","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("37");
            obj.set_text("copy");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button23","204","1067","66","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("39");
            obj.set_text("append");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button24","93","1067","81","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("38");
            obj.set_text("row copy");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button25","108","930","73","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("33");
            obj.set_text("summary");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1020,700,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Obj_Dataset.xfdl", function() {
        this.fn_exec = function(obj,e)
        {
        	this.fn_result(obj, this.ds_data, this.txt_desc1);
        };

        this.fn_result = function(obj, objComp, objTxt)
        {
        	var strText = obj.text;
        	var strDesc = ``;
        	switch(strText) {
        		case 'column count':
        			var nCnt1 = this.ds_data.colcount;
        			var nCnt2 = this.ds_data.getColCount();
        			strDesc  = `* colcount, getColCount()	\n
                        var nCnt1 = this.ds_data.colcount;
                                // Result: ${nCnt1}	\n
                                var nCnt2 = his.ds_data.getColCount();
                                // Result: ${nCnt2}`;
			break;

        		case 'column add':
        			var sRtn = this.ds_data.addColumn("MEMO", "STRING", 100);
        			strDesc  = `* addColumn()	\n
                        this.ds_data.addColumn("MEMO", "STRING", 100);
                                // Column Index: ${sRtn}`
			break;

        		case 'column id':
        			var arrColID = [];
        			for(var i=0; i<this.ds_data.colcount; i++){
                        arrColID.push(this.ds_data.getColID(i));
        			};
        			strDesc  = `* getColID()	\n
                        for(var i=0; i<this.ds_data.colcount; i++){
                                	var sRtn = this.ds_data.getColID(i);
                                };	\n
                                // Result
                                ${arrColID}`;
			break;

        		case 'column info':
        			strDesc  = `* getColumnInfo()	\n
                        var objColInfo, sID, sType, nSize;
                                for(var i=0; i<this.ds_data.colcount; i++){
                                	objColInfo = this.ds_data.getColumnInfo(i);
                                	sID = objColInfo.id;
                                	sType = objColInfo.type;
                                	nSize = objColInfo.size
                                };		\n
                                // Result`
                        for(var i=0; i<this.ds_data.colcount; i++){
                                	objColInfo = this.ds_data.getColumnInfo(i);
                                	sID = objColInfo.id;
                                	sType = objColInfo.type;
                                	nSize = objColInfo.size
        							strDesc += `\n ${sID},${sType}, ${nSize}`
                                };
        			break;

        		case 'row index':
        			var nRow = this.ds_data.rowposition;
        			strDesc  = `* rowposition	\n
                        var nRow = this.ds_data.rowposition;
                                // row index: ${nRow}`;
			break;

        		case 'row count':
        			var nCnt1 = this.ds_data.rowcount;
        			var nCnt2 = this.ds_data.getRowCount();
        			strDesc  = `* rowcount, getRowCount()	\n
                        var nCnt1 = this.ds_data.rowcount;
                                // Result: ${nCnt1}		\n
                                var nCnt2 = his.ds_data.getRowCount();
                                // Result: ${nCnt2}`;
			break;

        		case 'row add, insert':
        			var nRow1 = this.ds_data.addRow();
        			var nRow2 = this.ds_data.insertRow(1);
        			strDesc  = `* addRow(), insertRow()		\n
                        var nRow1 = this.ds_data.addRow();
                                // row index: ${nRow1}		\n
                                var nRow2 = this.ds_data.insertRow(1);
                                // row index: ${nRow2}`;
			break;

        		case 'row delete':
        			this.ds_data.deleteRow(this.ds_data.rowposition);
        			strDesc  = `* deleteRow(), deleteAll(), deleteMultiRows()		\n
                        this.ds_data.deleteRow(this.ds_data.rowposition);	\n
                                // this.ds_data.deleteAll();
                                // this.ds_data.deleteMultiRows([0,2,3]);	`;
			break;

        		case 'get data':
        			var nRow = this.ds_data.rowposition;
        			var sRtn = this.ds_data.getColumn(nRow, "EMP_NAME");
        			strDesc  = `* getColumn()	\n
                        var nRow = this.ds_data.rowposition;
                                var sRtn = this.ds_data.getColumn(nRow, "EMP_NAME");	\n
                                // Result: ${sRtn}`;
			break;

        		case 'set data':
        			var nRow = this.ds_data.rowposition;
        			this.ds_data.setColumn(nRow, "EMP_NAME", "NEXACRO");
        			strDesc  = `* setColumn()	\n
                        var nRow = this.ds_data.rowposition;
                                this.ds_data.setColumn(nRow, "EMP_NAME", "NEXACRO");	`;
			break;

        		case 'original data':
        			var nRow = this.ds_data.rowposition;
        			var sRtn = this.ds_data.getOrgColumn(nRow, "EMP_NAME");
        			strDesc  = `* getOrgColumn()	\n
                        var nRow = this.ds_data.rowposition;
                                var sRtn = this.ds_data.getOrgColumn(nRow, "EMP_NAME");		\n
                                // Result: ${sRtn}`;
			break;

        		case 'deleted data':
        			var arrName = [];
        			for(var i=0; i<this.ds_data.getDeletedRowCount(); i++){
        				arrName.push( this.ds_data.getDeletedColumn(i, "EMP_NAME") );
        			}
        			strDesc  = `* getDeletedRowCount(), getDeletedColumn()		\n
                        for(var i=0; i<this.ds_data.getDeletedRowCount(); i++){
                                	var sRtn = this.ds_data.getDeletedColumn(i, "EMP_NAME");
                                }	\n
                                // Result: ${arrName}`;
			break;

        		case 'find-single':
        			var nRow = this.ds_data.findRow("EMP_ID", "KR240");
        			var sRtn1 = this.ds_data.getColumn(nRow, "EMP_NAME");
        			var sRtn2 = this.ds_data.lookup("EMP_ID", "KR240", "EMP_NAME");
        			strDesc  = `* findRow(), lookup()	\n
                        -------------------------------------------------
                                Find the 'EMP_NAME' where 'EMP_ID' is 'KR240'
                                -------------------------------------------------	\n
                                * findRow()
                                var nRow = this.ds_data.findRow("EMP_ID", "KR240");
                                var sRtn1 = this.ds_data.getColumn(nRow, "EMP_NAME");
                                // Result: ${sRtn1}		\n
                                * lookup()
                                var sRtn2 = this.ds_data.lookup("EMP_ID", "KR240", "EMP_NAME");
                                // Result: ${sRtn2}	`;
			break;
        		case 'find-multi':
        			var nRow = this.ds_data.findRowExpr("CORP_CODE == 'KR' && DEPT_CODE == '40'");
        			var sRtn = this.ds_data.getColumn(nRow, "EMP_NAME");
        			strDesc  = `* findRowExpr()		\n
                        ---------------------------------------------------------------------
                                Find the 'EMP_NAME' where 'CORP_CODE' is 'KR' and 'DEPT_CODE' is '40'
                                ---------------------------------------------------------------------	\n
                                var nRow = this.ds_data.findRowExpr("CORP_CODE == 'KR' && DEPT_CODE == '40'");
                                var sRtn = this.ds_data.getColumn(nRow, "EMP_NAME");
                                // Result: ${sRtn}`;
			break;
        		case 'find-array':
        			var arrRows = this.ds_data.extractRows("DEPT_CODE == '40'");
        			var arrName = [];
        			for(var i=0; i<arrRows.length; i++){
        				arrName.push(this.ds_data.getColumn(arrRows[i], "EMP_NAME"));
        			}
        			strDesc  = `* extractRows()		\n
                        -----------------------------------------------------
                                Find the list of 'EMP_NAME' where 'DEPT_CODE' is '40'
                                -----------------------------------------------------		\n
                                var arrRows = this.ds_data.extractRows("DEPT_CODE == '40'");
                                for(var i=0; i<arrRows.length; i++){
                                	var sRtn = this.ds_data.getColumn(arrRows[i], "EMP_NAME"));
                                }
                                // Result: ${arrName}`;
			break;

        		case 'sort':
        			this.ds_data.keystring = "S:-CORP_CODE+DEPT_CODE";
        			strDesc  = `* keystring		\n
                        ------------------------------------------------------------
                                Sort by CORP_CODE in descending and DEPT_CODE in ascending
                                ------------------------------------------------------------	\n
                                this.ds_data.keystring = "S:-CORP_CODE+DEPT_CODE";	`;
			break;

        		case 'clear sorting':
        			this.ds_data.keystring = "";
        			strDesc  = `* keystring			\n
                        this.ds_data.keystring = "";	`;
			break;

        		case 'filter':
        			this.ds_data.filter("DEPT_CODE == '40'");
        			strDesc  = `* filter()		\n
                        ------------------------------------------------------------
                                Filter data where 'DEPT_CODE' is '40'.
                                ------------------------------------------------------------	\n
                                this.ds_data.filter("DEPT_CODE == '40'");	`;
			break;

        		case 'clear filter':
        			this.ds_data.filter("");
        			strDesc  = `* filter()		\n
                        this.ds_data.filter("");	`;
			break;

        		case 'filterd count':
        			var nCnt1 = this.ds_data.getRowCount();
        			var nCnt2 = this.ds_data.getRowCountNF();
        			strDesc  = `* getRowCountNF()		\n
                        var nCnt1 = this.ds_data.getRowCount();
                                var nCnt2 = this.ds_data.getRowCountNF();	\n
                                // Result
                                getRowCount: ${nCnt1}
                                getRowCountNF: ${nCnt2}	`;
			break;

        		case 'average':
        			var nAvg1 = this.ds_data.getAvg("SALARY");
        			var nAvg2 = this.ds_data.getAvg("SALARY",0, -1, false);
        			strDesc  = `* getAvg()		\n
                        var nAvg1 = this.ds_data.getAvg("SALARY");
                                var nAvg2 = this.ds_data.getAvg("SALARY",0, -1, false);		\n
                                // Result
                                nAvg1: ${nAvg1}
                                nAvg2: ${nAvg2}	`;
			break;

        		case 'summary':
        			var nSum1 = this.ds_data.getSum("SALARY");
        			var nSum2 = this.ds_data.getSum("SALARY",0, 2);
        			strDesc  = `* getSum() 		\n
                        var nSum1 = this.ds_data.getSum("SALARY");
                                var nSum2 = this.ds_data.getSum("SALARY",0, 2);		\n
                                // Result
                                nSum1: ${nSum1}
                                nSum2: ${nSum2}	`;
			break;
        		case 'case':
        			var nAvg = this.ds_data.getCaseAvg("GENDER == 'M'", "SALARY+BONUS");
        			var nSum = this.ds_data.getCaseSum("GENDER == 'F'", "SALARY+BONUS");
        			strDesc  = `* getCaseAvg(), getCaseSum()... 		\n
                        var nAvg = this.ds_data.getCaseAvg("GENDER == 'M'", "SALARY+BONUS");
                                var nSum = this.ds_data.getCaseSum("GENDER == 'F'", "SALARY+BONUS");		\n
                                // Result
                                nAvg: ${nAvg}
                                nSum: ${nSum}	`;
			break;

        		case 'copy':
        			var nCnt = this.ds_temp.copyData(this.ds_data);
        			strDesc  = `* copyData() 		\n
                        var nCnt = this.ds_temp.copyData(this.ds_data);
                                // Result: ${nCnt}	`;
			break;

        		case 'append':
        			var nCnt = this.ds_temp.appendData(this.ds_data);
        			strDesc  = `* appendData() 		\n
                        var nCnt = this.ds_temp.appendData(this.ds_data);
                                // Result: ${nCnt}	`;
			break;

        		case 'row copy':
        			var nFromRow = this.ds_data.findRow("EMP_ID", "KR010");
        			var nToRow = this.ds_temp.addRow();
        			this.ds_temp.copyRow(nToRow, this.ds_data, nFromRow);
        			strDesc  = `* copyRow() 		\n
                        var nFromRow = this.ds_data.findRow("EMP_ID", "KR010");
                                var nToRow = this.ds_temp.addRow();
                                this.ds_temp.copyRow(nToRow, this.ds_data, nFromRow);		`;
			break;

        		default:
        			break;
        	}

        	// split 줄바꿈으로 분리, line.replace 각 줄 앞의 스페이스 제거, join 다시 문자열로 결합
        	objTxt.value = strDesc.split('\n').map(line => line.replace(/^[ ]+/g, '')).join('\n');
        	//objTxt.value = strDesc.split('\n').map(line => line.trimStart()).join('\n');
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Grid00.addEventHandler("onheadclick",this.grd_emp_onheadclick,this);
            this.Grid01.addEventHandler("onheadclick",this.grd_emp_onheadclick,this);
            this.Div00.form.Button00.addEventHandler("onclick",this.fn_exec,this);
            this.Div00.form.Button01.addEventHandler("onclick",this.fn_exec,this);
            this.Div00.form.Button02.addEventHandler("onclick",this.fn_exec,this);
            this.Div00.form.Button03.addEventHandler("onclick",this.fn_exec,this);
            this.Div00.form.Button04.addEventHandler("onclick",this.fn_exec,this);
            this.Div00.form.Button05.addEventHandler("onclick",this.fn_exec,this);
            this.Div00.form.Button06.addEventHandler("onclick",this.fn_exec,this);
            this.Div00.form.Button07.addEventHandler("onclick",this.fn_exec,this);
            this.Div00.form.Button08.addEventHandler("onclick",this.fn_exec,this);
            this.Div00.form.Button09.addEventHandler("onclick",this.fn_exec,this);
            this.Div00.form.Button10.addEventHandler("onclick",this.fn_exec,this);
            this.Div00.form.Button11.addEventHandler("onclick",this.fn_exec,this);
            this.Div00.form.Button12.addEventHandler("onclick",this.fn_exec,this);
            this.Div00.form.Button13.addEventHandler("onclick",this.fn_exec,this);
            this.Div00.form.Button14.addEventHandler("onclick",this.fn_exec,this);
            this.Div00.form.Button15.addEventHandler("onclick",this.fn_exec,this);
            this.Div00.form.Button16.addEventHandler("onclick",this.fn_exec,this);
            this.Div00.form.Button17.addEventHandler("onclick",this.fn_exec,this);
            this.Div00.form.Button18.addEventHandler("onclick",this.fn_exec,this);
            this.Div00.form.Button19.addEventHandler("onclick",this.fn_exec,this);
            this.Div00.form.Button20.addEventHandler("onclick",this.fn_exec,this);
            this.Div00.form.Button21.addEventHandler("onclick",this.fn_exec,this);
            this.Div00.form.Button22.addEventHandler("onclick",this.fn_exec,this);
            this.Div00.form.Button23.addEventHandler("onclick",this.fn_exec,this);
            this.Div00.form.Button24.addEventHandler("onclick",this.fn_exec,this);
            this.Div00.form.Button25.addEventHandler("onclick",this.fn_exec,this);
            this.ds_data.addEventHandler("cancolumnchange",this.ds_data_cancolumnchange,this);
            this.ds_data.addEventHandler("oncolumnchanged",this.ds_data_oncolumnchanged,this);
        };
        this.loadIncludeScript("Obj_Dataset.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
