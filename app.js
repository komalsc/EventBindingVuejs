const app = Vue.createApp({
    data() {
        return{
            counter: 0,
            name: '',
            confirmedName: '',
            fullname: ''

        };
    },
    methods: {
        add() {
            this.counter= this.counter + 1;
        },
        add5(num) {
            this.counter = this.counter + num;
        },
        setName(event) {
            this.name=event.target.value
        },
        submitForm() {
            alert('submitted');
        },
        confirmInput() {
            this.confirmedName = this.name;
        },
        resetInput () {
            this.name=''
        },
        outputFullname(){
          console.log('running again...')
          if(this.name === '') {
            return '';
        }
        return this.name + '' + 'kumari'
        },
        computed: {
            // fullname() {
            //     console.log('running again');
            //     if(this.name === '') {
            //         return '';
            //     }
            //     return this.name + '' + 'kumari'
            // }
        }
    }
});
app.mount('#events')