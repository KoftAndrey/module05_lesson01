'use strict';

const items = document.querySelectorAll('.item');
const itemsContent = document.querySelectorAll('.item .content');
const itemLists = document.querySelectorAll('.item ol');
const subtitles = document.querySelectorAll('h2');
const itemTwoListItem =
document.querySelector('.item_two .props__item:nth-child(4)');
const itemFourListItem =
document.querySelector('.item_four .props__item:nth-child(3)');
const itemTwoAppendix =
document.querySelectorAll('.item_six .props__item_two');
const spam = document.querySelector('.ads');

// Удаление спама
spam.remove();

// Восстановление порядка карточек
items[4].before(items[0]);

// Восстановление подзаголовков
itemLists[2].before(subtitles[4]);
itemLists[4].before(subtitles[5]);
itemLists[5].before(subtitles[2]);
subtitles[3].innerHTML =
'<h2 class="item__title">This и прототипы объектов</h2>';

// Восстановление списков
itemFourListItem.after(itemTwoListItem);
itemLists[2].append(...itemTwoAppendix);
itemsContent[3].append(itemLists[4]);
itemsContent[4].append(itemLists[3]);
