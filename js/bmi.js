
const nameEl = document.querySelector('#name');
const heightEl = document.querySelector('#height');
const weightEl = document.querySelector('#weight');
const bmibtn = document.querySelector('#bmi-btn');
const BmiEl = document.querySelector('#BMI');

const comments = [
    { 'bmi': 18.5, 'comment': '體重過輕' },
    { 'bmi': 24, 'comment': '健康體位' },
    { 'bmi': 27, 'comment': '過重' },
    { 'bmi': 30, 'comment': '輕度肥胖' },
    { 'bmi': 35, 'comment': '中度肥胖' },
    { 'bmi': 40, 'comment': '重度肥胖' },
];


console.log(nameEl, heightEl, weightEl);
bmibtn.addEventListener('click', () => {
    console.log(nameEl, heightEl, weightEl);
    let bmi = get_bmi(heightEl.value, weightEl.value);
    console.log(bmi);
    //alert(`${nameEl.value} bmi:${bmi}`);
    BmiEl.value = bmi;

    let bmicomments = '重度肥胖';

    for (let i = 0; i < comments.length; i++) {
        if (bmi <= comments[i]['bmi']) {
            bmicomments = comments[i]['comment'];
            break;
        };



    };
    document.querySelector('#result').innerHTML = `<h2>Bmi計算結果:${bmi}</h2><br><h2>${bmicomments}</h2>`;



});



function get_bmi(height, weight, point = 2) {
    const bmi = (weight / (height / 100) ** 2).toFixed(point);
    return bmi;
}