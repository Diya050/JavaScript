    var elem = document.getElementById('circle');
    var params = { fullscreen: true};
    var two = new Two(params).appendTo(elem);
    var x = Math.round(Math.random()*50);
    var y = Math.round(Math.random()*50);
    var circles = [];
    var rectangles = [];
    var ellipse = [];



    var horizontal = function(){
      for(i = 0; i < 1500; i++) {

          circles[i] = two.makeCircle(x+100, y+150, Math.random()*50);
          circles[i].fill = 'white';
          circles[i].noStroke();
          rectangles[i] = two.makeRectangle(x, y, Math.random()*90, Math.random()*120);
          rectangles[i].fill = 'white';
          rectangles[i].noStroke();
	   ellipse[i] = two.makePolygon(x+(Math.random()*100), y+(Math.random()*70), x+(Math.random()*50), y+(Math.random()*120), x+(Math.random()*90), y+(Math.random()*80));
          ellipse[i].fill = 'white';
          ellipse[i].noStroke();
          x += 200;
          if(x > 1500){
            y += 180;
            x = 0;
          }
          
      }


    }


    horizontal();

 function func(frameCount) {
      var colors = ['#0071bc', '#e54960', '#fff200', '#C249EF', '#00ffff'];



      for(i=0; i<colors.length; i++){
        var randomi = Math.floor(Math.random() * 240) + 1;
        circles[randomi].fill = colors[i];
        circles[randomi].opacity = Math.random();
        circles[randomi].translation = new Two.Vector(600, 600);
        rectangles[randomi].fill = colors[i];
        rectangles[randomi].opacity = Math.random();
        rectangles[randomi].translation = new Two.Vector(600, 600);
	  ellipse[randomi].fill = colors[i];
        ellipse[randomi].opacity = Math.random();
        ellipse[randomi].translation = new Two.Vector(600, 600);

     }
	

    }
   two.bind('update', func);
two.play();
function rel(){
document.location.reload()
}
setTimeout(rel, 5000);
