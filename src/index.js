import _ from 'loadsh';
import './style.css';
import Img from './20x20img.png';
import XmlData from './data.xml';
import CsvData from './data.csv';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  const myImage = new Image();

  myImage.src = Img;
  myImage.width = 20;

  console.log(myImage);

  element.appendChild(myImage);

  console.log(XmlData);
  console.log(CsvData);

  return element;
}

document.body.appendChild(component());
