app.component('review-form', {
  template: 
  /*html*/
  `<form class="review-form" @submit.prevent="onSubmit">
    <h3>Leave A Review</h3>
    <label for="name">Name:</label>
    <input type="text" id="name" v-model="name">

    <label for="review">Review:</label>
    <textarea name="review" id="review" cols="30" rows="10" v-model="review"></textarea>

    <label for="rating">Rating:</label>
    <select name="rating" id="rating" v-model.number="rating">
      <option value="5">5</option>
      <option value="4">4</option>
      <option value="3">3</option>
      <option value="2">2</option>
      <option value="1">1</option>
    </select>

  <br>
    <label for="recommend">Would you recommend this product?</label>
       <input type="text" name="recommend" id="recommend" v-model="recommend">



    <input type="submit" class="button" value="Submit" >
  </form>`,
  data(){
    return {
      name: '',
      review: '',
      rating: null,
      recommend: ''
    }
  },
  methods: {
    onSubmit(){
      if (this.name === '' | this.review === '' | this.rating === null | this.recommend === ''){
        alert('missin some info dog!')
        return
      }

      let productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating,
        recommend: this.recommend
      }
      this.$emit('review-submitted', productReview)

      this.name = ''
      this.review = ''
      this.rating = null
      this.recommend = ''
    }
  }
},
)