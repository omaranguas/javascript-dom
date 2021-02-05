const d = document;
let x = 0,
    y = 0;

export function shortcuts(e) {
    /* console.log(e.type);
    console.log(e);
    console.log(e.key);
    console.log(e.keyCode);
    console.log(e.ctrlKey);
    console.log(e.shiftKey);
    console.log(e.altKey); */
    if (e.key === 'a' && e.altKey) {
        alert('Alert');
    }

    if (e.key === 'c' && e.altKey) {
        confirm('Comfirm');
    }

    if (e.key === 'p' && e.altKey) {
        prompt('Prompt');
    }
}

export function moveBall(e, ball, stage) {
    const $ball = d.querySelector(ball),
        $stage = d.querySelector(stage),
        ballLimit = $ball.getBoundingClientRect(),
        stageLimit = $stage.getBoundingClientRect();

    /* console.log(e.keyCode);
    console.log(e.code);
    console.log(ballLimit, stageLimit); */

    switch (e.keyCode) {
        //Left
        case 37:
            if (ballLimit.left > stageLimit.left) {
                e.preventDefault();
                x--;
            }
            break;
        //Up
        case 38:
            if (ballLimit.top > stageLimit.top) {
                e.preventDefault();
                y--;
            }
            break;
        //Right
        case 39:
            if (ballLimit.right < stageLimit.right) {
                e.preventDefault();
                x++;
            }
            break;
        //Down
        case 40:
            if (ballLimit.bottom < stageLimit.bottom) {
                e.preventDefault();
                y++;
            }
            break;
        default:
            break;
    }

    $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
}