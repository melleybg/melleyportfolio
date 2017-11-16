$('#intro').addClass('hide')
$('#projects').addClass('hide')

$('#home').on('click', function(){
  $('#mainpage').removeClass('hide')
  $('#projects').addClass('hide')
  $('#intro').addClass('hide')
})
$('#about').on('click', function(){
  $('#intro').removeClass('hide')
  $('#projects').addClass('hide')
  $('#mainpage').addClass('hide')
})
$('#mywork').on('click', function(){
  $('#projects').removeClass('hide')
  $('#intro').addClass('hide')
  $('#mainpage').addClass('hide')
})
