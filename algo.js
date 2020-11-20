'use strict'

const numberGroup = [435, 5454, 23, 8, 765, 5346, 1646, 23, 60];
console.log('A vizsgált tömb:', numberGroup)


// TÖMB ELEMEINEK MINIMUMA

function minimumCalc(arr) {
    let minimum = arr[0];
    for (let i = 1; i < arr.length; i += 1) {
        if (arr[i] < minimum) {
            minimum = arr[i];
        }
    }
    return minimum;
}
console.log('1. A minimum érték', minimumCalc(numberGroup));


// TÖMB ELEMEINEK MAXIMUMA

function maximumCalc(arr) {
    let maximum = arr[0];
    for (let i = 1; i < arr.length; i += 1) {
        if (arr[i] > maximum) {
            maximum = arr[i];
        }
    }
    return maximum;
}
console.log('2. A maximum érték:', maximumCalc(numberGroup));


// TÖMB ELEMEINEK ÖSSZEGE, MAJD ÁTLAGA

function sumCalc(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i += 1) {
        sum += arr[i];
    }
    return sum;
}

function averageCalc(arr) {
    return sumCalc(arr) / arr.length;
}

console.log('3. Számok összege:', sumCalc(numberGroup), '  4. Számok átlaga:', averageCalc(numberGroup));


// PÁROS ELEMEK SZÁMA

function evensCount(arr) {
    let evensCount = 0;
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] % 2 === 0) {
            evensCount += 1;
        }
    }
    return evensCount;
}

console.log('5. Páros elemek száma:', evensCount(numberGroup));


// LEGKISEBB VAGY LEGNAGYOBB ELEM BUBBLESORT RENDEZÉSSEL

function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i += 1) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped)
    return arr;
}

function getNthMinElement(arr, nth) {
    const sortArr = bubbleSort(arr);
    if (nth > arr.length) {
        return arr[arr.length - 1]
    }
    return sortArr[nth - 1];
}

console.log('6. Tömb N.-dik, most 3. legkisebb eleme:', getNthMinElement(numberGroup, 3));

function getNthMaxElement(arr, nth) {
    const sortArr = bubbleSort(arr);
    if (nth > arr.length) {
        return arr[arr[0]]
    }
    return sortArr[arr.length - nth];
}

console.log('7. Tömb N.-dik, most 2. legnagyobb eleme:', getNthMaxElement(numberGroup, 2));


// TÖMB TARTALMAZZA-E AZ ELEMET? LÍNEÁRIS KERESÉSSEL

function linearSearch(arr, searchNumber) {
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] === searchNumber) {
            return 'Igen';
        }
    }
    return 'Nem';
}

console.log('8. Igaz, hogy tartalmazza a 23-at? ', linearSearch(numberGroup, 23));


// TÖMB TARTALMAZZA-E AZ ELEMET? LOGARITMIKUS KERESÉSSEL

function binarySearch(arr, searchNumber) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === searchNumber) {
            return 'Igen';
        }
        else if (arr[mid] < searchNumber)
            start = mid + 1;
        else
            end = mid - 1;
    }
    return 'Nem';
}

console.log('9. Igaz, hogy tartalmazza a 23-ast? ', binarySearch(numberGroup, 23));


// ADOTT ELEM MEGSZÁMLÁLÁSA

function countElement(arr, searchNum) {
    let counter = 0;
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] === searchNum) {
            counter += 1;
        }
    }
    return counter;
}

console.log('10. Hány alkalommal szerepel a 23-as szám?', countElement(numberGroup, 23));


// BUBBLESORT RENDEZÉS LEBEGŐPONTOS ELEMEKET TARTALMAZÓ TÖMBBEN

const numberGroup2 = [1.55, 23.584, 7.6985, 596.510, 0.5522];
console.log('Új tömb:', numberGroup2);

function newNumbersSort(arr) {
    const sortArray = bubbleSort(arr);
    return sortArray;
}

console.log('11. Az új tömb tömb elemei növekvő sorrendben:', newNumbersSort(numberGroup2));

const newArray = [0.58, true, 689, 'Porsche', 2500000, 0, false, 'Ferrari', 5976.52, 'Lamborghini'];
console.log('Új tömb:', newArray);

function bubbleSort2(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i += 1) {
            if (arr[i] < arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped)
    return arr;
}


// CSAK SZÁMOK SORBARENDEZÉSE VEGYES TÍPÚSÚ, AZONOS ELEMSZÁMÚ TÖMBÖKBEN

function arraySort(arr) {
    let onlyNumbers = [];
    let notNumbers = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (typeof arr[i] === 'number') {
            onlyNumbers.push(arr[i]);
        } else {
            notNumbers.push(arr[i]);
        }
    }
    let newSortedArrey = bubbleSort2(onlyNumbers);
    return newSortedArrey.concat(notNumbers);
}

console.log('12. A tömb szám elemei csökkenő, a többi rendezetlen sorrendben', arraySort(newArray));


// ÚJ ELEM BESZÚRÁSA EGY RENDEZETT TÖMBBE

const numberGroup3 = [43, 545, 2, 80, 7650, 5346, 164, 23];
console.log('Eredeti tömb, a beszúrnni kért szám a "777".', numberGroup3);

function sortAndAddNewNumber(arr, addNum) {
    arr.push(addNum);
    bubbleSort(arr);
    return (arr);
}

console.log('13. A tömb elemei növekvő sorrendben a tetszőleges szám beszúrása után:', sortAndAddNewNumber((numberGroup3), 777));


// STRINGEKET ÉS SZÁMOKAT TARTALMAZÓ TÖMBELEMEK KIÍRÁSA FELVÁLTVA

const numsAndStrs = [1, 987, 'Pécs', 'Szeged', 1001, 'Győr', 666, 8052, 'Miskolc', 'Debrecen'];
console.log('Új tömb:', (numsAndStrs));

function stringsAfterNumbers(arr) {
    let numbers = [];
    let strings = [];
    let newArray = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (typeof arr[i] === 'number') {
            numbers.push(arr[i]);
        } else {
            strings.push(arr[i]);
        }
    }
    for (let i = 0; i < numbers.length; i += 1) {
        newArray.push(numbers[i], strings[i]);
    }
    return newArray;
}

console.log('14. Az iménti tömb sorba rendezve:', stringsAfterNumbers((numsAndStrs)));


// PÁROS ÉS PÁRATLAN SZÁMOK KIVÁLOGATÁSA KÜLÖN TÖMBÖKBE

function pairsAndOdds(arr) {
    let pairs = [];
    let odds = [];
    let twoInOne = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] % 2 === 0) {
            pairs.push(arr[i]);
        } else {
            odds.push(arr[i]);
        }
    }
    return twoInOne.concat([pairs], [odds]);
}

console.log('15. Páros és páratlan számok tömbbjei:', pairsAndOdds(numberGroup));


// KÉT TÖMB UNIÓJA, METSZETE, KÜLÖNBSÉGE, DESCARTES SZORZATA

console.log('Első tömb:', (numberGroup), 'Második tömb:', (numberGroup3));

function union(arr1, arr2) {
    let uni = [];
    return uni.concat(arr1, arr2);
}

console.log('Uniójuk:', union((numberGroup), (numberGroup3)));

function intersect(arr1, arr2) {
    let int = [];
    for (let i = 0; i < arr1.length; i += 1) {
        if (arr1[i] === arr2[i]) {
            int.push(arr1[i]);
        }
    }
    return int;
}

console.log('Metszetük:', intersect((numberGroup), (numberGroup3)));

function difference(arr1, arr2) {
    let common = [];
    let difference = [];
    for (let i = 0; i < arr1.length; i += 1) {
        if (arr1[i] !== arr2[i]) {
            common.push(arr1[i], arr2[i]);
        } else {
            difference.push(arr1[i], arr2[i]);
        }
    }
    return common;
}

console.log('Különbségük:', difference((numberGroup), (numberGroup3)));

function descartes(arr1, arr2) {
    let newArr = 0;
    for (let i = 0; i < arr2.length; i += 1) {
        newArr = arr1[i] * arr2[i];
    }
    return newArr;
}

console.log('Descartes szorzatuk:', descartes((numberGroup), (numberGroup3)));
