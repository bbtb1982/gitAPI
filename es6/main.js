import Point from './Point.js';
import lodash from 'lodash';

var users = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
];

var first = _.find(users, 'active');

var body = document.querySelector('body');
body.textContent = 'Good point: ' + first.age;
