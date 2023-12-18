<template>
	<div>
		<h1>ARTICLE... TOUT COURT</h1>
	</div>
</template>

<script lang='js'>
import ArticleDataService from '../services/ArticleDataService';

export default {
	name: "un-article",
	props: ["article"],

	data(){
		return{
			currentArticle: null,
			message: ""
		}
	},

	watch:{
		article: (article)=>{
			this.currentArticle = {...article};
			this.message = "";
		}
	},

	methods:{
		updatePublished(status){
			ArticleDataService.update(this.currentArticle.key, {published: status})
			.then(()=>{
				this.currentArticle.published = status;
				this.message = "Le status a bien été MAJ";
			})
			.catch((e)=>{
				console.log(e);
			})
		},
		
		updateArticle(){
			const data = {
				title: this.currentArticle.title,
				description: this.currentArticle.description
			};
			ArticleDataService.update(this.currentArticle.key, data)
			.then(()=>{
				this.message = "L'article a bien été MAJ";
			})
			.catch((e)=>{
				console.log(e);
			})
		},

		deleteArticle(){
			ArticleDataService.delete(this.currentArticle.key)
			.then(()=>{
				this.$emit("refreshList");
			})
			.catch((e)=>{
				console.log(e);
			})
		}
	},

	mounted(){
		this.message = "";
		this.currentArticle = {...this.article};
	}
}
</script>

<style scoped lang="css">
</style>