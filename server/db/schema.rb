# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 720230902004255) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "adventure_locations", force: :cascade do |t|
    t.bigint "adventure_id", null: false
    t.bigint "location_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["adventure_id"], name: "index_adventure_locations_on_adventure_id"
    t.index ["location_id"], name: "index_adventure_locations_on_location_id"
  end

  create_table "adventures", force: :cascade do |t|
    t.string "adventure_name"
    t.string "adventure_tag"
    t.text "adventure_steps"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "adventure_image"
    t.text "difficulty"
  end

  create_table "locations", force: :cascade do |t|
    t.string "location_name"
    t.string "location_tag"
    t.float "latitude"
    t.float "longitude"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_adventures", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "adventure_id", null: false
    t.datetime "date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["adventure_id"], name: "index_user_adventures_on_adventure_id"
    t.index ["user_id"], name: "index_user_adventures_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "profile_picture"
  end

  add_foreign_key "adventure_locations", "adventures"
  add_foreign_key "adventure_locations", "locations"
  add_foreign_key "user_adventures", "adventures"
  add_foreign_key "user_adventures", "users"
end
