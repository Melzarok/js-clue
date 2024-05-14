// // console.log(String.fromCodePoint(128551))
// // const a = 'HelloWord'

// // const b = '~1-=';

// // console.log(b.codePointAt(1))
// // console.log(String.fromCodePoint(49))

// // console.log(`www.text.com/home\ncatalog`)
// // console.log(String.raw`www.text.com/home\catalog`)

// // console.log(a.concat('', b, '', '0'))

// // console.log(a.includes('lo'))

// // console.log(a.indexOf('lo'))

// // console.log(a.startsWith('lo', 3))

// // // пропускаэться 9-ый символ
// // console.log(a.endsWith('d', 9))

// // console.log(a.at(0))

// // ////////////////////////////////////////////////////////////////////////////////////

// // МАСИВ //

// // const a = 1;
// // const b = 2;
// // const c = 3;
// // const getOne = () => 1

// // let list = [() => { }, function Name() { }, 100, 'text', getOne()]

// // // console.log(list)

// // const testArr = Array(5);

// // testArr[0] = 'Start';
// // testArr[1] = 'Job';
// // testArr[2] = 2;
// // testArr[testArr.length] = 30;
// // testArr[testArr.length] = 40;

// // testArr[null] = 'Test'
// // testArr["Test"] = 'test';
// // до неї можна звертитсь через крапку а саме: console.log(testArr.(назва комірки до якої звертаємося)).
// // АЛЕ, ВИКОРИСТАННЯ КОМІРОК З НАЗВОНЮ НЕ РЕКОМЕНДУЄТЬСЯ.

// // const big = [[[1], [2, 3, 4, 5], [3]], [[2]], [[3]]]

// // console.log(big[0][1][2])

// // function printFullName(name, surname, lastname) {
// //     return `${name}, ${surname}, ${lastname}`
// // }

// // console.log(printFullName('Iva', 'Ivanov', 'Ivanovich'))

// // function printFullName([name, surname, lastname, ...arg]) {
// //     // console.log(arg)
// //     // return arg.toString()
// //     return `${name} ${surname} ${lastname} ${arg.length ? `(${arg.toString()})` : ''}`
// // }
// // Використання деструктурізації
// // console.log(printFullName(['Ivan', 'Ivanov', 'Ivanovich']))

// // function sumAllNum(...nums) {
// //     let sum = 0;

// //     for (const n of nums) {
// //         sum += n;
// //     }

// //     return [sum, nums.length];
// // }

// // const [sum, numLength] = sumAllNum(1, 2, 3)
// // console.log(sum, numLength)

// // const location = [[100, 190], [200, 100], [300, 100],];
// // const local = [1, 1, 1, 1, 1]

// // for (const test of local) {
// //     console.log(test)
// // }

// // ОБ'ЄЕКТ ........................................

// // спосіб як можно проітерувати об'єкт...................................

// let range = {
//     from: 1,
//     to: 5,

//     // () - скорчення функції

//     [Symbol.iterator]() {
//         this.current = this.from;

//         return this;

//         // return {
//         //     // властивість з функцією називається МЕТОД
//         //     // уюявити що це наче FOR і використовувати наче FOR

//         //     // в кінці треба повертати об'єкт, в якому кажется що треба зупинити ітерацію (done) і виведе значення (value)(не обов'язково)
//         //   next() {
//         //      return this.current <= this.to ? { done: false, value: this.current++ } : { done: true };
//         //   },
//         //     // приклад

//         // }
//     },

//     next() {
//         return this.current <= this.to ? { done: false, value: this.current++ } : { done: true };
//     }
// }

// for (let num of range) {
//     console.log(num)
// }

// // const iterator = range[Symbol.iterator]();

// // do {
// //     console.log(iterator.current);

// //     result = iterator.next();
// // } while (!result.done);

// // спосіб такий же але з масивом................................

// const arr = [1, 2, 3, 4, 5];

// const iterator = arr[Symbol.iterator]();

// let result;

// result = iterator.next();

// do {
//     console.log(result.value);

//     result = iterator.next();
// } while (!result.done);

// //..............................ПРИКЛАДИ ЯК МОЖНА ВИКОРИСТАТИ, ТА ЯК ПРАВИЛЬНО...................................

// // Завдання 9: Використання Symbol.iterator

// // Об'єкт "myObject" представляє значення   from: 1, to: 7, які можна перебрати
// let rangeObject = {
//     // Використовуємо Symbol.iterator для створення ітератора всередині об'єкта "myObject"
//     // this.current присвоюємо this.from
//     // Повертаємо this
//     // Створюємо метод "next" який визначає поведінку при кожній ітерації
//     // Використовуйте if
//     // Якщо current менше to, повертаємо об'єкт з властивістю "value",що містить поточне значення ,
//     // та не забуваємо збільшити індекс за допомогою інкремент, і "done" - false, означаючи, що ітерація ще не закінчена
//     // Якщо індекс вийшов за межі масиву ключів, повертаємо об'єкт з властивістю "done" - true, означаючи, що ітерація закінчена
//     from: 1,
//     to: 7,
//     [Symbol.iterator]() {
//         this.current = this.from
//         return this
//     },

//     next() {
//         if (this.current <= this.to) {
//             return { done: false, value: this.current++ }
//         } else {
//             return { done: true };
//         }
//     }
// }

// // Функція "useSymbolIterator" використовує ітератор для отримання значень об'єкта
// function useSymbolIterator(obj) {
//     // Створюємо масив для зберігання значень
//     // Проходимо крізь елементи об'єкта obj, використовуючи цикл "for...of"
//     // Додаємо кожне значення до масиву "result"
//     // Повертаємо масив зі значеннями
//     let result = [];

//     for (let num of obj) {
//         result = [...result, num]
//     }
//     return result;
// }

// console.log("Завдання 9 ====================================");
// console.log(useSymbolIterator(rangeObject)); //Виведе [ 1, 2, 3, 4, 5, 6 ]

// // Завдання 10: Використання Symbol.iterator

// // Оголошення об'єкта "myObject" з властивістю "category"
// let myObject = {
//     //Cтворюємо масив category
//     category: [
//         { id: 1, name: "apple" }, // Об'єкт категорії з ідентифікатором 1 та назвою "apple"
//         { id: 2, name: "banana" }, // Об'єкт категорії з ідентифікатором 2 та назвою "banana"
//         { id: 3, name: "orange" }, // Об'єкт категорії з ідентифікатором 3 та назвою "orange"
//         { id: 4, name: "grape" }, // Об'єкт категорії з ідентифікатором 4 та назвою "grape"
//         { id: 5, name: "mango" }, // Об'єкт категорії з ідентифікатором 5 та назвою "mango"
//     ],
//     //Створюємо властивість currentIndex зі значенням 0, яка буде нашим лічильником в ітерації

//     // Оголошення методу Symbol.iterator для об'єкта "myObject"
//     //Повертаємо this

//     // Оголошення методу "next" для ітерації
//     // Створюємо логічний оператор який буде перевіряти чи властивість об'єкту currentIndex менша ніж довжина масиву category
//     //Створюємо змінну value якій присвоємо властивість name елемента масиву category з індексом currentIndex
//     // Збільшимо currentIndex на одиницю
//     // Повертаємо об'єкт з властивістю value значенням якої буде value,та прапорцем done: false
//     //Якщо властивість об'єкту currentIndex більше або дорівнює довжині масиву category повертаємо об'єкт з прапорцем done: true, коли ітерація закінчена
//     currentIndex: 0,

//     [Symbol.iterator]() {
//         this.current = this.from
//         return this
//     },

//     next() {
//         if (this.currentIndex < this.category.length) {
//             let value = this.category[this.currentIndex].name
//             this.currentIndex++
//             return { value, done: false }
//         } else {
//             return { done: true }
//         }
//     }

// };

// console.log("Завдання 10 ====================================");
// console.log(useSymbolIterator(myObject)); //Виведе [ 'apple', 'banana', 'orange', 'grape', 'mango' ]

// ..................ВБУДОВАНІ МОЖЛИВОСТІ ДЛЯ МАСИВІВ.............................

// console.log(Array.from('Hello word'))
// console.log(Array.from({
//     0: 'Hello', 1: 'word', 2: '!!!', length: 3
// }, (elem, index) => {
//     console.log(elem, index)

//     return elem
// }))

const obj = {
  0: "Hello",
  1: "word",
  2: "!!!",
  length: 3,
  prefix: "():",
};

const arr = Array.from(
  obj,
  function (elem, index) {
    return `${this.prefix}${elem}`;
  },
  obj
);

// console.log(arr);

// console.log(Array.isArray(arr));

let arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr2 = [4, 4.1, 4.3, 4.7, 5, 5, 5, 6];

// console.log(Array.of(...arr1, ...arr2));

// console.log(arr1.at(1)); //дозволяє знаходити значеня за індексом який вкажемо, тобто якщо вкажему 0 то виведе перше знач.

// console.log(arr1.push(10, 20, 30, 900)); //console.log(arr1.push показує скільки елементів всього тепер в масиві
// // console.log(-(arr1.length - arr1.push(10, 20, 30, 40))); // показує скільки було додао елементів

// console.log(arr1);

// console.log(arr1.pop());

// console.log(arr1);

// console.log(arr1.shift());

// console.log(arr1);

// console.log(arr1.unshift(0, 1));

// console.log(arr1);

// console.log(arr2.includes(5)); //"пошук" по масиву

//........................

// console.log(arr2.indexOf(5)); //якщо передане число або елемент не знайдний, виведе -1, якщо знайдений, виведе його положення

// console.log(arr2.lastIndexOf(5)); //якщо значення повторюєтьс, виводе положення останього

//........................

// const arr3 = arr1.concat(...arr2); // об'єднання масивів в один

// console.log(arr3);

// console.log(arr1);

// arr1.copyWithin(2, 6, 9);

// console.log(arr1);

// arr1.fill("2", 5, 8);

// console.log(arr1);

//................................

// const filteredArr = arr1.filter((value, index, array) => value % 2 === 0);

// // console.log(filteredArr);

//.....................................
// {
//   //   const sortFn = (elem1, elem2) => elem1 - elem2;
//   //   const sortedArr = [1, 10, 2, 20, 3, 30, 4, 40].sort(sortFn);
//   //   console.log(sortedArr);
// }

// const sortFn2 = (elem1, elem2) => {
//   //   let result = elem1 - elem2;

//   //   if (elem1 % 2 === 0) {
//   //     result += 10;
//   //   }

//   //   //   return elem1 < elem2 ? 1 : -1;
//   //   return result;

//   if (elem1 % 2 === elem2 % 2) {
//     return 0;
//   } else if (elem1 % 2 !== 0 && elem2 % 2 === 0) {
//     return 1;
//   } else {
//     return -1;
//   }
// };

// const sortedArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].sort(
//   sortFn2
// );

// console.log(sortedArr2);

// console.log(["Atabic", "Info", "Bio", "City"].sort());

//..........................

// const arr4 = [-1, 4, 4.1, 4.3, 4.7, 5, 5, 5, 6];

// console.log(arr4.every((elem, index, array) => elem >= 0)); // всі елементи повинні підходити під умову, тоді буде true

// console.log(arr4.some((elem, index, array) => elem >= 0)); //якщо хоча б один підходе а всі останні ні поверне true

//................................. Функ. перевіряє, чи масив містить заданий елемент і скільки таких елементів за допомогою методу includes

//arr - Вхідний масив, який буде перевірятись.
//element - Елемент, наявність якого перевіряється.
//Повертає: Результат перевірки.
// function customIncludes(arr, element) {
//   // Перевіряємо, чи вхідний параметр є масивом
//   // Використовуємо метод includes для перевірки наявності елемента в масиві
//   // За допомогою методу filter перевіряємо скільки разів в масиві зустрічається елемент та виводимо число в консоль
//   //Повертаємо результат

//   let includesElemet = arr.includes(element);

//   if (includesElemet) {
//     let count = arr.filter((item) => item === element).length;
//     console.log(count);
//   }
//   return includesElemet;
// }

// console.log("Завдання: 17 ==============================");
// console.log(customIncludes(["apple", "banana", "orange", "apple"], "banana"));
// Виведе
// 1
// true
