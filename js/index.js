// 1ST - MOVEMENT ANIMATION
    const card = document.querySelector('.card');
    const container = document.querySelector('.container');

// 2ND - MOVING ANIMATION EVENT
container.addEventListener('mousemove', (event) => {
    let xAxis = (window.innerWidth / 2 - event.pageX) / 20; // rotating the element into x axis
        let yAxis = (window.innerWidth / 2 - event.pageY) / 20; // rotating the element into x axis
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

// 3RD - REMOVE THE  ANIMATION
    container.addEventListener('mouseleave', event => {
    card.style.transform = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

// 4TH - ADDING ANIMATION IN
    container.addEventListener('mouseenter', event => {
    card.style.transform = "none";
// POP-OUT ANIMATION
    photo.style.transform = "translateZ(50px)";
    title.style.transform = "translateZ(50px)";
    info.style.transform = "translateZ(50px)";
    social.style.transform = "translateZ(50px)";
    button.style.transform = "translateZ(50px)";
});

// 5TH - All HTML ITEM
    const photo = document.querySelector('.photo img');
    const title = document.querySelector('.title');
    const info = document.querySelector('.info h4');
    const social = document.querySelector('.social');
    const button = document.querySelector('.profile');

    