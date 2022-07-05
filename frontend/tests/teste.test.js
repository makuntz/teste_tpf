import axios, { AxiosRequestConfig } from "axios";
const expect  = require('chai').expect;
import * as db from '../src/database';
import 'mocha';
const assert = require('assert')

describe('00-clientes', function() {

    // before(async function() {
    //     await db.addCustomer({
    //         name: 'Mocha User',
    //         email: utils.mochaUserEmail
    //     })
    // });



    it('testes', async function() {
        // const options = {
        //     method: 'GET',
        //     url: `http://localhost:3000/dashboard`
        // }

        

        expect(data).not.to.be.undefined;

        const foundEmail = data.find(customer => customer.email == utils.mochaUserEmail);

        expect(foundEmail).not.to.be.undefined;
    });
});