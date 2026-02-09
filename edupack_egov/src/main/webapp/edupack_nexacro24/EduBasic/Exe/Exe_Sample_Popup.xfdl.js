(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Exe2_Sample_Popup");
            this.set_titletext("Sample Emp Popup");
            this.set_border("1px solid #9c9c9c");
            if (Form == this.constructor)
            {
                this._setFormPosition(380,300);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dept", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "DEPT_CODE","type" : "STRING","size" : "32"},{"id" : "DEPT_NAME","type" : "STRING","size" : "32"},{"id" : "CORP_CODE","type" : "STRING","size" : "256"}]},"Rows" : [{"DEPT_CODE" : "KR10","DEPT_NAME" : "Education(KR)","CORP_CODE" : "KR"},{"DEPT_CODE" : "KR20","DEPT_NAME" : "Marketing(KR)","CORP_CODE" : "KR"},{"DEPT_CODE" : "KR30","DEPT_NAME" : "Sales(KR)","CORP_CODE" : "KR"},{"DEPT_CODE" : "JP10","DEPT_NAME" : "Education(JP)","CORP_CODE" : "JP"},{"DEPT_CODE" : "JP20","DEPT_NAME" : "Sales(JP)","CORP_CODE" : "JP"},{"DEPT_CODE" : "CN10","DEPT_NAME" : "Education(CN)","CORP_CODE" : "CN"},{"DEPT_CODE" : "CN20","DEPT_NAME" : "Marketing(CN)","CORP_CODE" : "CN"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pop", this);
            obj.set_keystring("a");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "CORP_CODE","type" : "STRING","size" : "10"},{"id" : "CORP_NAME","type" : "STRING","size" : "256"},{"id" : "DEPT_CODE","type" : "STRING","size" : "10"},{"id" : "DEPT_NAME","type" : "STRING","size" : "256"},{"id" : "EMP_NAME","type" : "STRING","size" : "50"},{"id" : "EMP_ID","type" : "STRING","size" : "10"}]},"Rows" : [{"CORP_CODE" : "KR","DEPT_CODE" : "KR10","EMP_NAME" : "Melon","EMP_ID" : "AA010","CORP_NAME" : "Korea Corp.","DEPT_NAME" : "Education(KR)"},{"CORP_CODE" : "KR","DEPT_CODE" : "KR30","EMP_NAME" : "Elsa","EMP_ID" : "BB010","CORP_NAME" : "Korea Corp.","DEPT_NAME" : "Sales(KR)"},{"CORP_CODE" : "KR","DEPT_CODE" : "KR30","EMP_NAME" : "Bts","EMP_ID" : "AA110","CORP_NAME" : "Korea Corp.","DEPT_NAME" : "Sales(KR)"},{"CORP_CODE" : "CN","DEPT_CODE" : "CN20","EMP_NAME" : "Ted ","EMP_ID" : "BB201","CORP_NAME" : "China Corp.","DEPT_NAME" : "Marketing(CN)"},{"CORP_CODE" : "JP","DEPT_CODE" : "JP10","EMP_NAME" : "Diana","EMP_ID" : "CC220","CORP_NAME" : "Japen Corp.","DEPT_NAME" : "Education(JP)"},{"CORP_CODE" : "CN","DEPT_CODE" : "CN10","EMP_NAME" : "Issac","EMP_ID" : "DD221","CORP_NAME" : "China Corp.","DEPT_NAME" : "Education(CN)"},{"CORP_CODE" : "CN","DEPT_CODE" : "CN20","EMP_NAME" : "Henry ","EMP_ID" : "BB405","CORP_NAME" : "China Corp.","DEPT_NAME" : "Marketing(CN)"},{"CORP_CODE" : "KR","DEPT_CODE" : "KR10","EMP_NAME" : "Kate ","EMP_ID" : "BB203","CORP_NAME" : "Korea Corp.","DEPT_NAME" : "Education(KR)"},{"CORP_CODE" : "KR","DEPT_CODE" : "KR20","EMP_NAME" : "Twice","EMP_ID" : "AA560","CORP_NAME" : "Korea Corp.","DEPT_NAME" : "Marketing(KR)"},{"CORP_CODE" : "JP","DEPT_CODE" : "JP20","EMP_NAME" : "Dennis ","EMP_ID" : "AA700","CORP_NAME" : "Japen Corp.","DEPT_NAME" : "Sales(JP)"},{"CORP_CODE" : "CN","DEPT_CODE" : "CN10","EMP_NAME" : "Max ","EMP_ID" : "CC600","CORP_NAME" : "China Corp.","DEPT_NAME" : "Education(CN)"},{"CORP_CODE" : "KR","DEPT_CODE" : "KR10","EMP_NAME" : "Jackson","EMP_ID" : "DD300","CORP_NAME" : "Korea Corp.","DEPT_NAME" : "Education(KR)"},{"CORP_CODE" : "KR","DEPT_CODE" : "KR10","EMP_NAME" : "Adam","EMP_ID" : "DD200","CORP_NAME" : "Korea Corp.","DEPT_NAME" : "Education(KR)"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_corp", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "CORP_CODE","type" : "STRING","size" : "32"},{"id" : "CORP_NAME","type" : "STRING","size" : "32"}]},"Rows" : [{"CORP_CODE" : "KR","CORP_NAME" : "Korea Corp."},{"CORP_CODE" : "JP","CORP_NAME" : "Japen Corp."},{"CORP_CODE" : "CN","CORP_NAME" : "China Corp."}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_confirm","106","240","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Confirm");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","196","240","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Cancel");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","50",null,"180","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_pop");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Name\"/><Cell col=\"1\" text=\"ID\"/><Cell col=\"2\" text=\"Dept\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_NAME\"/><Cell col=\"1\" text=\"bind:EMP_ID\"/><Cell col=\"2\" text=\"bind:DEPT_NAME\" combodataset=\"ds_dept\" combocodecol=\"DEPT_CD\" combodatacol=\"DEPT_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_dept","168","10","153","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPT_CODE");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_corp","10","10","153","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_corp");
            obj.set_codecolumn("CORP_CODE");
            obj.set_datacolumn("CORP_NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",380,300,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Exe_Sample_Popup.xfdl", function() {
        this.Form_onload = function(obj,e)
        {
            var sCorp = this.parent.pCorp;
            var sDept = this.parent.pDept;
            trace(sCorp + " : " + sDept);
            this.cmb_corp.value=sCorp;
            this.cmb_dept.value=sDept;
        };

        this.cmb_dept_onitemchanged = function(obj,e)
        {
            this.ds_pop.filter("DEPT_CODE == '" + e.postvalue + "'");
            this.ds_pop.rowposition=0;
        };

        this.btn_confirm_onclick = function(obj,e)
        {
            var sID   = this.ds_pop.getColumn(this.ds_pop.rowposition, "EMP_ID");
            var sName = this.ds_pop.getColumn(this.ds_pop.rowposition, "EMP_NAME");
            this.close(sID+":"+sName);
        };

        this.btn_cancel_onclick = function(obj,e)
        {
        	this.close("");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.btn_confirm.addEventHandler("onclick",this.btn_confirm_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.cmb_dept.addEventHandler("onitemchanged",this.cmb_dept_onitemchanged,this);
        };
        this.loadIncludeScript("Exe_Sample_Popup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
