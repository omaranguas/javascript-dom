const d = document,
    w = window;

export default function scrollButton(scrollBtn) {
    const $scrollBtn = d.querySelector(scrollBtn);

    w.addEventListener('scroll', (e) => {
        //console.log(w.pageYOffset, d.documentElement.scrollTop);
        let scroll = w.pageYOffset || d.documentElement.scrollTop;
        
        if (scroll < 600) {
            $scrollBtn.classList.add('hidden');
        } else {
            $scrollBtn.classList.remove('hidden');
        }
    });

    d.addEventListener('click', (e) => {
        if (e.target.matches(scrollBtn)) {
            w.scrollTo({
                behavior: 'smooth',
                top: 0
            });
        }
    });
}