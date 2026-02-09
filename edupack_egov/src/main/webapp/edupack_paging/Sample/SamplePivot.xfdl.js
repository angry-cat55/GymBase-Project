(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SamplePivot");
            this.set_titletext("Pivot 그리드");
            this.getSetter("classname").set("Sample_1");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,1080);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Category","type" : "STRING","size" : "256"},{"id" : "Region","type" : "String","size" : "256"},{"id" : "Rep","type" : "String","size" : "256"},{"id" : "Item","type" : "String","size" : "256"},{"id" : "Units","type" : "BIGDECIMAL","size" : "256"},{"id" : "UnitCost","type" : "BIGDECIMAL","size" : "256"}]},"Rows" : [{"Region" : "East","Rep" : "Jones","Item" : "Pencil","Units" : "95","UnitCost" : "1","Category" : "Main"},{"Region" : "Central","Rep" : "Kivell","Item" : "Binder","Units" : "50","UnitCost" : "19","Category" : "Sub"},{"Region" : "Central","Rep" : "Jardine","Item" : "Pencil","Units" : "36","UnitCost" : "4","Category" : "Sub"},{"Region" : "Central","Rep" : "Gill","Item" : "Pen","Units" : "27","UnitCost" : "19","Category" : "Sub"},{"Region" : "West","Rep" : "Sorvino","Item" : "Pencil","Units" : "56","UnitCost" : "2","Category" : "Main"},{"Region" : "East","Rep" : "Jones","Item" : "Binder","Units" : "60","UnitCost" : "4","Category" : "Main"},{"Region" : "Central","Rep" : "Andrews","Item" : "Pencil","Units" : "75","UnitCost" : "1","Category" : "Sub"},{"Region" : "Central","Rep" : "Jardine","Item" : "Pencil","Units" : "90","UnitCost" : "4","Category" : "Sub"},{"Region" : "West","Rep" : "Thompson","Item" : "Pencil","Units" : "32","UnitCost" : "1","Category" : "Sub"},{"Region" : "East","Rep" : "Jones","Item" : "Binder","Units" : "60","UnitCost" : "8","Category" : "Main"},{"Region" : "Central","Rep" : "Morgan","Item" : "Pencil","Units" : "90","UnitCost" : "4","Category" : "Sub"},{"Region" : "East","Rep" : "Howard","Item" : "Binder","Units" : "29","UnitCost" : "1","Category" : "Main"},{"Region" : "East","Rep" : "Parent","Item" : "Binder","Units" : "81","UnitCost" : "19","Category" : "Main"},{"Region" : "East","Rep" : "Jones","Item" : "Pencil","Units" : "35","UnitCost" : "4","Category" : "Main"},{"Region" : "Central","Rep" : "Smith","Item" : "Desk","Units" : "2","UnitCost" : "125","Category" : "Sub"},{"Region" : "East","Rep" : "Jones","Item" : "Pen Set","Units" : "16","UnitCost" : "15","Category" : "Main"},{"Region" : "Central","Rep" : "Morgan","Item" : "Binder","Units" : "28","UnitCost" : "8","Category" : "Sub"},{"Region" : "East","Rep" : "Jones","Item" : "Pen","Units" : "64","UnitCost" : "8","Category" : "Main"},{"Region" : "East","Rep" : "Parent","Item" : "Pen","Units" : "15","UnitCost" : "19","Category" : "Main"},{"Region" : "Central","Rep" : "Kivell","Item" : "Pen Set","Units" : "96","UnitCost" : "4","Category" : "Sub"},{"Region" : "Central","Rep" : "Smith","Item" : "Pencil","Units" : "67","UnitCost" : "1.29","Category" : "Sub"},{"Region" : "East","Rep" : "Parent","Item" : "Pen Set","Units" : "74","UnitCost" : "15","Category" : "Main"},{"Region" : "Central","Rep" : "Gill","Item" : "Binder","Units" : "46","UnitCost" : "8","Category" : "Sub"},{"Region" : "Central","Rep" : "Smith","Item" : "Binder","Units" : "87","UnitCost" : "15","Category" : "Sub"},{"Region" : "East","Rep" : "Jones","Item" : "Binder","Units" : "4","UnitCost" : "4","Category" : "Main"},{"Region" : "West","Rep" : "Sorvino","Item" : "Binder","Units" : "7","UnitCost" : "19","Category" : "Main"},{"Region" : "Central","Rep" : "Jardine","Item" : "Pen Set","Units" : "50","UnitCost" : "4","Category" : "Sub"},{"Region" : "Central","Rep" : "Andrews","Item" : "Pencil","Units" : "66","UnitCost" : "1","Category" : "Sub"},{"Region" : "East","Rep" : "Howard","Item" : "Pen","Units" : "96","UnitCost" : "4","Category" : "Main"},{"Region" : "Central","Rep" : "Gill","Item" : "Pencil","Units" : "53","UnitCost" : "1.29","Category" : "Sub"},{"Region" : "Central","Rep" : "Gill","Item" : "Binder","Units" : "80","UnitCost" : "8","Category" : "Sub"},{"Region" : "Central","Rep" : "Kivell","Item" : "Desk","Units" : "5","UnitCost" : "125","Category" : "Sub"},{"Region" : "East","Rep" : "Jones","Item" : "Pen Set","Units" : "62","UnitCost" : "4","Category" : "Main"},{"Region" : "Central","Rep" : "Morgan","Item" : "Pen Set","Units" : "55","UnitCost" : "12.49","Category" : "Sub"},{"Region" : "Central","Rep" : "Kivell","Item" : "Pen Set","Units" : "42","UnitCost" : "23.95","Category" : "Sub"},{"Region" : "West","Rep" : "Sorvino","Item" : "Desk","Units" : "3","UnitCost" : "275","Category" : "Main"},{"Region" : "Central","Rep" : "Gill","Item" : "Pencil","Units" : "7","UnitCost" : "1.29","Category" : "Sub"},{"Region" : "West","Rep" : "Sorvino","Item" : "Pen","Units" : "76","UnitCost" : "1","Category" : "Main"},{"Region" : "West","Rep" : "Thompson","Item" : "Binder","Units" : "57","UnitCost" : "19","Category" : "Main"},{"Region" : "Central","Rep" : "Andrews","Item" : "Pencil","Units" : "14","UnitCost" : "1.29","Category" : "Sub"},{"Region" : "Central","Rep" : "Jardine","Item" : "Binder","Units" : "11","UnitCost" : "4","Category" : "Sub"},{"Region" : "Central","Rep" : "Jardine","Item" : "Binder","Units" : "94","UnitCost" : "19","Category" : "Sub"},{"Region" : "Central","Rep" : "Andrews","Item" : "Binder","Units" : "28","UnitCost" : "4","Category" : "Sub"},{"Category" : "Sub","Region" : "Central","Rep" : "Jardine","Item" : "Pencil","Units" : "90","UnitCost" : "4"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pivot_info", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "pivotInfo","type" : "STRING","size" : "256"},{"id" : "colID","type" : "STRING","size" : "256"},{"id" : "seq","type" : "STRING","size" : "256"},{"id" : "titleText","type" : "STRING","size" : "256"},{"id" : "sort","type" : "STRING","size" : "256"},{"id" : "colsize","type" : "STRING","size" : "256"},{"id" : "show","type" : "STRING","size" : "256"},{"id" : "displayType","type" : "STRING","size" : "256"},{"id" : "headAlign","type" : "STRING","size" : "256"},{"id" : "bodyAlign","type" : "STRING","size" : "256"},{"id" : "bkColor","type" : "STRING","size" : "256"},{"id" : "color","type" : "STRING","size" : "256"},{"id" : "mask","type" : "STRING","size" : "256"},{"id" : "comboDataset","type" : "STRING","size" : "256"},{"id" : "comboCode","type" : "STRING","size" : "256"},{"id" : "comboText","type" : "STRING","size" : "256"},{"id" : "cssclass","type" : "STRING","size" : "256"}]},"Rows" : [{"pivotInfo" : "GROUP","colID" : "Category","seq" : "1","titleText" : "구분","sort" : "ASC","show" : "0","displayType" : "text","headAlign" : "center","bodyAlign" : "left","colsize" : "80","bkColor" : ""},{"pivotInfo" : "GROUP","colID" : "Region","seq" : "2","titleText" : "지역","sort" : "ASC","show" : "1","displayType" : "text","headAlign" : "center","bodyAlign" : "left","colsize" : "100","bkColor" : ""},{"pivotInfo" : "GROUP","colID" : "Rep","seq" : "3","titleText" : "담당자","sort" : "ASC","show" : "0","displayType" : "text","headAlign" : "center","bodyAlign" : "left","bkColor" : "","color" : "","mask" : "","comboDataset" : "","comboCode" : "","comboText" : "","colsize" : "100"},{"pivotInfo" : "PIVOT","colID" : "Item","seq" : "1","titleText" : "품명","sort" : "ASC","show" : "1","displayType" : "text","headAlign" : "center","bodyAlign" : "left","bkColor" : "","color" : "","mask" : "","comboDataset" : "","comboCode" : "","comboText" : "","colsize" : "100"},{"pivotInfo" : "FACTOR","colID" : "Units","seq" : "1","titleText" : "수량","sort" : "ASC","show" : "1","displayType" : "text","headAlign" : "center","bodyAlign" : "right","bkColor" : "","color" : "","mask" : "#,###.#","comboDataset" : "","comboCode" : "","comboText" : "","colsize" : "80"},{"pivotInfo" : "FACTOR","colID" : "UnitCost","seq" : "2","titleText" : "단가","sort" : "ASC","show" : "1","displayType" : "text","headAlign" : "center","bodyAlign" : "right","bkColor" : "","color" : "","mask" : "#,###.##","comboDataset" : "","comboCode" : "","comboText" : "","colsize" : "80"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new TextArea("txtDesc","20","60",null,"590","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("txt_WF_Desc");
            obj.set_value("1.Pivot Grid \n  1) 데이터는 합계(Sum) 처리만 가능 하다. 평균(Avg),개수(Count) 등 추가 시 웹의 한계에 따른 성능상의 문제가 발생할 수 있어 처리되지 않았다.\n  2) 합계의 기준은 아래 “GROUP”을 기준으로 한다.\n  3) Summary의 Factor 컬럼은 하기 Format Dataset의 FACTOR 컬럼 기준으로 처리된다.\n  4) 그리드 정보용 Dataset이 반드시 필요하며 하기 내용을 참고한다.\n  5) Factor Column은 Dataset의 숫자 필드만 가능하다.\n\n2.컬럼별 상세내용\n  * GROUP : 그리드 우측 Pivot 데이터의 기준 컬럼\n  * PIVOT : Pivoting 되는 컬럼\n  * FACTOR : Pivoting시 기준이 되는 Value 컬럼.\n      - colID : 원본데이터의 Column ID 로 원본데이터에 반드시 존재하여야 함. \n      - seq : column이 나열되는 순서\n      - titleText : 그리드 헤드 및 Pivoting UI에서 표기되는 title\n      - sort : 그리드에 표현될 때 컬럼의 sorting 방법 “ASC”,”DESC”중 택일\n      - show : 그리드 표현 여부. 그리드에 보여주지 않더라도 사용자의 오퍼레이션으로 정보를 변경등으로 필요한 경우는 show : “0”으로 입력 “0”,”1”중 택일\n      - colsize : column size \n      - displayType : cell display type 예) normal, number, text\n      - headAlign : 그리드 헤드의 Align 예) center, left\n      - bodyAlign : 그디드 바디의 Align 예) center, left,right\n      - bkColor : 필요시 기입. Cell별 BackGround Color 지정하며 지정시 background, background2가 동시에 적용되며, \n                       소계사용시 색상이 틀려지므로 소계적용시 비권장\n      - color : 필요시 기입. Cell별 text Color 지정.\n      - mask : 필요시 기입. Cell별 mask 지정. 주로 FACTOR 컬럼에 설정.\n      - comboDataset : displayType이 “combo”로 설정하고 combo로 사용시 inner Dataset\n      - comboCode : comboDataset의 Code Column\n      - comboText : comboDataset의 Text Column");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","20","txtDesc:20","130","26",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("pivot 생성");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","20","Button00:5",null,"360","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.getSetter("griduserproperty").set("!rowfix,!colfix,!filter,!initial");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","20","0","281","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Pivot 그리드");
            obj.set_cssclass("sta_WF_Title1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SamplePivot.xfdl", function() {
        /**
        *  Nexacro Professional Training Couse
        *  @MenuPath    개발가이드 > 표준 및 기본 정의 > Pivot 그리드
        *  @FileName 	SamplePivot.xfdl
        *  @Creator 	TOBESOFT Education
        *  @CreateDate 	2025/01/03
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2025/01/03      		 TOBESOFT Education	 	  	최초 생성
        *******************************************************************************
        */


        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);
        }

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/

        /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/

        this.Button00_onclick = function(obj,  e)
        {
        	this.Grid00.set_showAvg(true);
        	this.Grid00.set_pivotUI(true);
        	this.Grid00.set_pivotSubSum(true,true);
         	this.Grid00.set_pivotFactorOnlyNumber(false);
        //	this.Grid00.set_pivotSubSumColor(true);				// 소계 색상
        	var arrColor = ["#fbf0a1","#c4f8a4","#adefe0","#a5f7de","#a3dcf9","#c4b3e9"];
        	this.Grid00.set_pivotSubSumColor(true,arrColor);	// 소계 색상
         //	this.Grid00.set_pivotFactorType("AVG");
         	this.Grid00.set_showPivotRightSummary(true,100,"합계","center",false);
        	this.Grid00.set_showPivotSummary(true,"합계","center");

        	this.Grid00.reCalcPivot(this.ds_pivot_info,this.Dataset00);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.txtDesc.addEventHandler("onchanged",this.txtDesc_onchanged,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("SamplePivot.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
