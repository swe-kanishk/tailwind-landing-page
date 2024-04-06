const navDialog = document.getElementById('nav-dialog');
function handleMenu(){
    navDialog.classList.toggle('hidden')
}

const initialTranslateLTR = -48*4;
const initialTranslateRTL = 36*4;

function setupIntersectionObserver(element, isLTR, speed){
    const intersectionCallback = (entries) => {
        const isIntersecting = entries[0].isIntersecting;
        if(isIntersecting){
            document.addEventListener('scroll', scrollHandler)
        }
        else {
            document.removeEventListener('scroll', scrollHandler)
        }
    }
    const intersectionObserver = new IntersectionObserver(intersectionCallback);
    intersectionObserver.observe(element);

    function scrollHandler() {
        const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;
        let totalTranslate = 0;
        if(isLTR){
            totalTranslate = translateX + initialTranslateLTR;
        }
        else {
            totalTranslate = -(translateX + initialTranslateRTL);
        }
        element.style.transform = `translateX(${totalTranslate}px)`;
    }
}
const line1 = document.getElementById("line-1");
const line2 = document.getElementById("line-2");
const line3 = document.getElementById("line-3");
const line4 = document.getElementById("line-4");

setupIntersectionObserver(line1, true, 0.15)
setupIntersectionObserver(line2, false, 0.15)
setupIntersectionObserver(line3, true, 0.15)
setupIntersectionObserver(line4, true, 0.30)


// dds 
const dtElements = document.querySelectorAll('dt');
dtElements.forEach((el)=>{
    el.addEventListener('click', ()=>{
        const ddId = el.getAttribute('aria-controls');
        const ddElem = document.getElementById(ddId);
        
        ddElem.classList.toggle('hidden');
        const ddArrowIcon = el.querySelectorAll('i').forEach((ddIcon)=>{
            ddIcon.classList.toggle('-rotate-180');
        });
    })
})