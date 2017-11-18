<template>
    <div class="form-group">
        <input type="checkbox" :name="options.name" :id="options.name" :value="options.value" @change="update($event.target)" class="form-control" :disabled="isDisabled" :checked="options.checked">{{ options.label }}<br>
        <div>
            {{ displayValue }}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FieldRecap',
        props: {
            options:{
                type: Object
            },
            displayValue : {
                type: String
            }
        },
        computed: {
            isDisabled: function () {
                return this.options.disabled
            }
        },
        methods: {
            update(userInput) {
                this.$emit('input', {
                    userInput: {
                        recap: userInput.value,
                        status: userInput.checked ? "complete" : "incomplete"
                    },
                    field: this.options.name
                })
            },
        },
    }
</script>
