(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Mobile_ListView_Employees");
            this.set_titletext("리스트뷰 사원관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,728);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_emp", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "COL_CHK","type" : "STRING","size" : "1"},{"id" : "CORP_CODE","type" : "STRING","size" : "10"},{"id" : "DEPT_CODE","type" : "STRING","size" : "10"},{"id" : "FULL_NAME","type" : "STRING","size" : "50"},{"id" : "EMPL_ID","type" : "STRING","size" : "10"},{"id" : "POS_CODE","type" : "STRING","size" : "10"},{"id" : "HIRE_DATE","type" : "DATE","size" : "20"},{"id" : "SALARY","type" : "INT","size" : "10"},{"id" : "BONUS","type" : "INT","size" : "10"},{"id" : "GENDER","type" : "STRING","size" : "10"},{"id" : "PHONE_NO","type" : "STRING","size" : "11"},{"id" : "E_MAIL","type" : "STRING","size" : "50"},{"id" : "BIRTH_DAY","type" : "DATE","size" : "20"},{"id" : "MARRIED","type" : "STRING","size" : "10"},{"id" : "WEDD_DAY","type" : "DATE","size" : "20"},{"id" : "PROFILE","type" : "STRING","size" : "256"}]},"Rows" : [{"CORP_CODE" : "KR","DEPT_CODE" : "KR10","FULL_NAME" : "Melon","EMPL_ID" : "KR040","POS_CODE" : "30","HIRE_DATE" : "20071001","SALARY" : "9000","BONUS" : "5000","GENDER" : "W","MARRIED" : "1","PROFILE" : "imagerc::emp/img_emp11.png","COL_CHK" : "0","E_MAIL" : "Melon@nexacro.com","PHONE_NO" : "08053397552","BIRTH_DAY" : "19890325","WEDD_DAY" : "19910519"},{"COL_CHK" : "0","CORP_CODE" : "KR","DEPT_CODE" : "KR30","FULL_NAME" : "Elsa","EMPL_ID" : "KR240","POS_CODE" : "30","HIRE_DATE" : "20110508","SALARY" : "7000","BONUS" : "2000","GENDER" : "W","MARRIED" : "1","PROFILE" : "imagerc::emp/img_emp12.png","E_MAIL" : "Elsa@nexacro.com","PHONE_NO" : "08074018290","BIRTH_DAY" : "19700122","WEDD_DAY" : "20051004"},{"COL_CHK" : "0","CORP_CODE" : "KR","DEPT_CODE" : "KR30","FULL_NAME" : "Bts","EMPL_ID" : "KR210","POS_CODE" : "10","HIRE_DATE" : "20091021","SALARY" : "5000","BONUS" : "3000","GENDER" : "M","MARRIED" : "0","PROFILE" : "imagerc::emp/img_emp13.png","E_MAIL" : "Bts@nexacro.com","PHONE_NO" : "08042935992","BIRTH_DAY" : "19781222","WEDD_DAY" : ""},{"COL_CHK" : "0","CORP_CODE" : "CN","DEPT_CODE" : "CN20","FULL_NAME" : "Ted ","EMPL_ID" : "CN210","POS_CODE" : "10","HIRE_DATE" : "20091021","SALARY" : "6000","BONUS" : "1200","GENDER" : "M","MARRIED" : "0","PROFILE" : "imagerc::emp/img_emp14.png","E_MAIL" : "Ted@nexacro.com","PHONE_NO" : "08077267631","BIRTH_DAY" : "19640204","WEDD_DAY" : ""},{"COL_CHK" : "0","CORP_CODE" : "JP","DEPT_CODE" : "JP10","FULL_NAME" : "Diana","EMPL_ID" : "JP020","POS_CODE" : "10","HIRE_DATE" : "20160602","SALARY" : "6500","BONUS" : "800","GENDER" : "M","MARRIED" : "1","PROFILE" : "imagerc::emp/img_emp15.png","E_MAIL" : "Diana@nexacro.com","PHONE_NO" : "08073140113","BIRTH_DAY" : "19720513","WEDD_DAY" : "19871015"},{"COL_CHK" : "0","CORP_CODE" : "CN","DEPT_CODE" : "CN10","FULL_NAME" : "Issac","EMPL_ID" : "CN080","POS_CODE" : "10","HIRE_DATE" : "20120304","SALARY" : "7000","BONUS" : "900","GENDER" : "M","MARRIED" : "1","PROFILE" : "imagerc::emp/img_emp16.png","E_MAIL" : "Issac@nexacro.com","PHONE_NO" : "08043164614","BIRTH_DAY" : "19940512","WEDD_DAY" : "19980502"},{"COL_CHK" : "0","CORP_CODE" : "CN","DEPT_CODE" : "CN20","FULL_NAME" : "Henry ","EMPL_ID" : "CN220","POS_CODE" : "20","HIRE_DATE" : "20110928","SALARY" : "8000","BONUS" : "1000","GENDER" : "M","MARRIED" : "0","PROFILE" : "imagerc::emp/img_emp17.png","E_MAIL" : "Henry@nexacro.com","PHONE_NO" : "08023207955","BIRTH_DAY" : "19970926"},{"COL_CHK" : "0","CORP_CODE" : "KR","DEPT_CODE" : "KR10","FULL_NAME" : "Kate ","EMPL_ID" : "KR050","POS_CODE" : "10","HIRE_DATE" : "20131120","SALARY" : "8500","BONUS" : "4000","GENDER" : "M","MARRIED" : "0","PROFILE" : "imagerc::emp/img_emp18.png","E_MAIL" : "Kate@nexacro.com","PHONE_NO" : "08063480861","BIRTH_DAY" : "19861119"},{"COL_CHK" : "0","CORP_CODE" : "KR","DEPT_CODE" : "KR20","FULL_NAME" : "Twice","EMPL_ID" : "KR140","POS_CODE" : "20","HIRE_DATE" : "20801109","GENDER" : "W","MARRIED" : "1","PROFILE" : "imagerc::emp/img_emp11.png","E_MAIL" : "Twice@nexacro.com","PHONE_NO" : "08012511072","BIRTH_DAY" : "19790318","WEDD_DAY" : "20050203","SALARY" : "7300","BONUS" : "3000"},{"COL_CHK" : "0","CORP_CODE" : "JP","DEPT_CODE" : "JP20","FULL_NAME" : "Dennis ","EMPL_ID" : "JP130","POS_CODE" : "30","HIRE_DATE" : "20130802","SALARY" : "5600","BONUS" : "5000","GENDER" : "W","MARRIED" : "1","PROFILE" : "imagerc::emp/img_emp12.png","E_MAIL" : "Dennis@nexacro.com","PHONE_NO" : "08044574293","BIRTH_DAY" : "19600427","WEDD_DAY" : "19880505"},{"COL_CHK" : "0","CORP_CODE" : "CN","DEPT_CODE" : "CN10","FULL_NAME" : "Max ","EMPL_ID" : "CN020","POS_CODE" : "10","HIRE_DATE" : "20160602","SALARY" : "3500","BONUS" : "3000","GENDER" : "M","MARRIED" : "1","PROFILE" : "imagerc::emp/img_emp13.png","E_MAIL" : "Max@nexacro.com","PHONE_NO" : "08098253164","BIRTH_DAY" : "19691021","WEDD_DAY" : "19861022"},{"COL_CHK" : "0","CORP_CODE" : "KR","DEPT_CODE" : "KR10","FULL_NAME" : "Jackson","EMPL_ID" : "KR020","POS_CODE" : "10","HIRE_DATE" : "20160602","SALARY" : "6800","BONUS" : "3000","GENDER" : "M","MARRIED" : "1","PROFILE" : "imagerc::emp/img_emp14.png","E_MAIL" : "Jackson@nexacro.com","PHONE_NO" : "08031734025","BIRTH_DAY" : "19700302","WEDD_DAY" : "19971030"},{"COL_CHK" : "0","CORP_CODE" : "KR","DEPT_CODE" : "KR10","FULL_NAME" : "Adam","EMPL_ID" : "KR030","POS_CODE" : "20","HIRE_DATE" : "20030805","SALARY" : "8600","BONUS" : "2000","GENDER" : "M","MARRIED" : "0","PROFILE" : "imagerc::emp/img_emp15.png","E_MAIL" : "Adamr@nexacro.com","PHONE_NO" : "08046437386","BIRTH_DAY" : "19890618"},{"COL_CHK" : "0","CORP_CODE" : "KR","DEPT_CODE" : "KR30","FULL_NAME" : "Belle","EMPL_ID" : "KR230","POS_CODE" : "20","HIRE_DATE" : "20161120","SALARY" : "7700","BONUS" : "5000","GENDER" : "W","MARRIED" : "1","PROFILE" : "imagerc::emp/img_emp16.png","E_MAIL" : "Belle@nexacro.com","PHONE_NO" : "08029890946","BIRTH_DAY" : "19760227","WEDD_DAY" : "19910519"},{"COL_CHK" : "0","CORP_CODE" : "JP","DEPT_CODE" : "JP10","FULL_NAME" : "Lexy","EMPL_ID" : "JP040","POS_CODE" : "30","HIRE_DATE" : "20071001","SALARY" : "9000","BONUS" : "2000","GENDER" : "W","MARRIED" : "0","PROFILE" : "imagerc::emp/img_emp17.png","E_MAIL" : "Lexy@nexacro.com","PHONE_NO" : "08079565721","BIRTH_DAY" : "19780808","WEDD_DAY" : ""},{"COL_CHK" : "0","CORP_CODE" : "JP","DEPT_CODE" : "JP10","FULL_NAME" : "Lucy","EMPL_ID" : "JP050","POS_CODE" : "10","HIRE_DATE" : "20131120","SALARY" : "8000","BONUS" : "3000","GENDER" : "M","MARRIED" : "0","PROFILE" : "imagerc::emp/img_emp18.png","E_MAIL" : "Lucy@nexacro.com","PHONE_NO" : "08079034762","BIRTH_DAY" : "19770924","WEDD_DAY" : ""},{"COL_CHK" : "0","CORP_CODE" : "KR","DEPT_CODE" : "KR20","FULL_NAME" : "Kein ","EMPL_ID" : "KR110","POS_CODE" : "20","HIRE_DATE" : "20180201","SALARY" : "9000","BONUS" : "1200","GENDER" : "M","MARRIED" : "1","PROFILE" : "imagerc::emp/img_emp11.png","E_MAIL" : "Kein@nexacro.com","PHONE_NO" : "08089385283","BIRTH_DAY" : "19800206","WEDD_DAY" : "20050407"},{"COL_CHK" : "0","CORP_CODE" : "JP","DEPT_CODE" : "JP20","FULL_NAME" : "Juliana","EMPL_ID" : "JP110","POS_CODE" : "20","HIRE_DATE" : "20180201","SALARY" : "7000","BONUS" : "800","GENDER" : "M","MARRIED" : "1","PROFILE" : "imagerc::emp/img_emp12.png","E_MAIL" : "Juliana@nexacro.com","PHONE_NO" : "08082344353","BIRTH_DAY" : "19610312","WEDD_DAY" : "20130416"},{"COL_CHK" : "0","CORP_CODE" : "KR","DEPT_CODE" : "KR20","FULL_NAME" : "Kara","EMPL_ID" : "KR130","POS_CODE" : "30","HIRE_DATE" : "20130802","GENDER" : "W","MARRIED" : "1","PROFILE" : "imagerc::emp/img_emp13.png","E_MAIL" : "Kara@nexacro.com","PHONE_NO" : "08068515304","BIRTH_DAY" : "19641212","WEDD_DAY" : "19880623","SALARY" : "5000","BONUS" : "900"},{"COL_CHK" : "0","CORP_CODE" : "KR","DEPT_CODE" : "KR30","FULL_NAME" : "Andrew ","EMPL_ID" : "KR220","POS_CODE" : "20","HIRE_DATE" : "20110928","SALARY" : "6000","BONUS" : "1000","GENDER" : "M","MARRIED" : "0","PROFILE" : "imagerc::emp/img_emp14.png","E_MAIL" : "Andrew@nexacro.com","PHONE_NO" : "08082304825","BIRTH_DAY" : "19751109"},{"COL_CHK" : "0","CORP_CODE" : "JP","DEPT_CODE" : "JP10","FULL_NAME" : "Maria","EMPL_ID" : "JP030","POS_CODE" : "20","HIRE_DATE" : "20030805","SALARY" : "6500","BONUS" : "4000","GENDER" : "M","MARRIED" : "0","PROFILE" : "imagerc::emp/img_emp15.png","E_MAIL" : "Maria@nexacro.com","PHONE_NO" : "08050532256","BIRTH_DAY" : "19810531"},{"COL_CHK" : "0","CORP_CODE" : "JP","DEPT_CODE" : "JP10","FULL_NAME" : "Eddy","EMPL_ID" : "JP080","POS_CODE" : "10","HIRE_DATE" : "20120304","SALARY" : "7000","BONUS" : "3000","GENDER" : "M","MARRIED" : "1","PROFILE" : "imagerc::emp/img_emp16.png","E_MAIL" : "Eddy@nexacro.com","PHONE_NO" : "08072183517","BIRTH_DAY" : "19731019","WEDD_DAY" : "19890505"},{"COL_CHK" : "0","CORP_CODE" : "JP","DEPT_CODE" : "JP20","FULL_NAME" : "Sarah","EMPL_ID" : "JP120","POS_CODE" : "20","HIRE_DATE" : "20171020","SALARY" : "8000","BONUS" : "5000","GENDER" : "W","MARRIED" : "0","PROFILE" : "imagerc::emp/img_emp17.png","E_MAIL" : "Sarah@nexacro.com","PHONE_NO" : "08057841372","BIRTH_DAY" : "19821130"},{"COL_CHK" : "0","CORP_CODE" : "KR","DEPT_CODE" : "KR20","FULL_NAME" : "Ivy","EMPL_ID" : "KR120","POS_CODE" : "20","HIRE_DATE" : "20171020","SALARY" : "8500","BONUS" : "3000","GENDER" : "W","MARRIED" : "0","PROFILE" : "imagerc::emp/img_emp18.png","E_MAIL" : "Ivy@nexacro.com","PHONE_NO" : "08076424744","BIRTH_DAY" : "19790905","WEDD_DAY" : ""},{"COL_CHK" : "0","CORP_CODE" : "CN","DEPT_CODE" : "CN10","FULL_NAME" : "Noel ","EMPL_ID" : "CN030","POS_CODE" : "20","HIRE_DATE" : "20030805","SALARY" : "7300","BONUS" : "400","GENDER" : "M","MARRIED" : "0","PROFILE" : "imagerc::emp/img_emp11.png","E_MAIL" : "Noel@nexacro.com","PHONE_NO" : "08047945235","BIRTH_DAY" : "19970717","WEDD_DAY" : "20140720"},{"COL_CHK" : "0","CORP_CODE" : "CN","DEPT_CODE" : "CN20","FULL_NAME" : "Arnold","EMPL_ID" : "CN240","POS_CODE" : "30","HIRE_DATE" : "20110508","SALARY" : "5600","BONUS" : "3000","GENDER" : "W","MARRIED" : "1","PROFILE" : "imagerc::emp/img_emp12.png","E_MAIL" : "Arnold@nexacro.com","PHONE_NO" : "08022551315","BIRTH_DAY" : "19920531","WEDD_DAY" : "19971116"},{"COL_CHK" : "0","CORP_CODE" : "CN","DEPT_CODE" : "CN20","FULL_NAME" : "Alex ","EMPL_ID" : "CN230","POS_CODE" : "20","HIRE_DATE" : "20161120","SALARY" : "3500","BONUS" : "1200","GENDER" : "W","MARRIED" : "1","PROFILE" : "imagerc::emp/img_emp13.png","E_MAIL" : "Alex@nexacro.com","PHONE_NO" : "08066389823","BIRTH_DAY" : "19730718","WEDD_DAY" : "20080602"},{"COL_CHK" : "0","CORP_CODE" : "KR","DEPT_CODE" : "KR10","FULL_NAME" : "John ","EMPL_ID" : "KR080","POS_CODE" : "10","HIRE_DATE" : "20120304","SALARY" : "6000","BONUS" : "800","GENDER" : "M","MARRIED" : "1","PROFILE" : "imagerc::emp/img_emp14.png","E_MAIL" : "John@nexacro.com","PHONE_NO" : "08098632481","BIRTH_DAY" : "19730621","WEDD_DAY" : "20090305"},{"COL_CHK" : "0","CORP_CODE" : "CN","DEPT_CODE" : "CN10","FULL_NAME" : "Steven ","EMPL_ID" : "CN050","POS_CODE" : "10","HIRE_DATE" : "20131120","SALARY" : "8000","BONUS" : "900","GENDER" : "M","MARRIED" : "0","PROFILE" : "imagerc::emp/img_emp15.png","E_MAIL" : "Steven@nexacro.com","PHONE_NO" : "08037863482","BIRTH_DAY" : "19661021","WEDD_DAY" : ""},{"COL_CHK" : "0","CORP_CODE" : "JP","DEPT_CODE" : "JP20","FULL_NAME" : "Donald ","EMPL_ID" : "JP140","POS_CODE" : "20","HIRE_DATE" : "20801109","SALARY" : "5000","BONUS" : "1000","GENDER" : "W","MARRIED" : "1","PROFILE" : "imagerc::emp/img_emp16.png","E_MAIL" : "Donald@nexacro.com","PHONE_NO" : "08082080801","BIRTH_DAY" : "19840814","WEDD_DAY" : "20180201"},{"COL_CHK" : "0","CORP_CODE" : "CN","DEPT_CODE" : "CN10","FULL_NAME" : "Ray ","EMPL_ID" : "CN040","POS_CODE" : "30","HIRE_DATE" : "20071001","SALARY" : "9000","BONUS" : "3000","GENDER" : "W","MARRIED" : "0","PROFILE" : "imagerc::emp/img_emp17.png","E_MAIL" : "Ray@nexacro.com","PHONE_NO" : "0801330259","BIRTH_DAY" : "19930402"}]});
            this.addChild(obj.name, obj);


            obj = new Phone("phone_call", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new ListView("ListView01","0","0","477",null,null,"2",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_emp");
            obj.set_bandinitstatus("collapse");
            obj.set_autoupdatetype("comboselect");
            obj.set_cellcombopopuptype("center");
            obj.set_positionstep("0");
            obj.set_scrollbarincbuttonsize("0");
            obj.set_scrollbardecbuttonsize("0");
            obj._setContents("<Formats><Format id=\"default\"><Band id=\"body\" width=\"100%\" height=\"180\"><Cell id=\"Cell00\" left=\"10\" top=\"0\" width=\"130\" height=\"180\" displaytype=\"imagecontrol\" text=\"bind:PROFILE\" border=\"0px none #dbdee2\"/><Cell id=\"Cell02\" left=\"155\" top=\"5\" width=\"90\" height=\"40\" text=\"Name\" cssclass=\"lstV_bdcell_title\"/><Cell id=\"Cell03\" left=\"155\" top=\"49\" width=\"90\" height=\"40\" text=\"Mobile\" cssclass=\"lstV_bdcell_title\"/><Cell id=\"Cell04\" left=\"155\" top=\"93\" width=\"90\" height=\"40\" text=\"E-Mail\" cssclass=\"lstV_bdcell_title\"/><Cell id=\"Cell05\" left=\"155\" top=\"137\" width=\"90\" height=\"40\" text=\"Hire date\" cssclass=\"lstV_bdcell_title\"/><Cell id=\"Cell06\" left=\"255\" top=\"5\" width=\"195\" height=\"40\" text=\"bind:FULL_NAME\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell id=\"cell_phone\" left=\"255\" top=\"49\" width=\"195\" height=\"40\" text=\"bind:PHONE_NO\" displaytype=\"maskeditcontrol\" maskeditformat=\"###-####-####\" maskedittype=\"string\"/><Cell id=\"cell_email\" left=\"255\" top=\"93\" width=\"195\" height=\"40\" text=\"bind:E_MAIL\" combodataset=\"ds_pos\" combocodecol=\"POS_CD\" combodatacol=\"POS_NAME\" displaytype=\"editcontrol\"/><Cell id=\"Cell09\" left=\"255\" top=\"137\" width=\"195\" height=\"40\" text=\"bind:HIRE_DATE\" displaytype=\"calendarcontrol\" edittype=\"date\" calendarpopuptype=\"system\"/></Band></Format><Format id=\"format1\"><Band id=\"body\" width=\"33.3%\" height=\"180\" cssclass=\"lstV_bd_format2\"><Cell id=\"Cell00\" left=\"10\" top=\"0\" width=\"130\" height=\"130\" displaytype=\"imagecontrol\" text=\"bind:PROFILE\" border=\"0px none #dbdee2\"/><Cell id=\"Cell01\" left=\"10\" top=\"127\" width=\"130\" bottom=\"0\" text=\"bind:FULL_NAME\" textAlign=\"center\" cssclass=\"lstV_bdcell_Name\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","screen_phone",480,728,this,function(p){});
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Mobile_ListView_Employees.xfdl", function() {
        //그리드 포멧 전환
        this.btn_format_onclick = function(obj,e)
        {
        	this.ListView01.formatid = obj.text;
        };

        //디바이스 API를 사용
        this.ListView01_oncellclick = function(obj,e)
        {
        	var sTemp = obj.getCellText(e.row,"body",e.cellid);
        	if(e.cellid == "cell_phone")
        	{
        		//makeCall 전화걸기
        		this.phone_call.makeCall(sTemp);
        	}
        	else if(e.cellid == "cell_email")
        	{
        		//email
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.ListView01.addEventHandler("oncellclick",this.ListView01_oncellclick,this);
            this.ds_emp.addEventHandler("oncolumnchanged",this.ds_emp_oncolumnchanged,this);
            this.ds_emp.addEventHandler("cancolumnchange",this.ds_emp_cancolumnchange,this);
        };
        this.loadIncludeScript("Mobile_ListView_Employees.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
