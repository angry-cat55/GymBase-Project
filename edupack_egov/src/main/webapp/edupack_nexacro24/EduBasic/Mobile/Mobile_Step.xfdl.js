(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Mobile_Step");
            this.set_titletext("스텝");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,640);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_explorer", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "TREE_ID","type" : "STRING","size" : "256"},{"id" : "TREE_NM","type" : "STRING","size" : "256"},{"id" : "TREE_LEVEL","type" : "STRING","size" : "256"},{"id" : "TREE_STATE","type" : "STRING","size" : "256"}]},"Rows" : [{"TREE_ID" : "10","TREE_NM" : "Products","TREE_LEVEL" : "0","TREE_STATE" : "0"},{"TREE_NM" : "Nexacro","TREE_ID" : "20","TREE_LEVEL" : "1","TREE_STATE" : "1"},{"TREE_ID" : "21","TREE_NM" : "Nexacro 24","TREE_LEVEL" : "2","TREE_STATE" : "2"},{"TREE_ID" : "22","TREE_NM" : "Nexacro 21","TREE_LEVEL" : "2","TREE_STATE" : "2"},{"TREE_ID" : "23","TREE_NM" : "nexacro platform 17","TREE_LEVEL" : "2","TREE_STATE" : "2"},{"TREE_ID" : "24","TREE_NM" : "nexacro platform 14","TREE_LEVEL" : "2","TREE_STATE" : "2"},{"TREE_ID" : "40","TREE_NM" : "XPLATFORM","TREE_LEVEL" : "1","TREE_STATE" : "1"},{"TREE_ID" : "50","TREE_NM" : "MiPlatform","TREE_LEVEL" : "1","TREE_STATE" : "1"},{"TREE_ID" : "60","TREE_NM" : "Nex-UP","TREE_LEVEL" : "1","TREE_STATE" : "1"},{"TREE_ID" : "70","TREE_NM" : "Education","TREE_LEVEL" : "0","TREE_STATE" : "0"},{"TREE_ID" : "80","TREE_NM" : "교육공지","TREE_LEVEL" : "1","TREE_STATE" : "1"},{"TREE_ID" : "90","TREE_NM" : "교육자료","TREE_LEVEL" : "1","TREE_STATE" : "1"},{"TREE_ID" : "100","TREE_NM" : "교육일정","TREE_LEVEL" : "1","TREE_STATE" : "1"},{"TREE_ID" : "110","TREE_NM" : "교육신청","TREE_LEVEL" : "1","TREE_STATE" : "1"},{"TREE_ID" : "120","TREE_NM" : "접수현황","TREE_LEVEL" : "1","TREE_STATE" : "1"},{"TREE_ID" : "130","TREE_NM" : "Community","TREE_LEVEL" : "0","TREE_STATE" : "0"},{"TREE_ID" : "140","TREE_NM" : "공지사항","TREE_LEVEL" : "1","TREE_STATE" : "1"},{"TREE_ID" : "150","TREE_NM" : "자료실","TREE_LEVEL" : "1","TREE_STATE" : "1"},{"TREE_ID" : "160","TREE_NM" : "팁게시판","TREE_LEVEL" : "1","TREE_STATE" : "1"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_emp", this);
            obj.set_keystring("");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMP_NAME","type" : "STRING","size" : "50"},{"id" : "EMP_ID","type" : "STRING","size" : "10"},{"id" : "DEPT_CODE","type" : "STRING","size" : "256"},{"id" : "POSITION","type" : "STRING","size" : "10"},{"id" : "HIRE_DATE","type" : "DATE","size" : "10"},{"id" : "SALARY","type" : "INT","size" : "10"},{"id" : "GENDER","type" : "STRING","size" : "256"},{"id" : "MARRIED","type" : "STRING","size" : "256"},{"id" : "SKILL","type" : "STRING","size" : "256"},{"id" : "HOBBY","type" : "STRING","size" : "256"},{"id" : "MEMO","type" : "STRING","size" : "256"}]},"Rows" : [{"EMP_NAME" : "Melon","EMP_ID" : "KR010","POSITION" : "10","HIRE_DATE" : "20071001","SALARY" : "9000","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "01,05","DEPT_CODE" : "10","MEMO" : "aqua"},{"EMP_NAME" : "Jackson","EMP_ID" : "US050","POSITION" : "60","HIRE_DATE" : "20091021","SALARY" : "6000","GENDER" : "M","MARRIED" : "false","SKILL" : "11,03,13","HOBBY" : "09,14","DEPT_CODE" : "20","MEMO" : "gold"},{"EMP_NAME" : "Jennie","EMP_ID" : "KR240","POSITION" : "50","HIRE_DATE" : "20110508","SALARY" : "7000","GENDER" : "F","MARRIED" : "true","SKILL" : "01,06","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "greenyellow"},{"EMP_NAME" : "Dennis ","EMP_ID" : "JP150","POSITION" : "20","HIRE_DATE" : "20091021","SALARY" : "5000","GENDER" : "M","MARRIED" : "false","SKILL" : "09,11","HOBBY" : "07,06,05","DEPT_CODE" : "30","MEMO" : "khaki"},{"EMP_NAME" : "Andrew","EMP_ID" : "US020","POSITION" : "60","HIRE_DATE" : "20160602","SALARY" : "6500","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,13","DEPT_CODE" : "40","MEMO" : "lightpink"},{"EMP_NAME" : "Jungkook","EMP_ID" : "KR200","POSITION" : "60","HIRE_DATE" : "20120304","SALARY" : "7000","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,14","DEPT_CODE" : "50","MEMO" : "orange"},{"EMP_NAME" : "Adam","EMP_ID" : "JP230","POSITION" : "50","HIRE_DATE" : "20110928","SALARY" : "8000","GENDER" : "M","MARRIED" : "true","SKILL" : "11,03,13","HOBBY" : "09,15","DEPT_CODE" : "30","MEMO" : "silver"},{"EMP_NAME" : "JiYoung","EMP_ID" : "KR080","POSITION" : "50","HIRE_DATE" : "20131120","SALARY" : "8500","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "violet"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static06","10","10","250","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Grid Type : Tree");
            obj.set_cssclass("sta_WF_MTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_tree","20","60","440",null,null,"30",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_explorer");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj.set_treeuseline("false");
            obj.set_scrollbardecbuttonsize("0");
            obj.set_scrollbarincbuttonsize("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"410\"/></Columns><Rows><Row size=\"60\"/></Rows><Band id=\"body\"><Cell text=\"bind:TREE_NM\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:TREE_LEVEL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","10","250","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Grid Type : normal");
            obj.set_positionstep("1");
            obj.set_cssclass("sta_WF_MTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","60","440",null,null,"30",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_emp");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj.set_positionstep("1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"120\"/><Column size=\"130\"/><Column size=\"100\"/></Columns><Rows><Row size=\"70\" band=\"head\"/><Row size=\"60\"/></Rows><Band id=\"head\"><Cell text=\"ID\" textAlign=\"center\"/><Cell col=\"1\" text=\"NAME\" textAlign=\"center\"/><Cell col=\"2\" text=\"HIRE_DATE\" textAlign=\"center\"/><Cell col=\"3\" text=\"SALARY\" textAlign=\"center\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_ID\"/><Cell col=\"1\" text=\"bind:EMP_NAME\"/><Cell col=\"2\" text=\"bind:HIRE_DATE\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"3\" text=\"bind:SALARY\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","screen_phone",480,640,this,function(p){});
            obj.set_mobileorientation("portrait");
            obj.set_stepcount("2");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Mobile_Step.xfdl", function() {

        //tree펼침 제어
        this.grd_tree_oncellclick = function(obj,e)
        {
        	if(e.clickitem == "treeitembutton") return;
        	var nGridRow = obj.getTreeRow(e.row);
        	var nStatus  = obj.getTreeStatus(nGridRow);

        	if(nStatus == 3) return;
        	nStatus = (nStatus == 0 ? 1 : 0);

        	obj.setTreeStatus(nGridRow, nStatus);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.grd_tree.addEventHandler("oncellclick",this.grd_tree_oncellclick,this);
            this.grd_list.addEventHandler("onheadclick",this.Grid00_onheadclick,this);
            this.ds_emp.addEventHandler("cancolumnchange",this.ds_emp_cancolumnchange,this);
            this.ds_emp.addEventHandler("onrowsetchanged",this.ds_emp_onrowsetchanged,this);
            this.ds_emp.addEventHandler("onrowposchanged",this.ds_emp_onrowposchanged,this);
        };
        this.loadIncludeScript("Mobile_Step.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
