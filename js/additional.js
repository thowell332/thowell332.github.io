function switchDisp(id1, id2) {
  var container1 = document.getElementById(id1);
  var container2 = document.getElementById(id2);
  container1.style.display = "inline-block";
  container2.style.display = "none";
}

function switchTabs(id1,id2) {
	var active = document.getElementById(id1);
	var inactive = document.getElementById(id2);
	active.className = "lead projects active";
	inactive.className = "lead projects";
}