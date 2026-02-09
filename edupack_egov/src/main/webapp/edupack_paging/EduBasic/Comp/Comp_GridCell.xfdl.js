(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_GridCell");
            this.set_titletext("Comp_GridCell");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,950);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_data", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMP_NAME","type" : "STRING","size" : "50"},{"id" : "EMP_ID","type" : "STRING","size" : "10"},{"id" : "DEPT_CODE","type" : "STRING","size" : "256"},{"id" : "POSITION","type" : "STRING","size" : "10"},{"id" : "HIRE_DATE","type" : "DATE","size" : "10"},{"id" : "SALARY","type" : "INT","size" : "10"},{"id" : "GENDER","type" : "STRING","size" : "256"},{"id" : "MARRIED","type" : "STRING","size" : "256"},{"id" : "SKILL","type" : "STRING","size" : "256"},{"id" : "HOBBY","type" : "STRING","size" : "256"},{"id" : "MEMO","type" : "STRING","size" : "256"},{"id" : "IMAGE","type" : "STRING","size" : "256"},{"id" : "PERCENT","type" : "STRING","size" : "256"},{"id" : "DECORATE","type" : "STRING","size" : "256"}]},"Rows" : [{"EMP_NAME" : "Melon","EMP_ID" : "KR010","POSITION" : "10","HIRE_DATE" : "20071001","SALARY" : "9000","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "01,05","DEPT_CODE" : "10","MEMO" : "TOBESOFT\nNEXACRO","IMAGE" : "imagerc::img_btn_new.png","PERCENT" : "20","DECORATE" : "NEXACRO <fs v='16'>N24</fs>"},{"EMP_NAME" : "Jackson","EMP_ID" : "US050","POSITION" : "60","HIRE_DATE" : "20091021","SALARY" : "6000","GENDER" : "M","MARRIED" : "false","SKILL" : "11,03,13","HOBBY" : "09,14","DEPT_CODE" : "20","MEMO" : "NEXACRO\nStudio","IMAGE" : "imagerc::img_btn_save.png","PERCENT" : "40","DECORATE" : "NEXACRO <fc v='red'>N24</fc>"},{"EMP_NAME" : "Jennie","EMP_ID" : "KR240","POSITION" : "50","HIRE_DATE" : "20110508","SALARY" : "7000","GENDER" : "F","MARRIED" : "true","SKILL" : "01,06","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "NEXACRO\nGRID Component","IMAGE" : "","PERCENT" : "70","DECORATE" : "NEXACRO <b v='true'>N24</b>"},{"EMP_NAME" : "Dennis ","EMP_ID" : "JP150","POSITION" : "20","HIRE_DATE" : "20091021","SALARY" : "5000","GENDER" : "M","MARRIED" : "false","SKILL" : "09,11","HOBBY" : "07,06,05","DEPT_CODE" : "30","MEMO" : "TOBESOFT\nNEXACRO","IMAGE" : "imagerc::img_btn_delete.png","PERCENT" : "100","DECORATE" : "NEXACRO <i v='true'>N24</i>"},{"EMP_NAME" : "Andrew","EMP_ID" : "US020","POSITION" : "60","HIRE_DATE" : "20160602","SALARY" : "6500","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,13","DEPT_CODE" : "40","MEMO" : "NEXACRO\nStudio","IMAGE" : "imagerc::img_btn_new.png","PERCENT" : "90","DECORATE" : "NEXACRO <u v='true'>N24</u>"},{"EMP_NAME" : "Jungkook","EMP_ID" : "KR200","POSITION" : "60","HIRE_DATE" : "20120304","SALARY" : "7000","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,14","DEPT_CODE" : "50","MEMO" : "NEXACRO\nGRID Component","IMAGE" : "imagerc::img_btn_delete.png","PERCENT" : "30","DECORATE" : "NEXACRO <s v='true'>N24</s>"},{"EMP_NAME" : "Adam","EMP_ID" : "JP230","POSITION" : "50","HIRE_DATE" : "20110928","SALARY" : "8000","GENDER" : "M","MARRIED" : "true","SKILL" : "11,03,13","HOBBY" : "09,15","DEPT_CODE" : "30","MEMO" : "Studio","IMAGE" : "","PERCENT" : "50","DECORATE" : "<l v='http://www.tobesoft.com'>Link WebPage</l>"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "DEPT_CODE","type" : "string","size" : "255"},{"id" : "DEPT_NAME","type" : "string","size" : "255"},{"id" : "DEPT_EMP","type" : "string","size" : "255"}]},"Rows" : [{"DEPT_CODE" : "10","DEPT_NAME" : "Accounting Team","DEPT_EMP" : "Kate"},{"DEPT_CODE" : "20","DEPT_NAME" : "Finances Team","DEPT_EMP" : "Dennis"},{"DEPT_CODE" : "30","DEPT_NAME" : "Human Resource Team","DEPT_EMP" : "Adam"},{"DEPT_CODE" : "40","DEPT_NAME" : "Support Team","DEPT_EMP" : "Jackson"},{"DEPT_CODE" : "50","DEPT_NAME" : "Sales Team","DEPT_EMP" : "Belle"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pos", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "CODE","type" : "STRING","size" : "256"},{"id" : "NAME","type" : "STRING","size" : "256"}]},"Rows" : [{"CODE" : "10","NAME" : "CEO"},{"CODE" : "20","NAME" : "Director"},{"CODE" : "30","NAME" : "General Manager"},{"CODE" : "40","NAME" : "Manager"},{"CODE" : "50","NAME" : "Assistant Manager"},{"CODE" : "60","NAME" : "Staff"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_skill", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "CODE","type" : "string","size" : "255"},{"id" : "NAME","type" : "string","size" : "255"}]},"Rows" : [{"CODE" : "01","NAME" : "HTML"},{"CODE" : "02","NAME" : "CSS"},{"CODE" : "03","NAME" : "JavaScript"},{"CODE" : "04","NAME" : "JAVA"},{"CODE" : "05","NAME" : "C/C++"},{"CODE" : "06","NAME" : "Python"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_hobby", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "CODE","type" : "STRING","size" : "256"},{"id" : "NAME","type" : "STRING","size" : "256"}]},"Rows" : [{"CODE" : "01","NAME" : "Climbing"},{"CODE" : "02","NAME" : "Running"},{"CODE" : "03","NAME" : "Cycling"},{"CODE" : "04","NAME" : "Swimming"},{"CODE" : "05","NAME" : "Yoga"},{"CODE" : "06","NAME" : "Golf"},{"CODE" : "07","NAME" : "tennis"},{"CODE" : "08","NAME" : "Reading "},{"CODE" : "09","NAME" : "Cooking"},{"CODE" : "10","NAME" : "Photography"},{"CODE" : "11","NAME" : "Painting"},{"CODE" : "12","NAME" : "Movie and Drama"},{"CODE" : "13","NAME" : "Game"},{"CODE" : "14","NAME" : "Sleeping"},{"CODE" : "15","NAME" : "Shopping"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_title","20.00","0","300","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Grid Cell");
            obj.set_cssclass("sta_WF_GuideTitle1");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20.00","60","462","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("basic usage");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","95","980","36",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("[Property] displaytype, edittype");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20","372","165","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("displaytype = xxxxcontrol");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","20.00","136",null,"226","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_data");
            obj.set_enable("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"140\"/></Columns><Rows><Row size=\"45\" band=\"head\"/><Row size=\"45\"/></Rows><Band id=\"head\"><Cell text=\"normal&#13;&#10;none\"/><Cell col=\"1\" text=\"text&#13;&#10;text\"/><Cell col=\"2\" text=\"mask&#13;&#10;mask\"/><Cell col=\"3\" text=\"text&#13;&#10;textarea\" displaytype=\"text\"/><Cell col=\"4\" text=\"decoratetext&#13;&#10;normal\"/><Cell col=\"5\" text=\"number&#13;&#10;mask\"/><Cell col=\"6\" text=\"date&#13;&#10;date\"/><Cell col=\"7\" text=\"combotext&#13;&#10;combo\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_NAME\"/><Cell col=\"1\" text=\"bind:EMP_NAME\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:EMP_ID\" maskedittype=\"string\" maskeditformat=\"AA-###\" displaytype=\"mask\" edittype=\"mask\"/><Cell col=\"3\" text=\"bind:MEMO\" displaytype=\"text\" edittype=\"textarea\"/><Cell col=\"4\" text=\"bind:DECORATE\" displaytype=\"decoratetext\" progressbarsmooth=\"true\" edittype=\"normal\"/><Cell col=\"5\" text=\"bind:SALARY\" displaytype=\"number\" textAlign=\"right\" edittype=\"mask\" maskeditformat=\"#,###\"/><Cell col=\"6\" text=\"bind:HIRE_DATE\" displaytype=\"date\" edittype=\"date\" calendarbuttonsize=\"24\"/><Cell col=\"7\" text=\"bind:DEPT_CODE\" displaytype=\"combotext\" combodataset=\"ds_dept\" combocodecol=\"DEPT_CODE\" combodatacol=\"DEPT_NAME\" edittype=\"combo\" combobuttonsize=\"24\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","20","398",null,"188","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_data");
            obj.set_enable("true");
            obj.set_cellsizingtype("col");
            obj.set_autosizingtype("row");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/></Columns><Rows><Row size=\"45\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"editcontrol&#13;&#10;text\"/><Cell col=\"1\" text=\"maskeditcontrol&#13;&#10;mask\"/><Cell col=\"2\" text=\"textareacontrol&#13;&#10;textarea\" displaytype=\"text\"/><Cell col=\"3\" text=\"calendarcontrol&#13;&#10;date\"/><Cell col=\"4\" text=\"combocontrol&#13;&#10;combo\"/><Cell col=\"5\" text=\"multicombocontrol&#13;&#10;multicombo\"/><Cell col=\"6\" text=\"checkboxcontrol&#13;&#10;checkbox\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_NAME\" displaytype=\"editcontrol\" edittype=\"text\" controlautosizingtype=\"width\"/><Cell col=\"1\" text=\"bind:EMP_ID\" maskedittype=\"string\" maskeditformat=\"AA-###\" displaytype=\"maskeditcontrol\" edittype=\"mask\" controlautosizingtype=\"width\"/><Cell col=\"2\" text=\"bind:MEMO\" displaytype=\"textareacontrol\" edittype=\"textarea\"/><Cell col=\"3\" text=\"bind:HIRE_DATE\" displaytype=\"calendarcontrol\" edittype=\"date\" calendarbuttonsize=\"24\" controlautosizingtype=\"width\"/><Cell col=\"4\" text=\"bind:DEPT_CODE\" displaytype=\"combocontrol\" combodataset=\"ds_dept\" combocodecol=\"DEPT_CODE\" combodatacol=\"DEPT_NAME\" edittype=\"combo\" combobuttonsize=\"24\" controlautosizingtype=\"width\"/><Cell col=\"5\" displaytype=\"multicombocontrol\" edittype=\"multicombo\" text=\"bind:SKILL\" multicombobuttonsize=\"24\" multicombodataset=\"ds_skill\" multicombocodecol=\"CODE\" multicombodatacol=\"NAME\" controlautosizingtype=\"width\"/><Cell col=\"6\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:MARRIED\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02","20","591","255","286",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("gds_menu");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"161\"/></Columns><Rows><Row size=\"45\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"treeitemcontrol&#13;&#10;tree\"/></Band><Band id=\"body\"><Cell text=\"bind:MENU_NAME\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:MENU_LEVEL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid03","280.00","591",null,"286","20",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("ds_data");
            obj.set_enable("true");
            obj.set_extendsizetype("row");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"140\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"140\"/></Columns><Rows><Row size=\"45\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"expand\"/><Cell col=\"1\"/><Cell col=\"2\" colspan=\"2\" text=\"radioitemcontrol&#13;&#10;radioitem\"/><Cell col=\"4\" text=\"buttoncontrol&#13;&#10;button\"/><Cell col=\"5\" text=\"imagecontrol\"/><Cell col=\"6\" text=\"progressbarcontrol&#13;&#10;mask\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_CODE\" expandshow=\"show\" displaytype=\"text\"/><Cell col=\"1\" displaytype=\"combotext\" combodataset=\"ds_dept\" combocodecol=\"DEPT_CODE\" combodatacol=\"DEPT_NAME\" text=\"bind:DEPT_CODE\"/><Cell col=\"2\" text=\"bind:GENDER\" displaytype=\"radioitemcontrol\" edittype=\"radioitem\" radioitemcodevalue=\"M\"/><Cell col=\"3\" text=\"bind:GENDER\" displaytype=\"radioitemcontrol\" edittype=\"radioitem\" radioitemcodevalue=\"F\"/><Cell col=\"4\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"bind:EMP_NAME\" controlautosizingtype=\"none\"/><Cell col=\"5\" displaytype=\"imagecontrol\" text=\"bind:IMAGE\"/><Cell col=\"6\" displaytype=\"progressbarcontrol\" text=\"bind:PERCENT\" progressbarsmooth=\"true\" controlautosizingtype=\"width\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1020,950,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Comp_GridCell.xfdl", function() {


        this.Grid03_onexpandup = function(obj,e)
        {

        	var objChild = new ChildFrame("popupDept", 0, 0, 360, 440);
        	objChild.formurl = "Popup::Popup_SearchDept.xfdl";
        	objChild.openalign = "center middle";
        	objChild.dragmovetype = "all";
        	objChild.showtytlebar = false;

            objChild.showModal(this.getOwnerFrame()
                             , {}
                             , this
                             , "fn_callback_popup");
        };

        // Dept Popup Callback
        this.fn_callback_popup = function(sPopupId, sReturn)
        {
        	if(typeof sReturn === "undefined")	return;
        	if(sPopupId == "popupDept"){
        		if(sReturn.length > 0){
        			var arrRtn = sReturn.split("||");
        			this.ds_data.setColumn(this.ds_data.rowposition, "DEPT_CODE", arrRtn[0]);
        		}
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Grid03.addEventHandler("onexpandup",this.Grid03_onexpandup,this);
        };
        this.loadIncludeScript("Comp_GridCell.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
