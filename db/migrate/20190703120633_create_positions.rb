class CreatePositions < ActiveRecord::Migration[5.2]
  def change
    create_table :positions do |t|
      t.float :latitude
      t.float :longitude
      t.string :device
      t.references :game, foreign_key: true

      t.timestamps
    end
  end
end
