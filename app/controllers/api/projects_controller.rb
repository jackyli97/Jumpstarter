class Api::ProjectsController < ApplicationController
    def create
        @project = Project.new(project_params)
        if @project.save
        render :show
        else
        render json: @project.errors.full_messages, status: 401
        end
    end

    def index
        @projects = Project.all
        render :index
    end

    def show
        @project = Project.find_by(params[:id])
        render :show
    end

    def destroy
        @project = Project.find_by(params[:id])
        if @project
            @project.destroy
        else
        render json: ["Could not delete project"], status: 404
        end
    end

    def update
        @project = Project.find_by(params[:id])
        if @project.update(project_params)
            render :show
        else
            render json: ["Could not delete project"], status: 404
        end
    end

    private
    def project_params
        params.require(:project).permit(:title, :description, :updates, :faq, :funding_goal, :end_date, :location, :risks_and_challenges, :cateogry_id)
    end
end
