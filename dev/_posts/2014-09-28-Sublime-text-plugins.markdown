---
layout: post
title:  "A few Awesome Sublime Text Plugins"
date:   2014-10-23 18:00:58
categories: 
published: true
description: Sublime Text is one of the most powerful text editors you can use, but with a little extra work you can make it even better.
image: /F/img/sublime/emmet2.gif
---

It's estimated that there are over [one billion websites](http://www.internetlivestats.com/total-number-of-websites/) live, accessible to you, right now. It's an insane number that human mind [struggles to really understand](http://spacecollective.org/TheUndying/5970/Big-numbers-and-the-human-mind). One of the reasons the internet has evolved into juggernaut it is today simply boils down to the accessibility everyone has to the tools to build a website.  In fact every computer built in the past ten years have had the tools to create a website per-installed.  I'm talking about text editors: Windows has Notepad, OSX has TextEdit and linux has well, Text Editor.  

Each of those editors will allow you to write code for even the most complex websites out there.  However using those tools is like choosing to a toy hammer instead of a pneumatic belt feed nail gun.  There are some great cross platform text editors out there : [Brackets](http://brackets.io/), [Atom](https://atom.io/) and my favorite/most popular [Sublime Text](http://www.sublimetext.com/).

Brackets, Atom and Sublime all have awesome built in features that make working with code much easier but I want to share my favorite plugins and settings that I use everyday. 

##[Package Manager](https://sublime.wbond.net/installation)
Sublime text doesn't provide a great experince for installing and removing packages right out of the box.  Lucky for us there's a packagemanager that'll handle everythign for us.  Just follow the directions [here.](https://sublime.wbond.net/installation)

##[Emmet](http://emmet.io/)
![Emmet](/F/img/sublime/emmet2.gif)
Emmet allows you to create elements with half the keystrokes you would normal use.  Typing ```.div``` + [tab] creates```<div></div>``` I know that doesn’t seem that much quicker than typing but after a few hundred lines that time adds up. To learn how to use this plugin you can check out the [emmet.io site](http://emmet.io) or you can jump right in with the [emmet cheat sheet](http://docs.emmet.io/cheat-sheet/).

[Download Emmet Here](https://sublime.wbond.net/packages/Emmet)

-----

##[Color Highlighter](https://sublime.wbond.net/packages/Color%20Highlighter)
![Color](/F/img/sublime/color.gif)
Did you know rgba(102, 153, 204, 1.0) is a light blue or that #FC0D1B is a bright red? Because I sure as hell didn't.  Color Highlighter is a super quick way of visualizing any color value, it even works on LESS and SASS varriables. 

[Download Color Highlighter Here](https://sublime.wbond.net/packages/Color%20Highlighter)

-----

##[Git Gutter](https://sublime.wbond.net/packages/Color%20Highlighter)
![GitGutter](/F/img/sublime/gitGutter.gif)
The Atom text edditor has the built in ability ot show you the addtions, deletions and changes to your working document against the head and it was just about the only reson I enjoyed Atom.  Thankfuly, that same feautre is available in of Sublime thanks to Git Gutter.

[Download Git Gutter Here](https://sublime.wbond.net/packages/GitGutter)

-----

##[SideBar Enhancements](https://github.com/titoBouzout/SideBarEnhancements)
![Sidemenu](/F/img/sublime/sidemenu.gif)
SideBar Enhancements is the plugin that should have come out of the box with Sublime.  SideBar Enhancements allows you to create, edit, duplicate, rename, launch code in browser and more; which makes manipulating files so much easier.

[Download SideBar Enhancements Here](https://sublime.wbond.net/packages/GitGutter)


-----

##[Bracket Highlighter](https://sublime.wbond.net/packages/BracketHighlighter)
![Brackets](/F/img/sublime/bracket.gif)
I love this plugin not because it does anything crazy but because it gives me little helping hints when I'm looking through a complex sass file or javascript function. 

[Download Bracket Highlighter Here](https://sublime.wbond.net/packages/BracketHighlighter)


-----

##Color and Theme
I'm a little picky when it comes to how things look so when I couldn't quite find a theme I liked I just combined two.

###1) The [Spacegray Theme](https://sublime.wbond.net/packages/Theme%20-%20Spacegray)

###2) The [Predawn Theme](https://sublime.wbond.net/packages/Predawn)

Basically, what I did was 

1. Downloaded the [Spacegray Theme](https://sublime.wbond.net/packages/Theme%20-%20Spacegray)
2. Downloaded the [Predawn Theme](https://sublime.wbond.net/packages/Predawn)
3. Opend up my user config file by ```Prefrences > Settings - User ```
4. Added these settings in a json format.

{% highlight json %}
{
	"caret_extra_width": 1,
	"caret_style": "phase",
	"color_scheme": "Packages/Theme - Spacegray/base16-eighties.dark.tmTheme",
	"font_size": 17,
	"highlight_line": true,
	"ignored_packages":
	[
		"Vintage"
	],
	"tabs_small": true,
	"theme": "predawn-DEV.sublime-theme"
}
{% endhighlight %}

and that's it. 
