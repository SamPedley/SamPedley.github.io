---
layout: post
title:  "Jekyll Tricks"
date:   2014-11-10 20:58:58
categories: 
published: false
description: Jekyll is an awesome static site generator but there are a ton of useful things I found out the hard way.  I'll go over how to pull in images from posts, create dynamic page discriptions and help you set up your grunt or gulp file. 
---

Jekyll uses 

##Here is a basic YML front matter block 

{% highlight html %}
---
layout: post
permilink: /jekyll_much_cool/
title:  "Jekyll Post"
date:   2090-11-10 12:00:00
categories: cool stuff
published: true
tags: cool, awesome, neat
---
{% endhighlight %}

Therese are great and are global varriables. However you can add your own varriables to help make your static pages dynamic-ish.

##Adding a dynamic discription

{% highlight html %}
---
layout: post
title:  "Jekyll Post"
date:   2090-11-10 12:00:00
discription: This is a really great discription for SEO and stuff. 
---
{% endhighlight %}

So I've created a  varriable called disciption and i've assigned it a string.  now I can access this with the following code.

{% highlight html %}
{% raw  %}
{ % if page.description %}
	<meta name="description" content="{{ page.description }}">
{% endif %}
{% endraw %}
{% endhighlight %}

This is an very useful example of how we can use YML and Liquid to create a dynamic static sight generator.  Of course we can improve on it with this code:

{% highlight html %}
{% raw  %}
<meta name="description" content=
   "{ % if page.description %}{{ page.description }}
	{% else %}{{ site.description}}{% endif %}">

{% endraw %}
{% endhighlight %}
I've broken it up into three lines but essentally all the liquid code is incased in the ``` <meta content=" "> ```; it just adds a fallback incase you forget to add a discriptionn.  

##Adding a dynamic Image
At this point im sure you're cattching on,  you can create any kind of yml tag and call it with liquid.  This is awesome because I come from the world of wordpress and I'm use to being able to call data from pages and posts however I like and the YML and Liquid tags allow me to do somethign similar.   
With Jekyll an Liquid you can quickly cycle thorugh all of your posts and display them however you like but one thing I like to do is add an image to my list of posts and now I can.  

{% highlight html %}
---
layout: post
title:  "Jekyll Post"
image: /images/collCat.jpg 
---
{% endhighlight %}

So this is fairly straight forward I add a tag named image and I assign it the path to what ever image you would like to reffrence later. 

{% highlight html %}
{% raw  %}
 {% for post in site.posts limit:5 %}
       {% if post.image %}
       <img src="{{post.image}}" alt="">
       {% endif %} 
{% endraw %}
{% endhighlight %}

So in this code block I'm calling five posts and from each post i'm checking to see if it has an image and if it does I give the ```<img>``` tag the path to the image. Of course we can improve on this as well.  I like to add backups and redundecys to anythign that's dynamic so I've also added a image to my ```config.yml``` file the same exact way I would to the top of a post file. 


{% highlight html %}
{% raw  %}
 {% for post in site.posts limit:5 %}
<img src="{{site.url}}
	{% if post.image %}
		{{post.image}}
	{% else %}
		{{ site.image}}
	{% endif %}   
	" 
	alt="{{post.description}}">
{% endraw %}
{% endhighlight %}

A great place to learn more about liquid is their [github wiki page](https://github.com/Shopify/liquid/wiki) and [shopofys docs page](http://docs.shopify.com/themes/liquid-documentation/basics).
