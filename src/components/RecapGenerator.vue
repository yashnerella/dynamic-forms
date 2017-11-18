<template>
    <div>
        <component
            v-for="(recap,key) in this.recapList"
            v-if = "key != 'meta'"
            :is="recap.component"
            :key="recap.id"
            :options="recap.options"
            :displayValue="getDisplayValueFromStore(recap.options.displayAttribute)"
            @input="genericAction">
        </component>

    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    import  { store } from '../store/dynamicFormStore'

    export default {
        name: 'RecapGenerator',
        store,
        props:{
            recapList: {
                type: Object,
                required: true
            }
        },
        methods: {
            ...mapActions([
                'genericAction'
            ]),
            getDisplayValueFromStore(){
                return "hello"
            }
        }
    }
</script>
