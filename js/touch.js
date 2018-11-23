/*gen notes-> possible to refactor*/
//global variables to manipulate the calendar, (touch)menu, and menu's button
const cal = document.getElementById('calendar');
const menu = document.querySelector('.touchmenu');
const menuBtn = document.querySelector('button');

//listen when user touches the calendar
cal.addEventListener('touchstart', showMenu);
//function to make menu visible and make background less dominant(UI purposes) 
function showMenu(){
    console.log('touched...');
    cal.style.opacity = "0.15";
    menu.style.display = 'block';
}

//listen when menu button is clicked
menuBtn.addEventListener('click', confirmTime);
//function to take in user values and mark selected times true
function confirmTime(){
    //variables used to capture user selected values
    const sD = document.getElementById('startDay').value;
    const sT = document.getElementById('startTime').value;
    const sap = document.getElementById('startampm').value;
    const eD = document.getElementById('endDay').value;
    const eT = document.getElementById('endTime').value;
    const eap = document.getElementById('endampm').value;

    //UI purposes, have user confirm their selection
    let con = confirm('Are you sure you want to confirm?');
    
    if(con){//UI purposes, remove time menu and bring background back to original
        menu.style.display = "none";
        cal.style.opacity = "1";

        //capture user selected start and end day/time/shift
        let start = `${sD}${sT}${sap}`;
        let end = `${eD}${eT}${eap}`;

        //testing purposes to retrieve the user selected start and end times
        console.log(`start: ${start}`);
        console.log(`end: ${end}`);

        //days is each day in calender(mon, tue, wed, etc...)
        let days = cal.children;
        //starter used as additional condition in loop to continue marking true
        let starter = false;
        //stopper used as additonal condition in loop to stop checking true
        let stopper = false
        //first for loop to create collection for each day, 2nd to loop through each collection
        for(let i = 0; i < days.length; i++){
            for(let j = 0; j < days[i].getElementsByTagName('input').length; j++){
                //checks if id matches start, if so starter true
                if (start === days[i].getElementsByTagName('input')[j].getAttribute('id')){
                    days[i].getElementsByTagName('input')[j].checked = true;
                    starter = true;
                }
                //once starter is found and check next true until end is found
                if(starter == true && stopper == false && days[i].getElementsByTagName('input')[j].getAttribute('id') != end){
                    days[i].getElementsByTagName('input')[j].checked = true;
                }
                //once end is found update stopper conditional
                if(days[i].getElementsByTagName('input')[j].getAttribute('id') === end){
                    stopper = true;
                }
            }
        }
    }
}