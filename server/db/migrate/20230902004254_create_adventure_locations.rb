class CreateAdventureLocations < ActiveRecord::Migration[7.0]
  def change
    create_table :adventure_locations do |t|
      t.references :adventure, null: false, foreign_key: true
      t.references :location, null: false, foreign_key: true

      t.timestamps
    end
  end
end
