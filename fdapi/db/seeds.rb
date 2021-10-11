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
    role: 2)
end