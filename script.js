var target = document.getElementById('target');
var titles = [
    'I am a huge fan of Stargate, Star Trek and The Office series.',
    'I love to play with the Tomb Raider series.',
    'In 1999, I saw the total solar eclipse in Hungary.',
    'Altogether I completed 185 subjects = 610 credits in higher education institutions.',
    'So far, I have lived in 3 countries (Hungary, Denmark, Norway), in 5 different places (Cegléd, Aarhus, Budapest, Oslo, Mánfa).'
];

function newTitle () {
    var i = (Math.random() * titles.length) | 0;
    target.innerText = titles[i];
}

newTitle();


// toggle
var show = function (elem) {
	elem.style.display = 'block';
};

var hide = function (elem) {
	elem.style.display = 'none';
};

var toggle = function (elem) {

	// if the element is visible, hide it
	if (window.getComputedStyle(elem).display === 'block') {
        hide(elem);
		return;
	}

	// otherwise, show it
	show(elem);
};

// listen for click events
document.addEventListener('click', function (event) {

	// make sure clicked element is our toggle
	if (!event.target.classList.contains('toggle')) return;

	// prevent default link behavior
	event.preventDefault();

	// get the content
	var content = document.querySelector(event.target.hash);
	if (!content) return;

	// toggle the content
	toggle(content);

}, false);
// END toggle