//XJS=Lib_Util.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        this.lfn_getToday = function() {
        	var objDate = new Date();
        	var sToday  = objDate.getFullYear().toString();
        	    sToday += (objDate.getMonth()+1).toString().padLeft(2, "0")
        	    sToday += objDate.getDate().toString().padLeft(2, "0");
        	return sToday;
        }

        this.lfn_getFirstDay = function() {
        	var objDate = new Date();
        	var sToday  = objDate.getFullYear().toString();
        	    sToday += (objDate.getMonth()+1).toString().padLeft(2, "0")
        	    sToday += "01";
        	return sToday;
        }
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
