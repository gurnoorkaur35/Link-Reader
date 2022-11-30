const puppeteer = require('puppeteer');

async function scrapedesc(url){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('//*[@id="job-details"]/span');
    const txt = await el.getProperty('textContent');
    const rawText = await txt.jsonValue();

    console.log('rawTxt')

    browser.close();

}
scrapedesc("https://www.linkedin.com/jobs/search/?currentJobId=3378268468&keywords=software%20engineer&originalSubdomain=in");
    // const data = await page.evaluate(function(){
    //     const events = document.querySelectorAll('.job-desc');
    //     const array = [];

    //     for(i=0; i<events.length; i++){
    //         array.push({
    //             title: events[i].querySelectorAll('.dang-inner-html').innerText,
    //             description: events[i].querySelectorAll('.details').innerText,
    //         })
    //     }
        
    //     return array;
    // })

    // console.log(data);

