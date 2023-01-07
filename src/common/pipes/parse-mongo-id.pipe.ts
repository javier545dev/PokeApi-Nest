import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  BadRequestException,
} from '@nestjs/common'
import { isValidObjectId } from 'mongoose'

@Injectable()
export class ParseMongoIdPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    console.log({ metadata })
    if (!isValidObjectId(value)) {
      throw new BadRequestException(`Invalid Mongo ID: ${value}`)
    }
    return value
  }
}
