class CreateAdventures < ActiveRecord::Migration[7.0]
  def change
    create_table :adventures do |t|
      t.string :adventure_name
      t.string :adventure_tag
      t.text :adventure_steps
      t.string :adventure_description

      t.timestamps
    end
  end
end
