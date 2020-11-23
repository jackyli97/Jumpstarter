# Jumpstarter

Link To Live App: [Jumpstarter](https://jumpstarter-app.herokuapp.com/#/)


Jumpstarter is a crowd-funding web application heavily based on Kickstarter. Here, innovators can share their work and raise the capital needed to launch their products. Users can back projects based on various reward levels. 

Jumpstarter makes use of a Rails/PostgreSQL backend with React and Redux on the frontend. This single page web application was designed and developed within a two-week time period. Future features that will be implemented include Search, Cateogories, and ability to view and edit your own projects.

## Features
* Implementation of frontend to backend user authentication using BCrypt.
* Form to create projects made through standard React components.
* Show page displaying all pertitnent information regarding a project.
* Dropdown on navbar that leads to user's profile where the can view their projects.
* Users can back, create, and browse projects.
* Backing a project updates the database and creates an association between a reward, project, and user.

### Functionality of Projects
The main purpose of Jumpstarter is to create and showcase a project. In order to effectively do this, all appropriate data and associations had to be properly passed from the back-end to the front-end. Projects, rewards, users, and backings were all separate tables that were connected through the use of a relational database. A Project `has_many` rewards, a reward `has_many` backings, and backings `belong_to` a user. The relationships were made by making a backings a joins table, with foreign keys belonging to a reward and backer. 

<br/>
Splash Page:
<p align="center">
  <img width="100%" src="https://github.com/jackyli97/Jumpstarter/blob/main/app/assets/images/splash.gif?raw=true">
</p>

<br/>

Project Show Page and Backing a project demo:
![Show](https://github.com/jackyli97/Jumpstarter/blob/main/app/assets/images/show.gif?raw=true)

<br/>

Project Creation Form:
<br/>

Search Functionality:
![Show](https://github.com/jackyli97/Jumpstarter/blob/main/app/assets/images/search.gif?raw=true)

<br/>

<p align="center">
  <img width="100%" src="https://github.com/jackyli97/Jumpstarter/blob/main/app/assets/images/75b4b4319fa9206f5dcd88c07d51af83.gif?raw=true">
</p>

The backend passed up the data while avoiding N+1 queries. This was done by prefetching the required data prior to sending the response to the front-end. To maintain efficiency when fetching projects to be displayed on the splash page, not every project in the database was fethced, rather the filtering was done in the back-end:

```ruby
//project controller

    def index
        @projects = Project.get_nine_projects
        @num_backings = Project.num_backings(@projects)
        render :index
    end
    
//project model

    def self.get_nine_projects()
        projects = Project.all.to_a
        filtered_projs = []
        until filtered_projs.length == 9
            sample = projects.sample
            if !filtered_projs.include?(sample)
                filtered_projs.append(sample)
            end
        end
        filtered_projs
    end

```

In order to extract and display the proper data based on associations, and in an efficient manner than minimized run-time, data was methodically organized using jbuilder.  This made it possible to pass down the appropriate data from global state as part of a compenent's properties.  

```ruby
json.projects do 
    @projects.each do |project|
        json.set! project.id do
            json.extract! project, :id, :title, :campaign, :amount_pledged, :funding_goal, :location, :end_date
            json.author do
                json.extract! project.author, :id, :name, :biography, :location
            end
            json.num_backings @num_backings[project.id]
            json.backings do
                project.backings.each do |backing|
                    json.set! backing.backer_id do
                        json.extract! backing, :backing_amount
                    end
                end
            end
            json.category do
                json.extract! project.category, :id, :category_name
            end
            json.rewards do
                project.rewards.each do |reward|
                    json.set! reward.id do
                        json.extract! reward, :title, :description, :estimated_delivery, :shipping_loc, :cost 
                    end
                end
            end
            if project.photo.attached?
                json.photo_url url_for(project.photo)
            else
                json.photo_url ''
            end
        end
    end
end
```

```js
// project show container
const mapStateToProps = (state, ownProps) => {
    let bool = false;
    let backingAmt = null; 
    if (state.session.id && state.entities.users[state.session.id].backings) {
        Object.values(state.entities.users[state.session.id].backings).forEach(backing=>{
            if (backing.project.id === parseInt(ownProps.match.params.projectId)){
                bool = true
                backingAmt = backing.backing_amount
            }
        })
    }
    return {
        project: state.entities.projects[ownProps.match.params.projectId],
        currentUser: state.session.id,
        path: ownProps.history,
        currentUserBacked: bool,
        backingAmt: backingAmt
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchProject: () => dispatch(fetchProject(ownProps.match.params.projectId)),
        deleteProject: (projectId) => dispatch(deleteProject(projectId)),
        createBacking: (backing) => dispatch(createBacking(backing)),
        updateProject: (project) => dispatch(updateProject(project))
    };
}
```
## Challenges
The code snippet above that's from the Project Show Container, represents one of the more challenging parts of my project that I had to debug and test. The problem was that following the creation of a new project, it would of course intially have no backings or rewards, but the project show page renders that information from a project. Once I added the backings and rewards feature I was getting undefined errors due to backings and rewards for new projects being null. To correct this issue, I had to write the logic that's displayed in the mapsStateToProps.

Another challenge was creating the multi-page project creation page that can be seen in the visual above. In order to allow for information from one page to another to persist, and to eventually be sent to the backend to create a new project, I had to leverage state and props in React when calling the next page in the render method on a click event. An example of this in action can be found in the code snipet directly below.

```ruby
// page component

<div className="create-footer-section">
    <span onClick={this.handleClick}>Category</span>
    <button>Next: Funding</button>
</div>

handleSubmit(e) {
  e.preventDefault();
  this.setState({ page: 3 })
}

let display = (this.state.page === 1) ? <Page1 createProject={this.props.createProject} pageOneProps={this.state} path={this.props.path} author={this.props.authorId} />  
        : (this.state.page === 3) ? 
                <Page3 project={this.state} createReward={this.props.createReward} path={this.props.path} author={this.props.author} createProject={this.props.createProject} /> : (
```

## Technology

### Backend
* Ruby on Rails
* PostgreSQL
* Hosting on Heroku playform
* BCrypt used for password salting and hashing

### Frontend
* React/Redux
* React DOM
* React Router
* jQuery

