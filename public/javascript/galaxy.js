window.onload = function() {
  var canvas = document.getElementById('canvas'),
      context = canvas.getContext('2d'),
      numPlanets = 400,
      planetContainer = [];

  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (window.webkitRequestAnimationFrame ||
                                    window.mozRequestAnimationFrame ||
                                    window.msRequestAnimationFrame ||
                                    window.oRequestAnimationFrame ||
                                    function (callback) {
                                      return window.setTimeout(callback, 17);
                                    });
  }

  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = (window.cancelRequestAnimationFrame ||
                                   window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame ||
                                   window.mozCancelAnimationFrame || window.mozCancelRequestAnimationFrame ||
                                   window.msCancelAnimationFrame || window.msCancelRequestAnimationFrame ||
                                   window.oCancelAnimationFrame || window.oCancelRequestAnimationFrame ||
                                   window.clearTimeout);
  }

  var Planet = function(radius, color) {
    this.radius = radius;
    this.color = color;
    this.draw = function(context) {
      context.save();
      context.translate(this.x, this.y);
      context.fillStyle = this.color;
      context.beginPath();
      context.arc(0, 0, this.radius, 0, (Math.PI * 2), true);
      context.closePath();
      context.fill();
      context.restore();    
    }
  }

  function random_number(min, max) {
    return Math.floor(Math.random() * max) + min;
  }

  for (var i = 0; i< numPlanets; i++) {
    planet = new Planet(1);
    var color_num = random_number(0,5);
    if (color_num == 0) {
      planet.color = "#3e4856";
    } else if (color_num == 1) {
      planet.color = "#545e6a";
    } else if (color_num == 2) {
      planet.color = "#311a4d";
    } else if (color_num == 3) {
      planet.color = "#453764";
    } else if (color_num == 4) {
      planet.color = "#686440";
    }
    planet.angle = random_number(0, 360);
    planet.pathRadiusX = random_number(85, 180);
    planet.pathRadiusY = planet.pathRadiusX * .4;
    planet.startX = 300;
    planet.startY = 130;
    planet.speed = random_number(1,6)/1000;
    console.log(planet.speed);
    planetContainer.push(planet);
  }

  (function render () {
    window.requestAnimationFrame(render, canvas);
    context.clearRect(0, 0, canvas.width, canvas.height);
    for(var i = 0; i < numPlanets; i++) {
      var p = planetContainer[i];
      p.x = p.startX + Math.sin(p.angle) * p.pathRadiusX;
      p.y = p.startY + Math.cos(p.angle) * p.pathRadiusY;
      p.angle += p.speed;
      p.draw(context);
    }
  }());
}