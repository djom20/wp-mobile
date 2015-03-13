angular.module('starter.services', [])

.service('wpServices', function($http) {
    this.url        = undefined;
    this.base_url   = $config[$config.env].service + '/wp-json';

    this.init = function(url){
    	this.clear();
    	this.url = url; /* Example: post */
    }

    this.save = function (post){
        console.log('Element Saved');
        return true;
    }

    this.get = function (url, post){
    	this.init(url); /* Inicializando proceso */

        if(post != null){
            return $http.get(this.base_url + '/' + this.url + '/' + post.id);
        }else{
            return $http.get(this.base_url + '/' + this.url);
        }
    }

    this.delete = function (post){
        console.log('Element Deteled');
        return true;
    }

    this.clear = function(){
        this.url = '';
        return this;
    }

    return this;
});