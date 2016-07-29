var arr = [-1, 43, 14, 2, 5];

var statCount = (function () {
    
    function sum(arr) {
        return arr.reduce(function (total, item) {
                return total + item;
        }, 0);
    }
    
    return {
        negative: function(arr){
            var neg = arr.filter(function (item) {
                return item < 0;
            });
            return neg.length;
        },

        even: function(arr) {
            var ev = arr.filter(function (item) {
                return item % 2 === 0;
            });
            return ev.length;
        },

        average: function(arr) {
            return sum(arr) / arr.length;
        }
    };
}());