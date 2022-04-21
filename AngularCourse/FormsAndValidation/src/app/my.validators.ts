import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";

export class MyValidators {
    static restrictedEmails(control: FormControl): { [key: string]: boolean } {
        if (['one@mail.com', 'two@mail.com'].includes(control.value)) {
            return { restrictedEmail: true }
        }
        return null as any
    }

    static uniqEmail(control: FormControl): Promise<any> | Observable<any> {
        return new Promise(resolve => {
            setTimeout(() => {
                if (control.value === 'async@mail.com') {
                    resolve({ uniqEmail: true })
                } else {
                    resolve(null as any)
                }
            }, 1000)
        })
    }
}