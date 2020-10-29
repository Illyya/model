var app = new Vue({
    el: '#app',
    data: {
        modal: false,
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
            this.modal = false;
            document.body.classList.remove('no-scroll');
        },
        modalOpen() {
            this.modal = true;
            document.body.classList.add('no-scroll');
        }                
    }
})
