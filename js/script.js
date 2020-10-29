var app = new Vue({
    el: '#app',
    data: {
        crossovers: true,
        sedan: false,
        cross: false,
    },
    methods: {
        crossoversShow() {
            if (this.crossovers == false) {
                this.crossovers = true;
                this.sedan = false;
                this.cross = false;
            }         
        },  
        sedanShow() {
            if (this.sedan == false) {
                this.sedan = true;
                this.crossovers = false;
                this.cross = false;
            }         
        },  
        crossShow() {
            if (this.cross == false) {
                this.cross = true;
                this.sedan = false;
                this.crossovers = false;
            }         
        },
        modalClose() {
            let modal = document.querySelector('.modal');
            modal.classList.remove('active');
            document.body.classList.remove('no-scroll');
        },
        modalOpen() {
            let modal = document.querySelector('.modal');
            modal.classList.add('active');
            document.body.classList.add('no-scroll');
        }                
    }
})
