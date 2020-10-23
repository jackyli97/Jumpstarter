# json.partial! "api/projects/project", projects: @projects
json.projects do 
    @projects.each do |project|
        json.set! project.id do
            json.extract! project, :id, :title, :description, :amount_pledged, :funding_goal
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

# json.users do
#     @projects.each do |project|
#         json.set! project.author.id do
#             json.name project.author.name
#         end
#     end
# end

