class AddBackgroundToEvents < ActiveRecord::Migration[5.1]
  def change
    add_column :events, :background, :string
  end
end
