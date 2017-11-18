<template>
    <div class="form-group">
        <label :for="options.name" v-if="options.label">
            {{ options.label }}
        </label>
        <input type="text" :name="options.name" :id="options.name" :value="formattedPostalCode" @input="update($event.target.value)" :placeholder="options.placeholder" class="form-control" :disabled="isDisabled" maxlength="10">
    </div>
</template>

<script>
    import _ from 'lodash'
    export default {
        props: {
            options:{
                type: Object
            }
        },
        computed: {
            isDisabled: function () {
                return this.options.disabled
            },
            formattedPostalCode: function() {
                if (this.options.value) {
                    let x = ''
                    x = this.options.value.replace(/\D+/g, '').match(/(\d{0,5})(\d{0,4})/)
                    return !x[2] ? x[1] : x[1] + '-' + x[2]
                }
                return ''
            }
        },
        watch: {
            formattedPostalCode:{
                handler: _.debounce(function(e) {
                    if(this.formattedPostalCode.length === 5 || this.formattedPostalCode.length === 10) {
                        this.$emit('watch', this.formattedPostalCode)
                    }
                }, 1000),
              deep: true
            }
        },
        methods: {
            update(userInput) {
                this.$emit('input', {
                    userInput: userInput,
                    field: this.options.name
                })
            },
        },
    }
</script>
