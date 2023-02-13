function time(){
	d = new Date(); //object of date()
	hr = d.getHours();
	min = d.getMinutes();
	sec = d.getSeconds();
	hr_rotation = 30 * hr + min / 2; //converting current time
	min_rotation = 6 * min;
	sec_rotation = 6 * sec;

	hour.style.transform = `rotate(${hr_rotation}deg)`;
	minute.style.transform = `rotate(${min_rotation}deg)`;
	second.style.transform = `rotate(${sec_rotation}deg)`;
}
setInterval(time, 1000);


var elem = document.getElementById('main');
    var params = { width: 1530, height: 630 };
    var two = new Two(params).appendTo(elem);

    var circle1 = two.makeCircle(758, 307, 280);
    var circle2 = two.makeCircle(758, 311, 8);

    var line1 = two.makeLine(758, 83, 758, 60);
    var line2 = two.makeLine(539, 311, 510, 311);
    var line3 = two.makeLine(1000, 311, 970, 311);
    var line4 = two.makeLine(758, 543, 758, 520);

var l1 = two.makeLine(879, 100, 869, 120);

var l2 = two.makeLine(964, 190, 944, 202);
var l8 = two.makeLine(546, 429, 569, 415);

var l5 = two.makeLine(878, 508, 864, 487);

var l7 = two.makeLine(641, 508, 654, 487);
var l4 = two.makeLine(960, 422, 936, 409);
var l10 = two.makeLine(559, 190, 579, 202);
var l11 = two.makeLine(639, 100, 652, 120);
    

    circle1.fill = '#fdfaf7';
    circle1.linewidth = 25;
    circle1.opacity = '1.00';
    circle1.rotation = '0.9'
    circle1.stroke = '#850C12';

    circle2.fill = '#fdfaf7';
    circle2.linewidth = 15;
    circle2.opacity = '1.00';
    circle2.rotation = '0.9'
    circle2.stroke = 'black';

    second.linewidth = 2;
    second.stroke = "rgba(255, 0, 0, 0.5)";

    minute.linewidth = 5;
    minute.stroke = "#40D1FC";

    hour.linewidth = 8;
    hour.stroke = "#32187E";

    line1.linewidth = 5;
    line1.stroke = "#4D1408";

    line2.linewidth = 5;
    line2.stroke = "#4D1408";

    line3.linewidth = 5;
    line3.stroke = "#4D1408";

    line4.linewidth = 5;
    line4.stroke = "#4d1408";
  var group = two.makeGroup(circle1, circle3, second, minute, hour, circle2, line1, line2, line3, line4, l1, l2, l4, l5, l7, l8, l10, l11);
  
    group.scale = 0.75;
 
two.update();
