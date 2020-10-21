# json.partial! "api/projects/project", project: @project
json.project do
    json.extract! @project, :id, :title, :description, :updates, :faq, :amount_pledged, :funding_goal, :end_date, :location, :risks_and_challenges, :category_id, :campaign
    if @project.photo.attached?
        json.photo_url url_for(@project.photo)
    else
        json.photo_url ''
    end
end


json.author do
    json.extract! @project.author, :name, :biography, :location
end