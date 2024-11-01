import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comment } from './comment.entity';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  createComment(@Body() createCommentDto: CreateCommentDto): Promise<Comment> {
    return this.commentService.createComment(createCommentDto);
  }
  @Get('recipe/:recipeId')
  getCommentForRecipe(@Param('recipeId') recipeId: number): Promise<Comment[]> {
    return this.commentService.getCommentForRecipe(recipeId);
  }
}
