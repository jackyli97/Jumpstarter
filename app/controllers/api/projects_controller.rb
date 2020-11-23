class Api::ProjectsController < ApplicationController

    before_action :logged_in?, only: [:create, :update, :destroy]

    def create
        @project = Project.new(project_params)
        date = Project.convert_to_date(project_params[:end_date])
        @project.end_date = date
        @project.category_id = @project.category_id.to_i
        if @project.save
        render :show
        else
        render json: @project.errors.full_messages, status: 401
        end
    end

    def category
        if params[:id] == "arts"
           @projects = Project.where(:category_id => [1,4,12,15]) 
        elsif params[:id] == "comics"
           @projects = Project.where(category_id: 2) 
        elsif params[:id] == "design"
           @projects = Project.where(:category_id => [5,14]) 
        elsif params[:id] == "film"
           @projects = Project.where(category_id: 7) 
        elsif params[:id] == "food"
           @projects = Project.where(:category_id => [3,8,6]) 
        elsif params[:id] == "games"
           @projects = Project.where(category_id: 9) 
        elsif params[:id] == "music"
           @projects = Project.where(category_id: 11) 
        elsif params[:id] == "publishing"
           @projects = Project.where(:category_id => [13,10])
        elsif params[:id] == "everything"
            @projects = Project.all
        else
           @projects = Project.where(category_id: params[:id])
        end
        @projects = @projects.to_a
        @num_backings = Project.num_backings(@projects)
        render :index
    end

    def index
        @projects = Project.get_nine_projects
        @num_backings = Project.num_backings(@projects)
        render :index
    end

    def show
        @project = Project.find(params[:id])
        @num_backings = Project.num_backings(@project)
        render :show
    end

    def destroy
        @project = Project.find(params[:id])
        if @project.author_id == current_user.id
            @project.destroy
        else
        render json: ["Could not delete project"], status: 404
        end
    end

    def update
        @project = Project.find(params[:id])
        if current_user.id && @project.update(project_params) 
            render :show
        else
            render json: @project.errors.full_messages, status: 404
        end
    end

    private
    def project_params
        params.require(:project).permit(:title, :description, :amount_pledged, :category_id, :campaign, :updates, :faq, :funding_goal, :end_date, :location, :risks_and_challenges, :author_id, :photo)
    end
end
