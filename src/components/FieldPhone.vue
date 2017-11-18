<template>
    <div class="form-group">
        <label :for="options.name" v-if="options.label">
            {{ options.label }}
        </label>
        <input type="text" :name="options.name" :id="options.name" :value="options.value | phone" @input="update($event.target.value)" :placeholder="options.placeholder" class="form-control" :disabled="isDisabled" maxlength="14">
    </div>
</template>

<script>
    export default {
        props: {
            options:{
                type: Object
            }
        },
        computed: {
            isDisabled: function () {
                return this.options.disabled
            }
        },
        filters: {
            phone: function (value) {
                return ''
                //let x = value.replace(/(\D+)/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/)
                //return !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '')
            }
        },
        methods: {
            update(userInput) {
                this.$emit('input', {
                    userInput: userInput,
                    field: this.options.name
                });
            },
        },
    }
</script>
