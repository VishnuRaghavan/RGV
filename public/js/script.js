

//generate random animations 
const generateRandomAnim = () => {
    const animations = ['bounceOutUp','bounceOutLeft','bounceOutRight','bounceOutDown'];
    const random = Math.floor(Math.random() * animations.length);
    return animations[random];
}

//set up animations
const addAnimation = (el, path, animation) => {
    el.addClass(`animated ${animation}`);
    el.on('animationend', () => {
        location.href = path
    });
}

// handle home button 
$(document).ready(() => {

    const container = $('.container');

    $('.home').click(()=>{
        addAnimation(container,"/home",generateRandomAnim())
    });

    $('.works').click(() => {
        addAnimation(container,"/work",generateRandomAnim())
    });

    $('.contri').click(() => {
        addAnimation(container,"/contribution",generateRandomAnim())
    });

    $('.contact').click(() => {
        addAnimation(container,"/contact",generateRandomAnim())
    });

    $('.sub-container').on('click', '.card', function () {
        const url = $(this).children('p').attr('title')
        window.open(url, '_blank');
    });

    $('.back').click(() => {
        location.href = '/home';
    });


});