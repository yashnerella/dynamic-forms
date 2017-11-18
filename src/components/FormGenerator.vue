<template>
    <div>
        <component
            v-for="(formField,key) in form"
            v-if="key != 'meta'"
            :is="formField.component"
            :key="formField.id"
            :options="formField.options"
            @input="callGenericAction">
        </component>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    import  { store } from '../store/dynamicFormStore'

    export default {
        name: 'FormGenerator',
        store,
        props:{
            form: {
                type: Object,
                required: true
            }
        },
        methods: {
            ...mapActions([
                'genericAction'
            ]),
            callGenericAction(storeData) {
                storeData.pathInStore = this.form.meta.pathInStore
                this.genericAction(storeData)
            }
        }
    }
</script>
