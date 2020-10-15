class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.text :risks_and_challeneges, null: false
      t.text :updates
      t.text :faq
      t.integer :author_id, null: false
      t.integer :amount_pledged, null: false
      t.integer :funding_goal, null: false
      t.date :end_date, null: false
      t.integer :category_id, null: false
      t.string :location, null: false

      t.timestamps
    end

    add_index :projects, :author_id
    add_index :projects, :category_id
  end
end
