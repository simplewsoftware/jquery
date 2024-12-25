$(document).ready(


// $('#btn1').on('click', () => {
//     $('#imagen').hide('slow')
// }),

// $('#btn2').on('click', () => {
//     $('#imagen').show('slow')
// }),

// $('#btn3').on('click', () => {
//     $('#imagen').toggle('slow')
// }),

// $('#imagen').on('mouseenter', () => {
//     alert('saliste del hover en la imagen')
// }),

$('#btn1').on('click', () => {
    $('#imagen').fadeOut('slow')
}),

$('#btn2').on('click', () => {
    $('#imagen').fadeIn('slow')
}),

$('#btn3').on('click', () => {
    $('#imagen').fadeToggle('slow')
})






)