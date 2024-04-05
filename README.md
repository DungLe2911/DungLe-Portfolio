# Operating Procedures

# Running the Project Locally  
To run the project locally, execute the following command:


``` npm start ```

To make any changes to deployment, need to commit and push the changes to the main branch first

```git add . ```

```git commit -m 'commit messages'```

```git push -u origin main```

Once the changes is made to the repository, we will make a new deployment:  
First, create a new build with all the new changes

```npm run build```

Then 

```npm run deploy```

to make the new build go live  
Deployment is at: https://dungle2911.github.io/DungLe-Portfolio/

---

To ensure responsiveness without starting from scratch, this project leverages the Ant Design Library. Explore more about the library at   
https://ant.design/.