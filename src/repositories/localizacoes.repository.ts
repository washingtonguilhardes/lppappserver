import {DefaultCrudRepository} from '@loopback/repository';
import {Localizacoes, LocalizacoesRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class LocalizacoesRepository extends DefaultCrudRepository<
  Localizacoes,
  typeof Localizacoes.prototype.id,
  LocalizacoesRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Localizacoes, dataSource);
  }
}
