class CreateRewards < ActiveRecord::Migration[5.2]
  def change
    create_table :rewards do |t|
      t.integer :project_id, null: false
      t.string :title, null: false
      t.text :description, null: false
      t.date :estimated_delivery, null: false
      t.string :shipping_loc, null: false
      t.integer :cost, null: false

      t.timestamps
    end
    add_index :rewards, :project_id
  end
end
