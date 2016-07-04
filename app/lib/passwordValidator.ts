import {Control, ControlGroup} from 'angular2/common';

export class PasswordValidator{
    static shouldBeUnique(control: Control)
    {
        return new Promise((resolve, reject) => {
            setTimeout(function(){
                if(control.value == "asd") // should be sent to server to query database and return true or false
                {
                    resolve({ shouldBeUnique: true });
                }
                else
                {
                    resolve(null);
                }
            }, 1000);
        })
    }

    static cannotContainSpace(control: Control){
        if(control.value.indexOf(' ') >= 0)
        {
            return { cannotContainSpace: true }
        }
        else
        {
            return null;
        }
    }

    static shouldBeValid(control: Control){
        return new Promise((resolve, reject) => {
            setTimeout(function(){
                if(control.value != "asd") // should be sent to server to query database and return true or false
                {
                    resolve({ shouldBeValid: true });
                }
                else
                {
                    resolve(null);
                }
            }, 1000);
        })
    }   
    
    static passwordsShouldMatch(group: ControlGroup){
        var newPassword = group.find('newPassword').value;
        var confirmNewPassword = group.find('confirmNewPassword').value;

        if (newPassword == '' || confirmNewPassword == '')
        {
            return null;
        }

        if(newPassword != confirmNewPassword)
        {
            return { passwordsShouldMatch: true };
        }
        else
        {
            return null;
        }
        
    } 
}