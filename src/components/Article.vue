<template>
    <div v-if="currentArticle" class="vision" >
        <form>
            <div class="form-group">
                <label for="title">Titre</label>
                <input v-model="currentArticle.title" type="text" class="form-control" id="title"/>
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <textarea v-model="currentArticle.description" class="form-control" rows="3"></textarea>
            </div>
            <div class="form-group">
                <label><strong>Status:</strong>{{ currentArticle.published ? "Publié" : "En attente" }}</label>
            </div>
        </form>
        <button v-if="currentArticle.published" v-on:click="updatePublished(false)" class="btn btn-outline-dark">Dépublier</button>
        <button v-else v-on:click="updatePublished(true)" class="btn btn-info mx-1">Publier</button>
        <button v-on:click="deleteArticle" class="btn btn-danger mx-1" >Supprimer</button>
        <button v-on:click="updateArticle" type="submit" class="btn btn-success mx-1">Mettre à jour</button>
        <p>{{ message }}</p>
    </div>
    <div v-else>
        <p>Cliquez sur un article Por Favor</p>
    </div>
</template>

<script lang='js'>

/* service import */
import ArticleDataService from '../services/ArticleDataService';

export default {
	name: "article",
	props: ["article"],

	data(){
		return{
			currentArticle: null,
			message: ""
		}
	},

	/* Watch article */
	watch:{
		article: function (article){
			console.log("Watcher de article");
			this.currentArticle = {...article};
			this.message = "";
		}
	},

	methods:{
		/* Update published status function */
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
		
		/*Update article function */
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

		/*Delete article function*/
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

	/* code to execute when the component is mounted */
	mounted(){
		this.message = "";
		this.currentArticle = {...this.article};
	}
}
</script>

<style scoped lang="css">
</style>