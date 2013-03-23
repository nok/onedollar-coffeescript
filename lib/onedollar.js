// Generated by CoffeeScript 1.6.1
(function() {

  window.OneDollar = (function() {

    function OneDollar(fragmentation, size, angle, step) {
      this.fragmentation = fragmentation != null ? fragmentation : 64;
      this.size = size != null ? size : 250;
      this.angle = angle != null ? angle : 45;
      this.step = step != null ? step : 3;
      this.PI = Math.PI;
      this.HALFDIAGONAL = 0.5 * Math.sqrt(this.size * this.size + this.size * this.size);
      this.templates = {};
    }

    OneDollar.prototype.learn = function(name, points) {
      return this.templates[name] = points;
    };

    return OneDollar;

  })();

}).call(this);