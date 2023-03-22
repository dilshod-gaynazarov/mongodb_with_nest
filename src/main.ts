import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    const PORT = process.env.PORT || 3000;
    const app = await NestFactory.create(AppModule);
    await app.listen(3000, () => console.log("Server listening on port " + PORT));
  } catch (error) {
    console.log(error);
  }
}
bootstrap();
