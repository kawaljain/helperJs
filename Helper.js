/**
 * Helper Class
 * User: Kawal Jain
 * website: http://kawaljain.com/
 * 
**/

class Helper{
    
    constructor(environment) {
        this.classname = 'Helper';
        if(environment ==='development'){
            this.ENV = 1
        }else{
            this.ENV =0;
        }
    }
    logMessage(message){
        //  production = 1
        // developement = 0
        if(this.ENV==1){
            console.log(message);
        }
        return;
    }
    beforeAjax(){
        this.logMessage('before ajax parent')
    }
    afterAjax(){
        this.logMessage('before ajax parent')
    }

    //
        // API CALL 
    // METHOD : type of method of api call { get,put,post,delete}
    // api_url : define api url
    // data : define data which need to send;

    apiCall(method,api_url,data,replaceAjaxFunction=null){
        var objectInstance = this;

        return new Promise(function(resolve, reject) {
            method= method.toUpperCase();
            if(method=='undefined' || typeof(method)=='undefined')
            {
                reject('Api Method is not defined');
            }
            if(api_url=='undefined' || typeof(api_url)=='undefined')
            {
                reject('Api Url is not defined');
            }
            if(data=='undefined' || typeof(data)=='undefined')
            {
                if(method!='GET'){
                    reject('Data is not defined');
                }
            };
            switch(method) {
                case 'GET':
                    objectInstance.logMessage(data);
                    $.ajax({
                        url : api_url,
                        type : method,
                        data:data,
                        dataType : "json",
                        beforeSend:function(){
                            if(replaceAjaxFunction!=null){
                                if(replaceAjaxFunction.beforeAjax!=undefined || typeof replaceAjaxFunction.beforeAjax == 'function'){
                                    replaceAjaxFunction.beforeAjax();
                                }else{
                                    objectInstance.logMessage('Before Ajax');
                                }
                            }else{
                                objectInstance.logMessage('Before Ajax');
                            }
                        },
                        complete:function(){
                            if(replaceAjaxFunction!=null){
                                if(replaceAjaxFunction.afterAjax!=undefined || typeof replaceAjaxFunction.afterAjax == 'function'){
                                    replaceAjaxFunction.afterAjax();
                                }else{
                                    objectInstance.logMessage('Before Ajax');
                                }
                            }else{
                                objectInstance.logMessage('Before Ajax');
                            }
                        },
                        success : function(data) {
                            resolve(data);
                        },
                        error : function(data){
                            reject(data.responseJSON.message);
                        }
                    });
                    break;
                case 'POST':
                    $.ajax({
                        url : api_url,
                        type : method,
                        dataType : "json",
                        data : data,
                        beforeSend:function(){
                            if(replaceAjaxFunction!=null){
                                if(replaceAjaxFunction.beforeAjax!=undefined || typeof replaceAjaxFunction.beforeAjax == 'function'){
                                    replaceAjaxFunction.beforeAjax();
                                }else{
                                    objectInstance.logMessage('Before Ajax');
                                }
                            }else{
                                objectInstance.logMessage('Before Ajax');
                            }
                        },
                        complete:function(){
                            if(replaceAjaxFunction!=null){
                                if(replaceAjaxFunction.afterAjax!=undefined || typeof replaceAjaxFunction.afterAjax == 'function'){
                                    replaceAjaxFunction.afterAjax();
                                }else{
                                    objectInstance.logMessage('Before Ajax');
                                }
                            }else{
                                objectInstance.logMessage('Before Ajax');
                            }
                        },
                        success : function(data) {
                            resolve(data);
                        },
                        error : function(data){
                            reject(data.responseJSON.message);
                        }
                    });
                    break;                    
                case 'PUT':
                    $.ajax({
                        url : api_url,
                        type : method,
                        dataType : "json",
                        data: data,
                        beforeSend:function(){
                            if(replaceAjaxFunction!=null){
                                if(replaceAjaxFunction.beforeAjax!=undefined || typeof replaceAjaxFunction.beforeAjax == 'function'){
                                    replaceAjaxFunction.beforeAjax();
                                }else{
                                    objectInstance.logMessage('Before Ajax');
                                }
                            }else{
                                objectInstance.logMessage('Before Ajax');
                            }
                        },
                        complete:function(){
                            if(replaceAjaxFunction!=null){
                                if(replaceAjaxFunction.afterAjax!=undefined || typeof replaceAjaxFunction.afterAjax == 'function'){
                                    replaceAjaxFunction.afterAjax();
                                }else{
                                    objectInstance.logMessage('Before Ajax');
                                }
                            }else{
                                objectInstance.logMessage('Before Ajax');
                            }
                        },
                        success : function(data) {
                            resolve(data);
                        },
                        error : function(data){
                            reject(data.responseJSON.message)
                        }
                    });
                    break;
                case 'DELETE':
                    $.ajax({
                        url : api_url+'/'+data,
                        type : method,
                        dataType : "json",
                        data:data,                        
                        beforeSend:function(){
                            if(replaceAjaxFunction!=null){
                                if(replaceAjaxFunction.beforeAjax!=undefined || typeof replaceAjaxFunction.beforeAjax == 'function'){
                                    replaceAjaxFunction.beforeAjax();
                                }else{
                                    objectInstance.logMessage('Before Ajax');
                                }
                            }else{
                                objectInstance.logMessage('Before Ajax');
                            }
                        },
                        complete:function(){
                            if(replaceAjaxFunction!=null){
                                if(replaceAjaxFunction.afterAjax!=undefined || typeof replaceAjaxFunction.afterAjax == 'function'){
                                    replaceAjaxFunction.afterAjax();
                                }else{
                                    objectInstance.logMessage('Before Ajax');
                                }
                            }else{
                                objectInstance.logMessage('Before Ajax');
                            }
                        },
                        success : function(data) {
                            resolve(data);
                        },
                        error : function(data){
                            reject(data.responseJSON.message)
                        }
                    });
                    break;
                default:
                    reject('default');break;
            }
        })
    }

    //   charSet -  The random string will be created from these characters.
    // len - The length of the random string.
    randomString(len, charSet) {
        charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let randomString = '';
        for (let i = 0; i < len; i++) {
            let randomPoz = Math.floor(Math.random() * charSet.length);
            randomString += charSet.substring(randomPoz,randomPoz+1);
        }
        return randomString;
    }
    randomNumber(min,max){
        if((max == undefined || typeof max== undefined) || (min== undefined || typeof min== undefined) )
            return Math.random();
        else
            return Math.random() * (max-min) + min; 
    }
    uniqueNumber(){
        let date = new Date();
        return date.getTime();   
    }
    validEmail(email) {
        let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if(pattern.test(email)){
            return true;
        }
        return false;
    }
    validEmails(emails){
        let flag=false;
        for(const email of emails) {
            if(!this.validEmail(email)){
                flag = false;
                break;
            }else{
                flag=true;
            }
        }
        if(flag==true){
            return true;
        }
        return false;
    }
    validPassword(password){
        let pattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.^\S)(?=.*?[#?!@$%^&*-]).{8,}$/;
        if(pattern.test(password)){
            return true;
        }else{
            return false;
        }  

    }
    // Use to reset the form field
    disableCheck(instance){
        if($(instance).hasClass('disabled')){
            return true;
        }else{
            return false;
        }
    }

}

var h = new Helper('development');
console.log(h.randomString(8,'ABCDEFGHIJKL'))


