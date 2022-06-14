// Your code here
function createEmployeeRecord(arr){
    return {firstName: arr[0],familyName: arr[1], title: arr[2], payPerHour: arr[3],timeInEvents:[],timeOutEvents:[]}
}
function createEmployeeRecords(arr){
    const nArr = []
    arr.forEach(item => {
        nArr.push(createEmployeeRecord(item))
    });
    return nArr
}
function createTimeInEvent(obj,date){
    const dates = date.split(" ")
    dates[1].replace("0","")
    //const hour = dates[1].slice(0,2)
    //console.log(dates[1])
    //console.log(hour)
    obj.timeInEvents = [
        {
        type : "TimeIn",
        hour: parseInt(dates[1]),
        date: dates[0]
        }
    ]

    return obj

}
function createTimeOutEvent(obj,date){
    const dates = date.split(" ")
    dates[1].replace("0","")
    obj.timeOutEvents = [
        {
        type : "TimeOut",
        hour: parseInt(dates[1]),
        date: dates[0]
        }
    ]
    console.log(obj)
    return obj
}
function hoursWorkedOnDate(obj){
    console.log(obj.timeOutEvents[0].hour)
    return parseInt(obj.timeOutEvents[0].hour - obj.timeInEvents[0].hour)/100
}
function wagesEarnedOnDate(obj){
    return hoursWorkedOnDate(obj)* parseInt(obj.payPerHour)
}
function allWagesFor(obj){
    let count= 0
    obj.forEach(record=>{
        count += wagesEarnedOnDate(record)
    })
    console.log(count)
    return count
}
function calculatePayroll(obj){
    let count = 0
    obj.forEach(employee=>{
        count += allWagesFor(employee)    
    })
    return count
}