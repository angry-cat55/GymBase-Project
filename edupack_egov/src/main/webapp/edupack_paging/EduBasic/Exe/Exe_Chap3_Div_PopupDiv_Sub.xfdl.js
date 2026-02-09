(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Exe_Chap3_Div_PopupDiv_Sub");
            this.set_titletext("Exe_Chap3_Div_PopupDiv_Sub");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,250);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset2", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "DEPT_NAME","type" : "STRING","size" : "256"},{"id" : "FULL_NAME","type" : "STRING","size" : "256"},{"id" : "EMPL_ID","type" : "STRING","size" : "256"}]},"Rows" : [{"DEPT_NAME" : "Education","FULL_NAME" : "John ","EMPL_ID" : "KR101"},{"DEPT_NAME" : "Education","FULL_NAME" : "Jackson","EMPL_ID" : "KR102"},{"DEPT_NAME" : "Education","FULL_NAME" : "Adam","EMPL_ID" : "KR103"},{"DEPT_NAME" : "Education","FULL_NAME" : "Melon","EMPL_ID" : "KR104"},{"DEPT_NAME" : "Education","FULL_NAME" : "Kate ","EMPL_ID" : "KR105"},{"DEPT_NAME" : "Sales","FULL_NAME" : "Bts","EMPL_ID" : "KR106"},{"DEPT_NAME" : "Sales","FULL_NAME" : "Andrew ","EMPL_ID" : "KR107"},{"DEPT_NAME" : "Sales","FULL_NAME" : "Belle","EMPL_ID" : "KR108"},{"DEPT_NAME" : "Sales","FULL_NAME" : "Elsa","EMPL_ID" : "KR109"},{"DEPT_NAME" : "Marketing","FULL_NAME" : "Kein ","EMPL_ID" : "KR110"},{"DEPT_NAME" : "Marketing","FULL_NAME" : "Ivy","EMPL_ID" : "KR111"},{"DEPT_NAME" : "Marketing","FULL_NAME" : "Kara","EMPL_ID" : "KR112"},{"DEPT_NAME" : "Marketing","FULL_NAME" : "Twice","EMPL_ID" : "KR113"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","10","10","81","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Linked");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid2","10","40","378","150",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset2");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"36\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\"/></Rows><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:DEPT_NAME\"/><Cell col=\"2\" text=\"bind:FULL_NAME\"/><Cell col=\"3\" text=\"bind:EMPL_ID\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe2_Close","10","200","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Exe2_Close");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",400,250,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Exe_Chap3_Div_PopupDiv_Sub.xfdl", function() {
        this.btn_Exe2_Close_onclick = function(obj,e)
        {
            var arrRtn = [];
            arrRtn[0] = this.Dataset2.getColumn(this.Dataset2.rowposition, "DEPT_NAME");
            arrRtn[1] = this.Dataset2.getColumn(this.Dataset2.rowposition, "EMP_NAME");
            arrRtn[2] = this.Dataset2.getColumn(this.Dataset2.rowposition, "EMP_ID");
        	this.parent.parent.PopupDiv2.closePopup(arrRtn);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_Exe2_Close.addEventHandler("onclick",this.btn_Exe2_Close_onclick,this);
        };
        this.loadIncludeScript("Exe_Chap3_Div_PopupDiv_Sub.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
