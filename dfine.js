//TODO: implement jQuery functions as dfineUtil
(function() {

    var _array = Array.prototype;
    _array.each = function(callback) {
        var _this = this;
        for(var i = 0; i < _this.length; i++) {
            callback.call(_this, _this[i], i)
        }
    };
    _array.map = function(callback) {
        var _this = this;
        _this.each(function(v, i) {
            _this[i] = callback.call(_this, v, i);
        })
    };

    _array.trim = function() {
        var _this = this;
        _this.each(function(v, i) {
            if(typeof v == 'string') {
                _this[i] = v.trim();
            }
        });
    };

    var dFine;
    dFine = function() {};
    dFine.types = [];
    dFine.clazz = function(origin, prototype) {
        var heir = origin.split(' extends ')[0],
            parents = origin.split(' extends ')[1];
        if(parents) {
            parents = parents.split(',').trim()
        }
        var Type = function(params) {
            //this
        };
        $.extend(Clazz.prototype, prototype);
        return Clazz;
    };
})();