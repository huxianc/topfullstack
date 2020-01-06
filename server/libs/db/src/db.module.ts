import { Episode } from './models/episode.model';
import { Course } from './models/course.model';
import { User } from './models/user.model';
import { Module, Global } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose';

const models = TypegooseModule.forFeature([User, Course, Episode]);

@Global()
@Module({
  // 导入模块的列表，这些模块导出了此模块中所需提供者
  imports: [
    TypegooseModule.forRootAsync({
      useFactory() {
        return {
          uri:process.env.DB,
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true,
          useFindAndModify: false,
        };
      },
    }),
    models,
  ],
  // 由 Nest 注入器实例化的提供者，并且可以至少在整个模块中共享
  providers: [DbService],
  // 由本模块提供并应在其他模块中可用的提供者的子集。 理解为暴露出去的
  exports: [DbService, models],
})
export class DbModule {}
