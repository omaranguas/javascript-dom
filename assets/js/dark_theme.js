const d = document,
    ls = localStorage;

export default function darkTheme(btn, classDark) {
    const $themeBtn = d.querySelector(btn),
        $selectors = d.querySelectorAll('[data-dark]'),
        $stage = d.querySelector('.stage');

    //console.log($selectors);

    let moon = '🌙',
        sun = '☀️';

    const lightMode = () => {
        $selectors.forEach(el => el.classList.remove(classDark));
        $themeBtn.textContent = moon;
        $stage.classList.remove('stage-dark');
        ls.setItem('theme', 'light');
    }

    const darkMode = () => {
        $selectors.forEach(el => el.classList.add(classDark));
        $themeBtn.textContent = sun;
        $stage.classList.add('stage-dark');
        ls.setItem('theme', 'dark');
    }

    d.addEventListener('click', (e) => {
        if (e.target.matches(btn)) {
            //console.log($themeBtn.textContent);
            if ($themeBtn.textContent === moon) {
                darkMode();
            } else {
                lightMode();
            }
        }
    });

    d.addEventListener('DOMContentLoaded', (e) => {
        if (ls.getItem('theme') === null) ls.setItem('theme', 'light');

        if (ls.getItem('theme') === 'light') lightMode();

        if (ls.getItem('theme') === 'dark') darkMode();
    });
}