class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :title
      t.text :description
      t.text :risks_and_challeneges
      t.text :updates
      t.text :faq
      t.integer :author_id
      t.integer :amount_pledged
      t.integer :funding_goal
      t.date :end_date
      t.integer :category_id
      t.string :location

      t.timestamps
    end
  end
end
