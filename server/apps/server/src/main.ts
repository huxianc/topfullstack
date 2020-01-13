import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 允许跨域
  app.enableCors();

  const options = new DocumentBuilder()
    .setTitle('全栈之巅-前端API')
    .setDescription('供网站和APP调用的API')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  const PORT = process.env.SERVER_PORT || 3001;

  console.log(`http://localhost:${PORT}/api-docs`);
  await app.listen(PORT);
}
bootstrap();
