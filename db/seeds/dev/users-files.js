exports.seed = function (knex, Promise) {
  return knex('files').del()
    .then(() => knex('users').del())
    .then(() => {
      return Promise.all([
        knex('users').insert({
          username: 'Fooo',
          password: 'bar'
        }, 'id')
          .then(user => { 
            return knex('files').insert([
              {
                title: 'Lorem',
                user_id: user[0],
                markdown: 'hello'
              },
              {
                title: 'Ipsum',
                user_id: user[0],
                markdown: 'My thesis on video games'
              }
            ])
          })
          .then(() => console.log('Seeding complete!'))
          .catch(error => console.log(`Error seeding data: ${error}`))
      ]) // end return Promise.all
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};