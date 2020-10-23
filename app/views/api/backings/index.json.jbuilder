json.backings do 
    @backings.each do |backing|
        json.set! backing.id do
            json.extract! backing, :id, :backing_amount, :reward_id, :project_id
        end
    end
end