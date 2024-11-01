import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Book } from './book.entity';
import { BookService } from './book.service';
import { In } from 'typeorm';

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

  @Mutation(() => Book)
  async updateBook(
    @Args('id', { type: () => Int }) id: number,
    @Args('title', { nullable: true }) title?: string,
    @Args('author', { nullable: true }) author?: string,
  ): Promise<Book> {
    return this.bookService.update(id, { title, author });
  }

  @Mutation(() => Boolean)
  async deleteBook(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<boolean> {
    return this.bookService.delete(id);
  }
  @Query(() => [Book])
  async filterBooks(
    @Args('title', { nullable: true }) title: string,
    @Args('author', { nullable: true }) author: string,
  ): Promise<Book[]> {
    return this.bookService.filter({ title, author });
  }
}
