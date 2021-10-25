app.component('product-details', {
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
  }

})