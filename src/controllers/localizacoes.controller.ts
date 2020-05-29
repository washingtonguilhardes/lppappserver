import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Localizacoes} from '../models';
import {LocalizacoesRepository} from '../repositories';

export class LocalizacoesController {
  constructor(
    @repository(LocalizacoesRepository)
    public localizacoesRepository : LocalizacoesRepository,
  ) {}

  @post('/localizacoes', {
    responses: {
      '200': {
        description: 'Localizacoes model instance',
        content: {'application/json': {schema: getModelSchemaRef(Localizacoes)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Localizacoes, {
            title: 'NewLocalizacoes',
            exclude: ['id'],
          }),
        },
      },
    })
    localizacoes: Omit<Localizacoes, 'id'>,
  ): Promise<Localizacoes> {
    return this.localizacoesRepository.create(localizacoes);
  }

  @get('/localizacoes/count', {
    responses: {
      '200': {
        description: 'Localizacoes model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Localizacoes) where?: Where<Localizacoes>,
  ): Promise<Count> {
    return this.localizacoesRepository.count(where);
  }

  @get('/localizacoes', {
    responses: {
      '200': {
        description: 'Array of Localizacoes model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Localizacoes, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Localizacoes) filter?: Filter<Localizacoes>,
  ): Promise<Localizacoes[]> {
    return this.localizacoesRepository.find(filter);
  }

  @patch('/localizacoes', {
    responses: {
      '200': {
        description: 'Localizacoes PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Localizacoes, {partial: true}),
        },
      },
    })
    localizacoes: Localizacoes,
    @param.where(Localizacoes) where?: Where<Localizacoes>,
  ): Promise<Count> {
    return this.localizacoesRepository.updateAll(localizacoes, where);
  }

  @get('/localizacoes/{id}', {
    responses: {
      '200': {
        description: 'Localizacoes model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Localizacoes, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Localizacoes, {exclude: 'where'}) filter?: FilterExcludingWhere<Localizacoes>
  ): Promise<Localizacoes> {
    return this.localizacoesRepository.findById(id, filter);
  }

  @patch('/localizacoes/{id}', {
    responses: {
      '204': {
        description: 'Localizacoes PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Localizacoes, {partial: true}),
        },
      },
    })
    localizacoes: Localizacoes,
  ): Promise<void> {
    await this.localizacoesRepository.updateById(id, localizacoes);
  }

  @put('/localizacoes/{id}', {
    responses: {
      '204': {
        description: 'Localizacoes PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() localizacoes: Localizacoes,
  ): Promise<void> {
    await this.localizacoesRepository.replaceById(id, localizacoes);
  }

  @del('/localizacoes/{id}', {
    responses: {
      '204': {
        description: 'Localizacoes DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.localizacoesRepository.deleteById(id);
  }
}
