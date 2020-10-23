json.reward do 
    json.extract! @reward, :id, :title, :description, :estimated_delivery, :shipping_loc, :cost, :project_id
end