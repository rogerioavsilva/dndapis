/*
Macro
&{template:npcaction} {{rname=Críticos}} {{description=[Acerto Crítico 😇](!HitsCritical)
[Falha Crítica 😈](!FailureCritical)
}} 
*/


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
	{id :1, criticalType:[{ type: 'melee', typeDescription: 'Corpo a Corpo', title: 'Ofensa Coletiva', description: 'faça um teste de Carisma CD 15. Se falhar, fica marcado, até que o alvo esteja morto, derrotado, ou for a do seu alcance.' },
{ type: 'range', typeDescription: 'Distância', title: 'Má Pontaria', description: 'Uma criatura aleatória mais distante do alvo se torna o novo alvo. Faça uma jogada de ataque contra ela.' },
{ type: 'natural', typeDescription: 'Natural', title: 'Enjoado', description: 'Você fica envenenado (ldj p. 288), até o fim do encontro.' },
{ type: 'magic', typeDescription: 'Mágico', title: 'Fenda Mágica', description: 'Você é teleportado para o local mais próximo adjacente ao alvo.' }],},
{id :2, criticalType:[{ type: 'melee', typeDescription: 'Corpo a Corpo', title: 'Pulso Torcido', description: 'Suas jogadas de ataque corpo a corpo perdem o bônus de proeficiência, até o fim do encontro.' },
{ type: 'range', typeDescription: 'Distância', title: 'Atrapalhado', description: 'Toda sua munição cai no chão.' },
{ type: 'natural', typeDescription: 'Natural', title: 'Guarda Baixa', description: 'A próxima jogada de ataque realizada contra você tem vantagem.' },
{ type: 'magic', typeDescription: 'Mágico', title: 'Energia Drenada', description: 'Você perde um espaço de magia de nível mais baixo que possuir.' }],},
{id :3, criticalType:[{ type: 'melee', typeDescription: 'Corpo a Corpo', title: 'Escapuliu', description: 'Sua arma cai no chão atrás do alvo.' },
{ type: 'range', typeDescription: 'Distância', title: 'Agora é Pessoal', description: 'Você fica marcado apenas pelo alvo, até que ele esteja morto, derrotado, ou for a do seu alcance.' },
{ type: 'natural', typeDescription: 'Natural', title: 'Foi de Encontro', description: 'A arma do alvo causa dano em você. Na ausência de uma arma, você sofre pontos de dano igual ao seu nível de personagem, ou nível de desafio (mínimo 1).' },
{ type: 'magic', typeDescription: 'Mágico', title: 'Magia Invertida', description: 'A magia recupera pontos de vida ao invés de causar dano.' }],},
{id :4, criticalType:[{ type: 'melee', typeDescription: 'Corpo a Corpo', title: 'Piriri', description: 'Você tem desvantagem em testes de carisma, até realizar um descanso curto ou longo.' },
{ type: 'range', typeDescription: 'Distância', title: 'Calcanhar do Amigo', description: 'Um aliado aleatório mais próximo ao alvo perde 1 dado de vida.' },
{ type: 'natural', typeDescription: 'Natural', title: 'Frescura', description: 'Seus ataques causam metade do dano, até o fim de seu próximo turno.' },
{ type: 'magic', typeDescription: 'Mágico', title: 'KA-GA\'DA', description: 'Um aliado aleatório fica marcado, até que o alvo esteja morto, derrotado, ou for a do seu alcance.' }],},
{id :5, criticalType:[{ type: 'melee', typeDescription: 'Corpo a Corpo', title: 'Todo Torto', description: 'Seu ataque acerta você mesmo, causando metade do dano.' },
{ type: 'range', typeDescription: 'Distância', title: 'Perda de Confiança', description: 'Você possui desvantagem em todas as jogadas com um d20 contra o alvo, até o fim do encontro.' },
{ type: 'natural', typeDescription: 'Natural', title: 'Pé Torcido', description: 'Seu deslocamento cai pela metade, até o fim do encontro.' },
{ type: 'magic', typeDescription: 'Mágico', title: 'Queda de Resistência', description: 'Você tem desvantagem em testes de resistência contra magia, até o fim do encontro.' }],},
{id :6, criticalType:[{ type: 'melee', typeDescription: 'Corpo a Corpo', title: 'Defecada na Calça', description: 'Qualquer criatura com o sentido do olfato, e que estiver a 1,5 metro (1 quadrado) de  distância de você, fica envenenada (ldj p. 288), até o início de seu próximo turno.' },
{ type: 'range', typeDescription: 'Distância', title: 'Mão Mole', description: 'Sua arma cai no chão.' },
{ type: 'natural', typeDescription: 'Natural', title: 'Batida no Estômago', description: 'Você regurgita sua última refeição.' },
{ type: 'magic', typeDescription: 'Mágico', title: 'Cansaço Mental', description: 'Você não pode adicionar seu bônus de proficiência aos seus ataques de magia e na CD para resistir a elas, até o fim do encontro.' }],},
{id :7, criticalType:[{ type: 'melee', typeDescription: 'Corpo a Corpo', title: 'Atração Pelo Solo', description: 'Você fica caído (ldj p. 287).' },
{ type: 'range', typeDescription: 'Distância', title: 'Dancinha Ridícula', description: 'Faça um teste de Carisma CD 15. Se falhar, você se torna o alvo predileto dos inimigos que possam te ver.' },
{ type: 'natural', typeDescription: 'Natural', title: 'Errou Bonito', description: 'Seu ataque acerta um objeto aleatório, não mágico, e de uma categoria de tamanho igual ou menor que a sua arma. Sofra pontos de dano iguais ao seu bônus de proficiência.' },
{ type: 'magic', typeDescription: 'Mágico', title: 'Magia Traiçoeira', description: 'Você é o alvo de sua própria magia.' }],},
{id :8, criticalType:[{ type: 'melee', typeDescription: 'Corpo a Corpo', title: 'Braço Quebrado', description: 'Você só pode usar umas das mãos, até receber tratamento.' },
{ type: 'range', typeDescription: 'Distância', title: 'Não Era Bem Isso', description: 'Seu ataque acerta um objeto aleatório, não mágico, e de uma categoria de tamanho igual ou menor que a sua arma. Ele é empurrado 3 metros de você (2 quadrados).' },
{ type: 'natural', typeDescription: 'Natural', title: 'Choque no Nervo', description: 'Sua próxima ação não pode ser uma jagada de ataque.' },
{ type: 'magic', typeDescription: 'Mágico', title: 'Cegueira Arcana', description: 'Uma criatura aleatória mais próxima de você se torna o novo alvo de sua mágia.' }],},
{id :9, criticalType:[{ type: 'melee', typeDescription: 'Corpo a Corpo', title: 'Estilhaçõs', description: 'Seu ataque acerta um objeto aleatório, não mágico, e de uma categoria de tamanho igual ao menor que a sua arma. Ele é destruído.' },
{ type: 'range', typeDescription: 'Distância', title: 'Deconcentrado', description: 'Você sofre -5 de penalidade na próxima jogada de ataque com armas á distância.' },
{ type: 'natural', typeDescription: 'Natural', title: 'Ego Ferido', description: 'Você não pode atacar outro alvo, até que este aqui esteja morto, derrotado ou fora do seu alcance.' },
{ type: 'magic', typeDescription: 'Mágico', title: 'Alvo na Testa', description: 'Um aliado aleatório mais próximo ao alvo fica marcado, até o fim do encontro.' }],},
{id :10, criticalType:[{ type: 'melee', typeDescription: 'Corpo a Corpo', title: 'Arma Danificada', description: 'O dado (ou dados) de dano de sua arma não mágica se torna um tamanho menor, até ser reparada.' },
{ type: 'range', typeDescription: 'Distância', title: 'Vertigem', description: 'Toda vez que você se mover fica envenenado (ldj p. 288) até o início de seu próximo turno. Vertigem dura até o fim do encontro.' },
{ type: 'natural', typeDescription: 'Natural', title: 'Falta de Alongamento', description: 'Você sofre -5 de penalidade na próxima jogada de ataque com armas naturais.' },
{ type: 'magic', typeDescription: 'Mágico', title: 'Transferência de Poder', description: 'A próxima jogada de ataque que o alvo realizar será um acerto crítico.' }],},
{id :11, criticalType:[{ type: 'melee', typeDescription: 'Corpo a Corpo', title: 'Armadura Danificada', description: 'Sua armadura sofre -1 de penalidade na CA, até ela ser reparada.' },
{ type: 'range', typeDescription: 'Distância', title: 'Tudo Que Vai, Volta', description: 'Você provoca um ataque de oportunidade à distância do alvo.' },
{ type: 'natural', typeDescription: 'Natural', title: 'Empurrão', description: 'Você é empurrado para trás 3 metros (2 quadrados) pelo alvo.' },
{ type: 'magic', typeDescription: 'Mágico', title: 'Clonagem Arcana', description: 'Sua magia cria um clone do alvo, o mais próximo possível dele, com apenas 1 ponto de vida máximo.' }],},
{id :12, criticalType:[{ type: 'melee', typeDescription: 'Corpo a Corpo', title: 'Mão Fraca', description: 'Sua arma cai no chão acertando seu dedão. Você sofre 1 ponto de dano.' },
{ type: 'range', typeDescription: 'Distância', title: 'Projétil de Chumbo', description: 'O chão, onde se encontra um aliado aleatório mais próximo ao alvo, cede, se tornando terreno difícil. Aquele aliado fica caído (ldj p. 287).' },
{ type: 'natural', typeDescription: 'Natural', title: 'Fluido no Olho', description: 'Faça um teste de resistência de Destreza CD 15. Se falhar, fica cego (ldj p. 287), até o fim de seu próximo turno.' },
{ type: 'magic', typeDescription: 'Mágico', title: 'Paralisia Mágica', description: 'Você fica paralisado (ldj p. 289), até uma criatura encostar em você.' }],},
{id :13, criticalType:[{ type: 'melee', typeDescription: 'Corpo a Corpo', title: 'Crítico no Chão', description: 'Você fica cego (ldj p. 287), até o início de seu próximo turno.' },
{ type: 'range', typeDescription: 'Distância', title: 'Ação e Reação', description: 'Você é empurrado 1,5 metro para trás (1 quadro) e fica caído ldj p. 287).' },
{ type: 'natural', typeDescription: 'Natural', title: 'Enroscado', description: 'Você não pode mais se agastar desse alvo, até um de vocês dois sofrer dano.' },
{ type: 'magic', typeDescription: 'Mágico', title: 'Perturbação Mágica', description: 'Você adquire Cenosilicafobia e passa a ter medo paralisante e irracional de ver copos vazios (principalmente de bebidas alcóolicas).' }],},
{id :14, criticalType:[{ type: 'melee', typeDescription: 'Corpo a Corpo', title: 'Enferrujado', description: 'Você sofre -5 de penalidade na próxima jogada de ataque com armas corpo a corpo. ' },
{ type: 'range', typeDescription: 'Distância', title: 'Descoordenado', description: 'Faça um teste de destreza CD 15. Se falhar, deixa sua arma e/ou toda sua munição cair no chão.' },
{ type: 'natural', typeDescription: 'Natural', title: 'Canseira', description: 'Você perde 1 dado de vida. Na ausência de um, sofra pontos de dado iguais ao seu bônus de proficiência.' },
{ type: 'magic', typeDescription: 'Mágico', title: 'Exaustão Mental', description: 'Você não pode conjurar magias, até o fim de seu próximo turno.' }],},
{id :15, criticalType:[{ type: 'melee', typeDescription: 'Corpo a Corpo', title: 'Desajeitado', description: 'Você sofre -1 de penalidade nas jogadas de ataque com armas corpo a corpo, até o fim do encontro.' },
{ type: 'range', typeDescription: 'Distância', title: 'Como se usa Isso?', description: 'Sua próxima jogada de ataque, com uma arma à distância, é feita sem o seu bônus de proficiência.' },
{ type: 'natural', typeDescription: 'Natural', title: 'Dor Aguda', description: 'Faça um teste de resistência de Constituição CD 15. Se falhar, não pode realizar ataques com armas naturais, até o fim de seu próximo turno.' },
{ type: 'magic', typeDescription: 'Mágico', title: 'Injeção Mágica', description: 'O alvo realiza um novo turno nessa rodada, logo após o seu.' }],},
{id :16, criticalType:[{ type: 'melee', typeDescription: 'Corpo a Corpo', title: 'Bolhas na Mão', description: 'Faça um teste de resistência de constituição CD 15. Se falhar, sofre -2 de penalidade nas jogadas de ataque, até receber tratamento.' },
{ type: 'range', typeDescription: 'Distância', title: 'Na Mosca, Errada', description: 'Seu ataque destrói um objeto aleatório, não mágico, segurado ou carregado por um aliado aleatório que estiver mais próximo ao alvo.' },
{ type: 'natural', typeDescription: 'Natural', title: 'Espinho', description: 'Você sofre -1 de penalidade nas jogadas de ataque com armas naturais, até o fim do encontro.' },
{ type: 'magic', typeDescription: 'Mágico', title: 'Ven\'ká', description: 'O alvo é teleportado para o local mais próximo adjacente a você.' }],},
{id :17, criticalType:[{ type: 'melee', typeDescription: 'Corpo a Corpo', title: 'Olé Absurdo', description: 'Se você tiver movimento suficiente restando, você se move até ficar do lado oposto do alvo e fica caído (ldj p. 287).' },
{ type: 'range', typeDescription: 'Distância', title: 'Tremedeira', description: 'Você sofre -1 de penalidade nas jogadas de ataque à distância, até o fim do encontro.' },
{ type: 'natural', typeDescription: 'Natural', title: 'Troca de Gentilizas', description: 'Você provoca um ataque de oportunidade do alvo.' },
{ type: 'magic', typeDescription: 'Mágico', title: 'Explosão Arcana', description: 'O dano da magia é distribuído igualmente para todas as criaturas dentro de um raio de 9 metros ( 6 quadrados) de você.' }],},
{id :18, criticalType:[{ type: 'melee', typeDescription: 'Corpo a Corpo', title: 'Falta de Firmeza', description: 'Faça um teste de força CD 15. Se falhar, sua arma cai no chão.' },
{ type: 'range', typeDescription: 'Distância', title: 'Vitimismo', description: 'Você vira um poço de sentimentos negativos, até acertar um ataque.' },
{ type: 'natural', typeDescription: 'Natural', title: 'Dormência', description: 'Sua próxima jogada de ataque, com uma arma natural, é feita sem o seu bônus de proficiência.' },
{ type: 'magic', typeDescription: 'Mágico', title: 'Contato Extra Planar', description: 'Um de seus itens mágicos fica com uma Propriedade Prejudicial Menor (ldm p. 221).' }],},
{id :19, criticalType:[{ type: 'melee', typeDescription: 'Corpo a Corpo', title: 'Movimento Errado', description: 'Faça um teste de sabedoria CD 15. Se falhar, um aliado adjacente a você se torna o novo alvo.' },
{ type: 'range', typeDescription: 'Distância', title: 'Dedo Quebrado', description: 'Você sofre -2 de penalidade nas jogadas de ataque ao usar aquela mão, até receber tratamento.' },
{ type: 'natural', typeDescription: 'Natural', title: 'Alergia', description: 'O alvo causa rinite em você. Testes de sabedoria (percepeção) têm desvantagem, até você realizar um descanso curto ou longo.' },
{ type: 'magic', typeDescription: 'Mágico', title: 'Manifestação Espiritual', description: 'Seu principal item abriga um espírito aconselhador de alinhamento oposto ao seu. Só você pode ouvi-lo.' }],},
{id :20, criticalType:[{ type: 'melee', typeDescription: 'Corpo a Corpo', title: 'Deslize de Percurso', description: 'Um aliado aleatório adjacente a você perde 1 dado de vida. Na ausência de dados de vida, ele sofre pontos de dano iguais ao bônus de proficiência dele.' },
{ type: 'range', typeDescription: 'Distância', title: 'Intimidado', description: 'Faça um teste de resistência de carisma CD 15. Se falhar, fica marcado pelo alvo, até o fim do encontro.' },
{ type: 'natural', typeDescription: 'Natural', title: 'Membro Deslocado', description: 'Esse ataque não pode ser mais realizado, até que você use uma ação para recolocar o membro. Se o fizer, sofra pontos de dano iguais ao seu bônus de proficiência.' },
{ type: 'magic', typeDescription: 'Mágico', title: 'Perseguição Divina', description: 'Uma divindade de seu Reino, de alinhamento oposto ao seu, não te quer bem (ldj p. 290 a 296).' }],},
{id :21, criticalType:[{ type: 'melee', typeDescription: 'Corpo a Corpo', title: 'Lapso de Atenção', description: 'Faça um teste de resistência de inteligência CD 15. Se falhar, sua próxima jogada com o d20 tem desvantagem.' },
{ type: 'range', typeDescription: 'Distância', title: 'Joelho Torcido', description: 'Você sofre 1 ponto de dano toda vez que você iniciar seu movimento, até receber tratamento.' },
{ type: 'natural', typeDescription: 'Natural', title: 'Fratura Exposta', description: 'Você sofre 2 pontos de dano por nível de personagem seu, ou nível de desafio (mínimo 2). Aquele membro não pode ser utilizado, até receber tratamento.' },
{ type: 'magic', typeDescription: 'Mágico', title: 'Riso Incontrolável', description: 'Você é infectado com a doença Febre Tagarelante (ldm p. 257).' }],},
{id :22, criticalType:[{ type: 'melee', typeDescription: 'Corpo a Corpo', title: 'Brecha na Defesa', description: 'Faça um teste de Destreza CD 15. Se falhar, você provoca um ataque de oportunidade do alvo.' },
{ type: 'range', typeDescription: 'Distância', title: 'OPS!', description: 'Um aliado aleatório mais próximo ao alvo solta o que estiver segurando nas mãos. Ele sofre pontos de dano iguais ao bônus de proficiência dele.' },
{ type: 'natural', typeDescription: 'Natural', title: 'Tornozelo Torcido', description: 'Seu movimento só pode ser realizado em linha reta, até o fim do encontro.' },
{ type: 'magic', typeDescription: 'Mágico', title: 'Leseira', description: 'Você é infectado com a doença Praga do Esgoto (ldm p. 257).' }],},
{id :23, criticalType:[{ type: 'melee', typeDescription: 'Corpo a Corpo', title: 'Assustado', description: 'Faça um teste de resistência de carisma CD 15. Se falhar, fica amedrontado pelo alvo (ldj p. 287), até o fim do encontro.' },
{ type: 'range', typeDescription: 'Distância', title: 'Tensão Muscular', description: 'A distância de seus ataques à distância cai pela metade, até receber tratamento.' },
{ type: 'natural', typeDescription: 'Natural', title: 'Toca Aqui!', description: 'Você é um aliado aleatório adjacente sofrem 1 ponto de dano. Ele solta o que estiver segurando em uma das mãos.' },
{ type: 'magic', typeDescription: 'Mágico', title: 'Olhos de Sangue', description: 'Você é infectado com a doença Decomposição Ocular (ldj p. 257).' }],},
{id :24, criticalType:[{ type: 'melee', typeDescription: 'Corpo a Corpo', title: 'Hipocondríaco', description: 'Você só pode usar novamente sua ação se reclamar exageradamente de alguma dor no seu corpo, até receber cura mágica.' },
{ type: 'range', typeDescription: 'Distância', title: 'Fraqueza', description: 'Faça um teste de força CD 15. Se falhar, fica caído (ldj p. 287), e só pode se lenvatar no próximo turno.' },
{ type: 'natural', typeDescription: 'Natural', title: 'Dor nas Costas', description: 'Você não consegue realizar um descanso curto, até receber tratamento.' },
{ type: 'magic', typeDescription: 'Mágico', title: 'Mente Ferrada', description: 'Você adquire uma Loucura de Curta Duração (ldm p. 260), até receber tratamento.' }],},
{id :25, criticalType:[{ type: 'melee', typeDescription: 'Corpo a Corpo', title: 'Desarmado', description: 'O alvo fica em posse de sua arma. (Se quiser recuperar sua arma, veja Desarmar no (ldm p. 272).' },
{ type: 'range', typeDescription: 'Distância', title: 'Falta de Ar', description: 'Faça um teste de resistência de consituição CD 15. Se falhar, fica atordoado (ldj p. 287), até o fim de seu próximo turno.' },
{ type: 'natural', typeDescription: 'Natural', title: 'Ligamento Rompido', description: 'Você sofre 1 ponto de dano por nível de personagem seu, ao nível de desafio (mínimo 1). Aquele membro não pode ser utilizado, até receber tratamento.' },
{ type: 'magic', typeDescription: 'Mágico', title: 'Zumbido Agudo', description: 'Você fica surdo (ldj p. 289), até o fim do encontro.' }],},
{id :26, criticalType:[{ type: 'melee', typeDescription: 'Corpo a Corpo', title: 'Lesão Muscular', description: 'Todas as suas jogadas que usam a Destreza sofrem -1 de penalidade, até receber tratamento.' },
{ type: 'range', typeDescription: 'Distância', title: 'Falta de Estratégia', description: 'Faça um teste de Inteligência CD 15. Se falhar, se esqueça de alguma estratégia criada para esse encontro.' },
{ type: 'natural', typeDescription: 'Natural', title: 'Tapa na Cara', description: 'A iniciativa do seu alvo passa a ser logo depois da sua. Ele tem vantagem na próxima jogada de ataque natural contra você.' },
{ type: 'magic', typeDescription: 'Mágico', title: 'Mudança de Sexo', description: 'Faça um teste de resistência de Constituição CD 10. Se falhar, as características físicas sexuais de sua raça invertem.' }],},
{id :27, criticalType:[{ type: 'melee', typeDescription: 'Corpo a Corpo', title: 'Nãi fui eu, Foi ele', description: 'Um aliado aleatório adjacente ao alvo provoca um ataque de oportunidade do alvo.' },
{ type: 'range', typeDescription: 'Distância', title: 'Preciso Matar!', description: 'Faça um teste de sabedoria CD 15. Se falhar, no seu próximo turno realize o ataque mais forte possível contra um alvo inimigo mais fraco.' },
{ type: 'natural', typeDescription: 'Natural', title: 'Osso Trincado', description: 'Todas as suas jogadas que usam a Força sofrem -1 de penalidade, até receber tratamento.' },
{ type: 'magic', typeDescription: 'Mágico', title: 'Reforço Mágico', description: 'O alvo fica imune a qualquer condição, até o fim do encontro.' }],},
{id :28, criticalType:[{ type: 'melee', typeDescription: 'Corpo a Corpo', title: 'Dupla Falha Crítica', description: 'Compre duas Cartas de Falha Crítica e aplique os dois efeitos.' },
{ type: 'range', typeDescription: 'Distância', title: 'Dor na Lombar', description: 'Seu deslocamento cai para 1,5 metro (1 quadrado), até receber tratamento.' },
{ type: 'natural', typeDescription: 'Natural', title: 'Tropeço', description: 'Faça um teste de resistência de Destreza CD 15. Se falhar, fica caído (ldj p. 287).' },
{ type: 'magic', typeDescription: 'Mágico', title: 'Sim Salabim', description: 'O alvo fica invisível (ldj p. 289), até você sofrer dano ou encontro acabar.' }],},
{id :29, criticalType:[{ type: 'melee', typeDescription: 'Corpo a Corpo', title: 'Queda de Pressão', description: 'Você fica envenenado (ldj p. 288), até o fim do seu próximo turno.' },
{ type: 'range', typeDescription: 'Distância', title: 'Articulação Luxada', description: 'Você não pode mais realizar ações com aquele membro até receber tratamento.' },
{ type: 'natural', typeDescription: 'Natural', title: 'Amnésia Episódica', description: 'Faça um teste de resistência de inteligência CD 15. Se falhar, se esquece de como usar suas habilidades especiais, até o fim do encontro.' },
{ type: 'magic', typeDescription: 'Mágico', title: 'Toque de Gyodai', description: 'O alvo tem seu tamanho aumentando como na Magia Aumentar/Reduzir (ldj p. 217), até o fim do encontro.' }],},
{id :30, criticalType:[{ type: 'melee', typeDescription: 'Corpo a Corpo', title: 'Costela Fraturada', description: 'Você sofre 1 ponto de dano a cada jogada de ataque que realizar, até receber tratamento.' },
{ type: 'range', typeDescription: 'Distância', title: 'Torção no Braço', description: 'Você sofre 1 ponto de dano por nível de personagem seu, ao nível de desafio (mínimo 1).' },
{ type: 'natural', typeDescription: 'Natural', title: 'Giratória de Tapa', description: 'Todas as criaturas adjacentes a você sofrem pontos de dano iguais ao seu bônus de proficiência, exceto o alvo.' },
{ type: 'magic', typeDescription: 'Mágico', title: 'Sangue Forte', description: 'O alvo tem vantagem em teste de resistência contra magia, até o fim do encontro.' }],},
{id :31, criticalType:[{ type: 'melee', typeDescription: 'Corpo a Corpo', title: 'Inimigo Marcial', description: 'Você troca de lugar com o alvo e fica caído (ldj p. 287).' },
{ type: 'range', typeDescription: 'Distância', title: 'Ansiedade', description: 'Você não pode se mover sem antes realizar uma jogada de ataque à distância, até receber tratamento.' },
{ type: 'natural', typeDescription: 'Natural', title: 'Erro de Julgamento', description: 'Faça um teste de Sabedoria CD 15. Se falhar, o alvo não é mais uma ameaça para você, até você sofre dano.' },
{ type: 'magic', typeDescription: 'Mágico', title: 'Estátua!', description: 'Você fica petrificado (ldj p. 289), até o início de seu próximo turno.' }],},
{id :32, criticalType:[{ type: 'melee', typeDescription: 'Corpo a Corpo', title: 'Envergonhado', description: 'Seu ataque gera uma cena ridícula e você fica com o Transtorno de Personalidade Antissocial, até receber tratamento.' },
{ type: 'range', typeDescription: 'Distância', title: 'Quicada na Cabeça', description: 'A iniciativa do seu alvo passa a ser logo depois da sua. Ele tem vantagem na próxima jogada de ataque contra você.' },
{ type: 'natural', typeDescription: 'Natural', title: 'Xênio', description: 'Faça um teste de sabedoria CD 15. Se falhar, faça uma aposta idiota contra esse alvo.' },
{ type: 'magic', typeDescription: 'Mágico', title: 'Egernétik', description: 'O alvo fica acelerado como na Magia Velocidade (ldj p. 285), até o fim do encontro.' }],},
{id :33, criticalType:[{ type: 'melee', typeDescription: 'Corpo a Corpo', title: 'Provocação', description: 'A iniciativa do seu alvo passa a ser logo depois da sua.' },
{ type: 'range', typeDescription: 'Distância', title: 'Nervo do Aliado', description: 'Um aliado aleatório adjacente ao alvo sofre 1 nível de exaustão (ldj p. 288).' },
{ type: 'natural', typeDescription: 'Natural', title: 'Nojinho', description: 'Se você tiver proficiência na perícia sobrevivência,  fica incapacitado (ldj p. 288), até o início de seu próximo turno.' },
{ type: 'magic', typeDescription: 'Mágico', title: 'Mente Bloqueada', description: 'Você não pode mais conjurar essa magia, até realizar um descanso longo.' }],},
{id :34, criticalType:[{ type: 'melee', typeDescription: 'Corpo a Corpo', title: 'Além do Limite', description: 'Faça um teste de resistência de constituição CD 15. Se falhar, sofra 1 nível de exaustão (ldj p. 288).' },
{ type: 'range', typeDescription: 'Distância', title: 'Foi Demais', description: 'Você gasta o triplo da munição nesse ataque.' },
{ type: 'natural', typeDescription: 'Natural', title: 'Pancada', description: 'Você fica atordoado (ldj p. 287), até o fim de seu próximo turno.' },
{ type: 'magic', typeDescription: 'Mágico', title: 'Sídrome de Estocolmo', description: 'Faça um teste de resistência de sabedoria CD 15. Se falhar, fica enfeitiçado pelo alvo (ldj p. 288). Repita o teste de resistência no fim de seu próximo turno.' }],},
{id :35, criticalType:[{ type: 'melee', typeDescription: 'Corpo a Corpo', title: 'Cãibra no Abdome', description: 'Todas as suas jogadas que usam a força sofrem -1 de penalidade, até o fim do encontro.' },
{ type: 'range', typeDescription: 'Distância', title: 'Entorse no Joelho', description: 'Seu deslocamento cai pela metade, até realizar um descanso curto ou longo.' },
{ type: 'natural', typeDescription: 'Natural', title: 'Te Agarrando', description: 'O alvo pode realizar um ação de Agarrão contra você (ldj p. 195 e 287).' },
{ type: 'magic', typeDescription: 'Mágico', title: 'Invólucro Mágico', description: 'O alvo fica com resistência a dano de magias (ldj p. 197), até o fim do encontro.' }],},
{id :36, criticalType:[{ type: 'melee', typeDescription: 'Corpo a Corpo', title: 'Choque do Golpe', description: 'Você fica surdo (ldj p. 289), até o fim de seu próximo turno.' },
{ type: 'range', typeDescription: 'Distância', title: 'Headshot, no Amigo', description: 'Um aliado aleatório mais próximo faz um teste de resistência de constituição CD 15. Se falhar, fica paralisado (ldj p. 289), até o fim de seu próximo turno.' },
{ type: 'natural', typeDescription: 'Natural', title: 'Que coisa Feia!', description: 'Se você não tiver proficiência na perícia intimidação, fica amedrontado pelo alvo (ldj p. 287) , até o fim de seu próximo turno.' },
{ type: 'magic', typeDescription: 'Mágico', title: 'Capa de Gordura', description: 'O alvo recebe pontos de vida temporários iguais ao nível da magia multiplicador por 2 (mínimo 1).' }],},
{id :37, criticalType:[{ type: 'melee', typeDescription: 'Corpo a Corpo', title: 'Isso Não é Pra Min!', description: 'Faça um teste de resistência de sabedoria CD 15. Se falhar, fica incapacitado (ldj p. 288), até o fim de seu próximo turno.' },
{ type: 'range', typeDescription: 'Distância', title: 'Desiludido', description: 'Você não pode ganhar inspiração, até receber tratamento.' },
{ type: 'natural', typeDescription: 'Natural', title: 'Chega Pra Lá', description: 'Se você não tiver proficiência na perícia atletismo, é empurrado 3 metros (2 quadrados) para trás.' },
{ type: 'magic', typeDescription: 'Mágico', title: 'Resistência Baixa', description: 'Você tem vulnerabilidade a todos os dano (ldj p. 197), até o início de seu próximo turno.' }],},
{id :38, criticalType:[{ type: 'melee', typeDescription: 'Corpo a Corpo', title: 'Te Encontrando', description: 'O alvo pode realizar um ação de encontrão contra você (ldj p. 195).' },
{ type: 'range', typeDescription: 'Distância', title: 'Formigamento', description: 'Todas as suas jogadas que usam a Destreza sofrem -1 de penalidade, até o fim do encontro.' },
{ type: 'natural', typeDescription: 'Natural', title: 'Mordida do Mike', description: 'O alvo realiza um ataque de mordida contra você.' },
{ type: 'magic', typeDescription: 'Mágico', title: 'Casca Grossa', description: 'O alvo tem resistência a dano mágico (ldj p. 197), até o fim do encontro.' }],},
{id :39, criticalType:[{ type: 'melee', typeDescription: 'Corpo a Corpo', title: 'Rasteira', description: 'Se você não tiver proficiência na perícia acrobacia, fica caído (ldj p. 287).' },
{ type: 'range', typeDescription: 'Distância', title: 'Bem no Ouvido', description: 'Um aliado aleatório mais próximo ao alvo fica surdo (ldj p. 289), até receber tratamento.' },
{ type: 'natural', typeDescription: 'Natural', title: 'Ui!', description: 'Você grita Ui! E acidentalmente coloca sua arma natural na boca. Sofra 1 ponto de dano.' },
{ type: 'magic', typeDescription: 'Mágico', title: 'Deslize Arcano', description: 'Você perde mais um espaço de magia do mesmo nível dessa magia, ou o que estiver restando de outro nível.' }],},
{id :40, criticalType:[{ type: 'melee', typeDescription: 'Corpo a Corpo', title: 'Enterrada', description: 'Sua arma fica presa no chão. Um teste bem-sucedido de força (atletismo) CD 15 a remove.' },
{ type: 'range', typeDescription: 'Distância', title: 'Ricochete', description: 'Sua arma ou munição ricocheteia no alvo e acerta um aliado aleatório, deixando-o atordoado (ldj p. 287), até o início de seu próximo turno.' },
{ type: 'natural', typeDescription: 'Natural', title: 'Trombada', description: 'Faça um teste de resistência de constituição CD 10. Se falhar, fica inconsciente (ldj p. 288), até o início de seu próximo turno.' },
{ type: 'magic', typeDescription: 'Mágico', title: 'Metalização', description: 'O alvo recebe +5 de bônus na CA, até o início de seu próximo turno.' }],},
{id :41, criticalType:[{ type: 'melee', typeDescription: 'Corpo a Corpo', title: 'Arrgh!', description: 'Você grita Arrgh! e chacoalha a mão várias vezes. Sofra 1 ponto de dano.' },
{ type: 'range', typeDescription: 'Distância', title: 'Disparo Torto', description: 'Uma criatura aleatória, até 6 metros (4 quadrados) do alvo, se torna o novo alvo.' },
{ type: 'natural', typeDescription: 'Natural', title: 'Incontinência Urinária', description: 'Você faz xixi na calça.' },
{ type: 'magic', typeDescription: 'Mágico', title: 'Ventania', description: 'Toda a região em um raio de 5 km é tomada por Ventos Fortes (ldm p. 110), até você realizar um descanso longo.' }],},
{id :42, criticalType:[{ type: 'melee', typeDescription: 'Corpo a Corpo', title: 'Mão Suada', description: 'Sua arma é arremessada para trás 4,5 metros (3 quadrados) de distância.' },
{ type: 'range', typeDescription: 'Distância', title: 'Por Cima do Alvo', description: 'Uma criatura aleatória mais distante atrás de seu alvo se torna o novo alvo.' },
{ type: 'natural', typeDescription: 'Natural', title: 'Chacoalhada', description: '1d4 equipamentos aleatórios que você esta carregando, e não vestindo, caem no chão.' },
{ type: 'magic', typeDescription: 'Mágico', title: 'Nevasca', description: 'Toda a região em um raio de 5 km é tomada por Frio Extremo (ldm p. 109), até você realizar um descanso longo.' }],},
{id :43, criticalType:[{ type: 'melee', typeDescription: 'Corpo a Corpo', title: 'Oportunidade', description: 'Role 1d20. Se o resultado for maior ou igual a 11, você pode realizar uma ação. Se o resultado for menor que 11, o alvo pode realizar uma ação.' },
{ type: 'range', typeDescription: 'Distância', title: 'Mal Aí', description: 'Você desarma um aliado aleatório adjacente ao alvo. A arma dele cai no chão.' },
{ type: 'natural', typeDescription: 'Natural', title: 'Língua Cortada', description: 'Você perde parte da língua e não pode falar direito, até receber tratamento.' },
{ type: 'magic', typeDescription: 'Mágico', title: 'Mormaço', description: 'Toda a região em um raio de 5 km é tomada por Calor Extremo (ldm p. 110), até você realizar um descanso longo.' }],},
{id :44, criticalType:[{ type: 'melee', typeDescription: 'Corpo a Corpo', title: 'Abraçado', description: 'Você fica agarrado pelo seu alvo (ldj p. 287).' },
{ type: 'range', typeDescription: 'Distância', title: 'Xingado o Inimigo', description: 'O alvo pode se mover seu deslocamento imediatamento.' },
{ type: 'natural', typeDescription: 'Natural', title: 'Espirrada', description: 'Faça um teste de resistência de constituição CD 15. Se falhar, fica envenenado (ldj p. 288), até receber tratamento.' },
{ type: 'magic', typeDescription: 'Mágico', title: 'Dilúvio', description: 'Toda a região em um raio de 5 km é tomada por Percipitação Pesada (ldm p. 110), até você realizar um descanso longo.' }],},
{id :45, criticalType:[{ type: 'melee', typeDescription: 'Corpo a Corpo', title: 'Bate e Volta', description: 'Você fica atordoado (ldj p. 287), até o fim de seu próximo turno.' },
{ type: 'range', typeDescription: 'Distância', title: 'Errou Por Muito', description: 'Um aliado aleatório adjacente ao alvo se torna o novo alvo.' },
{ type: 'natural', typeDescription: 'Natural', title: 'Carente', description: 'Faça um teste de sabedoria CD 15. Se falhar, no seu próximo turno realize o ataque de agarrão contra o alvo (ldj p. 195).' },
{ type: 'magic', typeDescription: 'Mágico', title: 'Visita à Sua Mente', description: 'O alvo aprende como conjurar essa magia, apenas uma vez sem necessidade de componentes ou foco mágico, até o fim do encontro.' }],},
{id :46, criticalType:[{ type: 'melee', typeDescription: 'Corpo a Corpo', title: 'Fagulha No Olho', description: 'Você fica com sensibilidade à luz solar, e tem desvantagem nas jogadas de ataque e teste de sabedoria (percepção), até receber tratamento.' },
{ type: 'range', typeDescription: 'Distância', title: 'Ai!', description: 'Você gria Ai! e dá vários pulinhos de dor. Sofra 1 ponto de dano.' },
{ type: 'natural', typeDescription: 'Natural', title: 'De Mau Jeito', description: 'Você sofre pontos de dano iguais ao seu bônus de proficiência.' },
{ type: 'magic', typeDescription: 'Mágico', title: 'Supressão Mágica', description: 'Todos os efeitos mágicos em você, origundos de itens mágicos e magias, são temporariamente dissipados, até o início de seu próximo turno.' }],},
{id :47, criticalType:[{ type: 'melee', typeDescription: 'Corpo a Corpo', title: 'Baixa Estima', description: 'Você não pode usar inspiração, até receber tratamento.' },
{ type: 'range', typeDescription: 'Distância', title: 'Sem Pontaria', description: 'Você possui na sua próxima jogada de ataque.' },
{ type: 'natural', typeDescription: 'Natural', title: 'Bofetada na Orelha', description: 'Um aliado aleatório adjacente a você fica surdo (ldj p. 289), até o fim do encontro.' },
{ type: 'magic', typeDescription: 'Mágico', title: 'Vista Borrada', description: 'Você tem 50% de chance de errar um ataque, até receber tratamento.' }],},
{id :48, criticalType:[{ type: 'melee', typeDescription: 'Corpo a Corpo', title: 'Vai Na Mão', description: 'Faça um teste de sabedoria CD 15. Se falhar, vocÊ só consegue lutar desarmado contra esse alvo, até que ele esteja morto, derrotado ou fora do seu alcance.' },
{ type: 'range', typeDescription: 'Distância', title: 'Cisco no Olho', description: 'Você sofre -5 de penalidade nos teste de percepção até receber tratamento.' },
{ type: 'natural', typeDescription: 'Natural', title: 'Narigada', description: 'Você perde o olfato, até receber tratamento.' },
{ type: 'magic', typeDescription: 'Mágico', title: 'Obsessão Pelo Feitiço.', description: 'Seus espaços de magia só podem ser utilizados para conjurar essa mesma magia, até receber tratamento.' }],},
{id :49, criticalType:[{ type: 'melee', typeDescription: 'Corpo a Corpo', title: 'Farpa no Olho', description: 'Um aliado aleatório adjacente a você fica cego (ldj p. 287), até o início de seu próximo turno.' },
{ type: 'range', typeDescription: 'Distância', title: 'Distensão Muscular', description: 'Você não pode usar a ação para atacar com armas à distância, até receber tratamento.' },
{ type: 'natural', typeDescription: 'Natural', title: 'Tontura', description: 'Neste encontro, sua iniciativa cai para a última posição. Perca seu próximo turno.' },
{ type: 'magic', typeDescription: 'Mágico', title: 'Profecia do Azar', description: 'A próxima jogada de ataque ou teste de resistência que fizer resultará em 1 natural.' }],},
{id :50, criticalType:[{ type: 'melee', typeDescription: 'Corpo a Corpo', title: 'Strateegia, Strategi...', description: 'Faça um teste de sabedoria CD 15. Se falhar, no seu próximo turno realize o ataque mais forte possível contra um alvo inimigo mais próximo.' },
{ type: 'range', typeDescription: 'Distância', title: 'Preso no Chão', description: 'Um aliado aleatório mais próximo ao alvo ficar impedido (ldj p. 288), até o iníxio de seu próximo turno.' },
{ type: 'natural', typeDescription: 'Natural', title: 'Efeito Dominó', description: 'Você e todos os aliados adjacentes ficam caídos (ldj p. 287).' },
{ type: 'magic', typeDescription: 'Mágico', title: 'Tocado por Unicolas', description: 'Seu rosto adquire a aparência de uma fabulosa divindade de rosto humano portando um único chifre em espiral, até fazer uma prece multicolorida em voz alta.' }],},
{id :51, criticalType:[{ type: 'melee', typeDescription: 'Corpo a Corpo', title: 'Cãibra na Perna', description: 'Seu deslocamento cai pela metade, até receber tratamento.' },
{ type: 'range', typeDescription: 'Distância', title: 'Flatulência', description: 'O aliado mais próximo de você tem desvantagem na sua próxima jogada de ataque.' },
{ type: 'natural', typeDescription: 'Natural', title: 'Pá, Pum!', description: 'Você fica inconsciente (ldj p. 288), até o incício de seu próximo turno.' },
{ type: 'magic', typeDescription: 'Mágico', title: 'Aversão Inexplicável', description: 'Você adquire Dextrofobia e passa a ter medo de objetos do lado direito do corpo e da mão direita.' }],},
{id :52, criticalType:[{ type: 'melee', typeDescription: 'Corpo a Corpo', title: 'Ném Fez Cócegas!', description: 'Você fica amedrontado pelo alvo (ldj p. 287), até que ele esteja morto, derrotado ou fora do seu alcance.' },
{ type: 'range', typeDescription: 'Distância', title: 'Articulação Dolorida', description: 'Você não porde mais usar reações, até receber tratamento.' },
{ type: 'natural', typeDescription: 'Natural', title: 'Fatigado', description: 'Você sofre 1 nível de exaustão (ldj p.288).' },
{ type: 'magic', typeDescription: 'Mágico', title: 'Medo Exagerado', description: 'Você adquiere Estupofobia e passa a ter medo de pessoas estúpidas.' }],}
]; 
    
  var rolled = randomInteger(52);
 
  if(msg.type == "api" && msg.content.indexOf("!HitsCritical") !== -1) {
    var hit = _critico(criticalsHit, rolled);
    var criticalTypeOption = msg.content.replace("!HitsCritical ", "");

    var table = "Try Again";

    table =  "<table> "+
                      "<tr> "+
                        "<th "+ styleTh +"><b "+ styleHits +">Acerto Crítico [ "+ rolled +" ]</b> &#x1f340;</th> "+
                      "</tr> ";
    
    if(criticalTypeOption === "contusao"){
        table = table + GetCriticalTemplate(styleCont, _.findWhere(hit.criticalType, {"type":"contusao"}),GetHitIcon(criticalTypeOption));
    }else if(criticalTypeOption === "perfuracao"){
        table = table + GetCriticalTemplate(stylePerf, _.findWhere(hit.criticalType, {"type":"perfuracao"}),GetHitIcon(criticalTypeOption));
    }else if(criticalTypeOption === "cortante"){
        table = table + GetCriticalTemplate(styleCort,  _.findWhere(hit.criticalType, {"type":"cortante"}),GetHitIcon(criticalTypeOption));
    }else if(criticalTypeOption === "magico"){
        table = table + GetCriticalTemplate(styleMag, _.findWhere(hit.criticalType, {"type":"magico"}),GetHitIcon(criticalTypeOption));
    }else{
        table = table + 
                GetCriticalTemplate(styleCont, _.findWhere(hit.criticalType, {"type":"contusao"}),GetHitIcon("contusao")) +
                GetCriticalTemplate(stylePerf, _.findWhere(hit.criticalType, {"type":"perfuracao"}),GetHitIcon("perfuracao")) +
                GetCriticalTemplate(styleCort,  _.findWhere(hit.criticalType, {"type":"cortante"}),GetHitIcon("cortante")) +
                GetCriticalTemplate(styleMag, _.findWhere(hit.criticalType, {"type":"magico"}),GetHitIcon("magico"));
    }
    
    table = table + "</table> </br>";

    sendChat(msg.who,table);
    
  }
  
  if(msg.type == "api" && msg.content.indexOf("!FailureCritical") !== -1) {
    var fail = _critico(criticalFailure, rolled);  
    var criticalTypeOption = msg.content.replace("!FailureCritical ", "");

    var table = "Try Again";

    table =  "<table> "+
                      "<tr> "+
                        "<th "+ styleTh +"><b "+ styleFailure +">Falha Crítica [ "+ rolled +" ]</b> &#x1f4a9;</th> "+
                      "</tr> ";
    
    if(criticalTypeOption === "melee"){
        table = table + GetCriticalTemplate(styleCont, _.findWhere(fail.criticalType, {"type":"melee"}), GetFailIcon(criticalTypeOption));
    }else if(criticalTypeOption === "range"){
        table = table + GetCriticalTemplate(stylePerf, _.findWhere(fail.criticalType, {"type":"range"}), GetFailIcon(criticalTypeOption));
    }else if(criticalTypeOption === "natural"){
        table = table + GetCriticalTemplate(styleCort,  _.findWhere(fail.criticalType, {"type":"natural"}), GetFailIcon(criticalTypeOption));
    }else if(criticalTypeOption === "magic"){
        table = table + GetCriticalTemplate(styleMag, _.findWhere(fail.criticalType, {"type":"magic"}), GetFailIcon(criticalTypeOption));
    }else{
        table = table + 
                GetCriticalTemplate(styleCont, _.findWhere(fail.criticalType, {"type":"melee"}), GetFailIcon("melee")) +
                GetCriticalTemplate(stylePerf, _.findWhere(fail.criticalType, {"type":"range"}), GetFailIcon("range")) +
                GetCriticalTemplate(styleCort,  _.findWhere(fail.criticalType, {"type":"natural"}), GetFailIcon("natural")) +
                GetCriticalTemplate(styleMag, _.findWhere(fail.criticalType, {"type":"magic"}), GetFailIcon("magic"));
    }
    
    table = table + "</table> </br>";

    sendChat(msg.who,table);
  }
  
  function _critico(criticals, rolled){
     return _.find(criticals, function(critical){
        return critical.id == rolled;
    });
  };
  
  function GetCriticalTemplate(style, criticalType, criticalIcon){
    return  "<tr "+ styleTh +"> "+
                "<td><b "+ style +">"+ criticalType.typeDescription +"</b> " + criticalIcon + " </td> "+
            "</tr> "+
            "<tr> "+
                "<td "+ styleTh +"><b "+ style +">"+ criticalType.title +"</b>, "+ criticalType.description +"</td> "+
            "</tr> ";  
  };

  function GetHitIcon(criticalTypeOption){
    switch(criticalTypeOption) {
      case "contusao":
        return "&#x1f528;";
      case "cortante":
        return "&#x1f52a;";
      case "perfuracao":
        return "&#x1f531;";
      case "magico":
        return "&#x1f52e;";      
      default:
        return "&#x1f340;";   
    }
  }

function GetFailIcon(criticalTypeOption){
  switch(criticalTypeOption) {
    case "melee":
      return "&#x1f4aa;";
    case "range":
      return "&#x1f3af;";
    case "natural":
      return "&#x1f43e;";
    case "magic":
      return "&#x1f52e;";      
    default:
      return "&#x1f4a9;";   
  }
}
  
});