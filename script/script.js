let skills = [];

//start animations on page load
$(`.skill[data-skill-type="js"]`).addClass('focus');

// create list of skills
$('.skill').each(function(){
	let skill = $(this).data('skill-type');
	skills.includes(skill) ? null : skills.push(skill);
})
// animate skills
function startAnimations(){
	setInterval(function(){
	  let random = Math.floor(Math.random() * skills.length)
	  let next = skills[random];
	  $('.skill').removeClass('focus');
	  $(`.skill[data-skill-type="${next}"]`).addClass('focus');
	},3500);
	console.log(skills)
}
startAnimations()

//toggle
$('#filtered').click(function(){
	$('#marker').css('left', '80px')
	$('#skills-list').removeClass('animate').addClass('filter')
	$('form').slideDown('fast')
})
$('#animated').click(function(){
	$('#marker').css('left', '0px')
	$('#skills-list').removeClass('filter').addClass('animate')
	$('form').slideUp('fast')
})

$('input[type=radio]').change(function() {
    let value = this.value;
    $('.active').removeClass('active')
    $(`.skill[data-skill-type="${value}"]`).addClass('active');
});