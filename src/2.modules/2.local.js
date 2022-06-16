var log = {
    info: function(info){
        console.log("Info: "+ info)
    },
    warning: function(warning){
        console.log("Warning: "+ warning)
    },
    error: function(error){
        console.log("Error: "+ error)
    },
}

module.exports = log

module.exports.display = function(){
    console.log("Here is the display function, which ")
}