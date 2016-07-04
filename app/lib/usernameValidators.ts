import {Control} from 'angular2/common';

export class UsernameValidators{
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
}