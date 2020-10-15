class ChangeNullsForProjects < ActiveRecord::Migration[5.2]
  def change
    change_column_null :projects, :title, false
    change_column_null :projects, :description, false
    change_column_null :projects, :author_id, false
    change_column_null :projects, :amount_pledged, false
    change_column_null :projects, :funding_goal, false
    change_column_null :projects, :end_date, false
    change_column_null :projects, :category_id, false
    change_column_null :projects, :location, false
    remove_column :projects, :risks_and_challeneges
    add_column :projects, :risks_and_challenges, :text, null: false

  end
end
