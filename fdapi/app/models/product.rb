class Product < ApplicationRecord
  belongs_to :category
  self.per_page = 8
  scope :sort_name_asc, -> { order(product_name: :asc)}
  scope :sort_name_desc, -> { order(product_name: :desc)}
  scope :sort_price_desc, -> { order(price: :desc)}
  scope :sort_price_asc, -> { order(price: :asc)}
  scope :drink, -> { where(category_id: 2)}
  scope :food, -> { where(category_id: 1)}
  def self.filter name
    case name
    when "sort_name_asc"
      sort_name_asc
    when "sort_name_desc"
      sort_name_desc
    when "sort_price_desc"
      sort_price_desc
    when "sort_price_asc"
      sort_price_asc
    when "drink"
      drink
    when "food"
      food
    else
      all
    end
  end
end
