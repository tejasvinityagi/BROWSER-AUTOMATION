const puppeteer = require('puppeteer');
let cPage;
console.log("before")
const browserOpen = puppeteer.launch({headless:false});
browserOpen
.then((browser)=>{
   //currently open tab
  let tabsArray = browser.pages();
  return tabsArray;

 }).then((browserPages)=>{
    cPage = browserPages[0];
    let gotoPromise = cPage.goto('https://www.google.com')
    return gotoPromise;
}).then(()=>{
   let wait =  cPage.waitForSelector("input[type='text']");
   return wait;
}).then(()=>{
    //earch on google page
    let keystyped = cPage.type("input[type='text']","leetcode")
    return keystyped;
}).then(()=>{
    let gotowebsite = cPage.keyboard.press('Enter');
    return gotowebsite;
}).then(()=>{
    let wait = cPage.waitForSelector("h3.LC20lb.MBeuO.DKV0Md",{visible: true})
    return wait;
})
.then(()=>{
    let gotoleetcode = cPage.click("h3.LC20lb.MBeuO.DKV0Md")
    return gotoleetcode;

}).then(()=>{
    let wait = cPage.waitForNavigation()
    return wait;
}).then(()=>{
    let gotosignin = cPage.click('https://leetcode.com/accounts/login')
    return gotosignin;
 })
console.log("after")
