import {
  pgTable,
  text,
  timestamp as timeStamp,
  uuid,
} from 'drizzle-orm/pg-core'

export const subscriptions = pgTable('subscriptions', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  createdAt: timeStamp('created_at').notNull().defaultNow(),
})
