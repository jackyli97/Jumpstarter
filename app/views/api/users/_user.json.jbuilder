json.extract! user, :id, :email, :name, :biography, :location
json.backings do
    user.backings.each do |backing|
        json.set! backing.id do
            json.extract! backing, :id, :backing_amount
            json.project do
                json.extract! backing.project, :id
            end
        end
    end
end

# json.projects_backed do
#      user.projects_backed.each do |project|
#         json.set! project.id do
#             json.extract! :id
#         end
#     end
# end