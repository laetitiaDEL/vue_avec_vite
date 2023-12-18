<template>
	<div class="container list row">
		<h1>Articles List</h1>
		<div class="col-md-6">
			<ul class="list-group">
				<li class="list-group-item" v-for="(unArticle, index) in articles" v-bind:key="index" v-on:click="setActiveArticle(unArticle, index)">{{ unArticle.title }}</li>
			</ul>
			<button v-on:click="removeAllArticles" class="m-3 btn btn-sm btn-danger">Tout supprimer</button>
		</div>
		<div class="col-md-6">
			<div v-if="currentArticle">
				<article-details v-bind:article="currentArticle" v-on:refreshList="refreshList"></article-details>
			</div>
			<div v-else>
				<p>Veuillez sélectionner un article.</p>
			</div>
		</div>
	</div>
</template>

<script lang='js'>
import ArticleDataService from '../services/ArticleDataService';
import ArticleDetails from './Article.vue';

export default {
	name:'articles-list',
	components:{ArticleDetails},

	data(){
		return{
			articles:[],
			currentArticle: null,
			currentIndex: -1
		}
	},

	methods:{
		onDataChange(items){
			const _articles = [];
			items.forEach(item => {
				const key = item.key;
				const data = item.val();
				_articles.push({
					key: key,
					title: data.title,
					description: data.description,
					published: data.published
				})
			});
			this.articles = _articles;
		},

		refreshList(){
			this.currentArticle = null;
			this.currentIndex = -1;
		},

		setActiveArticle(article, index){
			this.currentArticle = article;
			this.currentIndex = index;
		},

		removeAllArticles(){
			ArticleDataService.deleteAll()
			.then(()=>{
				this.refreshList();
			})
			.catch((e)=>{
				console.log(e);
			});
		}
	},

	mounted(){
		ArticleDataService.getAll().on('value', this.onDataChange);
	},
	
	beforeUnmount(){
		ArticleDataService.getAll().off('value', this.onDataChange)
	}
}

</script>

<style scoped lang="css">
</style>