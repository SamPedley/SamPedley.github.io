---
layout: post
title:  "1 Git Command to rule them all"
date:   2016-6-09
categories:
published: false
description: .
image: /public/img/ultimateTools/git.png
---

Things to note.
For this we’re going to be using example.com on running Ubuntu 14 with git, node/npm and composer installed.  I've also set up the server with my clients authorized ssh keys.

## The Server Side of things:


As well as the assumption that example.com is all setup, live and being served from the /var/www/example.com folder.

1) We need to create a directory to push to:

```mkdir /opt/repo/example.git && cd /opt/repo/example.git```

2) We need to initialize the folder as a blank git repo.

``` git init —bare ```

3) We need to create a hook file called ```post-receive``` within the hooks folder.

``` vim hooks/post-receive ```

4) We need to
{% highlight bash %}
#/usr/bin/env bash
echo "--> Checking out..."
git --work-tree=/var/www/example.com --git-dir=/opt/repo/example.git checkout -f
cd /var/www/example.com
echo "--> Running npm install <--"
npm install
echo "--> Running npm prune <--"
npm prune
echo "--> Running npm prod <--"
sudo npm run prod
echo "--> Running Composer <--"
composer install
echo "---! Sucess !---"
{% endhighlight %}

You’re local machine:

Caveats:
You need to make sure that the user you're using has write permissions.




Great links:
 * [How To Use Git Hooks To Automate Development and Deployment Tasks](https://www.digitalocean.com/community/tutorials/how-to-use-git-hooks-to-automate-development-and-deployment-tasks)
 * [Simple Git push deployment in 7 steps](https://gist.github.com/thomasfr/9691385)
 * [How To Set Up Automatic Deployment with Git with a VPS](https://www.digitalocean.com/community/tutorials/how-to-set-up-automatic-deployment-with-git-with-a-vps)