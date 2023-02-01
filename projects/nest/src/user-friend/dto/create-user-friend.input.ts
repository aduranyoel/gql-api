import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserFriendInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
