const d = document,
    n = navigator;

export default function webcam(id) {
    const $video = d.getElementById(id);

    if (n.mediaDevices.getUserMedia) {
        n.mediaDevices
            .getUserMedia({ video: true, audio: false })
            .then((strem) => {
                console.log(strem);
                $video.srcObject = strem;
                $video.play();
            })
            .catch((err) => {
                $video.insertAdjacentHTML('beforebegin', `<p>Error: <mark>${err}</mark></p>`);
            });
    }
}