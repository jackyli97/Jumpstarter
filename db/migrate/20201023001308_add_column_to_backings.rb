class AddColumnToBackings < ActiveRecord::Migration[5.2]
  def change
    add_column(:backings, :project_id, :integer, null: false)
    add_index :backings, :project_id
  end
end
