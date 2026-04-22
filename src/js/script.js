
mapboxgl.accessToken = 'pk.eyJ1IjoidWEyIiwiYSI6ImNtbnl3djZ2azA2bHMycm9nb3MycmZpN3UifQ._jWrIGrPo-6izrQe9cfgrw';


var mapProps = {
	container: 'map',
	center: [-73.97, 40.75],
	zoom: 9
};

var map = new mapboxgl.Map(mapProps);

let count = 0;
let info = document.querySelector("#info");

map.on("click", function(evt){
	count++;
	console.log(count);
	info.value = `Clicks: ${count}`;
	console.log(info);
});
