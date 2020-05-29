import { Entity, model, property } from '@loopback/repository';

@model({ settings: { strict: false } })
export class Localizacoes extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  nome: string;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Localizacoes>) {
    super(data);
  }
}

export interface LocalizacoesRelations {
  // describe navigational properties here
}

export type LocalizacoesWithRelations = Localizacoes & LocalizacoesRelations;
