<template>
  <div>
    <h1 class="title">Music Page</h1>
    <div class="about">
      <div class="description" v-for="n in arrayGames" :key="n.id">
        <iframe
          width="280"
          height="250"
          src="https://www.youtube.com/embed/XtD7JuPwK50?si=pAsW6iz9QY8YiUlS"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <h2>{{ `${n.title}` }}</h2>
        <p>{{ `By ${n.developer}` }}</p>
        <div><rating @input="onRating($event)"></rating></div>
      </div>
    </div>
  </div>
</template>

<script>
import rating from '../components/rating.vue'

export default {
  name: 'games',
  components: {
    rating
  },
  data() {
    return {
      arrayGames: [
        {
          id: 1,
          title: 'We Will Rock You',
          developer: 'Queen'
        },
        {
          id: 2,
          title: 'Like a Prayer',
          developer: 'Madonna'
        },
        {
          id: 3,
          title: 'Thriller',
          developer: 'Michael Jackson'
        },
        {
          id: 4,
          title: 'Hey Jude',
          developer: 'Beatles'
        }
      ],
      rating: 0
    }
  },
  methods: {
    onRating(e) {
      console.log(e, 'meu e')
    }
  }
}
</script>

<style>
.about {
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
}
.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
}
.description {
  display: flex;
  margin: 3%;
  flex-direction: column;
  align-items: center;
  align-content: space-around;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
  }
  .description {
    display: inline;
  }
}
</style>
