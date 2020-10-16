class AddCampaignColumnToProjects < ActiveRecord::Migration[5.2]
  def change
    add_column :projects, :campaign, :text
  end
end
