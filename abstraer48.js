let { append, cons, first, isEmpty, isList, length, rest, map } = require("fl-extended");
/**Vamos a abstraer 2 funcioes que nos permitira hacer mas funcional un programa
 *  vamos a ver si esta vaina sirve
 
 * 
 * 
 */
function m(a,uldn){
    return first(uldn)>a
}


function extremos(uldn, m){
    if (isEmpty(uldn)){
        return [];
    }else if(m(first(uldn),rest(uldn))){
        return first(uldn);
    }else{
        return extremos()
    }
}
