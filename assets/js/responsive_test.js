const d = document;

export default function responsiveTester(form) {
    const $form = d.getElementById(form);
    let tester;
    d.addEventListener('submit', (e) => {
        if (e.target === $form) {
            e.preventDefault();
            tester = window.open(
                $form.direction.value,
                'tester',
                `innerWidth=${$form.width.value}, innerHeight=${$form.height.value}`
            );
        }
    });

    d.addEventListener('click', (e) => {
        if (e.target === $form.close) {
            tester.close()
        }
    });
}