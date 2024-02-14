export default (await import('vue')).defineComponent({
    name: 'app',
    components: { Rotulo, Escolha },
    data() {
        return {
            email: ''
        };
    }
});
