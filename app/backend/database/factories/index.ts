import Factory from '@ioc:Adonis/Lucid/Factory'
import Todo from '../../app/api/models/Todo'


export const TodoFactory = Factory
  .define(Todo, ({ faker }) => {
    return {
      title: faker.lorem.words(5),
      completed: faker.datatype.boolean()
    }
  })
  .build()
