<template>
    <div class="form-group">
        
        <label :for="name" v-if="label">
            {{ label }}
        </label> 
        
        <select :value="value" :id="name" :name="name" @input="update($event.target.value)" :disabled="isDisabled" class="form-control">
                <option value="">{{ message }}</option>
                <option v-for="option in options" :value="option.abbr" :selected="option.abbr == value">
                        {{ option.name }}
                </option>
        </select>
        
    </div>
</template>



<script>
    import states from '../stateList'

    export default {
        data() {
            return {
                message: '',
                options: [],
            }
        },
        props: {
            label: {
                type: String,
                default: "States"
            },
            name: {
                type: String,
                required: true,
            },
            value: {
                type: String
            },
            disabled: {
                type: Boolean,
                default: false
            },
            unselectedText: {
                type: String,
                default: 'Select'
            }
        },
        computed: {
            isDisabled: function () {
                return this.disabled
            }
        },
        methods: {
            update(string) {
                this.$emit('input', string)
            },
            getStates() {
                this.message = this.unselectedText
                this.options = states
            }
        },
        mounted() {
            this.getStates()
        }
    }
</script>