class AddBordercolorToEvents < ActiveRecord::Migration[5.1]
  def change
    add_column :events, :bordercolor, :string
  end
end
