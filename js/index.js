/* 
    Events Used:
        1. mouseover
        2. mouseleave
        3. mousedown
        4. mouseup
        5. copy
        6. dblclick
        7. keydown
        8. contextmenu
        9. drag
        x. dragend
*/

// hover over nav links
const anchor = document.querySelectorAll('.nav-link');
anchor.forEach((anchorOn) => { anchorOn.addEventListener('mouseover', () => { anchorOn.style.color = 'orange'; })});
anchor.forEach((anchorOff) => { anchorOff.addEventListener('mouseleave', () => { anchorOff.style.color = ''; })}); 

// click and release fun bus header logo
const logoHead = document.querySelector('.logo-heading');
logoHead.addEventListener('mousedown', () => { logoHead.innerHTML = '♪┏(・o･)┛♪'; logoHead.style.color = 'orange'; });
logoHead.addEventListener('mouseup', () => { logoHead.innerHTML = 'Fun Bus'; logoHead.style.color = ""; })

// highlight and 'copy' and text wrapped in p tags
const stealing = () => { alert('Hey, no copying my content.') }

const para = document.querySelectorAll('p');
para.forEach((function(elem){ elem.addEventListener('copy', stealing) }));

// double click header photo (bus in the sand)
const headImage = document.querySelector('.intro img');
headImage.addEventListener('dblclick', () => { headImage.setAttribute('src', 'img/beach.png') })

// open console and press any key
document.addEventListener('keydown', () => { console.log(`Join the Fun Bus!`) });

// right click 'sign me up!' buttons on the bottom
const button = document.querySelectorAll('.btn');
button.forEach((function(elem) { elem.addEventListener('contextmenu', () => { elem.innerHTML = `Don't inspect me`; elem.style.color = 'orange'; elem.style.background = 'white'; }) }));

// drag image in 'pick your destination'
const destinationImg = document.querySelector('.content-destination img');
destinationImg.addEventListener('drag', () => { destinationImg.style.opacity = '.2' });

// drop image back onto it's normal spot
destinationImg.addEventListener('dragend', () => { destinationImg.style.opacity = '1' })