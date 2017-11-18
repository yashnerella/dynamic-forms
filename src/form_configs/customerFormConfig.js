export default {
    meta: {
        pathInStore: "customer"
    },
    firstName: {
        id: 1,
        component: 'field-text',
        options: {
            name:'firstName',
            placeholder:'first name',
            label:'First Name'
        }
    },
    lastName: {
        id: 2,
        component: 'field-text',
        options: {
            name:'lastName',
            placeholder:'last name',
            label:'Last Name'
        }
    },
    phone: {
        id: 3,
        component: 'field-phone',
        options: {
            name:'phone',
            label:'Phone'
        }
    }
}