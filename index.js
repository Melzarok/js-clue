// console.log(String.fromCodePoint(128551))
// const a = 'HelloWord'

// const b = '~1-=';

// console.log(b.codePointAt(1))
// console.log(String.fromCodePoint(49))

// console.log(`www.text.com/home\ncatalog`)
// console.log(String.raw`www.text.com/home\catalog`)

// console.log(a.concat('', b, '', '0'))

// console.log(a.includes('lo'))

// console.log(a.indexOf('lo'))

// console.log(a.startsWith('lo', 3))

// // пропускаэться 9-ый символ
// console.log(a.endsWith('d', 9))

// console.log(a.at(0))


// ////////////////////////////////////////////////////////////////////////////////////

// МАСИВ //

// const a = 1;
// const b = 2;
// const c = 3;
// const getOne = () => 1

// let list = [() => { }, function Name() { }, 100, 'text', getOne()]

// // console.log(list)

// const testArr = Array(5);

// testArr[0] = 'Start';
// testArr[1] = 'Job';
// testArr[2] = 2;
// testArr[testArr.length] = 30;
// testArr[testArr.length] = 40;

// testArr[null] = 'Test'
// testArr["Test"] = 'test';
// до неї можна звертитсь через крапку а саме: console.log(testArr.(назва комірки до якої звертаємося)). 
// АЛЕ, ВИКОРИСТАННЯ КОМІРОК З НАЗВОНЮ НЕ РЕКОМЕНДУЄТЬСЯ.   

// const big = [[[1], [2, 3, 4, 5], [3]], [[2]], [[3]]]

// console.log(big[0][1][2])


// function printFullName(name, surname, lastname) {
//     return `${name}, ${surname}, ${lastname}`
// }

// console.log(printFullName('Iva', 'Ivanov', 'Ivanovich'))


// function printFullName([name, surname, lastname, ...arg]) {
//     // console.log(arg)
//     // return arg.toString()
//     return `${name} ${surname} ${lastname} ${arg.length ? `(${arg.toString()})` : ''}`
// }
// Використання деструктурізації
// console.log(printFullName(['Ivan', 'Ivanov', 'Ivanovich']))

// function sumAllNum(...nums) {
//     let sum = 0;

//     for (const n of nums) {
//         sum += n;
//     }

//     return [sum, nums.length];
// }

// const [sum, numLength] = sumAllNum(1, 2, 3)
// console.log(sum, numLength)

// const location = [[100, 190], [200, 100], [300, 100],];
// const local = [1, 1, 1, 1, 1]

// for (const test of local) {
//     console.log(test)
// }


// ОБ'ЄЕКТ ........................................

// спосіб як можно проітерувати об'єкт...................................

let range = {
    from: 1,
    to: 5,

    // () - скорчення функції

    [Symbol.iterator]() {
        this.current = this.from;

        return this;

        // return {
        //     // властивість з функцією називається МЕТОД
        //     // уюявити що це наче FOR і використовувати наче FOR

        //     // в кінці треба повертати об'єкт, в якому кажется що треба зупинити ітерацію (done) і виведе значення (value)(не обов'язково)
        //   next() {
        //      return this.current <= this.to ? { done: false, value: this.current++ } : { done: true };
        //   },
        //     // приклад

        // }
    },

    next() {
        return this.current <= this.to ? { done: false, value: this.current++ } : { done: true };
    }
}

for (let num of range) {
    console.log(num)
}

// const iterator = range[Symbol.iterator]();

// do {
//     console.log(iterator.current);

//     result = iterator.next();
// } while (!result.done);

// спосіб такий же але з масивом................................

const arr = [1, 2, 3, 4, 5];

const iterator = arr[Symbol.iterator]();

let result;

result = iterator.next();

do {
    console.log(result.value);

    result = iterator.next();
} while (!result.done);


//..............................ПРИКЛАДИ ЯК МОЖНА ВИКОРИСТАТИ, ТА ЯК ПРАВИЛЬНО...................................

// Завдання 9: Використання Symbol.iterator

// Об'єкт "myObject" представляє значення   from: 1, to: 7, які можна перебрати
let rangeObject = {
    // Використовуємо Symbol.iterator для створення ітератора всередині об'єкта "myObject"
    // this.current присвоюємо this.from
    // Повертаємо this
    // Створюємо метод "next" який визначає поведінку при кожній ітерації
    // Використовуйте if
    // Якщо current менше to, повертаємо об'єкт з властивістю "value",що містить поточне значення ,
    // та не забуваємо збільшити індекс за допомогою інкремент, і "done" - false, означаючи, що ітерація ще не закінчена
    // Якщо індекс вийшов за межі масиву ключів, повертаємо об'єкт з властивістю "done" - true, означаючи, що ітерація закінчена
    from: 1,
    to: 7,
    [Symbol.iterator]() {
        this.current = this.from
        return this
    },

    next() {
        if (this.current <= this.to) {
            return { done: false, value: this.current++ }
        } else {
            return { done: true };
        }
    }
}

// Функція "useSymbolIterator" використовує ітератор для отримання значень об'єкта
function useSymbolIterator(obj) {
    // Створюємо масив для зберігання значень
    // Проходимо крізь елементи об'єкта obj, використовуючи цикл "for...of"
    // Додаємо кожне значення до масиву "result"
    // Повертаємо масив зі значеннями
    let result = [];

    for (let num of obj) {
        result = [...result, num]
    }
    return result;
}

console.log("Завдання 9 ====================================");
console.log(useSymbolIterator(rangeObject)); //Виведе [ 1, 2, 3, 4, 5, 6 ]

// Завдання 10: Використання Symbol.iterator

// Оголошення об'єкта "myObject" з властивістю "category"
let myObject = {
    //Cтворюємо масив category
    category: [
        { id: 1, name: "apple" }, // Об'єкт категорії з ідентифікатором 1 та назвою "apple"
        { id: 2, name: "banana" }, // Об'єкт категорії з ідентифікатором 2 та назвою "banana"
        { id: 3, name: "orange" }, // Об'єкт категорії з ідентифікатором 3 та назвою "orange"
        { id: 4, name: "grape" }, // Об'єкт категорії з ідентифікатором 4 та назвою "grape"
        { id: 5, name: "mango" }, // Об'єкт категорії з ідентифікатором 5 та назвою "mango"
    ],
    //Створюємо властивість currentIndex зі значенням 0, яка буде нашим лічильником в ітерації

    // Оголошення методу Symbol.iterator для об'єкта "myObject"
    //Повертаємо this

    // Оголошення методу "next" для ітерації
    // Створюємо логічний оператор який буде перевіряти чи властивість об'єкту currentIndex менша ніж довжина масиву category
    //Створюємо змінну value якій присвоємо властивість name елемента масиву category з індексом currentIndex
    // Збільшимо currentIndex на одиницю
    // Повертаємо об'єкт з властивістю value значенням якої буде value,та прапорцем done: false
    //Якщо властивість об'єкту currentIndex більше або дорівнює довжині масиву category повертаємо об'єкт з прапорцем done: true, коли ітерація закінчена
    currentIndex: 0,

    [Symbol.iterator]() {
        this.current = this.from
        return this
    },

    next() {
        if (this.currentIndex < this.category.length) {
            let value = this.category[this.currentIndex].name
            this.currentIndex++
            return { value, done: false }
        } else {
            return { done: true }
        }
    }


};

console.log("Завдання 10 ====================================");
console.log(useSymbolIterator(myObject)); //Виведе [ 'apple', 'banana', 'orange', 'grape', 'mango' ]
