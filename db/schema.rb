# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140203194753) do

  create_table "articles", force: true do |t|
    t.integer  "author_id",  null: false
    t.string   "title",      null: false
    t.text     "text",       null: false
    t.string   "color",      null: false
    t.string   "thumb_url",  null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "articles", ["author_id"], name: "index_articles_on_author_id"
  add_index "articles", ["color"], name: "index_articles_on_color"
  add_index "articles", ["text"], name: "index_articles_on_text"
  add_index "articles", ["title"], name: "index_articles_on_title"

  create_table "users", force: true do |t|
    t.string   "name",            null: false
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "reset_token"
    t.datetime "reset_due"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true
  add_index "users", ["reset_token"], name: "index_users_on_reset_token", unique: true

end
