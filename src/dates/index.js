// import moment here; use this package in each function

const today = () => {
  // write code for dates.today
  let today2 = new Date();
  let date = today2.getFullYear()+'-'(today.getMonth()+1)+'-'+today.getDate();
}

const calendar = () => {
  // write code for dates.calendar
let c = new Date();
c.getFullYear();
c.getMonth();
c.getDate();
c.getHours();
c.getMinutes();
c.getSeconds();
d.getMilliseconds()	
d.getTime();	
d.getDay();  
d.Date.now();	
d.setDate()	
d.setFullYear()	
d.setHours()	
d.setMilliseconds()
d.setMinutes()	
d.setMonth()	
d.setSeconds()	
d.setTime()	

}

const currentTime = () => {
  // write code for dates.currentTime
let today3 = new Date();
let time = today3.getHours() + ':' + today3.getMinutes() + ':' + today3.getSeconds();
}

module.exports = {
  today,
  calendar,
  currentTime
}