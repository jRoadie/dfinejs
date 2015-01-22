(function() {
    var _object = Object.prototype;
    _object.collect = function(resolver) {
        var _this = this, collected = {};
        for(var key in _this) {
            if(_this.hasOwnProperty(key)) {
                var val = _this[key];
                if(resolver.call(_this, key, val)) {
                    collected[key] = val;
                }
            }
        }
        return collected;
    };

    var _array = Array.prototype;
    _array.contains = function(list) {
        var count = 0;
        if(!(list instanceof Array)) {
            list = [list];
        }
        for(var i = 0; i < list.length; i++) {
            for(var j = 0; j < this.length; j++) {
                if(list[i] === this[j]) {
                    count++;
                    break;
                }
            }
        }
        return count == list.length;
    };
    _array.each = function(resolver) {
        var _this = this;
        for(var i = 0; i < _this.length; i++) {
            resolver.call(_this, _this[i], i)
        }
    };
    _array.map = function(resolver) {
        var _this = this, res = [];
        _this.each(function(v, i) {
            res[i] = resolver.call(_this, v, i);
        });
        return res;
    };
    _array.collect = function(resolver) {
        var _this = this, collects = [];
        _this.each(function(v, i) {
            if(resolver.call(_this, v, i)) {
                collects.push(v)
            }
        });
        return collects;
    };

    _array.trim = function() {
        var _this = this;
        _this.each(function(v, i) {
            if(typeof v == 'string') {
                _this[i] = v.trim();
            }
        });
    };
});