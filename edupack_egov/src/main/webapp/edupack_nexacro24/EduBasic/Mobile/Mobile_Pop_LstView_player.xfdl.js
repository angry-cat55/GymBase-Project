(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Pop_LstView_player");
            this.set_titletext("Player");
            this.set_cssclass("frm_MLM_Bg");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,410);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Player1", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Code","type" : "STRING","size" : "256"},{"id" : "PlayerPhoto","type" : "STRING","size" : "256"},{"id" : "PlayerName","type" : "STRING","size" : "256"},{"id" : "PlayerPosition","type" : "STRING","size" : "256"},{"id" : "PlayerHW","type" : "STRING","size" : "256"},{"id" : "PlayerBackNO","type" : "STRING","size" : "256"},{"id" : "PlayerSalary","type" : "STRING","size" : "256"},{"id" : "Name","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_KBO", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Code","type" : "STRING","size" : "256"},{"id" : "Name","type" : "STRING","size" : "256"},{"id" : "Foundyear","type" : "STRING","size" : "256"},{"id" : "Hometown","type" : "STRING","size" : "256"},{"id" : "KoreanSeriesTitles","type" : "STRING","size" : "256"},{"id" : "emblem","type" : "STRING","size" : "256"},{"id" : "TeamTel","type" : "STRING","size" : "256"},{"id" : "TeamPostcode","type" : "STRING","size" : "256"},{"id" : "TeamAddress","type" : "STRING","size" : "256"},{"id" : "TeamDetailAdd","type" : "STRING","size" : "256"},{"id" : "TeamHomepage","type" : "STRING","size" : "256"},{"id" : "TeamOwner","type" : "STRING","size" : "256"},{"id" : "TeamCoach","type" : "STRING","size" : "256"}]},"Rows" : [{"Name" : "KIA Tigers","Foundyear" : "2001","Hometown" : "광주광역시","KoreanSeriesTitles" : "11","emblem" : "imagerc::emblem_KIA.png","TeamTel" : "070) 7686-8000","TeamAddress" : "광주광역시 북구 서림로 10","TeamHomepage" : "www.kiatigers.co.kr","TeamOwner" : "정몽구","TeamPostcode" : "[61255]","TeamDetailAdd" : "챔피언스필드 내 ","Code" : "B01","TeamCoach" : "김기태"},{"Name" : "Doosan Bears","Foundyear" : "1982","Hometown" : "서울특별시","KoreanSeriesTitles" : "5","emblem" : "imagerc::emblem_Doosan.png","TeamTel" : "02) 2240-1777 ","TeamAddress" : "서울특별시 송파구 올림픽로 25 ","TeamHomepage" : "www.doosanbears.com","TeamOwner" : "박정원","TeamPostcode" : "[05500]","TeamDetailAdd" : "잠실야구장 내","Code" : "B02","TeamCoach" : "김태형"},{"Name" : "LOTTE Giants","Foundyear" : "1982","Hometown" : "부산광역시","KoreanSeriesTitles" : "2","emblem" : "imagerc::emblem_LOTTE.png","TeamAddress" : "부산광역시 동래구 사직로 45 ","TeamHomepage" : "www.giantsclub.com","TeamTel" : "051) 590-9000","TeamOwner" : "신격호","TeamPostcode" : "[47874]","TeamDetailAdd" : "사직야구장 내","Code" : "B03","TeamCoach" : "조원우"},{"Name" : "NC Dinos","Foundyear" : "2011","Hometown" : "경상남도 창원시","emblem" : "imagerc::emblem_NC.png","TeamHomepage" : "www.ncdinos.com","TeamAddress" : "경상남도 창원시 마산회원구 삼호로 63 ","TeamTel" : "1644-9112","TeamOwner" : "김택진","TeamPostcode" : "[51323]","TeamDetailAdd" : "마산야구장 내","Code" : "B04","TeamCoach" : "유영준"},{"Name" : "SK Wyverns","Foundyear" : "2000","Hometown" : "인천광역시","KoreanSeriesTitles" : "4","emblem" : "imagerc::emblem_SK.png","TeamHomepage" : "www.skwyverns.com","TeamAddress" : "인천광역시 남구 매소홀로 618 ","TeamOwner" : "최창원","TeamTel" : "032) 455-2600","TeamPostcode" : "[22234]","TeamDetailAdd" : "주경기장 내","Code" : "B05","TeamCoach" : "염경엽"},{"Name" : "LG Twins","Foundyear" : "1990","Hometown" : "서울특별시","KoreanSeriesTitles" : "2","emblem" : "imagerc::emblem_LG.png","TeamAddress" : "서울특별시 송파구 올림픽로 25 ","TeamHomepage" : "www.lgtwins.com","TeamOwner" : "구본준","TeamTel" : "-","TeamPostcode" : "[05500]","TeamDetailAdd" : "잠실야구장 내","Code" : "B06","TeamCoach" : "류중일"},{"Name" : "NEXEN Heroes","Foundyear" : "2008","Hometown" : "서울특별시","emblem" : "imagerc::emblem_Nexen.png","TeamAddress" : "서울특별시 구로구 경인로 430 ","TeamHomepage" : "www.heroesbaseball.co.kr","TeamTel" : "02) 3660-1000","TeamOwner" : "박세영","TeamPostcode" : "[08223]","TeamDetailAdd" : "고척스카이돔 내","Code" : "B07","TeamCoach" : "장정석"},{"Name" : "Hanwha Eagles","Foundyear" : "1986","Hometown" : "대전광역시","KoreanSeriesTitles" : "1","emblem" : "imagerc::emblem_Hanwha.png","TeamHomepage" : "www.hanwhaeagles.co.kr","TeamOwner" : "김승연","TeamAddress" : "대전광역시 중구 대종로 373 ","TeamTel" : "042) 630-8200","TeamPostcode" : "[35021]","TeamDetailAdd" : "한밭종합운동장 내","Code" : "B08","TeamCoach" : "한용덕"},{"Name" : "SAMSUNG Lions","Foundyear" : "1982","Hometown" : "대구광역시","KoreanSeriesTitles" : "8","emblem" : "imagerc::emblem_Samsung.png","TeamHomepage" : "www.samsunglions.com","TeamAddress" : "대구광역시 수성구 야구전설로 1 ","TeamTel" : "053) 780-3300","TeamOwner" : "임대기","TeamPostcode" : "[42250]","TeamDetailAdd" : "삼성 라이온즈 파크 내","Code" : "B09","TeamCoach" : "김한수"},{"Name" : "KT Wiz","Foundyear" : "2013","Hometown" : "경기도 수원시","emblem" : "imagerc::emblem_KT.png","TeamHomepage" : "www.ktwiz.co.kr","TeamAddress" : "경기도 수원시 장안구 경수대로 893 ","TeamTel" : "1899-5916","TeamOwner" : "황창규","TeamPostcode" : "[16308]","TeamDetailAdd" : "케이티위즈 파크 내","Code" : "B10","TeamCoach" : "김진욱"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static14","10","50","380","350",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_MLM_PopBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","10","10","254","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Player Information");
            obj.set_cssclass("sta_MLM_PopTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","360","10","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("btn_MLM_PopClose");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","20","60","96","120",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta_TeamName","183","107","197","36",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_MLM_TeamName");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","20","198","155","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Name");
            obj.set_cssclass("sta_MLM_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","20","238","155","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Position");
            obj.set_cssclass("sta_MLM_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","20","278","155","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Height / Weight");
            obj.set_cssclass("sta_MLM_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","20","318","155","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Uniform number");
            obj.set_cssclass("sta_MLM_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","20","358","155","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Salary");
            obj.set_cssclass("sta_MLM_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","183","238","205","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_MLM_Detail");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","183","278","205","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_MLM_Detail");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","183","318","205","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_MLM_Detail");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","183","358","205","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_MLM_Detail");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","183","198","205","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_MLM_Detail");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",400,410,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","ImageViewer00","image","ds_Player","PlayerPhoto");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Static09","text","ds_Player","PlayerPosition");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Static10","text","ds_Player","PlayerHW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Static11","text","ds_Player","PlayerBackNO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Static12","text","ds_Player","PlayerSalary");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Static13","text","ds_Player","PlayerName");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Mobile_Pop_LstView_player.xfdl", function() {

        this.Pop_LstView_player_onload = function(obj,e)
        {
        // 	var objDS = this.parent.param1;
        //     var nRow  = this.parent.param2;
        //
        // 	this.ds_Player.copyData(objDS);
        //
        // 	this.sta_TeamName.text = this.ds_KBO.lookup("Code", this.ds_Player.getColumn(nRow,"Code"), "Name");
        //     this.ds_Player.rowposition = nRow;

        };

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Pop_LstView_player_onload,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("Mobile_Pop_LstView_player.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
