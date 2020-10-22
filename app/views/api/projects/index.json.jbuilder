# json.partial! "api/projects/project", projects: @projects
json.projects do 
    @projects.each do |project|
        json.set! project.id do
            json.extract! project, :id, :title, :description, :amount_pledged, :funding_goal
            json.author do
                json.extract! project.author, :id, :name, :biography, :location
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

