export default {
    meta: {
        pathInStore: "recap"
    },
    recap1:{
        id: 1,
        component: 'field-recap',
        options: {
            name:'recap1',
            label:'Collect and spell back the customer\'s name as it appears on their social',
            value: 'recap1',
            checked: true,
            displayAttribute: 'name'
        }
    },
    recap2:{
        id: 2,
        component: 'field-recap',
        options: {
            name:'recap2',
            label:'Confirm installation address:',
            value: 'recap2',
            checked: false,
            displayAttribute: 'address'
        }
    },
    recap3:{
        id: 3,
        component: 'field-recap',
        options: {
            name:'recap3',
            label:'Confirm primary and alternate phone numbers:',
            value: 'recap3',
            checked: false,
            displayAttribute: 'phone'
        }
    },
    recap4:{
        id: 4,
        component: 'field-recap',
        options: {
            name:'recap4',
            label:'Spell back customer email:',
            value: 'recap4',
            checked: true,
            displayAttribute: 'email'
        }
    },
    recap5:{
        id: 5,
        component: 'field-recap',
        options: {
            name:'recap5',
            label:'Confirm security answer and code',
            value: 'recap5',
            checked: false
        }
    }
}