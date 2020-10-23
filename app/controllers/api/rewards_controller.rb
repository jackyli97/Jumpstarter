class Api::RewardsController < ApplicationController
    before_action :logged_in?, only: [:create, :update, :destroy]

    def create
        @reward = Reward.new(reward_params)        
        date = Reward.convert_to_date(reward_params[:estimated_delivery])
        @reward.estimated_delivery = date
        if @reward.save
        render :show
        else
        render json: @reward.errors.full_messages, status: 401
        end
    end

    def index
        @rewards = Reward.all
        render :index
    end

    def show
        @reward = Reward.find(params[:id])
        render :show
    end

    def destroy
        @reward = Reward.find(params[:id])
        if @reward.author == current_user.id
            @reward.destroy
        else
        render json: ["Could not cancel pledge"], status: 404
        end
    end

    def update
        @reward = Reward.find(params[:id])
        if @reward.author === current_user.id && @reward.update(reward_params) 
            render :show
        else
            render json: @reward.errors.full_messages, status: 404
        end
    end

    private
    def reward_params
        params.require(:reward).permit(:project_id, :title, :description, :estimated_delivery, :shipping_loc, :cost)
    end
end
