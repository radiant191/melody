$(document).ready(function () {
    var currentFloor = 2; // переменная где находится текущий этаж
    var floorPath = $(".home-img path") // каждый отдельный этаж в SVG
    var counterUp = $(".counter-up"); // кнопка увеличения этажа
    var counterDown = $(".counter-down") // кнопка уменьшения этажа
    var modal = $(".modal");
    var modalCloseButton = $(".modal-close-button");
    var viewFlatsButton = $(".view-flats")
    
    // функция при наведении мышки на этаж
    floorPath.on("mouseover", function () {
        floorPath.removeClass("current-Floor") // удаляем активный класс у этаэжей
        currentFloor = $(this).attr("data-floor")// получаем значение текущего этажа
        $(".counter").text(currentFloor); // записываем значение этажа счеткчик справа
    });

    floorPath.on("click", toggleModal);

    modalCloseButton.on("click", toggleModal );

    viewFlatsButton.on("click", toggleModal)
    counterUp.on("click", function () { //отслеживаем клик по кнопке вверх
        if (currentFloor < 18){ // проверяем значение этажа не долэжно быть больше 18
            currentFloor++; // 1 этаж +_
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}); // форматируем переменную из 1 в 01
            $(".counter").text(usCurrentFloor); // записываем значение этажа в счеткчик справа
            floorPath.removeClass("current-Floor") // удаляем актвиный класс у этажей
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-Floor')// подсвечиваем текущий этаж
        }
    });
    counterDown.on('click', function (){
        if (currentFloor > 2){
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("current-Floor")
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-Floor')
        }
    });
    function toggleModal(){ //функция откртыь закрыть окно
        modal.toggleClass("is-open");
    }
});
