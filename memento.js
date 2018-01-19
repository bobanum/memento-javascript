/*jslint browser:true, esnext:true*/
class Memento {
	static prendreArticle(article) {
		var xhr = new XMLHttpRequest();
		var id = article.getAttribute("id");
		xhr.open("get", id + ".html");
		xhr.responseType = "document";
		xhr.addEventListener("load", function () {
			article.parentNode.replaceChild(this.response.getElementById(id), article);
		});
		xhr.send(null);
	}
	static init() {
		window.addEventListener("load", function () {
			var articles = document.querySelectorAll("article:empty");
			articles.forEach(a=>Memento.prendreArticle(a));
		});
	}
}
Memento.init();
