function redirect(url){
    window.location.replace(url)
}

function govariable(page,variable,valor,id,idcorrect) {
    document.getElementById(id).style.backgroundColor = 'red'
    document.getElementById(id).style.transform = 'scale(1)'
    document.getElementById(id).style.borderColor = 'rgba(0,0,0,0.4)'
    document.getElementById(idcorrect).style.transform = 'scale(1.5)'
    document.getElementById(idcorrect).style.backgroundColor = 'green'
    document.getElementById(idcorrect).style.borderColor = 'yellow'
    for (c=1;c<=4;c++){
        if (c==id || c==idcorrect){
            null
        }
        else{
            document.getElementById(`${c}`).style.backgroundColor = 'red'
            document.getElementById(`${c}`).style.transform = 'scale(1)'
            document.getElementById(`${c}`).style.borderColor = 'rgba(0,0,0,0.4)'
        }
    }
    setTimeout(function() {
        window.location.replace(`${page}?${variable}=${valor}`)
    }, 3000);
}
function querystring(parameter) {  
    var loc = location.search.substring(1, location.search.length);   
    var param_value = false;   
    var params = loc.split("&");   
    for (i=0; i<params.length;i++) {   
        param_name = params[i].substring(0,params[i].indexOf('='));   
        if (param_name == parameter) {                                          
            param_value = params[i].substring(params[i].indexOf('=')+1)   
        }   
    }   
    if (param_value) {   
        return param_value;   
    }   
    else {   
        return undefined;   
    }   
}
