export const getISTmsTime = (time = null) => {
    var timeZone = 'Asia/Kolkata';
    console.log(time)
    var ISToffSet = 330; //IST is 5:30; i.e. 60*5+30 = 330 in minutes 
    let offset = ISToffSet * 60 * 1000;
    var currentDate = time ? new Date(time) : new Date().toLocaleString('en-US', { timeZone: timeZone });
    var milisecond = time ? new Date(currentDate).getTime() - offset : new Date(currentDate).getTime() + offset;
    return milisecond
}