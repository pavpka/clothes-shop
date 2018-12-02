const request = require("request");
const cheerio = require("cheerio");
const fs = require('fs');
//const url = "https://shop.mango.com/ru/%D0%B6%D0%B5%D0%BD%D1%81%D0%BA%D0%B0%D1%8F/%D1%80%D1%83%D0%B1%D0%B0%D1%88%D0%BA%D0%B8_c78920337";
//const url = "https://ostin.com/ru/ru/catalog/jenskaya_odejda/jenskie_bluzki/";
//const url = "https://ru.aliexpress.com/category/202003912/blouses-shirts.html?site=rus&g=y&isrefine=y";
const url = "https://www.befree.ru/zhenskaja/odezhda/bluzki-i-rubashki";
const shirts = [];
const countShirts = 40;

request(url, (error, response, body) =>{
    if(!error){
        const $ = cheerio.load(body);
        // const selector = $('.main-contentContainer form div div div');
        // console.log(selector[7].children);
        //const selector = $('.o-search__main');
        //console.log(selector[0].children[9].children);
        // const selector = $('.pic');
        // console.log(selector[0].children[1].children[0]);
        const selectorImgAndName = $('.grid-item__img-wr');
        const selectorPrice = $('.price');
        for (i = 0; i < 15; i++){
            let shirt = {};
            shirt.name = selectorImgAndName[i].children[1].attribs.title;
            shirt.img = selectorImgAndName[i].children[1].attribs;
            shirt.price = selectorPrice[i].children[0].data;
            str = JSON.stringify(shirt);
            str = str.replace(/'/g, '"');
            str = str.replace("data-src", "data");
            console.log(str);
            shirt = JSON.parse(str);
            if(typeof shirt.img.data === 'undefined'){
                shirt.img = shirt.img.src;
            } else {
                shirt.img = shirt.img.data;
            }
            shirts.push(shirt);
        }
        // console.log(selectorImgAndName[6].children[1].attribs);
        // console.log(selectorImgAndName[6].children[1].attribs.title);
        // console.log(selectorPrice[6].children[0].data);
        console.log(shirts);
        fs.writeFile('shirts.json', JSON.stringify(shirts), (err) => {
            if (err){
                throw err;
            }
            console.log('The file has been saved!');
        });
    } else {
        console.log(error.message);
    }
});
