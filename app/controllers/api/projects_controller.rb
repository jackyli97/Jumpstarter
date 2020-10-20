class Api::ProjectsController < ApplicationController

    before_action :logged_in?, only: [:create, :update]

    def create
        @project = Project.new(project_params)
        if @project.save
        render :show
        else
        render json: @project.errors.full_messages, status: 401
        end
    end

    def index
        @projects = Project.get_ten_projects
        render :index
    end

    def show
        @project = Project.find(params[:id])
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
        if @project.author_id === current_user.id && @project.update(project_params) 
            render :show
        else
            render json: @project.errors.full_messages, status: 404
        end
    end

    private
    def project_params
        params.require(:project).permit(:title, :description, :amount_pledged, :category_id, :campaign, :updates, :faq, :funding_goal, :end_date, :location, :risks_and_challenges, :author_id, :page, :photo)
    end
end
