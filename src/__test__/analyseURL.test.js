// importing other required js files
import { urlRequest } from '../client/js/analyseURL';
import 'babel-polyfill';

describe('to check if urlRequest() is defined' , () => {
    test('True, urlRequest() is defined', async () => expect(urlRequest).toBeDefined() );
});
