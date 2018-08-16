var DateFormatter = (function(){
    
    function Format(oDate, bLong){
        if (!oDate){
            return "";
        }

        if(bLong){
            var options = { year: 'numeric', month: 'long', day: 'numeric' };
            return oDate.toLocaleDateString('en-US', options);
        }
        else{
            return oDate.toLocaleDateString('en-US');
        }
    };

    return {
        FormatDate: Format
    };

})();