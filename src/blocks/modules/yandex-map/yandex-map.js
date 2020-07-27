function init () {
    var myMap = new ymaps.Map("map", {
        center: [55.75, 37.62],
        zoom: 13
    },
    {
        searchControlProvider: "yandex#search"
    });

    myPlacemark = new ymaps.Placemark( [55.77, 37.57], {
        // hintContent: 'Собственный значок метки',
        // balloonContent: 'Это красивая метка'
    }, {
        iconLayout: "default#image",
        iconImageHref: "img/mark.png",
        iconImageSize: [52, 65],
        iconImageOffset: [0, 0]
    }),

    myPlacemarkTwo = new ymaps.Placemark([55.74, 37.62], {
        // hintContent: 'Собственный значок метки с контентом',
        // balloonContent: 'А эта — новогодняя',
    }, {
        iconLayout: "default#image",
        iconImageHref: "img/mark.png",
        iconImageSize: [60, 75],
        iconImageOffset: [0, 0],
    }),

    myPlacemarkThree = new ymaps.Placemark([55.75, 37.65], {
        // hintContent: 'Собственный значок метки с контентом',
        // balloonContent: 'А эта — новогодняя',
    }, {
        iconLayout: "default#image",
        iconImageHref: "img/mark.png",
        iconImageSize: [60, 75],
        iconImageOffset: [0, 0],
    }),
    myPlacemarkFour = new ymaps.Placemark([55.77, 37.62], {
        // hintContent: 'Собственный значок метки с контентом',
        // balloonContent: 'А эта — новогодняя',
    }, {
        iconLayout: "default#image",
        iconImageHref: "img/mark.png",
        iconImageSize: [60, 75],
        iconImageOffset: [0, 0],
    });

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkTwo)
        .add(myPlacemarkThree)
        .add(myPlacemarkFour);

    myMap.behaviors.disable("scrollZoom");

}

// eslint-disable-next-line no-undef
ymaps.ready(init);