/* 
    Events Used:
        1. mouseover
        2. mouseleave
        3. mousedown
        4. mouseup
        5. copy
        6. dblclick
*/

// hover over nav links
const anchor = document.querySelectorAll('.nav-link');
anchor.forEach((anchorOn) => { anchorOn.addEventListener('mouseover', () => { anchorOn.style.color = 'blue'; })});
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