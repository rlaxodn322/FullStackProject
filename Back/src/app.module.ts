import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosModule } from './todos/todos.module';
import { NotificationsModule } from './notifications/notifications.module';
import { NotesModule } from './notes/notes.module';
import { PetModule } from './pet/pet.module';
import { AdventuresModule } from './adventures/adventures.module';
import { MediaModule } from './media/media.module';
import { ProgressModule } from './progress/progress.module';
import { EventsModule } from './events/events.module';
import { ReservationsModule } from './reservations/reservations.module';
import { FeedbacksModule } from './feedbacks/feedbacks.module';
import { RecipeModule } from './recipe/recipe.module';
import { CommentModule } from './comment/comment.module';
import { RatingModule } from './rating/rating.module';
import config from './ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot({ ...config }),
    AuthModule,
    UserModule,
    TodosModule,
    NotificationsModule,
    NotesModule,
    PetModule,
    AdventuresModule,
    MediaModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
    ProgressModule,
    EventsModule,
    ReservationsModule,
    FeedbacksModule,
    RecipeModule,
    CommentModule,
    RatingModule,
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
