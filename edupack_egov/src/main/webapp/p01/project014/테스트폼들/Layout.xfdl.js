(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Layout");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(450,440);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_team", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Code","type" : "STRING","size" : "256"},{"id" : "Name","type" : "STRING","size" : "256"},{"id" : "Foundyear","type" : "STRING","size" : "256"},{"id" : "Hometown","type" : "STRING","size" : "256"},{"id" : "KoreanSeriesTitles","type" : "STRING","size" : "256"},{"id" : "emblem","type" : "STRING","size" : "256"},{"id" : "TeamTel","type" : "STRING","size" : "256"},{"id" : "TeamPostcode","type" : "STRING","size" : "256"},{"id" : "TeamAddress","type" : "STRING","size" : "256"},{"id" : "TeamDetailAdd","type" : "STRING","size" : "256"},{"id" : "TeamHomepage","type" : "STRING","size" : "256"},{"id" : "TeamOwner","type" : "STRING","size" : "256"},{"id" : "TeamCoach","type" : "STRING","size" : "256"}]},"Rows" : [{"Name" : "KIA Tigers","Foundyear" : "2001","Hometown" : "광주광역시","KoreanSeriesTitles" : "11","emblem" : "imagerc::emblem_KIA.png","TeamTel" : "070) 7686-8000","TeamAddress" : "광주광역시 북구 서림로 10","TeamHomepage" : "www.kiatigers.co.kr","TeamOwner" : "정몽구","TeamPostcode" : "[61255]","TeamDetailAdd" : "챔피언스필드 내 ","Code" : "B01","TeamCoach" : "김기태"},{"Name" : "Doosan Bears","Foundyear" : "1982","Hometown" : "서울특별시","KoreanSeriesTitles" : "5","emblem" : "imagerc::emblem_Doosan.png","TeamTel" : "02) 2240-1777 ","TeamAddress" : "서울특별시 송파구 올림픽로 25 ","TeamHomepage" : "www.doosanbears.com","TeamOwner" : "박정원","TeamPostcode" : "[05500]","TeamDetailAdd" : "잠실야구장 내","Code" : "B02","TeamCoach" : "김태형"},{"Name" : "LOTTE Giants","Foundyear" : "1982","Hometown" : "부산광역시","KoreanSeriesTitles" : "2","emblem" : "imagerc::emblem_LOTTE.png","TeamAddress" : "부산광역시 동래구 사직로 45 ","TeamHomepage" : "www.giantsclub.com","TeamTel" : "051) 590-9000","TeamOwner" : "신격호","TeamPostcode" : "[47874]","TeamDetailAdd" : "사직야구장 내","Code" : "B03","TeamCoach" : "조원우"},{"Name" : "NC Dinos","Foundyear" : "2011","Hometown" : "경상남도 창원시","emblem" : "imagerc::emblem_NC.png","TeamHomepage" : "www.ncdinos.com","TeamAddress" : "경상남도 창원시 마산회원구 삼호로 63 ","TeamTel" : "1644-9112","TeamOwner" : "김택진","TeamPostcode" : "[51323]","TeamDetailAdd" : "마산야구장 내","Code" : "B04","TeamCoach" : "유영준"},{"Name" : "SK Wyverns","Foundyear" : "2000","Hometown" : "인천광역시","KoreanSeriesTitles" : "4","emblem" : "imagerc::emblem_SK.png","TeamHomepage" : "www.skwyverns.com","TeamAddress" : "인천광역시 남구 매소홀로 618 ","TeamOwner" : "최창원","TeamTel" : "032) 455-2600","TeamPostcode" : "[22234]","TeamDetailAdd" : "주경기장 내","Code" : "B05","TeamCoach" : "염경엽"},{"Name" : "LG Twins","Foundyear" : "1990","Hometown" : "서울특별시","KoreanSeriesTitles" : "2","emblem" : "imagerc::emblem_LG.png","TeamAddress" : "서울특별시 송파구 올림픽로 25 ","TeamHomepage" : "www.lgtwins.com","TeamOwner" : "구본준","TeamTel" : "-","TeamPostcode" : "[05500]","TeamDetailAdd" : "잠실야구장 내","Code" : "B06","TeamCoach" : "류중일"},{"Name" : "NEXEN Heroes","Foundyear" : "2008","Hometown" : "서울특별시","emblem" : "imagerc::emblem_Nexen.png","TeamAddress" : "서울특별시 구로구 경인로 430 ","TeamHomepage" : "www.heroesbaseball.co.kr","TeamTel" : "02) 3660-1000","TeamOwner" : "박세영","TeamPostcode" : "[08223]","TeamDetailAdd" : "고척스카이돔 내","Code" : "B07","TeamCoach" : "장정석"},{"Name" : "Hanwha Eagles","Foundyear" : "1986","Hometown" : "대전광역시","KoreanSeriesTitles" : "1","emblem" : "imagerc::emblem_Hanwha.png","TeamHomepage" : "www.hanwhaeagles.co.kr","TeamOwner" : "김승연","TeamAddress" : "대전광역시 중구 대종로 373 ","TeamTel" : "042) 630-8200","TeamPostcode" : "[35021]","TeamDetailAdd" : "한밭종합운동장 내","Code" : "B08","TeamCoach" : "한용덕"},{"Name" : "SAMSUNG Lions","Foundyear" : "1982","Hometown" : "대구광역시","KoreanSeriesTitles" : "8","emblem" : "imagerc::emblem_Samsung.png","TeamHomepage" : "www.samsunglions.com","TeamAddress" : "대구광역시 수성구 야구전설로 1 ","TeamTel" : "053) 780-3300","TeamOwner" : "임대기","TeamPostcode" : "[42250]","TeamDetailAdd" : "삼성 라이온즈 파크 내","Code" : "B09","TeamCoach" : "김한수"},{"Name" : "KT Wiz","Foundyear" : "2013","Hometown" : "경기도 수원시","emblem" : "imagerc::emblem_KT.png","TeamHomepage" : "www.ktwiz.co.kr","TeamAddress" : "경기도 수원시 장안구 경수대로 893 ","TeamTel" : "1899-5916","TeamOwner" : "황창규","TeamPostcode" : "[16308]","TeamDetailAdd" : "케이티위즈 파크 내","Code" : "B10","TeamCoach" : "김진욱"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn00","10","7","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("생성");
            this.addChild(obj.name, obj);

            obj = new Div("div00","10","50",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("10");
            obj.set_verticalgap("10");
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",450,440,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Layout.xfdl", function() {

        this.btn00_onclick = function(obj,e)
        {
        	this.fnCreateLayout();
        };

        this.fnCreateLayout = function()
        {
        	 var nLeft = 0;
        	 var nTop = 0;
        	 var nWidth = 190;
        	 var nHeight = 260;

        	 var objParam = {imgPath : ""
        					,team : ""
        					,win : ""
        					,addr : ""};

        	 var objDiv;
        	 for (var i = 0; i < this.ds_team.rowcount; i++) {
        		objParam.imgPath = this.ds_team.getColumn(i, "emblem");
        		objParam.team = this.ds_team.getColumn(i, "name");
        		objParam.win = this.ds_team.getColumn(i, "KoreanSeriesTitles");
        		objParam.addr = this.ds_team.getColumn(i, "Hometown");

        		objDiv = new Div("divContent"+i, nLeft, nTop, nWidth, nHeight);
        		objDiv.url = "Work::Work_LayoutSub.xfdl";
        		objDiv.param = JSON.parse(JSON.stringify(objParam)); // 깊은 복사
        		this.div00.addChild(objDiv.id, objDiv);

        		objDiv.show();
        	 }

        	 var nH = objDiv.getOffsetBottom();
        	 this.div00.setOffsetHeight(nH + 2);
        	 this.resetScroll();

        }



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
        };
        this.loadIncludeScript("Layout.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
