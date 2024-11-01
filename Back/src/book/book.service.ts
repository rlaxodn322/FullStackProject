import { Injectable } from '@nestjs/common';
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
}
