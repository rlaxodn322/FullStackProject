import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private bookrepository: Repository<Book>,
  ) {}

  findAll(): Promise<Book[]> {
    return this.bookrepository.find();
  }
  findOne(id: number): Promise<Book> {
    return this.bookrepository.findOne({ where: { id } });
  }
  async create(data: { title: string; author: string }): Promise<Book> {
    const book = this.bookrepository.create(data);
    return this.bookrepository.save(book);
  }
  async update(
    id: number,
    data: Partial<{ title: string; author: string }>,
  ): Promise<Book> {
    const book = await this.bookrepository.findOne({ where: { id } });
    if (!book) throw new NotFoundException(`Book with ID ${id} not found`);
    Object.assign(book, data);
    return this.bookrepository.save(book);
  }
  async delete(id: number): Promise<boolean> {
    const result = await this.bookrepository.delete(id);
    return result.affected > 0;
  }

  async filter(filterCriteria: {
    title?: string;
    author?: string;
  }): Promise<Book[]> {
    const { title, author } = filterCriteria;
    const queryBuilder = this.bookrepository.createQueryBuilder('book');
    if (title)
      queryBuilder.andWhere('book.title Lke: title', { title: `%${title}%` });
    if (author)
      queryBuilder.andWhere('book.author Like: author', {
        author: `%${author}%`,
      });
    return queryBuilder.getMany();
  }
}
