import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Book } from './book.entity';
import { BookService } from './book.service';

@Resolver(() => Book)
export class BookResolver {
  constructor(private readonly bookService: BookService) {}

  @Query(() => [Book])
  async books() {
    return this.bookService.findAll();
  }
  @Mutation(() => Book)
  async createBook(
    @Args('title') title: string,
    @Args('author') author: string,
  ): Promise<Book> {
    return this.bookService.create({ title, author });
  }
  @Query(() => Book)
  async book(@Args('id', { type: () => Int }) id: number): Promise<Book> {
    return this.bookService.findOne(id);
  }
}
