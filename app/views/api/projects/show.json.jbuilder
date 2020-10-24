# json.partial! "api/projects/project", project: @project
json.project do
    json.extract! @project, :id, :title, :description, :updates, :faq, :amount_pledged, :funding_goal, :end_date, :location, :risks_and_challenges, :category_id, :campaign
    if @project.photo.attached?
        json.photo_url url_for(@project.photo)
    else
        json.photo_url ''
    end
    json.num_backings @num_backings
    json.backings do
        @project.backings.each do |backing|
            json.set! backing.backer_id do
                json.extract! backing, :id, :backing_amount, :backer_id
            end
        end
    end
    json.rewards do
        @project.rewards.each do |reward|
            json.set! reward.id do
                json.extract! reward, :id, :title, :description, :estimated_delivery, :shipping_loc, :cost 
            end
        end
    end
    json.author do
        json.extract! @project.author, :id, :name, :biography, :location
    end
end


# json.author do
#     json.extract! @project.author, :name, :biography, :location
# end