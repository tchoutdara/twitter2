3.times do
    u = User.create(
    email: Faker::Internet.email,
    password: 'password',
    nickname: Faker::Hipster.word
    )
    10.times do
      Post.create(
      text: Faker::Hipster.sentence,
      likes: Faker::Number.number(3),
      dislikes: Faker::Number.number(3),
      user_id: u.id
      )
    end
end

puts 'seeded'