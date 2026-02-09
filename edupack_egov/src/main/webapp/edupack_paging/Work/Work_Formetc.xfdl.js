(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Work_Formetc");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds00", this);
            obj._setContents({});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn00","54","40","207","71",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("모달");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","293","41","202","76",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("모달리스");
            this.addChild(obj.name, obj);

            obj = new Div("div00","57","144","436","249",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("btn02","14","13","186","63",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("btn02");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btn03","225","13","187","63",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("btn03");
            this.div00.addChild(obj.name, obj);

            obj = new Div("div01","560","140","436","249",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_cssclass("div_WF_Area");
            obj.set_url("Work::Work_FormSub.xfdl");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00","552","56","368","64",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_value("부모창에 있는 edit");
            obj.set_text("부모창에 있는 edit");
            this.addChild(obj.name, obj);

            obj = new Button("btn04","70","432","273","62",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("form에 생성되는 있는 컴포넌트 정보");
            this.addChild(obj.name, obj);

            obj = new Button("btn05","68","531","280","58",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("string을 object로 변환");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdiv00","822","413","532","194",null,null,null,null,null,null,this);
            obj.set_text("");
            obj.set_visible("false");
            obj.set_background("#009316");
            this.addChild(obj.name, obj);

            obj = new Button("btn06","52","36","185","131",null,null,null,null,null,null,this.pdiv00.form);
            obj.set_taborder("0");
            obj.set_text("버른");
            this.pdiv00.addChild(obj.name, obj);

            obj = new ImageViewer("img00","295","37","173","74",null,null,null,null,null,null,this.pdiv00.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.pdiv00.addChild(obj.name, obj);

            obj = new Button("btn07","371","432","238","62",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("PopupDiv open");
            this.addChild(obj.name, obj);

            obj = new Button("btn08","376","528","114","61",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("타이머 설정");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","382","607","220","29",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("sta00");
            obj.set_cssclass("sta_WF_Title1");
            this.addChild(obj.name, obj);

            obj = new Button("btn09C","516","528","114","61",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("타이머 끄기");
            this.addChild(obj.name, obj);

            obj = new Button("btn10C",null,"426","144","87","480",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("btn10");
            this.addChild(obj.name, obj);

            obj = new Button("btn11C","650","526","7.8125%","79",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("btn11");
            this.addChild(obj.name, obj);

            obj = new Button("btn12C","57","607","141","71",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("동적 생성");
            this.addChild(obj.name, obj);

            obj = new Button("btn13C","208","605","132","73",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("동적 제거");
            this.addChild(obj.name, obj);

            obj = new Button("btn14C","360","636","164","61",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("동적 이벤트 생성");
            this.addChild(obj.name, obj);

            obj = new Button("btn03","1034","250","186","120",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("btn02");
            this.addChild(obj.name, obj);

            obj = new Button("btn02","550","636","190","61",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("div 동적 생성");
            this.addChild(obj.name, obj);

            obj = new Button("btn06","778","636","212","58",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("div 동적 제거");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div01.form
            obj = new Layout("default","",0,0,this.div01.form,function(p){});
            this.div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.pdiv00.form
            obj = new Layout("default","",0,0,this.pdiv00.form,function(p){});
            this.pdiv00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Work::Work_FormSub.xfdl");
        };
        
        // User Script
        this.registerScript("Work_Formetc.xfdl", function() {

        this.btn01_onclick = function(obj,e)
        {
        	var nW=400;
        	var nH=500;
        	var objApp=nexacro.getApplication();
        	var nLeft=(objApp.mainframe.width/2)-Math.round(nW/2);
        	var nTop=(objApp.mainframe.height/2)-Math.round(nH/2);
        	nLeft=system.clientToScreenX(this,nLeft);
        	nTop=system.clientToScreenY(this,nTop);

        	var sOpenStype="showtitlebar=true showstatusbar=false titletext='모달리스 팝업'";
        	var objParam={pTitle:"모달리스",pValue:"NEXACRO"};
        	nexacro.open("popupDept"
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
        	var objCF=new ChildFrame("popupDept",0,0,400,500);
        	objCF.formurl="Work::Work_PopupDept.xfdl";
        	objCF.openalign="center middle";
        	objCF.dragmovetype="all";
        	objCF.showtitlebar=false;
        	var objParam={pTitle:"부서 검색창",
        				  pValue:"ABC"};

        	objCF.showModal(this.getOwnerFrame(),objParam,this,"fnPopupCallback");
        };


        this.fnPopupCallback=function(sPopupId,sReturn)
        {
        	if(sReturn==undefined) return;

        	if(sPopupId=="popupDept")
        	{
        		var sCode=sReturn.split(":")[0];
        		var sName=sReturn.split(":")[1];
        		this.divSearch.form.edtDeptCode.value=sCode;
        		this.divSearch.form.edtDeptName.value=sName;
        	}

        };

        this.fnReturn=function(objDs)
        {
        	this.ds00.copyData(objDs);
        	trace(this.ds00.saveXML());
        }

        this.div00_btn02_onclick = function(obj,e)
        {
        	var a=this.div00.form.btn00.text;
        };

        this.btn04_onclick = function(obj,e)
        {
        	var arrObj=this.components;//all을 하면 데이터 셋까지 볼 수 있다
        	for(var i=0;i<arrObj.length;i++){
        		trace(arrObj[i]+":"+arrObj[i].id);
        	}
        };//string을 object형태로 변환할때 사용 가능

        this.btn05_onclick = function(obj,e)
        {
        	var sId="btn03";

        // 	var objBtn=eval("this."+sId);
        	var objBtn=this.components[sId];
        	trace(typeof objBtn + " : "+objBtn.text);
        	//eval 함수는 처리되는 속도도 늦고 보안 코드에 영향을 줄 수 있다
        	//string을 오브젝트로 변환시키는 방법
        };

        this.btn07_onclick = function(obj,e)
        {
        	this.pdiv00.trackPopupByComponent(obj,0,obj.height);
        };



        this.btn08_onclick = function(obj,e)
        {
        	this.setTimer(10,1000);
        };

        this.Work_Formetc_ontimer = function(obj,e)
        {
        	if(e.timerid==10){
        		this.fnGetTime();
        	}
        };

        this.fnGetTime=function(){
        	var objDate=new Date();
        	var nH=objDate.getHours("h");
        	var nM=objDate.getMinutes();
        	var nS=objDate.getSeconds();
        	var sH=nH.toString().length<2? "0"+nH.toString():nH.toString();
        	var sM=nM.toString().length<2? "0"+nM.toString():nM.toString();
        	var sS=nS.toString().length<2? "0"+nS.toString():nS.toString();

        	this.sta00.text=sH+":"+sM+":"+sS;
        };

        this.btn09C_onclick = function(obj,e)
        {
        	this.killTimer(10);
        };

        this.btn10C_onclick = function(obj,e)
        {
        	var nLeft=this.btn10.left;
        	var nLeft2=this.btn10.getOffsetLeft();
        	var nWidth=this.btn11.width;
        	var nWidth2=this.btn11.getOffsetWidth();


        	trace(nLeft2);
        	trace(nWidth2);
        };



        this.btn12C_onclick = function(obj,e)
        {
        	var objBtn=new Button("btnCreate",100,100,300,200);
        	this.addChild(objBtn.id,objBtn);
        	objBtn.background="gold";
        	objBtn.text="동적 생성 버튼";
        	objBtn.show();
        };

        this.btn13C_onclick = function(obj,e)
        {
        	this.removeChild("btnCreate");
        	objBtn.destroy();
        	objBtn=null;
        };

        this.btn14C_onclick = function(obj,e)
        {
        	this.btnCreate.addEventHandler("onclick",this.fnClick,this);
        };

        this.fnClick=function()
        {
        	alert("이벤트 핸들러 추가 함수");
        }



        this.btn02_onclick = function(obj,e)
        {
        	var objBtn=new Button("btnCreate",100,100,300,200);
        	this.div00.addChild(objBtn.id,objBtn);
        	objBtn.background="gold";
        	objBtn.text="동적 생성 버튼";
        	objBtn.show();
        };


        this.btn06_onclick = function(obj,e)
        {
        	this.div00.removeChild("btnCreate");
        	objBtn.destroy();
        	objBtn=null;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ontimer",this.Work_Formetc_ontimer,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.div00.form.btn02.addEventHandler("onclick",this.div00_btn02_onclick,this);
            this.div00.form.btn03.addEventHandler("onclick",this.div00_btn03_onclick,this);
            this.btn04.addEventHandler("onclick",this.btn04_onclick,this);
            this.btn05.addEventHandler("onclick",this.btn05_onclick,this);
            this.btn07.addEventHandler("onclick",this.btn07_onclick,this);
            this.btn08.addEventHandler("onclick",this.btn08_onclick,this);
            this.btn09C.addEventHandler("onclick",this.btn09C_onclick,this);
            this.btn10C.addEventHandler("onclick",this.btn10C_onclick,this);
            this.btn11C.addEventHandler("onclick",this.btn11C_onclick,this);
            this.btn12C.addEventHandler("onclick",this.btn12C_onclick,this);
            this.btn13C.addEventHandler("onclick",this.btn13C_onclick,this);
            this.btn14C.addEventHandler("onclick",this.btn14C_onclick,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
            this.btn06.addEventHandler("onclick",this.btn06_onclick,this);
        };
        this.loadIncludeScript("Work_Formetc.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
