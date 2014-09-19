(function() {

    var df9;
    df9 = function() {};
    df9.extend = function() {
        var i, deep = true, target = arguments[0];
        if(typeof target === "boolean") {
            i = 2;
            deep = arguments[0];
            target = arguments[1];
        }
        if(deep) {
            for(; i < arguments.length; i++) {
                for(var key in arguments[i]) {
                    if(arguments[i].hasOwnProperty(key)) {
                        target[key] = arguments[i][key];
                    }
                }
            }
        } else {
            for(var key in b) {
                if(b.hasOwnProperty(key)) {
                    a[key] = b[key];
                }
            }
        }

        return target;
    };
    df9.clazz = function(props) {
        var Class = function(){};
        Object.extend(props)
    };

    window.dFine = df9;

})();