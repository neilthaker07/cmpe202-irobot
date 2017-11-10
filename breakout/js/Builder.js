function Shop() {
    this.construct = function(builder) {
        builder.step1();
        builder.step2();
        return builder.get();
    }
}
 
function PatternBuilder() {
    this.pattern = null;
 
    this.step1 = function() {
        this.pattern = new Pattern();
    };
 
    this.step2 = function() {
        this.pattern.getNum();
    };
 
    this.get = function() {
        return this.pattern;
    };
}

function Pattern() {
    this.num = 0;
 
    this.getNum = function() {
        this.num = Math.floor(Math.random() * (8 - 1)) + 1;
    };
}
