<template>
  <star-rating
    @update:rating="inputRating($event)"
    :show-rating="false"
    :rating="0"
    :max-rating="max"
    :read-only="readOnly"
    :star-size="35"
    :animate="true"
    :rounded-corners="true"
    :clearable="true"
    :padding="8"
  />
  <div class="message">
    {{ `${message}` }}
  </div>
</template>

<script>
import StarRating from 'vue-star-rating'
export default {
  components: {
    StarRating
  },
  props: {
    max: {
      type: Number,
      default: 5
    },
    readOnly: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      message: '',
      stars: 0
    }
  },
  watch: {
    stars(value) {
      if (value === 1) {
        this.message = 'I just hate it 🙁'
      } else if (value === 2) {
        this.message = 'I don´t like it 🤨'
      } else if (value === 3) {
        this.message = 'It is awesome 🙂'
      } else if (value === 4) {
        this.message = 'I just like it 🤩'
      } else if (value === 5) {
        this.message = 'I just love it 😍'
      } else {
        this.message = ''
      }
    }
  },
  methods: {
    inputRating(e) {
      this.stars = e
      this.$emit('input', e)
    }
  }
}
</script>

<style>
.message {
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>
