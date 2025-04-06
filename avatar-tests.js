//import assert from 'assert';
import DOMParser from 'react-native-html-parser';
import SvgAvatar from './assets/avatar_svg_handler.js';

const svgavatar = JSON.stringify(SvgAvatar());
const parser = new DOMParser.DOMParser();
const parsed = parser.parseFromString(svgavatar, 'text/html');

// check that each element is rendered in the html
function CheckElement(){
    console.log(parsed.getElementsById('head'));
}

CheckElement();