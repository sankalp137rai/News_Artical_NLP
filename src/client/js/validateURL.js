//function to validate url
function isUrlValid(url){
    //RegEx for finding is URL valid or not?
    const regex =  /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
    
    //testing regex on url
    if(!regex.test(url)){
        return false;
    }
    console.log("url is valid")
    return true;
}
//exporting isUrlValid function
export { isUrlValid }