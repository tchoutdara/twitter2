class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :text
      t.integer :user_id
      t.bigint :likes
      t.bigint :dislikes

      t.timestamps
    end
  end
end
