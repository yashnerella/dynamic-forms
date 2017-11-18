
<script>
    export default {
        methods: {
            update(userInput) {
                this.$emit('input', {
                    userInput: userInput,
                    originField: this.options.name
                })
            },
        },
        render(){

        }
    }
</script>