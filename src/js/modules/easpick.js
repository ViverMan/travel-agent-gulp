import { easepick, TimePlugin } from '@easepick/bundle';

function easePick () {

    const picker = new easepick.create({
        element: document.getElementById('datePicker'),
        css: [
        'https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css',
        'https://cdn.jsdelivr.net/npm/@easepick/time-plugin@1.2.1/dist/index.css',
        ],

        zIndex: 10,
        lang: "ru-RU",
        format: "HH:mm, DD/MM/YY",
        TimePlugin: {
            seconds: true,
        },
        plugins: [
            TimePlugin
        ],
    });  
}

export default easePick;
