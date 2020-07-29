import {isUrlValid} from '../client/js/validateURL';
import 'babel-polyfill';
// Test if the method is defined
describe('to check if isUrlValid() is defined' , () => {
    test('True, isUrlValid() is defined', async () => expect(isUrlValid).toBeDefined() );
});

//testing isUrlValid fot a valid url
describe('isUrlValid returns true for valid URL' , () => {
    var url = "https://codeburst.io/an-introduction-to-service-workers-in-javascript-27d6376460c2";
    test(`True, the ${url} is valid`, async () => expect(isUrlValid(url)).toBe(true) );
});

//testing isUrlValid for an invalid url 
describe('isUrlValid returns false for invalid URL' , () => {
    var url = "dawdewqhttps://www.google.com";
    test(`False, the ${url} is invalid`, async () => expect(isUrlValid(url)).toBe(false) );
});