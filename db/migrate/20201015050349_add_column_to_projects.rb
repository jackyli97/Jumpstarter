class AddColumnToProjects < ActiveRecord::Migration[5.2]
  def change
    add_column :projects, :image_url, :string, null: false
  end
end
