on("chat:message", function(msg) {
    var styleTh = "style='border: 1px solid black;'";
    var styleHits = "style='color:green;'";
    var styleFailure = "style='color:red;'";
    var styleCont = "style='color:purple'";
    var stylePerf = "style='color:orange'";
    var styleCort = "style='color:red'";
    var styleMag = "style='color:blue'";
  
    const criticalsHit = [
      {id :1, criticalType:[{ type: 'contusao', typeDescription: 'Contusão', title: 'Traqueia Esmagada', description: 'o alvo fica incapacitado(lj p.288), não pode falar e respirar, até o início de seu próximo turno.' },
  { type: 'perfuracao', typeDescription: 'Perfuração', title: 'Mão Perfurada', description: 'o alvo solta um item que tiver segurando. Esse membro não pode ser usado, até o início de seu próximo turno.' },
  { type: 'cortante', typeDescription: 'Cortante', title: 'Testa Cortada', description: 'o alvo fica cego (ldj p.287), até o início de seu próximo turno.' },
  { type: 'magico', typeDescription: 'Mágico', title: 'Vunerabilidade Mágica', description: 'o alvo tem vulnerabilidade a dano mágico (ldj p.197), até o próximo turno início de seu próximo turno.' }],
  },
  {id :2, criticalType:[{ type: 'contusao', typeDescription: 'Contusão', title: 'Pancada na Barriga', description: 'o alvo não consegue se alimentar ou ingerir líquidos, até receber tratamento.' },
  { type: 'perfuracao', typeDescription: 'Perfuração', title: 'Clático Pinçado', description: 'o alvo faz um teste de resistência de constituição CD 15. Se falhar, fica impedido (ldj p.288), até receber tratamento.' },
  { type: 'cortante', typeDescription: 'Cortante', title: 'Coluna Machucada', description: 'o alvo fica caído (ldj p.287), não podendo levantar, até receber tratamento.' },
  { type: 'magico', typeDescription: 'Mágico', title: 'Vunerabilidade Mágica', description: 'o alvo tem seu tamanho reduzido, como na magia Aumentar/Reduzir (ldj p.217), até receber tratamento.' }],},
  {id :3, criticalType:[{ type: 'contusao', typeDescription: 'Contusão', title: 'Ombro Deslocado', description: 'o alvo não pode realizar um Encontrão, até receber tratamento.' },
  { type: 'perfuracao', typeDescription: 'Perfuração', title: 'Pulmão Perfurado', description: 'o alvo adquire 2 níveis de exaustão (ldj p. 288), que podem ser removidos com tratamento.' },
  { type: 'cortante', typeDescription: 'Cortante', title: 'Artéria Cortada', description: 'o alvo faz um teste de resistência de constituição CD 15. Se falhar, sofre dano igual a metade dos pontos de vida restantes.' },
  { type: 'magico', typeDescription: 'Mágico', title: 'Afeto Mágico', description: 'o alvo fica enfeitiçado (ldj p. 288) por você, até o início de seu próximo turno.' }],},
  {id :4, criticalType:[{ type: 'contusao', typeDescription: 'Contusão', title: 'Enxergando Estrelas', description: 'o alvo fica com sensibilidade á luz, desvantagem em jogadas de ataques e testes de sabedoria (percepção), até o fim do encontro.' },
  { type: 'perfuracao', typeDescription: 'Perfuração', title: 'Bem no Nervo', description: 'o alvo fica atordoado (ldj p. 287) até o início de seu próximo turno.' },
  { type: 'cortante', typeDescription: 'Cortante', title: 'Cicatriz no Rosto', description: 'o alvo tem desvantagem em teste de carisma (persuasão) e vantagen en testes de carisma (intimidação), até receber tratamento.' },
  { type: 'magico', typeDescription: 'Mágico', title: 'Transposição', description: 'o alvo troca de lugar com você.' }],},
  {id :5, criticalType:[{ type: 'contusao', typeDescription: 'Contusão', title: 'Pancada na Têmpora', description: 'o alvo fica inconsciente (ldj p. 288), até o início de seu próximo turno.' },
  { type: 'perfuracao', typeDescription: 'Perfuração', title: 'Fragmentos Alojados', description: 'o alvo apenas consegue recuperar pontos de vida magicamente, até realizar um descanso curto ou longo.' },
  { type: 'cortante', typeDescription: 'Cortante', title: 'Fatiado', description: 'o alvo não pode adicionar sues modificadores de habilidade nas jogadas, até receber tratamento.' },
  { type: 'magico', typeDescription: 'Mágico', title: 'Lobotomia Arcana', description: 'o alvo muda a sua tendência para leal ou caótico. Se o alinhamento original for neutro, a mudança é aleatória.' }],},
  {id :6, criticalType:[{ type: 'contusao', typeDescription: 'Contusão', title: 'Treme Terra', description: 'o local do alvo e todas área ao redor dele, de até 1,5m (1 quadrado), se torna terreno difícil.' },
  { type: 'perfuracao', typeDescription: 'Perfuração', title: 'Barriga Perfurada', description: 'o alfo sofre -1 de penalidade em todas as jogadas, até receber tratamento.' },
  { type: 'cortante', typeDescription: 'Cortante', title: 'Corte no Nervo', description: 'o alvo sofre -1 de penalidade na CA, até  receber tratamento.' },
  { type: 'magico', typeDescription: 'Mágico', title: 'Descontrole', description: 'o alvo realiza um ataque de oportunidade contra um aliado dele, escolhido aleatoriamente.' }],},
  {id :7, criticalType:[{ type: 'contusao', typeDescription: 'Contusão', title: 'Impacto Profundo', description: 'o alvo sofre 1 ponto de dano por nível de personagem seu, ou nível de desafio (mínimo 1), que é causado por um objeto do ambiente da cena.' },
  { type: 'perfuracao', typeDescription: 'Perfuração', title: 'Língua Perfurada', description: 'o alvo passa a falar com a língua entre os dentes, até receber tratamento.' },
  { type: 'cortante', typeDescription: 'Cortante', title: 'Adrenalina', description: 'e você tem +1 em jogadas de ataque, até o fim do encontro. Então perca 1 dado de vida ou sofra 1 nível de exaustão (ldj p. 288).' },
  { type: 'magico', typeDescription: 'Mágico', title: 'Confusão', description: 'a próxima jogada de ataque do alvo é feita contra uma criatura aleatória.' }],},
  {id :8, criticalType:[{ type: 'contusao', typeDescription: 'Contusão', title: 'Hematoma', description: 'o alvo sofre -2 de penalidade nas jogadas que utilizam força, até receber tratamento.' },
  { type: 'perfuracao', typeDescription: 'Perfuração', title: 'Atravessado', description: 'e outro alvo, localizado atrás e adjacente a esse, pode sofrer metade do dano crítico.' },
  { type: 'cortante', typeDescription: 'Cortante', title: 'Corte Comprido', description: 'o alvo sofre 1 ponto de dano por nível de personagem seu, ou nível de desafio (mínimo 1), e deixa cair algo preso por cordas, tiras ou alças.' },
  { type: 'magico', typeDescription: 'Mágico', title: 'Mudança de Personalidade', description: 'o alvo escolhe entre ter um traço de personalidade substituído por outro ou sofre 5(1d10) pontos de dano psíquico.' }],},
  {id :9, criticalType:[{ type: 'contusao', typeDescription: 'Contusão', title: 'Costelas Quebradas', description: 'o alvo sofre -2 de penalidade nas jogadas que utilizam força, até realizar um descanso curto ou longo.' },
  { type: 'perfuracao', typeDescription: 'Perfuração', title: 'Pregado no Lugar', description: 'o alvo fica impedido (ldj p. 288), até ser bem sucedido em um teste de força (atletismo) CD 15.' },
  { type: 'cortante', typeDescription: 'Cortante', title: 'Reação Alérgica', description: 'o alvo faz um teste de resistência de constituição CD 10. Se falhar, fica envenenado (ldj p. 288), até receber tratamento.' },
  { type: 'magico', typeDescription: 'Mágico', title: 'Descarga Cerebral', description: 'o alvo muda a sua tendência para bom ou mal. Se o alinhamento original for neutro, a mudança é aleatória.' }],},
  {id :10, criticalType:[{ type: 'contusao', typeDescription: 'Contusão', title: 'Beijando o Chão', description: 'o alvo fica caído (ldj p.287).' },
  { type: 'perfuracao', typeDescription: 'Perfuração', title: 'Coluna Perfurada', description: 'o alvo faz um teste de resistência de constituição CD 10. Se falhar, fica inconsciente (ldj p. 288), até receber tratamento.' },
  { type: 'cortante', typeDescription: 'Cortante', title: 'Corte Dilacerante', description: 'o deslocamento do alvo cai para 0. Qualquer jogada envolvendo força é uma falha, até o início de seu próximo turno.' },
  { type: 'magico', typeDescription: 'Mágico', title: 'Efeito Máximo', description: 'com todas as variáveis da magia maximizadas.' }],},
  {id :11, criticalType:[{ type: 'contusao', typeDescription: 'Contusão', title: 'Fibrilação Atrial', description: 'o alvo fica paralisado (ldj p. 289), até o início de seu próximo turno.' },
  { type: 'perfuracao', typeDescription: 'Perfuração', title: 'Perna Perfurada', description: 'e outro alvo tem seu deslocamento reduzido á metade, até receber tratamento.' },
  { type: 'cortante', typeDescription: 'Cortante', title: 'Golpe Amplo', description: 'e outro alvo adjacente a você pode sofre metade do dano crítico.' },
  { type: 'magico', typeDescription: 'Mágico', title: 'Brilho Arcano', description: 'o alvo brilha, emitindo luz como uma tocha, até realizar um descanso curto ou longo.' }],},
  {id :12, criticalType:[{ type: 'contusao', typeDescription: 'Contusão', title: 'Lesão Cerebral', description: 'o alvo perder 1d8 dias de memória, junto de todos os benefícios do seu antecedente, até realizar um descanso longo.' },
  { type: 'perfuracao', typeDescription: 'Perfuração', title: 'Farpas na Pele', description: 'o alvo fica envenenado (ldj p. 288), até o início de seu próximo turno.' },
  { type: 'cortante', typeDescription: 'Cortante', title: 'Escalpelado', description: 'o alvo sofre -2 de penalidade nas jogadas que utilizam carisma, até receber tratamento.' },
  { type: 'magico', typeDescription: 'Mágico', title: 'Aura de proteção', description: 'e você tem +2 de bõnus na CA, até o início de seu próximo turno.' }],},
  {id :13, criticalType:[{ type: 'contusao', typeDescription: 'Contusão', title: 'Lobo Temporal Danificado', description: 'o alvo passa a escutar todas as frases sendo pronunciadas de trás para frente, até receber tratamento.' },
  { type: 'perfuracao', typeDescription: 'Perfuração', title: 'Enterrada nas Costas', description: 'o alvo fica incapacitado (ldj p. 288), até o início de seu próximo turno.' },
  { type: 'cortante', typeDescription: 'Cortante', title: 'Garganta Cortada', description: 'o alvo faz um teste de resistência de constituição CD 15. Se falhar, não pode falar ou respirar (ldj p. 183), até receber tratamento.' },
  { type: 'magico', typeDescription: 'Mágico', title: 'Telepata', description: 'e você pode se comunicar telepaticamente, até realizar um descanso longo.' }],},
  {id :14, criticalType:[{ type: 'contusao', typeDescription: 'Contusão', title: 'Vista Borrada', description: 'o alvo não é mais capaz de ler, até receber tratamento.' },
  { type: 'perfuracao', typeDescription: 'Perfuração', title: 'Perito Atravessado', description: 'o alvo fica amedrontado por você (ldj p. 287), até o início de seu próximo turno.' },
  { type: 'cortante', typeDescription: 'Cortante', title: 'Tirou do Sério', description: 'o alvo sofre -3 de penalidade nas jogadas que utilizam sabedoria, até o início de seu próximo turno.' },
  { type: 'magico', typeDescription: 'Mágico', title: 'Super Visão', description: ' e você fica com visão de raio-x, até realizar um descanso curto ou longo. O poder de penetração é igual á Magia detectar magia (ldj p. 235).' }],},
  {id :15, criticalType:[{ type: 'contusao', typeDescription: 'Contusão', title: 'Audição Prejudicada!', description: 'o alvo faz um teste de resistência de constituição CD10. Se falhar, tem desvantagem em testes de sabedoria (percepção) na audição.' },
  { type: 'perfuracao', typeDescription: 'Perfuração', title: 'Sem Noção', description: 'o alvo se torna muito extrovertido até, receber tratamento.' },
  { type: 'cortante', typeDescription: 'Cortante', title: 'Ira de Sangue', description: 'o alvo não sabe mais distinguir o vivo do morto, até receber tratamento.' },
  { type: 'magico', typeDescription: 'Mágico', title: 'Contato Idiomático', description: 'e você consegue se cominicar com o alvo usando o mesmo idioma dele, até realizar um descanso longo.' }],},
  {id :16, criticalType:[{ type: 'contusao', typeDescription: 'Contusão', title: 'Deficiência Visual', description: 'e o alvo fica com visão normal. Caso ele já possua essa visão, fica cego (ldj p. 287), até receber tratamento.' },
  { type: 'perfuracao', typeDescription: 'Perfuração', title: 'Cacete de Agulha', description: 'o alvo se torna muito introvertido, até receber tratamento.' },
  { type: 'cortante', typeDescription: 'Cortante', title: 'Olho por Olho', description: 'o alvo só pode atacar você, até ele consguir te causar essa mesma quantidade de dano, até o fim do encontro.' },
  { type: 'magico', typeDescription: 'Mágico', title: 'Magia Vampírica', description: 'e você recupera a metade do dando causado em pontos de vida.' }],},
  {id :17, criticalType:[{ type: 'contusao', typeDescription: 'Contusão', title: 'Miopia Severa', description: 'o alvo enxerga até uma distância máxima igual á metade de seu deslocamento, até receber tratamento.' },
  { type: 'perfuracao', typeDescription: 'Perfuração', title: 'Dor Agoniante', description: 'o alvo fica impedido (ldj p. 288), até o início de seu próximo turno.' },
  { type: 'cortante', typeDescription: 'Cortante', title: 'Fatigado', description: 'o alvo pode apenas realizar uma ação ou se mover, até o fim do encontro.' },
  { type: 'magico', typeDescription: 'Mágico', title: 'Lentificado', description: 'o alvo fica lento como na Magia Lentidão (ldj p. 250), até o início de seu próximo turno.' }],},
  {id :18, criticalType:[{ type: 'contusao', typeDescription: 'Contusão', title: 'Dano em Cadeia', description: 'e 1/4 do dano em todos as criaturas inimigas adjacentes ao alvo.' },
  { type: 'perfuracao', typeDescription: 'Perfuração', title: 'Perfuração Profunda', description: 'o alvo faz um teste de resistência de constituição CD 15. Se falhar, só pode mover ou executar uma ação, até receber tratamento.' },
  { type: 'cortante', typeDescription: 'Cortante', title: 'Perda de Compostura', description: 'e o alvo sofre -2 de penalidade nas jogadas que utilizam sabedoria, até realizar um descanso curto ou longo.' },
  { type: 'magico', typeDescription: 'Mágico', title: 'Dobra Planar', description: 'e você pode se teleportar a uma distância de até seu descolamento.' }],},
  {id :19, criticalType:[{ type: 'contusao', typeDescription: 'Contusão', title: 'Resistência Baixa', description: 'o alvo faz um teste de resistência de Constituição CD 15. Se falhar, perde todas suas resistência naturais a dano, até receber tratamento.' },
  { type: 'perfuracao', typeDescription: 'Perfuração', title: 'Buraco no Corpo', description: 'o alvo sofre -2 de penalidade nas jogadas que utilizam Carisma, até realizar um descanso curto ou longo.' },
  { type: 'cortante', typeDescription: 'Cortante', title: 'Talho no Braço', description: 'o alvo sofre -2 de penalidade nas jogadas que utilizam Destreza, até receber tratamento.' },
  { type: 'magico', typeDescription: 'Mágico', title: 'Vórtex Temporal', description: 'o alvo desaparece. Ele reaparece no espaço desocupado mais próximo ao local em que estava no iníxio de seu próximo turno.' }],},
  {id :20, criticalType:[{ type: 'contusao', typeDescription: 'Contusão', title: 'Desorientado', description: 'e no início do turno do alvo, o mesmo gasta todo seu movimento em direção á criatura mais próxima.' },
  { type: 'perfuracao', typeDescription: 'Perfuração', title: 'Ombro Ferido', description: 'o alvo tem desvantagem em todas as jogadas que usam um braço, até receber tratamento.' },
  { type: 'cortante', typeDescription: 'Cortante', title: 'Tripas de Fora', description: 'o alvo faz um teste de resistência de constituição CD 15. Se falhar, fica amedrontado por você (ldj p. 287), até receber tratamento.' },
  { type: 'magico', typeDescription: 'Mágico', title: 'Conduíte', description: 'e você tem +1 de bônus na CD para suas magias e modificador de ataque de magia, até o fim do encontro.' }],},
  {id :21, criticalType:[{ type: 'contusao', typeDescription: 'Contusão', title: 'Pancada na Cabeça', description: 'o alvo sofre -3 de penalidade nas jogadas que utilizam inteligência, até o início de seu próximo turno.' },
  { type: 'perfuracao', typeDescription: 'Perfuração', title: 'Contração Muscular', description: 'o alvo sofre dano igual ao dano da arma que ele está segurando.' },
  { type: 'cortante', typeDescription: 'Cortante', title: 'Pedaço Arrancado', description: 'e outro inimigo, que pode te ver, fica marcado, até o início de seu próximo turno.' },
  { type: 'magico', typeDescription: 'Mágico', title: 'Pancada Mágica', description: 'o algo faz um teste de resistência de constituição CD 15. Se falhar, fica atordoado (ldj p. 287), até o início de seu próximo turno.' }],},
  {id :22, criticalType:[{ type: 'contusao', typeDescription: 'Contusão', title: 'Guarda Baixa', description: 'o alvo não adiciona o modificador da destreza na CA dele e qualquer teste de destreza é uma falha, até o início de seu próximo turno.' },
  { type: 'perfuracao', typeDescription: 'Perfuração', title: 'Cravado na Cabeça', description: 'o alvo sofre -2 de penalidade nas jogadas que utilizam inteligência, até realizar um descanso curto ou longo.' },
  { type: 'cortante', typeDescription: 'Cortante', title: 'Sacrifício', description: 'você pode fazer outro ataque. Se o fizer você cai para 0 pontos de vida no final do seu turno.' },
  { type: 'magico', typeDescription: 'Mágico', title: 'Cãibra Arcana', description: 'o alvo faz um teste de resistência de constituição CD 15. Se falhar, fica paralisado (ldj p. 289), até receber tratamento.' }],},
  {id :23, criticalType:[{ type: 'contusao', typeDescription: 'Contusão', title: 'Interioro Exposto', description: 'e as imunidades a dano do alvo agora se tornam resistência a dano (ldj p. 197), até o início de seu próximo turno.' },
  { type: 'perfuracao', typeDescription: 'Perfuração', title: 'Ponto Cego', description: 'você fica invisível para o alvo (ldj p. 289), até o início de seu próximo turno.' },
  { type: 'cortante', typeDescription: 'Cortante', title: 'Osso Lascado', description: 'o alvo faz um teste de resistência de constituição CD 15. Se falhar, não pode realizar ações bônus e reações, até receber tratamento.' },
  { type: 'magico', typeDescription: 'Mágico', title: 'Magia Pegajosa', description: 'o alvo faz um teste de resistência de destreza CD 20. Se falhar, não pode falar até receber tratamento.' }],},
  {id :24, criticalType:[{ type: 'contusao', typeDescription: 'Contusão', title: 'Falta de Ar ', description: 'o alvo sofre -2 de penalidade nas jogadas que utilizam constituição, até realizar um descanso curto ou longo.' },
  { type: 'perfuracao', typeDescription: 'Perfuração', title: 'Punhaladas', description: 'o alvo faz um teste de resistência de constituição CD 15. Se falhar, provoca um ataque de oportunidade de você.' },
  { type: 'cortante', typeDescription: 'Cortante', title: 'Em sequência', description: 'se você se mover, pode fazer outra joga de ataque com desvantagem contra qualquer criatura.' },
  { type: 'magico', typeDescription: 'Mágico', title: 'Barreira Mágica', description: 'você tem imunidade a dano de energia e psíquico, até o início de seu próximo turno.' }],},
  {id :25, criticalType:[{ type: 'contusao', typeDescription: 'Contusão', title: 'Trauma Abdominal', description: 'o alvo não pode mais realizar um esquivar (ldj p. 192), até receber tratamento.' },
  { type: 'perfuracao', typeDescription: 'Perfuração', title: 'Rim Perfurado', description: ' o alvo não consegue realizar um descanso curto ou longo, até receber tratamento.' },
  { type: 'cortante', typeDescription: 'Cortante', title: 'Corte Profundo', description: 'o alvo sofre -2 de penalidade nas jogadas que utilizam constituição, até receber tratamento.' },
  { type: 'magico', typeDescription: 'Mágico', title: 'Fé Mágica', description: 'você tem imunidade a dano necrótico e radiante, até o início de seu próximo turno.' }],},
  {id :26, criticalType:[{ type: 'contusao', typeDescription: 'Contusão', title: 'Marretando', description: 'aliados adjacentes a você têm +1 de bônus nas jogadas de ataque corpo a corpo, até o fim do encontro.' },
  { type: 'perfuracao', typeDescription: 'Perfuração', title: 'Estocada no Peito', description: 'o alvo sofre 1 nível de exaustão e perde 1 dado de vida (ldj p. 288). Caso não haja dados de vida, ele sofre 5 (1d10) pontos de dano.' },
  { type: 'cortante', typeDescription: 'Cortante', title: 'A Sorte Está ao Seu Lado', description: 'a próxima vez que você for alvo de uma jogada de ataque, que resultar em 10 ou menos natural, trate-o como sendo uma Falha Crítica.' },
  { type: 'magico', typeDescription: 'Mágico', title: 'Fitomágica', description: 'você tem imunidade a dano ácido e veneno, até o início de seu próximo turno.' }],},
  {id :27, criticalType:[{ type: 'contusao', typeDescription: 'Contusão', title: 'Ossos Quebrados', description: 'o alvo faz um teste de resistência de força CD 15. Se falar, fica caído e não pode se levantar (ldj p. 287), até receber tratamento.' },
  { type: 'perfuracao', typeDescription: 'Perfuração', title: 'Estocada nas Costas', description: 'o alvo sofre dano igual ao seu bônus de proficiência.' },
  { type: 'cortante', typeDescription: 'Cortante', title: 'Jugular nas Costas', description: 'o alvo não consegue recuperar pontos de vida, até realizar um descanso curto ou longo.' },
  { type: 'magico', typeDescription: 'Mágico', title: 'Raio da Mentira', description: 'o alvo se torna um mentiroso compulsivo, até receber tratamento.' }],},
  {id :28, criticalType:[{ type: 'contusao', typeDescription: 'Contusão', title: 'Pancada da Indecência', description: 'o alvo sofre -3 de penalidade nas jogadas que utilizam carisma, até o início de seu próximo turno.' },
  { type: 'perfuracao', typeDescription: 'Perfuração', title: 'Estocadas no Nariz', description: 'o alvo tem desvantagem em teste de sabedoria (percepção) relacionados ao olfato, até receber tratamento.' },
  { type: 'cortante', typeDescription: 'Cortante', title: 'Corte em X', description: 'você ataca novamente o mesmo alvo com desvantagem, com a mesma arma.' },
  { type: 'magico', typeDescription: 'Mágico', title: 'Escudo Elemental', description: 'você tem imunidade a dano elemental (ácido, elétrico, fogo, frio, e trovejante), até o início de seu próximo turno.' }],},
  {id :29, criticalType:[{ type: 'contusao', typeDescription: 'Contusão', title: 'Nocaute', description: 'o alvo faz um teste de resitência de constituição CD 10. Se falhar, fica inconsciente (ldj p. 288), até receber tratamento.' },
  { type: 'perfuracao', typeDescription: 'Perfuração', title: 'Impaciente', description: ' o alvo sofre -2 de penalidade nas jogadas que utilizam sabedoria, até receber tratamento.' },
  { type: 'cortante', typeDescription: 'Cortante', title: 'Braço Lesionado', description: 'o alvo não pode mais usar aquele braço, até receber tratamento.' },
  { type: 'magico', typeDescription: 'Mágico', title: 'Piscada do Basilisco', description: 'o alvo faz um teste de resistência de constituição CD 15. Se falhar, fica petrificado (ldj p. 289), até o início de seu próximo turno.' }],},
  {id :30, criticalType:[{ type: 'contusao', typeDescription: 'Contusão', title: 'Cabeça Esmagada', description: 'o alvo faz um teste de resistência de constituição CD 15. Se falhar, fica incapacitado (ldj p. 288), até receber tratamento.' },
  { type: 'perfuracao', typeDescription: 'Perfuração', title: 'No Olho', description: 'o alvo faz um teste de resistência de destreza CD 10. Se falhar, tem desvantagem em testes de sabedoria (percepção) relacionados á visão.' },
  { type: 'cortante', typeDescription: 'Cortante', title: 'Abdome Ferido', description: 'o alvo não fornece meia-cobertura, até o fim do encontro.' },
  { type: 'magico', typeDescription: 'Mágico', title: 'Atadura Poderosa', description: 'você tem imunidade a dano cortante, até o início de seu próximo turno.' }],},
  {id :31, criticalType:[{ type: 'contusao', typeDescription: 'Contusão', title: 'Órgão Esmagado', description: 'o alvo sofre dano igual à soma de seus modificadores de força e sabedoria (mínimo 2).' },
  { type: 'perfuracao', typeDescription: 'Perfuração', title: 'Estômago Perfurado', description: 'o alvo sofre 1 ponto de dano ácido por nível de personagem, seu, ou nível de desafio (mínimo 1).' },
  { type: 'cortante', typeDescription: 'Cortante', title: 'Tente me Acertar', description: 'enquanto você não se mover e não trocar de arma, pode realizar a ação esquivar com uma ação bônus (ldj p. 192), até o fim do encontro.' },
  { type: 'magico', typeDescription: 'Mágico', title: 'Magia Defletora', description: 'você tem imunidade a dano perfurante, até o início de seu próximo turno.' }],},
  {id :32, criticalType:[{ type: 'contusao', typeDescription: 'Contusão', title: 'Rótula Amassada', description: 'o alvo não pode mais quebrar seu movimento, até receber tratamento.' },
  { type: 'perfuracao', typeDescription: 'Perfuração', title: 'Sangramento Interno', description: 'o alvo sofre 1 ponto de dano de contusão por nível de personagem seu, ou nível de desafio (mínimo 1).' },
  { type: 'cortante', typeDescription: 'Cortante', title: 'Cortar e Correr', description: 'você pode realizar a ação desengajar (ldj p. 192), se tiver deslocamento sobrando.' },
  { type: 'magico', typeDescription: 'Mágico', title: 'Truque de Invisibilidade', description: 'se você não se mover, fica invisível (ldj p. 289), até o início de seu próximo turno.' }],},
  {id :33, criticalType:[{ type: 'contusao', typeDescription: 'Contusão', title: 'Hematoma', description: 'o alvo sofre dano igual ao seu modificador de força vezes dois (mínimo 2).' },
  { type: 'perfuracao', typeDescription: 'Perfuração', title: 'Super Crítico', description: 'o alvo sofre 2 pontos de dano por nível de personagem seu, ou nível de desafio (mínimo 2).' },
  { type: 'cortante', typeDescription: 'Cortante', title: 'Sangue para Todo Lado', description: 'o alvo fica amdrontado por criaturas feridas que pode ver (ldj p. 287), até o início de seu próximo turno.' },
  { type: 'magico', typeDescription: 'Mágico', title: 'Rejuvenescimento', description: 'o alvo fica mais novo, diminuindo a idade pela metade.' }],},
  {id :34, criticalType:[{ type: 'contusao', typeDescription: 'Contusão', title: 'Falta de Ar ', description: 'o alvo não pode realizar a ação ajudar (ldj p. 192), até o fim do encontro.' },
  { type: 'perfuracao', typeDescription: 'Perfuração', title: 'Embaixo da Unha', description: 'o alvo sofre dano igual ao seu modificador de destreza vezes dois (mínimo 2).' },
  { type: 'cortante', typeDescription: 'Cortante', title: 'Braço Amputado', description: 'o alvo faz um teste de resistência de constituição CD 10. Se falhar, perde um braço.' },
  { type: 'magico', typeDescription: 'Mágico', title: 'Envelhecimento', description: 'o alvo fica mais velho, dobrando a idade.' }],},
  {id :35, criticalType:[{ type: 'contusao', typeDescription: 'Contusão', title: 'Pancadão', description: 'um objeto segurado não mágico, de uma categoria de tamanho igual ou menor que a sua arma, pode ser destruído pelo seu ataque.' },
  { type: 'perfuracao', typeDescription: 'Perfuração', title: 'Vertigem', description: 'o alvo tem 50% de chance de errar seus ataques, até receber tratamento.' },
  { type: 'cortante', typeDescription: 'Cortante', title: 'Sujo de Sangue', description: 'inimigos adjacentes fazem um teste de sabedoria CD 10. Se falharem, ficam amedrontados por você (ldj p. 287), até o início de seu próximo turno.' },
  { type: 'magico', typeDescription: 'Mágico', title: 'Ossos de Borracha', description: 'você tem imunidade a dano de contusão, até o início de seu próximo turno.' }],},
  {id :36, criticalType:[{ type: 'contusao', typeDescription: 'Contusão', title: 'Porrada Motivadora', description: 'um aliado, que consegue te ver, tem uma condição removida.' },
  { type: 'perfuracao', typeDescription: 'Perfuração', title: 'Queda de Pressão', description: 'todas as jogadas de ataque do alvo causam metade do dano, até o início de seu próximo turno.' },
  { type: 'cortante', typeDescription: 'Cortante', title: 'Virilha Seccionada', description: 'o alvo não pode realizar a ação desengajar (ldj p. 192), até receber tratamento.' },
  { type: 'magico', typeDescription: 'Mágico', title: 'Zumbido Agudo', description: 'o alvo fica surdo (ldj p. 289), até o fim do encontro.' }],},
  {id :37, criticalType:[{ type: 'contusao', typeDescription: 'Contusão', title: 'Fêmur Fraturado', description: 'o alvo tem seu deslocamento reduzido pela metade e não pode saltar, até receber tratamento.' },
  { type: 'perfuracao', typeDescription: 'Perfuração', title: 'Ateque Duplo', description: 'você pode fazer outra jogada de ataque com desvantagem contra outro alvo.' },
  { type: 'cortante', typeDescription: 'Cortante', title: 'Pele Arrancada', description: 'o alvo sofre -1 de penalidade na CA e -1 de penalidade nas jogadas que utilizam carisma, até receber tratamento.' },
  { type: 'magico', typeDescription: 'Mágico', title: 'Feitiço do Amor', description: 'o alvo faz um teste de resistência de carisma CD 15. Se falhar, fica enfeitiçado por você (ldj p. 288), até receber tratamento.' }],},
  {id :38, criticalType:[{ type: 'contusao', typeDescription: 'Contusão', title: 'Ritmo de Combate', description: 'qualquer 1 natural, resultante de suas jogadas de ataque com o d20, não é uma falha crítica, até o fim do encontro.' },
  { type: 'perfuracao', typeDescription: 'Perfuração', title: 'Miolo Afetado', description: 'o alvo não pode adicionar seus modificadores de habilidade nas jogadas de ataque, até receber tratamento.' },
  { type: 'cortante', typeDescription: 'Cortante', title: 'Golpe Anão', description: 'com todos os dados de dano substituídos por d12s. Caso seus dados já sejam todos d12s, adicione 1d12 ao dano.' },
  { type: 'magico', typeDescription: 'Mágico', title: 'Força de Vontade', description: 'você recupera o uso de um traço racial ou caracteristica de classe, que só poderia ser recuperado após um descanso curto ou longo.' }],},
  {id :39, criticalType:[{ type: 'contusao', typeDescription: 'Contusão', title: 'Joelho Deslocado', description: 'o alvo sofre -3 de penalidade nas jogadas que utilizam destreza, até o início de seu próximo turno.' },
  { type: 'perfuracao', typeDescription: 'Perfuração', title: 'Dor Psicológica', description: 'o alvo sofre dano igual ao seu modificador de inteligência vezes dois (mínimo 2).' },
  { type: 'cortante', typeDescription: 'Cortante', title: 'Braço Dilacerado', description: 'o alvo solta um item que tiver segurando, e não pode usar aquele braço, até receber tratamento.' },
  { type: 'magico', typeDescription: 'Mágico', title: 'Vulnerabilidade Mágica', description: 'o alvo tem vulnerabilidade a dano mágico (ldj p.197), até o início de seu próximo turno.' }],},
  {id :40, criticalType:[{ type: 'contusao', typeDescription: 'Contusão', title: 'Sangue Espirrado', description: 'outro inimigo adjacente a você fica marcado, até o início de seu próximo turno.' },
  { type: 'perfuracao', typeDescription: 'Perfuração', title: 'Intesrino Perfurado', description: 'o alvo faz um teste de resistência de constituição CD 15. Se falhar, fica envenenado (ldj p. 288), até receber tratamento. ' },
  { type: 'cortante', typeDescription: 'Cortante', title: 'Tecido Exposto', description: 'o alvo sofre dano igual à soma de seus modificadores de força e destreza (mínimo 2).' },
  { type: 'magico', typeDescription: 'Mágico', title: 'Vulnerabilidade Física', description: 'o alvo tem vulnerabilidade a dano de contusão, perfurante e cortante (ldj p. 197), até o início de seu próximo turno.' }],},
  {id :41, criticalType:[{ type: 'contusao', typeDescription: 'Contusão', title: 'Tíbia Quebrada', description: 'o alvo não pode realizar a ação disparada (ldj p. 192), até receber tratamento.' },
  { type: 'perfuracao', typeDescription: 'Perfuração', title: 'Fraqueza Temporária', description: 'todo dano que o alvo causar é reduzido pela metade, até o início de seu próximo turno.' },
  { type: 'cortante', typeDescription: 'Cortante', title: 'Preso na Lâmina', description: 'se o alvo for de uma categoria de tamanho igual ou menor que a sua, fica agarrado (ldj p. 287). Soltar a arma encerra essa condição.' },
  { type: 'magico', typeDescription: 'Mágico', title: 'Resistência Física', description: 'e você tem resistência a dano de contusão, perfurante e cortante (ldj p. 197), até o início de seu próximo turno.' }],},
  {id :42, criticalType:[{ type: 'contusao', typeDescription: 'Contusão', title: 'Miolo Solto', description: 'o alvo se esquece aleatoriamente de um idioma que conhece, até realizar um descanso longo.' },
  { type: 'perfuracao', typeDescription: 'Perfuração', title: 'Testa Marcada', description: 'o alvo fica marcado, até o início de seu próximo turno.' },
  { type: 'cortante', typeDescription: 'Cortante', title: 'Investida Intimidadora', description: 'o alvo não consegue te atacar, até o início de seu próximo turno.' },
  { type: 'magico', typeDescription: 'Mágico', title: 'Resistência Mágica', description: 'você tem resistência a dano mágico (ldj p. 197), até o início de seu próximo turno.' }],},
  {id :43, criticalType:[{ type: 'contusao', typeDescription: 'Contusão', title: 'Roxo de Pancada', description: 'o alvo faz um teste de resistência de destreza CD 15. Se falhar, fica marcado, até receber tratamento.' },
  { type: 'perfuracao', typeDescription: 'Perfuração', title: 'Entre as Costelas', description: 'a próxima jogada de ataque com o d20, que resultar em 16 ou mais, é um acerto crítico.' },
  { type: 'cortante', typeDescription: 'Cortante', title: 'Dedos Decepados', description: 'o alvo sofre -1 de penalidade em teste de força (atletismo).' },
  { type: 'magico', typeDescription: 'Mágico', title: 'Sensibilidade Auditiva', description: 'o alvo tem Vulnerabilidade a dano trovejante (ldj p. 197), até receber tratamento.' }],},
  {id :44, criticalType:[{ type: 'contusao', typeDescription: 'Contusão', title: 'Hemorragia Interna', description: 'o próximo descanso curto do alvo apenas recupera metade dos pontos de vida dele, com os dados de vida gastos.' },
  { type: 'perfuracao', typeDescription: 'Perfuração', title: 'Nervo Pinçado', description: 'o alvo nunca pode ter vantagem, até realizar um descanso curto ao longo.' },
  { type: 'cortante', typeDescription: 'Cortante', title: 'Orelha Amputada', description: 'o alvo sofre -1 de penalidade em teste de carisma (persuasão) e tem +1 de bônus em teste de carisma (intimidação).' },
  { type: 'magico', typeDescription: 'Mágico', title: 'Tratamento de Choque', description: 'o alvo escolhe entre ter um defeito substituído por outro ou sofre 5(1d10) pontos de dano psíquico.' }],},
  {id :45, criticalType:[{ type: 'contusao', typeDescription: 'Contusão', title: 'Empolgado', description: 'você tem uma ação bônus extra, até o fim do seu turno.' },
  { type: 'perfuracao', typeDescription: 'Perfuração', title: 'Até o Cabo', description: 'se optar por soltar a sua arma, pode realizar um novo ataque contra o mesmo alvo. A arma permanece presa no alvo, até ser removida.' },
  { type: 'cortante', typeDescription: 'Cortante', title: 'Nariz Arrancado', description: 'o alvo sofre -3 de penalidade em teste de carisma (persuasão) e tem +3 de bônus em teste de carisma (intimidação).' },
  { type: 'magico', typeDescription: 'Mágico', title: 'Recarga Mágica', description: 'o espaço de sua magia não é gasto.' }],},
  {id :46, criticalType:[{ type: 'contusao', typeDescription: 'Contusão', title: 'Dedão Esmagado', description: 'o alvo tem desvantagem em jogadas de ataque físico, até o início de seu próximo turno. ' },
  { type: 'perfuracao', typeDescription: 'Perfuração', title: 'Antecipação', description: 'você pode usar uma ação bônus para realizar a ação preparar (ldj p. 193).' },
  { type: 'cortante', typeDescription: 'Cortante', title: 'Corte Limpo', description: 'você recebe inspiração.' },
  { type: 'magico', typeDescription: 'Mágico', title: 'Terreno Deformado', description: 'todo o terreno onde a magia atingiu é considerado terreno difícil.' }],},
  {id :47, criticalType:[{ type: 'contusao', typeDescription: 'Contusão', title: 'Pé Esmagado', description: 'o alvo faz um teste de resistência de cosntituição CD 15. se falhar, tem seu deslocamento reduzido pela metade, até receber tratamento.' },
  { type: 'perfuracao', typeDescription: 'Perfuração', title: 'Furada Profunda', description: 'o alvo sofre -2 de penalidade nas jogadas que utilizam destreza, até realizar um descanso curto ou longo.' },
  { type: 'cortante', typeDescription: 'Cortante', title: 'Cheiro de Sangue', description: 'uma criatura que você pode ver recebe inspiração.' },
  { type: 'magico', typeDescription: 'Mágico', title: 'Pulso Mágico', description: 'o alvo é empurrado 3 metros para trás (2 quadrados) e fica caído (ldj p. 287).' }],},
  {id :48, criticalType:[{ type: 'contusao', typeDescription: 'Contusão', title: 'Derrame Ocular', description: 'o alvo faz um teste de resistência de constituição Cd 15. Se falhar, fica cego (ldj p. 287), até receber tratamento.' },
  { type: 'perfuracao', typeDescription: 'Perfuração', title: 'Cravada nas Costas', description: 'o alvo sofre -3 de penalidade nas jogadas que utilizam força, até o início de seu próximo turno.' },
  { type: 'cortante', typeDescription: 'Cortante', title: 'Perna Decepada', description: 'o alvo faz um teste de resistência de constituição CD 10. Se falhar, perde uma perna e tem seu deslocamento reduzido pela metade.' },
  { type: 'magico', typeDescription: 'Mágico', title: 'Sobrevida Arcana', description: 'você ganha pontos de vida temporários igual ao dobro do seu nível de personagem ou nível de desafio (mínimo 2).' }],},
  {id :49, criticalType:[{ type: 'contusao', typeDescription: 'Contusão', title: 'Joelho Destruído', description: 'o alvo tem seu deslocamento reduzido em 3 metros (2 quadrados), até receber tratamento.' },
  { type: 'perfuracao', typeDescription: 'Perfuração', title: 'Rosto Retalhado', description: 'o alvo sofre -3 de penalidade em testes de carisma (persuasão) e tem +3 de bônus em teste de carisma (intimidação), até receber tratamento.' },
  { type: 'cortante', typeDescription: 'Cortante', title: 'Tendão Rompido', description: 'a iniciativa do alvo é sempre igual a 0, até receber tratamento.' },
  { type: 'magico', typeDescription: 'Mágico', title: 'Magia Perfurante', description: 'o alvo automaticamente falha no teste de resistência da magia, ou sua magia é conjurada como se fosse de um nível superior.' }],},
  {id :50, criticalType:[{ type: 'contusao', typeDescription: 'Contusão', title: 'Enxaqueca', description: 'o alvo faz um teste de resistência de constituição CD 15. Se falhar, faz jogadas de ataque à distância com desvantagem, até receber tratamento.' },
  { type: 'perfuracao', typeDescription: 'Perfuração', title: 'Fígado Perfurado', description: 'durante o próximo descanso longo do alvo, ele apenas recupera metade dos pontos de vida perdidos.' },
  { type: 'cortante', typeDescription: 'Cortante', title: 'No calor da Batalha', description: 'e a próxima jogada de ataque como o d20, que resultar em 11 ou mais, é um Acerto Crítico.' },
  { type: 'magico', typeDescription: 'Mágico', title: 'Magia de Sangue', description: 'o alvo sofre 1 pode de dano para cada 2 pontos de dando que você sofre agora. Se o fizer você adiquire 1 nível de exaustão (ldj p. 288).' }],},
  {id :51, criticalType:[{ type: 'contusao', typeDescription: 'Contusão', title: 'Dentes Perdidos', description: 'o alvo faz um teste de resistência de constituição CD 15. Se falhar, sofre -1 de penalidade em teste de carisma (persuasão).' },
  { type: 'perfuracao', typeDescription: 'Perfuração', title: 'Sede de Sangue', description: 'e você pode fazer outra jogada de ataque com desvantagem, ou mover seu deslocamento.' },
  { type: 'cortante', typeDescription: 'Cortante', title: 'Corte Doloroso', description: 'o alvo só pode realizar sua ação ou mover seu deslocamento, ate receber tratamento.' },
  { type: 'magico', typeDescription: 'Mágico', title: 'Alteração Mental', description: 'o alvo escolhe entre ter um ideal substituído por outro ou sofre 5(1d10) pontos de dano psíquico.' }],},
  {id :52, criticalType:[{ type: 'contusao', typeDescription: 'Contusão', title: 'Galo na Cabeça', description: 'o alvo sofe -2 de penalidade nas jogadas que utilizam inteligência, até receber tratamento.' },
  { type: 'perfuracao', typeDescription: 'Perfuração', title: 'Ferimento Interno', description: 'o alvo faz um teste de resistência de cosntituição CD 15. Se falhar, não pode realizar ações bônus ou reações, até realizar um descanso curto.' },
  { type: 'cortante', typeDescription: 'Cortante', title: 'Ferida Aberta', description: 'o máximo de pontos de vida do alvo é reduzio em um valor igual ao dano sofrido. Essa redução dura até o alvo terminar um descanso curto.' },
  { type: 'magico', typeDescription: 'Mágico', title: 'Reconexão Neural', description: 'o alvo escolhe entre ter uma ligação substituída por outra ou sofre 5 (1d10) pontos de dando psíquico.' }],},
  
  ];
  
    const criticalFailure = [
          {
              id : 1, 
              criticalType:[{ type: "melee", typeDescription: "Corpo a Corpo", title: "Ofensa Coletiva", description: "faça um teste de Carisma CD 15. Se falar, fica marcado, até que o alvo esteja morto, derrotado, ou for a do seu alcance." },
                           { type: "range", typeDescription: "Distância", title: "Má Pontaria", description: "Uma criatura aleatória mais distante do alvo se torna o novo alvo. Faça uma jogada de ataque contra ela." },
                           { type: "natural", typeDescription: "Natural", title: "Enjoado", description: "Você fica envenenado (ldj p. 288), até o fim do encontro." },
                           { type: "magic", typeDescription: "Mágico", title: "Fenda Mágica", description: "Você é teleportado para o local mais próximo adjacente ao alvo." }]
          },
          {
              id : 2, 
              criticalType:[{ type: 'melee', typeDescription: 'Corpo a Corpo', title: 'Pulso Torcido', description: 'Suas jogadas de ataque corpo a corpo perdem o bônus de proeficiência, até o fim do encontro.' },
                            { type: 'range', typeDescription: 'Distância', title: 'Atrapalhado', description: 'Toda sua munição cai no chão.' },
                            { type: 'natural', typeDescription: 'Natural', title: 'Guarda Baixa', description: 'A próxima jogada de ataque realizada contra você tem vantagem.' },
                            { type: 'magic', typeDescription: 'Mágico', title: 'Energia Drenada', description: 'Você perde um espaço de magia de nível mais baixo que possuir.' }]
          },
          {
              id : 3, 
              criticalType:[{ type: 'melee', typeDescription: 'Corpo a Corpo', title: 'Escapuliu', description: 'Sua arma cai no chão atrás do alvo.' },
                            { type: 'range', typeDescription: 'Distância', title: 'Agora é Pessoal', description: 'Você fica marcado apenas pelo alvo, até que ele esteja morto, derrotado, ou for a do seu alcance.' },
                            { type: 'natural', typeDescription: 'Natural', title: 'Foi de Encontro', description: 'A arma do alvo causa dano em você. Na ausência de uma arma, você sofre pontos de dano igual ao seu nível de personagem, ou nível de desafio (mínimo 1).' },
                            { type: 'magic', typeDescription: 'Mágico', title: 'Magia Invertida', description: 'A magia recupera pontos de vida ao invés de causar dano.' }]
          },
          {
                id : 4, 
                 criticalType:[{ type: 'melee', typeDescription: 'Corpo a Corpo', title: 'Piriri', description: 'Você tem desvantagem em testes de carisma, até realizar um descanso curto ou longo.' },
                            { type: 'range', typeDescription: 'Distância', title: 'Calcanhar do Amigo', description: 'Um aliado aleatório mais próximo ao alvo perde 1 dado de vida.' },
                            { type: 'natural', typeDescription: 'Natural', title: 'Frescura', description: 'Seus ataques causam metade do dano, até o fim de seu próximo turno.' },
                            { type: 'magic', typeDescription: 'Mágico', title: 'KA-GA\'DA', description: 'Um aliado aleatório fica marcado, até que o alvo esteja morto, derrotado, ou for a do seu alcance.' }]
          }
      ];   
      
    var rolled = randomInteger(52);
   
    if(msg.type == "api" && msg.content.indexOf("!HitsCritical") !== -1) {
      var hit = _critico(criticalsHit, rolled);
      var criticalType = msg.content.replace("!HitsCritical ", "");
  
      var table = "Try Again";
  
      table =  "<table> "+
                        "<tr> "+
                          "<th "+ styleTh +"><b "+ styleHits +">Acerto Crítico [ "+ rolled +" ]</b></th> "+
                        "</tr> ";
      
      if(criticalType === "contusao"){
          table = table + GetCriticalTemplate(styleCont, _.findWhere(hit.criticalType, {"type":"contusao"}));
      }else if(criticalType === "perfuracao"){
          table = table + GetCriticalTemplate(stylePerf, _.findWhere(hit.criticalType, {"type":"perfuracao"}));
      }else if(criticalType === "cortante"){
          table = table + GetCriticalTemplate(styleCort,  _.findWhere(hit.criticalType, {"type":"cortante"}));
      }else if(criticalType === "magico"){
          table = table + GetCriticalTemplate(styleMag, _.findWhere(hit.criticalType, {"type":"magico"}));
      }else{
          table = table + 
                  GetCriticalTemplate(styleCont, _.findWhere(hit.criticalType, {"type":"contusao"})) +
                  GetCriticalTemplate(stylePerf, _.findWhere(hit.criticalType, {"type":"perfuracao"})) +
                  GetCriticalTemplate(styleCort,  _.findWhere(hit.criticalType, {"type":"cortante"})) +
                  GetCriticalTemplate(styleMag, _.findWhere(hit.criticalType, {"type":"magico"}));
      }
      
      table = table + "</table> </br>";
  
      sendChat(msg.who,table);
      
    }
    
    if(msg.type == "api" && msg.content.indexOf("!FailureCritical") !== -1) {
      var fail = _critico(criticalFailure, rolled);  
      var criticalType = msg.content.replace("!FailureCritical ", "");
  
      var table = "Try Again";
  
      table =  "<table> "+
                        "<tr> "+
                          "<th "+ styleTh +"><b "+ styleFailure +">Falha Crítica [ "+ rolled +" ]</b></th> "+
                        "</tr> ";
      
      if(criticalType === "melee"){
          table = table + GetCriticalTemplate(styleCont, _.findWhere(fail.criticalType, {"type":"melee"}));
      }else if(criticalType === "range"){
          table = table + GetCriticalTemplate(stylePerf, _.findWhere(fail.criticalType, {"type":"range"}));
      }else if(criticalType === "natural"){
          table = table + GetCriticalTemplate(styleCort,  _.findWhere(fail.criticalType, {"type":"natural"}));
      }else if(criticalType === "magic"){
          table = table + GetCriticalTemplate(styleMag, _.findWhere(fail.criticalType, {"type":"magic"}));
      }else{
          table = table + 
                  GetCriticalTemplate(styleCont, _.findWhere(fail.criticalType, {"type":"melee"})) +
                  GetCriticalTemplate(stylePerf, _.findWhere(fail.criticalType, {"type":"range"})) +
                  GetCriticalTemplate(styleCort,  _.findWhere(fail.criticalType, {"type":"natural"})) +
                  GetCriticalTemplate(styleMag, _.findWhere(fail.criticalType, {"type":"magic"}));
      }
      
      table = table + "</table> </br>";
  
      sendChat(msg.who,table);
    }
    
    function _critico(criticals, rolled){
       return _.find(criticals, function(critical){
          return critical.id == rolled;
      });
    };
    
    function GetCriticalTemplate(style, criticalType){
      return  "<tr "+ styleTh +"> "+
                  "<td><b "+ style +">"+ criticalType.typeDescription +" &#x2692;</b></td> "+
              "</tr> "+
              "<tr> "+
                  "<td "+ styleTh +"><b "+ style +">"+ criticalType.title +"</b>, "+ criticalType.description +"</td> "+
              "</tr> ";  
    };
    
  });