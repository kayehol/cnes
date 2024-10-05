export interface Unit {
  codigo_cnes: number;
  nome_razao_social: string;
  nome_fantasia: string;
  numero_cnpj: string;
  numero_telefone_estabelecimento: string;
  endereco_email_estabelecimento: string;
  codigo_estabelecimento_saude: string;
  descricao_turno_atendimento: string;
  endereco_estabelecimento: string;
  numero_estabelecimento: string;
  bairro_estabelecimento: string;
  codigo_municipio: number;
  codigo_uf: number;
  codigo_cep_estabelecimento: string;
}

export interface UnitsDTO {
  estabelecimentos: Unit[];
}
