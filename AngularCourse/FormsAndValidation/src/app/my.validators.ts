import { FormControl } from "@angular/forms";

export class MyValidators {
    static restrictedEmails(control: FormControl): { [key: string]: boolean } {
        if (['one@mail.com', 'two@mail.com'].includes(control.value)) {
            return { restrictedEmail: true }
        }
        return null as any
    }
}