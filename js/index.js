/* 
    Events Used:
        1. mouseover
        2. mouseleave
        3. mousedown
        4. mouseup
        5. dblclick
*/

// hover over nav links
const anchor = document.querySelectorAll('.nav-link');
anchor.forEach((anchorOn) => { anchorOn.addEventListener('mouseover', () => { anchorOn.style.color = 'blue' })});
anchor.forEach((anchorOff) => { anchorOff.addEventListener('mouseleave', () => { anchorOff.style.color = ''})}); 

// click and release fun bus header logo
const logoHead = document.querySelector('.logo-heading');
logoHead.addEventListener('mousedown', () => { logoHead.innerHTML = "♪┏(・o･)┛♪" });
logoHead.addEventListener('mouseup', () => { logoHead.innerHTML = "Fun Bus"})

// double click any of the text wrapped in p tags
const theyStealing = () => { alert('Hey, no copying my content.') }

const para = document.querySelectorAll('p');
para.forEach((function(elem){ elem.addEventListener('dblclick', theyStealing) }));

