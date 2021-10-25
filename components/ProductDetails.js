app.component('product-display', {
  props: {
    details: {
      type: String,
      required: true
    }
  },
  template: 
  /*html*/
  `<p>HELLO BOYS {{ details }}</p>`,
  computed: {
    details() {
     
        return this.details
  }


})