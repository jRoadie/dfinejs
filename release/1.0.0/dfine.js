//TODO: implement jQuery functions as dfineUtil
(function() {

    var dFine;
    dFine = function() {};
    dFine.prototype = {

    };

    dFine.classes = {};

    /**
     * JavaScript has five pure types: object, function, string, number & boolean
     * we will define some new types and modify few of existing types
     * such as array <- object, regexp <- object float <- number, integer <- number
     * @param target
     */
    dFine.typeOf = function(target) {

    };
    dFine.is = function(target, type) {
        return
    };

    dFine.isObject = function() {

    };

    dFine.isFunction = function() {

    };

    dFine.isRegExp = function() {

    };

    dFine.isArray = function() {

    };

    dFine.isNumber = function() {

    };

    dFine.isInteger = function() {

    };

    dFine.isFloat = function() {

    };

    dFine.merge = function() {
        var target = arguments[0],
            sources = arguments.collect(function(v, i) {
                return i > 0 && v instanceof Object
            }),
            resolver = arguments[arguments.length - 1] instanceof Function ? arguments[arguments.length - 1] : undefined,
            deep = arguments[arguments.length - 1] instanceof Boolean ? arguments[arguments.length - 1]
                : (arguments[arguments.length - 2] instanceof Boolean ? arguments[arguments.length - 2] : true);
        console.log(target)
        console.log(sources)
        console.log(resolver)
        console.log(deep)

    };

    dFine.extend = function() {

    };

    var modifiers = ['public', 'private', 'protected'];

    var Meta = function(meta) {
        this.level = meta.level; //class,method,property
        this.name = meta.name;
        this.modifer = meta.modifer;
        this.annotations = meta.annotations;
    };

    dFine['class'] = function(prototype) {
        var constructor = prototype.constructor;
        constructor.prototype = prototype;
        return constructor;
    };

    //deprecated
    dFine.clazz = function(origin, prototype) {
        var name = origin.split(' extends ')[0],
            parents = origin.split(' extends ')[1];
        if(parents) {
            parents = parents.split(',').trim();
        }
        var Property = function() {

        };
        var Method = function() {
            this.name = undefined;
            this.arguments= undefined;
            this.modifier = undefined;
            this.returnType = undefined;
        };
        var Class = dFine.classes[name] = function() {
            var type = name;
            var origin = name + parents.map(function(v) { return '>' + v }).toString();
            this.df9 = {
                typeOf: function() {
                    return type;
                },
                instanceOf: function(type) {
                    return parents.contains(type)
                },
                origin: function() {
                    return origin;
                }
            }
        };

        Class.prototype = prototype instanceof Function ? new prototype() : prototype;
        return Class;
    };

    dFine.method = function() {

    };

    dFine.property = function() {

    };

    window.dFine = dFine;
})();