class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :reset_token
      t.datetime :reset_due

      t.timestamps
    end

    add_index :users, :email, unique: true
    add_index :users, :reset_token, unique: true
  end
end
