<template>
    <div class="container text-center bg-light p-1">
        <div>
            <form>
                    <h1>Ajouter un Article</h1>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Titre de l'article</label>
                    <input v-model="article.title" type="text" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Description article</label>
                    <textarea v-model="article.description"  class="form-control" rows="3"></textarea>
                </div>
                <div class="mb-3">
                    <button  v-on:click.prevent="saveArticle" type="button" class="btn btn-outline-primary">Ajouter un Article</button>
                </div>
            </form>
            </div> 
            <div>
                <h4>Article ajouté en BDD avec Succès</h4>
                <button class="btn btn-success" >Ajouter un autre article ?</button>
            </div>
        </div>
    </template>

<script>
/*service import*/
import ArticleDataService from '../services/ArticleDataService.js';

export default {
    name:'add-article',
    data(){
        return{
        article: {
            title: "",
            description: "",
            published: false
        },
        submitted: false
    };
    },
    methods:{
		saveArticle(){
			const data = {
				title: this.article.title,
				description: this.article.description,
				published: false
			};
			ArticleDataService.create(data)
			.then(()=>{
				this.submitted = true;
				console.log("Article créé.");
			})
			.catch(error=>{
				console.log(error);
			});
		},

		newArticle(){
			this.submitted = false;
			this.article = {
				title:"",
				description:"",
				published: false
			}
		}
    }
};
</script>

<style scoped lang="css">
</style>