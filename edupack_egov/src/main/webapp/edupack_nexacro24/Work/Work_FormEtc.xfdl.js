(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Work_FormEtc");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,810);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds00", this);
            obj._setContents({});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn00","59","59","144","47",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("팝업 모달");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","213","59","144","47",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("팝업 모달리스");
            this.addChild(obj.name, obj);

            obj = new Div("div00","36","139","358","211",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","186","20","127","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("btn00");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt00","33","20","118","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            this.div00.addChild(obj.name, obj);

            obj = new Div("div01","429","137","418","247",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div01");
            obj.set_cssclass("div_WF_Area");
            obj.set_url("Work::asd.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn02","20","375","295","45",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("다른 Div에 있는 컴포턴트 접근 테스트 버튼");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00","429","77","343","39",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_value("부모창에 있는 Edit");
            obj.set_text("부모창에 있는 Edit");
            this.addChild(obj.name, obj);

            obj = new Button("btn03","20","430","295","45",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Form에 생성되어 있는 컴포넌트 정보");
            this.addChild(obj.name, obj);

            obj = new Button("btn04","342","430","295","45",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("String을 Object로 변환");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdiv00","1144","3","346","245",null,null,null,null,null,null,this);
            obj.set_text("pdiv00");
            obj.set_visible("false");
            obj.set_background("green");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","32","51","98","97",null,null,null,null,null,null,this.pdiv00.form);
            obj.set_taborder("0");
            obj.set_text("btn00");
            this.pdiv00.addChild(obj.name, obj);

            obj = new Edit("edt00","211","51","66","110",null,null,null,null,null,null,this.pdiv00.form);
            obj.set_taborder("1");
            this.pdiv00.addChild(obj.name, obj);

            obj = new Button("btn05","894","75","196","50",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("PopupDiv 오픈");
            this.addChild(obj.name, obj);

            obj = new Button("btn06","902","300","157","57",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("타이머 설정");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","1075","308","143","37",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("sta00");
            obj.set_cssclass("sta_WF_Title1");
            this.addChild(obj.name, obj);

            obj = new Button("btn07","923","381","138","60",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("타이머 스탑");
            this.addChild(obj.name, obj);

            obj = new Button("btn08",null,"470","148","51","367",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("btn08");
            this.addChild(obj.name, obj);

            obj = new Button("btn09","765","560","12.265625%","60",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("btn09");
            this.addChild(obj.name, obj);

            obj = new Button("btn10","63","583","224","80",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("동적 생성");
            this.addChild(obj.name, obj);

            obj = new Button("btn11","318","587","119","90",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn12","470","591","140","80",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("동적 이벤트 설정");
            this.addChild(obj.name, obj);

            obj = new Button("btn13","70","687","209","82",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("다른 Div 안에 동적 생성");
            this.addChild(obj.name, obj);

            obj = new Button("btn14","310","695","153","71",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("다른 Div 버튼 삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn15","496","701","174","72",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("다른 Div 이벤트 설정");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div01
            obj = new Layout("default","",0,0,this.div01.form,function(p){});
            this.div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.pdiv00.form
            obj = new Layout("default","",0,0,this.pdiv00.form,function(p){});
            this.pdiv00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,810,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Work::asd.xfdl");
        };
        
        // User Script
        this.registerScript("Work_FormEtc.xfdl", function() {

        this.btn01_onclick = function(obj,e)
        {
        	var nW = 400;
        	var nH = 500;

        	var objApp = nexacro.getApplication();
        	var nLeft = (objApp.mainframe.width / 2) - Math.round(nW / 2);
        	var nTop = (objApp.mainframe.height / 2) - Math.round(nH / 2);
        	nLeft = system.clientToScreenX(this, nLeft); // 사용자의 화면의 크기에 맞는 좌표로 변경
        	nTop = system.clientToScreenY(this, nTop);

        	var sOpenStype = "showtitlebar=true showstatusbar=false titletext='모달리스 팝업'";
        	var objParam = {pTitle : "모달리스", pValue : "NEXACRO"};
        	nexacro.open("popupDetp" // 모달리스로 팝업창 열 때는 nexacro.open
        				, "Work::Work_PopupDept.xfdl"
        				, this.getOwnerFrame()
        				, objParam
        				, sOpenStype
        				, nLeft
        				, nTop
        				, nW
        				, nH
        				, this);
        };

        this.btn00_onclick = function(obj,e)
        {
        	var objCF = new ChildFrame("popupDept", 0, 0, 400, 500);
        	objCF.formurl = "Work::Work_PopupDept.xfdl";
        	objCF.openalign = "center middle";
        	objCF.dragmovetype = "all";
        	objCF.showtitlebar = false;
        	var objParam = {pTitle : "부서 검색창", pValue : "ABC" };

        	objCF.showModal(this.getOwnerFrame(), objParam, this, "fnPopupCallback"); // 모달로 팝업창 열 때는 showModal
        };

        this.fnPopupCallback = function(sPopupId, sReturn)
        {
        	if (sReturn == undefined) return;
        	if (sPopupId == "popupDept") {
        		var sCode = sReturn.split(":")[0]; // 구분자(:)을 기준으로 인덱스가 부여되며 나뉨
        		var sName = sReturn.split(":")[1];
        		this.divSearch.form.edtDeptCode.value = sCode;
        		this.divSearch.form.edtDeptName.value = sName;
        	}

        }

        this.btnOk_onclick = function(obj,e)
        {
        	var sDeptCode = this.ds_dept.getColumn(this.ds_dept.rowposition, "DEPT_CODE"); // 현재 선택된 행, 어떤 행
        	var sDeptName = this.ds_dept.getColumn(this.ds_dept.rowposition, "DEPT_NAME"); // 현재 선택된 행, 어떤 행

        	this.close(sDeptCode + ":" + sDeptName); // close 함수는 인자로 string 하나만 전달할 수 있음
        };

        this.fnReturn = function(objDs)
        {
        	this.ds00.copyData(objDs);
        	trace(this.ds00.saveXML());
        }
        this.btn02_onclick = function(obj,e)
        {
        	var a = this.div00.form.btn00.text;
        };

        this.btn03_onclick = function(obj,e)
        {
        	var arrObj = this.all // 화면에 있는 모든 오브젝트(객체)(컴포넌트 + 데이터셋)의 정보
        	var arrObj2 = this.components; // 화면에 있는 모든 컴포넌트의 정보

        	for (var i = 0; i < arrObj.length; i++) {
        		trace(arrObj[i] + " : " + arrObj[i].id);
        	}
        };

        this.btn04_onclick = function(obj,e)
        {
        	var sId = "btn03";
        	// var objBtn = eval("this."+sId); => 신뢰할 수 없는 함수
        	var objBtn = this.components[sId]; // 컴포넌트 중에 ID이 sId인 컴포넌트의 오브젝트를 지칭
        	trace(typeof objBtn + " : " + objBtn.text);
        };

        this.btn05_onclick = function(obj,e)
        {
        	this.pdiv00.trackPopupByComponent(obj, 0, obj.height);
        };

        this.btn06_onclick = function(obj,e)
        {
        	this.setTimer(18, 1000) // 1000 == 1초
        	// 해당 Form의 ontimer라는 이벤트가 1초마다 호출
        };

        this.Work_FormEtc_ontimer = function(obj,e)
        {
        	if (e.timerid == 18) {
        		this.fnGetTime();
        	}
        };

        this.fnGetTime = function()
        {
        	var objDate = new Date();
        	var nH = objDate.getHours("h");
        	var nM = objDate.getMinutes();
        	var nS = objDate.getSeconds();
        	var sH = nH.toString().length < 2 ? "0" + nH.toString() : nH.toString();
        	var sM = nM.toString().length < 2 ? "0" + nM.toString() : nM.toString();
        	var sS = nS.toString().length < 2 ? "0" + nS.toString() : nS.toString();

        	this.sta00.text = sH + " : " + sM + " : " + sS;
        }
        this.btn07_onclick = function(obj,e)
        {
        	this.killTimer(18);
        };

        this.btn09_onclick = function(obj,e)
        {
        	var nLeft = this.btn08.left;
        	var nWidth = this.btn09.width;
        	trace(nLeft);
        	trace(nWidth);
        	// 컴포넌트의 위치 속성값 그대로를 지칭하므로 원하는 컴포넌트의 위치가 제대로 출력되지 않음

        	var nLeft2 = this.btn08.getOffsetLeft();
        	var nWidth2 = this.btn09.getOffsetWidth();
        	trace(nLeft2);
        	trace(nWidth2);
        	// 위 함수를 통해 픽셀 단위의 컴포넌트 위치를 지칭할 수 있음
        };

        this.btn10_onclick = function(obj,e)
        {
        	var objBtn = new Button("btnCreate", 100, 100, 300, 200); // Id, x좌표, y좌표, 가로크기, 세로크기
        	this.addChild(objBtn.id, objBtn);
        	objBtn.background = "gold";
        	objBtn.text = "동적 생성 버튼";
        	objBtn.show(); // 화면에 표출
        };

        this.btn11_onclick = function(obj,e)
        {
        	var objBtn = this.removeChild("btnCreate");
        	objBtn.destroy();
        	objBtn = null;
        };

        this.btn12_onclick = function(obj,e)
        {
        	this.btnCreate.addEventHandler("onclick", this.fnClick, this);
        };

        this.fnClick = function()
        {
        	alert("이벤트 핸들러 추가 함수 호출");
        }

        this.btn13_onclick = function(obj,e)
        {
        	var objBtn = new Button("btnCreate1", 50, 50, 100, 100);
        	this.div00.form.addChild(objBtn.id, objBtn);
        	objBtn.background = "red";
        	objBtn.text = "동적 버튼";
        	objBtn.show(); // 화면에 표출
        };

        this.btn14_onclick = function(obj,e)
        {
        	var objBtn = this.div00.form.removeChild("btnCreate1");
        	objBtn.destroy();
        	objBtn = null;
        };

        this.btn15_onclick = function(obj,e)
        {
        	this.div00.form.btnCreate1.addEventHandler("onclick", this.fnClick, this);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ontimer",this.Work_FormEtc_ontimer,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.div00.form.btn00.addEventHandler("onclick",this.div00_btn00_onclick,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
            this.btn03.addEventHandler("onclick",this.btn03_onclick,this);
            this.btn04.addEventHandler("onclick",this.btn04_onclick,this);
            this.btn05.addEventHandler("onclick",this.btn05_onclick,this);
            this.btn06.addEventHandler("onclick",this.btn06_onclick,this);
            this.btn07.addEventHandler("onclick",this.btn07_onclick,this);
            this.btn09.addEventHandler("onclick",this.btn09_onclick,this);
            this.btn10.addEventHandler("onclick",this.btn10_onclick,this);
            this.btn11.addEventHandler("onclick",this.btn11_onclick,this);
            this.btn12.addEventHandler("onclick",this.btn12_onclick,this);
            this.btn13.addEventHandler("onclick",this.btn13_onclick,this);
            this.btn14.addEventHandler("onclick",this.btn14_onclick,this);
            this.btn15.addEventHandler("onclick",this.btn15_onclick,this);
        };
        this.loadIncludeScript("Work_FormEtc.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
