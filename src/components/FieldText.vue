<template>
    <div class="form-group">
        <label :for="options.name" v-if="options.label">
            {{ options.label }}
        </label>
        <input type="text" :name="options.name" :id="options.name" :value="options.value" @input="update($event.target.value)" :placeholder="options.placeholder" class="form-control" :disabled="isDisabled" :maxlength="options.maxlength">
    </div>
</template>

<script>
    export default {
        name: 'FieldText',
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
