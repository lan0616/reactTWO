/*
 * @Author: mikey.liucuilan 
 * @Date: 2018-11-05 09:56:36 
 * @Last Modified by: mikey.liucuilan
 * @Last Modified time: 2018-11-05 10:31:27
 */

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
let Mock=new MockAdapter(axios);
Mock.onGet('/api/data').reply(200,{
    code:0,
    data:require('./data.js')['title']
});
