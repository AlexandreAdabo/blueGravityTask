<template>
  <div class="homepage">
    <div id="games" :class="['cards', gameCard ? 'active-card' : '']" @click="gameCard = !gameCard">
      <div class="cardLimit">
        <div class="cardFlip">
          <img src="../assets/games.png" alt="Games" width="250" height="45%" />
        </div>
        <div class="cardBack cardFlip">
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
          <h2>Games</h2>
          <p>
            The best games and releases of the year for you to follow with us, see our video above.
          </p>
          <div><rating @input="onRating($event), (gameCard = !gameCard)"></rating></div>
        </div>
      </div>
    </div>
    <div
      id="videos"
      :class="['cards', videoCard ? 'active-card' : '']"
      @click="videoCard = !videoCard"
    >
      <div class="cardLimit">
        <div class="cardFlip">
          <img src="../assets/videos.png" alt="Videos" width="250" height="45%" />
        </div>
        <div class="cardBack cardFlip">
          <iframe
            width="280"
            height="250"
            src="https://www.youtube.com/embed/7PIji8OubXU?si=vxwOG3I3GYt_22Lw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <h2>Videos</h2>
          <p>
            The best videos and releases of the year for you to follow with us, see our video above.
          </p>
          <div><rating @input="onRating($event), (videoCard = !videoCard)"></rating></div>
        </div>
      </div>
    </div>
    <div
      id="artwork"
      :class="['cards', artworkCard ? 'active-card' : '']"
      @click="artworkCard = !artworkCard"
    >
      <div class="cardLimit">
        <div class="cardFlip">
          <img src="../assets/artwork.png" alt="Artwork" width="250" height="45%" />
        </div>
        <div class="cardBack cardFlip">
          <iframe
            width="280"
            height="250"
            src="https://www.youtube.com/embed/6YSAMo6TmkE?si=n8tzhGH4hAGRloBx"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <h2>Artwork</h2>
          <p>
            The best artwork and releases of the year for you to follow with us, see our video
            above.
          </p>
          <div><rating @input="onRating($event), (artworkCard = !artworkCard)"></rating></div>
        </div>
      </div>
    </div>
    <div
      id="music"
      :class="['cards', musicCard ? 'active-card' : '']"
      @click="musicCard = !musicCard"
    >
      <div class="cardLimit">
        <div class="cardFlip">
          <img src="../assets/music.png" alt="Music" width="250" height="45%" />
        </div>
        <div class="cardBack cardFlip">
          <iframe
            width="280"
            height="250"
            src="https://www.youtube.com/embed/djV11Xbc914?si=v9Fe6szWpToTvpFS"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <h2>Music</h2>
          <p>
            The best musics and releases of the year for you to follow with us, see our video above.
          </p>
          <div><rating @input="onRating($event), (musicCard = !musicCard)"></rating></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import rating from '../components/rating.vue'

export default {
  name: 'homepage',
  components: {
    rating
  },
  data() {
    return {
      gameCard: false,
      videoCard: false,
      artworkCard: false,
      musicCard: false,
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

<style scoped>
.homepage {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 0.1rem;
}

.cards {
  display: flex;
  justify-content: center;
  border-radius: 25%;
  transform-style: preserve-3d;
}

.cardLimit {
  width: 100%;
  transition: all 1.5 ease;
  transform-style: preserve-3d;
  display: flex;
  justify-content: center;
  position: relative;
}

.cardLimit:hover {
  cursor: pointer;
  transform-style: preserve-3d;
}

.cardFlip {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  position: absolute;
}

.cardFlip:hover {
  cursor: pointer;
  transition: 0.5s;
  border: 8px solid #fff;
  transform-style: preserve-3d;
}

.cardBack {
  margin: 3%;
  border-radius: 5%;
  background-color: #000;
  color: #fff;
  transform-style: preserve-3d;
  transform: rotateY(180deg);
}

.active-card {
  transform: rotateY(180deg);
}
</style>
