class CreateTimelines < ActiveRecord::Migration[7.1]
  def change
    create_table :timelines do |t|
      t.integer :user_id
      t.string :datetime
      t.string :title
      t.text :content

      t.timestamps
    end
  end
end
