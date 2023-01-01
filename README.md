# BT-App
KDP Project

## My Git workflows by using command line (test):

-----------------------------------------------------------

Concept: Codes can be divided to three places

1. Remote git (Github, usually the name is 'origin' in your git)

2. Local git (Your git application)

3. Local disk (visible and modify by you)

**According to different setup, the main branch can be named as 'main' or 'master'. If you try one of them does not work in your command, try another one**

-----------------------------------------------------------

1. ```git clone ``` // To local git and local disk 

2. ```git checkout -b xxx ``` // Switch local git and local disk to new branch: xxx

(Same as copying remote Git repository and create your feature "xxx" branch)

3. Edit local code (which is the source code in your local disk)

4. ```git diff ``` // Check what changes that you have made 

(Compare the code in your disk and in the staging area)

5. ```git add * ``` // Upload your code to staging area 

("*" means all changes, you can also add some of changes)

6. ```git commit -m "xxx" ``` // You can upload the code from your staging area to your local git

(You need to run: 
```
    git config --global user.email "you@example.com"
    git config --global user.name "Your Name"
```
first to set your account's default identity when you first time commit)

(-m "xxx" is for adding messages to your commit)

7. ```git push origin xxx``` // Push your "xxx" local git branch to remote git repository in Github

-----------------------------------------------------------

(If you found there are changes in the remote git (Github repo) when you write your code)

## Method 1:

1. ```git checkout master``` // Switch back to main branch

2. ```git pull origin master``` // Pull modified code from remote git (Github repo to your local git and local disk)

3. ```git checkout xxx``` // Come back to your "xxx" branch

4. ```git rebase master``` // Throw away my changes first, then take the newest changes from the main branch, next try to put back your own commit

(In the progress, you may meet: "rebase conflict" -----> You choose which side of code you want by your own)

---------------------------------------------------------------

## Method 2:

1. ```git fetch origin``` // It can pull all changes (only the branch you have) from remote git (Github)

2. ```git rebase origin/master``` // Throw away my changes first, then take the newest changes from the main branch, next try to put back your own commit

**Then jump to step 5**

---------------------------------------------------------------

5. ```git push -f origin xxx``` // Push the updated and rebased code to the remote git (Github repo)

(-f means force, but you're pushing to your own remote git branch so it won't destroy the main codebase)

6. Open a pull request and asking for pulling changes 

7. Owner of the codebase accepts the "pull request" and "squash and merge" all different commit from your branch into one!

---------------------------------------------------------------

After updateing remote git 

(Owner can delete the merged branch in remote git --> Github)

1. ```git branch -d xxx ``` // Delete your local git branch

2. ```git pull origin master``` // Pull the codebase from remote git (Github) again to local git main branch)

3. Then Start another cycle from creating your new feature branch in part 1 step 2.
