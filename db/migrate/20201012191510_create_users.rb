class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name, null: true
      t.string :email, null: true
      t.string :password_digest, null: true
      t.string :session_token, null: true
      t.text :biography
      t.string :location

      t.timestamps
    end

    add_index :users, :name, unique: true
    add_index :users, :email, unique: true
    add_index :users, :session_token, unique: true
  end
end
