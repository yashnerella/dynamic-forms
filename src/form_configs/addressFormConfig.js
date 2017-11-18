export default {
    meta: {
        pathInStore: "address"
    },
    line1: {
        id: 1,
        component: 'field-text',
        options: {
            name:'line1',
            placeholder:'line 1',
            label:'Line 1'
        }
    },
    line2: {
        id: 2,
        component: 'field-text',
        options: {
            name:'line2',
            placeholder:'line 2',
            label:'Line 2'
        }
    },
    city: {
        id: 3,
        component: 'field-text',
        options: {
            name:'city',
            label:'City'
        }
    },
    postalCode:{
        id: 4,
        component: 'field-postalcode',
        options: {
            name:'postalCode',
            label:'Postal Code'
        }
    }
}