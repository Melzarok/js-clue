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

const a = 1;
const b = 2;
const c = 3;
const getOne = () => 1

let list = [() => { }, function Name() { }, 100, 'text', getOne()]

// console.log(list)

const testArr = Array(5);

testArr[0] = 'Start';
testArr[1] = 'Job';
testArr[2] = 2;
testArr[testArr.length] = 30;
testArr[testArr.length] = 40;

testArr[null] = 'Test'
testArr["Test"] = 'test';
// до неї можна звертитсь через крапку а саме: console.log(testArr.(назва комірки до якої звертаємося)). 
// АЛЕ, ВИКОРИСТАННЯ КОМІРОК З НАЗВОНЮ НЕ РЕКОМЕНДУЄТЬСЯ.   

const big = [[[1], [2, 3, 4, 5], [3]], [[2]], [[3]]]

// console.log(big[0][1][2])


// function printFullName(name, surname, lastname) {
//     return `${name}, ${surname}, ${lastname}`
// }

// console.log(printFullName('Iva', 'Ivanov', 'Ivanovich'))


function printFullName([name, surname, lastname, ...arg]) {
    // console.log(arg)
    // return arg.toString()
    return `${name} ${surname} ${lastname} ${arg.length ? `(${arg.toString()})` : ''}`
}
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

// спосіб як можно проітерувати об'єкт

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

// for (let num of range) {
//     console.log(num)
// }

const iterator = range[Symbol.iterator]();

do {
    console.log(iterator.current);

    result = iterator.next();
} while (!result.done);
