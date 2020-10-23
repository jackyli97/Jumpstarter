json.rewards do 
    @rewards.each do |reward|
        json.set! reward.id do
            json.extract! reward, :id, :title, :description, :estimated_delivery, :shipping_loc, :cost
        end
    end
end