class CreateArticles < ActiveRecord::Migration
  def change
    create_table :articles do |t|
      t.integer :author_id, null: false
      t.string :title, null: false
      t.text :text, null: false
      t.string :color, null: false
      t.string :thumb_url, null: false

      t.timestamps
    end

    add_index :articles, :author_id
    add_index :articles, :color
    add_index :articles, :title
    add_index :articles, :text
    add_foreign_key(:articles, :users, column: :author_id)
  end
end
