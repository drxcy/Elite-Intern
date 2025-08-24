### Task 1 
## Step 1: Set up a Git Repository
# Create a new folder
* mkdir Elite-Intern
* cd Elite-Intern
* git init
* echo "# Elite-Intern" >> README.md
* git commit -m "first commit"
* git branch -M main
* git remote add origin https://github.com/drxcy/Elite-Intern.git
* git push -u origin main
* mkdir Task-01
* cd Task-01
🔹 Step 2: Create Branches
# In this step I create one branch for (Elite Intern ) and one for daily task (eg . for this git-conflict)
* git checkout -b elite-intern (checkout -b will create new branch with jump to that new branch)
* git checkout -b git-conflict
## Now Try to create conflict 
# Create and switch to branch feature-1
* git checkout -b git-feature-1
* echo "This is feature-1 branch changes." >> README.md
* git add README.md
* git commit -m "Added changes in feature-1 branch"
# switch to branch git-conflict
* git checkout git-conflict
# Create another branch git-feature-2 do same thing we did for git-feature-1
* git checkout -b git-feature-2
* echo "This is to modify Feature2 in branch Changes" >> README.md
* git add README.md
* git commit -m "Added changes in git-feature-2 branch"
🔹 Step 3: Cause a Merge Conflict
# Switch back to git-conflict
* git checkout git-conflict
# Try to merge git-feature-1
git merge git-feature-1
# ✅ This will succeed
# Now merge git-feature-2 (this will create a conflict)
* git merge git-feature-2
![alt text](<Screenshot 2025-08-24 194907.png>)
🔹 Step 4: Resolve Merge Conflict
Open README.md. It will look like:
![alt text](<Screenshot 2025-08-24 160909.png>)
# Then Edit it to a clean version, like
This is feature-1 branch changes.
This is to modify Feature2 in branch Changes
## Now mark resolution:
* git add README.md
* git commit -m "Resolved merge conflict between git-feature-1 and git-feature-2"
🔹 Step 5: Show Commit History 
* git log --oneline --graph --all
![alt text](<Screenshot 2025-08-24 200145.png>)
After each merge dont forget to git push orgin to the current branch (eg if we merge git-feature in git-conflict so you have to then git push origin git-conflict)
### Basic concept of Merge Conflict :-
# Imagine a team working on a shopping cart system in an e-commerce app.

# Developer A (on A branch) updates cart.js to improve UI.

# Developer B (on B branch) modifies the same file and same function to add discount logic.
# Both Developer updating on same file and when →  merging into main, Git cannot decide whose change to keep.
## Why this Happens
* Concurrent Edits → Two developers edit the same part of the file differently.

* Git is not smart enough to decide which one is “correct,” so it leaves it to humans.
## Solution 
* Understand the context of both logic and try to merge mannually so that to keep both
* git add (that file we are getting merge conflict)
* then git commit -m "resolved merge both a and b"
