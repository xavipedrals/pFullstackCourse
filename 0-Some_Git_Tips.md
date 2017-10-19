# FullStack course

## 0-Some Git tips & tricks
Git is a version control system for tracking changes in computer files and coordinating work on those files among multiple people.

<p align="center">
<img src="https://raw.githubusercontent.com/xavipedrals/blabla/master/git-logo.png" width="30%" margin="auto">
</p>

### Alias
Go to your home folder and edit the .gitconfig file (if it doesn't exist create it). Add this:
```sh
[alias]
        ci = commit
        st = status -sb
        co = checkout
        b = branch
        merf = merge --no-ff
        ls = ls-files
        type = cat-file -t
        dump = cat-file -p
        viff = difftool -y -t vimdiff
        gl = log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-comm$
        dlog = log --oneline --decorate
[merge]
        tool = vimdiff
        keepBackup = false
```
### Gitflow commands
Create a new branch to do your work there
```
git co -b devNewBranch
```
Do all the work you want
```
git add -A
git commit -m "A commit message"
git push origin devNewBranch
```
You have all your work saved on the remote repository, now lets put it to the main branch
```
git co develop
git fetch origin
git rebase -pk origin/develop
git merf devNewBranch
```
Solve all the conflicts
```
git push origin develop
```
### iTerm2
Go to https://www.iterm2.com and download the app. This is your new terminal forever.
### OhMyZsh
Go to OhMyZsh and install it https://github.com/robbyrussell/oh-my-zsh. Now you have iTerm2 + OhMyZsh. Apply the git plugin at least as explained in the web. Then go to preferences in iTerm2 and go to Profiles -> Defaut -> Colors -> Colors Presets... and choose "Solarized Dark", I recomend you change some colors for the Solarized Light to have a fancier terminal like this:

<p align="center">
<img src="https://raw.githubusercontent.com/xavipedrals/iosCheatSheet/master/Screen%20Shot%202017-04-07%20at%2013.18.04.png" width="60%" margin="auto">
</p>

### Gitignore
Configure a .gitgnore going to [gitignore.io](https://www.gitignore.io) and writing Xcode and Swift.


