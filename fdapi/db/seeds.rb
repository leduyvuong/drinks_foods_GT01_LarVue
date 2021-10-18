@user = User.create!(username: "admin",
  email: "firesoul0608@gmail.com",
  password: "123456",
  password_confirmation: "123456",
  status: 1,
  role: 0)
30.times do |n|
name = Faker::Name.name
email = "fooddrink-#{n+1}@gmail.com"
@user = User.create!(username: name,
    email: email,
    password: "123456",
    password_confirmation: "123456",
    status: 1,
    role: 1)
end

Category.create!(category_name: "Food")
Category.create!(category_name: "Drink")
Tag.create(content: "A")
Faker::Config.locale = "vi"
30.times do
  product_name = Faker::Food.fruits
  description = Faker::Food.description
  price = Faker::Number.number(digits: 5)
  status = 1
  Product.create!(product_name: product_name, description: description, price: price, status: status, category_id: 1, tag_id: 1)
end

30.times do
  product_name = Faker::Beer.name
  description = "Brand: " + Faker::Beer.brand + ", Alcohol: " + Faker::Beer.alcohol + ", Yeast: " + Faker::Beer.yeast + ", Style: " + Faker::Beer.style
  price = Faker::Number.number(digits: 5)
  status = 1
  Product.create!(product_name: product_name, description: description, price: price, status: status, category_id: 2, tag_id: 1)
end

