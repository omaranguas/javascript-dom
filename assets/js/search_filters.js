const d = document;

export default function searchFilters(input, selector) {
    d.addEventListener('keyup', (e) => {
        if (e.target.matches(input)) {
            /* console.log(e.target.value); */
            d.querySelectorAll(selector).forEach(selector =>
                (selector.textContent.toLowerCase().includes(e.target.value))
                    ? selector.classList.remove('filter')
                    : selector.classList.add('filter')
            );
        }
    });
}