---
layout: post
title:  "Css Code Snipits"
date:   2014-08-10 20:58:58
categories: stuff
published: false
---

Code snipptis I use all the time:


##Responsive image css
I like to use the same syntax as bootstrap.
{% highlight css %}
.img-responsive {
	max-height:100%
	height:auto;
}
{% endhighlight %}

----

##Clearfix
Using clearfix with after, gives you the ability to be more symantic in your markup since you don't have to keep adding empty divs. 
{% highlight css %}
.clearfix:after {
  display: block;
  clear: both;
  content: "";
  }
{% endhighlight %}
