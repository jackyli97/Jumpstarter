class ChangeNulls < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :name
    remove_column :users, :email
    remove_column :users, :password_digest
    remove_column :users, :session_token
    add_column :users, :name, :string, null: false
    add_column :users, :email,:string, null: false
    add_column :users, :password_digest, :string, null: false
    add_column :users, :session_token, :string, null: false
  end
end
