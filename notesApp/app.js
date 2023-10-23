const App = {
    data() {
        return {
            title: 'Notes',
            input: {
                value: '',
                placeholder: 'Type your note'
            },
            notes: ['Task 1', 'Task 2', 'Task 3'],
        };
    },
    mounted() {
        this.getNotes();
    },
    watch: {
        notes: {
            handler(updatedList) {
                localStorage.setItem('notes', JSON.stringify(updatedList));
            },
            deep: true,
        },
    },
    methods: {
        getNotes() {
            const localNotes = localStorage.getItem('notes');
            if (localNotes) {
                this.notes = JSON.parse(localNotes);
            };
        },
        onSubmit() {
            //localStorage.setItem('note', 'hello world')
            //localStorage.getItem('note');
            this.notes.push(this.input.value);
            this.input.value = ''; // сброс input
        },
        remove(index) {
            this.notes.splice(index, 1);
        },
    },
};

Vue.createApp(App).mount("#app");