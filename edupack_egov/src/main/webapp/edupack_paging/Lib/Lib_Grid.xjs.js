//XJS=Lib_Grid.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {

        this.CONST_NONE_MARK = "";
        this.CONST_ASC_MARK = "↑";
        this.CONST_DESC_MARK = "↓";
        this.lfn_gridSort = function (obj, e)
        {
            if(obj.getCellProperty("head", e.cell, "displaytype") == "checkboxcontrol") return;
            var objDs     = obj.getBindDataset();
        	var sColId    = obj.getCellProperty("body", e.cell, "text").split(":");
        	var sHeadText = "";

        	for(var i = 0; i<obj.getCellCount("head"); i++)
        	{
        		sHeadText = obj.getCellText(-1, i) ;
        		if(i == e.cell){
        			if (sHeadText.substr(sHeadText.length-1) == this.CONST_ASC_MARK) {
        				obj.setCellProperty("head", i, "text", sHeadText.substr(0, sHeadText.length - 1) + this.CONST_DESC_MARK);
        				objDs.keystring = "S:-" + sColId[1];
        			}
        			else if (sHeadText.substr(sHeadText.length-1) == this.CONST_DESC_MARK) {
        				obj.setCellProperty("head", i, "text", sHeadText.substr(0, sHeadText.length - 1) + this.CONST_ASC_MARK);
        				objDs.keystring = "S:+" + sColId[1];
        			}
        			else {
        				obj.setCellProperty("head", i, "text", sHeadText + this.CONST_ASC_MARK);
        				objDs.keystring = "S:+" + sColId[1];
        			}
        		}
        		else {
        			if(sHeadText != null & sHeadText != ""){
        				if (sHeadText.substr(sHeadText.length - 1) == this.CONST_ASC_MARK || sHeadText.substr(sHeadText.length - 1) == this.CONST_DESC_MARK) {
        					obj.setCellProperty("head", i, "text", sHeadText.substr(0, sHeadText.length - 1));
        				}
        			}
        		}
        	}
        }


         this.lfn_gridHead=function(obj,e){
        	var sType = obj.getCellProperty("head", e.cell, "displaytype");
            var sText = "";
        	if(sType == "checkboxcontrol"){
               this.lfn_gridCheckAll(obj,e);
            }
            else{
                this.lfn_gridSort(obj,e);
            }
        }

        this.lfn_gridCheckAll=function(obj,e){
        	 var objDs = obj.getBindDataset();
                if(objDs.getRowCount() < 1) return;

                sText = obj.getCellProperty("head", e.cell, "text");
                sText = (sText == "1" ? "0" : "1");

        		for(var i=0; i < objDs.rowcount; i++){
        			objDs.setColumn(i, "CHK", sText);
        		}
        	//	objDs.enableevent(true);
        		obj.setCellProperty("Head", e.cell, "text", sText);
        }
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
