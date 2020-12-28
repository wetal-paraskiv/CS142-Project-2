'use strict';
class Cs142TemplateProcessor {
    constructor(template) {
        this.template = template;
    }

    fillIn(data) {
        return this.template.replace(/{{(\w*)}}/g, (_m,key) => data.hasOwnProperty(key) ? data[key] : "")
    }
}

var templ_ate = 'My favorite month is {{month}} but not the day {{day}} or the year {{year}}';
var dateTemplate = new Cs142TemplateProcessor(templ_ate);

//Case: property exist in dictionary
var dictionary = { month: 'July', day: '1', year: '2016' };
var str = dateTemplate.fillIn(dictionary);

//Case: property doesn't exist in dictionary
var dictionary2 = { day: '1', year: '2016' };
var str2 = dateTemplate.fillIn(dictionary2);

const assert = require('assert');
assert.deepStrictEqual(str, 'My favorite month is July but not the day 1 or the year 2016');
assert.deepStrictEqual(str2, 'My favorite month is  but not the day 1 or the year 2016');