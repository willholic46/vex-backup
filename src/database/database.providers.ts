import { DataSource } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: '192.168.2.2',
        port: 3306,
        username: 'vex.backup',
        password: 'VexPasswd1@',
        database: 'vex_backup',
        entities: [__dirname + '/../**/*.entity.{ts,js}'],
        namingStrategy: new SnakeNamingStrategy(),
        synchronize: false,
      });

      return dataSource.initialize();
    },
  },
];
