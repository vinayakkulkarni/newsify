<style scoped>
[v-cloak] > * { display:none }
[v-cloak]::before { content: "Loading…" }
.gradient-text {
	background: -webkit-linear-gradient(70deg,#3D3949,#6772A4); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
}
.fromwhere {
	background: #FFF;
}
.fromwhere:hover {
  animation: glow .3s forwards;
}
@keyframes glow {
    100% {box-shadow: 0 15px 23px 0 rgba(0,0,0,.1), 0 0 18px 2px #eee;}
}
.ui.grid.container {
	padding-top: 5%
}
@media screen and (max-width: 767px) {
    .ui.grid.container {
      padding-top: 10% !important;
    }
}
</style>
<template>
<div class="ui grid container">
  <div class="ui three stackable link cards">
    <a class="card fromwhere" v-for="(news, index) in top_news" :href="news.url" target="_blank" :key="news.title">
    	<div class="image">
		    <img class="ui image" v-if="news.multimedia[1].url" :src="news.multimedia[4].url" :alt="news.multimedia[1].caption">
		  </div>
		  <div class="content">
		    <div class="header gradient-text">{{ news.title }}</div>
		    <div class="meta">{{ news.byline }}</div>
		    <div class="description">
		      {{ news.abstract }}
		    </div>
		  </div>
		  <div class="extra content">
		    <i class="clock icon"></i>
		     {{ moment(news.published_date).format('LLLL') }}
		     <a class="right floated heart outline like icon" href="#" @click="saveFavorite(index)">
		      <i class="heart icon" :class="{outline: !clicked}"></i>
		      Fav
		    </a>
		  </div>
		</a>
  </div>
</div>
</template>
<script>
export default {
  props: [ 'api' ],
  created() {
    this.getTopNews();
    NProgress.start();
  },
  data() {
    return {
    	clicked: false,
      top_news: [],
    }
  },
  methods: {
    getTopNews() {
      let t = this;
      t.$http.get('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=' + t.api)
       .then(response => {
        console.log('response.data', response.data.results);
        t.top_news = response.data.results;
        NProgress.done(true);
        Vue.toasted.success('Successfully Loaded Data');
       })
    },
    saveFavorite(id) {
    	let vm = this;
    	vm.clicked = true;
    	Vue.toasted.success('Article Saved');
    }
  }
}
</script>