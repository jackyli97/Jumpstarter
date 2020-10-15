class RemoveImageColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :projects, :image_url
  end
end
