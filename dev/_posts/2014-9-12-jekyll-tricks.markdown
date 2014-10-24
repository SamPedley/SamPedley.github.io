---
layout: post
title:  "Jekyll Tricks"
date:   2014-9-12 5:58:58
categories: 
published: true
description: Jekyll is a powerful static site generator and as I built my site I learned a lot about how you can leverage all that Jekyll offers.  I'll go over how to pull in images from posts, create dynamic page descriptions and help you set up your grunt or gulp file. 
---

Jekyll uses [Liquid](http://docs.shopify.com/themes/liquid-documentation/basics) and [YAML](http://en.wikipedia.org/wiki/YAML) to structure and layout the content in your site. 

Liquid is a tempting language created by [shopify](http://www.shopify.com/) which allows you run conditional statements, for loops and pull in data with YAML  - here’s an awesome [cheat sheet](http://cheat.markdunkley.com/). 

YML is short for “YAML Ain't Markup Language”.  Basically, what YAML does is store information that Jekyll needs to build out your site.  You only have to deal with YAML in two different places: the ```_config.yml``` file and in little blocks in the head section of posts.

##Here is a basic YML front matter block from [jekyll](http://jekyllrb.com/docs/frontmatter/).

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

Again, these are just the basic settings that Jekyll provides, however you can add your own variables to help make your static pages dynamic-ish.

##Adding a dynamic description

{% highlight html %}
---
layout: post
title:  "Jekyll Post"
date:   2090-11-10 12:00:00
description: This is a really great description for SEO and stuff. 
---
{% endhighlight %}

So essentially I've a  variable called description and I've assigned it a string.  Now I can access this with the following code.

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
I've broken it up into three lines but essentially all the liquid code is incased in the ``` <meta content=" "> ```; it just adds a fallback incase you forget to add a discriptionn.  

##Adding a dynamic Image
At this point I’m sure you're catching on,  you can create any kind of ```.yml``` tag and call it with liquid.  This is awesome because I come from the world of wordpress and I love being able to call data from pages and posts however I like and the YML and Liquid tags allow me to do something similar.   
With Jekyll an Liquid you can quickly cycle through all of your posts and display them however you like. Here’s how I structured my YML and Liquid to include and image.

{% highlight html %}
---
layout: post
title:  "Jekyll Post"
image: /images/collCat.jpg 
---
{% endhighlight %}

So this is fairly straight forward I just added tag named image and assigned the path to the image file.  Then I call it with this code: 

{% highlight html %}
{% raw  %}
 {% for post in site.posts limit:5 %}
       {% if post.image %}
       <img src="{{post.image}}" alt="">
       {% endif %} 
{% endraw %}
{% endhighlight %}

So in this code block I'm calling five posts and from each post i'm checking to see if it has an image and if it does I give the ```<img>``` tag the path to the image. Of course we can improve on this as well.  I like to add backups and redundancies to anything that's dynamic so I've also added a image to my ```_config.yml``` file the same exact way I would to the top of a post file. 


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

So, yeah, that’s about it.  I hope this helped a little and feel free to ask any questions.