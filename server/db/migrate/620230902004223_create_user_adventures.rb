class CreateUserAdventures < ActiveRecord::Migration[7.0]
  def change
    create_table :user_adventures do |t|
      t.references :user, null: false, foreign_key: true
      t.references :adventure, null: false, foreign_key: true
      t.datetime :date

      t.timestamps
    end
  end
end
