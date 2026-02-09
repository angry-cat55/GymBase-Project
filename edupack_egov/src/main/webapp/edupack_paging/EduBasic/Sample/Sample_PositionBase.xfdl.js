(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Sample_PositionBase");
            this.set_titletext("Sample_PositionBase");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_movie", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "TITEL","type" : "STRING","size" : "256"},{"id" : "PRODUCTION","type" : "STRING","size" : "256"},{"id" : "STARRING","type" : "STRING","size" : "256"},{"id" : "YEAR","type" : "STRING","size" : "256"},{"id" : "SUMMARY","type" : "STRING","size" : "256"},{"id" : "DIRECTOR","type" : "STRING","size" : "256"},{"id" : "WRITER","type" : "STRING","size" : "256"},{"id" : "GENRE","type" : "STRING","size" : "256"},{"id" : "SITE","type" : "STRING","size" : "256"},{"id" : "RUNTIME","type" : "STRING","size" : "256"},{"id" : "MOVIE_IMG","type" : "STRING","size" : "256"},{"id" : "GRADE","type" : "STRING","size" : "256"}]},"Rows" : [{"TITEL" : "Titanic","STARRING" : "Kate Winslet, Leonardo DiCaprio","YEAR" : "1997","SUMMARY" : "A fictional romantic tale of a rich girl (Winslet) and a poor bohemian boy (DiCaprio) who meet on the ill-fated voyage of the 'unsinkable' ship.","PRODUCTION" : "Paramount Pictures","RUNTIME" : "194 min","GENRE" : "Drama, Romance","DIRECTOR" : "James Cameron","WRITER" : "James Cameron","MOVIE_IMG" : "imagerc::m_titanic.png","GRADE" : "9.86"},{"TITEL" : "FROZEN","STARRING" : "Idina Menzel, Josh Gad, Kristen Bell","SUMMARY" : "Anna sets off on an epic journey—teaming up with rugged mountain man Kristoff and his loyal reindeer Sven—to find her sister Elsa, whose icy powers have trapped the kingdom of Arendelle in eternal winter. Encountering Everest-like conditions, mystical trolls and a hilarious snowman named Olaf, Anna and Kristoff battle the elements in a race to save the kingdom","YEAR" : "2013","PRODUCTION" : " Walt Disney Studios Motion Pictures","DIRECTOR" : "Chris Buck and Jennifer Lee","GENRE" : "Animation, Family, Musical","RUNTIME" : "102 min","SITE" : "http://movies.disney.com/frozen","WRITER" : "Chris Buck and Dean Wellins","MOVIE_IMG" : "imagerc::m_frozen.png","GRADE" : "9.20"},{"TITEL" : "Iron Man 3","STARRING" : "Don Cheadle, Guy Pearce, Gwyneth Paltrow, Robert Downey Jr.","PRODUCTION" : " Walt Disney Studios Motion Pictures","YEAR" : "2013","SUMMARY" : "Iron Man 3 pits brash-but-brilliant industrialist Tony Stark/Iron Man against an enemy whose reach knows no bounds. When Stark finds his personal world destroyed at his enemy’s hands, he embarks on a harrowing quest to find those responsible. This journey, at every turn, will test his mettle. With his back against the wall, Stark is left to survive by his own devices, relying on his ingenuity and instincts to protect those closest to him. As he fights his way back, Stark discovers the answer to the question that has secretly haunted him: does the man make the suit or does the suit make the man?","DIRECTOR" : "Shane Black","GENRE" : "Action, Adventure, Sci-Fi, Thriller, Fantasy","RUNTIME" : "130 min","WRITER" : "Adi Granov","SITE" : "http://marvel.com/ironman3","MOVIE_IMG" : "imagerc::m_ironman.png","GRADE" : "8.86"},{"TITEL" : "Star Wars","PRODUCTION" : " Twentieth Century Fox Film Corporation","STARRING" : "Ewan McGregor, Liam Neeson, Natalie Portman","YEAR" : "1999","SUMMARY" : "Stranded on the desert planet Tatooine after rescuing young Queen Amidala from the impending invasion of Naboo, Jedi apprentice Obi-Wan Kenobi and his Jedi Master Qui-Gon Jinn discover nine-year-old Anakin Skywalker, a young slave unusually strong in the Force. Anakin wins a thrilling Podrace and with it his freedom as he leaves his home to be trained as a Jedi. The heroes return to Naboo where Anakin and the Queen face massive invasion forces while the two Jedi contend with a deadly foe named Darth Maul. Only then do they realize the invasion is merely the first step in a sinister scheme by the re-emergent forces of darkness known as the Sith.","DIRECTOR" : "George Lucas","GENRE" : "Action, Adventure, Sci-Fi, Fantasy","RUNTIME" : "136 min","SITE" : "http://www.starwars.com/films/star-wars-episode-i-the-phantom-menace","WRITER" : "George Lucas","MOVIE_IMG" : "imagerc::m_starwars.png","GRADE" : "7.80"},{"TITEL" : "Inception","STARRING" : "Ellen Page, Joseph Gordon-Levitt, Ken Watanabe, Leonardo DiCaprio","PRODUCTION" : "Warner Bros. Pictures","SUMMARY" : "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable. Cobb's rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved. Now Cobb is being offered a chance at redemption. One last job could give him his life back but only if he can accomplish the impossible—inception. Instead of the perfect heist, Cobb and his team of specialists have to pull off the reverse: their task is not to steal an idea but to plant one. If they succeed, it could be the perfect crime. But no amount of careful planning or expertise can prepare the team for the dangerous enemy that seems to predict their every move. An enemy that only Cobb could have seen coming. This summer, your mind is the scene of the crime","YEAR" : "2010","DIRECTOR" : "Christopher Nolan","GENRE" : "Action, Sci-Fi, Drama, Mystery, Thriller","RUNTIME" : "148 min","WRITER" : "Christopher Nolan","MOVIE_IMG" : "imagerc::m_inception.png","GRADE" : "9.22"},{"TITEL" : "Avatar","STARRING" : "Michelle Rodriguez, Sam Worthington, Sigourney Weaver","YEAR" : "2009","SUMMARY" : "Jake Sully is a former Marine confined to a wheelchair. But despite his broken body, Jake is still a warrior at heart. He is recruited to travel light years to the human outpost on Pandora, where a corporate consortium is mining a rare mineral that is the key to solving Earth's energy crisis. Because Pandora's atmosphere is toxic, they have created the Avatar Program, in which human \"drivers\" have their consciousness linked to an avatar, a remotely-controlled biological body that can survive in the lethal air. These avatars are genetically engineered hybrids of human DNA mixed with DNA from the natives of Pandora... the Na'vi. Reborn in his avatar form, Jake can walk again. He is given a mission to infiltrate the Na'vi, who have become a major obstacle to mining the precious ore. But a beautiful Na'vi female, Neytiri, saves Jake's life, and this changes everything. Jake is taken in by her clan, and learns to become one of them, which involves many tests and adventures. As Jake's relationship with his reluctant teacher Neytiri deepens, he learns to respect the Na'vi way and finally takes his place among them. Soon he will face the ultimate test as he leads them in an epic battle that will decide the fate of an entire world","PRODUCTION" : " Twentieth Century Fox Film Corporation","DIRECTOR" : "James Cameron","GENRE" : "Action, Adventure, Sci-Fi, Fantasy","RUNTIME" : "162 min","WRITER" : "James Cameron","SITE" : "http://www.avatarmovie.com/","MOVIE_IMG" : "imagerc::m_avata.png","GRADE" : "9.07"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static06","20","0","320","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Position Base");
            obj.set_cssclass("sta_WF_GuideTitle1");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","60","29.00%",null,null,"40",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_movie");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"188\"/></Columns><Rows><Row size=\"40\"/><Row size=\"80\"/></Rows><Band id=\"body\"><Cell rowspan=\"2\" text=\"bind:MOVIE_IMG\" displaytype=\"imagecontrol\" imagestretch=\"fixaspectratio\"/><Cell col=\"1\" text=\"bind:TITEL\" cssclass=\"cell_WF_ExprM\"/><Cell row=\"1\" col=\"1\" text=\"bind:DIRECTOR\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("st_summary","grd_list:10","335",null,"145","10",null,null,null,"80",null,this);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("5px");
            obj.set_wordWrap("english");
            obj.set_fittocontents("height");
            obj.set_border("1px solid #bdc2c9");
            obj.set_cssclass("sta_WF_GuideResult");
            obj.set_font("13px/140% \"Segoe UI\",\"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_image","grd_list:10","60","180","240",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_border("1px solid #bdc2c9");
            obj.set_stretch("fit");
            this.addChild(obj.name, obj);

            obj = new Static("st_title","img_image:20","95","350","34",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_GuideTitle1");
            obj.set_border("1px solid #bdc2c9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","img_image:20","174","350","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_fittocontents("width");
            obj.set_border("1px solid #bdc2c9");
            obj.set_cssclass("sta_WF_ArrContents");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","Static01:5","174","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_fittocontents("width");
            obj.set_border("1px solid #bdc2c9");
            obj.set_cssclass("sta_WF_ArrContents");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","grd_list:10","st_summary:10",null,"165","10",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","0","8","150","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Runtime");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","47","150","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("Genres");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","0","86","150","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("Direction");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","0","125","150","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("Writer");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","148","8",null,"40","10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_background("");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_font("normal 15px/22px \"Malgun Gothic\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06","148","47",null,"40","10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_background("");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_font("normal 15px/22px \"Malgun Gothic\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static07","148","86",null,"40","10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_background("");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_font("normal 15px/22px \"Malgun Gothic\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static09","148","125",null,"40","10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_background("");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_font("normal 15px/22px \"Malgun Gothic\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05","img_image:10","139","290","35",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text(" Production / Year");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","grd_list:10","300","290","35",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text(" Summary");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","510","60","120","35",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Title");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","515","214","120","35",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Starring");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","524","249","470","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_ArrContents");
            obj.set_border("1px solid #bdc2c9");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1000,700,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","img_image","image","ds_movie","MOVIE_IMG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","st_title","text","ds_movie","TITEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Static01","text","ds_movie","WRITER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Static02","text","ds_movie","YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","st_summary","text","ds_movie","SUMMARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div00.form.Static04","text","ds_movie","RUNTIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Div00.form.Static06","text","ds_movie","GENRE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Div00.form.Static07","text","ds_movie","DIRECTOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","Div00.form.Static09","text","ds_movie","WRITER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","Static07","text","ds_movie","STARRING");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Sample_PositionBase.xfdl", function() {
        this.CompBase_ArrangeFit_onbindingvaluechanged = function(obj,e)
        {
        	this.resetScroll();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onbindingvaluechanged",this.CompBase_ArrangeFit_onbindingvaluechanged,this);
            this.ds_movie.addEventHandler("onrowsetchanged",this.Dataset00_onrowsetchanged,this);
        };
        this.loadIncludeScript("Sample_PositionBase.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
