'use strict';

// Блоки

const items = document.querySelector('.items');
const itemOne = document.querySelector('.item_one');
const itemTwo = document.querySelector('.item_two');
const itemThree = document.querySelector('.item_three');
const itemFour = document.querySelector('.item_four');
const itemFive = document.querySelector('.item_five');
const itemSix = document.querySelector('.item_six');
const spam = document.querySelector('.ads');

spam.remove();
items.prepend(itemOne);
itemThree.after(itemFour);


// Подзаголовки

const subtitles = document.querySelectorAll('h2');
const titleTwo = subtitles[4].cloneNode(true);
const titleFive = subtitles[5].cloneNode(true);
const titleSix = subtitles[1].cloneNode(true);

subtitles[1].replaceWith(titleTwo);
subtitles[4].replaceWith(titleFive);
subtitles[5].replaceWith(titleSix);

subtitles[2].innerHTML =
'<h2 class="item__title">This и прототипы объектов</h2>';


// Списки

const itemTwoListItem =
document.querySelector('.item_two .props__item:nth-child(4)');

const itemFourListItem =
document.querySelector('.item_four .props__item:nth-child(3)');

itemFourListItem.after(itemTwoListItem);


const itemTwoAppendix =
document.querySelectorAll('.item_six .props__item_two');

const itemTwoList = document.querySelector('.item_two .props__list');

itemTwoList.append(...itemTwoAppendix);


const itemThreeListFalse = document.querySelector('.item_three .props__list');
const itemThreeListTrue =
document.querySelector('.item_five .props__list').cloneNode(true);

const itemFiveListFalse = document.querySelector('.item_five .props__list');
const itemFiveListTrue =
document.querySelector('.item_three .props__list').cloneNode(true);

itemThreeListFalse.replaceWith(itemThreeListTrue);
itemFiveListFalse.replaceWith(itemFiveListTrue);
