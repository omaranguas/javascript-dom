const d = document;

export default function validateForm() {
    const $form = d.querySelector('.contact-form'),
        $inputs = d.querySelectorAll('.contact-form [required]');

    $inputs.forEach(input => {
        const $span = d.createElement('span');
        $span.id = input.name;
        $span.textContent = input.title;
        input.insertAdjacentElement('afterend', $span);
        $span.classList.add('contact-form-error', 'none');
    });

    d.addEventListener('keyup', (e) => {
        if (e.target.matches('.contact-form [required]')) {
            let $input = e.target,
                patter = $input.pattern || $input.dataset.pattern;

            if (patter && $input.value !== '') {
                let regex = new RegExp(patter);

                return (!regex.exec($input.value))
                    ? d.getElementById($input.name).classList.add('is-active')
                    : d.getElementById($input.name).classList.remove('is-active')
            }

            if (!patter) {
                return ($input.value === '')
                    ? d.getElementById($input.name).classList.add('is-active')
                    : d.getElementById($input.name).classList.remove('is-active')
            }
        }
    });

    d.addEventListener('submit', (e) => {
        /* e.preventDefault(); */
        alert('Datos enviados');

        const $loader = d.querySelector('.contact-form-loader'),
            $response = d.querySelector('.contact-form-response');

        $loader.classList.remove('none');

        setTimeout(() => {
            $loader.classList.add('none');
            $response.classList.remove('none');
            $form.reset();

            setTimeout(() => $response.classList.add('none'), 2000);
        }, 3000);
    });
}