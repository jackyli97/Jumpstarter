json.extract! project, :id, :title, :description, :updates, :faq, :amount_pledged, :funding_goal, :end_date, :location, :risks_and_challenges, :cateogry_id

projects.each do |project|
    json.set! project.id do
        json.extract! project, :id, :title, :description, :updates, :faq, :amount_pledged, :funding_goal, :end_date, :location, :risks_and_challenges, :cateogry_id
    end
end


