class AddAdventureImageAndDifficulty < ActiveRecord::Migration[7.0]
  def change
    add_column :adventures, :adventure_image, :string
    add_column :adventures, :difficulty, :text
  end
end
