import './x.js'
import './y.less'
import img from './assets/1.jpeg'
const div = document.getElementById('app');

// div.innerHTML = `
//     <img src="${img}">
// `

const button = document.createElement('button')
button.innerText = '懒加载';
button.onclick = () => {
    const promise = import('./lazy');
    promise.then((module) => {
        const fn = module.default;
        fn();
    }, () => {
        console.log('加载错误')
    })
}

div.appendChild(button)
