---
layout: post
title:  "Angular Google Maps"
date:   2015-03-7 21:01
categories: 
published: false
description: Working with the Angular Google Maps directive is super easy... once you make it past the somewhat poor documentation.  Here's a general example of how I set up a multiple marker map.
image: /public/img/angularMaps/angularMaps.png
---

[Angular-Google-Maps is awesome!](http://angular-ui.github.io/angular-google-maps/#!/api)  I'ts a super quick way to get google maps working in angular with very little effort.  There just isn't a good/basic example of how to get a multi map marker working so I created one.

{% highlight js %}
var app = angular.module('app',['uiGmapgoogle-maps']);

  app.controller('MapController',['$scope',function($scope){

    $scope.map = { 
    	center: { latitude: 32.128394, longitude: -80.783215  }, 
    	zoom: 17,
    	markers: [
    		{ id: 1, latitude: 32.128394, longitude: -80.24243, title: "Cool house 1", picture: "http://placehold.it/350x150"},
    		{ id: 2, latitude: 32.11212, longitude: -80.67456, title: "Cool house 2", picture: "http://placehold.it/350x150"},
    		{ id: 3, latitude: 32.232212, longitude: -80.45432, title: "Cool house 3", picture: "http://placehold.it/350x150"},
    		{ id: 4, latitude: 32.12312, longitude: -80.123123, title: "Cool house 4", picture: "http://placehold.it/350x150"}
    	]
    };

  }]);


{% endhighlight %}

{% highlight html %}
<div ng-controller="MapController">
	<ui-gmap-google-map map-resize center='map.center' zoom='map.zoom' >
	    <ui-gmap-markers models="map.markers" idKey="'id'" coords="'self'">
	        <ui-gmap-windows show="show">
	            <div ng-non-bindable>
	                <a href="#/{{ "{{ id"}} }}">
	                    <img src="{{ "{{ picture"}} }}">
	                </a>
	                <h4>{{ "{{ title"}} }}</h4>
	            </div>
	        </ui-gmap-windows>
	    </ui-gmap-markers>
	</ui-gmap-google-map>
</div>
{% endhighlight %}

Following this pattern and the geting [started documentation](http://angular-ui.github.io/angular-google-maps/#!/api) will get you something like this: 

<img src="/public/img/angularMaps/angularMaps.png" alt="">