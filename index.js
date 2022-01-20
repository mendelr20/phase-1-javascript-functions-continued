function saturdayFun(activity = `roller-skate`){
   return `This Saturday, I want to ${activity}!`
}

function mondayWork(job = `go to the office`){
    return `This Monday, I will ${job}.`
}

const wrapAdjective = (function(sign){
    return function highlight1(string1) {
        return `You are ${sign}${string1}${sign}!`     
    } 
})
    