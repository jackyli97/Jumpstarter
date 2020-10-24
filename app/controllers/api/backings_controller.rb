class Api::BackingsController < ApplicationController
    before_action :logged_in?, only: [:create, :update, :destroy]

    def create
        @backing = Backing.new(backing_params)
        # debugger
        if @backing.save
        # debugger
        render :show
        else
        render json: @backing.errors.full_messages, status: 401
        end
    end

    def index
        @backings = Backing.all
        render :index
    end

    def show
        @backing = Backing.find(params[:id])
        render :show
    end

    def destroy
        @backing = Backing.find(params[:id])
        if @backing.backer_id == current_user.id
            @backing.destroy
        else
        render json: ["Could not cancel pledge"], status: 404
        end
    end

    def update
        @backing = Backing.find(params[:id])
        if @backing.backer_id === current_user.id && @backing.update(backing_params) 
            render :show
        else
            render json: @backing.errors.full_messages, status: 404
        end
    end

    private
    def backing_params
        params.require(:backing).permit(:backing_amount, :backer_id, :reward_id, :project_id)
    end
end
