Vue.component('modal', {    
    template: `
    <div class="modal">
            <div 
                class="modal__fon"                
                v-on:click="$emit('modal-close')"></div>
            <div class="modal__content">
                <div class="modal__container">
                    <div 
                        class="modal__close"
                        v-on:click="$emit('modal-close')">&#10006;</div>
                    <p class="modal__title">Получить предложение</p>
                    <p class="modal__text">Оставьте заявку и наши менеджеры свяжутся с Вами в ближайшее время</p>
                    <form class="modal__form form" action="#" method="get">
                        <input class="form__input-tel" type="tel" name="tel" id="phone" placeholder="+7 (___) ___-__-__">
                        <button class="btn btn_offer form__submit">Получить предложение</button>
                    </form>          
                    <div class="modal__check">
                        <input class="modal__input-check" type="checkbox" name="data" id="data">
                        <label class="modal__label-check" for="data">Я даю согласие на <a href="#">обработку персональных данных</a></label>
                    </div>  
                </div>
            </div>
        </div>
    `
})



var app = new Vue({
    el: '#app',
    data: {
        crossovers: true,
        sedan: false,
        cross: false,
        modal: false
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
