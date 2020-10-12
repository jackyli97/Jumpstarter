class ChangeUserTable < ActiveRecord::Migration[5.2]
  def change
    remove_index :users, :name
    add_index :users, :name
  end
end
