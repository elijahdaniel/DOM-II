/* 
    Events Used:
        1. mouseover
        2. mouseleave

*/

// hover for nav links
let anchors = document.getElementsByClassName('nav-link')
anchors[0].addEventListener('mouseover', () => { anchors[0].style.color= 'red'; });
anchors[1].addEventListener('mouseover', () => { anchors[1].style.color= 'green'; });
anchors[2].addEventListener('mouseover', () => { anchors[2].style.color= 'blue'; });
anchors[3].addEventListener('mouseover', () => { anchors[3].style.color= 'pink'; });

anchors[0].addEventListener('mouseleave', () => { anchors[0].style.color= ''; });
anchors[1].addEventListener('mouseleave', () => { anchors[1].style.color= ''; });
anchors[2].addEventListener('mouseleave', () => { anchors[2].style.color= ''; });
anchors[3].addEventListener('mouseleave', () => { anchors[3].style.color= ''; });