import { Episode } from './episode.model';
import { prop, modelOptions, arrayProp, Ref } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Course {
  @ApiProperty({ description: '课程名称' })
  @prop()
  name: string;

  @ApiProperty({ description: '封面图' })
  @prop()
  cover: string;

  // @ApiProperty({ description: '封面图' })
  @arrayProp({ itemsRef: 'Episode' })
  episodes: Ref<Episode>[];
}
